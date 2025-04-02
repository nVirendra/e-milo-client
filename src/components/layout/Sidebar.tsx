import React from 'react';
import defaultUser from '/src/assets/default-user.png';
import { useAuth } from '../../context/AuthContext';

const LeftSidebar: React.FC = () => {
  const { user } = useAuth();

  return (
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
  );
};

export default LeftSidebar;
