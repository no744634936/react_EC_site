import React from "react";

import CollectionItem from "../collection-item/collection-item.component.js"

import "./preview.styles.scss"

const CollectionPreview=({title,items})=>{
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items
                    .filter((item,index)=>index<4)  //只显示index小于4 的item
                    .map(({id,...otherItemProps})=>
                        <CollectionItem key={id} {...otherItemProps}></CollectionItem>
                    )
                }
            </div>
        </div>
    )
}

export default CollectionPreview;