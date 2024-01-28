import React, { useState } from "react";

export default function BookingForm({ availableTimes, dispatch, fetchAPI }) {
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

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setForm((prevForm) => ({
      ...prevForm,
      date: newDate,
    }));

    // updateTimes(form.date);

    fetchAPI(newDate)
      .then((times) => {
        dispatch({ type: "SET_TIMES", times });
      })
      .catch((error) => {
        console.error("Error fetching times:", error);
        // Handle error appropriately
      });
  };

  return (
    <>
      <h2>Book Now</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      >
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
          <select name="time" id="res-time" onChange={handleDateChange}>
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
        <div className="field">
          {availableTimes.map((availableTime) => {
            <div>{availableTime}</div>;
          })}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
