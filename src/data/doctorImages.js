/**
 * Per-practice banner doctor photos.
 *
 * - Drop image files into `src/assets/doctors/` (webp, png, jpg, jpeg, avif).
 * - Set `DEFAULT_DOCTOR_PHOTO_FILENAME` for the shared stock photo used by most practices.
 * - Add or edit `DOCTOR_IMAGE_FILENAME_OVERRIDES` when a practice gets its own file (value = filename only).
 * - If a file is missing or fails to load in the UI, the banner falls back to `placeholder-doctor.svg`
 *   (see `getDoctorImage` + `BannerSection` onError).
 */

import { PRACTICES } from './practices.js'
import placeholderDoctor from '../assets/doctors/placeholder-doctor.png'

/** Shown when no bundled asset exists for a slug or when the image fails to load */
export const FALLBACK_DOCTOR_IMAGE = placeholderDoctor

/**
 * Shared “real doctor” stock image used for every practice unless overridden.
 * Replace this single filename when you swap in a new default asset.
 */
const DEFAULT_DOCTOR_PHOTO_FILENAME = 'doctor-img.png'

/**
 * Slug → filename in `src/assets/doctors/`. Only list entries that differ from the default.
 * Add lines here as unique photos become available.
 */
const DOCTOR_IMAGE_FILENAME_OVERRIDES = {
  'dr-m-shorser': 'Dr.-Shorser.webp',
}

const PRACTICE_SLUGS = PRACTICES.map((p) => p.slug)

/** @type {Record<string, string>} */
export const DOCTOR_IMAGE_FILENAME_BY_SLUG = Object.fromEntries(
  PRACTICE_SLUGS.map((slug) => [
    slug,
    DOCTOR_IMAGE_FILENAME_OVERRIDES[slug] ?? DEFAULT_DOCTOR_PHOTO_FILENAME,
  ]),
)

const doctorAssetModules = import.meta.glob('../assets/doctors/*.{webp,png,jpg,jpeg,avif}', {
  eager: true,
  import: 'default',
})

const filenameToUrl = new Map(
  Object.entries(doctorAssetModules).map(([path, url]) => {
    const normalized = path.replace(/\\/g, '/')
    const basename = normalized.slice(normalized.lastIndexOf('/') + 1)
    return [basename, url]
  }),
)

/**
 * @param {string | undefined} filename
 * @returns {string | undefined} Vite-resolved URL when the file exists on disk
 */
function resolveDoctorAssetUrl(filename) {
  if (!filename) return undefined
  return filenameToUrl.get(filename)
}

/**
 * Slug → resolved image URL, or fallback SVG when the file is absent from the bundle.
 * @type {Record<string, string>}
 */
export const DOCTOR_IMAGES_BY_SLUG = Object.fromEntries(
  PRACTICE_SLUGS.map((slug) => {
    const filename = DOCTOR_IMAGE_FILENAME_BY_SLUG[slug]
    const url = resolveDoctorAssetUrl(filename)
    return [slug, url ?? FALLBACK_DOCTOR_IMAGE]
  }),
)

/**
 * @param {string | undefined} slug - Route slug for the current practice
 * @returns {string} URL safe for `<img src={...}>`
 */
export function getDoctorImage(slug) {
  if (!slug || typeof slug !== 'string') {
    return FALLBACK_DOCTOR_IMAGE
  }
  return DOCTOR_IMAGES_BY_SLUG[slug] ?? FALLBACK_DOCTOR_IMAGE
}
