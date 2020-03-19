import React, {useState} from "react";
import "./App.css";
import "./index.css";
import PictureContainer from './Components/PictureContainer'
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  // NavbarText
} from 'reactstrap';

function App() {
  const [date, setDate] = useState('');
  const [another, setAnother] = useState('')
  // const dateQuery = document.querySelector(".dateSearch");
  // console.log(dateQuery);
  //react strap nav stuff
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <div className="App">
      <div className="testing">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Nasa's Photo of the Day</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {/* <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink href="https://github.com/RobertMisch">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Photos
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <Button color="info">Today's photo</Button>
                  </DropdownItem>
                  <DropdownItem>
                  <Button color="info">This week of photos</Button>
                  </DropdownItem>
                  {/* <DropdownItem divider /> */}
                  <DropdownItem>
                  <Button color="info">This months photos</Button>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            {/* <NavbarText></NavbarText> */}
          </Collapse>
        </Navbar>
      </div>
      <div>
        <h1>WELCOME!</h1>
        <p>Want a specific photo? Put in a date!</p>
        <input id="form" type="date" placeholder='search' onChange={(e) => setAnother(e.target.value)} value={another}/>
        <button type="button" onClick={() => setDate(another)}>Submit</button>
        {/* <button type="button" onclick={() => }>Add</button> */}
        <PictureContainer date={date}/>
      </div>
    </div>
  );
}

export default App;