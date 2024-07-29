import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:8000/clients")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <>Initial Setup</>;
}

export default App;
