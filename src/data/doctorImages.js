/**
 * Central registry for banner doctor photos (all practices in `PRACTICES` / 77 routes).
 *
 * Default behavior
 * - First half of the practice list → `src/assets/doctor-profile.svg`
 * - Second half → `src/assets/doctor-profile-1.png`
 * - Order follows `practices.js` (US + CA, same as URL slugs).
 *
 * When a real image fails in the browser, `BannerSection` uses `onError` with
 * `FALLBACK_DOCTOR_IMAGE` (`src/assets/doctors/placeholder-doctor.svg`).
 *
 * To add a one-off photo for a single slug later: import the asset, add an entry
 * to `DOCTOR_IMAGE_IMPORT_OVERRIDES` below, and the map builder will use it
 * instead of the half-default.
 */

import { PRACTICES } from './practices.js'
import doctorProfileSvg from '../assets/doctors/doctor-img-1.png'
import doctorProfilePng from '../assets/doctors/doctor-img.png'
import placeholderDoctor from '../assets/doctors/AI-Doctor-img.webp'
import anaPesaturo from '../assets/doctors/Ana Pesaturo.png'
import daveKing from '../assets/doctors/Dave King.png'
import drJuliaMichelin from '../assets/doctors/Dr. Julia Michelin.png'
import drMarkWhitefield from '../assets/doctors/Dr. Mark Whitefield, AFAAID, AAACD.png'
import edwardZuckerberg from '../assets/doctors/Edward J. Zuckerberg, D.D.S.,F.A.G.D..png'
import maryjaneHanlon from '../assets/doctors/MaryJane Hanlon.png'
import paulFarsai from '../assets/doctors/Paul Farsai DMD, MPH, FACD, FPFA.png'

/** Shown when a slug is unknown or when `<img onError />` runs in the banner */
export const FALLBACK_DOCTOR_IMAGE = placeholderDoctor

const FIRST_HALF_ASSET = doctorProfileSvg
const SECOND_HALF_ASSET = doctorProfilePng

const HALF = Math.ceil(PRACTICES.length / 2)

/**
 * Optional per-slug imports (fill when you have unique files). Example:
 *   import shorser from '../assets/doctors/Dr-Shorser.webp'
 *   export const DOCTOR_IMAGE_IMPORT_OVERRIDES = { 'dr-m-shorser': shorser }
 * @type {Record<string, string | undefined>}
 */
export const DOCTOR_IMAGE_IMPORT_OVERRIDES = {
  'ana-pesaturo': anaPesaturo,
  'dave-king': daveKing,
  'dr-julia-michelin': drJuliaMichelin,
  'dr-mark-whitefield-afaaid-aaacd': drMarkWhitefield,
  'edward-j-zuckerberg-d-d-s-f-a-g-d': edwardZuckerberg,
  'maryjane-hanlon': maryjaneHanlon,
  'paul-farsai-dmd-mph-facd-fpfa': paulFarsai,
}

/**
 * @param {number} index - Index in `PRACTICES`
 * @param {string} slug
 * @returns {string} Vite asset URL
 */
function resolveImageForPractice(index, slug) {
  const override = DOCTOR_IMAGE_IMPORT_OVERRIDES[slug]
  if (override) return override
  return index < HALF ? FIRST_HALF_ASSET : SECOND_HALF_ASSET
}

const PRACTICE_SLUGS = PRACTICES.map((p) => p.slug)

/** Hint for which asset applies (not used at runtime beyond debugging) */
export const DOCTOR_IMAGE_FILENAME_BY_SLUG = Object.fromEntries(
  PRACTICES.map((p, i) => [
    p.slug,
    DOCTOR_IMAGE_IMPORT_OVERRIDES[p.slug] != null
      ? 'import-override'
      : i < HALF
        ? 'doctor-profile.png'
        : 'doctor-profile-1.png',
  ]),
)

/**
 * Slug → bundled image URL
 * @type {Record<string, string>}
 */
export const DOCTOR_IMAGES_BY_SLUG = Object.fromEntries(
  PRACTICES.map((p, i) => [p.slug, resolveImageForPractice(i, p.slug)]),
)

/**
 * @param {string | undefined} slug - Current route / practice slug
 * @returns {string} Value for `<img src={...}>`
 */
export function getDoctorImage(slug) {
  if (!slug || typeof slug !== 'string') {
    return FALLBACK_DOCTOR_IMAGE
  }
  return DOCTOR_IMAGES_BY_SLUG[slug] ?? FALLBACK_DOCTOR_IMAGE
}
