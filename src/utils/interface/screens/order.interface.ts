import { StatusConstants } from "../../types";

export interface OrderData {
  id: number;
  orderDate: string;
  amount: number;
  shipmentAddress: string;
  email: string;
  status: keyof StatusConstants;
  deliveryDetails?: {
    name: string;
    email: string;
    phone: number;
    deliveryAddress: string;
  };
  orderDetails?: Array<{
    name: string;
    size: string;
    alignVertical: string;
    alignHorizontal: string;
    imageScale: string;
    position: string;
    color: string;
    designedBy: string;
    price: number;
    image: string;
  }>;
}

export interface OrderListingDataProps {
  id: number;
  name: string;
  email: string;
  phone: string;
  purchaseDate: string;
  daysRemaining: string;
  amount?: string;
  address: string;
  status?: string;
  review?: number;
  category: "all" | "pending" | "completed";
  deliveryDetails: {
    name: string;
    email: string;
    phone: number;
    deliveryAddress: string;
  };

  orderDetails: Array<{
    name: string;
    size: string;
    alignVertical: string;
    alignHorizontal: string;
    imageScale: string;
    position: string;
    color: string;
    designedBy: string;
    price: number;
    image: string;
  }>;
}
