export interface SaasProduct {
  id: number;
  name: string;
  category: string;
  description: string;
  priceMonthly: number | null;
  priceYearly: number | null;
  freePlan: boolean;
  trialDays: number;
  features: string[];
  websiteUrl: string;
  logoUrl: string;
  rating: number;
  pros: string[];
  cons: string[];
  targetUsers: string;
}

export const CATEGORIES = [
  'All',
  'CRM',
  'Project Management',
  'Accounting',
  'Marketing',
  'HR',
  'Communication',
  'Design',
  'Development',
  'Analytics',
  'Security',
  'Customer Support',
  'E-commerce',
] as const;

export type Category = typeof CATEGORIES[number];
