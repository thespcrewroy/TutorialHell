import { useState } from "react";

const emptyHeartImage = "https://i.imgur.com/wIq3Wbq.png"; // image URL for empty heart
const fullHeartImage = "https://i.imgur.com/vyX9Vnx.png"; // image URL for full heart

export default function LikeButton() {
  const [likes, setLikes] = useState(0); // initialize likes state to 0

  return (
    <div className="like-info">
      <div className="like-button" onClick={() => setLikes(likes + 1)}>
        {" "}
        {/* increment likes by 1 when clicking the button */}
        {likes > 0 ? ( // when likes is greater than 0
          <img src={fullHeartImage} alt="Heart for like button" /> // display full heart image
        ) : (
          // when likes is 0
          <img src={emptyHeartImage} alt="Empty heart for like button" /> // display empty heart image
        )}
      </div>
      {/* when likes=1, say 'Like', else say 'Likes' */}
      <p>{likes == 1 ? `  ${likes} Like` : `${likes} Likes`}</p>{" "}
    </div>
  );
}
