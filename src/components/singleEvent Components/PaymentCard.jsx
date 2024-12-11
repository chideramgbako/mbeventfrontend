import React from "react";
import { useState } from "react";
import ActionBtn from "../ActionBtn";
import ConfirmPaymentModal from "./ConfirmPaymentModal";
import Caution from "./Caution";
import { toast } from "react-toastify";

const PaymentCard = ({ price }) => {
  const [showModal, setShowModal] = useState(false);
  const token = localStorage.getItem("mb-token");

  return (
    <div
      className="bg-dark rounded-2 p-3"
      style={{ width: "300px", height: "269px" }}
    >
      {showModal && token ? (
        <ConfirmPaymentModal
          showModal={showModal}
          setShowModal={setShowModal}
          vipPrice={price.vip}
          regularPrice={price.regular}
          free = {price.free}
        />
      ) : (
        <Caution showModal={showModal} setShowModal={setShowModal} />
      )}
      <h3 className="text-center mb-1">Pricing</h3>
      {price.free ? (
        <div></div>
      ) : (
        <div>
          <div className="ticket-type mt-4">
            <span>VIP</span>

            <span className="fw-bolder">NGN {price.vip}</span>
          </div>

          <div className="ticket-type">
            <span>Regular</span>

            <span className="fw-bolder">NGN {price.regular}</span>
          </div>
        </div>
      )}

      <ActionBtn
        content={price.free ? "get Tickets" : "proceed to payment"}
        width={"100%"}
        className="herobtn mt-4"
        handleClick={() => setShowModal(true)}
      />
    </div>
  );
};

export default PaymentCard;
