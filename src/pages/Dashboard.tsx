
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import AppLayout from '@/components/layout/AppLayout';
import PropertyCard from '@/components/property/PropertyCard';
import { Property } from '@/types';
import { MOCK_PROPERTIES, getClientProperties } from '@/services/mockData';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';

export default function Dashboard() {
  const { currentUser, isAdmin } = useAuth();
  const [properties, setProperties] = useState<Property[]>([]);
  const [viewMode, setViewMode] = useState<'properties' | 'clients'>(
    'properties'
  );

  useEffect(() => {
    // Load properties based on user role
    if (currentUser) {
      if (isAdmin()) {
        setProperties(MOCK_PROPERTIES);
      } else {
        // For clients, only show their properties
        const clientProps = getClientProperties(currentUser.id);
        setProperties(clientProps);
      }
    }
  }, [currentUser, isAdmin]);

  const sortedProperties = [...properties].sort((a, b) => {
    const dateA = new Date(a.nextPaymentDate).getTime();
    const dateB = new Date(b.nextPaymentDate).getTime();
    return dateA - dateB;
  });

  return (
    <AppLayout>
      <div className="mb-6">
        <h1 className="mb-2 text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          {isAdmin()
            ? 'Manage all properties and clients'
            : 'View and manage your properties'}
        </p>
      </div>

      {isAdmin() && (
        <div className="mb-6 flex items-center gap-2">
          <Badge
            variant={viewMode === 'properties' ? 'default' : 'outline'}
            className="cursor-pointer"
            onClick={() => setViewMode('properties')}
          >
            <Calendar className="mr-1 h-4 w-4" />
            Properties
          </Badge>
          <Badge
            variant={viewMode === 'clients' ? 'default' : 'outline'}
            className="cursor-pointer"
            onClick={() => setViewMode('clients')}
          >
            <User className="mr-1 h-4 w-4" />
            Clients
          </Badge>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {properties.length === 0 && (
        <div className="mt-8 flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
          <p className="mb-2 text-lg font-medium">No properties found</p>
          <p className="text-muted-foreground">
            {isAdmin()
              ? 'Add properties to get started'
              : 'You have no assigned properties'}
          </p>
        </div>
      )}
    </AppLayout>
  );
}
