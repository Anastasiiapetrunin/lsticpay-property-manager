
import { useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { House, User, Settings, Menu, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarTrigger,
  SidebarProvider,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { useAuth } from "@/contexts/AuthContext";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const { currentUser, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <SidebarProvider collapsedWidth={56}>
      <div className="flex min-h-screen w-full">
        <Sidebar
          className={`bg-sidebar text-sidebar-foreground ${
            collapsed ? "w-14" : "w-64"
          } transition-all duration-200`}
          collapsible
          onCollapsedChange={setCollapsed}
        >
          <div className="flex items-center justify-between p-4">
            {!collapsed && (
              <div className="text-xl font-bold text-white">LSticPay</div>
            )}
            <SidebarTrigger className="ml-auto text-sidebar-foreground" />
          </div>

          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild
                  className="flex w-full items-center gap-2 rounded-md p-2 hover:bg-sidebar-accent"
                  onClick={() => navigate("/dashboard")}
                >
                  <div>
                    <House className="h-5 w-5" />
                    {!collapsed && <span className="ml-2">Dashboard</span>}
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              {isAdmin() && (
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    asChild
                    className="flex w-full items-center gap-2 rounded-md p-2 hover:bg-sidebar-accent"
                    onClick={() => navigate("/clients")}
                  >
                    <div>
                      <User className="h-5 w-5" />
                      {!collapsed && <span className="ml-2">Clients</span>}
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild
                  className="flex w-full items-center gap-2 rounded-md p-2 hover:bg-sidebar-accent"
                  onClick={() => navigate("/settings")}
                >
                  <div>
                    <Settings className="h-5 w-5" />
                    {!collapsed && <span className="ml-2">Settings</span>}
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>

          <div className="mt-auto p-4">
            <Button 
              variant="outline" 
              className="flex w-full items-center gap-2 bg-sidebar-accent text-sidebar-foreground hover:bg-sidebar-accent/80"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              {!collapsed && <span>Logout</span>}
            </Button>
          </div>
        </Sidebar>

        <div className="flex flex-1 flex-col">
          <header className="flex h-14 items-center border-b bg-background px-4 lg:px-6">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <div className="ml-auto flex items-center gap-2">
              <div className="text-sm">
                {currentUser ? currentUser.name : "Guest"}
                {currentUser && (
                  <span className="ml-2 rounded-full bg-primary px-2 py-1 text-xs text-white">
                    {currentUser.role}
                  </span>
                )}
              </div>
            </div>
          </header>
          <main className="flex-1 p-4 md:p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
