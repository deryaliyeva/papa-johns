const cat = new URLSearchParams(location.search).get("cat")
const cards = document.getElementById('cards')
let data;

fetch( `http://localhost:5555/${cat}` )
    .then( res => res.json() )
    .then( melumat => {
        console.log(location.search);
        data = melumat
        show()
    } )


    function show() {
        data.map(item => {
            console.log(item);
            
            cards.innerHTML += `
                <a href="/pages/details.htm?cat=${item.category}&id=${item.id}" class="w-full h-[400px] my-5" style="box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2); border-radius: 5px;">
                    <img src="${item.img}" alt="pizza" class="w-full h-[55%] object-cover" />
                    <div class="flex justify-between p-4">${item.title}
                        <button class="text-[14px] bg-green-700 text-white uppercase font-bold p-2 rounded-md">Bunu seç</button>
                    </div>
                    <p class="px-2">${item.composition}</p>
                </a> 
            `;
        });
    }
    let flag = true
    function basketOpen() {
        openClose.style.right = flag ? '50%' : '-100%'
        openClose.style.top = flag ? '45%' : '-100%'
        openClose.style.left = flag ? '20%' : '-100%'
        openClose.style.bottom = flag ? '50%' : '-100%'
        flag = !flag
    }