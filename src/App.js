import { useState } from 'react';
import './App.css';
import flightIcon from './assets/flight-icon.png'

function FlightBooking() {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [searchFlightRes, setSearchFlightRes] = useState({});
  const [isOpenBookingForm, setIsOpenBookingForm] = useState(false);
  const [isCloseBookingForm, setIsCloseBookingForm] = useState(false);

  const handleSearchFlight = () => {
    //console.log("source ", source, destination, date);
    fetch('/flights').then(response => { return response.json(); })
      .then(responseData => {
        console.log(responseData, typeof (responseData));
        setSearchFlightRes(responseData);
        setShowMessage(true);
        return responseData;
      })
  };

  const openBookingForm = () =>{
    setIsOpenBookingForm(true);
  }

  const onConfirmBookingForm = () =>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React POST Request' })
    };
    fetch('/booking', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log('data ', data)
          setIsCloseBookingForm(true);
    }).catch(err => console.log("err ", err));  
  }

  return (
    <div className="container">
      <div className="search-bar">
        <label>Source</label>
        <input type="text" onChange={event => setSource(event.target.value)} />
        <label>Destination</label>
        <input type="text" onChange={event => setDestination(event.target.value)} />
        <label>When</label>
        <input type="date" onChange={(event) => setDate(event.target.value)} />
        <button onClick={handleSearchFlight}>Search Fight</button>
      </div>
      <div className="search-list">
        {!showMessage ? <p>Search for a flight!</p>
          : [
            (searchFlightRes.map(function (name, index) {
              return <div key={index} className='search-flight'>
                <img src={flightIcon} className="icon" alt="flightIcon" />
                <div className="details">
                  <h1>{searchFlightRes[index].arrival}</h1>
                  <p>{searchFlightRes[index].company}</p>
                </div>
                <div className="duration">
                  <h1>{searchFlightRes[index].duration}</h1>
                  <p>{searchFlightRes[index].source['key'] + '-' + searchFlightRes[index].destination['key']}</p>
                </div>
                <div className="price">
                  <h1><span>&#8377;</span>{searchFlightRes[index].price}</h1>
                  <button onClick={openBookingForm}>Book Now</button>
                </div>                
              </div>;
            }))
          ]}
      </div>
      {isOpenBookingForm ? <div className="booknow-frm">
      {!isCloseBookingForm ? <div className="container"> Your Details
          <input type="text" placeholder="Your Name"/>
          <input type="text" placeholder="Your Email"/>
          <button onClick={onConfirmBookingForm}>Confirm Booking</button>
          <button onClick={() => setIsOpenBookingForm(false)}>Cancel</button>
        </div>
        :<div className="container">
          <label>Booking Confirmed</label>
          <button onClick={() => setIsOpenBookingForm(false)}>Close</button>
        </div>
        }
      </div> : null}      
    </div>
  );
}

export default FlightBooking;
