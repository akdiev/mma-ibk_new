'use client'

import { useEffect, useRef, useState } from 'react'
import { useLang } from './LangContext'

function useCounter(target: number, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!startOnView) { setStarted(true); return }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [startOnView])

  useEffect(() => {
    if (!started) return
    const steps = 60
    const increment = target / steps
    let current = 0
    const interval = setInterval(() => {
      current += increment
      if (current >= target) { setCount(target); clearInterval(interval) }
      else setCount(Math.floor(current))
    }, duration / steps)
    return () => clearInterval(interval)
  }, [started, target, duration])

  return { count, ref }
}

export default function Stats() {
  const { t } = useLang()
  const { count: members, ref: r1 } = useCounter(400)
  const { count: area,    ref: r2 } = useCounter(200)
  const { count: years,   ref: r3 } = useCounter(10)
  const { count: discs,   ref: r4 } = useCounter(5)

  const stats = [
    { ref: r1, value: members, suffix: '+', label: t.stats.members },
    { ref: r2, value: area,    suffix: 'm²', label: t.stats.area },
    { ref: r3, value: years,   suffix: '+',  label: t.stats.years },
    { ref: r4, value: discs,   suffix: '',   label: t.stats.disciplines },
  ]

  return (
    <div className="bg-brand-surface border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            ref={s.ref}
            className={`flex flex-col items-center justify-center py-8 px-4 border-white/5
              ${i % 2 === 0 ? 'border-r' : 'md:border-r'} ${i < 2 ? 'border-b md:border-b-0' : ''} last:border-r-0`}
          >
            <span className="font-bebas text-5xl text-brand-red leading-none">
              {s.value}{s.suffix}
            </span>
            <span className="text-[10px] tracking-[2.5px] uppercase text-white/40 mt-2 font-medium">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
