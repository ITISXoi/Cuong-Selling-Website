import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const timeFormatter = (date: string) => {
  const dateFromNow = new Date(Number(date));
  return dayjs(dateFromNow).fromNow();
};
