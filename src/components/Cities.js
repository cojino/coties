import React from "react";
import Button from "./button";
import "./Cities.css";

function Cities({ city, img }) {
  return (
    <div>
      <ul class=" list-group list-group-flush">
        <li class="list-group-item">
          <div className="margin">
            <img src={img} alt={city} />
            {city}
          </div>
          <div>
            <Button />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Cities;
