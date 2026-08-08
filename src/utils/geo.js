// Kaaba coordinates (Masjid al-Haram, Mecca).
export const KAABA = { latitude: 21.4225, longitude: 39.8262 };

const toRad = (deg) => (deg * Math.PI) / 180;

// Great-circle distance in kilometers (haversine formula).
export function distanceToKaabaKm(coords) {
  const R = 6371; // Earth's mean radius in km
  const dLat = toRad(KAABA.latitude - coords.latitude);
  const dLon = toRad(KAABA.longitude - coords.longitude);
  const lat1 = toRad(coords.latitude);
  const lat2 = toRad(KAABA.latitude);

  const a =
    Math.sin(dLat / 2) ** 2 + Math.sin(dLon / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}
