import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>Total News In This Category: {categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewsCard key={categoryNews._id} news={news} ></NewsCard>)
            }
        </div>
    );
};

export default Category;