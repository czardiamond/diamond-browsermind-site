# BrowserMind — by Diamond

A premium, responsive browser-command playground with a sample workspace.

**This public playground is deterministic, not an AI model or live browser automation. It cannot control other websites.** It needs no API key. Optional speech recognition and spoken replies depend on browser support; browser speech recognition may send audio to the browser provider. Use text if preferred.

## Try it

[Open BrowserMind](https://czardiamond.github.io/diamond-browsermind-site/). Try searching the fictional projects, opening project details, scrolling, or resetting the workspace. Sensitive-action requests are blocked in the sample command parser.

To run locally, serve this folder with `python3 -m http.server 8000` and visit `http://localhost:8000`. The local-agent setup panel is informational: no backend, credentials, upstream Python code, or Gemini companion is included in this repository. The experimental Gemini/Chrome companion is maintained separately and privately; its live path remains unverified end to end.

## Credit

Inspired by [Annie Wang’s “How voice AI agents control your browser” on Google Cloud Tech](https://youtu.be/xDL5DFMo1-Y), with [the creator’s BrowserMind source](https://github.com/cuppibla/browsermind) credited for the tutorial architecture. This repository contains Diamond’s personalized static interface and deterministic playground, prepared with AI assistance—not the upstream backend or original frontend. The reviewed upstream README stated MIT but had no LICENSE file; no license grant for that upstream code is assumed here, and that code is not redistributed in this repository.

Manrope is included under the SIL Open Font License; see [Manrope-OFL.txt](Manrope-OFL.txt).

## Publishing

GitHub Pages serves only the static files at this repository’s root. Never add API keys, `.env` files, the upstream backend, or the private companion here.
