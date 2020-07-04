import React from  "react"
import SHOP_DATA from "./shop.data.js"
import CollectionPreview from "../../components/preview-collection/preview.component.js"


class Shop extends React.Component{
    constructor(){
        super();
        this.state={
            collections:SHOP_DATA
        }
    }

    render=()=>{
        let {collections}=this.state;
        return(
            <div className="shop-page">
                {
                    collections.map(({id,...otherCollectionProps}) =>
                        <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
                    )
                }
            </div>
        )
    }
}

export default Shop