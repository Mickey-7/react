import React from 'react'
import { useParams } from 'react-router-dom';

function User() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { userId } = useParams();
  console.log(userId)

  return (
    <div>
      <h3>User {userId} was selected</h3>
    </div>
  );
}

export default User
