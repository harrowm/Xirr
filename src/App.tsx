import "./styles.css";

export default function App() {
  var xirr = require("xirr");

  // The month is a monthIndex - sigh .. starts at 0
  //
  // The data are cashflows, so a subscription is negative as cash is leaving the client
  // To calculate the XIRR as of today, you have to add a "full redemption" transaction
  // With today's date and market value.  Redemptions are positive cashflows
  // See second example, invest $100 and one year later get $105 back for a XIRR of 5%

  var rate = xirr([
    { amount: -1000, when: new Date(2016, 0, 15) },
    { amount: -2500, when: new Date(2016, 1, 8) },
    { amount: -1000, when: new Date(2016, 3, 17) },
    { amount: 5050, when: new Date(2016, 7, 24) }
  ]);
  rate = rate * 100;
  rate = rate.toFixed(2);

  var rate2 = xirr([
    { amount: -100, when: new Date(2016, 0, 15) },
    { amount: 105, when: new Date(2017, 0, 14) }
  ]);
  rate2 = rate2 * 100;
  rate2 = rate2.toFixed(2);

  return (
    <div className="App">
      <h1>Simple XIRR Demo</h1>
      <h2>Mainly to test out codesandbox.io with github</h2>
      <h3>First answer: {rate}</h3>
      <h3>Second answer: {rate2}</h3>
    </div>
  );
}
