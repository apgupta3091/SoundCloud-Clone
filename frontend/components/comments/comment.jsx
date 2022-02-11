import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class Comment extends React.Component {

    render () {

        if (!this.props.comments) { return null }

        const { comments, currentUser, deleteComment } = this.props;

        return (
            <div className="comments-index-container">
                <ul>
                    {
                        comments.map((comment, i) => (
                            <li key={i}>
                                <div >
                                    <div >
                                        <Link to={`/users/${comment.commenter.id}`}><img className="commenter-profile-pic" src={comment.commenter.profilePic} /></Link>
                                        <div >
                                            <Link  to={`/users/${comment.commenter.id}`}>{comment.commenter.username}</Link>
                                            <div >{comment.body}</div>
                                        </div>
                                    </div>

                                    <div >
                                        <div >{comment.commentCreatedTime && comment.commentCreatedTime.includes("about") ? comment.commentCreatedTime.slice(6) : comment.commentCreatedTime}</div>

                                    {
                                        currentUser.id === comment.commenter.id ? (
                                            <button 
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