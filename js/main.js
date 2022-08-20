const products = [
    { id: 1, title: 'Notebook', price: 2000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUDpAbSyd3gbzMGK24azX0U6C16ojH70nJXdCcwz5E_N6RxdFaNKloj3VI8U7n2lN2HlI&usqp=CAU" },
    { id: 2, title: 'Mouse', price: 20, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdW0CjPVNYytgpJ-LiU3rCLrtVvJ2kt_KTgQPJMvDSXoXwmZXAIKS8krf9RatqqhfLfeg&usqp=CAU" },
    { id: 3, title: 'Keyboard', price: 200, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSerT4ewy3UlABTgAyFQDxTvGLwGU-whuJnlg5pZvdoUuk78LpLdW-T4pO2m_3TZd1Sznk&usqp=CAU" },
    { id: 4, title: 'Gamepad', price: 50, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUNhDpfR2JoJok96KZ1cImWwESAoUhWqlVrT7LjxKZ0s-ns1VcbePOTLwjwH4wdUYERrY&usqp=CAU" },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (allObj) => {
    return `<div class="product-item">
                <img src="${allObj.img}" alt="${allObj.title}"/>
                <h3>${allObj.title}</h3>
                <p>${allObj.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);