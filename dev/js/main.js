"use strict"
//SWIPER//
const swiper = new Swiper('.reviews-swiper', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    mousewhell: true,
    keyboard: true,
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    speed: 900,
});

const swiperGallery = new Swiper('.gallery-swiper', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.gallery-btn-next',
        prevEl: '.gallery-btn-prev',
    },
    mousewhell: true,
    keyboard: true,
    autoplay: {
        delay: 1500,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    speed: 900,
    slidesPerView: 1.5,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
});

//FORM//
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();
        let error = formValidate(form);
        let formData = formValidate(form);
        formData.append('image', formImage.files[0]);
        if (error === 0) {
            form.classList.add('_sending')
            let respinse = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                formPreview.innerHTML = '';
                form.reset();
                form.classList.remove('_sending');
            } else {
                alert('Fout')
                form.classList.remove('_sending');
            }
        } else {
            alert('Verplichte velden invullen')
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if(emailTest(input)) {
                    formAddError(input);
                    error++
                }
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    function emailTest(input) {
        return !/^\w+([\.-]?\W=)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});

//MODAL//
var modal = document.getElementById("form-div");
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = 'block'
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};