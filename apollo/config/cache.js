import { InMemoryCache } from 'apollo-cache-inmemory';

export default new InMemoryCache({
  possibleTypes: {
    Product: ['YearBook', 'ClothingPiece'],
  },
});
