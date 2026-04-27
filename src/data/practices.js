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

/**
 * Extra marketing slugs requested for doctor-specific landing URLs.
 * These keep existing 70 routes intact and add alias routes that point to
 * specific doctor identities/images.
 */
const PRACTICE_SLUG_ALIASES = [
  {
    ...PRACTICES[0],
    slug: 'ana-pesaturo',
    practiceName: 'Ana Pesaturo',
    dentistOwner: 'Ana Pesaturo',
  },
  {
    ...PRACTICES[0],
    slug: 'dave-king',
    practiceName: 'Dave King',
    dentistOwner: 'Dave King',
  },
  {
    ...PRACTICES[0],
    slug: 'dr-julia-michelin',
    practiceName: 'Dr Julia Michelin',
    dentistOwner: 'Dr Julia Michelin',
  },
  {
    ...PRACTICES[0],
    slug: 'dr-whitefield-afaaid-aaacd',
    practiceName: 'Dr Whitefield',
    dentistOwner: 'Dr Whitefield',
  },
  {
    ...PRACTICES[0],
    slug: 'edward-j-zuckerberg-dds-fagd',
    practiceName: 'Edward J Zuckerberg',
    dentistOwner: 'Edward J Zuckerberg',
  },
  {
    ...PRACTICES[0],
    slug: 'maryjane-hanlon',
    practiceName: 'Maryjane Hanlon',
    dentistOwner: 'Maryjane Hanlon',
  },
  {
    ...PRACTICES[0],
    slug: 'paul-farsai-dmd-mphfacd-fpfa',
    practiceName: 'Paul Farsai',
    dentistOwner: 'Paul Farsai',
  },
]

const PRACTICES_WITH_ALIASES = [...PRACTICES, ...PRACTICE_SLUG_ALIASES]

/** @param {string} slug */
export function getPracticeBySlug(slug) {
  if (!slug) return undefined
  const normalized = String(slug).trim().toLowerCase()
  return PRACTICES_WITH_ALIASES.find((p) => p.slug.toLowerCase() === normalized)
}

/** Practice number → slug (for your routing / CMS reference) */
export const SLUG_BY_PRACTICE_NO = Object.fromEntries(PRACTICES.map((p) => [p.practiceNo, p.slug]))
