'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    if (res.ok) {
      router.push('/admin/dashboard')
    } else {
      setError('Pogrešan password.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <div className="font-bebas text-3xl tracking-[4px] text-white mb-1">
            MMA<span className="text-brand-red">-IBK</span>
          </div>
          <p className="text-white/30 text-xs tracking-[3px] uppercase">Admin Panel</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#111] border border-white/[0.07] rounded-[3px] p-8 space-y-5">
          <div>
            <label className="block text-[10px] tracking-[2px] uppercase text-white/40 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              autoFocus
              className="w-full bg-[#0d0d0d] border border-white/10 rounded-[2px] px-4 py-3
                         text-white text-sm placeholder-white/20 focus:outline-none focus:border-brand-red/60 transition-colors"
            />
          </div>
          {error && <p className="text-red-400 text-xs">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-red hover:bg-[#bf2a0f] text-white text-xs font-semibold
                       tracking-[2px] uppercase px-6 py-3 rounded-[2px] transition-colors
                       disabled:opacity-50 cursor-pointer"
          >
            {loading ? 'Prijavljivanje...' : 'Prijavi se'}
          </button>
        </form>

        <p className="text-center text-white/15 text-[10px] mt-6 tracking-wider">
          <a href="/" className="hover:text-white/40 transition-colors">← Nazad na sajt</a>
        </p>
      </div>
    </div>
  )
}
