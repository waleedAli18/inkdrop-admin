import { StatusConstants } from "../../types";
import { PaginationDataProps } from "..";

export interface PayoutData {
  id: number;
  username: string;
  email: string;
  requestDate: string;
  amount: number;
  status: keyof StatusConstants;
}

export interface PayoutProps {
  setPagination: Function;
  gridPreLoader: boolean;
  pagination: PaginationDataProps;
  bookingList: Array<object>;
}

export interface BankFieldsInterface {
  accountTitle: string;
  bankName: string;
  accountNo: string;
  routingNo: string;
}
