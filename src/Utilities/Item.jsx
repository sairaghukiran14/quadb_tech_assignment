import React from "react";

const Item = (props) => {
  return (
    <div
      className="relative Individual_item w-56 bg-black rounded-lg hover:scale-105 transition-all cursor-pointer hover:z-50 z-10"
      key={props.id}
    >
      <img
        src={
          props.image_url
            ? props.image_url
            : "https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt=""
        className={`opacity-70 rounded-lg hover:opacity-95 object-cover w-full h-full`}
      />
    </div>
  );
};

export default Item;
