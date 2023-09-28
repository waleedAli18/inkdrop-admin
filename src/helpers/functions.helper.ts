import moment from "moment";

function disabledFutureDate(current: moment.Moment | null): boolean {
  return current !== null && current.isSameOrAfter(moment().startOf("day"));
}

function disabledPastDate(current: moment.Moment | null): boolean {
  return current !== null && current <= moment().startOf("day");
}

function currencyFormatter(number: number = 0, currency: string = "USD") {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  });
  return formatter?.format(number);
}

function maskCardNumber(cardNumber: string | undefined) {
  if (cardNumber) {
    const lastFourDigits = cardNumber?.slice(-4);

    const maskedNumber = cardNumber
      .slice(0, -4)
      .trim()
      .replace(/\B(?=(\d{4})+(?!\d))/g, " ") // Add space every four digits
      .replace(/\d/g, "*"); // Replace digits with asterisks

    return maskedNumber + " " + lastFourDigits;
  }
}

const helperFunction = {
  disabledFutureDate,
  disabledPastDate,
  currencyFormatter,
  maskCardNumber,
};

export default helperFunction;
