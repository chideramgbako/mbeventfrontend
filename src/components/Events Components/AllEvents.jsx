import React from "react";
import { events } from "../../data/data";
import EventCard from "../EventCard";
import Empty from "../Empty";
import { useAppContext } from "../../context/appcontext";
import Loader from "../Loader"
const AllEvents = () => {

  const {isLoading, events} = useAppContext()

  if (isLoading) {
    return<Loader height="200px"/>
  }
  return (
    <div className="container py-4">
      <h2 className="mt-3">All Events</h2>

      {events.length === 0 ? (
        <Empty
          content="Sorry, there are no events for this selection"
          height="300px"
        />
      ) : (
        <div className="d-flex justify-content-between flex-wrap">
          {events.map((event) => {
            return <EventCard key={event._id} {...event} />;
          })}
        </div>
      )}
    </div>
  );
};

export default AllEvents;
