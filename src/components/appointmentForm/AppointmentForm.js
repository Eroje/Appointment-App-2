import React, { useMemo} from "react";

import { contactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);

  return (
    <form onSubmit={handleSubmit} >
      <label>
        <input 
          type="text"
          name="name"
          value={name}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Name Appointment"
          aria-label="Name Appointment"
        />
      </label>
      <br />
      <label>
        <contactPicker
          name="contact" 
          value={contact}
          contact={contactNames}
          onChange={(e) => setContact(e.target.value)}
        />
      </label>
      <br />
      <label>
        <input 
          type="date"
          name="date"
          min={getTodayString()}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          aria-label="Date Picker"
        />
      </label>
      <br />
      <label>
        <input
          type="time"
          name="time"
          value="time"
          onChange={(e) => setTime(e.target.value)}
          required
          aria-label="Time Picker" 
        />
      </label>
      <br />
      <input aria-label="Add The Appointment" type="submit" value="Add The Appointment" />
    </form>
  );
};
