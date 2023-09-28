export const PHONE_REGEX =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;

export const pageSize = 10;
export const perPageLimit = 1000;

export const PER_PAGE = {
  LIMIT: 100,
};

export const NUMBER_PATTERN = {
  PATTERN: /^[-+]?[0-9]+\.[0-9]+$/,
};
export const phoneMask = [
  "(",
  /[1-9]/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export const PRODUCT_CATEGORY = [
  {
    label: "Business",
    value: "business",
  },
  {
    label: "Technology",
    value: "technology",
  },
  {
    label: "Food",
    value: "food",
  },
  {
    label: "Travel",
    value: "travel",
  },
];

export const PRODUCT_TYPE = [
  {
    label: "Type 1",
    value: "type-1",
  },
  {
    label: "Type 2",
    value: "type-2",
  },
  {
    label: "Type 3",
    value: "type-3",
  },
  {
    label: "Type 4",
    value: "type-4",
  },
];

export const PRODUCT_VIEW = [
  {
    label: "Front",
    value: "front",
  },
  {
    label: "Back",
    value: "back",
  },
];

export const SHIRT_SIZE = ["S", "M", "L", "XL", "XXL", "XXXL"];

export const COOKIES = {
  REFRESH_TOKEN: "c4699c08-a46e-4983-833d-7d22b47b5483",
  ACCESS_TOKEN: "ccce42df-f713-4ef5-a154-40911583e275",
};

export const BOOKING_TABS = {
  CLASS: "Class",
  CONSULTATION: "Consultation",
};

export const PROFILE_SETTING_TAB_KEY = {
  MY_ACCOUNT: "#MyAccount",
  CHANGE_PASSWORD: "#ChangePassword",
  PAYMENT_METHOD: "#PaymentMethod",
};

export const PRODUCT_MANAGEMENT_TAB_KEY = {
  PRODUCT_LISTING: "#ProductListing",
  NEW_DESIGNS_LISTING: "#NewDesignsListing",
};

export const STATUS_CONSTANTS = {
  In_Progress: "In Progress",
  In_Process: "In Process",
  Completed: "Completed",
  Accepted: "Accepted",
  Active: "Active",
  Pending: "Pending",
  Confirmed: "Confirmed",
  Conducted: "Conducted",
  Cancelled: "Cancelled",
  Paid: "Paid",
  Due: "Due",
};

export const globalDateFormat = "MM-DD-YYYY";
export const globalTimeFormat = "hh:mm A";
export const GLOBAL_DATE_TIME_FORMAT = "MM-DD-YYYY hh:mm A";
