import React, { useState } from 'react';

function Comments() {
  const [comment, setComment] = useState({
    text: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the comment text is empty
    if (!comment.text.trim()) {
      alert("Please enter a non-empty comment.");
      return;
    }

    // Get the logged-in user's name (assuming it's stored in localStorage)
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      alert("User not logged in");
      return;
    }

    // Create a new comment object with user's name and comment text
    const newComment = {
      userName: loggedInUser.name,
      text: comment.text,
    };

    // Retrieve existing comments from local storage
    const existingComments = JSON.parse(localStorage.getItem("comments")) || [];

    // Add the new comment to the existing comments
    existingComments.push(newComment);

    // Store the updated comments back in local storage
    localStorage.setItem("comments", JSON.stringify(existingComments));

    // Clear the comment input field
    setComment({ text: "" });
  };

    // localStorage.clear();
  return (
    <div className='comment'>
      <form onSubmit={handleSubmit}>
        <textarea
          name="comment"
          value={comment.text}
          onChange={(e) => setComment({ text: e.target.value })}
          cols="60"
          rows="2"
          placeholder='Enter Your Comment'
        ></textarea><br/>
        <button type="submit" className='btn btn-success'>Submit</button>
      </form>
    </div>
  );
}

export default Comments;
