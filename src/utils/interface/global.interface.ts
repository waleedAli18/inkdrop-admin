export interface PaginationDataProps {
  page?: number;
  pageSize?: number;
  take?: number;
  currentPage?: number;
  total?: number;
}

export interface StatusInterface {
  text:
    | "In_Progress"
    | "Completed"
    | "Accepted"
    | "Pending"
    | "Confirmed"
    | "Conducted"
    | "Cancelled"
    | "Paid"
    | "Due";
}

export interface imageUploadProps {
  name: string;
  multiple?: boolean;
  maxCount?: number;
  showUploadList?: boolean;
  accept: string;
  customRequest: (info: any) => Promise<void>;
  onDrop: (info: any) => Promise<void>;
}
