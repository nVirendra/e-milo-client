import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import {
  getUserProfile,
  followUser,
  unfollowUser,
  getUserPosts,
} from '../../services/user.service';
import { useAuth } from '../../context/AuthContext';
import ProfileHeader from '../../components/profile/ProfileHeader';
import UserPosts from '../../components/profile/UserPosts';

const UserProfile = () => {
  const { userId } = useParams();
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (userId) {
      getUserProfile(userId).then((res) => setProfile(res.data));
      getUserPosts(userId).then((res) => setPosts(res.data));
    }
  }, [userId]);

  const handleFollow = async () => {
    if (!profile) return;
    const res = profile.isFollowing
      ? await unfollowUser(userId)
      : await followUser(userId);
    setProfile((prev) => ({ ...prev, isFollowing: !prev.isFollowing }));
  };

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <ProfileHeader
        profile={profile}
        onFollowToggle={handleFollow}
        isMe={user._id === userId}
      />
      <UserPosts posts={posts} />
    </div>
  );
};

export default UserProfile;
