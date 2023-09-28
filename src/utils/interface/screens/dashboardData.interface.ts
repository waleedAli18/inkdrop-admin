export interface DashboardData {
  id: number;
  designer?: string;
  designTitle?: string;
  submissionDate?: string;
  totalProducts?: number;
  action?: () => void;
}
