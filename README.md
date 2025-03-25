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


# Focused AI Initiatives to Drive Automation & Efficiency

## Introduction

I wanted to share a few practical AI-driven automation ideas that could make a big impact with minimal disruption. These **three high-value, low-effort initiatives** are designed to improve efficiency, streamline workflows, and reduce manual work without overcomplicating things.

---

## 1. AI-Powered Forms Aggregation & Virtual Assistant (ServiceNow Optimization)

### Problem
Employees struggle to navigate the extensive number of ServiceNow forms, leading to inefficiencies and repetitive inquiries.

### Solution
- Develop an **AI-powered chatbot** that intelligently directs users to the correct ServiceNow form based on natural language queries.
- Implement **semantic search capabilities** to allow employees to find relevant forms and knowledge base articles effortlessly.
- Automate **frequently asked request processes** to streamline issue resolution.

### Recommended AI Solution
- **Azure OpenAI Service (GPT-4) or Google Vertex AI** for natural language processing and chatbot functionality.
- **AWS Bedrock (Claude or Amazon Titan models)** for enterprise AI integration and governance.
- **Google Gemini AI** if deeper search indexing across organizational knowledge bases is required.

### Impact
✅ Reduces IT service desk workload, enhances self-service capabilities, and improves employee productivity.

---

## 2. Automated IT Ticket Triage & Resolution

### Problem
A significant portion of IT helpdesk tickets involve repetitive issues that could be handled without human intervention.

### Solution
- Deploy **AI-based ticket classification** to categorize incoming tickets and suggest automated solutions.
- Implement an **auto-resolution system** for common issues like password resets, software requests, and access provisioning.
- Route only complex tickets to human agents, improving efficiency and response time.

### Recommended AI Solution
- **Azure OpenAI (GPT-4) or AWS Bedrock (Claude 3)** for ticket classification and NLP automation.
- **Google Vertex AI** for integrating AI into IT service management and ticket analytics.
- **AWS Lambda & Amazon Lex** for chatbot-style ticket handling and automation.

### Impact
✅ Decreases IT support costs, reduces resolution times, and enhances user satisfaction through faster response rates.

---

## 3. AI-Driven Incident & Anomaly Detection

### Problem
Manual monitoring of security and performance logs often leads to delayed responses and missed critical issues.

### Solution
- Utilize **AI-driven anomaly detection** to proactively identify security threats, system failures, and compliance risks.
- Automate **real-time alerting and incident response workflows** to minimize downtime and mitigate risks.
- Implement **machine learning models** to correlate historical patterns and predict potential failures before they occur.

### Recommended AI Solution
- **Google Vertex AI or AWS Bedrock (Titan Models)** for real-time anomaly detection.
- **Azure AI Services (AI anomaly detection models)** for system performance and security event monitoring.
- **AWS SageMaker** for predictive failure analysis and automation.

### Impact
✅ Reduces security risks, improves system reliability, and enhances overall operational resilience.

---

## Next Steps

1. Establish a small AI Task Force to develop proof-of-concept models for these initiatives.
2. Assess potential efficiency gains and prioritize based on business impact.
3. Execute pilot implementations and refine based on real-world performance.

These three initiatives offer a **practical and achievable** way to bring AI into our workflows without overcomplicating things. The focus is on **major cloud providers (AWS, Azure, Google Cloud)** so we get enterprise-ready solutions with strong security and scalability.

That said, if we need a more conversational or general-purpose AI model, we could also explore **OpenAI’s GPT-4-turbo or Anthropic Claude 3** down the line. But for now, keeping things within our existing cloud ecosystem will make implementation smoother.

Would love to chat more and figure out the best way to get started!

---

## Contact

**Best regards,**  
[Your Name]  
[Your Position]  
[Your Contact Information]  

---

### 🤖 P.S.
If AI ever does take over our jobs, at least we can say we automated ourselves out of work in the most efficient way possible! Let’s just make sure we program them to leave us coffee breaks. ☕


# NEXT STEPS
# AI Task Force: Initial Action Plan

Hey team,

As a follow-up to the AI Task Force summary, here's a more focused action plan to guide us through the next steps for the two proposed initiatives. The goal is to build momentum, get early wins, and make sure we’re pulling in the right folks without overwhelming anyone.

---

## 1. AI-Powered Forms Aggregation & Virtual Assistant (ServiceNow Optimization)

### **Goal**
Help employees and teams **quickly get to the forms, templates, or documentation they need** based on *what they’re trying to accomplish*, not just keywords or vague category searches.

Think: someone types “I’m setting up a new container-based architecture in AWS” — and they get directed to the VPC templates, Terraform forms, RBAC guidelines, and relevant architecture docs.

### **What AI Brings to the Table**
- Understands **intent** from natural language, not just exact keywords
- Can **infer context** (e.g. "harness onboarding", "multi-region setup") and recommend related forms, code samples, or SOPs
- Builds a **smarter internal knowledge layer** that continuously improves based on usage

### **Immediate Actions**
- **Stakeholder Sync**: Identify who owns our ServiceNow forms + KB content (likely ServiceNow Admin/ITSM + Infra/DevOps leads).
- **Content Audit**: Create a shortlist of forms and internal docs that people struggle to find or always ask about.
- **Model Design**: Focus on project/task-based queries like:
  - "I want to implement multi-AZ failover in Azure"
  - "How do I set up Harness for our dev teams?"
  - "What's the process for requesting access to shared RDS?"
- **Model Pick**: Start with Azure OpenAI (GPT-4) or Bedrock (Claude) depending on what's easiest to provision.
- **Bot MVP**: Serve links to relevant forms, architecture diagrams, KBs, and templates based on query.

### **Timeline**
- **PoC Dev:** ~2–3 weeks
- **Pilot Rollout:** ~6–8 weeks

### **What We’ll Need**
- Access to ServiceNow, Confluence/Wiki, shared drive locations
- AI access + light UI or Slack/Teams interface (if needed)
- Help from ServiceNow & DevOps SMEs

### **Expected Wins**
- Way fewer Slack pings like “where’s the form for X?”
- Onboarding goes faster (especially for new team members)
- Builds toward a **searchable, intelligent knowledge layer** for the org

---

## 2. AI-Driven Incident & Anomaly Detection

### **Goal**
Catch issues before they snowball — using AI to look across all our cloud telemetry and surface problems a human might miss until it’s too late.

### **What AI Brings to the Table**
- Goes beyond threshold-based alerts (CPU > 90%) and finds **anomalous behavior patterns** across metrics/logs
- Can **learn over time** what normal looks like for our workloads (e.g. weekend usage drops, backup timings, etc.)
- **Combines multiple data sources** to find patterns we wouldn’t normally correlate manually (e.g. config drift + unusual access + cost spike)

### **Immediate Actions**
- **Tooling Review**: We're already using CloudHealth + Dome9. Let’s validate their AI/ML capabilities and identify what gaps still exist.
- **Cloud Native Hook-ins**:
  - AWS CloudWatch, GuardDuty, and Security Hub
  - Azure Monitor, Sentinel
  - GCP Operations Suite
- **Anomaly Targets**: Pick 2–3 real scenarios we’d want to catch:
  - Unexpected cost spike in one region
  - Access pattern anomalies (e.g. login from new IP + sudden privilege changes)
  - Deployment pipeline triggering new error pattern
- **Data Access Strategy**: Identify where telemetry/logs are aggregated and what we can stream into an ML model or detection layer

### **Timeline**
- **PoC Dev:** ~2–4 weeks
- **Pilot Rollout:** ~8–10 weeks

### **What We’ll Need**
- CloudOps, Security, and DevOps SMEs
- Access to telemetry/logs (CloudWatch, Dome9, etc.)
- Platform for model hosting (SageMaker, Vertex AI, etc.)

### **Expected Wins**
- Fewer 3 a.m. Slack escalations
- MTTR goes down, confidence goes up
- Paves the way for **real predictive ops**, not just reactive cleanup

---

Let me know if you'd like this turned into a slide or visual tracker – happy to prep that too!

— Shabari

