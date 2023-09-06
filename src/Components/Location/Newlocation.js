import React, { useState } from 'react'
import Location from './Location'
import data from '../Data'
import LayerItems from '../Layer/LayerItems'

function Newlocation() {
    const [item, setItem] = useState(data)

    const FilterMenu = (CateItem)=>{
        const UpdatedItem = data.filter((CurrEle)=>{
            return CurrEle.category === CateItem;
        })
        setItem(UpdatedItem)
    }
  return (
    <div>
                
        <Location item={item} />
    </div>
  )
}

export default Newlocation