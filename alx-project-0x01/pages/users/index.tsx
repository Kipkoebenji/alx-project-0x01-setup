import Header from "@/components/layout/Header";export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Users
import React from 'react';
import UserCard from '../../components/UserCard'; // adjust path as needed

// Sample posts data (you might fetch this from an API or props)
const posts = [
  { id: 1, name: 'Alice', bio: 'Frontend Developer' },
  { id: 2, name: 'Bob', bio: 'Backend Developer' },
];

const UsersPage = () => {
  return (
    <div>
      <h1>Users</h1>
      <div className="user-list">
        {posts.map((post) => (
          <UserCard key={post.id} name={post.name} bio={post.bio} />
        ))}
      </div>
    </div>
  );
};

export default Users;

export default UsersPage;
