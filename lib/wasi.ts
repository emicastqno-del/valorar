// Conexión con la API de Wasi (https://api.wasi.co/docs/en/guide/properties.html).
// Se ejecuta SOLO en el servidor: las credenciales viven en variables de entorno
// (WASI_ID_COMPANY y WASI_TOKEN) y nunca llegan al navegador.

export type WasiProperty = {
  id: number
  title: string
  city: string
  region: string
  salePrice: string
  bedrooms: string
  bathrooms: string
  garages: string
  area: string
  areaUnit: string
  image: string | null
}

type RawProperty = Record<string, unknown>

const str = (v: unknown) => (v === null || v === undefined ? '' : String(v))

function normalize(raw: RawProperty): WasiProperty | null {
  const id = Number(raw.id_property)
  if (!id) return null

  const main = raw.main_image as Record<string, unknown> | undefined

  return {
    id,
    title: str(raw.title),
    city: str(raw.city_label),
    region: str(raw.region_label),
    salePrice: str(raw.sale_price_label),
    bedrooms: str(raw.bedrooms),
    bathrooms: str(raw.bathrooms),
    garages: str(raw.garages),
    area: str(raw.area),
    areaUnit: str(raw.unit_area_label),
    image: main ? str(main.url_big || main.url) || null : null,
  }
}

/**
 * Devuelve los inmuebles propios, en venta y disponibles, desde Wasi.
 * Devuelve null si faltan las credenciales o si la API falla (la página
 * entonces muestra las propiedades de referencia).
 */
export async function getWasiProperties(limit = 5): Promise<WasiProperty[] | null> {
  const idCompany = process.env.WASI_ID_COMPANY
  const token = process.env.WASI_TOKEN
  if (!idCompany || !token) return null

  const params = new URLSearchParams({
    id_company: idCompany,
    wasi_token: token,
    for_sale: 'true',
    id_availability: '1', // Disponible
    scope: '1', // solo inmuebles propios de la empresa
    short: 'true', // sin galerías ni características (respuesta liviana)
    take: String(limit),
    order_by: 'created_at',
    order: 'desc',
  })

  try {
    const res = await fetch(`https://api.wasi.co/v1/property/search?${params}`, {
      next: { revalidate: 3600 }, // se actualiza cada hora
      signal: AbortSignal.timeout(8000),
    })
    if (!res.ok) return null

    const data = (await res.json()) as Record<string, unknown>
    if (data.status !== 'success') return null

    // La API devuelve los inmuebles con llaves numéricas ("0", "1", ...)
    const items = Object.entries(data)
      .filter(([key]) => /^\d+$/.test(key))
      .map(([, value]) => normalize(value as RawProperty))
      .filter((p): p is WasiProperty => p !== null)

    return items.length > 0 ? items : null
  } catch {
    return null
  }
}
