import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import "../css/showcase.css";
import Nav from "./nav";
import Video from "./video";
import thevid from "../resources/artsy3.mp4";

function Showcase() {
  var uppercase_alphabet = ["ABCDEFGHIJKLMNOPQRSTUVWSYZ"];
  var fpass, fname, fmail;
  return (
    <div className="form-wrapper">
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="johnsmith@gmail.com"
                onChange={() => {
                  const value = document.querySelector("#email").value;
                  console.log(value.includes("@"));
                  console.log(value.includes(".com"));
                  if (
                    !(value && value.includes("@") && value.includes(".com"))
                  ) {
                    const isfalse = document.querySelector("#email");
                    isfalse.className = "is-invalid form-control";
                  } else {
                    document.querySelector("#email").className =
                      "is-valid form-control";
                    fmail = 1;
                  }
                }}
              ></Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="yourpassword"
                onChange={() => {
                  var ispassword = document.querySelector("#password");
                  console.log(ispassword.value);
                  var num_count = 0;
                  for (var i = 0; i < ispassword.value.length; i++) {
                    var hasNumber = /\d/;
                    if (hasNumber.test(ispassword.value)) {
                      num_count++;
                    }
                    if (
                      ispassword.value[i] ===
                        ispassword.value[i].toUpperCase() &&
                      num_count >= 6
                    ) {
                      ispassword.className = "is-valid form-control";
                      fpass = 1;
                      break;
                    } else {
                      ispassword.className = "is-invalid form-control";
                    }
                  }
                  // if (!isNaN(ispassword.value)) {
                  //   num_count += 1;
                  //   console.log("found enough nums");
                  // }
                }}
              ></Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="full-name">Full name</Label>
              <Input
                type="text"
                id="full-name"
                placeholder="John Smith"
                onChange={() => {
                  var name = document.querySelector("#full-name");
                  if (name.value.length <= 2) {
                    name.className = "is-invalid form-control";
                  } else {
                    name.className = "is-valid form-control";
                    fname = 1;
                  }
                }}
              ></Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input
                type="text"
                id="address"
                placeholder="250 Main Street North Carolina"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Input type="file" name="file" id="upload-file" />
              <FormText color="muted">Please upload your file here</FormText>
            </FormGroup>
          </Col>
        </Row>
        <Button
          onClick={() => {
            if (!(fpass && fmail && fname)) {
              alert("please fill out all fields");
            } else {
              document.querySelector("#password").value = "";
              document.querySelector("#email").value = "";
              document.querySelector("#full-name").value = "";
              document.querySelector("#password").className = "form-control";
              document.querySelector("#email").className = "form-control";
              document.querySelector("#full-name").className = "form-control";
            }
          }}
        >
          Submit
        </Button>
      </Form>
      <Nav></Nav>
      <Video video={thevid} />
    </div>
  );
}

export default Showcase;
