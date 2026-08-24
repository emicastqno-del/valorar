import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react'
import { company, navLinks, whatsappHref, phoneHref } from '@/lib/company'

const footerNav = navLinks.filter((l) =>
  ['Inicio', 'Nosotros', 'Avalúos', 'Servicios', 'Propiedades', 'Contacto'].includes(
    l.label,
  ),
)

const legal = [
  'Política de privacidad',
  'Tratamiento de datos',
  'Términos y condiciones',
]

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-14 w-auto flex-none items-center">
                <img
                  src="/images/logo.png"
                  alt="Logo Valorar Eficaz"
                  className="h-full w-auto object-contain"
                />
              </span>
              <div>
                <p className="font-serif text-xl font-semibold text-white">VALORAR EFICAZ</p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.28em] text-gold">
                  Avalúos e inmuebles
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Servicios inmobiliarios y valoración de inmuebles.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gold">
              Navegación
            </h3>
            <ul className="mt-5 space-y-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gold">
              Contacto
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              <li>
                <a
                  href={phoneHref()}
                  className="flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 flex-none text-gold" strokeWidth={1.5} />
                  {company.phone || 'Teléfono disponible próximamente'}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 flex-none text-gold" strokeWidth={1.5} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={company.email ? `mailto:${company.email}` : '#formulario'}
                  className="flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 flex-none text-gold" strokeWidth={1.5} />
                  {company.email || 'Correo disponible próximamente'}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 flex-none text-gold" strokeWidth={1.5} />
                {company.city}
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gold">
              Legal
            </h3>
            <ul className="mt-5 space-y-3">
              {legal.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Valorar Eficaz S.A.S. Todos los derechos reservados.</p>
          <p>NIT: {company.nit}</p>
        </div>
      </div>
    </footer>
  )
}
