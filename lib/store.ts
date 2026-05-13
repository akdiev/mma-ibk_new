/**
 * Storage abstraction:
 *  - Production (Vercel): uses Vercel KV (Upstash Redis)
 *    Requires KV_REST_API_URL + KV_REST_API_TOKEN env vars
 *    → Vercel Dashboard > Storage > Create KV Store > Connect to project
 *
 *  - Local dev: uses JSON files in /data directory
 */

const USE_KV = !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN)

// ── KV (Vercel / Upstash) ─────────────────────────────────────────────────

async function kvRead<T>(key: string, fallback: T): Promise<T> {
  const { kv } = await import('@vercel/kv')
  const val = await kv.get<T>(key)
  return val ?? fallback
}

async function kvWrite<T>(key: string, data: T): Promise<void> {
  const { kv } = await import('@vercel/kv')
  await kv.set(key, data)
}

// ── File system (local dev) ───────────────────────────────────────────────

async function fsRead<T>(filename: string, fallback: T): Promise<T> {
  const fs = await import('fs/promises')
  const path = await import('path')
  try {
    const raw = await fs.readFile(path.join(process.cwd(), 'data', filename), 'utf-8')
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

async function fsWrite<T>(filename: string, data: T): Promise<void> {
  const fs = await import('fs/promises')
  const path = await import('path')
  const dir = path.join(process.cwd(), 'data')
  await fs.mkdir(dir, { recursive: true })
  await fs.writeFile(path.join(dir, filename), JSON.stringify(data, null, 2), 'utf-8')
}

// ── Public API ────────────────────────────────────────────────────────────

// filename doubles as the KV key (e.g. "events.json" → key "events.json")
export async function readJSON<T>(filename: string, fallback: T): Promise<T> {
  return USE_KV ? kvRead(filename, fallback) : fsRead(filename, fallback)
}

export async function writeJSON<T>(filename: string, data: T): Promise<void> {
  return USE_KV ? kvWrite(filename, data) : fsWrite(filename, data)
}
