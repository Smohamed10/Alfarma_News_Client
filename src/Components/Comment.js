import React, { useEffect, useState } from 'react';
import axios from 'axios';
import avatar from '../images/_Pngtree_user_icon_5097430-removebg-preview.png';
const Comment = (props) => {
    const postId = props.postId;

    const [comment, setComment] = useState({
        loading: true,
        results: [],
        err: null,
        reload: "0"
    });
  
    useEffect(() => {
        if (!postId) return; // Skip the API call if postId is null or undefined

        setComment((prevState) => ({ ...prevState, loading: true }));

        axios.get("http://localhost:4004/getcomment",{
            params: {
                postid: postId // Pass selected option as query parameter
            }
        })
            .then((resp) => {
                setComment((prevState) => ({ ...prevState, results: resp.data, loading: false, err: null }));
            })
            .catch(() => {
                setComment((prevState) => ({ ...prevState, loading: false, err: 'Something Went Wrong' }));
            });
    }, [postId]);

    return (
        <div>
            {comment.results.map((item, index) => (
                <div key={index} className="media last-child">
                    <a className="media-left" href=" ">
                    <img src={avatar} alt="" className="rounded-circle" style={{ backgroundColor: 'transparent' }} />
                    </a>
                    <div className="media-body">
                        <h4 className="media-heading user_name"><small>{item.time}</small> {item.name} </h4>
                        <p>{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Comment;
