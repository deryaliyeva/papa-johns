const categoryMenu = document.getElementById('categoryMenu')

fetch( "https://papajson.vercel.app/category" )
    .then( res => res.json() )
    .then ( info => {
        info.map(item => {
            const url = item.id == 222 ? "/index.htm" : `/pages/category.htm?cat=${item.slug}`
            categoryMenu.innerHTML += `<li><a href="${url}">${item.category}</a></li>`
        })
    } )


