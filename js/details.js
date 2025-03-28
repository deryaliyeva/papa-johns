const id = new URLSearchParams(location.search).get("id")
const cat = new URLSearchParams(location.search).get("cat")
const product = document.getElementById('product')
const data = []
console.log(id, cat)
fetch( `http://localhost:5555/${cat}/${id}` )
    .then( response => response.json() )
    .then( melumat => {
        console.log(melumat)
        data.push(melumat)
        create() 
    })

function create() {
    data.map(item => {
        product.innerHTML += ` <div id="product" class="min-h-[70vh] flex flex-col sm:flex-row justify-between items-center">
            <div class="w-full sm:w-1/2 xs:mr-5">
                 <h4 class="font-bold text-[22px]">${item.title}</h4>
                 <p class="mt-4"><b>Tərkibi:</b>  ${item.composition}</p>
                 <p class="font-bold my-2 text-[18px]">Qiyməti: <span id="qiymetntc">${item.price}</span>₼</p>
                 ${
                   item.variations != undefined && item.variations?.length !== 0 ? `
                    <div id="productType" class="flex rounded py-2 w-[60%]">
                     <button onclick="handleSize('Ənənəvi')" class="bg-green-700 w-1/2 text-center text-white px-2 py-1">Ənənəvi</button>
                     <button onclick="handleSize('Nazik')" class="bg-gray-200 w-1/2 text-center text-green-700 px-2 py-1">Nazik</button>
                   </div>
                   <div class="font-semibold w-[60%]">
                       <select id="select1" onchange="" class="w-full bg-red-700 outline-none my-5 px-3 py-1 text-[15px] text-white">
                        ${  item.variations.filter(elment => elment.type == "Ənənəvi")
                        .map(elem => `<option>${elem.size}</option>`).join("") }
                       </select>
                   </div>` :  " " 
                 }
                 <div class="py-2">
                     <div class="flex items-center sm:text-[20px] text-white py-2">
                         <button onclick="hesabla(-1,11)" class="w-[50px] bg-gray-400 font-black">-</button>
                         <span class="w-[50px] flex justify-center text-black font-semibold">1</span>
                         <button class="w-[50px] bg-green-600 font-black">+</button>
                     </div>
                     <button class="bg-green-700 text-white w-[200px] p-2 my-5 rounded-md">Səbətə at</button>
                 </div>
             </div>
             <div class="w-full sm:w-1/2 flex justify-center">
                 <img class="w-full md:w-[80%]" src="${item.img}" alt="pizza">
             </div>
         </div>`

    });
}

    let flag = true
    function basketOpen() {
        openClose.style.right = flag ? '50%' : '-100%'
        openClose.style.top = flag ? '50%' : '-100%'
        openClose.style.left = flag ? '20%' : '-100%'
        openClose.style.bottom = flag ? '50%' : '-100%'
        flag = !flag
    }

    function handleSize(arg){
        const sel = document.getElementById('select1')
        sel.innerHTML =  item.variations.filter(elment => elment.type == arg)
        .map(elem => `<option>${elem.size}</option>`).join("")
    }