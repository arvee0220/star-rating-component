import { useState } from "react";
import "./star-rating.styles.scss";

const StarRating = () => {
    const maxRating = 5;

    const [currentRating, setCurrentRating] = useState(0);

    return (
        <div className="star-rating-container">
            current rating: {currentRating}
            {[...Array(maxRating)].map((_, index) => {
                const rateHandler = () => setCurrentRating(ratingValue);
                const ratingValue = index + 1;

                return (
                    <p
                        key={index}
                        className={`star ${
                            ratingValue <= currentRating ? "active" : ""
                        }`}
                        onClick={rateHandler}
                    >
                        {ratingValue}
                    </p>
                );
            })}
        </div>
    );
};

export default StarRating;
