import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { HiTicket } from "react-icons/hi2";
import { Link } from "react-router-dom";
import moment from "moment";

const EventCard = ({
  _id,
  image,
  title,
  category,
  location,
  date,
  hostedBy: { fullName },
  price,
}) => {
  return (
    <Link
      to={`/events/${_id}`}
      className="text-decoration-none text-dark mx-auto mx-lg-0 my-4 eventcard col-12"
    >
      <div className="mx-auto col-12">
        <img
          src={image}
          alt={title}
          className="rounded-2 w-100"
          loading="lazy"
        />
        <div className="mt-2 pb-2 text-capitalize">
          <h3 style={{ height: "50px" }} className="my-auto fs-5">
            {" "}
            {title}{" "}
          </h3>
          <p className="mb-0">
            <span className="fw-medium fs-5 mt-3">Host : {fullName}</span>{" "}
          </p>
          <p className="mb-0">
            <span className="fw-medium fs-5 mt-3 text-capitalize">
              Category :
            </span>{" "}
            {category}
          </p>
          <p className="mb-0 fw-medium">
            <FaLocationDot /> {location}{" "}
          </p>
          <p className="mb-0 fw-medium">
            <FaCalendarAlt /> {moment(date).format("MMM Do YYYY")}{" "}
          </p>
          {price.free ? (
            <p className="mb-0 fw-medium">
              {" "}
              <HiTicket /> Free
            </p>
          ) : (
            <p className="mb-0 fw-medium">
              {" "}
              <HiTicket /> {price.vip > 0 && "VIP"},
              {price.regular > 0 && "Regular"}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default EventCard;