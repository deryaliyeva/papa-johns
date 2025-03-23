// const { data } = require("autoprefixer");
const cards = document.getElementById('cards')
const cat = new URLSearchParams(location.search).get("cat")
const data = []

fetch( `https://papajson.vercel.app/${cat}` )
    .then( res => res.json() )
    .then( melumat => {
        console.log(location.search);
        data.push(...melumat)
        show()
    } )


    function show(){
        data.map( item => {
            cards.innerHTML += `
                                <a href="" class="w-full sm:w-[48%]  h-[400px] lg:w-[30%] xl:w-[23%] my-5 rounded-md" style="box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);">
                                    <img src="${item.img}" alt="pizza" class="w-full h-[55%] object-cover" />
                                    <div class="flex justify-between mt-4 px-2 mb-2">${item.title}
                                    <button class="text-[14px] bg-green-700 text-white uppercase font-bold p-[8px] rounded-md">Bunu seç</button>
                                    </div>
                                    <p class="px-2">${item.composition}</p>
                                </a> 
                                `
        } )
    }
    
    