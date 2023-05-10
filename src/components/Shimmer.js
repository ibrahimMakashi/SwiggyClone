import React from "react";
const Shimmer = () => {
  const items = [];
  for (let i = 0; i < 12; i++) {
    items.push(
      <div key={i} className="shimmer">
        <div className="img-shimmer"></div>
        <div className="title-shimmer"></div>
        <div className="sub-shimmer"></div>
      </div>
    );
  }

  return <div className="shimmer-container">{items}</div>;
};

export default Shimmer;
