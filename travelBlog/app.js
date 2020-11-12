const translate = document.querySelectorAll(".translate");

window.addEventListener('scroll', () =>{
	let scroll = window.pageYOffset;
	if (scroll >= 986)
		// scroll = 0;
		scroll -= 986;
	console.log(scroll);
	translate.forEach(element => {
		let speed = element.dataset.speed;
		element.style.transform = `translateY(${scroll * speed}px)`;
	})
})