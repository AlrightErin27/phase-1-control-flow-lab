function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return "This one is on me!";
  } else if (feet > 2000) {
    if (feet > 2500) {
      return "No can do.";
    } else {
      return "I will gladly take your thirty bucks.";
    }
  }
}

// function ternaryCheckCity(city) {
//   if (city === "NYC") {
//     return "Ok, sounds good.";
//   } else {
//     return "No go.";
//   }
// }

const ternaryCheckCity = (city) =>
  city === "NYC" ? "Ok, sounds good." : "No go.";

// function switchOnCharmFromTip(str) {
//   if ((str = "generous")) {
//     return "Thank you so much.";
//   } else if ((str = "not as generous")) {
//     return "Thank you.";
//   } else {
//     return "Bye.";
//   }
// }

function switchOnCharmFromTip(str) {
  switch (str) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}
