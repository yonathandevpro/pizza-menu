export const Footer = () => {
  // return React.createElement("footer", null, "We're currently open!");

  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry, we're closed");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We&apos;re happy to welcome you between {openHour}:00 and {closeHour}
          :00.
        </p>
      )}
    </footer>
  );
};

function Order(props) {
  return (
    <div className="order">
      <p>
        We&apos;re open until {props.closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
