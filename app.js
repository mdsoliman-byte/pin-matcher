function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const fordisit = pin + "";
  if (fordisit.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}
function generatePinMaster() {
  const pin = getPin();
  document.getElementById("display_pin").value = pin;
}
