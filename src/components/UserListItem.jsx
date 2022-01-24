function UserListItem({ user, position, isActive, onUserSelect }) { 
  const className = isActive ? "UserListItem UserListItem--active" : "UserListItem"

  const onClick = () => {
    if (isActive) {
      onUserSelect(null);
    } else {
      onUserSelect(user)
    }
  }

  return (
    <div className={className} style={{ top: position*70 }} onClick={onClick}>
      <div className="UserListItem_name">{user.name}</div>
      <div className="UserListItem_phone">{user.phone}</div>
    </div>
  );
}

export default UserListItem;