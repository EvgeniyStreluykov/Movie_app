import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import BtnBuyTicket from './BtnBuyTicket';

import '../styles/movie.css';
import IsLoader from './IsLoader';

const Films = () => {

  const [popular, setPopular] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getPopular();
  }, [])

  const getPopular = useCallback(async () => {

    setLoading(true);

    const api = await fetch(
      'https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:1%7D&extended=true'
    );
    const data = await api.json();
    setPopular(data)
    console.log(data)
    setLoading(false)
  }, []);

  return (
    <section className='container'>
      <div className='movies'>
        {
          isLoading
            ? (<div><IsLoader /></div>)
            : <>
              {popular.map((popular) => {

                return (
                  <div className='movie' key={popular.eventId}>
                    <img className='scale' src={popular.posterLink} alt='poster' title={popular.name} />
                    <div className='movie__column'>
                      <h2 className='movie__title'>{popular.name}</h2>
                      <div className='movie__genres'>{popular.genres.map((genres, index) => {

                        return (
                          <ul>
                            <li key={index}>{genres.name}</li>
                          </ul>
                        )
                      })}
                      </div>
                      <h5 className='movie__year'>{popular.ageLimit.name}</h5>
                    </div>

                    <Link to={'/cinema/' + popular.eventId}>
                      <BtnBuyTicket />
                    </Link>
                  </div>
                )
              })}
            </>
        }
      </div>
    </section>
  );
}

export default Films;
