import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import Header from '../../components/layout/Header';
import Feed from '../../components/post/Feed';
import defaultUser from '/src/assets/default-user.png';
import { useAuth } from '../../context/AuthContext';

const Home: React.FC = () => {
  const { user } = useAuth();
  console.log('authUser: ', user);

  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        {/* Enhanced Topbar */}
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="container mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Enhanced Left Sidebar */}
          <aside className="lg:col-span-3 space-y-6 sticky top-20 h-fit">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transition-all hover:shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={defaultUser}
                  className="w-16 h-16 rounded-full border-2 border-purple-500 p-1"
                  alt="Profile"
                />
                <div>
                  <h2 className="font-bold text-lg">{user?.name}</h2>
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
                My Profile
              </button>
            </div>
          </aside>

          {/* Enhanced Feed Section */}
          <section className="lg:col-span-6 space-y-6">
            <Feed />
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
                {users.map((user, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={defaultUser}
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
