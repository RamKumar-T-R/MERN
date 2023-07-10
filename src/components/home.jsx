import React from "react";
import HeroCarousel from "./heroCarousel";
import Categories from "./category";

const Home = () => {
    return(
        <div>
            {<HeroCarousel />}
            {<Categories />}
        </div>
    )
}

export default Home;