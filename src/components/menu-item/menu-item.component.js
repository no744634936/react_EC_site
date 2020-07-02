import React from "react";
import "./menu-item.styles.scss"

//{title} 等于 props.title
const MenuItem=({title,imageUrl})=>{
    return(
        <div className='menu-item' style={{backgroundImage:`url(${imageUrl})`}}>
            <div className='content'>
                <div className='title'>{title}</div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
      </div>
    )
}

export default MenuItem;