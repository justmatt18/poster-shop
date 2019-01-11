new Vue ({
    el: '#app',
    data() {
        return {
            total: 0,
            products: [
                { title: "Product 1" , id: 1, price: 5},
                { title: "Product 2" , id: 2, price: 10},
                { title: "Product 3" , id: 3, price: 15},
            ],
            cart: [],
        }
    },
    methods: {
        addToCart: function(product){
            var found = false;
            this.total += product.price;
            for (var i = 0; i < this.cart.length; i++){
                if(this.cart[i].id === product.id){
                    found = true;
                    this.cart[i].qty++;
                }
            }
            if(!found){
                this.cart.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    qty: 1,
                });
            }
            
        }
    },
})