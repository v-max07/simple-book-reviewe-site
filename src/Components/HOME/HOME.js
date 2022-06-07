import React from 'react';
import { Link } from 'react-router-dom';
import Boss from '../../Assets/homePicture/boss.jpg'
import UserReviews from '../CoustomHook/CoustomHook';
import './Home.css'

const HOME = () => {
    const [reviews, setReviews] = UserReviews();
    return (
        <div>
            <div className='home-page'>
                <div className='left-info'>
                    <h1 className='heading'>
                        প্রোগ্রামিংয়ের বলদ টু বস
                    </h1>
                    <p>
                        বিশ্বজুড়ে এখন প্রোগ্রামিং নিয়ে মাতামাতি। মনে হচ্ছে প্রোগ্রামিং ছাড়া মানব সভ্যতা আর এগোতে পারবে না। তবে, সেই প্রোগ্রামিং জানা সবাই যে প্রোগ্রামিং স্কুল থেকেই আসবে এমন কোনো লক্ষণও কিন্তু দেখা যাচ্ছে না। কারণ সংখ্যাটা প্রোগ্রামারের চাহিদার সংখ্যার চাইতে অনেক বড়। কাজেই আমেরিকার হোয়াইট হাউস হোক আর আমাদের ঝিনাইদহ জেলার মহেশপুরের জলিলগঞ্জ গ্রাম হোক— সব জায়গাতেই প্রোগ্রামিং নিয়ে অনেক আগ্রহ-উদ্দীপনা। এই আগ্রহের জোয়ারে কী হাবলুরা বসে থাকবে? সারাজীবন ফাঁকিবাজি করে, শর্টকাট পথ ধরে বের হয়ে যাওয়া হাবলুরা কী এখানে কোনো পথ পাবে না?
                        হাবুল দ্য গ্রেট ঝংকার মাহবুব থাকতে সেটা কি আর হবে? কাজে প্রোগ্রামিং-এর চিপাচাপা দিয়ে বলদরা কীভাবে বস হয়ে উঠতে পারে তার জন্য ঝংকারের এই বই। এর আগের হাবলুদের জন্য প্রোগ্রামিং বইয়ে মাহবুব চেষ্টা করেছে মজা করে প্রোগ্রামিংয়ের মূল বিষয়গুলো ধরিয়ে দেওয়ার। এবার আরেক ধাপ এগিয়ে হাবলুদের জন্য ডাটা স্ট্রাকচার, অ্যালগরিদম, অবজেক্ট, ক্লাস, অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং ইত্যাদির চিপাচাপার সন্ধান করেছে। এর আগে কেইবা বলেছে হাজিরা খাতাটাই একটা ডাটা স্ট্রাকচার আর কেইবা খড়ের গাঁদাতে সূঁচ খোঁজার চেষ্টা করেছে প্রোগ্রামিং জগতে! ঝংকারের ঢংয়ে প্রোগ্রামিংয়ের জগতে বলদ থেকে বস হয়ে ওঠার এই এক আশ্চর্য হাবলামি।
                        প্রোগ্রামার হতে চাওয়া ফাঁকিবাজদের পড়তেই হবে...
                    </p>
                    <Link className='home-btn' to='/'>
                        Purchase the book
                    </Link>
                </div>
                <div className='right-image'>
                    <img src={Boss} alt="" />
                </div>

            </div>

            <div className='customerRivews'>
                <h1 className='reviewHeading'>
                    Customer Reviews
                </h1>
                <div className='homePageReviews'>
                    {
                        reviews.slice(0, 3).map(review => <div className='reviewSingleCart'>
                            <h4>Customer Name: {review.name} </h4>
                            <p>
                                <strong>Customer Comment:</strong>  {review.reviewtext}
                            </p>
                            <strong>Ratting: {review.ratting} </strong>
                        </div>)
                    }
                </div>
                
                <div style={{textAlign:"center", margin:"20px 0px"}}>
                    <Link className='home-btn' to='/reviews'>
                        See All Reviews
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HOME;