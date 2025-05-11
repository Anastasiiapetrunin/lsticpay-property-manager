
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPropertyDetails, getMonthlyExpenseSummary } from "@/services/mockData";
import { PropertyDetails as PropertyDetailsType, Expense } from "@/types";
import AppLayout from "@/components/layout/AppLayout";
import RoomCard from "@/components/property/RoomCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Plus } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function PropertyDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [property, setProperty] = useState<PropertyDetailsType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1); // 1-12
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  
  useEffect(() => {
    if (!id) {
      navigate("/dashboard");
      return;
    }
    
    // Fetch property details
    const propertyData = getPropertyDetails(id);
    if (propertyData) {
      setProperty(propertyData);
    } else {
      navigate("/dashboard");
    }
    setIsLoading(false);
  }, [id, navigate]);

  if (isLoading) {
    return (
      <AppLayout>
        <div className="flex h-full items-center justify-center">
          <p>Loading...</p>
        </div>
      </AppLayout>
    );
  }
  
  if (!property) {
    return (
      <AppLayout>
        <div className="flex h-full items-center justify-center">
          <p>Property not found</p>
        </div>
      </AppLayout>
    );
  }

  // Get monthly expenses for the selected month/year
  const monthlyExpenseSummary = getMonthlyExpenseSummary(property.id, selectedMonth, selectedYear);
  
  // Filter expenses for the current month
  const currentMonthExpenses = property.expenses.filter(
    (expense) => expense.month === selectedMonth && expense.year === selectedYear
  );

  return (
    <AppLayout>
      <div className="mb-6 flex items-center">
        <Button
          variant="ghost"
          size="sm"
          className="mr-4"
          onClick={() => navigate("/dashboard")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <h1 className="text-2xl font-bold">{property.name}</h1>
      </div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Property Details */}
        <div className="col-span-1 lg:col-span-2">
          <div className="mb-6">
            <p className="text-lg font-medium">Property Details</p>
            <p className="text-muted-foreground">{property.address}</p>
            <p className="mt-2">
              <span className="text-muted-foreground">Client: </span>
              <span className="font-medium">{property.clientName}</span>
            </p>
            <p className="mt-1 flex items-center">
              <span className="text-muted-foreground">Next payment: </span>
              <span className="ml-1 flex items-center font-medium">
                <Calendar className="mr-1 h-4 w-4" />
                {new Date(property.nextPaymentDate).toLocaleDateString()}
              </span>
            </p>
          </div>
          
          <div className="mb-6">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-lg font-medium">Rooms</p>
              <Button variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Room
              </Button>
            </div>
            
            <div className="space-y-4">
              {property.rooms.map((room) => (
                <RoomCard key={room.id} room={room} expenses={property.expenses} />
              ))}
              
              {property.rooms.length === 0 && (
                <div className="rounded-lg border border-dashed p-4 text-center">
                  <p className="text-muted-foreground">No rooms added yet</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Financial Summary */}
        <div>
          <div className="dashboard-stat-card mb-6">
            <p className="mb-4 text-lg font-medium">Monthly Summary</p>
            
            <div className="flex items-center justify-between">
              <span>Monthly Fee</span>
              <span className="font-medium">{formatCurrency(property.monthlyFee)}</span>
            </div>
            
            <div className="mt-2 flex items-center justify-between">
              <span>Additional Expenses</span>
              <span className="font-medium">
                {formatCurrency(monthlyExpenseSummary.additionalExpenses)}
              </span>
            </div>
            
            <div className="mt-4 border-t pt-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">Total</span>
                <span className="font-medium text-primary">
                  {formatCurrency(monthlyExpenseSummary.total)}
                </span>
              </div>
            </div>
          </div>
          
          <div className="dashboard-stat-card">
            <p className="mb-4 text-lg font-medium">Recent Expenses</p>
            
            {currentMonthExpenses.length > 0 ? (
              <div className="space-y-2">
                {currentMonthExpenses.map((expense) => (
                  <div key={expense.id} className="expense-item">
                    <div className="flex items-center justify-between">
                      <span>{expense.description}</span>
                      <span className="font-medium">{formatCurrency(expense.amount)}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(expense.date).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm italic text-muted-foreground">No expenses for this month</p>
            )}
            
            <Button className="mt-4 w-full" variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              Add Expense
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
