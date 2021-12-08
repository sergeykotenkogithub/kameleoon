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

// input.addEventListener('input', element => {
//     const val = input.value;
//     const h1 = document.querySelectorAll('h1');
//     if (val !== '') {
//         document.querySelector('.show-search').style.display = 'block'
//         h1.forEach(selector =>  {
//             if(selector.innerText.search(val) == -1) {
//                 console.log('wwww')
//             } else {
//                 // console.log(selector.innerText)
//                 console.log(selector)
//             }
//         })
//     }
// })

input.addEventListener('input', element => {
    const val = input.value;
    const h1 = document.querySelectorAll('h3 a');
    if (val !== '') {
        document.querySelector('.show-search').style.display = 'block'
        h1.forEach(selector =>  {
            if(selector.innerText.search(val) == -1) {
                // console.log('wwww')
            } else {
                // console.log(selector.innerText)
                console.log(selector.innerText)
                // document.querySelector('.show-search').insertAdjacentElement('beforeend', )

            }
        })
    } else  {
        document.querySelector('.show-search').style.display = 'none'
    }

})


