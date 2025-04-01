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
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState([
    // ... existing posts array
  ]);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Payal SK',
      avatar: 'https://source.unsplash.com/featured/?woman',
      followers: 1420,
      following: false,
    },
    {
      id: 2,
      name: 'Ritesh Kumar',
      avatar: 'https://source.unsplash.com/featured/?man',
      followers: 2560,
      following: true,
    },
    // Add more users as needed
  ]);

  const toggleLike = (id: number) => {
    // ... existing toggleLike implementation
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        {/* Enhanced Topbar */}
        <header className="w-full px-6 py-4 bg-white/80 dark:bg-gray-800/90 backdrop-blur-md shadow-sm flex items-center justify-between sticky top-0 z-50">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 px-3 py-1 rounded-xl shadow-md text-white font-bold text-lg tracking-wide hover:brightness-110 transition-all duration-300">
            E-milo
          </span>

          <div className="flex items-center gap-5">
            <FiSearch className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-purple-600 cursor-pointer transition-colors" />
            <div className="flex items-center gap-4">
              {[FiHome, FiBell, FiUser].map((Icon, index) => (
                <Icon
                  key={index}
                  className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-purple-600 cursor-pointer transition-colors"
                />
              ))}
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              {darkMode ? (
                <FiSun className="w-5 h-5 text-yellow-400" />
              ) : (
                <FiMoon className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Enhanced Left Sidebar */}
          <aside className="lg:col-span-3 space-y-6 sticky top-20 h-fit">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transition-all hover:shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://source.unsplash.com/featured/?person"
                  className="w-16 h-16 rounded-full border-2 border-purple-500 p-1"
                  alt="Profile"
                />
                <div>
                  <h2 className="font-bold text-lg">Yash Roy</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Software Engineer
                  </p>
                </div>
              </div>
              <div className="flex justify-around mb-6">
                <div className="text-center">
                  <div className="font-bold text-xl">1.2K</div>
                  <div className="text-sm text-gray-500">Followers</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-xl">589</div>
                  <div className="text-sm text-gray-500">Following</div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:brightness-110">
                View Profile
              </button>
            </div>
          </aside>

          {/* Enhanced Feed Section */}
          <section className="lg:col-span-6 space-y-6">
            {/* Create Post Card */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transition-all hover:shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://source.unsplash.com/featured/?person"
                  className="w-12 h-12 rounded-full"
                  alt="Profile"
                />
                <textarea
                  placeholder="What's on your mind?"
                  className="w-full bg-transparent outline-none resize-none placeholder-gray-400 dark:placeholder-gray-500 text-sm h-20"
                />
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex gap-5">
                  {[
                    {
                      Icon: FiCamera,
                      label: 'Photo',
                      color: 'text-purple-500',
                    },
                    {
                      Icon: FiMapPin,
                      label: 'Location',
                      color: 'text-blue-500',
                    },
                    {
                      Icon: FiClock,
                      label: 'Schedule',
                      color: 'text-orange-500',
                    },
                  ].map((item, index) => (
                    <button
                      key={index}
                      className={`flex items-center gap-2 ${item.color} hover:opacity-80 transition-opacity`}
                    >
                      <item.Icon className="w-5 h-5" />
                      <span className="text-sm">{item.label}</span>
                    </button>
                  ))}
                </div>
                <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-white px-6 py-2.5 rounded-xl hover:shadow-lg transition-all">
                  Post
                </button>
              </div>
            </div>

            {/* Enhanced Posts */}
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-all hover:shadow-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="https://source.unsplash.com/featured/?person"
                    className="w-10 h-10 rounded-full"
                    alt="User"
                  />
                  <div>
                    <h3 className="font-semibold">{post.user}</h3>
                    <p className="text-sm text-gray-500">2h ago</p>
                  </div>
                </div>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  {post.content}
                </p>
                {post.image && (
                  <img
                    src={post.image}
                    alt="Post"
                    className="rounded-xl w-full mb-4 object-cover h-96"
                  />
                )}
                <div className="flex items-center gap-6 text-gray-500">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className="flex items-center gap-2 hover:text-pink-500 transition-colors"
                  >
                    <FiHeart
                      className={`w-5 h-5 ${
                        post.liked
                          ? 'text-pink-500 fill-current animate-heartbeat'
                          : ''
                      }`}
                    />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                    <FiMessageSquare className="w-5 h-5" />
                    <span>{post.comments.length}</span>
                  </button>
                </div>
              </div>
            ))}
          </section>

          {/* Enhanced Right Sidebar */}
          {/* Right Sidebar - Updated to Search Section */}
          <aside className="lg:col-span-3 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg sticky top-20 h-fit">
            <div className="relative mb-6">
              <FiSearch className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Suggested Users */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-lg mb-4">Suggested for You</h3>
              <div className="space-y-4">
                {[
                  { name: 'Payal SK', img: 'woman', status: 'follow' },
                  { name: 'Ritesh Kumar', img: 'man', status: 'following' },
                ].map((user, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={`https://source.unsplash.com/featured/?${user.img}`}
                        className="w-10 h-10 rounded-full border-2 border-transparent group-hover:border-purple-500 transition-all"
                        alt=""
                      />
                      <span className="group-hover:text-purple-600 transition-colors">
                        {user.name}
                      </span>
                    </div>
                    <button
                      className={`text-sm px-4 py-1.5 rounded-full ${
                        user.status === 'follow'
                          ? 'bg-purple-500 text-white hover:bg-purple-600'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      } transition-colors`}
                    >
                      {user.status === 'follow' ? 'Follow' : 'Following'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default Home;
