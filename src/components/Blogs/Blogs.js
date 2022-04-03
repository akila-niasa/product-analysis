import React, { useContext } from 'react';
import { BlogContext } from '../../App';
import useReview from '../../hooks/useReview';

const Blogs = () => {
    // const[reviews,setReviews]=useContext(BlogContext)
    // console.log(reviews.name);
    const[reviews,setReviews]=useReview()
    console.log(reviews);
    return (
        <div>
            
        </div>
    );
};

export default Blogs;