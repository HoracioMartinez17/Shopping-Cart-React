//function para poner en mayuscula la primera letra del texto
export const capitalizeTitle = (title: string): string => {
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
  };
  