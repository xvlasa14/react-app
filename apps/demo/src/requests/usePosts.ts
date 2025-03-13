import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/requests/responses";
import { Post } from "src/types/components";


/**
 * Custom hook to fetch posts.
 * 
 * @returns {UseQueryResult<Post[], Error>} The query result containing posts, loading state, and error state.
 */
export const usePosts = () => {
  return useQuery({ queryKey: ["posts"], queryFn: api.getPosts });
};

/**
 * Custom hook to create a new post.
 * 
 * @returns {UseMutationResult<Post, Error, Post, unknown>} The mutation function for creating a post.
 */
export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.createPost,
    onSuccess: (newPost) => {
      queryClient.setQueryData(["posts"], (oldPosts: Post[] = []) => [
        newPost,
        ...oldPosts,
      ]);
    },
  });
};

/**
 * Custom hook to delete a post.
 * 
 * @returns {UseMutationResult<void, Error, number, unknown>} The mutation function for deleting a post.
 */
export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.deletePost,
    onSuccess: (_, postId) => {
      queryClient.setQueryData(["posts"], (oldPosts: Post[] = []) =>
        oldPosts.filter((post) => post.id !== postId)
      );
    },
  });
};
