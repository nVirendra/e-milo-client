// PostCard.tsx
import React from 'react';
import { FiHeart, FiMessageSquare, FiLock, FiGlobe } from 'react-icons/fi';
import defaultUser from '/src/assets/default-user.png';

interface Post {
  id: number;
  user: string;
  content: string;
  privacy: string;
  image?: string;
  likes: number;
  liked: boolean;
  comments: string[];
}

interface PostCardProps {
  post: Post;
  toggleLike: (id: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, toggleLike }) => {
  console.log('this post', post);
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 transition-all hover:shadow-2xl border border-gray-100 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={defaultUser}
          className="w-12 h-12 rounded-full border-2 border-purple-500"
          alt="User"
        />
        <div>
          <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
            {post.user}
          </h3>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            {post.privacy === 'private' ? (
              <>
                <FiLock className="w-4 h-4" />
                <span>Private</span>
              </>
            ) : (
              <>
                <FiGlobe className="w-4 h-4" />
                <span>Public</span>
              </>
            )}
          </p>
        </div>
      </div>
      <p className="mb-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        {post.content}
      </p>
      {post.image && (
        <img
          src={post.image}
          alt="Post"
          className="rounded-xl w-full mb-4 object-cover h-96 border border-gray-200 dark:border-gray-600"
        />
      )}
      <div className="flex items-center gap-6 text-gray-500 pt-4 border-t border-gray-100 dark:border-gray-700">
        <button
          onClick={() => toggleLike(post.id)}
          className="flex items-center gap-2 group"
        >
          <div className="p-2 rounded-full transition-colors group-hover:bg-purple-100 dark:group-hover:bg-gray-700">
            <FiHeart
              className={`w-6 h-6 transition-colors ${
                post.liked
                  ? 'text-red-500 fill-red-500'
                  : 'text-red-500 border-2 border-red-500 rounded-full p-1'
              } group-hover:text-purple-600`}
            />
          </div>
          <span
            className={`font-medium transition-colors ${
              post.liked
                ? 'text-red-500'
                : 'text-gray-600 group-hover:text-purple-600'
            }`}
          >
            {post.likes}
          </span>
        </button>
        <button className="flex items-center gap-2 group">
          <div className="p-2 rounded-full transition-colors group-hover:bg-purple-100 dark:group-hover:bg-gray-700">
            <FiMessageSquare className="w-6 h-6 text-blue-500 group-hover:text-purple-600 transition-colors" />
          </div>
          <span className="font-medium text-gray-600 group-hover:text-purple-600">
            {post.comments.length}
          </span>
        </button>
      </div>

      {/* Comments Section */}
      {post.comments.length > 0 && (
        <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 space-y-4">
          {post.comments.map((comment, index) => (
            <div key={index} className="flex items-start gap-3">
              <img
                src="https://source.unsplash.com/featured/?user"
                className="w-8 h-8 rounded-full"
                alt="Commenter"
              />
              <div className="flex-1">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3">
                  <div className="font-medium text-sm text-purple-600 dark:text-purple-400">
                    User {index + 1}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{comment}</p>
                </div>
                <div className="flex items-center gap-4 mt-2 ml-3 text-xs text-gray-400">
                  <button className="hover:text-purple-600">Like</button>
                  <button className="hover:text-purple-600">Reply</button>
                  <span>1h</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostCard;
