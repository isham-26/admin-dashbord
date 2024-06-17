export const conversion = (str) => {
  if (str == "Electric and Hybrid Vehicles") {
    str = "ev_tech";
  } else if (str == "Vehicles and Components") {
    str = "automotive_solutions";
  } else if (str == "Shared Mobility") {
    str = "shared_mobility";
  } else if (str == "Tire") {
  } else if (str == "Connectivity Technology") {
    str = "connectivity_tech";
  }
  return str;
};
