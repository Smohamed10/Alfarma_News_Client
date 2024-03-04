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

                <hr className="invis1"/>

                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="widget">
                            <div className="footer-text text-center">
                                <a href="index.html"><img src={footer_logo} alt="" className="img-fluid" style={{width: '500px', height: '300px'}}/></a>
                                <p>Cloapedia is a personal blog for handcrafted, cameramade photography content, fashion styles from independent creatives around the world.</p>
                                <div className="social">
                                    <a href=" " data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook"></i></a>              
                                    <a href=" " data-toggle="tooltip" data-placement="bottom" title="Twitter"><i className="fa fa-twitter"></i></a>
                                    <a href=" " data-toggle="tooltip" data-placement="bottom" title="Instagram"><i className="fa fa-instagram"></i></a>
                                    <a href=" " data-toggle="tooltip" data-placement="bottom" title="Google Plus"><i className="fa fa-google-plus"></i></a>
                                    <a href=" " data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i className="fa fa-pinterest"></i></a>
                                </div>

                                <hr className="invis"/>

                                <div className="newsletter-widget text-center">
                                    <form className="form-inline">
                                        <input type="text" className="form-control" placeholder="Enter your email address"/>
                                        <button type="submit" className="btn btn-primary">Subscribe <i className="fa fa-envelope-open-o"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <br/>
                        <div className="copyright">&copy; Cloapedia. Design: <a href="http://html.design">HTML Design</a>.</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;