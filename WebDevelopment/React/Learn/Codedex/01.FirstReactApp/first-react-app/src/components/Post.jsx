import FollowButton from "./FollowButton.jsx";
import LikeButton from "./LikeButton.jsx";

const postImage = "https://i.imgur.com/ZUZiJ4y.png"; // image URL for post
const userImage = "https://i.imgur.com/lfoiQZs.png"; // image URL for user profile

export default function Post() {
  return (
    <div className="post">
      <div className="user-info">
        <img id="profile-img" src={userImage} alt="Profile Image" />
        <p>Burpcorn</p> {/* username */}
        <FollowButton /> {/* follow button */}
      </div>
      <img id="post-img" src={postImage} alt="Post Image" /> {/* post image */}
      <LikeButton /> {/* like button */}
    </div> // end of post
  );
}
