import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

// Example query hooks for backend integration (not used in current implementation)
export function useGetAllPhotos() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['photos'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllPhotos();
    },
    enabled: !!actor && !isFetching,
  });
}
