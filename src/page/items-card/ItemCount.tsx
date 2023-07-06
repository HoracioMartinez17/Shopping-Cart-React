import React, { ChangeEvent } from 'react';

 interface ItemCountProps {
  quantity: number;
  handleSum: () => void;
  handleRest: () => void;
  handleAddCart: () => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const ItemCount: React.FC<ItemCountProps> = ({ quantity, handleSum, handleRest, handleChange, handleAddCart }) => {
  return (
    <>
      <div className="producto__contenedor-propiedad">
        <p className="producto__propiedad">cantidad</p>
        <button type="button" className="producto__btn-cantidad"  onClick={handleRest}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
          </svg>
        </button>
        <input
          type="number"
          value={quantity}
          className="producto__cantidad"
          onChange={handleChange}
        />
        <button
          type="button"
          className="producto__btn-cantidad"
          onClick={handleSum}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
        </button>
      </div>
      <button type="button"
       className="producto__btn-carrito"
       onClick={handleAddCart}>
        Agregar al carrito
      </button>
    </>
  );
};
