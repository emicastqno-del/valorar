'use client'

import { useEffect, useRef, useState } from 'react'
import { Calendar, Award, LayoutGrid, MapPinned } from 'lucide-react'

type Stat = {
  icon: typeof Calendar
  value: number
  suffix: string
  label: string
  isYear?: boolean
}

const stats: Stat[] = [
  { icon: Calendar, value: 2017, suffix: '', label: 'Año de constitución', isYear: true },
  { icon: Award, value: 5, suffix: '+', label: 'Años de experiencia del equipo' },
  { icon: LayoutGrid, value: 8, suffix: '', label: 'Tipos de avalúos' },
  { icon: MapPinned, value: 100, suffix: '%', label: 'Cobertura nacional' },
]

function useCountUp(target: number, start: boolean, duration = 1600) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    let raf: number
    const startTime = performance.now()

    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, target, duration])

  return value
}

function StatItem({ stat, start }: { stat: Stat; start: boolean }) {
  const value = useCountUp(stat.value, start)
  return (
    <div className="flex flex-1 items-center gap-4 px-6 py-7 lg:flex-col lg:items-center lg:gap-3 lg:px-4 lg:text-center">
      <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gold/15 lg:h-12 lg:w-12">
        <stat.icon className="h-5 w-5 text-gold" strokeWidth={1.75} />
      </span>
      <div className="lg:mt-1">
        <p className="font-serif text-2xl text-white lg:text-3xl">
          {value}
          {stat.suffix}
        </p>
        <p className="mt-0.5 text-xs uppercase tracking-wide text-white/60 lg:text-[11px] lg:tracking-wider">
          {stat.label}
        </p>
      </div>
    </div>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative z-10 -mt-14 px-5 lg:-mt-16 lg:px-8">
      <div
        ref={ref}
        className="mx-auto flex max-w-6xl flex-col divide-y divide-white/10 rounded-sm bg-navy shadow-2xl shadow-navy/30 sm:flex-row sm:divide-x sm:divide-y-0"
      >
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} start={start} />
        ))}
      </div>
    </div>
  )
}
