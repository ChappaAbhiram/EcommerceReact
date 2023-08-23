import React , {useState}from "react";
import {Card,Container,Col,Row,Button} from "react-bootstrap";
let Counter = () =>{
    let [state,setState] = useState(0);
    const incrementcount = (event)=>{
event.preventDefault();
setState(state++);
    }
return (
    <>
<Container className="mt-3">
    <Row>
        <Col xs={4}>
        <Card className="shadow-lg">
            <Card.Body>
                <p className="display-2">{state}</p>
                <Button variant="primary" onClick={incrementcount}>Increment</Button>
                <Button variant="success">Increment</Button>
            </Card.Body>
        </Card>
        </Col>
    </Row>
</Container>
</>
)
};
export default Counter;