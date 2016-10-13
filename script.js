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
					$('#nav img').attr('src', 'imgs/dark.jpg');
       } else {
          $('#nav').css('background-color', 'transparent');
					$('#nav img').attr('src', 'imgs/title_wideopentech.png');
					$('#nav ul li').css('color', 'white');
       }
   });
});