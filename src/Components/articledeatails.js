import React from 'react';
import Comment from"./Comment";

const Articledeatails = (props) => {
    return (
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-wrapper">

                            <div className="pp">
                                <h3><strong>{props.name}<small>{props.category}</small></strong></h3>
                                <h5>{props.name}<small>{props.writer_name}:بقلم</small></h5>
                            </div>

                            <img src={props.pic_path} alt="" className="img-fluid img-fullwidth"/>

                            <div className="pp">
                                <p>{props.content}</p>
                            </div>

                            <div class="custombox clearfix">
                                <h4 class="small-title"> التعليقات</h4>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="comments-list">
                                            <Comment/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr class="invis1"/>

                            <div class="custombox clearfix">
                                <h4 class="small-title">اترك تعليقا</h4>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <form class="form-wrapper">
                                            <input type="text" class="form-control" placeholder="اسمك"/>
                                            <input type="text" class="form-control" placeholder="البريد الالكتروني"/>
                                            <textarea class="form-control" placeholder=" اكتب تعليقك"></textarea>
                                            <button type="submit" class="btn btn-primary">اترك تعليقك</button>
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