function handleSubmit() {
  // DOC: reset the state of the links
  let ids = ["link1", "link2", "link3", "link4"]

  for (let id of ids) {
    document.getElementById(id).classList.add("hide")
  }

  // DOC: use the tenary operator to determine the value of the radio buttons
  let days = document.getElementById("3days").checked ? 3 : 5
  let focus = document.getElementById("strength").checked ? 1 : 2

  // DOC: show the hidden <a> tags based on the values of the radio buttons
  switch (days + focus) {
    case 4:
      document.getElementById(ids[0]).classList.remove("hide"); // NOTE: 3 days + strength
      break;
    case 5:
      document.getElementById(ids[1]).classList.remove("hide"); // NOTE: 3 days + athletism
      break;
    case 6:
      document.getElementById(ids[2]).classList.remove("hide"); // NOTE: 5 days + strength
      break;
    case 7:
      document.getElementById(ids[3]).classList.remove("hide"); // NOTE: 5 days + athletism
      break;
  }
}
