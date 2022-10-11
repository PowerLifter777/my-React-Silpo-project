
function sortProductsList(productsAPI, method) {

  switch (method) {
    case 'Спочатку популярні':
      productsAPI.sort((obj1, obj2) => obj1.available > obj2.available ? -1 : obj1.available < obj2.available ? 1 : 0)
        .sort((obj1, obj2) => obj1.available && (obj1.price.current || obj1.price.common) - (obj2.price.current || obj2.price.common))
        .sort((a, b) => a.available && (b.rating.votes - a.rating.votes));
      break;
    case 'За рейтингом':
      productsAPI.sort((obj1, obj2) => obj1.available > obj2.available ? -1 : obj1.available < obj2.available ? 1 : 0)
        .sort((obj1, obj2) => obj1.available && (obj1.price.current || obj1.price.common) - (obj2.price.current || obj2.price.common))
        .sort((a, b) => a.available && (b.rating.rate - a.rating.rate));
      break;
    case 'Спочатку акційні':
      productsAPI.sort((obj1, obj2) => obj1.available > obj2.available ? -1 : obj1.available < obj2.available ? 1 : 0)
        .sort((obj1, obj2) => obj1.available && obj1.price.current > obj2.price.current ? -1 : 1);
      break;
    case 'Спочатку дешевші':
      productsAPI.sort((obj1, obj2) => obj1.available > obj2.available ? -1 : obj1.available < obj2.available ? 1 : 0)
        .sort((obj1, obj2) => obj1.available && (obj1.price.current || obj1.price.common) - (obj2.price.current || obj2.price.common));
      break;
    case 'Спочатку дорожчі':
      productsAPI.sort((obj1, obj2) => obj1.available > obj2.available ? -1 : obj1.available < obj2.available ? 1 : 0)
        .sort((obj1, obj2) => obj1.available && (obj2.price.current || obj2.price.common) - (obj1.price.current || obj1.price.common));
      break;
    case 'Від А до Я':
      productsAPI.sort((obj1, obj2) => obj1.available > obj2.available ? -1 : obj1.available < obj2.available ? 1 : 0)
        .sort((obj1, obj2) => obj1.available && (obj1.price.current || obj1.price.common) - (obj2.price.current || obj2.price.common))
        .sort((a, b) => a.available && a.title.localeCompare(b.title));
      break;
    case 'Від Я до А':
      productsAPI.sort((obj1, obj2) => obj1.available > obj2.available ? -1 : obj1.available < obj2.available ? 1 : 0)
        .sort((obj1, obj2) => obj1.available && (obj1.price.current || obj1.price.common) - (obj2.price.current || obj2.price.common))
        .sort((a, b) => a.available && b.title.localeCompare(a.title));
      break;
    default:
      productsAPI.sort((obj1, obj2) => obj1.available > obj2.available ? -1 : obj1.available < obj2.available ? 1 : 0)
      break;
  }
  return productsAPI;
}

export default sortProductsList;