import React from 'react';
import logo_vid from"../images/footer_logo.png";
const Header = () => {
    return (
<div>
    <div id="wrapper">
        <div className="collapse top-search" id="collapseExample">
            <div className="card card-block">
                <div className="newsletter-widget text-center">
                    <form className="form-inline">
                        <input type="text" className="form-control" placeholder="What you are looking for?"/>
                        <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
        </div>
        <div className="topbar-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 hidden-xs-down">
                        <div className="topsocial">
                            <a href=" " data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook"></i></a>
                            <a href=" " data-toggle="tooltip" data-placement="bottom" title="Youtube"><i className="fa fa-youtube"></i></a>
                            <a href=" " data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i className="fa fa-pinterest"></i></a>
                            <a href=" " data-toggle="tooltip" data-placement="bottom" title="Twitter"><i className="fa fa-twitter"></i></a>
                            <a href=" " data-toggle="tooltip" data-placement="bottom" title="Flickr"><i className="fa fa-flickr"></i></a>
                            <a href=" " data-toggle="tooltip" data-placement="bottom" title="Instagram"><i className="fa fa-instagram"></i></a>
                            <a href=" " data-toggle="tooltip" data-placement="bottom" title="Google+"><i className="fa fa-google-plus"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 hidden-md-down">
                        <div className="topmenu text-center">
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="blog-category-01.html"><i className="fa fa-star"></i> Trends</a></li>
                                <li className="list-inline-item"><a href="blog-category-02.html"><i className="fa fa-bolt"></i> الأكثر رواجا</a></li>
                                <li className="list-inline-item"><a href="page-contact.html"><i className="fa fa-user-circle-o"></i> تواصل معنا</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="topsearch text-right">
                            <a data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i className="fa fa-search"></i> Search</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <header className="header">
            <div className="container">
                <nav className="navbar navbar-inverse navbar-toggleable-md" >

                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#cloapediamenu" aria-controls="cloapediamenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-md-center" id="cloapediamenu">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                                <a className="nav-link color-pink-hover" href="index.html">اعمال</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color-pink-hover" href="index.html">شئون عربية
 </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color-pink-hover" href="index.html"> حوادث</a>
                            </li>

                            <li className="nav-item dropdown has-submenu">
                                <a className="nav-link dropdown-toggle" href=" " id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">بترول</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown02">
                                    <li><a className="dropdown-item" href="single.html">Single Blog <span className="hidden-md-down hidden-sm-down hidden-xs-down"><i className="fa fa-angle-right"></i></span></a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="single.html">Single Default</a></li>
                                            <li><a className="dropdown-item" href="single-fullwidth.html">Single Fullwidth</a></li>
                                            <li><a className="dropdown-item" href="single-slider.html">Single Gallery</a></li>
                                            <li><a className="dropdown-item" href="single-video.html">Single Video</a></li>
                                            <li><a className="dropdown-item" href="single-audio.html">Single Audio</a></li>
                                            <li><a className="dropdown-item" href="single-no-media.html">Single No Media</a></li>
                                        </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="single.html">Blog Category <span className="hidden-md-down hidden-sm-down hidden-xs-down"><i className="fa fa-angle-right"></i></span></a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="blog-category-01.html">Blog Category A</a></li>
                                            <li><a className="dropdown-item" href="blog-category-02.html">Blog Category B</a></li>
                                            <li><a className="dropdown-item" href="blog-category-03.html">Blog Category C</a></li>
                                            <li><a className="dropdown-item" href="blog-category-04.html">Blog Category D</a></li>
                                            <li><a className="dropdown-item" href="blog-category-05.html">Blog Category E</a></li>
                                            <li><a className="dropdown-item" href="blog-category-06.html">Blog Category F</a></li>
                                        </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="blog-author.html">Blog Author</a></li>
                                    <li><a className="dropdown-item" href="page-contact.html">Contact Page</a></li>
                                    <li><a className="dropdown-item" href="page.html">Default Page</a></li>
                                    <li><a className="dropdown-item" href="page-fullwidth.html">Fullwidth Page</a></li>
                                    <li><a className="dropdown-item" href="page-404.html">Not Found Page</a></li>
                                    <li><a className="dropdown-item" href="page-sitemap.html">Sitemap & Archives</a></li>
                                </ul>
                            </li>


                            <li className="nav-item">
                                <a className="nav-link color-pink-hover" href="index.html">محافظات</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color-pink-hover" href="index.html">اخبار عالمية</a>
                            </li>


                            <li className="nav-item dropdown has-submenu">
                                <a className="nav-link dropdown-toggle" href=" " id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">اقتصاد</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown02">
                                    <li><a className="dropdown-item" href="single.html">Single Blog <span className="hidden-md-down hidden-sm-down hidden-xs-down"><i className="fa fa-angle-right"></i></span></a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="single.html">Single Default</a></li>
                                            <li><a className="dropdown-item" href="single-fullwidth.html">Single Fullwidth</a></li>
                                            <li><a className="dropdown-item" href="single-slider.html">Single Gallery</a></li>
                                            <li><a className="dropdown-item" href="single-video.html">Single Video</a></li>
                                            <li><a className="dropdown-item" href="single-audio.html">Single Audio</a></li>
                                            <li><a className="dropdown-item" href="single-no-media.html">Single No Media</a></li>
                                        </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="single.html">Blog Category <span className="hidden-md-down hidden-sm-down hidden-xs-down"><i className="fa fa-angle-right"></i></span></a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="blog-category-01.html">Blog Category A</a></li>
                                            <li><a className="dropdown-item" href="blog-category-02.html">Blog Category B</a></li>
                                            <li><a className="dropdown-item" href="blog-category-03.html">Blog Category C</a></li>
                                            <li><a className="dropdown-item" href="blog-category-04.html">Blog Category D</a></li>
                                            <li><a className="dropdown-item" href="blog-category-05.html">Blog Category E</a></li>
                                            <li><a className="dropdown-item" href="blog-category-06.html">Blog Category F</a></li>
                                        </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="blog-author.html">Blog Author</a></li>
                                    <li><a className="dropdown-item" href="page-contact.html">Contact Page</a></li>
                                    <li><a className="dropdown-item" href="page.html">Default Page</a></li>
                                    <li><a className="dropdown-item" href="page-fullwidth.html">Fullwidth Page</a></li>
                                    <li><a className="dropdown-item" href="page-404.html">Not Found Page</a></li>
                                    <li><a className="dropdown-item" href="page-sitemap.html">Sitemap & Archives</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link color-black-hover" href="blog-category-01.html">رياضه</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color-red-hover" href="blog-category-02.html">فن</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link color-aqua-hover" href="blog-category-03.html">تعليم</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color-green-hover" href="blog-category-04.html">صحة</a>
                            </li>  
                            <li className="nav-item">
                                <a className="nav-link color-pink-hover" href="index.html">الرئيسية</a>
                            </li>

                        </ul>
                        
                    </div>
                    <div className="row justify-content-end align-items-center">
    <div className="col-md-6">
        <div className="logo">
            <a href="index.html">
                <img alt='logo' src={logo_vid} />        
            </a>
        </div>
    </div>
</div>
                </nav>
            </div>
        </header>
</div>
</div>

    );
};

export default Header;