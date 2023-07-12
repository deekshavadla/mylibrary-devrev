const product = [
    {
        id: 0,
        image: 'images/harry.jpg',
        title: 'harrypotter',
        price: 12,
    },
    {
        id: 1,
        image: 'images/boy.jpg',
        title: 'boy with no name',
        price: 11,
    },
    {
        id: 2,
        image: 'images/girl.jpg',
        title: 'girl with no name',
        price: 6.7,
    },
    {
        id: 3,
        image: 'images/apj.jpg',
        title: 'wings of fire',
        price: 13,
    },
    {
        id: 4,
        image: 'images/upAtTheVilla.jpg',
        title: 'Up at the villa',
        price: 6,
    }

];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
    var productAvailability = true;

    function addProductToCart(id) {
      // Check if the product is available.
      if (productAvailability) {
        // Display a message to the user.
        alert("The product has been added to your cart.");
      } else {
        // Display a message to the user and remove the product from the cart.
        alert("The product is not available.");
        removeProductFromCart(id);
      }
    }
    
}



