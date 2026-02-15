import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { useBackendHealth } from './useBackendHealth';
import { handleICError } from '@/utils/icErrors';

export function useGetAnswer() {
  const { actor, isFetching } = useActor();
  const queryClient = useQueryClient();
  const { isUnhealthy } = useBackendHealth();

  return useMutation({
    mutationFn: async (question: string) => {
      // Validate input
      if (!question || question.trim().length === 0) {
        throw new Error('Question cannot be empty');
      }
      if (question.length > 1000) {
        throw new Error('Question is too long (max 1000 characters)');
      }

      // Check backend connection
      if (!actor) {
        throw new Error('Backend connection not available');
      }

      // Only fast-fail if we definitively know the backend is unhealthy
      if (isUnhealthy) {
        throw new Error('The assistant service is temporarily unavailable. Please try again shortly.');
      }

      try {
        return await actor.getAnswer(question.trim());
      } catch (error) {
        // Sanitize IC replica errors for user display
        const sanitizedMessage = handleICError(error, 'getAnswer');
        
        // Trigger health recheck on failure
        queryClient.invalidateQueries({ queryKey: ['backend-health'] });
        
        throw new Error(sanitizedMessage);
      }
    },
    onError: (error) => {
      // Only log warnings for debugging, not errors (to avoid noisy console)
      console.warn('Answer request failed:', error instanceof Error ? error.message : error);
    },
  });
}
