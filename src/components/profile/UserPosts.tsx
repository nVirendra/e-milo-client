const UserPosts = ({ posts }: { posts: any[] }) => {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <div
          key={post._id}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
        >
          <p className="text-lg">{post.content}</p>
          {post.image && (
            <img src={post.image} alt="Post" className="mt-4 rounded-xl" />
          )}
        </div>
      ))}
    </div>
  );
};

export default UserPosts;
