/**
 * Central registry for banner doctor photos (all practices in `PRACTICES` + custom aliases).
 */

import { PRACTICES } from './practices.js'
import doctorProfileSvg from '../assets/doctors/doctor-img-1.png'
import doctorProfilePng from '../assets/doctors/doctor-img.png'
import placeholderDoctor from '../assets/doctors/AI-Doctor-img.webp'
import anaPesaturo from '../assets/doctors/Prospect Pics/Ana Pesaturo.png'
import daveKing from '../assets/doctors/Prospect Pics/Dave King.png'
import drJuliaMichelin from '../assets/doctors/Prospect Pics/Dr. Julia Michelin.png'
import drMarkWhitefield from '../assets/doctors/Prospect Pics/Dr. Mark Whitefield, AFAAID, AAACD.png'
import edwardJZuckerberg from '../assets/doctors/Prospect Pics/Edward J. Zuckerberg, D.D.S.,F.A.G.D..png'
import maryJaneHanlon from '../assets/doctors/Prospect Pics/maryjane-hanlon.webp'
import paulFarsai from '../assets/doctors/Prospect Pics/Paul Farsai DMD, MPH, FACD, FPFA.png'

export const FALLBACK_DOCTOR_IMAGE = placeholderDoctor

const FIRST_HALF_ASSET = doctorProfileSvg
const SECOND_HALF_ASSET = doctorProfilePng
const HALF = Math.ceil(PRACTICES.length / 2)

/** Only the 7 requested custom doctor landing slugs */
export const DOCTOR_IMAGE_IMPORT_OVERRIDES = {
  'ana-pesaturo': anaPesaturo,
  'dave-king': daveKing,
  'dr-julia-michelin': drJuliaMichelin,
  'dr-whitefield-afaaid-aaacd': drMarkWhitefield,
  'edward-j-zuckerberg-dds-fagd': edwardJZuckerberg,
  'maryjane-hanlon': maryJaneHanlon,
  'paul-farsai-dmd-mphfacd-fpfa': paulFarsai,
}

const PROSPECT_IMAGES_BY_DOCTOR_NAME = {
  'ana pesaturo': { image: anaPesaturo, filename: 'Ana Pesaturo.png' },
  'dave king': { image: daveKing, filename: 'Dave King.png' },
  'dr julia michelin': { image: drJuliaMichelin, filename: 'Dr. Julia Michelin.png' },
  'dr mark whitefield afaaid aaacd': {
    image: drMarkWhitefield,
    filename: 'Dr. Mark Whitefield, AFAAID, AAACD.png',
  },
  'edward j zuckerberg d d s f a g d': {
    image: edwardJZuckerberg,
    filename: 'Edward J. Zuckerberg, D.D.S.,F.A.G.D..png',
  },
  'maryjane hanlon': { image: maryJaneHanlon, filename: 'maryjane-hanlon.webp' },
  'paul farsai dmd mph facd fpfa': {
    image: paulFarsai,
    filename: 'Paul Farsai DMD, MPH, FACD, FPFA.png',
  },
}

function normalizeDoctorName(value) {
  return (value ?? '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

function getProspectMatch(practice) {
  const owner = normalizeDoctorName(practice.dentistOwner)
  const practiceName = normalizeDoctorName(practice.practiceName)
  return PROSPECT_IMAGES_BY_DOCTOR_NAME[owner] ?? PROSPECT_IMAGES_BY_DOCTOR_NAME[practiceName]
}

function resolveImageForPractice(index, slug) {
  const override = DOCTOR_IMAGE_IMPORT_OVERRIDES[slug]
  if (override) return override
  return index < HALF ? FIRST_HALF_ASSET : SECOND_HALF_ASSET
}

export const DOCTOR_IMAGE_FILENAME_BY_SLUG = Object.fromEntries([
  ...PRACTICES.map((p, i) => [
    p.slug,
    DOCTOR_IMAGE_IMPORT_OVERRIDES[p.slug] != null
      ? 'import-override'
      : getProspectMatch(p)?.filename ?? (i < HALF ? 'doctor-profile.svg' : 'doctor-profile-1.png'),
  ]),
  ['ana-pesaturo', 'Ana Pesaturo.png'],
  ['dave-king', 'Dave King.png'],
  ['dr-julia-michelin', 'Dr. Julia Michelin.png'],
  ['dr-whitefield-afaaid-aaacd', 'Dr. Mark Whitefield, AFAAID, AAACD.png'],
  ['edward-j-zuckerberg-dds-fagd', 'Edward J. Zuckerberg, D.D.S.,F.A.G.D..png'],
  ['maryjane-hanlon', 'maryjane-hanlon.webp'],
  ['paul-farsai-dmd-mphfacd-fpfa', 'Paul Farsai DMD, MPH, FACD, FPFA.png'],
])

export const DOCTOR_IMAGES_BY_SLUG = Object.fromEntries([
  ...PRACTICES.map((p, i) => {
    const override = DOCTOR_IMAGE_IMPORT_OVERRIDES[p.slug]
    const prospect = getProspectMatch(p)?.image
    return [p.slug, override ?? prospect ?? resolveImageForPractice(i, p.slug)]
  }),
  ['ana-pesaturo', anaPesaturo],
  ['dave-king', daveKing],
  ['dr-julia-michelin', drJuliaMichelin],
  ['dr-whitefield-afaaid-aaacd', drMarkWhitefield],
  ['edward-j-zuckerberg-dds-fagd', edwardJZuckerberg],
  ['maryjane-hanlon', maryJaneHanlon],
  ['paul-farsai-dmd-mphfacd-fpfa', paulFarsai],
])

export function getDoctorImage(slug) {
  if (!slug || typeof slug !== 'string') {
    return FALLBACK_DOCTOR_IMAGE
  }
  return DOCTOR_IMAGES_BY_SLUG[slug] ?? FALLBACK_DOCTOR_IMAGE
}
