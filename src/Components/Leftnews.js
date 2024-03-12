import React from 'react';

function truncateText(text, sentences) {
    const sentenceArray = text.split('.'); // Assuming sentences end with a period.
    const truncatedText = sentenceArray.slice(0, sentences).join('.');
    return truncatedText;
}
const Leftnews = (props) => {

    return (
<div className="blog-list clearfix " >  
      {props.news.map((item, index) => (

<>
<div className="section-title"key={index}>
                <h3 className="color-red"><a href={'/'+item.category} title="">{item.category}</a></h3>
            </div> 

            <div className="blog-box row">
                <div className="col-md-4">
                    <div className="post-media">
                        <a href="single.html" title="">
                            <img src={item.pic_path} alt="" className="img-fluid"/>
                            <div className="hovereffect"></div>
                        </a>
                    </div> 
                </div> 

                <div className="blog-meta big-meta col-md-8">
                    <h4><a href="single.html" title="">{item.name}</a></h4>
                    <p>{truncateText(decodeURIComponent(item.content), 1)}</p>
                    <small><a href="blog-category-01.html" title="">{item.category}</a></small>
                    <small><a href="single.html" title="">{item.time}</a></small>
                    <small><a href="blog-author.html" title="">{item.writer_name}</a></small>
                </div> 
            </div> 
            </>
            ))}

    </div>
    );
};

export default Leftnews;