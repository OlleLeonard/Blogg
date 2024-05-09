import Skriv from "./Skriv/Skriv";
function Home() {
  return (
    <div className="Center">
      <div className="App-Body">
        <h1>Welcome!</h1>
        <h2>To the list site</h2>
        <Skriv></Skriv>
        <p>
          {" "}
          Here you can create lists such as: "to do lists, shopping lists,
          bucket lists" or whatever you can think of!
        </p>
      </div>
    </div>
  );
}

export default Home;
