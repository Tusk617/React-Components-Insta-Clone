// You will add code in this file
import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  let [likes, addLikes] = useState(props.likes);
  return (
    <div className="post-border">
      <PostHeader
        username={props.content.username}
        thumbnailUrl={
          props.content.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.content.imageUrl}
        />
      </div>
      <LikeSection />
      <CommentSection
        postId={props.content.imageUrl}
        comments={props.content.comments}
      />
    </div>
  );
};

export default Post;


