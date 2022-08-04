import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BuyTicketBtn from "./BuyTicketBtn";
import IsLoader from "./IsLoader";

import "../styles/cinema.css";

const Cinema = () => {
  const [details, setDetails] = useState([]);

  const [isLoading, setLoading] = useState(false);

  const { eventId } = useParams();

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    try {
      setLoading(true);

      const api = await fetch(
        `https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22event%22:%22${eventId}%22,%22city%22:%221%22%7D&extended=true`
      );
      const data = await api.json();
      setDetails(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error("Not Found");
    }
  };

  return (
    <div>
      {isLoading ? (
        <IsLoader />
      ) : (
        <>
          <div className="cinema__container">
            {details.map((details) => {
              const {
                eventId,
                posterLink,
                name,
                runTime,
                annotation,
                rentalDateStart,
                rentalDateEnd,
              } = details;

              return (
                <div key={eventId} className="cinema">
                  <img src={posterLink} alt="poster" title={name} />

                  <div className="cinema__column">
                    <h2 className="title">{name}</h2>
                    <h3 className="time">{runTime} minutes</h3>
                    <h3 className="movie__summary">{annotation}</h3>
                    <p className="rentalDate">
                      {rentalDateStart.slice(0, 10)} /{" "}
                      {rentalDateEnd.slice(0, 10)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <BuyTicketBtn />
        </>
      )}
    </div>
  );
};

export default Cinema;
