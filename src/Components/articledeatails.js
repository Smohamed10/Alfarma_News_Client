import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Comment from './Comment';
import { useParams, useNavigate } from 'react-router-dom';

const ArticleDetails = () => {
    let { id } = useParams();
    const navigate = useNavigate();

    const [news, setNews] = useState({
        loading: true,
        results: [],
        err: null,
        reload: '0'
    });

    useEffect(() => {
        setNews((prevState) => ({ ...prevState, loading: true }));
        axios
            .get(`https://alfarma-news-server.onrender.com/getpost/${id}`)
            .then((resp) => {
                setNews((prevState) => ({
                    ...prevState,
                    results: resp.data,
                    loading: false,
                    err: null
                }));
            })
            .catch(() => {
                setNews((prevState) => ({
                    ...prevState,
                    loading: false,
                    err: 'Something Went Wrong'
                }));
            });
    }, [id]);

    const postData = news.results.length > 0 ? news.results[0] : null;

    // State variables to manage form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comment: ''
    });

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send comment data to backend using axios post method
            await axios.post('https://alfarma-news-server.onrender.com/createcomment', {
                postID: postData.id,
                name: formData.name,
                email: formData.email,
                desc: formData.comment
            });
            // Refresh the page after submitting the comment
            window.location.reload();
        } catch (error) {
            console.error('Error posting comment:', error);
            // Handle error: display error message or log it
        }
    };

    // Function to update form data as user types
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-wrapper">
                            <div className="pp">
                                <h3 style={{ marginBottom: '1rem' }}>
                                    <strong>{postData && postData.name}</strong>
                                </h3>
                            </div>
                            <div className="pp">
                                <h3 style={{ color: 'blue' }}>{postData && postData.category}</h3>
                                <h5>
                                    <small> بقلم \ {postData && postData.writer_name}</small>
                                </h5>
                            </div>
                            <div className="banner-img">
                                <img
                                    src={postData && postData.pic_path}
                                    alt=""
                                    className="img-fluid"
                                    style={{ maxWidth: '100%', maxHeight: '100%', marginBottom: '2rem' }}
                                />
                            </div>
                            <div className="pp" style={{ whiteSpace: 'pre-line', fontFamily: 'Droid Arabic Naskh', fontSize: '25px' }}>
                                <p>
                                    <strong>{postData && decodeURIComponent(postData.content)}</strong>
                                </p>
                            </div>
                            <div className="custombox clearfix">
                                <h4 className="small-title"> التعليقات</h4>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="comments-list">
                                            <Comment postId={postData && postData.id} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="invis1" />
                            <div className="custombox clearfix">
                                <h4 className="small-title">اترك تعليقا</h4>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <form className="form-wrapper" onSubmit={handleSubmit}>
                                            <input type="text" className="form-control" placeholder="اسمك" name="name" value={formData.name} onChange={handleChange} />
                                            <input type="text" className="form-control" placeholder="البريد الالكتروني" name="email" value={formData.email} onChange={handleChange} />
                                            <textarea
                                                className="form-control"
                                                placeholder=" اكتب تعليقك"
                                                name="comment"
                                                value={formData.comment}
                                                onChange={handleChange}
                                            ></textarea>
                                            <button type="submit" className="btn btn-primary">
                                                اترك تعليقك
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArticleDetails;
