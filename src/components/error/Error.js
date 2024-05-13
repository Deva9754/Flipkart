import { useRouteError } from "react-router-dom";
import "./Error.css";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="error-image">
      <div>
        <div className="error-text">
          <h1>{err.data}!!!</h1>
          <div>
            <p>
              {err.status}
              {err.statusText}
            </p>
          </div>
        </div>
        <img
          src="https://cdn.dribbble.com/users/774806/screenshots/3823110/something-went-wrong.gif"
          alt="error-image"
        />
      </div>
    </div>
  );
};

export default Error;
