import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Ad = (props) => {
    console.log(props.category)
    const [ads, setads] = useState({
        loading: true,
        results: [],
        err: null,
        reload: "0"
    });
  
    useEffect(() => {
      setads((prevState) => ({ ...prevState, loading: true }));
      axios.get("https://alfarma-news-server.onrender.com/getallads", {
        params: {
            catname: props.category // Pass selected option as query parameter
        }
    })
        .then((resp) => {
          setads((prevState) => ({ ...prevState, results: resp.data, loading: false, err: null }));
          console.log(resp)
        })
        .catch(() => {
          setads((prevState) => ({ ...prevState, loading: false, err: 'Something Went Wrong' }));
        });
    }, [props]);
    return (
    <div style={{textAlign:'center'}}>
        {ads.results.map((item,index) => (
            <>
        <img src={item.ads_img}  alt="" className="img-fluid"/>
        <a href={item.description}>{item.name}</a>
            </>
            ))}
    </div>
    );

};

export default Ad;