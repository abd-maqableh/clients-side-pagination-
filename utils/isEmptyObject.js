export default function isObjectValueEmpty(obj) {
  for (const key in obj) {
    if (obj[key] !== null && obj[key] != "") return false;
  }
  return true;
}
