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
  FiCamera,
  FiMapPin,
  FiClock,
} from 'react-icons/fi';

const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'Virendra',
      content: 'Work from home',
      image: 'https://source.unsplash.com/featured/?developer,workspace',
      video: '',
      likes: 2,
      liked: false,
      comments: [],
    },
    {
      id: 2,
      user: 'Jane',
      content: 'Nature walk to clear the mind 🌿',
      image: 'https://source.unsplash.com/featured/?nature,walk',
      video: '',
      likes: 5,
      liked: false,
      comments: ['Looks peaceful!'],
    },
  ]);

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

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
        {/* Topbar */}
        <header className="w-full px-6 py-4 shadow-md bg-white dark:bg-gray-800 flex items-center justify-between sticky top-0 z-50">
          <h1 className="text-2xl font-extrabold text-gradient bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            E-milo
          </h1>
          <nav className="flex items-center gap-4 text-lg">
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

        <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-4 py-6">
          {/* Left Sidebar */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://source.unsplash.com/featured/?person"
                  className="w-14 h-14 rounded-full"
                  alt="Profile"
                />
                <div>
                  <div className="font-bold text-lg">Yash Roy</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    software engineer
                  </div>
                </div>
              </div>
              <div className="flex justify-between text-sm mb-4">
                <div>
                  <div className="font-bold text-center">1</div>
                  <div className="text-gray-500">Follower</div>
                </div>
                <div>
                  <div className="font-bold text-center">2</div>
                  <div className="text-gray-500">Following</div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 rounded-full">
                My Profile
              </button>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg">
              <h3 className="font-bold mb-3 text-lg">People you may know...</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://source.unsplash.com/featured/?woman"
                      className="w-8 h-8 rounded-full"
                      alt=""
                    />
                    <span>Payal SK</span>
                  </div>
                  <button className="text-xs bg-red-500 text-white rounded-full px-3 py-1">
                    Unfollow
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://source.unsplash.com/featured/?man"
                      className="w-8 h-8 rounded-full"
                      alt=""
                    />
                    <span>Ritesh Kumar</span>
                  </div>
                  <button className="text-xs bg-blue-500 text-white rounded-full px-3 py-1">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Feed Section */}
          <section className="lg:col-span-6 space-y-6">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
              <textarea
                placeholder="Write a caption..."
                className="w-full bg-transparent outline-none resize-none text-sm p-2 mb-4 border border-gray-200 dark:border-gray-600 rounded-lg"
              />
              <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                <div className="flex gap-4">
                  <span className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
                    <FiCamera /> Photo
                  </span>
                  <span className="flex items-center gap-1 cursor-pointer hover:text-green-500">
                    <FiMapPin /> Location
                  </span>
                  <span className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
                    <FiClock /> Schedule
                  </span>
                </div>
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full">
                  Share
                </button>
              </div>
            </div>

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
              </div>
            ))}
          </section>

          {/* Right Sidebar */}
          <aside className="lg:col-span-3 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg space-y-4 h-fit sticky top-24">
            <h3 className="font-bold mb-3 text-lg">Trending for you</h3>
            <ul className="space-y-2 text-sm">
              {[
                'ChatGPT',
                'Avengers',
                'AI technology info',
                'Cristiano Ronaldo',
                'Elon Musk',
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex justify-between hover:text-blue-600 cursor-pointer"
                >
                  <span>#{item}</span>
                  <span className="text-xs text-gray-400">
                    {100 - i * 10}k Shares
                  </span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-2 rounded-full">
              Share
            </button>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default Home;
