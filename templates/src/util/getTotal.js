export const getTotal = (sacola = []) =>
  sacola.reduce(
    (total, currentValue) =>
      total + currentValue.preco * currentValue.quantidade,
    0,
  );
