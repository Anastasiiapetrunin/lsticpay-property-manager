
import { Room, Expense } from "@/types";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";
import { formatCurrency } from "@/lib/utils";

interface RoomCardProps {
  room: Room;
  expenses: Expense[];
}

export default function RoomCard({ room, expenses }: RoomCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const roomExpenses = expenses.filter((expense) => expense.roomId === room.id);
  
  const totalRoomExpenses = roomExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div className="room-card">
      <div 
        className="flex cursor-pointer items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-base font-medium">{room.name}</h3>
        <div className="flex items-center gap-2">
          {roomExpenses.length > 0 && (
            <span className="text-sm font-medium text-primary">
              {formatCurrency(totalRoomExpenses)}
            </span>
          )}
          {isOpen ? (
            <ArrowUp className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ArrowDown className="h-4 w-4 text-muted-foreground" />
          )}
        </div>
      </div>
      
      {isOpen && (
        <div className="mt-2">
          <p className="mb-2 text-sm text-muted-foreground">{room.description}</p>
          
          {roomExpenses.length > 0 ? (
            <div className="mt-3 space-y-2">
              <h4 className="text-sm font-medium">Recent Expenses</h4>
              {roomExpenses.map((expense) => (
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
            <p className="text-sm italic text-muted-foreground">No expenses recorded</p>
          )}
        </div>
      )}
    </div>
  );
}
