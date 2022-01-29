import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="container list-group mb-4">
      {posts.map(post => (
        <li key={post.questionId} className="list-group-item text-left">
          {post.question}
          <p>{post.answer}</p>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
