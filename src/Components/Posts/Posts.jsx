import React, { useState, useEffect } from "react";
import Post from "./Post/Post";
import axios from "axios";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPost = async () => {
      const { data } = await axios.get(
        "https://fayez-instagram.firebaseio.com/posts.json"
      );
      if (data) {
        const sortedPost = Object.keys(data)
          .map((id) => data[id])
          // .filter((_, i) => i < 2)
          .sort((a, b) => b.timestamp - a.timestamp);
        setPosts(sortedPost);
      }
    };
    getPost();
  }, []);
  // console.log(posts);

  return (
    <div className="content-wrapper">
      <div className="container d-flex align-items-center justify-content-center flex-column">
        {posts.map((post) => {
          console.log(post);
          return <Post key={post.timestamp} {...post} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
