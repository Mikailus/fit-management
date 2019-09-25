import { ToastNotification } from '@/models/toast-notification.interface';

type Notification = ToastNotification & {id: symbol};

export interface ToastState {
    notifications: Notification[];
}
