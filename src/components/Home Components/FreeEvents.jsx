import React from "react";
import SectionHeading from "../SectionHeading";
import { events } from "../../data/data";
import EventCard from "../EventCard";
import Loader from "../Loader";
import { useFetch } from "../../utils/useFetch";
import Empty from "../Empty";

const FreeEvents = () => {
  const url = "https://mbeventbackendserver.onrender.com/api/v1/events/free";
  const {
    isLoading,
    data: { events },
  } = useFetch(url);
  return (
    <div className="my-5 container">
      <SectionHeading heading="Free Events" />
      {isLoading ? (
        <Loader height="200px" />
      ) : !isLoading && events.length === 0 ? (
        <Empty height="150px" content="No upcoming events" />
      ) : (
        <div
          className=" d-flex justify-content-between align-items-center gap-4 event-container my-3"
          style={{ overflowX: "scroll" }}
        >
          {events.map((event) => {
            return <EventCard key={event._id} {...event} />;
          })}
        </div>
      )}
    </div>
  );
};

export default FreeEvents;
