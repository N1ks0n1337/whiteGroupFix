const counters = document.querySelectorAll('[data-counter]');

if (counters) {
	counters.forEach(counter => {
		counter.addEventListener('click', e => {
			const target = e.target;
            e.preventDefault()
			if (target.closest('.counter__button')) {
				if (target.closest('.counter').querySelector('input').value == '' && (target.classList.contains('counter__button_minus') || target.classList.contains('counter__button_plus'))) {
					target.closest('.counter').querySelector('input').value = 0;
                    e.preventDefault()
				}

				let value = parseInt(target.closest('.counter').querySelector('input').value);

				if (target.classList.contains('counter__button_plus')) {
					value++;
                    e.preventDefault()
				} else {
					--value;
                    e.preventDefault()
				}

				if (value <= 0) {
					value = 0;
					target.closest('.counter').querySelector('.counter__button_minus').classList.add('disabled')
				} else {
					target.closest('.counter').querySelector('.counter__button_minus').classList.remove('disabled')
				}

				target.closest('.counter').querySelector('input').value = value;
			}
		})
	})	
}

 var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 20,
        freeMode: true,
        breakpoints: {
            1264: {
                slidesPerView: 4,  
            },
            
            884: {
                slidesPerView: 3,  
            },
            764:{
                slidesPerView: 3.5,  
            },
            500:{
                slidesPerView: 3,  
            },
            417: {
                slidesPerView: 2.3,  
            },
            320: {
                slidesPerView: 1.7,  
            },
            0: {
                slidesPerView: 1.2,  
            },
        }
        
      });
      var swiper = new Swiper(".stockSwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        breakpoints: {
            1264: {
                slidesPerView: 2.7,  
            },
            
            884: {
                slidesPerView: 2,  
            },
            764:{
                slidesPerView: 2,  
            },
            500:{
                slidesPerView: 1,  
            },
            320: {
                slidesPerView: 1,  
            },
            0: {
                slidesPerView: 1,  
            },
        }
        
      });
      var swiper = new Swiper(".deliverySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        breakpoints: {
            1264: {
                slidesPerView: 3,  
                spaceBetween: 15,
            },
            
            884: {
                slidesPerView: 3, 
                spaceBetween: 10, 
            },
            764:{
                slidesPerView: 3,  
                spaceBetween: 10,
            },
            582:{
                slidesPerView: 2.7,  
                spaceBetween: 10,
            },
            400:{
                slidesPerView: 2.2,  
                spaceBetween: 10,
            },
            320: {
                slidesPerView: 1.7,  
                spaceBetween: 10,
            },
            0: {
                slidesPerView: 1.3, 
            },
        }
        
      });
      
      var swiper = new Swiper(".deliciousSwiper", {
        freeMode: true,
        breakpoints: {
            1437: {
                slidesPerView: 4.5,  
                spaceBetween: 10,
            },
            
            1322: {
                slidesPerView: 4, 
                spaceBetween: 10, 
            },
            1200:{
                slidesPerView: 3.5,  
                spaceBetween: 10,
            },
            989:{
                slidesPerView: 3,  
                spaceBetween: 10,
            },
            908:{
                slidesPerView: 2.5,  
                spaceBetween: 10,
            },
            708: {
                slidesPerView: 2.5,  
                spaceBetween: 10,
            },
            500: {
                slidesPerView: 2, 
            },
            300: {
                slidesPerView: 1.5, 
            },
        }
        
      });
      