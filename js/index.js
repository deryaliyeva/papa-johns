const categoryMenu = document.getElementById('categoryMenu')
const categoryArr = JSON.parse( localStorage.getItem("categoryArr") ) || []


    function yoxla(){
        if(categoryArr.length == 0)
            fetch( "http://localhost:5555/category" )
                .then( res => res.json() )
                .then ( info => {
                    categoryArr.length = 0
                    categoryArr.push(...info)
                    localStorage.setItem( "catetoryArr", JSON.stringify(categoryArr) )
                    handleCategory()
                } )
    }
    yoxla()


    function handleCategory(){
        categoryArr.map(item => {
            const url = item.id == 222 ? "/index.htm" : `/pages/category.htm?cat=${item.slug}`
            categoryMenu. innerHTML += `<li><a href="${url}">${item.category}</a></li>`
        })
    }
    handleCategory()

    fetch("./db/db.json")
    .then(res => res.json())
    .then(info => console.log(info))






