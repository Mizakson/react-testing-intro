import { describe, it, expect } from "vitest";

describe('someting truthy and falsy', () => {
    it('true to be true', () => {
        expect(true).toBe(true)
    })

    it('false to be false', () => {
        expect(false).toBe(false)
    })
})