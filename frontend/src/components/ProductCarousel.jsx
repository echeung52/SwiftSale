import { useDispatch, useSelector } from "react-redux";
import { Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { listTopProducts } from "../actions/productActions";
import { useEffect } from "react";
import { Alert } from "react-bootstrap";

export default function ProductCarousel() {
  const dispatch = useDispatch();
  const { error, loading, products } = useSelector(
    (state) => state.productTopRated
  );

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Alert variant="danger">{error}</Alert>
  ) : (
    <Carousel pause="hover" className="bg-dark">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} />
            <Carousel.Caption className="carousel.caption">
              <h4>
                {product.name}(${product.price})
              </h4>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
