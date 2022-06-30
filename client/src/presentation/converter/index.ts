import { format } from 'date-fns';

export const convertTimeZone2DateStr = (date: any) => String(format(new Date(date), 'yyyy年M月d日 H:mm'));
