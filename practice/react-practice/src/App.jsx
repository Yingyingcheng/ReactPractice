import "./App.css";
import { useState } from "react";

const user = {
  name: "Doris",
  age: 32,
  gender: "female",
  imageUrl: "https://react.dev/images/docs/scientists/yXOvdOSs.jpg",
  imageSize: 90,
};

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

// MyButton read the props passed from its parent component
function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}

export default function App() {
  const productList = products.map((prodcut) => (
    <li
      key={prodcut.id}
      style={{ color: prodcut.isFruit ? "magenta" : "darkgreen" }}
    >
      {prodcut.title}
    </li>
  ));
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <h2 style={{ backgroundColor: "pink", padding: "5px" }}>SECTION 1</h2>
      <h3> {user.name} </h3>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of" + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <ul>{productList}</ul>
      <h2 style={{ backgroundColor: "pink", padding: "5px" }}>SECTION 2</h2>
      <h3>Counters that update together</h3>
      {/* pass the state down from MyApp to each MyButton, together with the shared click handler. */}
      {/* MyApp component contains the count state and the handleClick event handler
      passes both of them down as props to each of the buttons. */}
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </>
  );
}
