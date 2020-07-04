import React from  "react"
import SHOP_DATA from "./shop.data.js"
class Shop extends React.Component{
    constructor(){
        super();
        this.state={
            collection:SHOP_DATA
        }
    }

    render=()=>{
        return(
            <div>
                shop page
            </div>
        )
    }


}