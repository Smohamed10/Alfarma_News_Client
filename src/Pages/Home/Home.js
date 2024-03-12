import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PopularNews from '../../Components/Popularnews';
import Rightnews from '../../Components/Rightnews';
import Leftnews from '../../Components/Leftnews';

const categories = ["رياضة", "فن", "تكنولوجيا", "اقتصاد", "بترول", "عالم", "صحة", "محافظات", "تعليم", "حوادث"];

const Home = () => {
    const [news, setNews] = useState({
        loading: true,
        results: [],
        err: null,
        reload: "0"
    });

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const promises = categories.map(category =>
                    axios.get("http://localhost:4004/lastbycat", {
                        params: {
                            catname: category
                        }
                    })
                );

                const responses = await Promise.all(promises);
                const fetchedNews = responses.map(response => response.data);
                setNews({
                    loading: false,
                    results: fetchedNews,
                    err: null,
                    reload: "0"
                });
            } catch (error) {
                setNews({
                    loading: false,
                    results: [],
                    err: 'Something Went Wrong',
                    reload: "0"
                });
            }
        };

        if (news.loading) {
            fetchNews();
        }
    }, [news.loading]);

    console.log(news.results);

    // Define separate arrays for news items mapped to left and right sides
    const leftNewsItems = [];
    const rightNewsItems = [];
    news.results.forEach((result, index) => {
        const Component = index % 2 === 0 ? Leftnews : Rightnews;
        if (index % 2 === 0) {
            leftNewsItems.push(<Component key={index} news={result} />);
        } else {
            rightNewsItems.push(<Component key={index} news={result} />);
        }
    });

    return (
        <div>
            <PopularNews />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            {leftNewsItems}
                        </div>
                        <div className="col-lg-3">
                            {rightNewsItems}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
