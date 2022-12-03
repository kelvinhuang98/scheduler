export function getAppointmentsForDay(state, day) {
  let output = [];
  for (const element of state.days) {
    if (element.name === day) {
      for (const appointment of element.appointments) {
        if (state.appointments[appointment]) {
          output.push(state.appointments[appointment]);
        }
      }
    }
  }
  return output;
}

export function getInterview(state, interview) {
  let output = {};

  if (!interview) {
    return null;
  } else {
    output["student"] = interview.student;
    output["interviewer"] = state.interviewers[interview.interviewer];
  }

  return output;
}
