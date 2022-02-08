import { getCookie, removeCookies, setCookies } from "cookies-next";
import { useState } from "react";

function App() {
  const [cookieValue, setCookieValue] = useState("");

  const handleAdd = () => {
    setCookies("abc", "Next Test Cookie", {
      path: "/",
      domain: ".netlify.app",
    });
  };

  const handleRead = () => {
    setCookieValue(getCookie("abc", { path: "/" }));
  };

  const handleRemove = () => {
    removeCookies("abc", { path: "/" });
  };

  return (
    <div className="App">
      <h1>PROGRAMMIZ SESSION COOKIE TEST IN NEXTJS</h1>
      <button onClick={handleAdd}>Add Cookie</button> &nbsp;
      <button onClick={handleRead}>Read Cookie</button> &nbsp;
      <button onClick={handleRemove}>Remove Cookie</button>
      <br />
      <div>Cookie: {cookieValue}</div>
    </div>
  );
}

export default App;
