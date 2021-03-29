import { BrowserRouter, Switch, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import PremiumPage from "./pages/PremiumPage";
import SupportPage from "./pages/SupportPage";
import DownloadPage from "./pages/DownloadPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/premium" component={PremiumPage} />
        <Route path="/support" component={SupportPage} />
        <Route path="/download" component={DownloadPage} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
