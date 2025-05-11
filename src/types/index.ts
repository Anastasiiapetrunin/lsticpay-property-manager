
export type UserRole = 'admin' | 'client';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface Expense {
  id: string;
  date: string;
  amount: number;
  description: string;
  roomId?: string;
  propertyId: string;
  month: number;
  year: number;
  createdAt: string;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  propertyId: string;
}

export interface Property {
  id: string;
  name: string;
  address: string;
  clientId: string;
  clientName: string;
  monthlyFee: number;
  nextPaymentDate: string;
  imageUrl?: string;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: string;
  propertyId: string;
}

export interface FinancialTransaction {
  id: string;
  type: 'rent' | 'maintenance' | 'repair' | 'other';
  amount: number;
  date: string;
  source: string;
  propertyId: string;
}

export interface PropertyDetails extends Property {
  rooms: Room[];
  expenses: Expense[];
}
