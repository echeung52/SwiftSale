import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as solidStar,
  faStarHalfAlt as halfStar,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

export default function Rating({ value, text, color }) {
  color = "#f8e825";

  return (
    <div className="rating">
      <span>
        <FontAwesomeIcon
          style={{ color }}
          icon={value >= 1 ? solidStar : value >= 0.5 ? halfStar : regularStar}
        ></FontAwesomeIcon>
      </span>

      <span>
        <FontAwesomeIcon
          style={{ color }}
          icon={value >= 2 ? solidStar : value >= 1.5 ? halfStar : regularStar}
        ></FontAwesomeIcon>
      </span>
      <span>
        <FontAwesomeIcon
          style={{ color }}
          icon={value >= 3 ? solidStar : value >= 2.5 ? halfStar : regularStar}
        ></FontAwesomeIcon>
      </span>
      <span>
        <FontAwesomeIcon
          style={{ color }}
          icon={value >= 4 ? solidStar : value >= 3.5 ? halfStar : regularStar}
        ></FontAwesomeIcon>
      </span>
      <span>
        <FontAwesomeIcon
          style={{ color }}
          icon={value >= 5 ? solidStar : value >= 4.5 ? halfStar : regularStar}
        ></FontAwesomeIcon>
      </span>

      <span>{text}</span>
    </div>
  );
}
