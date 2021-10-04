import React from "react";
import "./Cities.css";

function Cities({ c, deleteHandler }) {
  const f = () => deleteHandler(c.id);
  return (
    <div>
      <ul className=" list-group list-group-flush">
        <li className="list-group-item">
          <div className="margin">
            <img src={c.img} alt={c.city} />
            {c.city}
          </div>
          <div>
            <span>
              <button onClick={f} type="button" className="btn btn-danger">
                <i className="fas fa-trash"></i>
              </button>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Cities;
