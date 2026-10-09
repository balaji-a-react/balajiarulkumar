export type MonthValue = `${number}-${number}`;

export const monthLabel = (value: string): string => {
  const [year, month] = value.split('-').map(Number);
  return new Date(year, month - 1).toLocaleString('en-US', { month: 'short', year: 'numeric' });
};

export const monthsBetween = (start: string, end: string): number => {
  const [startYear, startMonth] = start.split('-').map(Number);
  const [endYear, endMonth] = end.split('-').map(Number);
  return (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
};

export const formatDuration = (months: number): string => {
  const years = Math.floor(months / 12);
  const remainder = months % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} ${years === 1 ? 'yr' : 'yrs'}`);
  if (remainder) parts.push(`${remainder} ${remainder === 1 ? 'mo' : 'mos'}`);
  return parts.join(' ') || '0 mos';
};

export const formatRange = (start?: string, end?: string): string => {
  if (start && end) return `${monthLabel(start)} – ${monthLabel(end)}`;
  if (start) return `${monthLabel(start)} – Present`;
  return '';
};

export const formatRangeWithDuration = (start?: string, end?: string): string => {
  if (!start || !end) return formatRange(start, end);
  return `${formatRange(start, end)} (${formatDuration(monthsBetween(start, end))})`;
};
