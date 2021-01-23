import "./App.css";
import CreditCard from "./CreditCard/CreditCard";
import "bootstrap/dist/css/bootstrap.min.css";
import AccountTracking from "./AccountTracking/AccountTracking";
import Transactions from "./Transactions/Transactions";
import RecentTransactions from "./RecentTransactions/RecentTransactions";
import Nav from "./Nav/Nav";

function App() {
  return (
    <div className="app">
      <div className="test">
        <Nav />
        <CreditCard />
        <AccountTracking />
        {/* <Transactions /> */}
      </div>
      <RecentTransactions />
    </div>
  );
}

export default App;
