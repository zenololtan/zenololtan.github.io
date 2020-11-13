const translate = document.querySelectorAll(".translate");

window.addEventListener('scroll', () =>{
	let scroll = window.pageYOffset;
	if (scroll < 0)
		scroll = -1 * scroll;
	if (scroll >= 986)
		scroll -= 986;
	translate.forEach(element => {
		let speed = element.dataset.speed;
		// if (element.classList.contains("center"))
		// 	element.style.transform = `translate(-49%, ${scroll * speed}px)`;
		// else
			element.style.transform = `translateY(${scroll * speed}px)`;
	})
})