import "./App.css";
import FacebookLogin from "react-facebook-login";
import MessengerCustomerChat from "react-messenger-customer-chat";
import GoogleLogin from "react-google-login";

function App() {
  const responseFacebook = (response) => {
    console.log(response);
  };
  const responseGoogle = (response) => {
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
          onClick={responseFacebook}
        />
        <br />
        <GoogleLogin
          clientId="1091161395922-d52i27k59c6bptbotqlec8tbqeqp12sf.apps.googleusercontent.com"
          onSuccess={responseGoogle}
          //onFailure={responseFailed}
          fields="name,email,picture"
          buttonText="Login with Google"
          buttonStyle={{ padding: "6px" }}
          callback={responseGoogle}
        />
      </header>

      {/* <MessengerCustomerChat pageId="103046775543295" appId="639360217231205" /> */}
    </div>
  );
}

export default App;
