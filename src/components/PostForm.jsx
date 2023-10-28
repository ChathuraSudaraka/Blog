import React, { useState } from "react";
import image from "/assets/img/01.jpg";
import MyButton from "./UI/MyButton";
import MyInput from "./UI/MyInput";

export default function PostForm({ create }) {
  const [post, setPost] = useState({ title: "", body: "", photo: image });

  function addNewPost(event) {
    event.preventDefault();
    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ title: "", body: "", photo: image });
  }

  return (
    <form>
      <MyInput
        style={{ marginBottom: "10px" }}
        value={post.title}
        onChange={(event) => setPost({ ...post, title: event.target.value })}
        type="text"
        placeholder="Title of the post"
      />
      <MyInput
        value={post.body}
        onChange={(event) => setPost({ ...post, body: event.target.value })}
        type="text"
        placeholder="Description of the post"
      />
      <MyButton
        style={{ display: "block", margin: "15px auto 0px auto" }}
        onClick={addNewPost}
      >
        Create
      </MyButton>
    </form>
  );
}
