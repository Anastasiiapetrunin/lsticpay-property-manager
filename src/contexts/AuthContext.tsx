
import { createContext, useState, useContext, ReactNode } from 'react';
import { User, UserRole } from '@/types';
import { toast } from "sonner";

interface AuthContextType {
  currentUser: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAdmin: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Mock users for demo
const MOCK_USERS: User[] = [
  {
    id: 'admin-1',
    name: 'Admin User',
    email: 'admin@lsticpay.com',
    role: 'admin',
  },
  {
    id: 'client-1',
    name: 'John Smith',
    email: 'john@example.com',
    role: 'client',
  },
  {
    id: 'client-2',
    name: 'Anna Johnson',
    email: 'anna@example.com',
    role: 'client',
  }
];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('lsticpay_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    try {
      const user = MOCK_USERS.find((u) => u.email === email);
      
      if (!user || password !== '12345') {
        throw new Error('Invalid email or password');
      }
      
      setCurrentUser(user);
      localStorage.setItem('lsticpay_user', JSON.stringify(user));
      toast.success(`Welcome, ${user.name}!`);
    } catch (error: any) {
      toast.error(error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('lsticpay_user');
    toast.success('Logged out successfully');
  };

  const isAdmin = () => {
    return currentUser?.role === 'admin';
  };

  const value = {
    currentUser,
    isLoading,
    login,
    logout,
    isAdmin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
