import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
export const Earn = () => (
	//POOL
	<Row className="justify-content-center">
		<Col md={8} className="brds_10">
			<Row className="justify-content-center ">
				<Col md={12} className="pad_10 text_left">
					<span className="font_25">
						<b>Pools</b>
					</span>
				</Col>
			</Row>
		</Col>
		<Col md={8} className=" bg_div_color brds_10">
			<Row className="justify-content-center ">
				<Col md={6} className="pad_25">
					<span className="font_25">Portfolio balance</span>
					<br />
					<span className="font_25" id="pool_portfolio_balance">
						$--.--
					</span>
					<br />
				</Col>
				<Col md={6} className="pad_25">
					<span className="font_25">Est. Annual Growth</span>
					<br />
					<span className="font_25" id="pool_annual_balance">
						$--.--
					</span>
				</Col>
			</Row>
		</Col>
		<Col md={8} className="  brds_10">
			<br />
			<br />
			<br />
			{/* SENIOR POOL */}
			<table className="table table-borderless">
				<thead>
					<tr>
						<th scope="col">Senior Pool</th>
						<th scope="col">Your Balance</th>
						<th scope="col">Pool Limit</th>
						<th scope="col">ESTY</th>
					</tr>
				</thead>
				<tbody className="bg_div_color pad_25">
					<tr>
						<th scope="row">$67888888888</th>
						<td>$--.--</td>
						<td>No Limit</td>
						<td>@</td>
						<td>
							<button
								onClick={() =>
									alert("Senior Pool protocol is under Integration")
								}
							>
								open
							</button>
						</td>
					</tr>
				</tbody>
			</table>
			{/* SENIOR POOL */}
			<br />
			<br />
			{/* Borrower Pools */}
			<table className="table table-borderless">
				<thead>
					<tr>
						<th scope="col">Borrower Pools</th>
						<th scope="col">Your Balance</th>
						<th scope="col">Pool Limit</th>
						<th scope="col">ESTY</th>
					</tr>
				</thead>
				<tbody className="bg_div_color pad_25">
					<tr>
						<th scope="row">$67888888888</th>
						<td>$--.--</td>
						<td>No Limit</td>
						<td>@</td>
						<td>
							<button
								onClick={() =>
									alert("Borrower Pool protocol is under Integration")
								}
							>
								open
							</button>
						</td>
					</tr>
				</tbody>
			</table>
			{/* SENIOR POOL */}
		</Col>
	</Row>
);
