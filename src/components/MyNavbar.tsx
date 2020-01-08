import { Link } from 'gatsby'

import { Navbar, Nav, NavItem, Form, FormControl, Button } from 'react-bootstrap'

const MyNavLinks = () => {
  return (
    <Nav className="mr-auto">
      <Nav.Item>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link className="nav-link" to="/blog/">
          Blog
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link className="nav-link" to="/about/">
          About
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link className="nav-link" to="/contact/">
          Contact
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link className="nav-link" to="/my-files/">
          File Data
        </Link>
      </Nav.Item>
    </Nav>
  )
}

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="/">
        <img src="/favicon.ico" width="30" height="30" className="d-inline-block align-top" alt="G" />
      </Navbar.Brand>
      <MyNavLinks />
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar >
  )
}

export default MyNavbar
