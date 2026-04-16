/** Display-friendly phone from mixed input; preserves international feel for US/CA */
export function formatPhoneDisplay(raw, location) {
  if (!raw || typeof raw !== 'string') return ''
  const d = raw.replace(/\D/g, '')
  if (!d) return raw.trim()

  if (location === 'USA') {
    if (d.length === 11 && d[0] === '1') {
      const r = d.slice(1)
      return `+1 (${r.slice(0, 3)}) ${r.slice(3, 6)}-${r.slice(6)}`
    }
    if (d.length === 10) {
      return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`
    }
  }

  if (location === 'Canada' && d.length === 10) {
    return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`
  }

  return raw.replace(/\s+/g, ' ').trim()
}
