import React from 'react';
import { Link } from 'react-router-dom';


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
                <h4><Link to={`/Articledeatails/${item.id}`} title="">{item.name}</Link></h4>
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
                                        <a href="single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                            <div className="w-100 justify-content-between">
                                                <img src="https://res.cloudinary.com/dyeqmtxsd/image/upload/v1710081277/87933670_ghti_10_pasal2.jpg" alt="" className="img-fluid float-left"/>
                                                <h5 className="mb-1">5 Beautiful buildings you need to before dying</h5>
                                                <small>12 Jan, 2016</small>
                                            </div>
                                        </a>

                                        <a href="single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                            <div className="w-100 justify-content-between">
                                                <img src="https://res.cloudinary.com/dyeqmtxsd/image/upload/v1710081277/87933670_ghti_10_pasal2.jpg" alt="" className="img-fluid float-left"/>
                                                <h5 className="mb-1">Let's make an introduction for creative life</h5>
                                                <small>11 Jan, 2016</small>
                                            </div>
                                        </a>

                                        <a href="single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                            <div className="w-100 last-item justify-content-between">
                                                <img src="https://res.cloudinary.com/dyeqmtxsd/image/upload/v1710081277/87933670_ghti_10_pasal2.jpg" alt="" className="img-fluid float-left"/>
                                                <h5 className="mb-1">Did you see the most beautiful sea in the world?</h5>
                                                <small>07 Jan, 2016</small>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="widget">
                                <h2 className="widget-title">Advertising</h2>
                                <div className="banner-spot clearfix">
                                    <div className="banner-img">
                                        <img src="https://res.cloudinary.com/dyeqmtxsd/image/upload/v1710081277/87933670_ghti_10_pasal2.jpg" alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>

                            <div className="widget">
                                <h2 className="widget-title">Instagram Feed</h2>
                                <div className="instagram-wrapper clearfix">
                                    <a className="" href=" "><img src="https://res.cloudinary.com/dyeqmtxsd/image/upload/v1710081277/87933670_ghti_10_pasal2.jpg" alt="" className="img-fluid"/></a>
                                    <a href=" "><img src="https://res.cloudinary.com/dyeqmtxsd/image/upload/v1710081277/87933670_ghti_10_pasal2.jpg" alt="" className="img-fluid"/></a>
                                    <a href=" "><img src="https://res.cloudinary.com/dyeqmtxsd/image/upload/v1710081277/87933670_ghti_10_pasal2.jpg" alt="" className="img-fluid"/></a>
                                    <a href=" "><img src="https://res.cloudinary.com/dyeqmtxsd/image/upload/v1710081277/87933670_ghti_10_pasal2.jpg" alt="" className="img-fluid"/></a>
                                    <a href=" "><img src="https://res.cloudinary.com/dyeqmtxsd/image/upload/v1710081277/87933670_ghti_10_pasal2.jpg" alt="" className="img-fluid"/></a>
                                    <a href=" "><img src="https://res.cloudinary.com/dyeqmtxsd/image/upload/v1710081277/87933670_ghti_10_pasal2.jpg" alt="" className="img-fluid"/></a>
                                    <a href=" "><img src="https://res.cloudinary.com/dyeqmtxsd/image/upload/v1710081277/87933670_ghti_10_pasal2.jpg" alt="" className="img-fluid"/></a>
                                    <a href=" "><img src="https://res.cloudinary.com/dyeqmtxsd/image/upload/v1710081277/87933670_ghti_10_pasal2.jpg" alt="" className="img-fluid"/></a>
                                    <a href=" "><img src="https://res.cloudinary.com/dyeqmtxsd/image/upload/v1710081277/87933670_ghti_10_pasal2.jpg" alt="" className="img-fluid"/></a>
                                </div>
                            </div>

                            <div className="widget">
                                <h2 className="widget-title">Popular Categories</h2>
                                <div className="link-widget">
                                    <ul>
                                        <li><a href=" ">Fahsion <span>(21)</span></a></li>
                                        <li><a href=" ">Lifestyle <span>(15)</span></a></li>
                                        <li><a href=" ">Art & Design <span>(31)</span></a></li>
                                        <li><a href=" ">Health Beauty <span>(22)</span></a></li>
                                        <li><a href=" ">Clothing <span>(66)</span></a></li>
                                        <li><a href=" ">Entertaintment <span>(11)</span></a></li>
                                        <li><a href=" ">Food & Drink <span>(87)</span></a></li>
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