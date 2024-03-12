import React from 'react';

const Rightnews = (props) => {
    return (
        <div className="blog-list clearfix " >

        {props.news.map((item,index) => (
            <>

            <div className="section-title" key={index}>
                <h3 className="color-red"><a href={`/Articledeatails/${item.id}`} >{item.category}</a></h3>
            </div> 
    
            <div className="blog-box">
                <div className="post-media">
                    <a href={`/Articledeatails/${item.id}`} title={item.name}>
                        <img src={item.pic_path} alt="" className="img-fluid"/>
                        <div className="hovereffect">
                            <span className="videohover"></span>
                        </div> 
                    </a>
                </div> 
                <div className="blog-meta">
                    <h4><a href={`/Articledeatails/${item.id}`} title="">{item.name}</a></h4>
                    <small><a href={`/Articledeatails/${item.id}`} title="">{item.category}</a></small>
                    <small><a href={`/Articledeatails/${item.id}`} title="">{item.time}</a></small>
                </div> 
            </div> 
            <hr className="invis"/>
            </>
        ))}
</div>

    );
};

export default Rightnews;