import users from '../data/users.json';
import './UsersBrowser.css';

function UsersBrowser() {
  return (
    <div className="UsersBrowser">
      {users.map((user, k) => <p key={k}>{user.name}</p>)}
    </div>
  );
}

export default UsersBrowser;
