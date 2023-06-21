class ProductManager {

    constructor() {
        this.products = []
    }

    addProduct(title, description, price, thumbnail, code, stock){
        for(let i = 0; i < this.products.length;i++){
            if (this.products[i].code === code){
                console.log(`El codigo ${code} esta asociado a otro producto`);
                break;
        
            }
        }

        const newProduct = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        if(!Object.values(newProduct).includes(undefined)){
            const id = this.products.length + 1
            this.products.push({
                ...newProduct,
                id
            })
        }else{
            console.log("Todos los campos son obligatorios")
        }
    }

    getProducts(){
        return this.products
    }

    existe(id){
        return this.products.find((product) => product.id === id)
    }

    getProductById(id){
      if(!this.existe(id)) {
        console.log('Not Found')
      } else {
        console.log(this.existe(id))
      }
    } 
       
}

const p = new ProductManager

console.log(p.getProducts())

p.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25)

console.log(p.getProducts())

p.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25)

console.log(p.getProductById(3))














