import React from 'react';
import './iptracker.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import ArrowSVG from '../../assets/images/icon-arrow.svg';
import LocationSVG from '../../assets/images/icon-location.svg';
import { useState, useEffect} from 'react';




const Iptracker = () => {


    const googleKey = process.env.REACT_APP_KEY;
    const [ipAddress, setIPAddress] = useState('');
    const [address, setAdress] = useState(ipAddress);
    const [location, setLocation] = useState({});
    const [timezone, setTimezone] = useState({});
    const [isp,setIsp] = useState({});


    useEffect(() => {
        try {
                const getData = async () => {
                    const res = await fetch("https://ipwho.is/");
                    const data= await res.json()
                    setAdress(data.ip)
                }
                getData()
            }catch (error){
                console.trace(error)
            }
        },[])
    DotheIP(address);


    function DotheIP(ip)
    {
    
        useEffect(() => {
            try {
                    const getData = async () => {
                        const res = await fetch("https://ipwho.is/"+ip);
                        const data= await res.json()
                        setLocation(data)
                    }
                    getData()
                }catch (error){
                    console.trace(error)
                }
            },[])
        useEffect(() => {
            try {
                    const getData = async () => {
                        const res = await fetch("https://ipwho.is/"+ip);
                        const data= await res.json()
                        setTimezone(data.timezone)
                    }
                    getData()
                }catch (error){
                    console.trace(error)
                }
            },[])
        useEffect(() => {
            try {
                    const getData = async () => {
                        const res = await fetch("https://ipwho.is/"+ip);
                        const data= await res.json()
                        setIsp(data.connection)
                    }
                    getData()
                }catch (error){
                    console.trace(error)
                }
            },[])
    }
                
    const containerStyle = {
        width: '100%',
        height: '100%'
    };
    const center = {
        lat: 37.3860517,
        lng: 2
    };
    if(Object.keys(location>0))
    {
        center.lng=location.longitude;
        center.lat= location.latitude;
    }

    const handleClick = async () => {
        setIPAddress(ipAddress);
        try {
            const getData = async () => {
            const res = await fetch(`https://ipwho.is/${ipAddress}`);
            const data = await res.json();
            setLocation(data);
            setTimezone(data.timezone);
            setIsp(data.connection);
            };
            getData();
        } catch (error) {
            console.trace(error);
        }
        };
    
    return (
        <div className='ipTracker'>
            <div id='a' className='headerIpTracker'>
                <h1>IP Address Tracker</h1>
                <div className='inputIpDiv'>
                
                <input className='inputIp'  onChange={(e) => setIPAddress(e.target.value)} placeholder='Search for any IP address or domain'>
                </input>
                <div className='okBtn' onClick={handleClick}><img src={ArrowSVG}></img></div>
                </div>
                <div id='c' className='infoIpTrackerMobile'>
                <div className='InfoIP'>
                    <div className='containerIP'>
                        <p>IP ADDRESS</p>
                        <h2>{location.ip}</h2> 
                    </div>
                    <div className='separator'></div>
                
                    <div className='containerIP'>
                        <p>LOCATION</p>
                        <h2> {location.country},   {location.city}</h2> 
                    </div>
                    <div className='separator'></div>
                
                    <div className='containerIP'>
                        <p>TIMEZONE</p>
                        <h2>{timezone.utc}</h2> 
                    </div>
                    <div className='separator'></div>
                
                    <div className='containerIP'>
                        <p>ISP</p>
                        <h2>{isp.isp}</h2>  
                    </div>
                
                </div>
            </div>
            </div>
            
            <div id='b' className='map'>
            <LoadScript
            googleMapsApiKey = {googleKey}
            >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
                onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
            >
                { <div className='arrow'><img src={LocationSVG}></img></div> }
                <></>
            </GoogleMap>
            </LoadScript>

            </div>
            <div id='c' className='infoIpTracker'>
                <div className='InfoIP'>
                    <div className='containerIP'>
                        <p>IP ADDRESS</p>
                        <h2>{location.ip}</h2> 
                    </div>
                    <div className='separator'></div>
                
                    <div className='containerIP'>
                        <p>LOCATION</p>
                        <h2> {location.country},   {location.city}</h2> 
                    </div>
                    <div className='separator'></div>
                
                    <div className='containerIP'>
                        <p>TIMEZONE</p>
                        <h2>{timezone.utc}</h2> 
                    </div>
                    <div className='separator'></div>
                
                    <div className='containerIP'>
                        <p>ISP</p>
                        <h2>{isp.isp}</h2>  
                    </div>
                
                </div>
            </div>
        </div>

)
}

export default Iptracker;


