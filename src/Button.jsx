import React from "react";

const Button = ({ person, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {person.map((item, index) => {
        return (
          <button
            onClick={() => setCurrentItem(index)}
            className={currentItem === index ? "job-btn active-btn" : "job-btn"}
            key={item.id}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};

export default Button;
