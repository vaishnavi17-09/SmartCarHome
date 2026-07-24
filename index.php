<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Smart Car Home Dashboard</title>

<link rel="stylesheet" href="css/style.css">

<link rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

</head>

<body>

<div class="container">

<!-- HEADER -->

<header>

<div class="logo">
<i class="fas fa-car"></i>
<h2>Smart Car Home</h2>
</div>

<div class="right-header">

<div class="user">

<i class="fa fa-user-circle"></i>

<span>
<?php
session_start();
echo isset($_SESSION['username']) ?
$_SESSION['username'] : "Guest";
?>
</span>

</div>

<div class="time" id="clock"></div>

</div>

</header>


<!-- TOP CAR STATUS -->

<div class="top-cards">

<div class="card">
<i class="fas fa-gauge-high"></i>
<h3>Speed</h3>
<h1 id="speed">85 km/h</h1>
</div>

<div class="card">
<i class="fas fa-gas-pump"></i>
<h3>Fuel</h3>
<h1 id="fuel">68%</h1>
</div>

<div class="card">
<i class="fas fa-battery-full"></i>
<h3>Battery</h3>
<h1 id="battery">91%</h1>
</div>

<div class="card">
<i class="fas fa-temperature-half"></i>
<h3>Temperature</h3>
<h1>34°C</h1>
</div>

</div>



<!-- MAIN GRID -->

<div class="dashboard">

<!-- LEFT -->

<div class="left">

<div class="glass weather">

<h2>
<i class="fas fa-cloud-sun"></i>
Weather
</h2>

<h1>28°C</h1>

<p>Sunny</p>

</div>
<div class="glass map">

    <h2>
        <i class="fas fa-map-marker-alt"></i>
        Live Map
    </h2>

    <iframe
        src="https://www.google.com/maps?q=Zeal+College+Narhe+Pune&output=embed"
        width="100%"
        height="300"
        style="border:0;"
        loading="lazy">
    </iframe>

</div>
<div class="music-player">
    <h2>🎵 Music Player</h2>

    <audio id="audioPlayer" controls>
        <source id="songSource" src="songs/song1.mp3" type="audio/mp3">
    </audio>

    <br>

    <button onclick="playSong('songs/song1.mp3')">
        Song 1
    </button>

    <button onclick="playSong('songs/song2.mp3')">
        Song 2
    </button>

    <button onclick="playSong('songs/song3.mp3')">
        Song 3
    </button>

</div>


<div class="glass trip">

<h2>

<i class="fas fa-route"></i>

Trip Information

</h2>

<h3>Pune → Solapur</h3>

<p>Distance : 252 km</p>

<p>ETA : 4 hr 20 min</p>

</div>


<div class="glass home">

<h2>

<i class="fas fa-house"></i>

Smart Home Controls

</h2>

<div class="buttons">

<button>Lights OFF</button>

<button>Door Locked</button>

<button>CCTV ON</button>

<button>Garage Closed</button>

<button>Fan OFF</button>

<button>AC OFF</button>

<button>TV OFF</button>

<button>Gas Safe</button>

</div>

</div>

</div>



<!-- RIGHT -->

<div class="right">

<div class="glass car">

<h2>

<i class="fas fa-car-side"></i>

Car Status

</h2>

<img src="images/car.png">

</div>



<div class="glass">

<h2>

<i class="fas fa-video"></i>

Camera

</h2>

<p>Front Camera Active</p>

</div>


<div class="glass">

<h2>

<i class="fas fa-bell"></i>

Notifications

</h2>

<ul>

<li>✔ Door Locked</li>

<li>✔ Garage Closed</li>

<li>✔ CCTV Active</li>

<li>⚠ Fuel Low</li>

<li>⚠ Rain Warning</li>

</ul>

</div>


<div class="glass">

<h2>

<i class="fas fa-music"></i>

Now Playing

</h2>

<p>Perfect - Ed Sheeran</p>

</div>


<div class="glass">

<h2>

<i class="fas fa-shield-halved"></i>

Security

</h2>

<p>Home Secure</p>

<p>No Motion Detected</p>

</div>


<div class="glass">

<h2>

<i class="fas fa-map-location-dot"></i>

Current Location

</h2>

<p>Pune, Maharashtra</p>

</div>

</div>

</div>

</div>

<script src="js/script.js"></script>

</body>
</html>