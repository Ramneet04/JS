import React from 'react'
import { useState } from 'react'

const Virtualizedlist = ({list,height,width,item_height}) => {
    const [indexes, setIndexes] = useState([0, Math.floor(height/item_height)]);
    const visibleList = list.slice(indexes[0],indexes[1]+1);
    const handleScroll = (event)=>{
        console.log(event.target.scrollTop);
        const {scrollTop} = event.target;
        const startIndex = Math.floor(scrollTop/item_height);
        const endIndex = Math.min(list.length, startIndex + Math.floor(height/item_height));
        setIndexes([startIndex, endIndex]);
    }
  return (
    <div style={{display:"flex", flexDirection: "column", gap:"8px"}}>
        <div onScroll={handleScroll} style={{height:height, width:width, overflowY:"auto", border:"1px solid black", background:"lightgrey"}}>
            <div style={{height: list.length * item_height, position: "relative"}}>
                {
                visibleList.map((item,index)=>{
                    return (
                        <div key={index} style={{
                            height:item_height,
                            background: "green",
                            borderTop: "5px solid red",
                            position: "absolute",
                            top: (indexes[0]+index) * item_height, 
                            width: "100%"
                        }}>{"Item -> "+item}</div>
                    )
                })
            }
            </div>
        </div>
    </div>
  )
}

export default Virtualizedlist