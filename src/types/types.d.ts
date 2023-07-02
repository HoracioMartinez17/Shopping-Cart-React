export interface ProductProps {
	id: string;
	title: string;
	description: string;
	stock: number;
	price: number;
	srcImg: string;
	quantity: number;
  }
  
  export interface ProductData {
	[brand: string]: ProductProps[];
  }

  export interface ProductDetailsProps {
	id: string;
  }
