const goods = [
	{ title: 'Компьютерная мышь', price: 400 },
    { title: 'Жесткий диск SSD 1Tb', price: 10000 },
    { title: 'Материнская плата', price: 4000 },
    { title: 'Видео-карта', price: 15000 }
];

//Короткий вариант.

let list1='';

const renderGoodsList = (list = goods) => {
	let goodsList = list.forEach(item => {
		list1 += `<div class="goods-item"><h3 class="item-title"> ${item.title} </h3><p class="item-price"> ${item.price} </p></div>`;
	});
	document.querySelector('.goods-list').innerHTML = list1;
}

renderGoodsList(goods);

//Вариант с использованием MAP.

/*
const renderGoodsItem = (title, price) => {
	return `<div class="goods-title"><h3>${title}</h3></div>
	<div class="goods-price"><lable>${price}</lable></div>`;
}

const renderGoodsList = (list = goods) => {
	let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
	let list1='';
	goodsList.forEach(item => list1 += item);
	document.querySelector('.goods-list').innerHTML = list1;
}

renderGoodsList(goods);
*/