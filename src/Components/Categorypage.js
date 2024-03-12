import React from 'react';
import { Link } from 'react-router-dom';
import Recentposts from './Recentposts';
import Ad from './Ad';


function truncateText(text, sentences) {
    const sentenceArray = text.split('.'); // Assuming sentences end with a period.
    const truncatedText = sentenceArray.slice(0, sentences).join('.');
    return truncatedText;
}
const Categorypage = (props) => {
    return (
        <div>
        <section className="section wb">
            <div className="container">
                <div className="row">
                <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                            <div className="page-wrapper">
                                <div className="row">
                                    <div className="col-lg-10 offset-lg-1">
                                    </div>
                                </div>
                                <hr className="invis"/>
                                <div className="blog-grid-system">
                                    <div className="row">
                                    {props.news.results.slice().reverse().map((item, index) => (
    <div className="col-md-6" key={index}>
        <div className="blog-box">
            <div className="post-media">
                <Link to={`/Articledeatails/${item.id}`} className="header r-flex justify-content-between mb-5">
                    <img src={item.pic_path} alt="" className="img-fluid" style={{ width: '100%', height: '400px', objectFit: 'cover' }}/>
                    <div className="hovereffect">
                        <span></span>
                    </div>
                </Link>
            </div>
            <div className="blog-meta big-meta">
                <h4><Link to={`/Articledeatails/${item.id}`} title=""><strong>{item.name}</strong></Link></h4>
                <p>{truncateText(decodeURIComponent(item.content), 1)}</p> {/* Truncate to 2 sentences */}
                <p>....</p> {/* Truncate to 2 sentences */}
                <small><a href="blog-category-01.html" title="">{item.category}</a></small>
                <small><a href="single.html" title="">{item.time}</a></small>
                <small><a href="blog-author.html" title="">بقلم : {item.writer_name}</a></small>
            </div>
        </div>
    </div>
))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div className="sidebar">
                            <div className="widget">
                                <h2 className="widget-title">Recent Posts</h2>
                                <div className="blog-list-widget">
                                    <div className="list-group">
<Recentposts/>
                                    </div>
                                </div>
                            </div>

                            <div className="widget">
                                <h2 className="widget-title">Advertising</h2>
                                    <div className="banner-img">
                                    <Ad category={props.news.results.length > 0 ? props.news.results[0].category : ""} />
                                </div>
                            </div>


                            <div style={{justifyContent:'center'}} className="widget">
                                <h2 className="widget-title">Popular Categories</h2>
                                <div className="link-widget">
                                <ul>
                                    <li><a href="/Health">&nbsp; <span>صحة</span></a></li>
                                    <li><a href="/Education">&nbsp; <span>تعليم</span></a></li>
                                    <li><a href="/Art">&nbsp;<span>فن</span></a></li>
                                    <li><a href="/Sports"> &nbsp; <span>رياضه</span></a></li>
                                    <li><a href="/Petrol">&nbsp; <span>بترول</span></a></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Categorypage;