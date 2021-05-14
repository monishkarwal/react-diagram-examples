import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router";

// Components
import Sidebar from "../../components/Sidebar";
import ExampleOne from "./examples/example1";
import ExampleTwo from "./examples/example2";
import ExampleThree from "./examples/example3";
import ExampleFour from "./examples/example4";

// CSS
import "./styles/style.css";

const ReactFlow = () => {
  const match = useRouteMatch();
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col xs={10}>
          <Switch>
            <Route path={`${match.path}/example1`} component={ExampleOne} />
            <Route path={`${match.path}/example2`} component={ExampleTwo} />
            <Route path={`${match.path}/example3`} component={ExampleThree} />
            <Route path={`${match.path}/example4`} component={ExampleFour} />
            <Route path={`${match.path}/example5`} component={ExampleOne} />
            <Route to={match.path} exact>
              <h3>Please select an example!</h3>
            </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default ReactFlow;
