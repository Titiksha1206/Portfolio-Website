import React from "react";
const WorkItems = ({ item }) => {
  return (
    <>
      <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className="work__img"></img>
        <h3 className="work__title">{item.title}</h3>
        <a className="work__button" href={item.href} target="blank">
          Demo <i class="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </div>
    </>
  );
};

export default WorkItems;
