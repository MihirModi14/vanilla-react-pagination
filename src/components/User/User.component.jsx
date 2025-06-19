import "./User.css";

export const User = ({ user }) => {
  return (
    <div className="user">
      <img src={user.image} />
      <span>
        {user.firstName} {user.lastName}
      </span>
    </div>
  );
};
