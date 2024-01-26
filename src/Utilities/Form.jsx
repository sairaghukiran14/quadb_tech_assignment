import React, { useState } from "react";

const Form = (props) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [isBooked, setIsBooked] = useState(false);
  return (
    <div className="form_section absolute top-0 bottom-0 sm:h-80 h-max w-[80%] sm:w-max m-auto bg-white right-0 left-0  z-50 rounded">
      <form
        action=""
        className="flex flex-col items-center gap-3 p-3 sm:flex-row"
      >
        <div className="div flex flex-col items-center justify-center gap-2">
          <div className="showname_book">{props.name}</div>
          <div className="show_image w-40">
            <img src={props.image} alt="" className="rounded" />
          </div>
        </div>
        {isBooked ? (
          <div className="booking_section w-64">
            <div className="confirmr text-green-500 font-semibold">
              Your Booking is Successful
            </div>
            <div className="user_details mt-2 ml-2">
              <div className="font-bold">Booking Details:</div>
              <div className="flex flex-col gap-2 mt-2">
                <div className="show_name">
                  {" "}
                  <span className="font-semibold">Show </span>: {props.name}
                </div>
                <div className="date">
                  {" "}
                  <span className="font-semibold">Date </span>
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "long",
                    hour: "numeric",
                    minute: "numeric",
                  }).format(new Date())}
                </div>
                <div className="user_name">
                  {" "}
                  <span className="font-semibold">Name </span> : {username}
                </div>
                <div className="user_email">
                  {" "}
                  <span className="font-semibold">Email </span>: {email}
                </div>
                <div className="user_contact">
                  {" "}
                  <span className="font-semibold">Contact </span>: {contact}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="input_section flex flex-col gap-2 sm:w-64 w-44 mt-5">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="p-2 rounded border"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required={true}
            />

            <input
              type="text"
              placeholder="Enter Email Address"
              className="p-2 rounded border"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
            <input
              type="text"
              placeholder="Contact No"
              className="p-2 rounded border"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required={true}
            />
            <button
              type="button"
              className="bg-green-600 text-white rounded p-2 "
              onClick={() => {
                localStorage.setItem(
                  "bookingdetails",
                  JSON.stringify({
                    showname: props.name,
                    username: username,
                    email: email,
                    contact: contact,
                    time_date: new Date(),
                  })
                );
                setIsBooked(true);
              }}
            >
              Book
            </button>
          </div>
        )}
      </form>
      <div
        className="absolute right-1 top-2 close bg-blue-600 text-white p-2 rounded cursor-pointer"
        role="button"
        onClick={props.handleClose}
      >
        X
      </div>
    </div>
  );
};

export default Form;
