# Formats

Reference for **common value shapes** in APIs and domain models. Concrete limits (lengths, requiredness) are still defined per entity; here we only document the **shape** of the value.

## Email {#email}

- Format aligned with **RFC 5322** in its practical product usage (`local@domain`).
- In JSON payloads it is usually a **UTF-8 string**.
- Recommended server normalisation: **trim**, **case-insensitive** domain comparison per product policy.

## Phone {#phone}

- String with the number in the product-agreed format; **E.164** is the usual API standard (`+[country code][number]`, no spaces).
  - Example: `+34900123456`
