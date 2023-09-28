import { PaginationDataProps } from "..";
import {
  AssociatedProductsInterface,
  CardData,
} from "./userManagementData.interface";

export interface DashboardBookingData {
  id: number;
  designer?: string;
  designTitle?: string;
  submissionDate?: string;
  totalProducts?: number;
  designs?: CardData[];
  associate?: AssociatedProductsInterface[];
  action?: () => void;
}

export interface CustomArtCardInterface {
  id: number;
  imageSrc?: string;
  heading?: string;
  designedBy?: string;
  created?: string;
  link?: string;
  review?: number;
  category?: string[];
  handleClick?: () => void;
}

export interface DesignModalInterface {
  id: number;
  designer?: string;
  designTitle?: string;
  submissionDate?: string;
  totalProducts?: number;
  designs?: CustomArtCardInterface[];
  action?: () => void;
}

export interface BookingDataProps {
  setPagination: Function;
  gridPreLoader: boolean;
  pagination: PaginationDataProps;
  bookingList: Array<object>;
  tabKey: string;
}
