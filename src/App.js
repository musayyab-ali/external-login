import "./App.css";
import FacebookLogin from "react-facebook-login";
import MessengerCustomerChat from "react-messenger-customer-chat";

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

      <MessengerCustomerChat pageId="103046775543295" appId="639360217231205" />
    </div>
  );
}

export default App;
