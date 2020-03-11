function setTheme() {
	var possibleThemes = ["--blue","--indigo","--pink","--red","--orange","--yellow","--teal"];
	var selectedIndex = Math.floor(Math.random() * possibleThemes.length);
	var theme = window.getComputedStyle(document.documentElement).getPropertyValue(possibleThemes[selectedIndex]);
	document.documentElement.style.setProperty('--theme', theme);
}

function init(page){
	var navHtml = `
	<nav class="navbar navbar-expand-lg navbar-dark noselect">
		<a class="navbar-brand" href="#"></a>
		<button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    	<span class="navbar-toggler-icon"></span>
	  	</button>

	  	<div class="collapse navbar-collapse" id="navbarSupportedContent">
	    	<ul class="navbar-nav mr-auto">
	      		<li class="nav-item">
	        		<div id="home" class="nav_element" onclick="window.location='https://www.tgaffaney.com'">
	        			Home 
	        		</div>
	      		</li>
	      		<li class="nav-item">
	        		<div id="projects" class="nav_element" onclick="window.location='projects'">
	        			Projects
	        		</div>
	      		</li>
	      		<!--<li class="nav-item">
	        		<div id="about" class="nav_element" onclick="window.location='about'">
	        			About
	        		</div>
	      		</li>-->
	      		<li class="nav-item">
	        		<div id="contact" class="nav_element" onclick="window.location='contact'">
	        			Get in touch 
	        		</div>
	      		</li>
	    	</ul>
	  	</div>
	</nav>
	`;

	var footerHtml = `
	<footer class="noselect">
		<i class="fab fa-github fa-2x" onclick="window.location='https://www.github.com/Tgaffaney'"></i>
		<i class="fab fa-linkedin fa-2x" onclick="window.location='https://www.linkedin.com/in/tylergaffaney'"></i>
		<i class="fab fa-instagram fa-2x" onclick="window.location='https://www.instagram.com/TylerJGaffaney'"></i>
	</footer>
	`;

	setTheme();

	$('#middle').prepend(navHtml);
	$('#middle').append(footerHtml);
	$('#' + page).addClass('active')
	
}
