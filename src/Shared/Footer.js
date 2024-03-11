import React from 'react';
import blog_square_01 from "../upload/blog_square_01.jpg"
import footer_logo from"../images/footer_logo.png"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div className="widget">
                            <h2 className="widget-title">Recent Posts</h2>
                            <div className="blog-list-widget">
                                <div className="list-group">
                                    <a href="single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="w-100 justify-content-between">
                                            <img src={blog_square_01} alt="" className="img-fluid float-left"/>
                                            <h5 className="mb-1">5 Beautiful buildings you need to before dying</h5>
                                            <small>12 Jan, 2016</small>
                                        </div>
                                    </a>

                                    <a href="single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="w-100 justify-content-between">
                                            <img src={blog_square_01} alt="" className="img-fluid float-left"/>
                                            <h5 className="mb-1">Let's make an introduction for creative life</h5>
                                            <small>11 Jan, 2016</small>
                                        </div>
                                    </a>

                                    <a href="single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="w-100 last-item justify-content-between">
                                            <img src={blog_square_01} alt="" className="img-fluid float-left"/>
                                            <h5 className="mb-1">Did you see the most beautiful sea in the world?</h5>
                                            <small>07 Jan, 2016</small>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div className="widget">
                            <h2 className="widget-title">Popular Posts</h2>
                            <div className="blog-list-widget">
                                <div className="list-group">
                                    <a href="single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="w-100 justify-content-between">
                                            <img src={blog_square_01} alt="" className="img-fluid float-left"/>
                                            <h5 className="mb-1">Banana-chip chocolate cake recipe with customs</h5>
                                            <span className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </span>
                                        </div>
                                    </a>

                                    <a href="single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="w-100 justify-content-between">
                                            <img src={blog_square_01} alt="" className="img-fluid float-left"/>
                                            <h5 className="mb-1">10 practical ways to choose organic vegetables</h5>
                                            <span className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </span>
                                        </div>
                                    </a>

                                    <a href="single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="w-100 last-item justify-content-between">
                                            <img src={blog_square_01} alt="" className="img-fluid float-left"/>
                                            <h5 className="mb-1">We are making homemade ravioli, nice and good</h5>
                                            <span className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div className="widget">
                            <h2 className="widget-title">Popular Categories</h2>
                            <div className="link-widget">
                                <ul>
                                    <li><a href="/Health">(21) <span>صحة</span></a></li>
                                    <li><a href="/Education">(21) <span>تعليم</span></a></li>
                                    <li><a href="/Art">(21)<span>فن</span></a></li>
                                    <li><a href="/Sports"> (21) <span>رياضه</span></a></li>
                                    <li><a href="/Petrol">(21) <span>بترول</span></a></li>
                                    <li><a href="/Economy">(21) <span>اقتصاد</span></a></li>
                                    <li><a href="/Governorate">(21)<span>محافظات</span></a></li>
                                    <li><a href="/Accident">(21)<span>حوادث</span></a></li>
                                    <li><a href="/World">(21)<span>عالم</span></a></li>
                                    <li><a href="/Technology">(21)<span>تكنولوجيا</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="invis1"/>

                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="widget">
                            <div className="footer-text text-center">
                                <a href="/"><img src={footer_logo} alt="" className="img-fluid" style={{width: '500px', height: '300px'}}/></a>
                                <p>موقع اخباري عالمي</p>
                                <div className="social">
                                    <a href=" " data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook"></i></a>              
                                    <a href=" " data-toggle="tooltip" data-placement="bottom" title="Twitter"><i className="fa fa-twitter"></i></a>
                                    <a href=" " data-toggle="tooltip" data-placement="bottom" title="Instagram"><i className="fa fa-instagram"></i></a>
                                    <a href=" " data-toggle="tooltip" data-placement="bottom" title="Google Plus"><i className="fa fa-google-plus"></i></a>
                                    <a href=" " data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i className="fa fa-pinterest"></i></a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;