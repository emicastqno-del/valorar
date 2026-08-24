'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks } from '@/lib/company'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        solid
          ? 'border-b border-white/10 bg-navy/95 backdrop-blur supports-[backdrop-filter]:bg-navy/80'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <a href="#inicio" className="group flex flex-none items-center gap-3">
          <span className="flex h-14 w-auto flex-none items-center lg:h-16">
            <img
              src="/images/logo.png"
              alt="Logo Valorar Eficaz"
              className="h-full w-auto object-contain"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold tracking-wide text-white lg:text-xl">
              VALORAR EFICAZ
            </span>
            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.28em] text-gold">
              Avalúos e inmuebles
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-5 2xl:flex">
          {navLinks.map((link) => (
            <li key={link.href} className="flex-none">
              <a
                href={link.href}
                className="relative whitespace-nowrap text-[13px] font-medium uppercase tracking-wide text-white/80 transition-colors hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-none items-center gap-3">
          <a
            href="#contacto"
            className="hidden whitespace-nowrap rounded-sm bg-gold px-5 py-2.5 text-[12px] font-semibold uppercase tracking-widest text-gold-foreground transition-all duration-300 hover:brightness-105 hover:shadow-lg hover:shadow-gold/20 sm:inline-block"
          >
            Solicitar avalúo
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-sm text-white 2xl:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-white/10 bg-navy transition-[max-height] duration-500 ease-in-out 2xl:hidden',
          open ? 'max-h-[560px]' : 'max-h-0',
        )}
      >
        <ul className="flex flex-col px-5 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/5 py-3 text-sm font-medium uppercase tracking-wide text-white/85 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="block rounded-sm bg-gold px-5 py-3 text-center text-[12px] font-semibold uppercase tracking-widest text-gold-foreground"
            >
              Solicitar avalúo
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
