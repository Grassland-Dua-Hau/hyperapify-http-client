# HMAC Authentication Design Document

> Source: https://gate.hyperapify.com/docs/hmac-auth

## Overview

HMAC-SHA256 signature-based authentication for the Hyperapify API gateway (gate.hyperapify.com).

## Required Headers

| Header | Required | Description |
|--------|----------|-------------|
| `Date` | Always | Current UTC time in GMT string format. Server allows up to **300 seconds** clock skew. |
| `Authorization` | Always | Contains keyId, algorithm, signed headers, and base64-encoded signature. |
| `Digest` | When body present | SHA-256 hash of request body. Required only when a request body is present. |

## Supported Algorithms

| Algorithm | Identifier |
|-----------|------------|
| HMAC-SHA1 | `hmac-sha1` |
| HMAC-SHA256 | `hmac-sha256` |
| HMAC-SHA512 | `hmac-sha512` |

This SDK uses `hmac-sha256`.

## Credentials

- **keyId**: API key identifier provided by the gateway
- **secretKey**: UTF-8 encoded secret used for HMAC signing

## Signing Process

### Step 1: Build Signing String

```
signingString = keyId + "\n" + METHOD + " " + requestPath + "\n" + "date: " + gmtTime + "\n"
```

- `keyId`: API key identifier
- `METHOD`: HTTP method (GET, POST, etc.)
- `requestPath`: Full URL path including URL-encoded query string
- `gmtTime`: Current UTC time in GMT string format

### Step 2: Generate Signature

```
signature = Base64(HMAC-SHA256(secretKey, signingString))
```

### Step 3: Build Authorization Header

```
Authorization: Signature keyId="<keyId>",algorithm="hmac-sha256",headers="@request-target date",signature="<signature>"
```

### Step 4: Body Digest (conditional)

When a request body is present, add:

```
Digest: SHA-256=Base64(SHA-256(body))
```

## Reference Implementation (JavaScript)

```javascript
import crypto from "crypto";

const keyId = "your-key-id";
const secretKey = Buffer.from("your-secret-key", "utf-8");
const requestMethod = "GET";

// Build full request path with encoded query params
const params = new URLSearchParams({ query: "search term" });
const baseUrl = new URL("/fdb-hub/fetch_search_posts", "https://gate.hyperapify.com");
baseUrl.search = params.toString();
const requestPath = baseUrl.pathname + baseUrl.search;

// Step 1: Signing string
const gmtTime = new Date().toUTCString();
const signingString =
  keyId + "\n" +
  requestMethod + " " + requestPath + "\n" +
  "date: " + gmtTime + "\n";

// Step 2: HMAC-SHA256 signature
const signature = crypto
  .createHmac("sha256", secretKey)
  .update(signingString, "utf-8")
  .digest();
const signatureBase64 = signature.toString("base64");

// Step 3: Headers
const headers = {
  Date: gmtTime,
  Authorization:
    'Signature keyId="' + keyId + '",' +
    'algorithm="hmac-sha256",' +
    'headers="@request-target date",' +
    'signature="' + signatureBase64 + '"',
};

// Step 4 (optional): Body digest for POST requests
// const body = '{"key": "value"}';
// const bodyDigest = crypto.createHash("sha256")
//   .update(body, "utf-8").digest().toString("base64");
// headers["Digest"] = "SHA-256=" + bodyDigest;

// Send request
const res = await fetch(baseUrl.toString(), {
  method: requestMethod,
  headers,
});
```

## Error Responses

| Status | Cause |
|--------|-------|
| 401 Unauthorized | Invalid signature, keyId, or Date header |
| 400 Bad Request | Missing required headers or malformed content |

## SDK Implementation

This spec is implemented in:

- `src/core/hmac-auth.ts` — Signing logic (signing string, HMAC-SHA256, Authorization header, Digest)
- `src/core/interceptor.ts` — Request interceptor that auto-applies HMAC headers to every request
- `src/core/types.ts` — `HyperapifyConfig` interface (keyId, secretKey)
