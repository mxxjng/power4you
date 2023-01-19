import Form from "./components/Form";
import "./style/App.css";

function App() {
    return (
        <div className="phone-simulator">
            <div className="page-title">
                <h3>Problem Ticket</h3>
                <p className="p-1 p-1--primary">Power Supply</p>
            </div>
            <div className="ticket-container">
                <Form />
            </div>
        </div>
    );
}

export default App;
