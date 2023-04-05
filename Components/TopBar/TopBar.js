import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./TopBar.module.css";
import Image from "next/image";
import { Button } from "react-bootstrap";
import Link from "next/link";

const options = [
  "لیست کشویی 1",
  "لیست کشویی 2",
  "لیست کشویی 3",
  "لیست کشویی 4",
];
export default function TopBar() {
  return (
    <>
      <Navbar expand="lg" className="position-absolute w-100">
        <Container>
          <Navbar.Brand href="#home" className={`${styles.brand_style}`}>
            <Image src="/images/png/logo.png" width={75} height={75} />
            Mine
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar__toggle bg-white"
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={`${styles.navbar__nav}`}
          >
            <Nav className="mx-auto text-sm-center">
              <Link
                href="#home"
                className={`${styles.nav_link} ${styles.active_link}`}
              >
                خانه
              </Link>
              <Link href="#link" className={`${styles.nav_link}`}>
                درباره ما
              </Link>
              <Link href="#home" className={`${styles.nav_link}`}>
                خدمات
              </Link>
              <Link href="#link" className={`${styles.nav_link}`}>
                نمونه کارها
              </Link>
              <Link href="#link" className={`${styles.nav_link}`}>
                تیم
              </Link>
              <Link href="#link" className={`${styles.nav_link}`}>
                لیست کشویی
              </Link>

              <Link href="#link" className={`${styles.nav_link}`}>
                تماس با ما
              </Link>
            </Nav>

            <Button className={`${styles.btn_outline_warning}`}>شروع</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
