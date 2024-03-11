import React from 'react';

const Categorypage = (props) => {
    return (
        <div>
        <section class="section wb">
            <div class="container">
                <div class="row">
                <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                            <div className="page-wrapper">
                                <div className="row">
                                    <div className="col-lg-10 offset-lg-1">
                                    </div>
                                </div>
                                <hr className="invis"/>
                                <div className="blog-grid-system">
                                    <div className="row">
                                        {props.news.results.map((item, index) => (
                                            <div className="col-md-6" key={index}>
                                                <div className="blog-box">
                                                    <div className="post-media">
                                                        <a href="single.html" title="">
                                                            <img src={item.pic_path} alt="" className="img-fluid" style={{ width: '100%', height: '400px', objectFit: 'cover' }}/>
                                                            <div className="hovereffect">
                                                                <span></span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="blog-meta big-meta">
                                                        <h4><a href="single.html" title="">{item.name}</a></h4>
                                                        <p>{item.content}</p>
                                                        <small><a href="blog-category-01.html" title="">{item.category}</a></small>
                                                        <small><a href="single.html" title="">{item.time}</a></small>
                                                        <small><a href="blog-author.html" title="">بقلم : {item.writer_name}</a></small>                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div class="sidebar">
                            <div class="widget">
                                <h2 class="widget-title">Recent Posts</h2>
                                <div class="blog-list-widget">
                                    <div class="list-group">
                                        <a href="single.html" class="list-group-item list-group-item-action flex-column align-items-start">
                                            <div class="w-100 justify-content-between">
                                                <img src="https://res.cloudinary.com/dyeqmtxsd/image/upload/v1710081277/87933670_ghti_10_pasal2.jpg" alt="" class="img-fluid float-left"/>
                                                <h5 class="mb-1">5 Beautiful buildings you need to before dying</h5>
                                                <small>12 Jan, 2016</small>
                                            </div>
                                        </a>

                                        <a href="single.html" class="list-group-item list-group-item-action flex-column align-items-start">
                                            <div class="w-100 justify-content-between">
                                                <img src="https://res.cloudinary.com/dyeqmtxsd/image/upload/v1710081277/87933670_ghti_10_pasal2.jpg" alt="" class="img-fluid float-left"/>
                                                <h5 class="mb-1">Let's make an introduction for creative life</h5>
                                                <small>11 Jan, 2016</small>
                                            </div>
                                        </a>

                                        <a href="single.html" class="list-group-item list-group-item-action flex-column align-items-start">
                                            <div class="w-100 last-item justify-content-between">
                                                <img src="https://res.cloudinary.com/dyeqmtxsd/image/upload/v1710081277/87933670_ghti_10_pasal2.jpg" alt="" class="img-fluid float-left"/>
                                                <h5 class="mb-1">Did you see the most beautiful sea in the world?</h5>
                                                <small>07 Jan, 2016</small>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="widget">
                                <h2 class="widget-title">Advertising</h2>
                                <div class="banner-spot clearfix">
                                    <div class="banner-img">
                                        <img src="https://res.cloudinary.com/dyeqmtxsd/image/upload/v1710081277/87933670_ghti_10_pasal2.jpg" alt="" class="img-fluid"/>
                                    </div>
                                </div>
                            </div>

                            <div class="widget">
                                <h2 class="widget-title">Instagram Feed</h2>
                                <div class="instagram-wrapper clearfix">
                                    <a class="" href=" "><img src="https://res.cloudinary.com/dyeqmtxsd/image/upload/v1710081277/87933670_ghti_10_pasal2.jpg" alt="" class="img-fluid"/></a>
                                    <a href=" "><img src="https://res.cloudinary.com/dyeqmtxsd/image/upload/v1710081277/87933670_ghti_10_pasal2.jpg" alt="" class="img-fluid"/></a>
                                    <a href=" "><img src="https://res.cloudinary.com/dyeqmtxsd/image/upload/v1710081277/87933670_ghti_10_pasal2.jpg" alt="" class="img-fluid"/></a>
                                    <a href=" "><img src="https://res.cloudinary.com/dyeqmtxsd/image/upload/v1710081277/87933670_ghti_10_pasal2.jpg" alt="" class="img-fluid"/></a>
                                    <a href=" "><img src="https://res.cloudinary.com/dyeqmtxsd/image/upload/v1710081277/87933670_ghti_10_pasal2.jpg" alt="" class="img-fluid"/></a>
                                    <a href=" "><img src="https://res.cloudinary.com/dyeqmtxsd/image/upload/v1710081277/87933670_ghti_10_pasal2.jpg" alt="" class="img-fluid"/></a>
                                    <a href=" "><img src="https://res.cloudinary.com/dyeqmtxsd/image/upload/v1710081277/87933670_ghti_10_pasal2.jpg" alt="" class="img-fluid"/></a>
                                    <a href=" "><img src="https://res.cloudinary.com/dyeqmtxsd/image/upload/v1710081277/87933670_ghti_10_pasal2.jpg" alt="" class="img-fluid"/></a>
                                    <a href=" "><img src="https://res.cloudinary.com/dyeqmtxsd/image/upload/v1710081277/87933670_ghti_10_pasal2.jpg" alt="" class="img-fluid"/></a>
                                </div>
                            </div>

                            <div class="widget">
                                <h2 class="widget-title">Popular Categories</h2>
                                <div class="link-widget">
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