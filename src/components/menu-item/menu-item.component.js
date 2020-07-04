import React from "react";
import "./menu-item.styles.scss"
import {withRouter} from "react-router-dom"

//{title，imageUrl} 等于 props.title 和 props.imageUrl
//注意history match是使用了withRouter 之后，从父component（Homepage component）
//那里获取的。而 title,imageUrl 是从 directory component那里传过来的
const MenuItem=({title,imageUrl,linkUrl,history,match})=>{
    return(
        <div className='menu-item' 
             style={{backgroundImage:`url(${imageUrl})`}} 

             //这里使用match.url 原因是可能存在
             //localhost:3000/shop/hats
             //localhost:3000/kkkkkk/shop/hats
             //localhost:3000/zhang/shop/hats
             //这样的url ，为了清楚地区分是哪一个url ，所以要用match.url 
             onClick={()=>history.push(`${match.url}${linkUrl}`)}
        >
            <div className='content'>
                <div className='title'>{title}</div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
      </div>
    )
}

export default withRouter(MenuItem);