import { format } from 'date-fns';

export default function formatDate(date) {
  const createdAtYear = date.slice(0, 4);
  const createdAtMonth = date.slice(5, 7) - 1;
  const createdAtDay = date.slice(8, 10);
  const formattedDate = format(
    new Date(createdAtYear, createdAtMonth, createdAtDay),
    'dd MMM yyyy'
  );

  return formattedDate;
}
