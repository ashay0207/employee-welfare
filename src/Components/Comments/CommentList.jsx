import React from 'react';
import './commentlist.css'

const CommentList = () => {
  // Retrieve comments from local storage
  const comments = JSON.parse(localStorage.getItem("comments")) || [];

  return (
    <div>
      <h2>Comments</h2>
      <div className="comment-list">
        {comments.map((comment, index) => (
          <div className="comment" key={index}>
            <strong>{comment.userName}:</strong> <span className='user-comment'>{comment.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentList;
