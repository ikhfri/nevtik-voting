import { Icon } from "@iconify/react";
import React from "react";

const Alert = ({ error, text }) => {
  return (
    <div
      className={`alert ${
        error ? "alert-error" : "alert-success"
      } fixed w-80 md:w-auto top-16 right-0 md:right-10 z-50 flex`}
    >
      <Icon
        icon={error ? "mingcute:alert-fill" : "icon-park-solid:success"}
        width={30}
      />
      <p>{text}</p>
    </div>
  );
};

export default Alert;
