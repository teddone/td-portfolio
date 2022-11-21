const themeToggler = document.querySelector("input[name=theme-toggler]");

console.log('JS Loaded!');

themeToggler.addEventListener('change', function() {
	document.body.classList.toggle('dark-theme-variables');
});
