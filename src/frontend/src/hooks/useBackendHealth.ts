import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

export type HealthStatus = 'checking' | 'healthy' | 'unhealthy';

export interface BackendHealthResult {
  status: HealthStatus;
  reason?: string;
  isHealthy: boolean;
  isChecking: boolean;
  isUnhealthy: boolean;
}

export function useBackendHealth(): BackendHealthResult {
  const { actor, isFetching: actorFetching } = useActor();

  const healthQuery = useQuery({
    queryKey: ['backend-health'],
    queryFn: async () => {
      if (!actor) {
        return null; // Return null instead of throwing during initialization
      }
      try {
        const isHealthy = await actor.healthy();
        return isHealthy;
      } catch (error) {
        console.warn('Health check failed:', error);
        return false;
      }
    },
    enabled: !!actor && !actorFetching,
    refetchInterval: 30000, // Refetch every 30 seconds
    refetchOnWindowFocus: true, // Auto-recover when user returns
    refetchOnReconnect: true, // Auto-recover on network reconnect
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 10000),
    staleTime: 10000, // Consider data fresh for 10 seconds
    gcTime: 60000, // Keep in cache for 1 minute
  });

  // Determine status with recovery-first logic
  let status: HealthStatus = 'checking';
  let reason: string | undefined;

  // If actor is still initializing, we're checking
  if (actorFetching || !actor) {
    status = 'checking';
  }
  // If query is loading for the first time (no data yet), we're checking
  else if (healthQuery.isLoading && healthQuery.data === undefined) {
    status = 'checking';
  }
  // If we're refetching but have previous good data, stay healthy during recheck
  else if (healthQuery.isFetching && healthQuery.data === true) {
    status = 'healthy';
  }
  // If we have definitive healthy result
  else if (healthQuery.data === true) {
    status = 'healthy';
  }
  // If we have definitive unhealthy result (false)
  else if (healthQuery.data === false) {
    status = 'unhealthy';
    reason = 'Assistant service is not ready';
  }
  // If query failed with error after retries
  else if (healthQuery.isError && !healthQuery.isFetching) {
    status = 'unhealthy';
    reason = 'Unable to connect to backend services';
  }
  // If we have null (actor wasn't ready during query), keep checking
  else if (healthQuery.data === null) {
    status = 'checking';
  }
  // Default to checking for any other state
  else {
    status = 'checking';
  }

  return {
    status,
    reason,
    isHealthy: status === 'healthy',
    isChecking: status === 'checking',
    isUnhealthy: status === 'unhealthy',
  };
}
