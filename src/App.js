import "./App.css";
import FacebookLogin from "react-facebook-login";

function App() {
  const responseFacebook = (response) => {
    console.log(response);
  };
  return (
    <div className="App">
      <header className="App-header">
        <FacebookLogin
          appId="639360217231205"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
        />
      </header>
    </div>
  );
}

export default App;
