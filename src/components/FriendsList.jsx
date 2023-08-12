import Friend from "./Friend";

function FriendsList({ initialFriends }) {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id}/>
      ))}
    </ul>
  );
}

export default FriendsList;
