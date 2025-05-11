
import { Property, Room, Expense, PropertyDetails } from '@/types';

// Mock Properties
export const MOCK_PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    name: 'Sunset Apartments',
    address: '123 Sunset Blvd, Los Angeles, CA',
    clientId: 'client-1',
    clientName: 'John Smith',
    monthlyFee: 350,
    nextPaymentDate: '2025-06-01',
    imageUrl: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: 'prop-2',
    name: 'Ocean View Villa',
    address: '456 Ocean Drive, Miami, FL',
    clientId: 'client-1',
    clientName: 'John Smith',
    monthlyFee: 500,
    nextPaymentDate: '2025-05-15',
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: 'prop-3',
    name: 'Mountain Retreat',
    address: '789 Alpine Way, Aspen, CO',
    clientId: 'client-2',
    clientName: 'Anna Johnson',
    monthlyFee: 450,
    nextPaymentDate: '2025-05-20',
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1265&q=80',
  },
  {
    id: 'prop-4',
    name: 'City Loft',
    address: '101 Downtown St, New York, NY',
    clientId: 'client-2',
    clientName: 'Anna Johnson',
    monthlyFee: 600,
    nextPaymentDate: '2025-05-25',
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
];

// Mock Rooms
export const MOCK_ROOMS: Room[] = [
  // Property 1 Rooms
  {
    id: 'room-1-1',
    name: 'Living Room',
    description: 'Spacious living area with modern furniture and smart TV',
    propertyId: 'prop-1',
  },
  {
    id: 'room-1-2',
    name: 'Kitchen',
    description: 'Fully equipped kitchen with stainless steel appliances',
    propertyId: 'prop-1',
  },
  {
    id: 'room-1-3',
    name: 'Bedroom',
    description: 'Master bedroom with king-size bed and en-suite bathroom',
    propertyId: 'prop-1',
  },
  {
    id: 'room-1-4',
    name: 'Bathroom',
    description: 'Modern bathroom with shower and bathtub',
    propertyId: 'prop-1',
  },
  
  // Property 2 Rooms
  {
    id: 'room-2-1',
    name: 'Living Room',
    description: 'Elegant living space with ocean views',
    propertyId: 'prop-2',
  },
  {
    id: 'room-2-2',
    name: 'Kitchen',
    description: 'Gourmet kitchen with marble countertops',
    propertyId: 'prop-2',
  },
  {
    id: 'room-2-3',
    name: 'Master Bedroom',
    description: 'Luxurious master suite with balcony access',
    propertyId: 'prop-2',
  },
  {
    id: 'room-2-4',
    name: 'Guest Bedroom',
    description: 'Comfortable guest room with queen bed',
    propertyId: 'prop-2',
  },
  {
    id: 'room-2-5',
    name: 'Bathroom 1',
    description: 'Master bathroom with double vanity and walk-in shower',
    propertyId: 'prop-2',
  },
  {
    id: 'room-2-6',
    name: 'Bathroom 2',
    description: 'Guest bathroom with modern fixtures',
    propertyId: 'prop-2',
  },
  
  // Property 3 Rooms
  {
    id: 'room-3-1',
    name: 'Living Area',
    description: 'Cozy living area with fireplace and mountain views',
    propertyId: 'prop-3',
  },
  {
    id: 'room-3-2',
    name: 'Kitchen',
    description: 'Rustic kitchen with wooden cabinets and modern appliances',
    propertyId: 'prop-3',
  },
  {
    id: 'room-3-3',
    name: 'Bedroom 1',
    description: 'Primary bedroom with log furniture and panoramic views',
    propertyId: 'prop-3',
  },
  {
    id: 'room-3-4',
    name: 'Bedroom 2',
    description: 'Second bedroom with twin beds',
    propertyId: 'prop-3',
  },
  
  // Property 4 Rooms
  {
    id: 'room-4-1',
    name: 'Open Living Space',
    description: 'Industrial-style open concept living area',
    propertyId: 'prop-4',
  },
  {
    id: 'room-4-2',
    name: 'Kitchen',
    description: 'Modern kitchenette with breakfast bar',
    propertyId: 'prop-4',
  },
  {
    id: 'room-4-3',
    name: 'Bedroom',
    description: 'Contemporary bedroom with city views',
    propertyId: 'prop-4',
  },
  {
    id: 'room-4-4',
    name: 'Bathroom',
    description: 'Sleek bathroom with subway tiles and rain shower',
    propertyId: 'prop-4',
  },
];

// Mock Expenses
export const MOCK_EXPENSES: Expense[] = [
  // Property 1 Expenses
  {
    id: 'exp-1-1',
    date: '2025-04-15',
    amount: 120,
    description: 'Plumbing repair in bathroom',
    roomId: 'room-1-4',
    propertyId: 'prop-1',
    month: 4,
    year: 2025,
    createdAt: '2025-04-15T14:30:00Z',
  },
  {
    id: 'exp-1-2',
    date: '2025-04-20',
    amount: 80,
    description: 'Living room furniture maintenance',
    roomId: 'room-1-1',
    propertyId: 'prop-1',
    month: 4,
    year: 2025,
    createdAt: '2025-04-20T10:15:00Z',
  },
  
  // Property 2 Expenses
  {
    id: 'exp-2-1',
    date: '2025-04-10',
    amount: 250,
    description: 'Kitchen appliance replacement',
    roomId: 'room-2-2',
    propertyId: 'prop-2',
    month: 4,
    year: 2025,
    createdAt: '2025-04-10T09:45:00Z',
  },
  {
    id: 'exp-2-2',
    date: '2025-04-25',
    amount: 150,
    description: 'Master bathroom leak repair',
    roomId: 'room-2-5',
    propertyId: 'prop-2',
    month: 4,
    year: 2025,
    createdAt: '2025-04-25T16:20:00Z',
  },
  
  // Property 3 Expenses
  {
    id: 'exp-3-1',
    date: '2025-04-05',
    amount: 180,
    description: 'Fireplace maintenance',
    roomId: 'room-3-1',
    propertyId: 'prop-3',
    month: 4,
    year: 2025,
    createdAt: '2025-04-05T11:00:00Z',
  },
  
  // Property 4 Expenses
  {
    id: 'exp-4-1',
    date: '2025-04-18',
    amount: 90,
    description: 'Window repair',
    roomId: 'room-4-1',
    propertyId: 'prop-4',
    month: 4,
    year: 2025,
    createdAt: '2025-04-18T13:50:00Z',
  },
];

// Function to get properties for a specific client
export function getClientProperties(clientId: string): Property[] {
  return MOCK_PROPERTIES.filter(property => property.clientId === clientId);
}

// Function to get property details
export function getPropertyDetails(propertyId: string): PropertyDetails | null {
  const property = MOCK_PROPERTIES.find(prop => prop.id === propertyId);
  if (!property) return null;
  
  const rooms = MOCK_ROOMS.filter(room => room.propertyId === propertyId);
  const expenses = MOCK_EXPENSES.filter(exp => exp.propertyId === propertyId);
  
  return {
    ...property,
    rooms,
    expenses,
  };
}

// Function to get monthly expense summary
export function getMonthlyExpenseSummary(propertyId: string, month: number, year: number) {
  const propertyExpenses = MOCK_EXPENSES.filter(
    exp => exp.propertyId === propertyId && exp.month === month && exp.year === year
  );
  
  const property = MOCK_PROPERTIES.find(prop => prop.id === propertyId);
  const monthlyFee = property ? property.monthlyFee : 0;
  
  const additionalExpenses = propertyExpenses.reduce((sum, exp) => sum + exp.amount, 0);
  
  return {
    monthlyFee,
    additionalExpenses,
    total: monthlyFee + additionalExpenses
  };
}
