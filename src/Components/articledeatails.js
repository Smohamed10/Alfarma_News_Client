import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Comment from "./Comment";
import { useParams } from "react-router-dom";

const Articledeatails = () => {
    let { id } = useParams();
    const [news, setNews] = useState({
        loading: true,
        results: [], // Initialize results as an empty array
        err: null,
        reload: "0"
    });

    useEffect(() => {
        setNews((prevState) => ({ ...prevState, loading: true }));
        axios.get(`http://localhost:4004/getpost/${id}`)
            .then((resp) => {
                setNews((prevState) => ({ ...prevState, results: resp.data, loading: false, err: null }));
                console.log(resp)
            })
            .catch(() => {
                setNews((prevState) => ({ ...prevState, loading: false, err: 'Something Went Wrong' }));
            });
    }, [id]);

    // Check if data exists in the results array before accessing its properties
    const postData = news.results.length > 0 ? news.results[0] : null;

    return (
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-wrapper">
                        <div className="pp">
                                <h3 style={{marginBottom:'1rem'}}><strong>{postData && postData.name}</strong></h3></div>
                                <div className="pp">
                                <h3 style={{color:'blue'}}>{postData && postData.category}</h3>
                                <h5><small> بقلم \ {postData && postData.writer_name}</small></h5>
                            </div>
                            <div className='banner-img'>
                        <img
    src={postData && postData.pic_path}
    alt=""
    className="img-fluid"
    style={{ maxWidth: '100%', maxHeight: '100%',marginBottom:'2rem' }} // Adjust maxWidth and maxHeight as needed
/></div>


                            <div className="pp" style={{ whiteSpace: 'pre-line' ,fontfamily: 'Droid Arabic Naskh',   fontsize:'25px'}}>
    <p><strong>{postData && decodeURIComponent(postData.content)}</strong></p>
</div>

                            <div className="custombox clearfix">
                                <h4 className="small-title"> التعليقات</h4>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="comments-list">
                                            <Comment />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="invis1" />

                            <div className="custombox clearfix">
                                <h4 className="small-title">اترك تعليقا</h4>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <form className="form-wrapper">
                                            <input type="text" className="form-control" placeholder="اسمك" />
                                            <input type="text" className="form-control" placeholder="البريد الالكتروني" />
                                            <textarea className="form-control" placeholder=" اكتب تعليقك"></textarea>
                                            <button type="submit" className="btn btn-primary">اترك تعليقك</button>
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

export default Articledeatails;
