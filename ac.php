<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart AC Control</title>

    <link rel="stylesheet" href="css/ac.css">
    <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
</head>

<body>

<form action="save_ac.php" method="POST">

<div class="container">

    <div class="top-bar">
        <div>
            <h1><i class="fas fa-snowflake"></i> Air Conditioner</h1>
            <p>Smart Home Climate Control</p>
        </div>

        <div class="time">
            <i class="fa-solid fa-clock"></i>
            <span id="time"></span>
        </div>
    </div>

    <div class="cards">

        <div class="card">
            <i class="fas fa-power-off"></i>

            <h2>AC Status</h2>

            <select name="status" id="acBtn">
    <option value="ON">ON</option>
    <option value="OFF">OFF</option>
</select>
        </div>

        <div class="card">
            <i class="fas fa-temperature-half"></i>

            <h2>Room Temperature</h2>

            <h1 id="roomTemp">26°C</h1>
        </div>

        <div class="card">
            <i class="fas fa-wind"></i>

            <h2>Fan Speed</h2>

            <select name="fan_speed">
    <option value="Low">Low</option>
    <option value="Medium" selected>Medium</option>
    <option value="High">High</option>
</select>
        </div>

    </div>

    <div class="slider-card">

        <h2>Set Temperature</h2>

        <input
type="range"
id="tempSlider"
name="temperature"
min="16"
max="30"
value="22">

        <h1 id="setTemp">22°C</h1>

    </div>

    <div class="cards">

        <div class="card mode">
            <i class="fas fa-snowflake"></i>
            <h2>Cooling Mode</h2>

            <button class="modeBtn">
                Active
            </button>
        </div>

        <div class="card mode">
            <i class="fas fa-leaf"></i>
            <h2>Eco Mode</h2>

            <select name="eco_mode" id="ecoMode">
                <option value="ON">ON</option>
                <option value="OFF" selected>OFF</option>
            </select>
        </div>

        <div class="card mode">
            <i class="fas fa-bed"></i>
            <h2>Sleep Mode</h2>

            <select name="sleep_mode" class="modeBtn">
    <option value="ON">ON</option>
    <option value="OFF" selected>OFF</option>
</select>
        </div>

    </div>

    <div class="cards">

        <div class="card">

            <i class="fas fa-sync"></i>

            <h2>Swing</h2>

            <select name="swing" class="modeBtn">
                <option value="ON">ON</option>
                <option value="OFF" selected>OFF</option>
            </select>

        </div>

        <div class="card">

            <i class="fas fa-clock"></i>

            <h2>Timer</h2>

            <h1>2 Hours</h1>

        </div>

        <div class="card">

            <i class="fas fa-circle-check"></i>

            <h2>Status</h2>

            <h1 style="color:#00ff99;">
                Connected
            </h1>

        </div>

    </div>

    <div class="bottom-buttons">

        <button type="submit" class="saveBtn">
Apply Settings
</button>

        <button class="backBtn"
        onclick="window.location.href='index.php'">

            Back to Dashboard

        </button>

    </div>

</div>
</form>
<script src="js/ac.js"></script>

</body>
</html>