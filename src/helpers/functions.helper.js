import moment from "moment";
function disabledFutureDate(current) {
    return current !== null && current.isSameOrAfter(moment().startOf("day"));
}
function disabledPastDate(current) {
    return current !== null && current <= moment().startOf("day");
}
function currencyFormatter(number = 0, currency = "USD") {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency,
    });
    return formatter?.format(number);
}
function maskCardNumber(cardNumber) {
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
