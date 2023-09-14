export function truncateString(inputString) {
  if (inputString.length > 21) {
    return inputString.substring(0, 18) + "..";
  } else {
    return inputString;
  }
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
