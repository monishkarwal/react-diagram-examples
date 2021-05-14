import React from "react";
import { ListGroup } from "react-bootstrap";
import { useHistory, useRouteMatch } from "react-router";

const Sidebar = () => {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <ListGroup>
      <ListGroup.Item
        onClick={() => {
          history.push(`${match.url}/example1`);
        }}
      >
        Example 1
      </ListGroup.Item>
      <ListGroup.Item
        onClick={() => {
          history.push(`${match.url}/example2`);
        }}
      >
        Example 2
      </ListGroup.Item>
      <ListGroup.Item
        onClick={() => {
          history.push(`${match.url}/example3`);
        }}
      >
        Example 3
      </ListGroup.Item>
      <ListGroup.Item
        onClick={() => {
          history.push(`${match.url}/example4`);
        }}
      >
        Example 4
      </ListGroup.Item>
      <ListGroup.Item
        onClick={() => {
          history.push(`${match.url}/example5`);
        }}
      >
        Example 5
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Sidebar;
