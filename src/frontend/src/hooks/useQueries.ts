import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { useBackendHealth } from './useBackendHealth';
import { handleICError } from '@/utils/icErrors';

export function useGetAnswer() {
  const { actor, isFetching } = useActor();
  const queryClient = useQueryClient();
  const { isHealthy, isChecking } = useBackendHealth();

  return useMutation({
    mutationFn: async (question: string) => {
      // Validate input
      if (!question || question.trim().length === 0) {
        throw new Error('Question cannot be empty');
      }
      if (question.length > 1000) {
        throw new Error('Question is too long (max 1000 characters)');
      }

      // Check backend health before attempting call
      if (!actor) {
        throw new Error('Backend connection not available');
      }

      // Fast-fail if we know the backend is unhealthy
      if (!isChecking && !isHealthy) {
        throw new Error('The assistant service is temporarily unavailable. Please try again shortly.');
      }

      try {
        return await actor.getAnswer(question.trim());
      } catch (error) {
        // Sanitize IC replica errors for user display
        const sanitizedMessage = handleICError(error, 'getAnswer');
        throw new Error(sanitizedMessage);
      }
    },
    onError: (error) => {
      console.error('Error getting answer:', error);
    },
  });
}
