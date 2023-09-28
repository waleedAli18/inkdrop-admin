import { STATUS_CONSTANTS } from "../constants/app.constant";

export type StatusConstants = {
  [key in keyof typeof STATUS_CONSTANTS]: string;
};
