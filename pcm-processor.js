// Streams mono, signed 16-bit PCM at 16 kHz to the local companion.
class DiamondPCM extends AudioWorkletProcessor {
  constructor(){super();this.samples=[];this.position=0;this.chunk=[];}
  process(inputs){const input=inputs[0]?.[0];if(!input)return true;this.samples.push(...input);const step=sampleRate/16000;while(this.position+1<this.samples.length){const i=Math.floor(this.position),f=this.position-i,v=this.samples[i]*(1-f)+this.samples[i+1]*f;this.chunk.push(Math.max(-32768,Math.min(32767,Math.round(v*32767))));this.position+=step;if(this.chunk.length===320){const out=new Int16Array(this.chunk);this.port.postMessage(out.buffer,[out.buffer]);this.chunk=[];}}const consumed=Math.floor(this.position);this.samples.splice(0,consumed);this.position-=consumed;return true;}
}
registerProcessor('diamond-pcm',DiamondPCM);
