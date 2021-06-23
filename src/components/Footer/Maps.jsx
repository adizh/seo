import React from 'react'
import { YMaps, Map, Placemark } from "react-yandex-maps";
import {Link} from 'react-router-dom'

const mapData = {
  center: [40.263403, -75.295592],
  zoom: 5,
};

const coordinates = [
  [40.263403, -75.295592]
];

const Maps = () => {

    return(
<div>
<div className='maps'>
   <h1 className='map_header'>Our Address</h1>
    <YMaps>
 <Map defaultState={mapData}>
   {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
 </Map>
</YMaps>

</div>
<Link  className='link_map' to ='/'>Back </Link>
</div>
)
    };
export default Maps;