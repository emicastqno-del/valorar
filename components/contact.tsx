'use client'

import { useState, type FormEvent } from 'react'
import Image from 'next/image'
import { MessageCircle, Phone, ArrowRight, Check } from 'lucide-react'
import { WHATSAPP_NUMBER, whatsappHref, phoneHref } from '@/lib/company'

const inmuebleTypes = [
  'Apartamento',
  'Casa',
  'Casa-finca / Finca',
  'Lote / Terreno',
  'Local comercial',
  'Otro',
]

const reasons = [
  'Avalúo',
  'Compra',
  'Venta',
  'Seguro',
  'Consulta general',
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const phone = formData.get('phone') as string
    const email = formData.get('email') as string
    const city = formData.get('city') as string
    const type = formData.get('type') as string
    const reason = formData.get('reason') as string
    const message = formData.get('message') as string

    const lines = [
      'Hola, quisiera solicitar información. Estos son mis datos:',
      '',
      `*Nombre:* ${name}`,
      `*Teléfono:* ${phone}`,
      email && `*Correo:* ${email}`,
      city && `*Ciudad:* ${city}`,
      type && `*Tipo de inmueble:* ${type}`,
      reason && `*Motivo:* ${reason}`,
      message && `*Mensaje:* ${message}`,
    ].filter(Boolean)

    const whatsappMessage = lines.join('\n')

    setSubmitted(true)

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank',
    )
  }

  return (
    <section id="contacto">
      {/* Conversion banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-bg.png"
            alt="Interior de apartamento moderno al anochecer"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/85" />
        </div>

        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center lg:py-24">
          <h2 className="font-serif text-3xl font-medium leading-tight text-balance text-white lg:text-4xl xl:text-5xl">
            ¿Necesita conocer el valor de su inmueble?
          </h2>
          <p className="mt-5 text-pretty text-lg text-white/75">
            Dé el siguiente paso y hable con Valorar Eficaz.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#formulario"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-sm bg-gold px-7 py-4 text-[13px] font-semibold uppercase tracking-widest text-gold-foreground transition-all duration-300 hover:brightness-105 sm:w-auto"
            >
              Solicitar un avalúo
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-white px-7 py-4 text-[13px] font-semibold uppercase tracking-widest text-navy transition-all duration-300 hover:bg-white/90 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Hablar por WhatsApp
            </a>
            <a
              href={phoneHref()}
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/40 px-7 py-4 text-[13px] font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white/10 sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              Llamar ahora
            </a>
          </div>
        </div>
      </div>

      {/* Form */}
      <div id="formulario" className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-4 flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.32em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Formulario de contacto
              <span className="h-px w-10 bg-gold" />
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-balance text-foreground lg:text-4xl">
              Cuéntenos sobre su inmueble
            </h2>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center rounded-sm border border-border bg-background p-12 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/15">
                <Check className="h-7 w-7 text-gold" strokeWidth={2} />
              </span>
              <h3 className="mt-6 font-serif text-2xl text-foreground">
                Casi listo — confirme el envío en WhatsApp
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                Hemos abierto WhatsApp con sus datos ya redactados. Solo dele clic a
                &ldquo;Enviar&rdquo; allí para que su solicitud llegue directamente a Valorar
                Eficaz.
              </p>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3 text-[13px] font-semibold uppercase tracking-widest text-gold-foreground transition-all duration-300 hover:brightness-105"
              >
                <MessageCircle className="h-4 w-4" />
                Abrir WhatsApp de nuevo
              </a>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-sm border border-border bg-background p-6 lg:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Nombre completo" htmlFor="name">
                  <input id="name" name="name" type="text" required className={inputClass} />
                </Field>
                <Field label="Teléfono" htmlFor="phone">
                  <input id="phone" name="phone" type="tel" required className={inputClass} />
                </Field>
                <Field label="Correo electrónico" htmlFor="email">
                  <input id="email" name="email" type="email" required className={inputClass} />
                </Field>
                <Field label="Ciudad" htmlFor="city">
                  <input id="city" name="city" type="text" className={inputClass} />
                </Field>
                <Field label="Tipo de inmueble" htmlFor="type">
                  <select id="type" name="type" className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Seleccione una opción
                    </option>
                    {inmuebleTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Motivo de la solicitud" htmlFor="reason">
                  <select id="reason" name="reason" className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Seleccione una opción
                    </option>
                    {reasons.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-6">
                <Field label="Mensaje" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`${inputClass} resize-none`}
                  />
                </Field>
              </div>

              <button
                type="submit"
                className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-navy px-7 py-4 text-[13px] font-semibold uppercase tracking-widest text-navy-foreground transition-all duration-300 hover:shadow-xl hover:shadow-navy/20"
              >
                Solicitar información
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Sus datos serán utilizados únicamente para atender su solicitud.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

const inputClass =
  'w-full rounded-sm border border-border bg-secondary px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold focus:bg-background'

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="text-[12px] font-semibold uppercase tracking-wider text-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  )
}
