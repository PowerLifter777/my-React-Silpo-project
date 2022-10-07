import { createContext, useEffect } from "react";
import productsAPI from '../assets/productsAPI.js';

export const AllProductsContext = createContext(productsAPI);