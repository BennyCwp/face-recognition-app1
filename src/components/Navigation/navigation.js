import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signin")}
          className="f3 dim pa3 black link underline pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return <div></div>;
  }
};

export default Navigation;
