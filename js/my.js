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


