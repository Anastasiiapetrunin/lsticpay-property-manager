
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="mb-2 text-5xl font-bold text-primary">404</h1>
      <p className="mb-6 text-xl text-muted-foreground">Page not found</p>
      <p className="mb-8 max-w-md text-muted-foreground">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Button asChild>
        <Link to="/dashboard">
          <Home className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
