import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./TopBar.module.css";
import Image from "next/image";
import { Button } from "react-bootstrap";

const options = [
  "لیست کشویی 1",
  "لیست کشویی 2",
  "لیست کشویی 3",
  "لیست کشویی 4",
];
export default function TopBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home" className={`${styles.brand_style}`}>
            <Image src="/images/png/logo.png" width={75} height={75} />
            Mine
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home" className={`${styles.nav_link} ${styles.active_link}`}>خانه</Nav.Link>
              <Nav.Link href="#link" className={`${styles.nav_link}`}>درباره ما</Nav.Link>
              <Nav.Link href="#home" className={`${styles.nav_link}`}>خدمات</Nav.Link>
              <Nav.Link href="#link" className={`${styles.nav_link}`}>نمونه کارها</Nav.Link>
              <Nav.Link href="#link" className={`${styles.nav_link}`}>تیم</Nav.Link>
              <List
                component="nav"
                aria-label="Device settings"
                sx={{ bgcolor: "inherit" }}
              >
                <ListItem
                  button
                  id="lock-button"
                  aria-haspopup="listbox"
                  aria-controls="lock-menu"
                  aria-label="when device is locked"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClickListItem}
                >
                  <ListItemText primary="لیست کشویی" />
                </ListItem>
              </List>
              <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "lock-button",
                  role: "listbox",
                }}
              >
                {options.map((option, index) => (
                  <MenuItem
                    key={option}
                    selected={index === selectedIndex}
                    onClick={(event) => handleMenuItemClick(event, index)}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
              <Nav.Link href="#link" className={`${styles.nav_link}`}>تماس با ما</Nav.Link>
            </Nav>

              <Button className={`${styles.btn_outline_warning}`}>شروع</Button>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
