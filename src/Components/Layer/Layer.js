import React,{useState} from 'react'
import '../Layer/layer.css'
import data from '../Data'
import Location from '../Location/Location'

import LayerItems from './LayerItems'


// const FilterCat = [new Set(data.map((CateVal)=>{return(CateVal.category)}))]

function Layer() {

    const [item, setItem] = useState(data)
    // const [catItem, setCatItem] = useState(FilterCat)
    const FilterMenu = (CateItem)=>{
        const UpdatedItem = data.filter((CurrEle)=>{
            return CurrEle.category === CateItem;
        })
        setItem(UpdatedItem)
    }
    
  return (
    <>


        {/* layer item component will be called here*/}
        <LayerItems FilterMenu={ FilterMenu} />
    {/* when we click on the image then it will render */}
    {/* <Location item = {item}/> */}
    </>
  )
}

export default Layer