import { StatusConstants } from "../../types";
import {
  AssociatedProductsInterface,
  CardData,
} from "./userManagementData.interface";

export interface ProductListinInterface {
  id?: number;
  image?: string;
  email?: string;
  productCategory?: string;
  productTitle?: string;
  productType?: string;
  productView?: string;
  price?: number;
  size?: string[];
  color?: string[];
  features?: string[];
  dateAdded?: string;
  status?: keyof StatusConstants;
}

export interface NewDesignsListinInterface {
  id?: number;
  title?: string;
  addedBy?: string;
  dateAdded?: string;
  products?: number;
  designs?: CardData[];
  associate?: AssociatedProductsInterface[];
}
