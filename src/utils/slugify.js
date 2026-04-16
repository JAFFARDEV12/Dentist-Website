export function slugify(text) {
  if (!text) return 'practice'
  return text
    .replace(/\r?\n/g, ' ')
    .replace(/"/g, '')
    .replace(/'/g, '')
    .trim()
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 96) || 'practice'
}

export function assignUniqueSlugs(items, key = 'practiceName') {
  const used = new Map()
  return items.map((item) => {
    let base = slugify(item[key])
    if (!base) base = `practice-${item.practiceNo}`
    let slug = base
    let n = 1
    while (used.has(slug)) {
      slug = `${base}-${item.practiceNo}`
      if (used.has(slug)) slug = `${base}-${n++}`
    }
    used.set(slug, true)
    return { ...item, slug }
  })
}
