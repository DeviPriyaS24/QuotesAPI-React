import React from 'react'
import { Container, Navbar } from 'react-bootstrap'


const Header = () => {
  return (
    <div>
        <Navbar className="nav">
        <Container>
          <Navbar.Brand href="#home">
          <i class="fa-solid fa-quote-left"></i>
          <i class="fa-solid fa-quote-right"></i>{' '}
          QuoteSnap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header