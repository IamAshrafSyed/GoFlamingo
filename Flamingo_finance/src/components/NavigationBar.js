import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import logo from "../assets/logo.png";
import logofl from "../assets/flamingo.png";

const Styles = styled.div`
	${
		"" /* // .navbar {
  //  background-color: #f9f9f9;
  // }
  .logo {
    //   background-color: #f9f9f9;
    // } */
	}
`;

export const NavigationBar = () => (
	<Styles>
		<Navbar expand="md">
			<Navbar.Brand href="/" className="">
				{" "}
				<img src={logofl} alt="" className="logo brand_logo_main" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<ul className="nav navbar-nav navbar-right connect_btn">
				<li>
					<div className="btn-nav btn btn-primary eth_connect_btn">Connect</div>
				</li>
			</ul>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="flex-column">
					<Nav.Item id="brand_logo">
						<Nav.Link as={Link} to="/">
							<img src={logofl} alt="" className="logo" />
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link as={Link} to="/earn">
							Earn
						</Nav.Link>
					</Nav.Item>

					<Nav.Item>
						<Nav.Link as={Link} to="/borrow">
							Borrow
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link as={Link} to="/ffi">
							FFI
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link as={Link} to="/transfer">
							Transction
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</Styles>
);
