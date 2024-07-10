export const Footer = () => {
  // return React.createElement("footer", null, "We're currently open!");

  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry, we're closed");

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            We&apos;re open until {closeHour}:00. Come visit us or order online.
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
};
