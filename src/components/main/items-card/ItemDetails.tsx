import React, { useState } from 'react';
import './itemCartStyles.css';
import { Brand } from '../../../types/types';
import { ItemCount } from './ItemCount';

export interface ItemDetailsProps {
  item: {
    products: Brand[];
  };
}
export const ItemDetails: React.FC<ItemDetailsProps> = ({ item }) => {
  const { products } = item;
  const [ cantidad, setCant] = useState(1);

  const handleSum = () => {
    const stockArray = item.products.flatMap((brand: Brand) => brand.products.map((product) => product.stock));
    const maxStock = Math.max(...stockArray);
    
    if (cantidad < maxStock) {
      setCant(prevState => prevState + 1);
    }
  };
  
  

  const handleRest = () => {
   cantidad > 1 && setCant(prevState => prevState - 1);
  };

  const handleChange = (e: { target: { value: string; }; }) => {
    setCant(parseInt(e.target.value));
  };

  return (
    <>
    <div className='contenedor'>
      <div className="producto">
        <div className="producto__thumbs">
          {products.map((brand: Brand) => (
            <div key={brand.brand}>
              {brand.products[0].srcImg.map((imgSrc: string, id: number) => (
                <img
                  src={imgSrc}
                  alt=""
                  className="producto__thumb-img"
                  key={id}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="producto__contenedor-imagen">
          <img
            src={products[0].products[0].srcImg[0]}
            alt=""
            className="producto__imagen"
          />
        </div>
        <div className="producto__contenedor-info">
          <div className="producto__estrellas">
          </div>
          <h1 className="producto__nombre">{products[0].products[0].title}</h1>
          <p className="producto__descripcion">{products[0].products[0].description}</p> 
          <div className="producto__contenedor-propiedad">
            <p className="producto__propiedad">Precio:</p>
            <p className="producto__precio">
              {products[0].products[0].price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </p>
          </div>
      <div className ="producto__contenedor-propiedad" id="propiedad-color">
        <p className ="producto__propiedad">Color</p>
        <div className ="producto__contenedor-radios">
          <label htmlFor="negro">
            <input
              type="radio"
              className ="producto__radio-input"
              name="color"
              id="negro"

            />
            <p
              className ="producto__radio-texto producto__radio-texto--color producto__radio-texto--negro"
            >
              Negro
            </p>
          </label>
          <label htmlFor="rojo">
            <input
              type="radio"
              className ="producto__radio-input"
              name="color"
              id="rojo"
              value="rojo"
            />
            <p
              className ="producto__radio-texto producto__radio-texto--color producto__radio-texto--rojo"
            >
              Rojo
            </p>
          </label>
          <label htmlFor="amarillo">
            <input
              type="radio"
              className ="producto__radio-input"
              name="color"
              id="amarillo"
              value="amarillo"
            />
            <p
              className ="producto__radio-texto producto__radio-texto--color producto__radio-texto--amarillo"
            >
              Amarillo
            </p>
          </label>
        </div>
      </div>
      <div className ="producto__contenedor-propiedad" id="propiedad-tamaño">
        <p className ="producto__propiedad">Tamaño</p>
        <div className ="producto__contenedor-radios">
          <label htmlFor="1,5">
            <input
              type="radio"
              className ="producto__radio-input"
              name="tamaño"
              id="1,5"
              value="1,5"
              checked
            />
            <p className ="producto__radio-texto">1,5</p>
          </label>
          <label htmlFor="2">
            <input type="radio" className ="producto__radio-input" name="tamaño" id="2" value="2" />
            <p className ="producto__radio-texto">2</p>
          </label>
          <label htmlFor="2,5">
            <input
              type="radio"
              className ="producto__radio-input"
              name="tamaño"
              id="2,5"
              value="2,5"
            />
            <p className ="producto__radio-texto">2,5</p>
          </label>
          <label htmlFor="3">
            <input type="radio" className ="producto__radio-input" name="tamaño" id="3" value="3" />
            <p className ="producto__radio-texto">3</p>
          </label>
          <label htmlFor="3,5">
            <input
              type="radio"
              className ="producto__radio-input"
              name="tamaño"
              id="3,5"
              value="3,5"
            />
            <p className ="producto__radio-texto">3,5</p>
          </label>
          <label htmlFor="4">
            <input type="radio" className ="producto__radio-input" name="tamaño" id="4" value="4" />
            <p className ="producto__radio-texto">4</p>
          </label>
        </div>
      </div>
     <ItemCount cantidad = {cantidad} handleSum = {handleSum} handleRest ={handleRest} handleChange ={handleChange}/>
    </div>
  </div>

  <div className ="mas-inhtmlFormacion" id="mas-inhtmlFormacion">
    <div className ="tabs">
      <button className ="tabs__button tabs__button--active" data-tab="caracteristicas">
        Caracteristicas
      </button>
      <button className ="tabs__button" data-tab="reseñas">Reseñas</button>
      <button className ="tabs__button" data-tab="envio">Envio</button>
    </div>
    <div className ="tab tab--active" id="caracteristicas">
      <h3 className ="tab__titulo">Caracteristicas</h3>
      <ul className ="tab__lista">
        <li>Nunc ornare ex at diam fermentum scelerisque.</li>
        <li>Integer vehicula nisl in sem faucibus, ac tincidunt magna dapibus.</li>
        <li>Integer vel magna eget ipsum laoreet lobortis.</li>
        <li>Phasellus viverra dui ut lorem tempus eleifend.</li>
        <li>Maecenas dictum lacus et condimentum aliquam.</li>
      </ul>
    </div>
    <div className ="tab" id="reseñas">
      <h3 className ="tab__titulo">Reseñas</h3>
      <div className ="reseña">
        <img src="./img/users/1.jpg" className ="reseña__foto" alt="" />
        <div className ="reseña__info">
          <div className ="reseña__estrellas">
            <div className ="reseña__estrella">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                />
              </svg>
            </div>
            <div className ="reseña__estrella">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                />
              </svg>
            </div>
            <div className ="reseña__estrella">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                />
              </svg>
            </div>
            <div className ="reseña__estrella">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                />
              </svg>
            </div>
            <div className ="reseña__estrella">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                />
              </svg>
            </div>
          </div>
          <p className ="reseña__fecha">31 de Mayo de 2022</p>
          <p className ="reseña__texto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed nunc dapibus,
            fringilla felis nec, consequat ipsum. Maecenas aliquam metus neque, a lobortis justo
            suscipit eu. Quisque sit amet orci at tortor fermentum suscipit bibendum in libero.
            Duis rhoncus massa blandit nunc gravida, at euismod augue congue.
          </p>
        </div>
      </div>
      <div className ="reseña">
        <img src="./img/users/2.jpg" alt="" className ="reseña__foto" />
        <div className ="reseña__info">
          <div className ="reseña__estrellas">
            <div className ="reseña__estrella">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                />
              </svg>
            </div>
            <div className ="reseña__estrella">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                />
              </svg>
            </div>
            <div className ="reseña__estrella">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                />
              </svg>
            </div>
            <div className ="reseña__estrella">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                />
              </svg>
            </div>
            <div className ="reseña__estrella">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                />
              </svg>
            </div>
          </div>
          <p className ="reseña__fecha">31 de Mayo de 2022</p>
          <p className ="reseña__texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className ="reseña">
        <img src="./img/users/3.jpg" alt="" className ="reseña__foto" />
        <div className ="reseña__info">
          <div className ="reseña__estrellas">
            <div className ="reseña__estrella">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                />
              </svg>
            </div>
            <div className ="reseña__estrella">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                />
              </svg>
            </div>
            <div className ="reseña__estrella">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                />
              </svg>
            </div>
            <div className ="reseña__estrella">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                />
              </svg>
            </div>
            <div className ="reseña__estrella">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                />
              </svg>
            </div>
          </div>
          <p className ="reseña__fecha">31 de Mayo de 2022</p>
          <p className ="reseña__texto">
            Integer vel nisi massa. Pellentesque ligula nulla, pretium hendrerit massa quis,
            tempus consequat lectus. Nulla facilisi. Etiam ipsum felis, euismod eget volutpat
            tristique, consequat at lorem.
          </p>
        </div>
      </div>
    </div>
    <div className ="tab" id="envio">
      <h3 className ="tab__titulo">Envio</h3>
      <p className ="tab__parrafo">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur hendrerit
        nunc, nec aliquet nisi consequat nec. Fusce porttitor non quam vitae venenatis. Sed maximus
        lacus at elit consequat, nec finibus nisl commodo. Vestibulum vitae urna quis nisi mollis
        elementum non ac sem.
      </p>
      <p className ="tab__parrafo">
        Proin ut tristique est. Curabitur volutpat mi quam, et tristique ipsum dignissim ut. Nam
        bibendum feugiat turpis sit amet auctor. Cras efficitur ullamcorper ligula. Sed nec tellus
        odio. Cras eget fermentum odio. Maecenas molestie nulla lorem, a pulvinar risus malesuada
        et.
      </p>
    </div>
  </div>
  </div>
  </>
  );
};


