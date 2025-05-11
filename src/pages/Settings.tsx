
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function Settings() {
  return (
    <AppLayout>
      <div className="mb-6">
        <h1 className="mb-2 text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Configure your account and notification preferences</p>
      </div>
      
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Configure how you receive notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="new-expense">New expense notifications</Label>
              <Switch id="new-expense" defaultChecked />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="payment-due">Payment due reminders</Label>
              <Switch id="payment-due" defaultChecked />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="messages">New messages</Label>
              <Switch id="messages" defaultChecked />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Account Preferences</CardTitle>
            <CardDescription>Update your account settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="language">Language</Label>
              <div className="text-sm">English</div>
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="currency">Currency</Label>
              <div className="text-sm">USD ($)</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
