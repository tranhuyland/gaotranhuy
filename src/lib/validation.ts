export function isPhone(phone: string) {
  return /^(0|\+84)\d{9,10}$/.test(phone);
}

export function isEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
