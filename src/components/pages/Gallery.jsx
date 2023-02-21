import React from "react";
import ModalImage from "react-modal-image";
import gallery from "../../gallery";

export default function Gallery(){

     const IMG = (imgName) => {
        return require('../../img/gallery/'+ imgName)
    } 

    return(
        <div className="gallery">
            {gallery.map((item, index) => {
                return(
                    <div key={item.key}>
                        <ModalImage 
                            small={IMG(item.imgURL)}
                            large={IMG(item.imgURL)}
                            alt={item.name}
                            hideDownload= "true"
                            className="pics"
                        />
                    </div>
                )
            })}
        </div>
    )
}