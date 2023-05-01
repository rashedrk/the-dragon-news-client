import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    // loading categories data from server 
    useEffect(() => {
        fetch("https://the-dragon-news-server-rashedrk.vercel.app/categories")
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error(err))
    }, []);
    
    return (
        <div>
            <h4>All Category</h4>
            {
                categories.map(category =>
                    <p key={category.id} className='ps-4'>
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-secondary' >{category.name}</Link>
                    </p>)
            }
        </div>
    );
};

export default LeftNav;