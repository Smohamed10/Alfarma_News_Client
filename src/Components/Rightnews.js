import React from 'react';

const Rightnews = (props) => {
    return (
        <div className="blog-list clearfix " >

        {props.news.map((item,index) => (
            <>

            <div className="section-title" key={index}>
                <h3 className="color-red"><a href="blog-category-01.html" >{item.category}</a></h3>
            </div> 
    
            <div className="blog-box">
                <div className="post-media">
                    <a href="single.html" title={item.name}>
                        <img src={item.pic_path} alt="" className="img-fluid"/>
                        <div className="hovereffect">
                            <span className="videohover"></span>
                        </div> 
                    </a>
                </div> 
                <div className="blog-meta">
                    <h4><a href="single.html" title="">{item.name}</a></h4>
                    <small><a href="blog-category-01.html" title="">{item.category}</a></small>
                    <small><a href="blog-category-01.html" title="">{item.time}</a></small>
                </div> 
            </div> 
            <hr className="invis"/>
            </>
        ))}
</div>

    );
};

export default Rightnews;