sliderLength = 5;
number = 1;
n = 0;

//スライダーの処理

  jQuery(function slide() {
    //pc
    if (window.matchMedia("(min-width: 1021px)").matches) {
        jQuery(function pcSlide(){
            jQuery('#prevBtn').on('click',function(){
                if(number > 1 && n == 0){
                    number--;
                    n = 1;
                    jQuery('.carousel-area').animate({
                        marginLeft: parseInt(jQuery(".carousel-area").css("margin-left"))+1400+"px"  
                    });
                    console.log(number);
                    setTimeout(function(){
                        n = 0;
                    },1000);
                }
                else{

                }
            });
            jQuery('#nextBtn').on('click',function(){
                if(number < sliderLength && n == 0){
                    number++;
                    n=1;
                    jQuery('.carousel-area').animate({
                        marginLeft: parseInt(jQuery(".carousel-area").css("margin-left"))-1400+"px"
                    });
                    console.log(number);
                    setTimeout(function(){
                        n = 0;
                    },1000);
                }
                else if(number == sliderLength && n == 0){
                    number = number - sliderLength + 1;
                    n = 1
                    jQuery('.carousel-area').animate({
                        marginLeft: parseInt(jQuery(".carousel-area").css("margin-left"))+5600+"px"
                    });
                    console.log(number);
                    setTimeout(function(){
                        n = 0;
                    },1000);
                }
            });
        });
    }

    else if (window.matchMedia("(max-width: 1020px)").matches) {
      //画面横幅が769px以上のときの処理
      jQuery(function tabSlide(){
        jQuery('#prevBtn').on('click',function(){
            if(number > 1 && n == 0){
                number--;
                n = 1;
                jQuery('.carousel-area').animate({
                    marginLeft: parseInt(jQuery(".carousel-area").css("margin-left"))+1200+"px"  
                });
                console.log(number);
                setTimeout(function(){
                    n = 0;
                },1000);
            }
            else{

            }
        });
        jQuery('#nextBtn').on('click',function(){
            if(number < sliderLength && n == 0){
                number++;
                n=1;
                jQuery('.carousel-area').animate({
                    marginLeft: parseInt(jQuery(".carousel-area").css("margin-left"))-1200+"px"
                });
                console.log(number);
                setTimeout(function(){
                    n = 0;
                },1000);
            }
        });
     });


     jQuery('#prevBtn').on('touchstart',function(){
        if(number > 1 && n == 0){
            number--;
            n = 1;
            jQuery('.carousel-area').animate({
                marginLeft: parseInt(jQuery(".carousel-area").css("margin-left"))+1200+"px"  
            });
            console.log(number);
            setTimeout(function(){
                n = 0;
            },1000);
        }
        else{

        }
     });
     jQuery('#nextBtn').on('touchstart',function(){
        if(number < sliderLength && n == 0){
            number++;
            n=1;
            jQuery('.carousel-area').animate({
                marginLeft: parseInt(jQuery(".carousel-area").css("margin-left"))-1200+"px"
            });
            console.log(number);
            setTimeout(function(){
                n = 0;
            },1000);
        }
     });
    }

    else if(window.matchMedia("(max-width: 767px)").matches){
        //スマホ
        jQuery(function mobileSlide(){
            jQuery('#prevBtn').on('touchstart',function(){
                if(number > 1 && n == 0){
                    number--;
                    n = 1;
                    jQuery('.carousel-area').animate({
                        marginLeft: parseInt(jQuery(".carousel-area").css("margin-left"))+520+"px"  
                    });
                    console.log(number);
                    setTimeout(function(){
                        n = 0;
                    },1000);
                }
                else{

                }
            });
            jQuery('#nextBtn').on('touchstart',function(){
                if(number < sliderLength && n == 0){
                    number++;
                    n=1;
                    jQuery('.carousel-area').animate({
                        marginLeft: parseInt(jQuery(".carousel-area").css("margin-left"))-920+"px"
                    });
                    console.log(number);
                    setTimeout(function(){
                        n = 0;
                    },1000);
                }
            });

            jQuery('.carousel-wrapper').on('touchmove',function(){
                if(number > 1 && n == 0){
                    number--;
                    n = 1;
                    jQuery('.carousel-area').animate({
                        marginLeft: parseInt(jQuery(".carousel-area").css("margin-left"))+920+"px"  
                    });
                    console.log(number);
                    setTimeout(function(){
                        n = 0;
                    },1000);
                }
                else{

                }
            });
            jQuery('.carousel-wrapper').on('touchmove',function(){
                if(number < sliderLength && n == 0){
                    number++;
                    n=1;
                    jQuery('.carousel-area').animate({
                        marginLeft: parseInt(jQuery(".carousel-area").css("margin-left"))-920+"px"
                    });
                    console.log(number);
                    setTimeout(function(){
                        n = 0;
                    },1000);
                }
            });
        });
    }
});