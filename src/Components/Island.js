import React from "react";

export default function Island({ island, setIsland }) {
  function clicked() {
    setIsland(island);
  }
  console.log(island.names);
  return (
    <div className="Island" onClick={clicked}>
      <h3>{island.name}</h3>
      {/* YOU HAVE TO CHANGE THE VISITORS COUNT */}
      <p>Visitors {island.visitors}</p>
      <p>
        names:{" "}
        {island?.names?.map((x) => {
          return <h6>{x}</h6>;
        })}
      </p>

      <p>
        phone number
        {island?.phones?.map((x) => {
          return <h6>{x}</h6>;
        })}
      </p>
      <img src={island.img} alt={island.name} />
    </div>
  );
}
