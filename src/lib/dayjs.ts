import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.locale("ko");

export { dayjs };

export function formatDate(date: string | Date, format = "YYYY-MM-DD"): string {
  return dayjs(date).format(format);
}

export function formatDateTime(date: string | Date): string {
  return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
}

export function fromNow(date: string | Date): string {
  return dayjs(date).fromNow();
}
