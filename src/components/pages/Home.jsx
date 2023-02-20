import React from "react";
import FeaturedPost from "../posts/FeaturedPost";
import CoverImage from "../CoverImage";


export default function Home() {
    return (
        <div>
                    <CoverImage src="pexels-scott-webb-532568.jpg" alt="architect" class="cover-image" />
                    <div className="featured-post-area">
                        <FeaturedPost src="Project-1" />
                        <FeaturedPost src="Project-2" />
                    </div>
                    <CoverImage src="pexels-matheus-natan-3297593.jpg" alt="building" class="cover-image" />
        </div>
    )
}