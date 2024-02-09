type Size = ''| 'S'|'M'|'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ){}

    isProductReady(): boolean {
        
        for( const key in this ) {
            switch( typeof this[key] ) {
                case 'string':
                    if ( (<string><unknown>this[key]).length <= 0 ) throw Error(`${ key } is empty`);
                break;
                case 'number':
                    if ( (<number><unknown>this[key]) <= 0 ) throw Error(`${ key } is zero`);
                break;
                default:
                    throw Error(`${ typeof this[key] } is not valid`);
            }
        }

        return true;
    }

    

    toString() {
        // DRY
        if ( !this.isProductReady ) return;
        return `${ this.name } (${ this.price }), ${ this.size }`
    }

        // No DRY
        // if ( this.name.length <= 0 ) throw new Error('Name is empty');
        // if ( this.price <= 0 ) throw new Error('Price is empty');
        // if ( this.size.length <= 0 ) throw new Error('Size is empty');

        // return `${this.name} - ${this.price} - ${this.size}`;
    }
    


(() => {
    const bluePants = new Product('Blue Pants');
    console.log(bluePants);
}
)();