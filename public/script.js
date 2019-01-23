new Vue ({
    el: '#app',
    data() {
        return {
            total: 0,
            products: [
                { title: "Product 1" , id: 1, price: 5.99},
                { title: "Product 2" , id: 2, price: 10.99},
                { title: "Product 3" , id: 3, price: 15.50},
            ],
            cart: [],
            search: '',

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
            
        },
        inc: function(item){
            item.qty++;
            this.total += item.price;
        },
        dec: function(item){
            item.qty--;
            this.total -= item.price;
            if(item.qty <= 0){
                var i = this.cart.indexOf(item);
                this.cart.splice(i, 1);
            }
        },
        onSubmit: function(){
            var path = "/search?q=".concat(this.search);
            this.$http.get(path)
                .then(function(response){
                    console.log(response);
                })
        }
    },
    filters: {
        currency: function(price){
            return "$".concat(price.toFixed(2));
        }
    }
})