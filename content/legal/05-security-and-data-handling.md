# Security & Data Handling

**Your HOA's financial documents stay private, reviewable, and controlled by your board.**

**Last updated:** June 17, 2026

Civentry exists to make sense of sensitive financial documents. We built security into the platform from the start, not as a feature added later. Here is how your data is protected and handled.

---

## Your documents are private

- Uploaded documents are stored in **private storage**, not in public buckets, and are not exposed through public links.
- Access to a document is granted through **short-lived, signed access links** that are time-limited (currently designed to expire within minutes), so links are not meant to be shared or reused.
- Direct storage locations are not exposed in the application interface.
- Supported uploads are validated on arrival, and there are limits on file type and size.

## Only the right people see the right things

- Access is **role-based**, Treasurer/Administrator, Board Member, and Resident roles each see only what their role permits.
- These permissions are designed to be enforced at the database level through application-level access controls, not only in the interface.
- **Each association is isolated** from every other through tenant-based access controls designed to prevent users from accessing another association's data.

## Nothing is shared until your board approves it

- AI-generated summaries and reports are **drafts** until an authorized user reviews and approves them.
- Residents see only **board-approved, resident-safe** content.
- Sensitive information, individual delinquencies, legal matters, vendor negotiations, internal board notes, is treated as board-only and is designed not to be shown to residents under any transparency setting your board configures.

## You control resident transparency

Your board decides exactly what residents can see, choosing from clear transparency levels. Confidential information stays board-only regardless of the level you pick.

## Everything important is logged

Security-relevant events, logins, document uploads, approvals, transparency changes, and more, are recorded in an **audit log** that is append-only in normal application use and is retained for at least 12 months.

## Encryption

- **In transit:** connections use modern TLS (1.3 preferred, 1.2 minimum).
- **At rest:** documents and database records are encrypted at rest (AES-256) by our infrastructure providers.

## Payments are handled by Stripe

We use **Stripe** for payments. **Civentry never collects or stores your full card or bank account numbers.**

## AI processing, disclosed

AI features are powered by Anthropic's Claude API, which processes your documents to produce drafts for your review. Under Anthropic's current commercial API terms, API inputs and outputs are not used to train its models, and Civentry has not opted into any training use. Our providers are bound by data processing agreements. See our AI Disclaimer, Privacy Policy, and Data Processing Agreement.

## Built on trusted infrastructure

We rely on established providers, each with recognized security certifications:

| Provider | Role |
|---|---|
| Supabase | Database, authentication, storage |
| Anthropic | AI analysis |
| LlamaIndex / LlamaParse | Document parsing / text extraction |
| Stripe | Payments |
| Vercel | Hosting |
| Resend | Email |

A more formal description of the measures we apply when handling data on a customer's behalf is set out in the security schedule of our **Data Processing Agreement**.

## Deleting your data

You can request deletion of specific documents at any time, and your data is deleted after your subscription ends, as described in our Privacy Policy. Deletion is permanent.

## Reporting a security concern

If you believe you have found a security vulnerability, or want to report a security concern, please contact us at **hello@civentry.com** with enough detail for us to understand and reproduce the issue. Please give us a reasonable opportunity to investigate and address it before disclosing it publicly, and do not access, alter, or retain data that is not yours while investigating. We appreciate good-faith reports and will not pursue good-faith researchers who follow this guidance.

## Reach our security contact

Security questions or to report a concern: **hello@civentry.com**

---

*This page describes our practices in good faith and is provided for transparency. For full terms, see our Terms of Service, Commercial Terms of Service, Privacy Policy, Data Processing Agreement, AI Disclaimer, and Financial Disclaimer.*
