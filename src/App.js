import { Fragment } from "react";
import Header from "./Components/Header";
import IncomeStatement from "./Components/IncomeStatement";

const App = () => (
    <Fragment>
      <Header brand="IncomeStatement"/>
      <IncomeStatement />
    </Fragment>
);

export default App;