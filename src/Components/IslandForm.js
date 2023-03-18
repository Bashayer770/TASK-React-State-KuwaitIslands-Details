import { useState, useTransition } from "react";

export default function IslandForm({ island }) {
  const [use, setUse] = useState("");
  const [phonenum, setPhonenum] = useState("");
  function BookAlret() {
    alert(
      `Are you sure you want to book to: ${island.name} with the name:${use} Phone: ${phonenum}`
    );
  }
  function useName(x) {
    setUse(x.target.value);
  }
  function phoneNumber(x) {
    setPhonenum(x.target.value);
  }
  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input placeholder="Type Full Name" onChange={useName} value={use} />
      <input
        placeholder="Type Phone Number"
        type="number"
        onChange={phoneNumber}
        value={phonenum}
      />
      <button className="book" onClick={BookAlret}>
        Book for today!
      </button>
    </div>
  );
}
