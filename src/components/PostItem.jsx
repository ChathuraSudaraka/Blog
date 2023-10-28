import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./UI/MyButton";

export default function PostItem(props) {
  const router = useNavigate();
  return (
    <div className="post">
      <div className="post__content">
        <div className="post__image">
          <img src={props.post.photo} alt={"post-photo"} />
        </div>
        <div className="post__body">
          <div className="post__info">
            <h2 className="post__title">{props.post.title}</h2>
            <div className="post__text">{props.post.body}</div>
          </div>
          <div className="post__buttons">
            <MyButton
              onClick={() => router(`/posts/${props.post.id}`)}
              className="post__button"
            >
              Open
            </MyButton>
            <MyButton
              onClick={() => props.remove(props.post)}
              className="post__button"
            >
              Delete
            </MyButton>
          </div>
        </div>
      </div>
    </div>
  );
}
