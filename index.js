const product = [
    {
        id : 1,
        productName : 'Com fortable Denim Shirt for Men - Blue',

        imageURL : 'https://static-01.daraz.com.bd/p/858ad965067922e0673b718d11e27f7e.jpg',
        price : 120,
        description : '',
    },
    {
        id : 2,
        productName : 'New White Shirt Men s Stylish & Fashionable Trendy Good Looking Long Sleeve Formal Shirt',

        imageURL : 'https://static-01.daraz.com.bd/p/8045dce7b7ca5a4fb78162ca96f29dc0.jpg_400x400q75-product.jpg_.webp',
        price : 200,
        description : '',
    },
    {
        id : 3,
        productName : 'Samsung Galaxy A04s (4GB/128GB) - 5000mAh Battery Samsung Galaxy A04s (4GB/128GB) - 5000mAh Battery',

        imageURL : 'https://static-01.daraz.com.bd/p/5433521cd491d78f32a8627cf3689002.jpg',

        price : 10000,
        description : '',
    },
    {
        id : 4,
        productName : 'For Xiaomi Redmi Note 11 4g Back Camera Lens Protector - Transparent (Not Glass)',

        imageURL : 'https://static-01.daraz.com.bd/p/5ce5e89de39a7c5da400e49b27ddef6a.jpg',
        
        price : 100,
        description : '',
    }

];


const form = document.getElementById("form")
form.addEventListener("submit", (e) => {
    e.preventDefault();

const searchBox = e.target.searchBox.value;
const searchText = searchBox.toLowerCase();


const searchResult = product.filter((value) => {
const  productTitle= value.searchBox;
const titleName = productTitle.toLowerCase();

 return titleName.includes(searchText)
}) 
console.log(searchResult)
})
