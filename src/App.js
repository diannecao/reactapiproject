import logo from './logo.svg';
import './App.css';
import Home from './Home';
import React from 'react';

function App() {
  return (
    <>
<head>
  <title>Main Page</title>
</head>
<body>
  <div className = "banner">
        <div className = "navbar">
        <h1>Splatoon 3</h1>
            <ul>
            <button onclick="document.location='MyGear.js'" class="btn"><span></span> My Gear</button>
            <script src="script.js"></script>
          
                <li><a href="#">Home</a></li>
                <li><a href="aboutme.html"> My Gear</a></li>
                <li><a href="#">Splatfest</a></li>
            </ul>
        </div>
    </div>
    <Home/>
</body>
</>
  );
}

export default App;


