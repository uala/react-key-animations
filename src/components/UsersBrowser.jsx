import { useState } from 'react';
import users from '../data/users.json';
import UserListItem from './UserListItem';
import './UsersBrowser.css';

function UsersBrowser() {
  const [activeUser, setActiveUser] = useState();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = activeUser
    ? [activeUser]
    : searchQuery
      ? users.filter(user => user.name.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0)
      : users;

  return (
    <div className="UsersBrowser">
      {filteredUsers.map((user, k) => {
        return (
          <UserListItem
            key={user.id}
            user={user}
            position={k}
            isActive={user === activeUser}
            onUserSelect={setActiveUser} />
        );
      })}

      {!activeUser && <input onChange={e => setSearchQuery(e.target.value)} value={searchQuery} />}
    </div>
  );
}

export default UsersBrowser;
