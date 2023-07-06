export interface ProductProps {
  [x: string]: any;
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
	id: string;
	title: string;
	description: string;
	stock: number;
	price: number;
	srcImg: string[];
	quantity: number;
  }
  
  
  export interface ProductDetailsProps {
	id: string;
  }

  export const types = {
    login: 'LOG_IN',
    logout: 'LOG_OUT'
}

export type ActionTypes = {
	login: 'LOGIN',
	logout: 'LOGOUT',
	// ... other action types
  };