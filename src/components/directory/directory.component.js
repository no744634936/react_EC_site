import React from "react";
import MenuItem from "../menu-item/menu-item.component.js"
import "./directory.styles.scss"


class Directory extends React.Component{
    constructor(){
        super();
        this.state={
            sections:
                [
                    {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                    },
                    {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                    },
                    {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                    },
                    {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                    },
                    {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                    }
                ],
        }
    }

    render=()=>{
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(section=>
                        <MenuItem 
                            key={section.id} 
                            title={section.title} 
                            imageUrl={section.imageUrl} 
                            linkUrl={section.linkUrl}
                        />
                    )
                }
                
            </div>
        )
    }
}


//还可以这样解构
// {
//     this.state.sections.map(({title,imageUrl,id,linkUrl})=>
//         <MenuItem key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl}/>
//     )
// }


//像上面那样写，也还是比较麻烦。所以还可以这样解构
// 因为id 并没有要传给 menu-item component 所以要这样写
//...otherSectionProps 是传给 menu-item component 的

// {
//     this.state.sections.map(({id,...otherSectionProps})=>
//         <MenuItem key={id} {...otherSectionProps}/>
//     )
// }


export default Directory;