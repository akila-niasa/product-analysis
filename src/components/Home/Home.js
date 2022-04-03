import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useReview from '../../hooks/useReview';
import CustomerReview from '../CustomerReview/CustomerReview';

const Home = () => {
    const [reviews,setReviews]=useReview()
    const navigate=useNavigate()
    // useEffect(()=>{
    //     fetch('data.json')
    //     .then(res=>res.json())
    //     .then(data=>setReviews(data))
    // },[setReviews])
    return (
        <div>
            <div className='d-flex justify-content-around mt-5'>
                <div className='mx-2 p-5'>
                    <h1 className='text-primary'>Your Choice</h1>
                        <h1 className='mx-5'>Your Laptop
                    </h1>
                    <p className='mx-5 container'>Choosing A Laptop Computer That's Right For You Shouldn't Be Difficult. Whether You're A Gamer, A Designer, A Student, Or Simply Need A Laptop For Everyday Tasks And Browsing,You come our website.</p>
                </div>
                <div>
                    <img  src="https://www.startech.com.bd/image/cache/catalog/laptop/chuwi/herobook/herobook-pro/herobook-pro-1-228x228.jpg" alt="" />
                </div>
            </div>
            <div className='container'>
                <h2>Customer Reviews</h2>
                <div className='row'>
                    {
                      reviews.map(review=><CustomerReview key={review.id} review={review}></CustomerReview>)  
                    }
                </div>
                <button className='btn btn-primary btn-lg mt-3 mb-3' onClick={()=>navigate('/reviews')}>see all review</button>
            </div>
        </div>
    );
};

export default Home;