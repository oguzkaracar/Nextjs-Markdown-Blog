import { parseISO, format } from 'date-fns';

// daha farklı bir şekilde yapılabilir. (locale date vs.)

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
