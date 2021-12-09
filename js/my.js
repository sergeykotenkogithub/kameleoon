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

input.addEventListener('input', element => {
    const val = input.value;
    const h3 = document.querySelectorAll('h3 a');
    const h1 = document.querySelectorAll('h1');
    if (val !== '') {
        document.querySelector('.show-search').innerHTML = '';
        document.querySelector('.show-search').style.display = 'block'
        let cloneSelectors = [];
        let cloneSelectors2 = [];
        h3.forEach(selector =>  {
            if(selector.innerText.toLowerCase().search(val.toLowerCase()) !== -1) {
                console.log(selector.innerText)
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
        // h1.forEach(selector =>  {
        //     if(selector.innerText.toLowerCase().search(val.toLowerCase()) !== -1) {
        //         console.log(selector.innerText)
        //         const clone = selector.cloneNode(true)
        //         // for (let i=0, len=array.length; i<len; i++)
        //         // if (cloneSelectors.indexOf(clone) === -1) {
        //         //     cloneSelectors.push(clone)
        //         // }
        //         // if (cloneSelectors.length > 0) {
        //         //     for (let cl of cloneSelectors) {
        //         //         if (!cl.includes(clone)) {
        //         //             cl.push(clone);
        //         //         }
        //         //     }
        //         // }
        //         if (cloneSelectors.indexOf(clone) === -1) {
        //                         cloneSelectors.push(clone)
        //         }
        //
        //         // cloneSelectors.push(clone)
        //
        //         // if (cloneSelectors.indexOf(clone) === -1) {
        //         //     cloneSelectors.push(clone)
        //         // }
        //         console.log(cloneSelectors)
        //         cloneSelectors.forEach(el => {
        //             el.classList.add('search-block')
        //             document.querySelector('.show-search').insertAdjacentElement('afterbegin', el)
        //         })
        //     }
        // })
    } else  {
        document.querySelector('.show-search').style.display = 'none'
    }
})


