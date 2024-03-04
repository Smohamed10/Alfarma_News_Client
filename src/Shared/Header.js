import React from 'react';
import logo_vid from"../images/alfarma_logo.mp4";
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

        <div className="header-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="logo" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
    <a href="index.html">
        <video autoPlay loop muted playsInline style={{ maxWidth: '200px', maxHeight: '200px' }}>
            <source src={logo_vid} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </a>
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

                            <li className="nav-item dropdown has-submenu menu-large hidden-md-down hidden-sm-down hidden-xs-down">
                                <a className="nav-link dropdown-toggle" href=" " id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">بترول</a>
                                <ul className="dropdown-menu megamenu" aria-labelledby="dropdown01">
                                    <li>
                                        <div className="mega-menu-content clearfix">
                                            <div className="tab">
                                                <button className="tablinks active" onClick="openCategory(event, 'cat01')">صحة</button>
                                                <button className="tablinks" onClick="openCategory(event, 'cat02')">تعليم</button>
                                                <button className="tablinks" onClick="openCategory(event, 'cat03')">فن</button>
                                                <button className="tablinks" onClick="openCategory(event, 'cat04')">رياضه</button>
                                                <button className="tablinks" onClick="openCategory(event, 'cat05')">اقتصاد</button>
                                                <button className="tablinks" onClick="openCategory(event, 'cat05')">بترول</button>
                                            </div>

                                            <div className="tab-details clearfix">
                                                <div id="cat01" className="tabcontent active">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_01.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Spa</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">Top 10+ care advice for your toenails</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_02.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Beauty</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">The secret of your beauty is handmade soap</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_03.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Beauty</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">Benefits of face mask made from mud</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_04.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Spa</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">Relax with the unique warmth of candle flavor</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="cat02" className="tabcontent">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_05.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Fashion</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">2017 summer stamp will have design models here</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_06.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Collections</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">Which color is the most suitable color for you?</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_07.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Fashion</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">Subscribe to these sites to keep an eye on the fashion</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_08.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Trends</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">The most trends of this year with color combination</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="cat03" className="tabcontent">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_09.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Tourism</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">I visited the architects of Istanbul for you</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_11.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Travel</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">Prepared handmade dish dish in the Netherlands</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_12.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">City Tours</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">I recommend you visit the fairy chimneys</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_13.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Tourism</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">One of the most beautiful ports in the world</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="cat04" className="tabcontent">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_14.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Places</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">A collection of the most beautiful shop designs</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_15.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Designs</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">America's and Canada's most beautiful wine houses</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_16.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Minimalism</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">The most professional ways to color your walls</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_17.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Furnishings</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">Stylish cabinet designs and furnitures</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="cat05" className="tabcontent">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_18.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Vegetables</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">Grilled vegetable with fish prepared with fish</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_19.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Restaurants</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">The world's finest and clean meat restaurants</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_20.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Meat foods</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">Fried veal and vegetable dish</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_21.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Pastas</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">Tasty pasta sauces and recipes</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
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
                                <a className="nav-link color-pink-hover" href="blog-category-01.html">رياضه</a>
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
                </nav>
            </div>
        </header>
</div>
</div>

    );
};

export default Header;