import React from 'react';
import './iptracker.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import ArrowSVG from '../../assets/images/icon-arrow.svg';
import { useState, useEffect, useRef } from 'react';



    const Iptracker = () => {
        
        const [location, setLocation] = useState({});
  
        useEffect(() => {
          fetch('http://ip-api.com/json/?files=61439')
            .then(response => response.json())
            .then(data => setLocation(data))
            .catch(error => console.error(error));
        }, []);
        console.log(location);
        const containerStyle = {
            width: '100%',
            height: '100%'
          };
        const center = {
            lat: location.lat,
            lng: location.lon
          };
        return (
            <div className='ipTracker'>
                <div className='headerIpTracker'>
                    <h1>IP Address Tracker</h1>
                    <div className='inputIpDiv'>
                    <input className='inputIp'  placeholder='Search for any IP address or domain'>
                    </input>
                    <div className='okBtn' ><img src={ArrowSVG}></img></div>
                    </div>
                </div>
                
                <div className='map'>
                <LoadScript
                googleMapsApiKey="AIzaSyByFuAzyCzzFoOtUqxyBOxBrZUHbRW33vc"
                >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={14}
                >
                    { <div className='arrow'></div> }
                    <></>
                </GoogleMap>
                </LoadScript>

                </div>
                <div className='infoIpTracker'>
                    <div className='InfoIP'>
                        <div className='containerIP'>
                            <p>IP ADDRESS</p>
                            <h2>{location.query}</h2> 
                        </div>
                        <div className='separator'></div>
                    
                        <div className='containerIP'>
                            <p>LOCATION</p>
                            <h2>{location.country+', '+location.city}</h2> 
                        </div>
                        <div className='separator'></div>
                    
                        <div className='containerIP'>
                            <p>TIMEZONE</p>
                            <h2>{location.timezone}</h2> 
                        </div>
                        <div className='separator'></div>
                    
                        <div className='containerIP'>
                            <p>ISP</p>
                            <h2>{location.org}</h2>  
                        </div>
                    
                    </div>
                </div>
            </div>

  )
}

export default Iptracker;


