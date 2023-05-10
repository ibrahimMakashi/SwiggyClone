import React from "react";

const ResMenuShimmer = () => {
  const items = [];
  for (let i = 0; i < 5; i++) {
    items.push(
      <div key={i} className="resmenu-shimmer">
       
      </div>
    );
  }

  return <div className="resmenu-shimmer-container">{items}</div>;
};

export default ResMenuShimmer;
