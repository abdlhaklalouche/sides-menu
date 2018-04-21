/* 
 * Sides-menu
 * Copyright 2018
 * Author Name: Abdelhak Lallouche
 * Author Username: @abdlhaklallouche
 * Author Email: abdlhaklalouche@gmail.com
 * Licensed under MIT (https://github.com/abdlhaklallouche/sides-menu/LICENSE)
 */
window.onload = function() {

	document.querySelectorAll('.sides-menu-toggle').forEach(function(element) {

		element.onclick = function (e) {

			e.preventDefault();

			var item = this.getAttribute('data-sides-menu-target');

			var target = document.getElementById(item);

			target.classList.toggle('show');

			if(target.classList.contains('show')) {

				document.querySelector('body').style.overflow = 'hidden';
			
			} else {
			
				document.querySelector('body').style.overflow = 'auto';
			
			}

		}

	});

	document.querySelectorAll('.sides-menu-close').forEach(function(element) {

		element.onclick = function (e) {

			e.preventDefault();

			var item = this.getAttribute('data-sides-menu-target');

			var target = document.getElementById(item);

			target.classList.remove('show');
			
			document.querySelector('body').style.overflow = 'auto';

		}

	});

	document.querySelectorAll('.sides-menu-nav').forEach(function(element) {

		element.onclick = function (e) {

			if(this == e.target) {

				this.classList.remove('show');

				document.querySelector('body').style.overflow = 'auto';

			}
		};
		
	});
	
};
