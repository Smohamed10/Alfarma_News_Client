import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Breakingnews = () => {
    const [news, setPopularnews] = useState({
        loading: true,
        results: [],
        err: null,
        reload: "0"
    });

    useEffect(() => {
        setPopularnews({ loading: true, results: [], err: null, reload: "0" }); // Set loading state
        axios.get("https://alfarma-news-server.onrender.com/last5")
            .then((resp) => {            
                setPopularnews({ loading: false, results: resp.data, err: null, reload: "0" }); // Update state with fetched data
            })
            .catch(() => {
                setPopularnews({ loading: false, results: [], err: "Something went wrong", reload: "0" }); // Update state with error
            });
    }, []);
    // Function to concatenate breaking news items with a space between each item
    const concatenateBreakingNews = () => {
        return news.results.map(item => item.name).join('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
    };
    return (
        <div>
        <p  className="breaking-news-headline delay-animated2 fadein marquee" dangerouslySetInnerHTML={{ __html: concatenateBreakingNews() }} />
    </div>
    );
};

export default Breakingnews;