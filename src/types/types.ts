export interface ProductProps {
	id: string;
	title: string;
	description: string;
	stock: number;
	price: number;
	srcImg: string[];
	quantity: number;
  }
  
  export interface Brand {
	brand: string;
	products: ProductProps[];
  }
  
  export interface ProductData {
	products: Brand[];
  }
  
  
  export interface ProductDetailsProps {
	id: string;
  }