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
