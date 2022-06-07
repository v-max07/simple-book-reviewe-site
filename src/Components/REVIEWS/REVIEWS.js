import React from 'react';
import UserReviews from '../CoustomHook/CoustomHook';
import './Review.css'

const REVIEWS = () => {
    const [reviews, setReviews] = UserReviews();
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Customer All Reviews</h1>
            <div className='reviewsDiv'>
                {
                    reviews.map(review => <div className='reviewSingleCart'>
                        <h4>Customer Name: {review.name} </h4>
                        <p>
                            <strong>Customer Comment:</strong>  {review.reviewtext}
                        </p>
                        <strong>Ratting: {review.ratting} </strong>
                    </div>)
                }
            </div>
        </div>
    );
};

export default REVIEWS;