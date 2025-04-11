# Oshop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## 📦 Azure Services Required (Fully Private Setup)

| Service | Purpose | Network Scope | Notes |
|--------|---------|----------------|-------|
| **Azure OpenAI (Private Endpoint)** | LLM model for text analysis & suggestions | ✅ Private VNet Only | Requires Microsoft to enable OpenAI access in private deployment mode |
| **Azure App Service (Premium V3 or Isolated)** | Hosting the Node/React frontend/backend | ✅ Deploy inside App Service Environment (ASE) | ASE allows hosting entire app in VNet, fully private |
| **Azure Blob Storage** | File upload & retrieval (diagrams/docs) | ✅ Private endpoint | Store diagrams, PDFs, raw README, etc. |
| **Azure Cognitive Services (Form Recognizer)** | Extracts content from architecture diagrams | ✅ Private endpoint | Needed only for PDFs/PNGs; optional if all input is raw text |
| **Azure Key Vault** | Store secrets (e.g., OpenAI keys, service credentials) | ✅ Private endpoint | Attach private DNS zone and enable firewall integration |
| **Azure VNet + Subnets** | Host the services privately | Core Infra | Must be configured for private DNS resolution |
| **Azure Private DNS Zones** | Required for routing OpenAI, Blob, Cognitive Services, etc. | ✅ Internal only | Must be linked to VNet |
| **Optional: Azure Log Analytics / Application Insights** | Track activity & feedback | ❌ Optional but helpful | If allowed, can use private Log Analytics workspace |

---

## 🔒 Network Requirements

| Requirement | Details |
|-------------|---------|
| **No Internet** | All services must be deployed with private endpoints; public IPs disabled |
| **DNS Resolution** | You’ll need a custom DNS forwarder or use Azure Private Resolver to resolve Microsoft service FQDNs (e.g., `openai.azure.com`, `blob.core.windows.net`) |
| **No External APIs** | Can’t call out to GitHub, Confluence, etc. — all data ingestion must be manual or preloaded into Blob/Key Vault |
| **No NAT Gateway or UDRs** | Services cannot reach internet, so any traffic to OpenAI, Form Recognizer must go through private endpoints inside VNet |
| **No Public Webhooks or Ingress** | UI must be accessible via internal IP or through VPN/ExpressRoute only |

---

## 📊 Expected Wins
- Cuts **intake time per request** from 15–30 minutes to <5 minutes
- Improves intake **quality and structure** (reducing follow-ups and rework)
- Surfaces **internal standards** earlier in the request lifecycle
- Adds value even before review by offering **automated architecture feedback**
- Demonstrates **quick value to leadership** (visible, demo-able win)

## 📅 Timeline & Action Plan

| Phase | Time | Activities |
|-------|------|------------|
| **Week 1–2** | Requirements & Design | Identify SN ticket fields, define upload constraints, finalize data sources, sketch UI |
| **Week 3** | Ticket Automation | Build ServiceNow ticket submission pipeline + assign group logic |
| **Week 4** | AI Intent Parsing | Set up prompt logic for parsing requests into structured fields |
| **Week 5** | KB Linking + Document Inference | Add RAG layer and basic upload parsing (PDF text extraction, diagram OCR if possible) |
| **Week 6** | MVP UI & Internal Pilot | Launch simple UI, test internally with real intake requests, collect feedback |


— Shabari
