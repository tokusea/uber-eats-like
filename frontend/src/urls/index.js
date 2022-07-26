const DEFAULT_API_LOCALHOST = 'http://127.0.0.1:3000/api/v1'
// const DEFAULT_API_LOCALHOST = 'https://tokusea-uber-eats-like.herokuapp.com/api/v1'

export const restaurantsIndex = `${DEFAULT_API_LOCALHOST}/restaurants`
export const foodsIndex = (restaurantId) =>
  `${DEFAULT_API_LOCALHOST}/restaurants/${restaurantId}/foods`
export const lineFoods = `${DEFAULT_API_LOCALHOST}/line_foods`;
export const lineFoodsReplace = `${DEFAULT_API_LOCALHOST}/line_foods/replace`;
export const orders = `${DEFAULT_API_LOCALHOST}/orders`;

