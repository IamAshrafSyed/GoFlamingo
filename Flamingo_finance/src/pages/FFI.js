import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
export const FFI = () => (
  //POOL
  <Row className="justify-content-center">
    <Col md={8} className="brds_10">
      <Row className="justify-content-center ">
        <Col md={12} className="pad_10 text_left">
          <span className="font_25">
            <b>FFI</b>
          </span>
        </Col>
      </Row>
    </Col>
    <Col md={8} className=" bg_div_color brds_10">
      <Row className="justify-content-center ">
        <Col md={6} className="pad_25">
           
          <span className="font_25">Total FFI</span>
          <br />
          <span className="font_25" id="pool_portfolio_balance">
            $--.--
          </span>
          <br />
        </Col>
        <Col md={6} className="pad_25">
        <table className="table table-borderless">
  <thead>
   
  </thead>
  <tbody className="bg_div_color pad_25">
    <tr>
      <th scope="row">Claimable</th>
      <td>FFI</td>
    </tr>
    <tr>
      <th scope="row">Still Locked</th>
      <td>FFI</td>
    </tr>
    <tr className='border-top'>
      <th scope="row">Total</th>
      <td>FFI</td>
    </tr>
   
  </tbody>
</table>
        </Col>
      </Row>
    </Col>
    <Col md={8} className="  brds_10">
      <br/>
      <br/>
      <br/>
    {/* SENIOR POOL */}
    <table className="table table-borderless">
  <thead>
    <tr>
      <th scope="col">Type</th>
      <th scope="col">Locked GFI</th>
      <th scope="col">Claimable GFI</th>
    </tr>
  </thead>
  <tbody className="bg_div_color pad_25">
    <tr>
      <th scope="row">$</th>
      <td>$--.--</td>
      <td>No Limit</td>
    </tr>
   
  </tbody>
</table>
{/* SENIOR POOL */}
<br/>
<br/>
{/* Borrower Pools */}

{/* SENIOR POOL */}
    </Col>
  </Row>

);
