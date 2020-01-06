import { Link } from "gatsby"

import { Navbar, Nav, NavItem, Form, FormControl, Button } from "react-bootstrap"

export default () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="/">
        <img
          src="/favicon.ico"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="G"
        />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/page-2/">Page 2</Nav.Link>
        <Nav.Link href="/a-markdown-page/">A Markdown Page</Nav.Link>
        <Nav.Link href="/another-page/">Another Markdown Page</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  )
}
