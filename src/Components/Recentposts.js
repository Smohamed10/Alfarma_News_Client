import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Recentposts = () => {
    const [news, setPopularnews] = useState({
        loading: true,
        results: [],
        err: null,
        reload: "0"
    });

    useEffect(() => {
        setPopularnews({ loading: true, results: [], err: null, reload: "0" }); // Set loading state
        axios.get("http://localhost:4004/lastestnews")
            .then((resp) => {            
                setPopularnews({ loading: false, results: resp.data, err: null, reload: "0" }); // Update state with fetched data
            })
            .catch(() => {
                setPopularnews({ loading: false, results: [], err: "Something went wrong", reload: "0" }); // Update state with error
            });
    }, []);
    return (
        <div>
         {news.results.map((item, index) => (
            <>
        <a href={`/Articledeatails/${item.id}`} className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="w-100 justify-content-between">
            <img src={item.pic_path} alt="" className="img-fluid float-left"/>
            <h5 className="mb-4">{item.name}</h5>
            <small style={{textAlign:'left'}}>{item.time}</small>
        </div>
    </a>
    </>
            ))}
            </div>
    );
};

export default Recentposts;