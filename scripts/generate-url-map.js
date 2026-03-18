#!/usr/bin/env node

/**
 * Extracts function name → URL path mapping from sdk.gen.ts
 * and writes it to src/services/url-map.ts.
 *
 * Run automatically after openapi-ts generation.
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const sdkPath = resolve('src/api/sdk.gen.ts')
const outputPath = resolve('src/services/url-map.ts')

const content = readFileSync(sdkPath, 'utf-8')

const fnPattern = /export const (\w+)/
const urlPattern = /url: '([^']+)'/

const lines = content.split('\n')
const entries = []
let currentFn = null

for (const line of lines) {
  const fnMatch = fnPattern.exec(line)
  if (fnMatch) {
    currentFn = fnMatch[1]
    const urlMatch = urlPattern.exec(line)
    if (urlMatch) {
      entries.push([currentFn, urlMatch[1]])
      currentFn = null
    }
  } else if (currentFn) {
    const urlMatch = urlPattern.exec(line)
    if (urlMatch) {
      entries.push([currentFn, urlMatch[1]])
      currentFn = null
    }
  }
}

const mapEntries = entries.map(([fn, url]) => `  ['${fn}', '${url}'],`).join('\n')

const output = `export const SDK_URL_MAP = new Map<string, string>([\n${mapEntries}\n])\n`

writeFileSync(outputPath, output, 'utf-8')

console.log(`Generated ${entries.length} entries in src/services/url-map.ts`)
