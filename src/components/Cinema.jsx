import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from './Header';
import BtnBuyTicket from './BtnBuyTicket';

import '../styles/cinema.css';

const Cinema = () => {
  const [details, setDetails] = useState([]);

  const { eventId } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      const api = await fetch(
        `https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22event%22:%22${eventId}%22,%22city%22:%221%22%7D&extended=true`
      );
      const data = await api.json();
      setDetails(data);
      console.log(data);
    };

    fetchDetails();
  }, [eventId])



  return (
    <div>
      <Header />
      <div className='cinema__container'>
        {details.map((d) => {
          return (
            <div key={d.eventId} className='cinema'>
              <div className='cinema__img'>
                <img src={d.posterLink} alt="poster" title={d.name} />
              </div>
              <div className='cinema__column'>
                <h2 className='title'>{d.name}</h2>
                <h3 className='time'>{d.runTime} minutes</h3>
                <h3 className='movie__summary'>{d.annotation}</h3>
                <p className='rentalDate'>
                  {d.rentalDateStart} / {d.rentalDateEnd}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <BtnBuyTicket />
    </div>
  )
}

export default Cinema;
