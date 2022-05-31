import { useState } from "preact/hooks";
import DemoWrapper from "./DemoWrapper";

const GeolocationComponent = () => {
  const [permissionResults, setPermissionResults] = useState(
    "Geolocation permissions undetermined"
  );
  const [coordinates, setCoordinates] = useState<
    GeolocationCoordinates | undefined
  >(undefined);
  const onGetLocation = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setCoordinates(coords);
        setPermissionResults("✔️ You're allowed to use the Geolocation API");
      },
      (error) => {
        if (error.code === 1) {
          setPermissionResults(
            "❌ You have denied access to the Geolocation API. Please re-enable it in your browser settings to use the API"
          );
        }
        console.log(error);
      }
    );
  };

  const onWatchLocation = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setCoordinates(coords);
        setPermissionResults("✔️ You're allowed to use the Geolocation API");
      },
      (error) => {
        if (error.code === 1) {
          setPermissionResults(
            "❌ You have denied access to the Geolocation API. Please re-enable it in your browser settings to use the API"
          );
        }
        console.log(error);
      }
    );
  };

  return (
    <DemoWrapper id="geolocation" title="Geolocation">
      <p>Geolocation gets your current device location.</p>
      <div className="row">
        <button onClick={onGetLocation}>Get my location!</button>
        <button onClick={onWatchLocation}>Watch my location!</button>
      </div>

      <p>Permissions: {permissionResults}</p>
      {coordinates && (
        <ul>
          <li>Latitude: {coordinates.latitude}</li>
          <li>Longitude: {coordinates.longitude}</li>
          <li>Altitude: {coordinates.altitude || "Unknown"}</li>
          <li>Heading: {coordinates.heading || "Unknown"}</li>
        </ul>
      )}
    </DemoWrapper>
  );
};

export default GeolocationComponent;
