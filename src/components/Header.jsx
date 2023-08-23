import React from "react";
import { Navbar, Container, Button} from "react-bootstrap";
// let Register = () => {
//   return (
//     <>
//       <Container className="mt-3">
//         <Row>
//           <Col xs={3}>
//             <Card>
//               <Card.Header
//                 className="p-3"
//                 style={{ backgroundColor: "lightblue" }}
//               >
//                 <h4>Register</h4>
//               </Card.Header>
//               <Card.Body>
//                 <Form>
//                     <Form.Group className="mb-3">
//                     <Form.Control type="text" placeholder="Username"></Form.Control>
//                     </Form.Group>
//                     <Form.Group className="mb-3">
//                     <Form.Control type="email" placeholder="Email"></Form.Control>
//                     </Form.Group>
//                     <Form.Group className="mb-3">
//                     <Form.Control type="password" placeholder="Password"></Form.Control>
//                     </Form.Group>
//                     <Form.Group className="mb-3">
//                     <Button variant="success" type="submit">Submit</Button>
//                     </Form.Group>
//                 </Form>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };
// export default Register;
let Head=()=>{
return(<>
<Navbar bg="dark" variant="dark" expand="lg" style={{position : "fixed",zIndex:"1",marginTop:"0",width:"98.4%"}}>
<Container fluid>
<Navbar.Brand href="/">Home</Navbar.Brand>
<Navbar.Brand href="/">Store</Navbar.Brand>
<Navbar.Brand href="/">About</Navbar.Brand>
<Button style={{float : "right"}}>Cart[0]</Button>
</Container>
</Navbar>
<Container fluid style={{textAlign : "center",backgroundColor:"lightgray",paddingTop : '5rem',paddingBottom:'5rem'}}>
    <h1>THE GENERICS</h1>
</Container>
</>)
}
export default Head;

