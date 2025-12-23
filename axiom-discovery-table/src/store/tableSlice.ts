import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SortKey =
  | "marketCap"
  | "liquidity"
  | "volume"
  | "txns"
  | null;

export type SortDirection = "asc" | "desc" | null;

interface TableState {
  sortKey: SortKey;
  sortDirection: SortDirection;
}

const initialState: TableState = {
  sortKey: null,
  sortDirection: null,
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setSort(state, action: PayloadAction<{ key: SortKey }>) {
      if (state.sortKey !== action.payload.key) {
        state.sortKey = action.payload.key;
        state.sortDirection = "desc";
        return;
      }

      if (state.sortDirection === "desc") {
        state.sortDirection = "asc";
        return;
      }

      // third click → reset
      state.sortKey = null;
      state.sortDirection = null;
    },
  },
});

export const { setSort } = tableSlice.actions;
export default tableSlice.reducer;
