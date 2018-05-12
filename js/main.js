
// $(window).load(function() {
// 	$(".loader").fadeOut("slow");
// });
$(function(){ // this replaces document.ready

  	setTimeout(function(){
	    $('.loader').fadeOut('slow', function() {
	      	$(this).remove();
	    });
   	}, 1000);

   	readyBars();

  	$('#skillSummary').hide();

  	var toggleSkillTable = false;

  	function skillTableDisplayed(){
  		if (toggleSkillTable) {
  			return true;
  		}else{
  			return false;
  		}
  	}

	$("#skillSummaryButton").click(function(e){
        $( "#skillSummary" ).toggle(750, function(){
        	if (!toggleSkillTable){
        		$("html, body").delay(100).animate({
		         	scrollTop: $('#skillSummary').offset().top+10
			    }, 500);
                 
			    animateBars();
			    toggleSkillTable = true;
        	}else{
        		$("html, body").delay(100).animate({
		         	scrollTop: $('#about').offset().top
			    }, 500);
        		toggleSkillTable = false;
        		deAnimateBars();
                
        	}
        });
    });

   	$("#zyxParent").hover(function(){
	    $("#homeLink").css("color", "#1abc9c")
	    },function(){
			$("#homeLink ").css("color", "");
		}
	);

	$("#menu").hover(function(){
	    $("#menu").addClass('animated rubberBand')
	    },function(){
			 $("#menu").removeClass('animated rubberBand')
		}
	);

	$("#toGithub").on("click",function(){
        window.open('https://github.com/zyxnowell','_blank');
    });

    $("#toFacebook").on("click",function(){
        window.open('https://www.facebook.com/TeaTiimeee','_blank');
    });

    $("#toLinkedin").on("click",function(){
        window.open('https://www.linkedin.com/in/nowell-zyx-sun-14799311a/','_blank');
    });

	$("#toInstagram").on("click",function(){
        window.open('https://www.instagram.com/zyxiieee/','_blank');
    });

    $("#toUIkit").on("click",function(){
        window.open('https://getuikit.com/','_blank');
    });

    $("#toAnimateCss").on("click",function(){
        window.open('https://daneden.github.io/animate.css/','_blank');
    });


	function removeLinkColors(){
		$("#homeLink").css("color", "")
		$("#aboutLink").css("color", "")
		$("#workLink").css("color", "")
		$("#contactLink").css("color", "")
	};

	

	
});