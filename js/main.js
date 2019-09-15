var canvas, context, canvaso, contexto;
canvaso = document.getElementById('imageView');
context = canvaso.getContext('2d');
$problems_image = $('.problems_image')
context.canvas.width  = $problems_image.innerWidth();
context.canvas.height = $problems_image.innerHeight();
context.lineWidth = 1;
list=$('.problems .problems_list');
dots= $('.problems .dots');
function add_line(container_dif){
	list.find('li').each(function(index, el) {
		top_pos=$(el).position().top+12; 
		left_pos=$(el).position().left;
		container_width=$problems_image.innerWidth();
		end_top_pos= dots.find('li').eq(index).position().top;
		end_left_pos= dots.find('li').eq(index).position().left;
		context.strokeStyle = 'rgba(177,177,177,0.6)';
		context.beginPath();
		context.moveTo(end_left_pos+11, end_top_pos+11);
		context.lineTo(parseInt(container_width)-container_dif, top_pos);
		context.stroke();
		context.closePath();
	});
}



$('.reviews_slider').bxSlider({
	pager: false,
	adaptiveHeight: true,
	nextText: '',
	prevText: ''
});
$('.insta_slider').bxSlider({
	pager: false,
	adaptiveHeight: true,
	nextText: '',
	prevText: ''
});


var graph_scroll=$('.graph_box')
var resizeId;
$(window).on('resize DOMSubtreeModified',function(){
	clearTimeout(resizeId);
	resizeId = setTimeout(doneResizing, 300);
});
function doneResizing(){
	clearTimeout(resizeId);
	width = window.innerWidth;
	if (width<768){
		graph_scroll.scrollbar();
		return false
	} else {
		graph_scroll.scrollbar('destroy')
	}
	context.canvas.width  = $problems_image.innerWidth();
	context.canvas.height = $problems_image.innerHeight();
	context.clearRect(0, 0, context.canvas.width , context.canvas.height );
	container_dif = 110;
	if(width<992){
		container_dif= 80
	}
	add_line(container_dif);
}