import React from "react";
import Layout from "../components/Layout";
import OthersLiked from "../components/singleEvent Components/OthersLiked";
import { events } from "../data/data";
import EventProperties from "../components/singleEvent Components/EventProperties";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const EventDetails = () => {
  const { ...all } = events[1];
  const url ="https://mbeventbackendserver.onrender.com/api/v1/events";
  const { eventId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [event, setEvent] = useState(null);
  const [similarEvents, setSimilarEvents] = useState([]);

  const getEvent = async () => {
    setIsLoading(true)
    try {
      const { data } = await axios(`${url}/${eventId}`);
      console.log(data);
      setIsLoading(false);
      setEvent(data.event);
      setSimilarEvents(data.similarEvents);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEvent();
  }, [eventId]);
  if (isLoading) {
    return (
      <>
        <Layout>
          <Loader height="200px" />
        </Layout>
      </>
    );
  }

  return (
    <>
      <Layout>
        <div className="container">
          <h3 className="my-4 fs-5">
            <Link to="/" className="text-decoration-none text-dark">
              {" "}
              Home {">"}{" "}
            </Link>
            <Link to="/events" className="text-decoration-none text-dark">
              {" "}
              Events {">"}{" "}
            </Link>
            <span className="main-color">Event Details</span>
          </h3>
        </div>
        <EventProperties {...event} />
        {similarEvents.length > 0 && (
          <OthersLiked similarEvents={similarEvents} />
        )}
      </Layout>
    </>
  );
  j;
};

export default EventDetails;