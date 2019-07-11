<!DOCTYPE html>
<html lang="en">
<head>
  <title>INTER</title>
  <meta charset="utf-8">
   <meta content='IE=edge' http-equiv='X-UA-Compatible'>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link href="http://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
  <link href="http://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">
          <script type="text/javascript" src="http://www.google.com/jsapi"></script>
        <script type="text/javascript"> 
            google.load('visualization', '1',
                {'packages':['corechart', 'table']}
                ); 
        </script>
        <script type="text/javascript">
            function authenticate(){
                //fetch data from input
                var user_atmpt = document.getElementById("usr").value;
                var pass_atmpt = document.getElementById("pss").value;
            
                function runQuery() {
                    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1LBPUBBIPMy5S6KQWBibkj0QBmd1EfbI-Io1XzjFS7Ig/edit?usp=sharing');
                    query.setQuery('select A,B,C,D,E,F where A matches ' + '"' + user_atmpt + '"');
                    var data_string =  query.send(handleQueryResponse);
                };
                // A callback function that runs when data source responds
                // Take an object of type QueryResponse
                function handleQueryResponse(response){
                    if (response.isError()) {
                        window.alert("Error accessing the database.")
                    }
                    else {                   
                        data = response.getDataTable().toJSON();
                        var header = document.getElementById("error_message");
                        var userinfo = document.getElementById("user_info");
                        var obj = JSON.parse(data);
                        if (obj.rows.length ==0) { //because google api does not seem to throwing errors as expected :/
                            header.innerHTML = "User does not exist";
                        }
                        else {
                            var user = obj.rows[0].c[0].v;
                            var password = obj.rows[0].c[1].v;
                
                            if (user.match(user_atmpt) && password.match(pass_atmpt)) {
                                header.innerHTML = 'User authenticated!';
								 
								window.location.replace("file:///C:/Users/syfgwc/Documents/user.html");
                        		userinfo.innerHTML = "Name: " + obj.rows[0].c[2].v + " " + obj.rows[0].c[3].v + 
                        							 "<br />Phone: " + obj.rows[0].c[4].v + 
                        							 "<br />Email: " + obj.rows[0].c[5].v;
							
								
                       		}
                            else {
                               header.innerHTML = "Username/Password is incorrect. Please try again.";
                            }; 
                        };
                    };
                }
                runQuery();
   
            }
            
        </script>
  <style>
  @font-face {
    font-family: myFirstFont2;
    src: url(basic_title_font.woff);
	}
	div {
    font-family: myFirstFont2;
	}  
	body {
      font-family: "Basic Title Font";
	  font-size:20px;
      line-height: 2.8;
      color: #000000;
  }
 
   br{background-color:#000066;}
  h2 {
	 font-family: "Basic Title Font";
      font-size: 45px;
      text-transform: uppercase;
      color: #000000;
      font-weight: 600;
      margin-bottom: 30px;
  }
  h4 {
      font-size: 19px;
      line-height: 1.375em;
      color: #303030;
      font-weight: 400;
      margin-bottom: 30px;
  }
  .bg-grey {
      background-color: #2f2f2f;
	  }
<!--   Jumbotron for homepage --> 
   .jumbotron3 {
      background-color: #000000;
      color: #44F72D;
      padding: 75px 15px;
      font-family: Montserrat, sans-serif;
	  }
 .container-fluid {
      padding: 60px 50px;
  }
  .jumbotron {
      background-color: #000000;
      color: #44F72D;
      padding: 100px 15px;
      font-family: Montserrat, sans-serif;
  }
  @font-face {
    font-family: myFirstFont;
    src: url(code-bold.woff);
	}
	div {
    font-family: myFirstFont;
	}
  .jumbotron2 {
      background-color: #2f2f2f;
      color: #000000;
      padding: 75px 50px;
      font-family: "Code Bold";
  }
 /*this is the nav bar color*/
 .panel { 
      border: 1px solid #000000;
      border-radius:0 !important;
      transition: box-shadow 0.5s;
  }
  .navbar {
      margin-bottom: 0;
      background-color: #2f2f2f;
      z-index: 9999;
      border: 0;
      font-size: 12px !important;
      line-height: 1.42857143 !important;
      letter-spacing: 4px;
      border-radius: 0;
      font-family: Montserrat, sans-serif;
  }
  .navbar li a, .navbar .navbar-brand {
      color: #fff !important;
  }
  .navbar-nav li a:hover, .navbar-nav li.active a {
      color: #fff !important;
      background-color: #2f2f2f !important;
  }
  .navbar-default .navbar-toggle {
      border-color: transparent;
      color: #2f2f2f !important;
  }
  input[type=text], input[type=password] {
    width: 60%;
    padding: 12px 20px;
    margin: 8px 0;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

/* Set a style for all buttons */
button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 460px;
}

/* Extra styles for the cancel button */
.cancelbtn {
    color: white;
    padding: 10px 18px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100px;
    background-color: #f44336;
}

/* Center the image and position the close button */
.imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
    position: relative;
}

img.avatar {
    width: 40%;
    border-radius: 50%;
}

.container_1 {
    padding: 1px;
}
.container_2 {
    padding: 16px;
}
.container-fluid_3 {
      padding: 60px 50px;
  }
span.psw {
    float: right;
    padding-top: 16px;
}

/* The Modal (background) */
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    padding-top: 60px;
}

/* Modal Content/Box */
.modal-content {
    background-color: #fefefe;
    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button (x) */
.close {
    position: absolute;
    right: 25px;
    top: 0;
    color: #000;
    font-size: 35px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: red;
    cursor: pointer;
}

/* Add Zoom Animation */
.animate {
    -webkit-animation: animatezoom 0.6s;
    animation: animatezoom 0.6s
}

@-webkit-keyframes animatezoom {
    from {-webkit-transform: scale(0)}
    to {-webkit-transform: scale(1)}
}
    
@keyframes animatezoom {
    from {transform: scale(0)}
    to {transform: scale(1)}
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
    span.psw {
       display: block;
       float: none;
    }
  }
  </style>
</head>
<body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">
<nav class="navbar navbar-default navbar-fixed-top navbar-nav navbar-center">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#myPage">INTER</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
	   <ul class="nav navbar-nav navbar-center-right">
        <li><a href="firsthomepage.html">Home</a></li>
		</ul>
		<ul class="nav navbar-nav navbar-center-right">
        <li><a href="#loginorsignup">Login or Sign Up</a></li>
		</ul>
      <ul class="nav navbar-nav navbar-center-right">
        <li><a href="#about">Aspiring College Student?</a></li>
		</ul>
	  <ul class="nav navbar-nav navbar-center-right">
        <li><a href="#services">Already a College Student?</a></li>
      </ul>
	  <ul class="nav navbar-nav navbar-right">
      <li><a href="aboutuspage.html"><span class="glyphicon glyphicon-user"></span> About us</a></li>
    </ul>
    </div>
  </div>
</nav>
<div class="jumbotron text-center w3-grey">
  <h1 style="font-size:100px">INTER</h1>
  <img src="logo.jpeg" class="img-circle" style="width: 600px; height: 375px" alt="Logo">
  <p>Get INTER-connected with your future</p>
</div>
<div class="jumbotron2 text-center w3-grey" id="loginorsignup">
 <button onclick="document.getElementById('id01').style.display='block'"type="button" id="login" class="btn btn-default btn-lg" style="height: 125px; width:400px; font-size: 50px">Log in</button>  
  <div id="id01" class="modal">
  
  <form class="modal-content animate" action="user.html">
    <div class="imgcontainer">
      <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
      <img src="logo.jpeg" alt="Avatar" class="avatar">
    </div>

    <div class="container_2">
	    <div id="error_message" style="color: red; font-style: bold; float: left;"></div><br />
      <label><b>Username</b></label>
      <input type="text" placeholder="Enter Username" id="usr" name="uname" required>
		<br></br>
      <label><b>Password</b></label>
      <input type="password" placeholder="Enter Password" id="pss" name="psw" required>
       <br></br>
	  <input type="checkbox" checked="checked"> Remember me 
	  <input type="button" onclick="authenticate()" value="Log In" id="btn" class="btn btn-default btn-lg center-block" style="width:575px"/>
     <div id="user_info" style="font-style: bold;"></div>
	</div>

    <div class="container_1" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
	  <span class="psw">Need to <a href="firsthomepage.html">Sign Up?</a></span>
      <span class="psw">Forgot <a href="#">password?</a></span>
    </div>
  </form>
</div>
<br></br>
<br></br>
<button onclick="document.getElementById('id02').style.display='block'"type="button" id="signup" class="btn btn-default btn-lg" style="height: 125px; width:400px; font-size: 50px">Sign Up</button>  
  <div id="id02" class="modal">
  
  <form id='foo' class="modal-content animate" action="action_page.php">
    <div class="imgcontainer">
      <span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>
      <img src="logo.jpeg" alt="Avatar" class="avatar">
    </div>

    <div class="container_2">
      <label><b>Email</b></label>
	  <input type='text' placeholder="Enter Email Adress" id='email' name="email" required>
		<br></br>
	  <label><b>Username</b></label>
      <input type='text' placeholder="Enter Username" id='username' name="username" required>
		<br></br>
      <label><b>Password</b></label>
      <input type='text' placeholder="Enter Password" id='password' name="password" required>
       <br></br>
	   <label><b>Re-Enter</b></label>
	   <input type='text' placeholder="Re-Enter Password" id='re-type' name="re-type" required>
		<br></br>
		<div id='success'></div>
      <input type='submit' value="Signup" id="btn" class="btn btn-default btn-lg center-block"/>
      
    </div>

    <div class="container_1" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('id02').style.display='none'" class="cancelbtn">Cancel</button>
	  <span class="psw">Login <a href="firsthomepage.html">Instead?</a></span>
    </div>
  </form>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
  <!-- Custom Theme JavaScript -->
  <script src='google-sheet.js'></script>
</div>
</div>
<div id="about" class="container-fluid_3">
  <div class="row">
    <div class="col-sm-8">
      <h2>Aspiring College Student?</h2>
      <p>Hello, Soon-to-be Student! Welcome to INTER! INTER is a website designed and developed to help students like you figure out their lives! College is a very defining time in your life so you want to be prepared! Here at INTER we enourage you to find the perfect fit for YOU. Sign up or Log in to find out more about us!</p>
    </div>
    <div class="col-sm-4">
      <span><img src="deci.jpg" class="img-rounded" style="width: 400px; height: 375px" alt="College"></span>
    </div>
  </div>
</div>
<div id="services" class="container-fluid_3 bg-grey">
  <div class="row">
    <div class="col-sm-8">
      <h2 style="color:white;">Already a Student?</h2>
      <p style="color:white;">Hello, there! Welcome to INTER! We know college is tough! So, we've designed a special little slice of INTER just for you! College is expensive and homework is time consuming. We know. So here at INTER we offer you good, healthy meals on a college student's budget and little things to do when you just have to take a break from studying but want to keep your brain active. Sign up or Log in to find out more about us and help yourself succeed!</p>
    </div>
    <div class="col-sm-4">
      <span><img src="coli.png" style="width: 450px; height: 375px" alt="College"></span>
    </div>
  </div>
</div>
</div>
<footer class="container-fluid_2 text-center">
  <a href="#myPage" title="To Top">
    <span class="glyphicon glyphicon-chevron-up"></span></a>
	<p></p>
   <a href="#" class="w3-hover-text-indigo"><i class="fa fa-facebook-official"></i></a>
   <a href="https://twitter.com/INTERgwc" class="w3-hover-text-light-blue"><i class="fa fa-twitter"></i></a>
      <a href="https://www.instagram.com/intergwc/" class="w3-hover-text-light-blue"><i class="fa fa-instagram"></i></a>
 <p>Coding Queens inc.</p>
</footer>

<script>
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})
</script>
<script>
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>
</body>
</html>