export default function generateDate(days: number): Date {
  return new Date(new Date().getTime() + days * 24 * 60 * 60 * 1000);
}