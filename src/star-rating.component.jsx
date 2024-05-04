import { useCallback, useState, useEffect } from "react";
import "./star-rating.styles.scss";

const StarRating = ({ maxRating = 5, onChange = () => {} }) => {
    const [currentRating, setCurrentRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);

    const rateHandler = useCallback(
        (ratingValue, isHalf = false) => {
            const newRating = isHalf ? ratingValue - 0.5 : ratingValue;
            setCurrentRating(currentRating === newRating ? 0 : newRating);
        },
        [currentRating]
    );

    useEffect(() => {
        onChange(currentRating);
    }, [currentRating, onChange]);

    const handleMouseMove = (e, index) => {
        const rect = e.target.getBoundingClientRect();
        const isHalf = e.clientX - rect.left < rect.width / 2;
        setHoveredRating(isHalf ? index - 0.5 : index);
    };

    const renderStar = (index) => {
        const fullStars = Math.floor(hoveredRating || currentRating);
        const halfStar = (hoveredRating || currentRating) % 1 !== 0;
        const isHalfActive =
            index === Math.ceil(hoveredRating || currentRating) && halfStar;

        return (
            <span
                key={index}
                className={`star ${index <= fullStars ? "active" : ""} ${
                    isHalfActive ? "half-active" : ""
                }`}
                onMouseEnter={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => setHoveredRating(0)}
                onClick={(e) => {
                    const rect = e.target.getBoundingClientRect();
                    const isHalf = e.clientX - rect.left < rect.width / 2;
                    rateHandler(index, isHalf);
                }}
            >
                &#9733;
            </span>
        );
    };

    return (
        <div className="star-rating-container">
            {[...Array(maxRating)].map((_, index) => renderStar(index + 1))}
        </div>
    );
};

export default StarRating;
