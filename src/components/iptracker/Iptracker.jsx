import React from 'react';
import './iptracker.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import ArrowSVG from '../../assets/images/icon-arrow.svg';
import { useState, useEffect} from 'react';


















    const Iptracker = () => {
        
        // const [location, setLocation] = useState({});
  

        // useEffect(() => {
        //   fetch('https://ip-api.com/json/?files=61439')
        //     .then(response => response.json())
        //     .then(data => setLocation(data))
        //     .catch(error => console.error(error));
        // }, []);




        
        const [location, setLocation] = useState({});
       
        
        useEffect(() => {
            
            const fetchData = async () => {
                try {
                    const response = await fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_2zRPEcd74rLg98bM4iv7G7FCfRAUK&ipAddress=8.8.8.8");
                    const data = await response.json();
                    setLocation(data);
                } catch (error) {
                    console.log('error', error);
                }
            };
            if (Object.keys(location).length === 0) {
                fetchData();
            }
            
            
        }, [location]);

        const containerStyle = {
            width: '100%',
            height: '100%'
          };
          console.log(location);
        const center = {
            lat: 2,
            lng: 2
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
                            <h2>{}</h2> 
                        </div>
                        <div className='separator'></div>
                    
                        <div className='containerIP'>
                            <p>LOCATION</p>
                            <h2> {location.location.country},   {location.location.city}</h2> 
                        </div>
                        <div className='separator'></div>
                    
                        <div className='containerIP'>
                            <p>TIMEZONE</p>
                            <h2>{}</h2> 
                        </div>
                        <div className='separator'></div>
                    
                        <div className='containerIP'>
                            <p>ISP</p>
                            <h2>{}</h2>  
                        </div>
                    
                    </div>
                </div>
            </div>

  )
}

export default Iptracker;


