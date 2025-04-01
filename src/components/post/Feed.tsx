import React, { useEffect, useState } from 'react';
import PostCard from '../post/PostCard';
import CreatePost from '../../pages/post/CreatePost';
import { fetchFeed } from '../../services/post.service';

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
          liked: post.likes.includes(/* currentUserId */), // update this once you implement auth
          comments: post.comments.map((c: any) => c.comment),
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

  const toggleLike = (id: number) => {
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
