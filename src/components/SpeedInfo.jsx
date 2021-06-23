import React from 'react';
import './Speed.css';


const SpeedInfo = ({speedData}) => {
        console.log(speedData.id)
    return (
      <div> 
<div className='speed_info_ofwebsite'>
            <div>
                <h5>Results: </h5>
              <div><div className='site_name'><strong > Website url: </strong> <a className='link' href="#">{speedData.id}</a></div>
                <div className='site_name' id='speed_of'><strong className='website_speeed'> Website speed: </strong><span className='speed_website_cat'> {speedData.loadingExperience.metrics.CUMULATIVE_LAYOUT_SHIFT_SCORE.category}</span></div>
                </div>
              <div><div className='site_name'><strong> Version: </strong> {speedData.lighthouseResult.configSettings.formFactor}</div>
                <div className='site_name'><strong> Total elements: </strong> {speedData.lighthouseResult.audits['dom-size'].displayValue}</div>
               </div>
             <div>
               <div className='site_name'><strong> Website was displayed in: </strong> {speedData.lighthouseResult.audits['speed-index'].displayValue}</div>
                <div className='site_name'><strong> Website size: </strong> {speedData.lighthouseResult.audits['total-byte-weight'].displayValue}</div>
             </div>
              </div>
            </div> 
      </div>
            
    );
};

export default SpeedInfo;