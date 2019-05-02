<?php  include('server.php'); ?>

<?php
	if (isset($_GET['edit'])) {
		$id = $_GET['edit'];
		$update = true;
		$record = mysqli_query($db, "SELECT * FROM info WHERE id=$id");

		if (count($record) == 1 ) {
			$n = mysqli_fetch_array($record);
			$first_name = $n['firstName'];
			$last_name = $n['lastName'];
			$message = $n['message'];
		}
	}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>North Idaho College Student Portfolio Show</title>
	<link rel="stylesheet" href="dist/css/app.css">
</head>

<body>
	<header class="nav-desktop nav-mobile">
		<nav>
			<!-- Mobile Nav header: logo and hamburger menu STARTS -->
			<div class="nav-mobile__navbar">
				<a href="index.html" class="nav-mobile__logo">
					<img id="mobileLogo" src="src/img/branding/dscvr1.5x.png" alt="DSCVR Logo" /></a>
					<nav>
						<ul class="nav-desktop__list">

							<li class="nav-desktop__item">
								<a class="nav-link nav-link--primary" href="portfolio.html">Portfolio
								</a>
							</li>
							<li class="nav-desktop__item">
								<a class="nav-link nav-link--secondary"
								href="guestbook.html">Guestbook
							</a>
						</li>
						<li  class="nav-desktop__item">
							<a class=" nav-link nav-link--tertiary" href="contact.html">Contact
							</a>
						</li>
					</ul>
				</nav>
				<a id="hamburger"><i  class="fas fa-bars fa-2x nav-mobile__hamburger"></i></a>
			</div>

			<!-- Mobile Nav header: logo and hamburger menu ENDS -->

			<ul id="mobileMenu" class="mobile-menu nav-mobile--bg-stripes">
				<li class="nav-desktop__item nav-mobile__item">
					<a class="nav-link nav-link--primary" href="portfolio.html">Portfolio
					</a>
				</li>
				<li class="nav-desktop__item nav-mobile__item">
					<a class="nav-link nav-link--secondary"
					href="guestbook.html">Guestbook
				</a>
			</li>
			<li  class="nav-desktop__item nav-mobile__item">
				<a class=" nav-link nav-link--tertiary" href="contact.html">Contact
				</a>
			</li>
		</ul>
	</nav>
</header>
<!-- NAVIGATION ENDS -->


<!-- HERO BEGINS -->
<div class="hero-image__card">
<!-- MOBILE HERO IMAGE SLIDER BEGINS -->
  <div class="hero-image__mobile">
    <img class="hero-image__mobile--slider" src="src/img/mobile-hero/web.png" alt="Illustration of the web team." />
  <img class="hero-image__mobile--slider" src="src/img/mobile-hero/illustration.png" alt="Illustration of the illustration team." />
  <img class="hero-image__mobile--slider" src="src/img/mobile-hero/branding.png" alt="Illustration of the branding team." />
  <img class="hero-image__mobile--slider" src="src/img/mobile-hero/print.png" alt="Illustration of the print team." />
  <img class="hero-image__mobile--slider" src="src/img/mobile-hero/socialmedia.png" alt="Illustration of thes social media team." />

</div>

<!-- desktop hero image -->
<h1>
	DSCVR | Student Portfolio Show <br />
	<strong>May 3</strong>
</h1>

<table>
	<thead>
		<tr>
			<th colspan="2">Name</th>
			<th colspan="2">Message</th>
		</tr>
	</thead>

	<?php while ($row = mysqli_fetch_array($results)) { ?>
		<tr>
			<td><?php echo $row['firstName']; ?></td>
			<td><?php echo $row['lastName']; ?></td>
			<td><?php echo $row['message']; ?></td>
			<td>
				<a href="index.php?edit=<?php echo $row['id']; ?>" class="edit_btn" >Edit</a>
			</td>
			<td>
				<a href="server.php?del=<?php echo $row['id']; ?>" class="del_btn">Delete</a>
			</td>
		</tr>
	<?php } ?>
</table>

	<p><span class="error">*</span></p>
	<form method="post" action="server.php" >
		<input type="hidden" name="id" value="<?php echo $id; ?>">
		<div class="input-group name_field">
			<label>Name</label>
			<input type="text" name="name" value="<?php echo $name; ?>">
		</div>
		<div class="input-group message">
			<label>Message</label>
			<input type="text" name="message" value="<?php echo $message; ?>">
		</div>
		<div class="input-group">
			<?php if ($update == true): ?>
	<button class="btn" type="submit" name="update" style="background: #556B2F;" >update</button>
<?php else: ?>
	<button class="btn button button-hoverskew button__nocolor-blue" type="submit" name="save" >Save</button>
<?php endif ?>
		</div>
	</form>

<?php
	echo $first_name;
	echo $last_name;
	echo $message;
?>



<main>
	<section class="content-block content-block--wide">

		<div class="card card--blue">

			<a><img src="src/img/main-img-assets/dscvr_web_event.png"></a>
			<h1>DSCVR</h1>
		   <p class="card__description">
			Discover us at the NIC Workforce Training Center while our Graphic Design graduates showcase their top work.
		   </p>
		   <div class="cards-button">
		   <a href="" class="button button--skew button--hoverstraight button__nocolor button__nocolor--blue"><div class="button--inverseskew button--hoverstraight">View Event</div></a>
		</div>
		</div>
	</section>

</main>


<!-- PHOTO GALLERY ENDS -->

<!-- FOOTER BEGINS -->

<footer>
	<div class="section_thanks">
	  <h4>Thanks for Attending!</h4>
	<ul class="footer-nav">
		<li class="footer-nav__item">
			<a class="footer_menu_link" href="index.html">HOME</a>
		</li>
		<li class="footer-nav__item">
			<a class="footer_menu_link" href="Portfolio.html">PORTFOLIO</a>
		</li>
		<li class="footer-nav__item">
			<a class="footer-nav__link" href="gallery.html">GUESTBOOK</a>
		</li>
	</ul>
  </div>

  <div class="section_socials">
	<h4>Follow Us</h4>
	<div class="social">

		<ul>
			<a class="fab fa-2x fa-facebook-f" href="https://www.facebook.com/nicgdes/"></a>
			<a class="fab fa-2x fa-instagram" href="https://www.instagram.com/nicgdes/"></a>
			<a class="fab fa-2x fa-twitter" href="https://twitter.com/nicgdes"></a>
		</ul>
		 </div>
	</div>


	<div class="section_subscribe">
		   <h4>Subscribe to our Newsletter</h4>

				<!-- Begin Mailchimp Signup Form -->

				<div id="mc_embed_signup">
				<form action="https://nic.us15.list-manage.com/subscribe/post?u=1628370c9c768e89370a304a8&amp;id=5a2fcc1521" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
					<!-- <div id="mc_embed_signup_scroll">
					<label for="mce-EMAIL">Subscribe</label> -->
					<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
					<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
					<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_1628370c9c768e89370a304a8_5a2fcc1521" tabindex="-1" value=""></div>
					<div class="clear">
						<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button button--hoverinverseskew button__nocolor button__nocolor--blue"></div>
					</div>
	</div>
				</form>


	<div class="copyright">
		<p>Copyright &copy; 2019 North Idaho College Graphic Design Students</p>
	</div>


</footer>
<!-- FOOTER ENDS -->
<script>
	function init() {
		var menuDropdownList = document.getElementById('mobileMenu');
		var hamburgerMenu = document.getElementById('hamburger');
		var menuDropdownList = document.getElementById('mobileMenu'); //targets ul with menu a tags
		function menuClick() {
			var hamburgerMenu = document.getElementById('hamburger'); //targets mobile hamburger menu icon
			hamburgerMenu.onclick = showMenu;  //sets onclick listening to mobile hamburger menu

			var showWebsite = document.getElementsByTagName('body');
			// var w = window.clientWidth;
		}

		function showMenu() {
			//mobile menu toggle
			if (menuDropdownList.style.display === 'flex' ) {
				menuDropdownList.style.display = 'none';
			}
			else {
				menuDropdownList.style.display = 'flex';

			}
		}

			menuClick();
// Start Mobile Hero Image Slider
     var imageTotal = 0;
     imageSlider();

     function imageSlider() {
       var images = document.getElementsByClassName("hero-image__mobile--slider");
       for (var i = 0; i < images.length; i++) {
         images[i].style.display = "none";
       }
      imageTotal++;
      if (imageTotal > images.length) { imageTotal = 1
      }
      images[imageTotal - 1].style.display = "block";
      setTimeout (imageSlider, 2000);
     }
// End Mobile Hero Image Slider

  };

  window.onload = init;
  </script>
</body>
</html>
