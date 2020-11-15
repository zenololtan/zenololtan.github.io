const translate = document.querySelectorAll(".translate");
const header = document.getElementById("myHeader");
const mobile = isMobile();

if (mobile == true) {
	header.className = "mobile";
} else {
	header.className = "noMobile";
}
	

window.addEventListener('scroll', () =>{
	let scroll = window.pageYOffset;
	
	if (scroll < 0)
		scroll = -1 * scroll;
	if (mobile == false)
		editHeader(scroll);
	if (scroll >= 986)
		scroll -= 986;
	console.log(scroll);
	translate.forEach(element => {
		let speed = element.dataset.speed;
		element.style.transform = `translateY(${scroll * speed}px)`;
	})
})

function isMobile(){
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		return true;
	} else{
		return false;
	}
}

function editHeader(scroll){
	if (scroll > 2){
		header.className = "onScroll";
		if (scroll >= 600)
			header.className = "onNewSection";
	}
	else
		header.className = "";
}