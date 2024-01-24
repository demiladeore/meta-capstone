import React, { useState } from "react";

export default function BookingForm() {
  const availableTimes = [
    { timeId: "17:00", time: "17:00", available: true },
    { timeId: "18:00", time: "18:00", available: true },
    { timeId: "19:00", time: "19:00", available: true },
    { timeId: "20:00", time: "20:00", available: true },
    { timeId: "21:00", time: "21:00", available: true },
    { timeId: "22:00", time: "22:00", available: true },
  ];
  const [form, setForm] = useState({
    date: "",
    time: "",
    guests: 0,
    occasion: "Ocassion",
  });

  // const [date, setDate] = useState("");
  // const [time, setTime] = useState("");
  // const [ocassion, setOcassion] = useState("Ocassion");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.date, form.occasion, form.time);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="datePicker">Date</label>
        <input
          type="date"
          name="datePicker"
          id="datePicker"
          value={form.date}
          onChange={(e) =>
            setForm((prevForm) => ({
              ...prevForm,
              date: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <label htmlFor="guests">Number of Guests</label>
        <input
          type="number"
          min="1"
          max="10"
          id="guests"
          value={form.guests}
          onChange={(e) =>
            setForm((prevForm) => ({
              ...prevForm,
              guests: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <label htmlFor="res-time">Time</label>
        <select
          name="time"
          id="res-time"
          onChange={(e) =>
            setForm((prevForm) => ({
              ...prevForm,
              time: e.target.value,
            }))
          }
        >
          {availableTimes.map((time) => (
            <option
              key={time.timeId}
              value={time.time}
              disabled={!time.available}
            >
              {time.time}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label>
          Ocassion <sup>*</sup>
        </label>
        <select
          value={form.occasion}
          onChange={(e) =>
            setForm((prevForm) => ({
              ...prevForm,
              occasion: e.target.value,
            }))
          }
        >
          <option value="ocassion">Ocassion</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
