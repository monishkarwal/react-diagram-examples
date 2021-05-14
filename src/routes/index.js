import { Redirect, Route, Switch } from "react-router";

// Components
import NotFound from "../components/NotFound";
import ReactFlow from "../modules/ReactFlow";

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <Redirect to="/reactflow" />} />
      <Route path="/reactflow" component={ReactFlow} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Router;
