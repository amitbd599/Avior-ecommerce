import React from "react";
import "./index.scss";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
const App = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default App;
