import React, { useState } from "react";

function Comment() {
  const [comment, setComment] = useState([]);
  const [showComment, setShowComment] = useState(false);

  const handleCommentClick = () => {
    setShowComment(!showComment);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComment([...comment, e.target.comment.value]);
    setShowComment(!showComment);
  };

  return (
    <>
      {comment.length > 0 && 
        comment.map((comentario) => {
          return(
            <ul>
              <li>{comentario}</li>
            </ul>
          )
        })
      }
      
      {showComment ?
        <form onSubmit={handleSubmit}>
          <textarea id="comment" />
          <button type="submit">Comentar</button>
        </form>
      :
        <button onClick={handleCommentClick}>Dejar comentario</button>
      }
    </>
  );
}

export default Comment;
