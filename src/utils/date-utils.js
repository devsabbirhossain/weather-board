function getFormattedDataTime(value, type, inMS) {
  if (!type) return value;

  if (!inMS) {
    value = value * 1000;
  }

  const date = new Date(value);
  let options;

  if ("date" === type) {
    options = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
  } else if ("time" === type) {
    options = {
      hour: "numeric",
      minute: "numeric",
    };
  }

  return new Intl.DateTimeFormat("en-us", options).format(date);
}

export { getFormattedDataTime };
