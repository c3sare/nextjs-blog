import { parseISO, format, setDefaultOptions } from 'date-fns';
import { pl } from "date-fns/locale";

export default function Date({ dateString }) {
  setDefaultOptions({ locale: pl });
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}