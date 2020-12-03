const translate = document.querySelectorAll(".translate");
const navElement = document.getElementById("main-nav");

document.addEventListener('scroll', () =>{
	// let scroll = window.pageYOffset * (986 / window.innerHeight);
	var pageOffset = window.innerHeight / 986; //986 = height of standart page
	let scroll = window.pageYOffset;
	var offset = 0;
	var newScroll

	// console.log(scroll);
	// console.log(window.innerHeight);
	console.log(pageOffset);
	if (scroll < 0)
		scroll = -1 * scroll;
	if (window.innerWidth > 768)
		editNav(scroll);
	if (scroll >= 986 * pageOffset && scroll <= 1500 * pageOffset)
		offset = scroll;
	if (scroll > 1500 * pageOffset)
		offset = 1500 * pageOffset;
	if (scroll >= 2900 * pageOffset && scroll <= 2951 * pageOffset)
		scroll = 0;
	if (scroll > 29511 * pageOffset)
		offset = 2951 * pageOffset;
	newScroll = scroll - offset;
	// console.log(newScroll);
	translate.forEach(element => {
		let speed = element.dataset.speed;
		element.style.transform = `translateY(${newScroll * speed}px)`;
	})
});

document.addEventListener("click", (event) => {
	// console.log(event.target.classList[0]);
	if (event.target.classList.contains("mobile-dropdown-toggle") || event.target.classList.contains("menu-btn-brger")){
		navElement.classList.toggle("dropdown-opened");
	}
	if (!event.target.classList.contains("mobile-dropdown-toggle") && !event.target.classList.contains("menu-btn-brger") && !event.target.classList.contains("link-container")){
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
		}else{
			navElement.classList.remove("onNewSection");
		}
	}
	else{
		navElement.classList.remove("onScroll");
		navElement.classList.remove("onNewSection");
	}
}