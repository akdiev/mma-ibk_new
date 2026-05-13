'use client'

import { useEffect, useState } from 'react'

export default function Loader() {
  const [hiding, setHiding] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setHiding(true), 2700)
    const t2 = setTimeout(() => setGone(true), 3400)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (gone) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center
        transition-opacity duration-700 ${hiding ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      {/* Fist + impact wrapper */}
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Impact glow */}
        <div
          className="absolute top-1/2 left-1/2 w-36 h-36 rounded-full pointer-events-none"
          style={{
            transform: 'translate(-50%, -50%) scale(0)',
            background: 'radial-gradient(circle, rgba(220,50,30,0.9) 0%, rgba(220,80,20,0.5) 40%, transparent 70%)',
            animation: 'impact 0.35s ease-out 1.22s forwards',
          }}
        />
        {/* Fist SVG */}
        <div style={{ animation: 'punch 0.9s cubic-bezier(0.22,1,0.36,1) 0.4s forwards', transform: 'translateX(-180px) rotate(-8deg) scale(0.85)' }}>
          <svg width="110" height="110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Fingers */}
            <rect x="28" y="36" width="14" height="36" rx="7" fill="#e8c89a"/>
            <rect x="42" y="32" width="14" height="40" rx="7" fill="#e8c89a"/>
            <rect x="56" y="32" width="14" height="40" rx="7" fill="#e8c89a"/>
            <rect x="70" y="36" width="12" height="34" rx="6" fill="#e8c89a"/>
            {/* Palm */}
            <rect x="24" y="52" width="60" height="22" rx="9" fill="#d4a870"/>
            <rect x="22" y="46" width="62" height="20" rx="10" fill="#e8c89a"/>
            {/* Thumb */}
            <rect x="18" y="40" width="24" height="20" rx="10" fill="#e8c89a"/>
            <rect x="18" y="40" width="24" height="11" rx="5" fill="#d4a870"/>
            {/* Knuckle lines */}
            <rect x="22" y="58" width="58" height="16" rx="8" fill="#c8a060"/>
            <line x1="42" y1="43" x2="42" y2="60" stroke="#c8a060" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="56" y1="41" x2="56" y2="60" stroke="#c8a060" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="70" y1="44" x2="70" y2="60" stroke="#c8a060" strokeWidth="1.5" strokeLinecap="round"/>
            {/* Wrist band */}
            <rect x="26" y="68" width="56" height="9" rx="4" fill="#dc3214" opacity="0.8"/>
          </svg>
        </div>
      </div>

      {/* Logo */}
      <div
        className="mt-8 font-bebas text-4xl tracking-[6px] text-white"
        style={{ opacity: 0, transform: 'translateY(10px)', animation: 'logoFadeIn 0.5s ease 1.4s forwards' }}
      >
        MMA<span className="text-brand-red">-IBK</span>
      </div>

      {/* Progress bar */}
      <div
        className="mt-4 w-44 h-[2px] bg-white/10 rounded-full overflow-hidden"
        style={{ opacity: 0, animation: 'barAppear 0.3s ease 1.5s forwards' }}
      >
        <div
          className="h-full bg-brand-red"
          style={{ width: 0, animation: 'barGrow 0.9s ease 1.55s forwards' }}
        />
      </div>

      <style>{`
        @keyframes punch {
          0%   { transform: translateX(-180px) rotate(-8deg) scale(0.85); }
          65%  { transform: translateX(12px) rotate(2deg) scale(1.08); }
          75%  { transform: translateX(-6px) rotate(-1deg) scale(1.0); }
          100% { transform: translateX(0px) rotate(0deg) scale(1); }
        }
        @keyframes impact {
          0%   { transform: translate(-50%, -50%) scale(0); opacity: 1; }
          60%  { transform: translate(-50%, -50%) scale(1.5); opacity: 0.9; }
          100% { transform: translate(-50%, -50%) scale(2.2); opacity: 0; }
        }
        @keyframes logoFadeIn {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes barAppear {
          to { opacity: 1; }
        }
        @keyframes barGrow {
          to { width: 100%; }
        }
      `}</style>
    </div>
  )
}
