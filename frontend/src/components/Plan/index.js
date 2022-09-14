import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import ListGroup from "react-bootstrap/ListGroup";

const Plan = ({ name, description, extra_info, price, characteristics }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {price !== null ? <Card.Text>${price} USD/mo</Card.Text> : undefined}
        <Button>GET STARTED</Button>
        {extra_info !== null ? <Card.Text>{extra_info}</Card.Text> : undefined}
      </Card.Body>
      <ListGroup className="list-group-flush">
        {characteristics?.map((c) => (
          <ListGroup.Item>{c}</ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Learn more</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Plan;
