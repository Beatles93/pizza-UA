import axios from "axios";
import { Pizza, SearchPizzaParams } from "./types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
    "pizza/fetchPizzasStatus",  
    async (params) => {
      const { sortBy, order, category, search, currentPage } = params;
      const { data } = await axios.get(
        `https://639dac8f3542a261304cfe32.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      );
  
    return data;
    }
  );