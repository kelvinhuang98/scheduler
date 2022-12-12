import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
  });

  const setDay = (day) => setState({ ...state, day });

  // adds a new interview in the appointments state by making a PUT request and updates the spots remaining
  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const appointmentDay = state.days.find((day) =>
      day.appointments.includes(id)
    );

    const spotsLeft = state.days.map((day) => {
      if (
        day.name === appointmentDay.name &&
        state.appointments[id].interview === null
      ) {
        return { ...day, spots: day.spots - 1 };
      } else {
        return day;
      }
    });

    return axios.put(`/api/appointments/${id}`, appointment).then(() => {
      setState({ ...state, appointments, days: spotsLeft });
    });
  };

  // removes an existing interview from the appointments state by making a DELETE request and updates the spots remaining
  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const appointmentDay = state.days.find((day) =>
      day.appointments.includes(id)
    );

    const spotsLeft = state.days.map((day) => {
      if (day.name === appointmentDay.name) {
        return { ...day, spots: day.spots + 1 };
      } else {
        return day;
      }
    });

    return axios.delete(`/api/appointments/${id}`, appointment).then(() => {
      setState({ ...state, appointments, days: spotsLeft });
    });
  };

  // takes data from the API server to populate the app
  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get("/api/days")),
      Promise.resolve(axios.get("/api/appointments")),
      Promise.resolve(axios.get("/api/interviewers")),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  };
}
