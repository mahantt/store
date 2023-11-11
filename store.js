const {Product,User,Comment} =require("./models.js")

const products={}
const users=[]

function addProduct(product,count) {
    if (!product || !product.id) {
        throw new Error("product ndrim");
    } else {
    products[product.id]={
        product,count
       }
    }
}


function removeProduct(productId, count) {
    if (!Product.allProduct.includes(productId)){
        throw new Error("the product you're trying to remove doesn't exist!")
        if (products[productId].count <= 0) {
           throw new Error("we dont have nagative amount of product")
        }
    }products[productId].count -= count;
}



function addUser(user){
    users.push(user.username);
}


function getTotalInventoryCount(){
    let total = 0;
    for (let ID of Product.allProduct){
        total += products[ID].count;
    }
    return total;
}


function getTotalProfit(){
    let total = 0;
    for (let ID of Product.allProduct){
        total += products[ID].product.price;
    }
    return total;
}
function addComment(comment, product){ // instance of the Comment class.
    if (!(users.includes(comment.user.username))){
        throw new Error("this user doesn't exist!");
    }
    if (!(Product.allProduct.includes(product.id))){
        throw new Error("this product doesn't exist!")
    }
    product.Comments.push(`${comment.text} - ${comment.user.username}.`);
    // comment.user.Comments.push(comment.text);
}


const p1=new Product("boshghab",2000,"zorof")
addProduct(p1,5)
addProduct(new Product("livan",1000,"zorof"),3)
// console.log(products);
// console.log(getTotalInventoryCount());
// console.log(getTotalProfit());
const user1=new User("heshmat")
addUser(user1)
// console.log(users)
addComment(new Comment(user1, 2, "Boshghabe be dard nakhori bood"), p1);
// console.log(p1.Comments);
// console.log( getCommentsByUser());



