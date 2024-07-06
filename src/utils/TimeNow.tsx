const now: Date = new Date();
const formatter: Intl.DateTimeFormat = new Intl.DateTimeFormat('id-ID', {
  weekday: 'long',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric'
});
export const TimeNow: string = formatter.format(now);

