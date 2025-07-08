import React from 'react';
import './CommentTable.css';

export default function CommentTable({ comments }) {
  return (
    <div className="table-wrapper">
      <div className="table-header">
        <div className="table-cell">Post ID</div>
        <div className="table-cell">Name</div>
        <div className="table-cell">Email</div>
        <div className="table-cell">Comment</div>
      </div>
      <div className="table-body">
        {comments.map((comment) => (
          <div className="table-row" key={comment.id}>
            <div className="table-cell" data-label="Post ID">{comment.postId}</div>
            <div className="table-cell" data-label="Name">{comment.name}</div>
            <div className="table-cell" data-label="Email">{comment.email}</div>
            <div className="table-cell" data-label="Comment">{comment.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
