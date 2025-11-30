export interface PricingRule {
  prix: number;
  caution: number;
}

export interface ApartmentRate {
  address: string;
  '1-2'?: PricingRule;
  '3+'?: PricingRule;
  '1-6'?: PricingRule;
  '7-29'?: PricingRule;
  '30+'?: PricingRule;
  '7+'?: PricingRule;
}

export interface TarifMap {
  [key: string]: ApartmentRate;
}

export interface ReceiptData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  apartmentName: string;
  startDate: string;
  endDate: string;
  isCustomRate: boolean;
  customTotalAmount: number; 
  negotiatedNightlyRate: number; // New field for negotiated price in standard mode
  paidAmount: number;
  paymentMethod: string;
  signature: string;
  hosts: string[];
  electricityCharge: boolean;
  packEco: boolean;
  observations: string;
}