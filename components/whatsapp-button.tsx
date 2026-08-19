'use client'

import { MessageCircle } from 'lucide-react'
import { whatsappHref } from '@/lib/company'

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar por WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-gold p-4 text-gold-foreground shadow-xl shadow-navy/25 transition-all duration-300 hover:pr-6 sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-6 w-6 flex-none" strokeWidth={2} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold uppercase tracking-wide opacity-0 transition-all duration-300 group-hover:max-w-[160px] group-hover:opacity-100">
        Hablar por WhatsApp
      </span>
    </a>
  )
}
