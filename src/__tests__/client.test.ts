import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

// Mock the generated API client
vi.mock('../api/client.gen.js', () => ({
  client: {
    setConfig: vi.fn(),
    interceptors: {
      request: {
        use: vi.fn(),
      },
    },
  },
}))

// Mock the SDK module (empty – no real functions needed for these tests)
vi.mock('../api/sdk.gen.js', () => ({}))

// Mock the HMAC interceptor (we don't test auth here)
vi.mock('../core/interceptor.js', () => ({
  registerHmacInterceptor: vi.fn(),
}))

// Mock logger to suppress console output during tests
vi.mock('../core/logger.js', () => ({
  createLogger: () => ({
    info: vi.fn(),
    error: vi.fn(),
  }),
}))

// Mock the service registry (no real SDK functions exist in tests)
vi.mock('../services/registry.js', () => ({
  buildServiceMap: vi.fn(() => ({})),
}))

// Mock the URL map
vi.mock('../services/url-map.js', () => ({
  SDK_URL_MAP: new Map(),
}))

import { client as apiClient } from '../api/client.gen.js'
import { HyperapifyClient } from '../client.js'

describe('HyperapifyClient', () => {
  beforeEach(() => {
    HyperapifyClient.resetInstance()
    vi.clearAllMocks()
  })

  afterEach(() => {
    HyperapifyClient.resetInstance()
  })

  describe('create', () => {
    it('uses the provided baseUrl when specified', () => {
      HyperapifyClient.create({
        keyId: 'test-key',
        secretKey: 'test-secret',
        baseUrl: 'https://custom.example.com',
      })

      expect(apiClient.setConfig).toHaveBeenCalledWith({
        baseUrl: 'https://custom.example.com',
      })
    })

    it('defaults baseUrl to https://gate.hyperapify.com when not provided', () => {
      HyperapifyClient.create({
        keyId: 'test-key',
        secretKey: 'test-secret',
      })

      expect(apiClient.setConfig).toHaveBeenCalledWith({
        baseUrl: 'https://gate.hyperapify.com',
      })
    })

    it('returns a HyperapifyClient instance', () => {
      const client = HyperapifyClient.create({
        keyId: 'test-key',
        secretKey: 'test-secret',
      })

      expect(client).toBeInstanceOf(HyperapifyClient)
    })

    it('throws when create is called a second time', () => {
      HyperapifyClient.create({ keyId: 'k', secretKey: 's' })

      expect(() => HyperapifyClient.create({ keyId: 'k2', secretKey: 's2' })).toThrow(
        'HyperapifyClient is already initialized'
      )
    })
  })

  describe('getInstance', () => {
    it('returns the same instance created by create()', () => {
      const created = HyperapifyClient.create({ keyId: 'k', secretKey: 's' })
      const retrieved = HyperapifyClient.getInstance()

      expect(retrieved).toBe(created)
    })

    it('throws when getInstance is called before create()', () => {
      expect(() => HyperapifyClient.getInstance()).toThrow('HyperapifyClient is not initialized')
    })
  })

  describe('resetInstance', () => {
    it('allows create() to succeed again after reset', () => {
      HyperapifyClient.create({ keyId: 'k', secretKey: 's' })
      HyperapifyClient.resetInstance()

      expect(() => HyperapifyClient.create({ keyId: 'k2', secretKey: 's2' })).not.toThrow()
    })
  })

  describe('service', () => {
    it('throws for an unknown domain', () => {
      const client = HyperapifyClient.create({ keyId: 'k', secretKey: 's' })

      expect(() => client.service('nonexistent')).toThrow('Unknown service domain')
    })
  })

  describe('domains', () => {
    it('returns an empty array when no services are registered', () => {
      const client = HyperapifyClient.create({ keyId: 'k', secretKey: 's' })

      expect(client.domains).toEqual([])
    })
  })
})
