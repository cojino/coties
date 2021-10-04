import React, { useState } from "react";
import Cities from "./Cities";

const ListCity = () => {
  const [listCity, setListcity] = useState([
    {
      id: 1,
      city: "casa",
      img: "https://media.cntraveler.com/photos/57fea9ec8584f8cd20e65f15/16:9/w_2580,c_limit/Aerial-One&OnlyReethiRah-Maldives-CRHotel.jpg",
    },
    {
      id: 2,
      city: "Tanger",
      img: "https://www.tripsavvy.com/thmb/FwmQ-JvBEBDDlVb-j_zdEo0iVsA=/2048x1152/smart/filters:no_upscale()/beach-5b59c9b7c9e77c004b3e0ff0.jpg",
    },
  ]);
  const deleteCity = (deletedId) => {
    const newList = listCity.filter((c) => c.id !== deletedId);

    setListcity([...newList]);
  };
  return (
    <div>
      {listCity.map((c) => {
        return <Cities deleteHandler={deleteCity} c={c} key={c.id} />;
      })}
    </div>
  );
};

export default ListCity;
