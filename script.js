$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#nav');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('#nav').css('background-color', 'white');
					$('#nav').css('z-index', '10');
					$('#nav ul li').css('color', '#6A787C');
					$('#nav .logo').attr('display', 'none');
					$('#nav .dark').attr('display', 'block');
       } else {
          $('#nav').css('background-color', 'transparent');
					$('#nav .logo').attr('display', 'block');
					$('#nav .dark').attr('display', 'none');
					$('#nav ul li').css('color', 'white');
       }
   });
	
	$(document).scroll(function() {
		scroll_start = $(this).scrollTop();
		if (scroll_start > offset.top) {
			$('.dark').removeClass('hidden');
			$('.logo').addClass('hidden');
		}
		else {
			$('.dark').addClass('hidden');
			$('.logo').removeClass('hidden');
		}
	})
});