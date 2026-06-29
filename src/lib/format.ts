export function formatDate(
  date: string | Date,
  locale = "vi-VN"
) {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "long",
  }).format(new Date(date));
}

export function formatNumber(number: number) {
  return new Intl.NumberFormat("vi-VN").format(number);
}
