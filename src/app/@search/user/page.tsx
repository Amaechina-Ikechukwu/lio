"use client"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Page() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    // Perform search logic here based on the searchTerm
    // For example: Filter users list based on searchTerm
    // const filteredUsers = users.filter(user => user.includes(searchTerm));
    // setUsers(filteredUsers);
  };

  useEffect(() => {
    // Fetch users or perform any necessary initialization here
    // For example: setUser(initialUsers);
  }, []);

  return (
      <div>
        <div>
          <h2>Search Users</h2>
          <input
            type="text"
            placeholder="Search for a user..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div>
          <h2>User List</h2>
          <ul>
            {users.map((user, index) => (
              <li key={index}>{user}</li>
            ))}
          </ul>
        </div>
      </div>
  );
}
