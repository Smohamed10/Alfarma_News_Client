import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Categorypage from '../../Components/Categorypage';

const Sports = () => {
    const [news, setNews] = useState({
        loading: true,
        results: [],
        err: null,
        reload: "0"
    });
  
    useEffect(() => {
      setNews((prevState) => ({ ...prevState, loading: true }));
      axios.get("http://localhost:4004/catget", {
        params: {
            catName: "رياضة" // Pass selected option as query parameter
        }
    })
        .then((resp) => {
          setNews((prevState) => ({ ...prevState, results: resp.data, loading: false, err: null }));
        })
        .catch(() => {
          setNews((prevState) => ({ ...prevState, loading: false, err: 'Something Went Wrong' }));
        });
    }, []);

    return (    
        <div>
            <Categorypage news={news} />
            {news.loading && (
                <div className="loading-spinner-overlay">
                    <div className="loading-spinner-container">
                        <div className="loading-spinner"></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sports;
