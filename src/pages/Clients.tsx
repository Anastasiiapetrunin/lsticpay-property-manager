
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Mail, Phone, Plus, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";

const MOCK_CLIENTS = [
  {
    id: 'client-1',
    name: 'John Smith',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    propertiesCount: 2,
  },
  {
    id: 'client-2',
    name: 'Anna Johnson',
    email: 'anna@example.com',
    phone: '+1 (555) 234-5678',
    propertiesCount: 2,
  }
];

export default function Clients() {
  const navigate = useNavigate();
  const { isAdmin } = useAuth();
  
  useEffect(() => {
    // Redirect non-admin users
    if (!isAdmin()) {
      navigate('/dashboard');
    }
  }, [isAdmin, navigate]);

  return (
    <AppLayout>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="mb-2 text-2xl font-bold">Clients</h1>
          <p className="text-muted-foreground">Manage your client relationships</p>
        </div>
        
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Client
        </Button>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {MOCK_CLIENTS.map((client) => (
          <Card key={client.id} className="overflow-hidden">
            <CardHeader className="bg-muted/40 pb-2">
              <CardTitle className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {client.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                {client.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{client.email}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{client.phone}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span>{client.propertiesCount} Properties</span>
                </div>
              </div>
              
              <Button 
                variant="ghost" 
                className="mt-4 w-full justify-between"
                onClick={() => navigate(`/client/${client.id}`)}
              >
                <span>View Client</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </AppLayout>
  );
}
