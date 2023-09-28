export interface UserManagementData {
  id: number;
  username?: string;
  email?: string;
  userImage?: string;
  phone?: string;
  address?: string;
  onboardingDate?: string;
  totalDesigns?: number;
  totalEarnings?: number;
  totalProducts?: number;
  pendingAmount?: number;
  status?: boolean;
  action?: () => void;
  designs: CardData[];
  associate?: AssociatedProductsInterface[];
}

export interface CardData {
  id?: number;
  imageSrc?: string;
  heading?: string;
  designedBy?: string;
  created?: string;
  link?: string;
  review?: number;
  category?: string[];
  handleClick?: () => void;
}

export interface AssociatedProductsInterface {
  id?: number;
  imageSrc?: string;
  status?: boolean;
  heading?: string;
  link?: string;
  review?: number;
  category?: string[];
  handleClick?: () => void;
}
