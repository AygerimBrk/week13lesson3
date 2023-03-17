import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ContactCard({ name, lastName, phone }) {
  return (
    <Card
      style={{
        width: "15rem",
        margin: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card.Body>
        <Card.Title>Name : {name}</Card.Title>
        <Card.Title>LastName : {lastName}</Card.Title>
        <Button variant="warning">{phone}</Button>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
