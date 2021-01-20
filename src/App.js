import "./App.css";
import CreditCard from "./CreditCard/CreditCard";
import "bootstrap/dist/css/bootstrap.min.css";
import AccountTracking from "./AccountTracking/AccountTracking";
import Transactions from "./Transactions/Transactions";

function App() {
  return (
    <div className="app">
      <CreditCard />
      <AccountTracking />
      <Transactions />
    </div>
  );
}

export default App;
