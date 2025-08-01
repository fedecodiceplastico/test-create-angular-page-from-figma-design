export interface WasteType {
  name: string;
  quantity: number;
  weight: string;
  volume: string;
}

export interface Request {
  id: string;
  number: string;
  companyName: string;
  address: string;
  isZTL: boolean;
  expectedArrival: string;
  wasteTypes: WasteType[];
  status: 'completed' | 'pending' | 'in-progress';
}

export interface Driver {
  name: string;
  role: string;
}

export interface GiroInfo {
  name: string;
  date: string;
  week: string;
  completed: number;
  total: number;
  showCompleted: boolean;
}
