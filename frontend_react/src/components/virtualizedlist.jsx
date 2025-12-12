import React from 'react'

const Virtualizedlist = ({list,height,width,item_height}) => {
  return (
    <div style={{display:"flex", flexDirection: "column", gap:"8px"}}>
        <div style={{height: `${height}px`}}>
            {
                list.map((item,index)=>{
                    return (
                        <div key={index}>{item}</div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Virtualizedlist