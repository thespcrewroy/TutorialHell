import { useState } from "react";

export default function FollowButton() {
  const [following, setFollowing] = useState(false); // initialize following state to false
  return (
    <div
      id="follow-button"
      className={following ? "following" : "not-following"}
      onClick={() => setFollowing(!following)}
    >
      {" "}
      {/* toggle the 'following' classname and variable condition when clicking the button */}
      {following ? "Following" : "Follow"}{" "}
      {/* set text to "Following" when "following" is true and "Follow" when false */}
    </div>
  );
}
