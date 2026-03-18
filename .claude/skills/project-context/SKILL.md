---
name: project-context
description: Defines architecture, constraints, and coding rules for the Hyperapify TypeScript SDK. Must be loaded before any AI code generation or modification.
---

# Project Context

## Project Overview

- **Project name**: Hyperapify TypeScript SDK
- **Project type**: Node.js library built with TypeScript
- **Purpose**: Provide a strongly typed, developer-friendly HTTP client for interacting with the Hyperapify API
- **Domain**: Developer Tools / SDK

## Core Objective

This project is not a raw generated API client.

The goal is to build a maintainable Node.js SDK that uses an auto-generated OpenAPI client internally, then reorganizes and wraps the generated functions into a cleaner structure so both developers and AI coding tools can understand and use the SDK correctly.

The SDK must:

- use generated API functions as the low-level source of truth
- provide easier-to-read service methods on top of generated endpoints
- centralize HMAC authentication through the HTTP client interceptor layer
- preserve strong type safety
- improve developer experience by hiding raw generated complexity

## Technology Stack

- **Language**: TypeScript
- **Runtime target**: Node.js
- **HTTP client layer**: @hey-api/client-fetch
- **Code generator**: @hey-api/openapi-ts
- **API schema source**: Hyperapify Swagger / OpenAPI
- **Architecture style**: Facade pattern + Service layer + Generated client + Interceptor-based authentication

## High-Level Architecture

Consumer code → Facade client → Service layer → Generated API → HTTP client → Interceptor → Hyperapify API

## Directory Rules

- `src/api/`: Auto-generated (read-only)
- `src/services/`: Service wrappers
- `src/core/`: Client, HTTP setup, interceptor, logger
- `src/types/`: Custom types

## Critical Constraints

- Do not edit generated files
- Do not bypass generated API layer
- Do not implement HMAC manually in services
- Use centralized interceptor for authentication
- All HTTP calls must go through @hey-api/client-fetch

## Service Layer Rules

- Wrap generated API
- Simplify parameters
- Provide clean naming
- Maintain type safety
- Group or automatically map functions from `./src/api/sdk.gen.ts` by domain for ease of use

## Facade Client Rules

- Expose services by domain
- No business logic
- Single entry point
- All SDK configuration (API key, base URL, etc.) passed through facade constructor
- Services lazily instantiated on first access
- Facade client config immutable after creation

## Logging

Each service must log:

- request start
- request success
- request error

## AI Coding Guidance

Always:
- Use service layer
- Use generated API
- Keep architecture intact

Never:
- Modify generated files
- Call raw HTTP
- Duplicate auth logic

## Final Rule

Never touch generated code. Always extend via service layer.
