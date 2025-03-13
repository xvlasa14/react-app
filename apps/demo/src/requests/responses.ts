import { Post } from "src/types/components";

const BASE_URL = "https://jsonplaceholder.typicode.com";
/**
 * API service for handling posts.
 */
export const api = {
    /**
   * Fetches all posts.
   * 
   * @async
   * @function
   * @returns {Promise<Post[]>} A promise resolving to an array of posts.
   * @throws {Error} If the request fails.
   */
  getPosts: async (): Promise<Post[]> => {
    const response = await fetch(`${BASE_URL}/posts`);
    if (!response.ok) throw new Error("Failed to fetch posts");
    return response.json();
  },

  /**
   * Creates a new post.
   * 
   * @async
   * @function
   * @param {Post} newPost - The post data to be created.
   * @returns {Promise<Post>} A promise resolving to the created post.
   * @throws {Error} If the request fails.
   */
  createPost: async (newPost: Post): Promise<Post> => {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });
    if (!response.ok) throw new Error("Failed to create post");
    return response.json();
  },

  /**
   * Deletes a post by ID.
   * 
   * @async
   * @function
   * @param {number} postId - The ID of the post to delete.
   * @returns {Promise<void>} Resolves if the deletion is successful.
   * @throws {Error} If the request fails.
   */
  deletePost: async (postId: number): Promise<void> => {
    const response = await fetch(`${BASE_URL}/posts/${postId}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete post");
  },
};
