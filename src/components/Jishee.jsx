const CallbackPage = () => {
  function orderPizza(name, callback) {
    console.log("zahialga huleej awlaa");
    setTimeout(function () {
      let msg = `Tanii ${name} pizza belen bolloo ! Tanii pizza hurgeltend garlaa`;
      callback(msg);
    }, 3000);
  }
};
orderPizza("MeatLovers", printDelivery);
function printDelivery(message) {
  console.log(message);
}
export default CallbackPage;
