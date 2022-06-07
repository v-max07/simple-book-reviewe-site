import { useEffect, useState } from "react"

const UserReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviewsData.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    return [reviews, setReviews];
}

export default UserReviews;