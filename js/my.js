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
    if (val !== '') {
        document.querySelector('.show-search').innerHTML = '';
        document.querySelector('.show-search').style.display = 'block'
        let aaa = [];
        h3.forEach(selector =>  {
            if(selector.innerText.search(val) == -1) {
               // const bbb =  document.querySelectorAll('.search-block')
               //  for (let i = 0; i < bbb.length; i++) {
               //      bbb[i].remove();
               //  }
            } else {
                console.log(selector.innerText)
                const clone = selector.cloneNode(true)
                // for (let i=0, len=array.length; i<len; i++)
                if (aaa.indexOf(clone) === -1) {
                    aaa.push(clone)
                }
                console.log(aaa)

                aaa.forEach(e => {
                    e.classList.add('search-block')
                    document.querySelector('.show-search').insertAdjacentElement('afterbegin', e)
                })
            }
        })
    } else  {
        document.querySelector('.show-search').style.display = 'none'
    }
})


