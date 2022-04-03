import React from 'react';
import useReview from '../../hooks/useReview';
import ReviewDetail from '../ReviewDetail/ReviewDetail';

const Reviews = () => {
    const[reviews,setReviews]= useReview()
    
    return (
        <div className='container'>
            <h1 className='mt-5'>What Customer say about Our Products</h1>
           <div className='row'>
           {
                reviews.map(review=><ReviewDetail key={review.id} review={review}></ReviewDetail>)
            }
           </div>
        </div>
    );
};

export default Reviews;