/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import axios from "axios";

const PostsContainer = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const { data } = await axios.get(
        `https://fayez-instagram.firebaseio.com/posts.json?orderBy="timestamp"`
      );

      if (data) {
        const sortedPost = Object.keys(data)
          .map((id) => ({
            postId: id,
            ...data[id],
          }))
          // .filter((_, i) => i < 2)
          .sort((a, b) => b.timestamp - a.timestamp);
        setPosts(sortedPost);
      }
    };
    getPost();
  }, []);

  return children({ posts });
};

export default PostsContainer;
