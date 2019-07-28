import { NotificationColor } from './notification-color.enum';

export interface ToastNotification {
    color: NotificationColor;
    text: string;
}
