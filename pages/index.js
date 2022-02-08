import { getCookie, removeCookies, setCookies } from "cookies-next";

function App() {
  const handleAdd = () => {
    setCookies("abc", "Next Test Cookie", { path: "/" });
  };

  const handleRead = () => {
    console.log(getCookie("abc", { path: "/" }));
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
    </div>
  );
}

export default App;
