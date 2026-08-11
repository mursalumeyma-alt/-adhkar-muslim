const KAABA_LAT = 21.4225;
const KAABA_LNG = 39.8262;

export function distanceToKaabaKm(latitude, longitude) {
  if (
    typeof latitude !== "number" ||
    typeof longitude !== "number"
  ) {
    return null;
  }

  const toRadians = (degrees) => (degrees * Math.PI) / 180;

  const earthRadiusKm = 6371;

  const lat1 = toRadians(latitude);
  const lat2 = toRadians(KAABA_LAT);

  const deltaLat = toRadians(KAABA_LAT - latitude);
  const deltaLng = toRadians(KAABA_LNG - longitude);

  const a =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(lat1) *
      Math.cos(lat2) *
      Math.sin(deltaLng / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadiusKm * c;
}