import React, { useState } from 'react';
import {
  FiHome,
  FiUser,
  FiBell,
  FiSettings,
  FiSearch,
  FiHeart,
  FiMessageSquare,
  FiSun,
  FiMoon,
} from 'react-icons/fi';

const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'Virendra',
      content: '🚀 Just launched the E-milo social app!',
      image: 'https://source.unsplash.com/random/600x400?tech',
      video: '',
      likes: 3,
      liked: false,
      comments: ['Awesome!', 'Congrats!'],
    },
    {
      id: 2,
      user: 'Jane',
      content: 'Loving the dark mode! 💻✨',
      image: '',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      likes: 7,
      liked: false,
      comments: [],
    },
  ]);

  const users = ['John Doe', 'Alice Smith', 'Virendra Nishad', 'Jane Parker'];

  const toggleLike = (id: number) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              liked: !p.liked,
              likes: p.liked ? p.likes - 1 : p.likes + 1,
            }
          : p
      )
    );
  };

  const addComment = (id: number, comment: string) => {
    if (!comment) return;
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, comments: [...p.comments, comment] } : p
      )
    );
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Topbar */}
        <header className="w-full px-6 py-4 shadow-md bg-white dark:bg-gray-800 flex items-center justify-between sticky top-0 z-50">
          <h1 className="text-2xl font-bold text-blue-600">E-milo</h1>
          <nav className="flex items-center gap-6 text-lg">
            <FiHome className="hover:text-blue-500 cursor-pointer" />
            <FiUser className="hover:text-blue-500 cursor-pointer" />
            <FiBell className="hover:text-blue-500 cursor-pointer" />
            <FiSettings className="hover:text-blue-500 cursor-pointer" />
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>
          </nav>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-12 gap-6 px-4 py-6">
          {/* User Search Section */}
          <aside className="md:col-span-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg h-fit sticky top-24">
            <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 rounded-xl px-3 py-2 mb-4">
              <FiSearch />
              <input
                type="text"
                placeholder="Search users..."
                className="bg-transparent focus:outline-none w-full text-sm"
              />
            </div>
            <div className="space-y-2">
              {users.map((user, idx) => (
                <div
                  key={idx}
                  className="px-3 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-700 cursor-pointer"
                >
                  {user}
                </div>
              ))}
            </div>
          </aside>

          {/* Feed Section */}
          <section className="md:col-span-9 space-y-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5"
              >
                <div className="font-semibold mb-2">{post.user}</div>
                <p className="mb-4">{post.content}</p>
                {post.image && (
                  <img
                    src={post.image}
                    alt="Post"
                    className="rounded-lg w-full mb-4"
                  />
                )}
                {post.video && (
                  <video
                    controls
                    className="rounded-lg w-full mb-4"
                    src={post.video}
                  />
                )}
                <div className="flex items-center gap-6 text-gray-500 dark:text-gray-400">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className="flex items-center gap-1 hover:text-pink-500"
                  >
                    <FiHeart className={post.liked ? 'text-pink-500' : ''} />{' '}
                    {post.likes}
                  </button>
                  <span className="flex items-center gap-1">
                    <FiMessageSquare /> {post.comments.length}
                  </span>
                </div>

                {/* Comment input */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const comment = (
                      e.currentTarget.elements.namedItem(
                        'comment'
                      ) as HTMLInputElement
                    ).value;
                    addComment(post.id, comment);
                    e.currentTarget.reset();
                  }}
                  className="mt-4 flex items-center gap-2"
                >
                  <input
                    name="comment"
                    type="text"
                    placeholder="Write a comment..."
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-sm focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="text-sm font-semibold text-blue-600 hover:underline"
                  >
                    Comment
                  </button>
                </form>

                {/* Comment list */}
                <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  {post.comments.map((comment, idx) => (
                    <li key={idx} className="pl-2 border-l-4 border-blue-500">
                      {comment}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
