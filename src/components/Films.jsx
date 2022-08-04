import React from "react";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import BuyTicketBtn from "./BuyTicketBtn";
import IsLoader from "./IsLoader";

import "../styles/movie.css";

const Films = () => {
  const [popular, setPopular] = useState([]);

  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleClick = (eventId) => () => {
    navigate("/cinema/" + eventId);
  };

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = useCallback(async () => {
    try {
      setLoading(true);

      const api = await fetch(
        "https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:1%7D&extended=true"
      );
      const data = await api.json();
      setPopular(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error("not found");
    }
  }, []);

  return (
    <section className="container">
      <div className="movies">
        {isLoading ? (
          <IsLoader />
        ) : (
          <>
            {popular.map((movie) => {
              const { eventId, posterLink, name, ageLimit, genres } = movie;

              return (
                <div className="movie" key={eventId}>
                  <img
                    className="scale"
                    src={posterLink}
                    alt="poster"
                    title={name}
                  />
                  <div className="movie__column">
                    <h2 className="movie__title">{name}</h2>
                    <div className="movie__genres">
                      <ul>
                        {genres.map((genre, id) => (
                          <li key={id}>{genre.name}</li>
                        ))}
                      </ul>
                    </div>
                    <h5 className="movie__year">{ageLimit.name}</h5>
                  </div>

                  <BuyTicketBtn onClick={handleClick(eventId)} />
                </div>
              );
            })}
          </>
        )}
      </div>
    </section>
  );
};

export default Films;
