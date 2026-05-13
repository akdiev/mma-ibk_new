import crypto from 'crypto'

const SECRET = process.env.ADMIN_SECRET ?? 'mma-ibk-dev-secret'
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? 'admin123'
export const COOKIE_NAME = 'admin_token'

export function generateToken(): string {
  return crypto.createHmac('sha256', SECRET).update(ADMIN_PASSWORD).digest('hex')
}

export function isValidToken(token: string): boolean {
  const expected = generateToken()
  try {
    return crypto.timingSafeEqual(Buffer.from(token, 'hex'), Buffer.from(expected, 'hex'))
  } catch {
    return false
  }
}
