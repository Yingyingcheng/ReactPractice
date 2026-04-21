import "./App.css";

const user = {
  name: "Doris",
  age: 32,
  gender: "female",
  imageUrl: "https://react.dev/images/docs/scientists/yXOvdOSs.jpg",
  imageSize: 90,
};

export default function App() {
  return (
    <>
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
    </>
  );
}
