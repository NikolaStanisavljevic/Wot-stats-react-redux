export default function callback(cell, row, rowIndex, colIndex) {
  if (cell < 300) {
    return { backgroundColor: "#930D0D", color: "white" };
  } else if (cell >= 300 && cell < 450) {
    return { backgroundColor: "#CD3333", color: "white" };
  } else if (cell >= 450 && cell < 650) {
    return { backgroundColor: "#CC7A00", color: "white" };
  } else if (cell >= 650 && cell < 900) {
    return { backgroundColor: "#CC7A00", color: "white" };
  } else if (cell >= 900 && cell < 1200) {
    return { backgroundColor: "#849B24", color: "white" };
  } else if (cell >= 1200 && cell < 1600) {
    return { backgroundColor: "#4D7326", color: "white" };
  } else if (cell >= 1600 && cell < 2000) {
    return { backgroundColor: "#4099BF", color: "white" };
  } else if (cell >= 2000 && cell < 2450) {
    return { backgroundColor: "#3972C6", color: "white" };
  } else if (cell >= 2450 && cell < 2900) {
    return { backgroundColor: "#793DB6", color: "white" };
  } else if (cell >= 2900) {
    return { backgroundColor: "#401070", color: "white" };
  }
}
