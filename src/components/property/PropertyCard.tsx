
import { Property } from "@/types";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { formatCurrency } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  // Calculate days until next payment
  const nextPaymentDate = new Date(property.nextPaymentDate);
  const today = new Date();
  const daysUntilPayment = Math.ceil(
    (nextPaymentDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );
  
  const isPaymentSoon = daysUntilPayment <= 7;

  return (
    <Link to={`/property/${property.id}`}>
      <div className={isPaymentSoon ? "property-card-highlight" : "property-card"}>
        <div className="relative mb-2 aspect-video overflow-hidden rounded-md">
          <img
            src={property.imageUrl || "https://via.placeholder.com/300x200?text=Property"}
            alt={property.name}
            className="h-full w-full object-cover"
          />
        </div>
        <h3 className="mb-1 text-lg font-medium">{property.name}</h3>
        <p className="text-sm text-muted-foreground">{property.address}</p>
        
        <div className="mt-3 flex items-baseline justify-between">
          <div>
            <p className="font-medium text-primary">
              {formatCurrency(property.monthlyFee)}/month
            </p>
          </div>
          
          <div className={`flex items-center text-sm ${
            isPaymentSoon ? "text-destructive" : "text-muted-foreground"
          }`}>
            <Calendar className="mr-1 h-4 w-4" />
            {daysUntilPayment === 0 ? (
              <span>Due today</span>
            ) : daysUntilPayment < 0 ? (
              <span>{Math.abs(daysUntilPayment)} days late</span>
            ) : (
              <span>Due in {daysUntilPayment} days</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
