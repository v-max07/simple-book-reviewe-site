import React from 'react';

const BLOGS = () => {
    return (
        <div style={{padding:"50px"}}>
            <h2>১. Context API কি?</h2>
            <p>
                সাধারণত এক component থেকে অন্য component এ ডাটা পাস করার জন্য props ব্যবহার করা হয় | যদি কম্পোনেন্টের সংখ্যা বেশি হয় তাহলে একটু কঠিন হয়ে পড়ে | data pass করতে যার জন্য একটা সমস্যা হতে পারে সেটা হল props ডিলিং, এই সমস্যাটি এভোয়েড করার জন্য ব্যবহার করা হয় এপিআই কনটেস্ট | এপিআই কনটেস্ট অধিক data পাস করার পদ্ধতি সহজ করে দেয়,প্রোগ্রামের ফাংশনালিটি গুলো বারবার করার সমস্যা কমিয়ে দেয় |
            </p>

            <br /><br />
            
            <h2>২. সিমেন্টিক ট্যাগ কি?</h2>
            <p>
                যেসকল ট্যাগের নামগুলোর মিনিং আছে সেগুলো কি সিমেন্টিক বলা হয় | html5 ভার্সনে সিমেন্ট ট্যাগ গুলো দেওয়া হয়েছে |
                কিছু সিমেন্টিক ট্যাগ এর নাম দেওয়া হল:
                    article,
                    aside,
                    details,
                    figcaption,
                    figure,
                    footer,
                    header,
                    main,
                    mark,
                    nav,
                    section,
                    summary,
                    time

            </p>

        </div>
    );
};

export default BLOGS;