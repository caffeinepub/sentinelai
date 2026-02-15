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
        throw new Error('Backend actor not available');
      }
      const isHealthy = await actor.healthy();
      return isHealthy;
    },
    enabled: !!actor && !actorFetching,
    refetchInterval: 30000, // Refetch every 30 seconds
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 10000),
  });

  // Determine status
  let status: HealthStatus = 'checking';
  let reason: string | undefined;

  if (healthQuery.isLoading || actorFetching) {
    status = 'checking';
  } else if (healthQuery.isError) {
    status = 'unhealthy';
    reason = 'Unable to connect to backend services';
  } else if (healthQuery.data === false) {
    status = 'unhealthy';
    reason = 'Assistant service is not ready';
  } else if (healthQuery.data === true) {
    status = 'healthy';
  }

  return {
    status,
    reason,
    isHealthy: status === 'healthy',
    isChecking: status === 'checking',
    isUnhealthy: status === 'unhealthy',
  };
}
