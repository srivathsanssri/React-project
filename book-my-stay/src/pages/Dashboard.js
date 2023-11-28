import logo from './background.jpg';
import '../App.css';
import './Dashboard.css';
import image from "./images.jpg"
function App() {
  return (
    <div className="App">
       <div class="wrapper">
        <div class="section">
            <div class="top_navbar">
                <div class="hamburger">
                <img class="admin_image topright1" src={image}></img>
                <div class="topright">&nbsp;&nbsp;<span>Welcome admin</span></div>
                </div>
            </div>

        </div>
        </div>
      <header className="App-header">
        <img src="https://st2.depositphotos.com/4410397/7228/v/450/depositphotos_72282781-stock-illustration-hotel-icon.jpg" className="App-logo" alt="logo" />
        <p>
          Welcome to the Home page You have successfully logged in!
        </p>
        <a
          className="App-link"
          href="./"
          target="_blank"
          rel="noopener noreferrer"
        >
          Logout
        </a>
      </header>
    </div>
  );
}

export default App;
