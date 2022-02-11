import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class Comment extends React.Component {

    render () {

        if (!this.props.comments) { return null }

        const { comments, currentUser, deleteComment } = this.props;

        return (
            <div className="comments-container">
                <ul>
                    {
                        comments.map((comment, i) => (
                            <li key={i}>
                                <div className="comment-top-div">
                                    <div className="comment-main-div" >
                                        <Link to={`/users/${comment.commenter.id}`}><img className="commenter-profile-pic" src={comment.commenter.profilePic} /></Link>
                                        <div className="comment-content-div" >
                                            <Link className="user-link" to={`/users/${comment.commenter.id}`}>{comment.commenter.username}</Link>
                                            <div >{comment.body}</div>
                                        </div>
                                    </div>

                                    <div className="comment-bottom-container">
                                        <div className="created-at" >{comment.commentCreatedTime && comment.commentCreatedTime.includes("about") ? comment.commentCreatedTime.slice(6) : comment.commentCreatedTime}</div>

                                    {
                                        currentUser.id === comment.commenter.id ? (
                                            <button 
                                                className="delete-comment-btn"
                                                onClick={() => deleteComment(comment.id)}>
                                                <FontAwesomeIcon icon={faTrashAlt} />
                                            </button>
                                        ) : null
                                    }
                                    </div>
                                    
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Comment;