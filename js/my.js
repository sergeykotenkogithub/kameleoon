// Копировать в буфер обмена

document.querySelectorAll(".clipboard-img").forEach(selector => {
    selector.addEventListener('click', element => {
        if (element.target.closest('pre')) {
            const text = element.target.closest('pre').querySelector('code').textContent
            navigator.clipboard.writeText(`${text}`);
       }
    })
})

// Поисковая строка

const input = document.querySelector('.search-text')

input.addEventListener('input', () => {

    const val = input.value;
    const h3 = document.querySelectorAll('h3 a');
    const h1 = document.querySelectorAll('h1 a');

    if (val !== '') {

        document.querySelector('.show-search').innerHTML = '';
        document.querySelector('.show-search').style.display = 'block'
        let cloneSelectors = [];
        function elementAdd(element) {
            element.forEach(selector =>  {
                if(selector.innerText.toLowerCase().search(val.toLowerCase()) !== -1) {
                    const clone = selector.cloneNode(true)
                    if (cloneSelectors.indexOf(clone) === -1) {
                        cloneSelectors.push(clone)
                    }
                    cloneSelectors.forEach(el => {
                        el.classList.add('search-block')
                        document.querySelector('.show-search').insertAdjacentElement('afterbegin', el)
                        scroll('.search-block')
                    })
                }
            })
        }
        elementAdd(h3)
        elementAdd(h1)

    } else  {

        document.querySelector('.show-search').style.display = 'none'

    }
})

// input.addEventListener('input', () => {
//
//     const val = input.value;
//     const h3 = document.querySelectorAll('h3 a');
//     const h1 = document.querySelectorAll('h1 a');
//
//     if (val !== '') {
//
//         document.querySelector('.show-search').innerHTML = '';
//         document.querySelector('.show-search').style.display = 'block'
//         let cloneSelectors = [];
//         function elementAdd(element) {
//             element.forEach(selector =>  {
//                 if(selector.innerText.toLowerCase().search(val.toLowerCase()) !== -1) {
//                     const clone = selector.cloneNode(true)
//                     if (cloneSelectors.indexOf(clone) === -1) {
//                         cloneSelectors.push(clone)
//                     }
//                     cloneSelectors.forEach(el => {
//                         // el.classList.add('search-block')
//                         let div = document.createElement('div')
//                         div.className = "search-block";
//                         div.innerHTML = `${el}`
//                         document.querySelector('.show-search').insertAdjacentElement('afterbegin', div)
//                         // document.querySelector('.show-search').insertAdjacentHTML('afterbegin', `<div class="search-block"> ${el}</div>`)
//                     })
//                 }
//             })
//         }
//         elementAdd(h3)
//         elementAdd(h1)
//
//     } else  {
//
//         document.querySelector('.show-search').style.display = 'none'
//
//     }
// })







// Плавная прокрутка + на мобильном устройстве учитывать высоту шапки

// if (document.documentElement.clientWidth < 1024) {
//     $(document).ready(function(){
//         // = Вешаем событие прокрутки к нужному месту
//         //	 на все ссылки якорь которых начинается на #
//         $('a[href^="#"]').click (function() {
//             // e.preventDefault();
//             var target = $(this).attr('href');
//             $('html, body').animate({
//                 scrollTop: $(target).offset().top - 132
//             }, 500)
//         });
//     });
// } else {
//     // Плавная прокрутка
//     const anchors = document.querySelectorAll('a[href*="#"]')
//     for (let anchor of anchors) {
//         anchor.addEventListener('click', element => {
//             element.preventDefault();
//             const blockID = anchor.getAttribute('href')
//             document.querySelector('' + blockID).scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             })
//         })
//     }
// }

scroll('a[href^="#"]')


function scroll(selector) {
    if (document.documentElement.clientWidth < 1024) {
        $(document).ready(function(){
            // = Вешаем событие прокрутки к нужному месту
            //	 на все ссылки якорь которых начинается на #
            // $('a[href^="#"]').click (function() {
            $(selector).click (function() {
                // e.preventDefault();
                var target = $(this).attr('href');
                $('html, body').animate({
                    scrollTop: $(target).offset().top - 132
                }, 300)
            });
        });
    } else {
        // Плавная прокрутка
        const anchors = document.querySelectorAll('a[href*="#"]')
        for (let anchor of anchors) {
            anchor.addEventListener('click', element => {
                element.preventDefault();
                const blockID = anchor.getAttribute('href')
                document.querySelector('' + blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            })
        }
    }
}




