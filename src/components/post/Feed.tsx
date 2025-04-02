import React, { useEffect, useState } from 'react';
import PostCard from '../post/PostCard';
import CreatePost from '../../pages/post/CreatePost';
import { fetchFeed, likePost } from '../../services/post.service';
import { useAuth } from '../../context/AuthContext';

interface Post {
  id: number;
  user: string;
  content: string;
  image: string;
  privacy: string;
  likes: number;
  liked: boolean;
  comments: string[];
}

const Feed: React.FC = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await fetchFeed(); // assuming Axios response format
        const normalizedPosts = data.map((post: any) => ({
          id: post._id,
          user: post.userId?.name || 'Unknown User',
          content: post.content,
          image: post.mediaType === 'image' ? post.mediaUrl : '',
          video: post.mediaType === 'video' ? post.mediaUrl : '',
          likes: post.likes.length,
          liked: post.likes.includes(user.id),
          comments: post.comments.map((c: any) => ({
            name: c.userId?.name || 'User',
            comment: c.comment,
          })),
          privacy: post.privacy,
          createdAt: post.createdAt,
        }));

        setPosts(normalizedPosts);
      } catch (error) {
        console.error('Fetch Feed failed:', error);
      }
    };

    fetchPosts();
  }, []);

  const toggleLike = async (id: number) => {
    try {
      // Optimistically update UI
      setPosts((prev) =>
        prev.map((post) =>
          post.id === id
            ? {
                ...post,
                liked: !post.liked,
                likes: post.liked ? post.likes - 1 : post.likes + 1,
              }
            : post
        )
      );

      // Send API request
      await likePost(id.toString());
    } catch (error) {
      console.error('Error liking post:', error);
      // Optionally revert UI on failure
      setPosts((prev) =>
        prev.map((post) =>
          post.id === id
            ? {
                ...post,
                liked: !post.liked,
                likes: post.liked ? post.likes + 1 : post.likes - 1,
              }
            : post
        )
      );
    }
  };

  return (
    <section className="space-y-6">
      <CreatePost />
      {posts.map((post) => (
        <PostCard key={post.id} post={post} toggleLike={toggleLike} />
      ))}
    </section>
  );
};

export default Feed;
