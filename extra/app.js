const translate = document.querySelectorAll(".translate");
const navElement = document.getElementById("main-nav");

document.addEventListener('scroll', () =>{
	let scroll = window.pageYOffset;

	if (scroll < 0)
		scroll = -1 * scroll;
	if (window.innerWidth > 768)
		editNav(scroll);
	if (scroll >= 986)
		scroll -= 986;
	// console.log(scroll);
	translate.forEach(element => {
		let speed = element.dataset.speed;
		element.style.transform = `translateY(${scroll * speed}px)`;
	})
});

document.addEventListener("click", (event) => {
	if (event.target.classList.contains("mobile-dropdown-toggle")){
		navElement.classList.toggle("dropdown-opened");
	}
	if (!event.target.classList.contains("mobile-dropdown-toggle") && !event.target.classList.contains("link-container")){
		navElement.classList.remove("dropdown-opened");
	}
});

function isMobile(){
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		return true;
	} else{
		return false;
	}
}

function editNav(scroll){
	if (scroll > 2){
		navElement.classList.add("onScroll");
		if (scroll >= 500){
			navElement.classList.add("onNewSection");
		}
	}
	else{
		navElement.classList.remove("onScroll");
		navElement.classList.remove("onNewSection");
	}
}