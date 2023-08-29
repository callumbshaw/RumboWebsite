//Gradient scroll animation with text
$(document).ready(function() {
	const div1 = $('.Pargrad1');
	const div2 = $('.Pargrad2');
	const div5 = $('.Pargrad5');
	const div3 = $('.Pargrad3');
	const par1 = $('.Par1');
	const par2 = $('.Par2');
	const par3 = $('.Par3');
	const par4 = $('.Par4');
	const par5 = $('.Par5');

	const windowHeight = $(window).height();

	$(window).scroll(function() {
		const scrollPosition = $(window).scrollTop();
		const distanceFromTop = div1.offset().top;

		if (scrollPosition > distanceFromTop - windowHeight) {
			const progress = (scrollPosition * 0.25 - distanceFromTop + windowHeight) / windowHeight;
			const newPosition1 = -3880 * progress;
			const newPosition2 = -3880 * progress * 0.78;
			const newPosition5 = -3880 * progress * 0.6;
			const newPosition3 = -3880 * progress * 0.4;
			const newPosition4 = progress * 400;
			const newPosition6 = progress * 200 * 2;
			const newPosition7 = progress * 400 * 2.2;
			const newPosition8 = progress * 400 * 1.8;
			const newPosition9 = progress * 400 * 3.6;

			div1.css('left', `${newPosition1}px`);
			div2.css('left', `${newPosition2}px`);
			div3.css('left', `${newPosition3}px`);
			div5.css('left', `${newPosition5}px`);

			par1.css('left', `${newPosition4}px`);
			par2.css('left', `${newPosition6}px`);
			par3.css('left', `${newPosition7}px`);
			par4.css('left', `${newPosition8}px`);
			par5.css('left', `${newPosition9}px`);

		}
	});
});

//Feature scroll animation
$(document).ready(function() {
	const featAni = $('.Featuresectiond');
	const windowHeight = $(window).height();

	$(window).scroll(function() {
		const scrollPosition = $(window).scrollTop();
		const distanceFromTop = featAni.offset().top;

		if (scrollPosition > 0) {
			const progress = (scrollPosition * 13 - distanceFromTop + windowHeight) / windowHeight;
			const newPosition = 11 * progress;

			featAni.css('left', `${newPosition}px`);
		}
	});
});

//FAQ Toggle 1
function toggleAnswer1() {
	const answer = $('.Answer1');
	const question = $('.Question1');
	const answer2 = $('.Answer2');
	const answer3 = $('.Answer3');
	const answer4 = $('.Answer4');
	const answer5 = $('.Answer5');
	const question2 = $('.Question2');
	const question3 = $('.Question3');
	const question4 = $('.Question4');
	const question5 = $('.Question5');
	const image1 = $('.Vector1');
	const image2 = $('.Vector2');
	const image3 = $('.Vector3');
	const image4 = $('.Vector4');
	const image5 = $('.Vector5');

	if (question.css('background') === 'none') {
		question.css('background', '#FFA046');
		image1.attr('src', 'sources/iconArrowUp.png')
	} else {
		question.css('background', 'none');
		image1.attr('src', 'sources/iconArrowDown.png');
	}

	if (answer.css('display') === 'none') {
		answer.fadeIn(400);
	} else {
		answer.css('display', 'none');
	}

	answer2.css('display', 'none');
	answer3.css('display', 'none');
	answer4.css('display', 'none');
	answer5.css('display', 'none');
	question2.css('background', 'none');
	question3.css('background', 'none');
	question4.css('background', 'none');
	question5.css('background', 'none');
	image5.attr('src', 'sources/iconArrowDown.png');
	image2.attr('src', 'sources/iconArrowDown.png');
	image3.attr('src', 'sources/iconArrowDown.png');
	image4.attr('src', 'sources/iconArrowDown.png');
}

//FAQ Toggle 2
function toggleAnswer2() {
	const answer = $('.Answer2');
	const question = $('.Question2');
	const answer1 = $('.Answer1');
	const answer3 = $('.Answer3');
	const answer4 = $('.Answer4');
	const answer5 = $('.Answer5');
	const question1 = $('.Question1');
	const question3 = $('.Question3');
	const question4 = $('.Question4');
	const question5 = $('.Question5');
	const image1 = $('.Vector1');
	const image2 = $('.Vector2');
	const image3 = $('.Vector3');
	const image4 = $('.Vector4');
	const image5 = $('.Vector5');

	if (question.css('background') === 'none') {
		question.css('background', '#FFA046');
		image2.attr('src', 'sources/iconArrowUp.png')
	} else {
		question.css('background', 'none');
		image2.attr('src', 'sources/iconArrowDown.png');
	}

	if (answer.css('display') === 'none') {
		answer.fadeIn(400);
	} else {
		answer.css('display', 'none');
	}

	answer1.css('display', 'none');
	answer3.css('display', 'none');
	answer4.css('display', 'none');
	answer5.css('display', 'none');
	question1.css('background', 'none');
	question3.css('background', 'none');
	question4.css('background', 'none');
	question5.css('background', 'none');
	image1.attr('src', 'sources/iconArrowDown.png');
	image5.attr('src', 'sources/iconArrowDown.png');
	image3.attr('src', 'sources/iconArrowDown.png');
	image4.attr('src', 'sources/iconArrowDown.png');
}

//FAQ Toggle 3
function toggleAnswer3() {
	const answer = $('.Answer3');
	const question = $('.Question3');
	const answer1 = $('.Answer1');
	const answer2 = $('.Answer2');
	const answer4 = $('.Answer4');
	const answer5 = $('.Answer5');
	const question1 = $('.Question1');
	const question2 = $('.Question2');
	const question4 = $('.Question4');
	const question5 = $('.Question5');
	const image1 = $('.Vector1');
	const image2 = $('.Vector2');
	const image3 = $('.Vector3');
	const image4 = $('.Vector4');
	const image5 = $('.Vector5');

	if (question.css('background') === 'none') {
		question.css('background', '#FFA046');
		image3.attr('src', 'sources/iconArrowUp.png')
	} else {
		question.css('background', 'none');
		image3.attr('src', 'sources/iconArrowDown.png');
	}

	if (answer.css('display') === 'none') {
		answer.fadeIn(400);
	} else {
		answer.css('display', 'none');
	}

	answer1.css('display', 'none');
	answer2.css('display', 'none');
	answer4.css('display', 'none');
	answer5.css('display', 'none');
	question1.css('background', 'none');
	question2.css('background', 'none');
	question4.css('background', 'none');
	question5.css('background', 'none');
	image1.attr('src', 'sources/iconArrowDown.png');
	image2.attr('src', 'sources/iconArrowDown.png');
	image5.attr('src', 'sources/iconArrowDown.png');
	image4.attr('src', 'sources/iconArrowDown.png');
}

//FAQ Toggle 4
function toggleAnswer4() {
	const answer = $('.Answer4');
	const question = $('.Question4');
	const answer1 = $('.Answer1');
	const answer2 = $('.Answer2');
	const answer3 = $('.Answer3');
	const answer5 = $('.Answer5');
	const question1 = $('.Question1');
	const question2 = $('.Question2');
	const question3 = $('.Question3');
	const question5 = $('.Question5');
	const image1 = $('.Vector1');
	const image2 = $('.Vector2');
	const image3 = $('.Vector3');
	const image4 = $('.Vector4');
	const image5 = $('.Vector5');

	if (question.css('background') === 'none') {
		question.css('background', '#FFA046');
		image4.attr('src', 'sources/iconArrowUp.png')
	} else {
		question.css('background', 'none');
		image4.attr('src', 'sources/iconArrowDown.png');
	}

	if (answer.css('display') === 'none') {
		answer.fadeIn(400);
	} else {
		answer.css('display', 'none');
	}

	answer1.css('display', 'none');
	answer2.css('display', 'none');
	answer3.css('display', 'none');
	answer5.css('display', 'none');
	question1.css('background', 'none');
	question2.css('background', 'none');
	question3.css('background', 'none');
	question5.css('background', 'none');
	image1.attr('src', 'sources/iconArrowDown.png');
	image2.attr('src', 'sources/iconArrowDown.png');
	image3.attr('src', 'sources/iconArrowDown.png');
	image5.attr('src', 'sources/iconArrowDown.png');
}

//FAQ Toggle 5
function toggleAnswer5() {
	const answer = $('.Answer5');
	const question = $('.Question5');
	const answer1 = $('.Answer1');
	const answer2 = $('.Answer2');
	const answer3 = $('.Answer3');
	const answer4 = $('.Answer4');
	const question1 = $('.Question1');
	const question2 = $('.Question2');
	const question3 = $('.Question3');
	const question4 = $('.Question4');
	const image1 = $('.Vector1');
	const image2 = $('.Vector2');
	const image3 = $('.Vector3');
	const image4 = $('.Vector4');
	const image5 = $('.Vector5');

	if (question.css('background') === 'none') {
		question.css('background', '#FFA046');
		image5.attr('src', 'sources/iconArrowUp.png')
	} else {
		question.css('background', 'none');
		image5.attr('src', 'sources/iconArrowDown.png');
	}

	if (answer.css('display') === 'none') {
		answer.fadeIn(400);
	} else {
		answer.css('display', 'none');
	}

	answer1.css('display', 'none');
	answer2.css('display', 'none');
	answer3.css('display', 'none');
	answer4.css('display', 'none');
	question1.css('background', 'none');
	question2.css('background', 'none');
	question3.css('background', 'none');
	question4.css('background', 'none');
	image1.attr('src', 'sources/iconArrowDown.png');
	image2.attr('src', 'sources/iconArrowDown.png');
	image3.attr('src', 'sources/iconArrowDown.png');
	image4.attr('src', 'sources/iconArrowDown.png');
}

//Navbar link highlight 1
$(document).ready(function() {
	const div1 = $('.Footerline');

	$(window).scroll(function() {
		const scrollPosition = $(window).scrollTop();
		var myElement = document.getElementById("Homelink");

		if (scrollPosition < 560) {
			myElement.classList.add("active");
		} else {
			myElement.classList.remove("active");
		}
	});
});

//Navbar link highlight 2
$(document).ready(function() {
	const div1 = $('.Footerline');

	$(window).scroll(function() {
		const scrollPosition = $(window).scrollTop();
		var myElement = document.getElementById("Glancelink");

		if (scrollPosition >= 560 && scrollPosition < 1320) {
			myElement.classList.add("active");
		} else if (scrollPosition > 1320 || scrollPosition < 560) {
			myElement.classList.remove("active");
		}
	});
});

//Navbar link highlight 3
$(document).ready(function() {
	const div1 = $('.Footerline');

	$(window).scroll(function() {
		const scrollPosition = $(window).scrollTop();
		var myElement = document.getElementById("Featurelink");

		if (scrollPosition >= 1320 && scrollPosition < 3030) {
			myElement.classList.add("active");
		} else if (scrollPosition > 3030 || scrollPosition < 1320) {
			myElement.classList.remove("active");
		}
	});
});

//Navbar link highlight 4
$(document).ready(function() {
	const div1 = $('.Footerline');

	$(window).scroll(function() {
		const scrollPosition = $(window).scrollTop();
		var myElement = document.getElementById("Userslink");

		if (scrollPosition >= 3030 && scrollPosition < 3950) {
			myElement.classList.add("active");
		} else if (scrollPosition > 3950 || scrollPosition < 3030) {
			myElement.classList.remove("active");
		}
	});
});

//Navbar link highlight 5
$(document).ready(function() {
	const div1 = $('.Footerline');

	$(window).scroll(function() {
		const scrollPosition = $(window).scrollTop();
		var myElement = document.getElementById("Faqlink");

		if (scrollPosition >= 3950 && scrollPosition < 5000) {
			myElement.classList.add("active");
		} else if (scrollPosition > 5000 || scrollPosition < 3950) {
			myElement.classList.remove("active");
		}
	});
});

//Replace learn more button icon when hovering
$(document).ready(function() {
	var learnButton = $(".LearnButton");
	var learnIconArrow = $(".Herolearniconarrow");

	var originalSrc = learnIconArrow.attr("src");
	var replacementSrc = "sources/LearnArrowWhite.png";

	learnButton.on("mouseenter", function() {
		learnIconArrow.attr("src", replacementSrc);
	});

	learnButton.on("mouseleave", function() {
		learnIconArrow.attr("src", originalSrc);
	});
});

//Review carousel animation
function carousel() {
	const review1 = $('.Clientreview1');
	const review2 = $('.Clientreview2');
	const vid1 = $('.Videoplayer1');
	const vid2 = $('.Videoplayer2');

	if (review1.css('opacity') === '1') {
		review1.css('opacity', '0');
		review2.css('opacity', '1');
		vid1.css('opacity', '0');
		vid2.css('opacity', '1');
		vid2.css('top', '435.79px');
		vid2.css('left', '198.77px');
	} else if (review2.css('opacity') === '1') {
		review1.css('opacity', '1');
		review2.css('opacity', '0');
		vid1.css('opacity', '1');
		vid2.css('opacity', '0');

		setTimeout(function() {
			vid2.css('top', '1px');
			vid2.css('left', '1px');
		}, 1000);
	}
}

//Replace carousel button icons when hovering
function changeImage(imgElement, newSrc) {
	imgElement.src = newSrc;
}

// Smooth scrolling behavior for navigation links
document.addEventListener("DOMContentLoaded", function() {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    for (const link of smoothScrollLinks) {
        link.addEventListener("click", smoothScroll);
    }
});

function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
        const targetPosition = targetElement.offsetTop;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 800;
        
        let startTimestamp = null;
        function animation(timestamp) {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = timestamp - startTimestamp;
            const easeInOutCubic = progress / duration * (2 - progress / duration);
            window.scrollTo(0, startPosition + distance * easeInOutCubic);
            if (progress < duration) {
                requestAnimationFrame(animation);
            }
        }
        requestAnimationFrame(animation);
    }
}

//Pause actively playing video when swapping in carousel
document.addEventListener("DOMContentLoaded", function() {
    const video1 = document.getElementById("video1");
    const video2 = document.getElementById("video2");
    const swapButton1 = document.getElementById("btnRight");
	const swapButton2 = document.getElementById("btnLeft");

    swapButton1.addEventListener("click", function() {
        // Pause the currently playing video, if any
        if (!video1.paused) {
            video1.pause();
        }
        if (!video2.paused) {
            video2.pause();
        }
    });

	swapButton2.addEventListener("click", function() {
        // Pause the currently playing video, if any
        if (!video1.paused) {
            video1.pause();
        }
        if (!video2.paused) {
            video2.pause();
        }
	});
});

//Loading animation
document.addEventListener("DOMContentLoaded", function() {
window.addEventListener("load", function() {

	setTimeout(function() {
		document.querySelector(".loading-screen").style.display = "none";
		document.querySelector(".content").style.opacity = 1;
	}, 2000);
});

const fillImage = document.querySelector('.fill-image');
const loadingScreen = document.querySelector('.loading-screen');
const body = document.querySelector('body');

body.style.overflowY = 'hidden';

loadingScreen.classList.add('active');

setTimeout(() => {
    body.style.overflowY = 'auto';
}, 2300); 
});