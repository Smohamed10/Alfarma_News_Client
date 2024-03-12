import React from 'react';
import footer_logo from"../images/footer_logo.png"
import Recentposts from '../Components/Recentposts';
import Popularfooter from '../Components/Popularfooter';
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
                                <Recentposts/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div className="widget">
                            <h2 className="widget-title">Popular Posts</h2>
                            <div className="blog-list-widget">
                                <div className="list-group">
<Popularfooter/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div className="widget">
                            <h2 className="widget-title">Popular Categories</h2>
                            <div className="link-widget">
                                <ul>
                                    <li><a href="/Health">&nbsp; <span>صحة</span></a></li>
                                    <li><a href="/Education">&nbsp; <span>تعليم</span></a></li>
                                    <li><a href="/Art">&nbsp;<span>فن</span></a></li>
                                    <li><a href="/Sports"> &nbsp; <span>رياضه</span></a></li>
                                    <li><a href="/Petrol">&nbsp; <span>بترول</span></a></li>
                                    <li><a href="/Economy">&nbsp; <span>اقتصاد</span></a></li>
                                    <li><a href="/Governorate">&nbsp;<span>محافظات</span></a></li>
                                    <li><a href="/Accident">&nbsp;<span>حوادث</span></a></li>
                                    <li><a href="/World">&nbsp;<span>عالم</span></a></li>
                                    <li><a href="/Technology">&nbsp;<span>تكنولوجيا</span></a></li>
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
                                <p>ابقى على اطلاع دائم مع ! الفرما يقدم هذا الموقع الإلكتروني المصري المميز تغطية شاملة للأخبار المحلية والعالمية على مدار الساعة. ستجد آخر المستجدات على الساحة المصرية، بالإضافة إلى تحليل للقضايا العالمية المهمة التي تؤثر على المنطقة والعالم. يلتزم فريق عمل الفرما بالدقة والموضوعية في عرضه للأنباء، مع توفير محتوى متنوع يلبي اهتمامات القراء المختلفة.</p>
                                <div className="social">
                                    <a href="https://www.facebook.com/share/ad4yX2ao2QedpxKL/?mibextid=qi2Omg" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook"></i></a>              
                                    <a href="https://wa.me/+2001067554142" data-toggle="tooltip" data-placement="bottom" title="Whatsapp"><i className="fa fa-whatsapp"></i></a>
                                    <a href="https://www.instagram.com/elfaramanews?igsh=MXAyZ25oeDNqYnkyZQ==" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i className="fa fa-instagram"></i></a>
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