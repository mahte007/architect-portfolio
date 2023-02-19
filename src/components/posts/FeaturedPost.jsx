import React from "react";
import { Link } from "react-router-dom";
import PostContent from "../PostContent";
import PostImage from "../PostImage";

export default function FeaturedPost(props){
    return (
        <div className="featured-post">
            <PostContent />
            <Link to={'/projects/' + props.src}><PostImage src="pexels-gdtography-911758.jpg" class="featured-image"/></Link>
        </div>
    )
}