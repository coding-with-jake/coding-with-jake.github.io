const navBar = document.querySelector( 'nav' );
console.log( navBar );
if ( navBar ) {
	window.addEventListener(
		'scroll',
		function () {
			if ( window.scrollY > 0 ) {
				navBar.classList.add( 'shadow' );
			} else {
				navBar.classList.remove( 'shadow' );
			}
		}
	);
}