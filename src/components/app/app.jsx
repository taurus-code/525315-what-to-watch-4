import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {titlePromo, genrePromo, releaseDatePromo} = props;
  return <Main title={titlePromo} genre={genrePromo} releaseDate={releaseDatePromo} />;
};

export default App;
