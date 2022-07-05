import React from "react";
import { Container, Button, ProgressBar } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Borrow = () => (
	<Row className="justify-content-center">
		<Col md={8} className="brds_10">
			<Row className="justify-content-center ">
				<Col md={12} className="pad_10 text_left">
					<span className="font_25">
						<b>Loading...</b>
					</span>
				</Col>
			</Row>
		</Col>
		<Col md={8} className=" bg_div_color brds_10">
			<Row className="justify-content-center ">
				<Col md={6} className="pad_25">
					<span className="font_25">Available to borrow</span>
					<br />
					<span className="font_25" id="">
						$0.00
					</span>
					<br />
					<br />
					<Button
						className="btn btn-secondary"
						onClick={() => alert("Borrow function is under Integration")}
					>
						{" "}
						Borrow
					</Button>
				</Col>
				<Col md={6} className="pad_25">
					<span className="font_25">Next payment</span>
					<br />
					<span className="font_25" id="">
						No payment due
					</span>
					<br />
					<br />
					<Button
						className="btn btn-secondary"
						onClick={() => alert("Pay function is under Integration")}
					>
						{" "}
						Pay
					</Button>
				</Col>
			</Row>
		</Col>
		<Col md={12} className="  brds_10">
			<br />
			<br />
		</Col>
		<Col md={8} className=" bg_div_color brds_10">
			<Row className="justify-content-center ">
				<br />
				<Col md={12} className="  brds_10 left_text">
					<br />
					<span className="font_25">Credit Status</span>
					<br />
					<ProgressBar striped variant="success" animated now={90} key={1} />
				</Col>

				<Col md={6} className="pad_25 left_text">
					<span className="font_25" id="">
						$0.00
					</span>
					<br />
					<span className="font_25">Balance plus interest</span>
					<br />
				</Col>
				<Col md={6} className="pad_25 right_text">
					<span className="font_25" id="">
						$0.00
					</span>
					<br />
					<span className="font_25">Available to drawdown</span>
					<br />
				</Col>
			</Row>

			<Row className="justify-content-left ">
				<Col md={12} className="pad_25 left_text">
					<hr></hr>
				</Col>
				<Col md={4} className="pad_25 left_text">
					<span className="font_25" id="">
						$0.00
					</span>
					<br />
					<span className="font_25">Limit</span>
					<br />
				</Col>
				<Col md={4} className="pad_25 left_text">
					<span className="font_25" id="">
						$0.00
					</span>
					<br />
					<span className="font_25">Interest rate APR</span>
					<br />
				</Col>
				<Col md={4} className="pad_25 left_text">
					<span className="font_25" id="">
						$0.00
					</span>
					<br />
					<span className="font_25">Payment frequency</span>
					<br />
				</Col>{" "}
				<Col md={4} className="pad_25 left_text">
					<span className="font_25" id="">
						$0.00
					</span>
					<br />
					<span className="font_25">Payback term</span>
					<br />
				</Col>
			</Row>
		</Col>
	</Row>
);
