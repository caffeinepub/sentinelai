import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';
import { useBackendHealth } from '@/hooks/useBackendHealth';

export function BackendHealthBanner() {
  const { status, reason } = useBackendHealth();

  // Only show banner when definitively unhealthy (not while checking)
  if (status !== 'unhealthy') {
    return null;
  }

  return (
    <Alert className="border-2 border-destructive bg-destructive/10 mx-4 mt-4">
      <AlertTriangle className="h-5 w-5 text-destructive" />
      <AlertDescription className="ml-2">
        <strong>Service Notice:</strong> {reason || 'Assistant service is not ready'}
        {' '}Some features may be temporarily unavailable. Please try again in a few moments.
      </AlertDescription>
    </Alert>
  );
}
