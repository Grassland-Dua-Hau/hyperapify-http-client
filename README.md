# hyperapify-http-client

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20%2B-green?logo=node.js)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A TypeScript HTTP client library for the [Hyperapify API](https://gate.hyperapify.com) with HMAC authentication. Auto-generated from OpenAPI specs via [@hey-api/openapi-ts](https://hey-api.dev), wrapped in a developer-friendly facade.

## Installation

```bash
npm install hyperapify-http-client
```

## Quick Start

```typescript
import { HyperapifyClient } from 'hyperapify-http-client'

// Initialize the client (singleton)
const client = HyperapifyClient.create({
  keyId: 'your-api-key-id',
  secretKey: 'your-secret-key',
})

// Access a domain service
const tiktok = client.service('tiktok')
const result = await tiktok.fetchPostDetail({ query: { aweme_id: '7123456789' } })

console.log(result)
```

## Client Initialization

### Create

```typescript
const client = HyperapifyClient.create({
  keyId: 'your-api-key-id',     // Required: API key identifier
  secretKey: 'your-secret-key', // Required: HMAC signing secret
  baseUrl: 'https://gate.hyperapify.com', // Optional: defaults to production
})
```

The client is a **singleton** - calling `create()` more than once throws an error.

### Get Instance

After initialization, retrieve the client anywhere in your app:

```typescript
const client = HyperapifyClient.getInstance()
```

### Authentication

HMAC-SHA256 authentication is handled automatically via a request interceptor. Every request gets:

- `Date` header (UTC timestamp, 300s clock skew tolerance)
- `Authorization` header (`Signature keyId="...",algorithm="hmac-sha256",headers="@request-target date",signature="..."`)
- `Digest` header (SHA-256 body hash, only for requests with a body)

No manual auth setup needed.

## Using SDK Methods

### Access by Domain

All API methods are grouped by platform domain:

```typescript
const client = HyperapifyClient.getInstance()

// Access domain services
const tiktok = client.service('tiktok')
const douyin = client.service('douyin')
const instagram = client.service('instagram')
const youtube = client.service('youtube')
```

### List Available Domains

```typescript
console.log(client.domains)
// ['tiktok', 'douyin', 'instagram', 'youtube', 'xiaohongshu', 'weibo', ...]
```

### Available Domains

| Domain | Platform | Functions |
|--------|----------|-----------|
| `tiktok` | TikTok | 204 |
| `douyin` | Douyin | 247 |
| `instagram` | Instagram | 83 |
| `xiaohongshu` | Xiaohongshu | 68 |
| `weibo` | Weibo | 64 |
| `bilibili` | Bilibili | 41 |
| `youtube` | YouTube | 37 |
| `kuaishou` | Kuaishou | 33 |
| `zhihu` | Zhihu | 32 |
| `linkedin` | LinkedIn | 25 |
| `reddit` | Reddit | 24 |
| `fdbHub` | Facebook Data Hub | 19 |
| `pipixia` | Pipixia | 17 |
| `sora2` | Sora2 | 17 |
| `lemon8` | Lemon8 | 16 |
| `twitter` | Twitter | 13 |
| `threads` | Threads | 11 |
| `wechatMp` | WeChat Official | 10 |
| `wechatChannels` | WeChat Channels | 9 |

### Example: TikTok

```typescript
const tiktok = client.service('tiktok')

// Fetch post detail
const post = await tiktok.fetchPostDetail({
  query: { aweme_id: '7123456789' },
})

// Fetch user profile
const user = await tiktok.fetchUserProfile({
  query: { unique_id: 'username' },
})

// Search videos
const videos = await tiktok.fetchSearchVideo({
  query: { keyword: 'cooking', count: 20 },
})

// Fetch trending posts
const trending = await tiktok.fetchTrendingPost()
```

### Example: Instagram

```typescript
const instagram = client.service('instagram')

// Fetch user profile
const profile = await instagram.fetchUserProfile({
  query: { username: 'example' },
})
```

### Example: YouTube

```typescript
const youtube = client.service('youtube')

// Get video subtitles
const subtitles = await youtube.apiGetVideoSubtitles({
  query: { video_id: 'dQw4w9WgXcQ' },
})
```

### Example: Facebook Data Hub

```typescript
const fdb = client.service('fdbHub')

// Get Facebook page ID
const page = await fdb.getFdbHubGetFacebookPageId({
  query: { page_url: 'https://facebook.com/example' },
})
```

## Structured Logging

All service calls are automatically logged as JSON:

```json
{"timestamp":"2026-03-18T10:00:00.000Z","level":"info","service":"tiktok","method":"fetchPostDetail","message":"request start"}
{"timestamp":"2026-03-18T10:00:01.234Z","level":"info","service":"tiktok","method":"fetchPostDetail","message":"request success","duration":1234}
```

Error responses are logged at `error` level with the error object attached.

## Architecture

```
Consumer code
  -> HyperapifyClient (Facade, Singleton)
    -> Service Registry (domain-grouped, logged)
      -> Generated API (sdk.gen.ts, 999 functions)
        -> @hey-api/client-fetch (HTTP client)
          -> HMAC Interceptor (auto-signs every request)
            -> Hyperapify API (gate.hyperapify.com)
```

## Development

```bash
# Regenerate API client from OpenAPI specs
npm run openapi-ts

# Build
npm run build

# Lint
npm run check

# Full quality check (lint + unused exports + circular deps + build)
npm run check:code
```

## License

MIT
