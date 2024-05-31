import { PropTypes } from "prop-types";
import "./Counter.css";

function CounterButton({ by, incrementFunction, decrementFunction }) {
  return (
    <div className="CounterButton">
      <div>
        <button className="counterButton" onClick={() => incrementFunction(by)}>
          +{by}
        </button>
        <button className="counterButton" onClick={() => decrementFunction(by)}>
          -{by}
        </button>
      </div>
    </div>
  );
}

CounterButton.propTypes = {
  by: PropTypes.number,
};

CounterButton.defaultProps = {
  by: 1,
};

export default CounterButton;
