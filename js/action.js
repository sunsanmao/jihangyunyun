var raf;
var isPaused = false;
var boat_left = 0;
var pic1_wave1_left = pic2_left = pic3_left = pic4_left = 0;
var wave2_left = -2002;
var text_left = 1800;
var index = 1;

function move() {
	pic1_wave1_left--;
	pic2_left -= 1.5;
	pic3_left -= 1.333;
	pic4_left -= 2;
	wave2_left += 0.5;
	if(pic1_wave1_left <= -2172) {
		pic1_wave1_left = 0;
	}
	if(pic4_left <= -2172) {
		pic4_left = 0;
	}
	if(pic2_left <= -2172) {
		pic2_left = 0;
	}
	if(pic3_left <= -2172) {
		pic3_left = 0;
	}
	if(wave2_left >= 0) {
		wave2_left = -2172;
	}
	$("#imglist1").css('left', pic1_wave1_left + 'px');
	$("#imglist2").css('left', pic2_left + 'px');
	$("#imglist3").css('left', pic3_left + 'px');
	$("#imglist4").css('left', pic4_left + 'px');
	$("#wave1").css('left', pic1_wave1_left + 'px');
	$("#wave2").css('left', wave2_left + 'px');
	$("#wave3").css('left', pic1_wave1_left + 'px');
	$("#wave4").css('left', wave2_left + 'px');
	$(".imganimation").css("left", text_left + 'px');
	var apart = -3212 * index - (index - 1) * 990;
	if(text_left == apart && !isPaused) {
		window.cancelAnimationFrame(raf);
		$("#modal" + index).css('clipPath', "inset(0 0 0 0)");
		isPaused = true;
	} else if(text_left == -45000 && !isPaused) {
		$("#next_btn").css('opacity', '1');
		window.cancelAnimationFrame(raf);
	} else if(!isPaused) {
		text_left -= 1;
		raf = window.requestAnimationFrame(move);
	}
}

function pauseMove(e) {
	if(!isPaused) {
		e.innerHTML = "<img src='img/jiantou1.png'/>";
		window.cancelAnimationFrame(raf);
		$("#inner_page").css('bottom', 770 + 'px');
		isPaused = true;
	} else if(isPaused) {
		e.innerHTML = "<img src='img/jiantou.png'/>";
		$("#inner_page").css('bottom', 0 + 'px');
		text_left -= 1;
		raf = window.requestAnimationFrame(move);
		isPaused = false;
	}
}

function close_alart() {
	text_left -= 1;
	$("#modal" + index).css('clipPath', "inset(0 50% 0 50%)");
	if(index <= 9) index++;
	isPaused = false;
	raf = window.requestAnimationFrame(move);
}
window.onload = function() {
	setTimeout(move, 3000);
}