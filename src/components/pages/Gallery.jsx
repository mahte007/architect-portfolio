import React from "react";
import gallery from "../../gallery";

export default function Gallery(){

     const IMG = (imgName) => {
        return require('../../img/gallery/'+ imgName)
    } 

    return(
        <div className="gallery">
            {gallery.map((item, index) => {
                return(
                    <div className="pics" key={item.key}>
                        <img src={IMG(item.imgURL)}  alt={item.alt} style={{width: '100%'}} />
                    </div>
                )
            })}
        </div>
    )
}