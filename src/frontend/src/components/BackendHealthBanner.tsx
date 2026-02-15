import { useEffect, useState } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, CheckCircle2, Loader2 } from 'lucide-react';
import { useActor } from '@/hooks/useActor';

export function BackendHealthBanner() {
  const { actor, isFetching } = useActor();
  const [healthStatus, setHealthStatus] = useState<'checking' | 'healthy' | 'unhealthy'>('checking');
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    let mounted = true;

    const checkHealth = async () => {
      if (!actor || isFetching) {
        return;
      }

      try {
        const isHealthy = await actor.healthy();
        if (mounted) {
          setHealthStatus(isHealthy ? 'healthy' : 'unhealthy');
          setShowBanner(!isHealthy);
        }
      } catch (error) {
        console.error('Backend health check failed:', error);
        if (mounted) {
          setHealthStatus('unhealthy');
          setShowBanner(true);
        }
      }
    };

    checkHealth();

    return () => {
      mounted = false;
    };
  }, [actor, isFetching]);

  if (!showBanner || healthStatus === 'checking') {
    return null;
  }

  if (healthStatus === 'unhealthy') {
    return (
      <Alert className="border-2 border-destructive bg-destructive/10 mx-4 mt-4">
        <AlertTriangle className="h-5 w-5 text-destructive" />
        <AlertDescription className="ml-2">
          <strong>Service Notice:</strong> We're experiencing connectivity issues with our backend services. 
          Some features may be temporarily unavailable. Please try again in a few moments.
        </AlertDescription>
      </Alert>
    );
  }

  return null;
}
