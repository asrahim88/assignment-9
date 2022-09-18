import { useEffect } from "react";
import { useState } from "react"

const Reviews = () => {
    const [review, setReview] = useState([]);
    useEffect( () => {
            fetch('/reviewsData.json')
            .then(res => res.json())
            .then(data => setReview(data));
    }, []);

    return [review, setReview];
};
export default Reviews;