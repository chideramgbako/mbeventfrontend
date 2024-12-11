import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import PaymentCard from "./PaymentCard";
import moment from "moment"; //allows you to format date
const EventProperties = ({
  _id,
  image,
  title,
  location,
  date,
  tags,
  startTime,
  hostedBy,
  price,
  description,
}) => {
  return (
    <div className="container ">
      <img
        src={image}
        alt={title}
        className="w-100 object-fit-cover rounded-2"
        height={"345px"}
      />

      <div className="row mt-5 mb-3 justify-content-between">
        <div className="col-md-7">
          <h1 className="fs-3">
            <FaCalendarAlt /> {moment(date).format("MMM Do YYYY")} {startTime}
          </h1>
          <h1 className="fs-4 my-3">
            <FaLocationDot /> {location}{" "}
          </h1>
          <div className="d-flex gap-3 my-4 align-items-center">
            {tags.map((tag, index) => {
              return (
                <p
                  key={index}
                  className="border border-3 py-1 px-2 rounded-2 text-capitalize"
                >
                  {tag}{" "}
                </p>
              );
            })}
          </div>
          <h1>{title} </h1>
          <p> {description} </p>
        </div>
        <div className="col-md-4  text-white d-flex justify-content-start justify-content-md-end ">
          <PaymentCard price={price} />
        </div>
      </div>
    </div>
  );
};

export default EventProperties;
