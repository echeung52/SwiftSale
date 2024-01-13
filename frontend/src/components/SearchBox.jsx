import { useNavigate, useLocation } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function SearchBox() {
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/?q=${keyword}&page=1`);
    } else {
      navigate(useLocation().pathname);
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <div className="d-flex">
        <Form.Control
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          className="m-2"
        />
        <Button
          type="submit"
          variant="outline-success"
          className="m-2"
          style={{
            fontWeight: "bold",
          }}
        >
          Search
        </Button>
      </div>
    </Form>
  );
}
