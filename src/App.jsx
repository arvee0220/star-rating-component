import { useState } from "react";
import StarRating from "./star-rating.component";
import "./App.scss";

function App() {
    const [productRating, setProductRating] = useState(0);
    return (
        <div className="app-container">
            Current Product Rating: {productRating}
            <StarRating maxRating={10} onChange={setProductRating} />
        </div>
    );
}

export default App;
