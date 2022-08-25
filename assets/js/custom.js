
$(function(){


/*
     * 접근성 & UX 개선 (키보드 사용할때만 포커스 나오게)
     *
     * 
     * 
     *sc-slide 
     *@version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (uno)  
     * 
     * 
     */
     var swiper = new Swiper(".sc-slide .swiper", {
        slidesPerView: "2",
        spaceBetween: 20,
      });
     

     /*
     * 
     * 
     * 
     *      
    /*
     *
     *  
     * 
     * sc-life
     * @version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (uno)
     */
    
     $('.info-item').hover(function(){
      $('.info-item').removeClass('active');
      $(this).addClass('active');
     })
    /* 
     * 
     * 
     * 
     *
     *  
     * 
     * 
     * sc-life 스크롤
     * @version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (uno)
     */

    
    
    /* 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     */
 }) //지우지 마세요