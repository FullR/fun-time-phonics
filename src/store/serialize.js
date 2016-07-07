// store only the data that needs to be persistant
export default function serialize({users, userNames, currentUserId}) {
  return {users, userNames, currentUserId};
}
