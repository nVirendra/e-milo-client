import React, { useState, useEffect } from 'react';
import Header from '../../components/layout/Header';
import Feed from '../../components/post/Feed';
import defaultUser from '/src/assets/default-user.png';
import { useAuth } from '../../context/AuthContext';
import SearchSidebar from '../search/Search';
import { fetchUsers } from '../../services/user.service';
const Home: React.FC = () => {
  const { user } = useAuth();

  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchUsers(searchQuery).then((res) => {
        console.log('user data', res.data);
        setUsers(res.data);
      });
    }, 300); // debounce for better UX

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

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
          <SearchSidebar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            users={users}
          />
        </main>
      </div>
    </div>
  );
};

export default Home;
