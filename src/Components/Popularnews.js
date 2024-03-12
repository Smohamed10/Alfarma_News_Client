import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PopularNews = () => {
    const [news, setPopularnews] = useState({
        loading: true,
        results: [],
        err: null,
        reload: "0"
    });

    useEffect(() => {
        setPopularnews({ loading: true, results: [], err: null, reload: "0" }); // Set loading state
        axios.get("http://localhost:4004/last5")
            .then((resp) => {            
                setPopularnews({ loading: false, results: resp.data, err: null, reload: "0" }); // Update state with fetched data
            })
            .catch(() => {
                setPopularnews({ loading: false, results: [], err: "Something went wrong", reload: "0" }); // Update state with error
            });
    }, []);
    
    return (
        <section className="section first-section">
            <div className="container-fluid">
                <div className="masonry-blog clearfix">
                {news.results.length > 0 && (
                        <>
                            <div className="left-side">
                                <div className="masonry-box post-media" >
                                    <img src={news.results[0].pic_path} alt="" style={{height: '25.4rem'}} className="img-fluid"/>
                                    <div className="shadoweffect">
                                        <div className="shadow-desc">
                                            <div className="blog-meta">
                                            <span className="bg-aqua"><a style={{fontSize:'15px'}} href={`/Articledeatails/${news.results[0].id}`} title="">{news.results[0].category}</a></span>
                                        <h4  ><a style={{fontSize:'25px'}} href={`/Articledeatails/${news.results[0].id}`}title="">{news.results[0].name}</a></h4>
                                        <a href={`/Articledeatails/${news.results[0].id}`} style={{fontSize:'15px',borderColor:'black',float:'right'}}>اقرأ المزيد</a>
                                        <small><a style={{fontSize:'15px'}}href={`/Articledeatails/${news.results[0].id}`} title="">{news.results[0].time}</a></small>
                                        <small><a style={{fontSize:'15px'}}href={`/Articledeatails/${news.results[0].id}`} title="">{news.results[0].writer_name}</a></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="center-side">
                        <div className="masonry-box post-media">
                             <img src={news.results[1].pic_path} alt="" className="img-fluid"/>
                             <div className="shadoweffect">
                                <div className="shadow-desc">
                                    <div className="blog-meta">
                                    <span className="bg-green"><a style={{fontSize:'15px'}} href={`/Articledeatails/${news.results[1].id}`} title="">{news.results[1].category}</a></span>
                                        <h4  ><a style={{fontSize:'25px'}} href={`/Articledeatails/${news.results[1].id}`}title="">{news.results[1].name}</a></h4>
                                        <a href={`/Articledeatails/${news.results[1].id}`} style={{fontSize:'15px',borderColor:'black',float:'right'}}>اقرأ المزيد</a>
                                        <small><a style={{fontSize:'15px'}}href={`/Articledeatails/${news.results[1].id}`} title="">{news.results[1].time}</a></small>
                                        <small><a style={{fontSize:'15px'}}href={`/Articledeatails/${news.results[1].id}`} title="">{news.results[1].writer_name}</a></small>
                                    </div> 
                                </div> 
                            </div> 
                        </div> 

                        <div className="masonry-box small-box post-media">
                             <img src={news.results[2].pic_path} alt="" className="img-fluid"/>
                             <div className="shadoweffect">
                                <div className="shadow-desc">
                                    <div className="blog-meta">
                                    <span className="bg-green"><a style={{fontSize:'15px'}} href={`/Articledeatails/${news.results[2].id}`} title="">{news.results[2].category}</a></span>
                                        <h4  ><a style={{fontSize:'15px'}} href={`/Articledeatails/${news.results[2].id}`}title="">{news.results[2].name}</a></h4>
                                        <a href={`/Articledeatails/${news.results[2].id}`} style={{fontSize:'8px',borderColor:'black',float:'right'}}>اقرأ المزيد</a>
                                        <small><a style={{fontSize:'8px'}}href={`/Articledeatails/${news.results[2].id}`} title="">{news.results[2].time}</a></small>
                                        <small><a style={{fontSize:'8px'}}href={`/Articledeatails/${news.results[2].id}`} title="">{news.results[2].writer_name}</a></small>
                                    </div> 
                                </div> 
                            </div> 
                        </div> 

                        <div className="masonry-box small-box post-media">
                             <img src={news.results[3].pic_path} alt="" className="img-fluid"/>
                             <div className="shadoweffect">
                                <div className="shadow-desc">
                                    <div className="blog-meta">
                                    <span className="bg-aqua"><a style={{fontSize:'15px'}} href={`/Articledeatails/${news.results[3].id}`} title="">{news.results[3].category}</a></span>
                                        <h4  ><a style={{fontSize:'15px'}} href={`/Articledeatails/${news.results[3].id}`}title="">{news.results[3].name}</a></h4>
                                        <a href={`/Articledeatails/${news.results[3].id}`} style={{fontSize:'8px',borderColor:'black',float:'right'}}>اقرأ المزيد</a>
                                        <small><a style={{fontSize:'8px'}}href={`/Articledeatails/${news.results[3].id}`} title="">{news.results[3].time}</a></small>
                                        <small><a style={{fontSize:'8px'}}href={`/Articledeatails/${news.results[3].id}`} title="">{news.results[3].writer_name}</a></small>
                                    </div> 
                                </div> 
                            </div> 
                        </div> 
                    </div> 

                    <div className="right-side hidden-md-down">
                        <div className="masonry-box post-media" >
                             <img src={news.results[4].pic_path} alt="" style={{height: '25.4rem'}} className="img-fluid"/>
                             <div className="shadoweffect">
                                <div className="shadow-desc">
                                    <div className="blog-meta">
                                    <span className="bg-green"><a style={{fontSize:'15px'}} href={`/Articledeatails/${news.results[4].id}`} title="">{news.results[4].category}</a></span>
                                        <h4  ><a style={{fontSize:'25px'}} href={`/Articledeatails/${news.results[4].id}`}title="">{news.results[4].name}</a></h4>
                                        <a href={`/Articledeatails/${news.results[4].id}`} style={{fontSize:'15px',borderColor:'black',float:'right'}}>اقرأ المزيد</a>
                                        <small><a style={{fontSize:'15px'}}href={`/Articledeatails/${news.results[4].id}`} title="">{news.results[4].time}</a></small>
                                        <small><a style={{fontSize:'15px'}}href={`/Articledeatails/${news.results[4].id}`} title="">{news.results[4].writer_name}</a></small>
                                    </div> 
                                </div> 
                             </div> 
                        </div> 
                    </div> 
                        </>
                    )}


                </div> 
            </div>
        </section>
    );
};

export default PopularNews;
