'use client'

import { useEffect, useState } from 'react'

export function PageEffects() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let ticking = false

    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0)
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed left-0 top-0 z-[100] h-[2px] origin-left bg-gold shadow-[0_0_14px_rgba(240,196,62,.55)]"
        style={{ width: `${progress}%` }}
      />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <span className="ambient-float absolute -left-24 top-[28%] h-64 w-64 rounded-full bg-gold/5 blur-3xl" />
        <span className="ambient-float-delayed absolute -right-28 top-[58%] h-80 w-80 rounded-full bg-navy/5 blur-3xl" />
      </div>
    </>
  )
}
