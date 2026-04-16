import { assignUniqueSlugs } from '../utils/slugify.js'
import { PRACTICES_CA } from './practicesCa.js'
import { PRACTICES_US } from './practicesUs.js'

const RAW = [...PRACTICES_US, ...PRACTICES_CA]

export const PRACTICES = assignUniqueSlugs(
  RAW.map((r) => ({
    ...r,
    practiceName: r.practiceName.replace(/\r?\n/g, ' ').replace(/"/g, '').trim(),
    dentistOwner: r.dentistOwner.replace(/\r?\n/g, ' ').replace(/"/g, '').trim(),
  })),
)

export const DEFAULT_SLUG = PRACTICES[0].slug

/** @param {string} slug */
export function getPracticeBySlug(slug) {
  if (!slug) return undefined
  return PRACTICES.find((p) => p.slug === slug)
}

/** Practice number → slug (for your routing / CMS reference) */
export const SLUG_BY_PRACTICE_NO = Object.fromEntries(PRACTICES.map((p) => [p.practiceNo, p.slug]))
