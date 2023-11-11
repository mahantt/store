class Product{
    constructor(name,price,categori){
        this.name=name
        this.price= price
        this.categori=categori
        this.id=Product.generateId()
       Product.allProduct.push(this.id)
       this.Comments=[]
    }
    addComment(Comment){
        this.Comments.push(Comment)
    }
    id;
    static allProduct=[]
    static generateId(){
        return parseInt(Math.random() *1e8)
        
    }

}
class User{
    constructor(username){
        this.username=username
        this.purchaseHistory=[]
    }
}
class Comment{

    constructor(user, rating, text){
        this.user = user;
        this.rating = rating;
        this.text = text;
    }
}

module.exports={
    Product,
    User,
    Comment
}