import { LOCALE } from "@config";

export const dateFormat = (datetime: string | Date) => {
  const dateTime = new Date(datetime);

  const date = dateTime.toLocaleDateString(LOCALE.lang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return date;
};
