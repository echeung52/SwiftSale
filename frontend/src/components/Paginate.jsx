import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../main.css";

export default function Paginate({ pages, page, q = "" }) {
  if (q) {
    q = q.split("?q=")[1].split("&")[0];
  }

  return (
    pages > 1 && (
      <Pagination className="my-pagination">
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={{
              pathname: "/",
              search: `?q=${q}&page=${x + 1}`,
            }}
          >
            <Pagination.Item
              className={
                x + 1 === page ? "active my-active-page" : "my-page-link"
              }
            >
              {x + 1}
            </Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
}
