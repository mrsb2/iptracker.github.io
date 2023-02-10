import React from 'react';
import './iptracker.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';



    async function GetInfo()
    {
        fetch('http://ip-api.com/json/24.48.0.1')
        .then((response) => response.json())
        .then((response) => console.log(response)) ;

        

    }
    GetInfo();


    
    const containerStyle = {
        width: '100%',
        height: '100%'
      };
    const center = {
        lat: -3.745,
        lng: -38.523
      };












const Iptracker = () => {
  return (

            <div className='ipTracker'>
                <div className='headerIpTracker'>
                    <h1>IP Address Tracker</h1>
                    <input className='inputIp'>
                
                    </input>
                </div>
                
                <div className='map'>
                <LoadScript
                googleMapsApiKey="AIzaSyByFuAzyCzzFoOtUqxyBOxBrZUHbRW33vc"
                >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    { /* Child components, such as markers, info windows, etc. */ }
                    <></>
                </GoogleMap>
                </LoadScript>

                </div>
                <div className='infoIpTracker'>
                INFO
                </div>
            </div>

  )
}

export default Iptracker;
