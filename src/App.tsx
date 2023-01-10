import Ticket from "./assets/Ticket";
import Form from "./components/Form";
import "./style/App.css";

function App() {
  return (
    <div className="phone-simulator">
      <div className="page-title">
        <h2>Problem Ticket</h2>
        <p className="p-1 p-1--primary">Power Supply</p>
      </div>
      <div className="ticket-container">
        <div className="ticket-container__headline">
          <Ticket />
          <h3>Ticket</h3>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default App;
