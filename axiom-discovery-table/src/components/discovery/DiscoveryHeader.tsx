"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setSort, SortKey } from "@/store/tableSlice";

const columns: { label: string; key?: SortKey }[] = [
  { label: "Pair Info" },
  { label: "Market Cap", key: "marketCap" },
  { label: "Liquidity", key: "liquidity" },
  { label: "Volume", key: "volume" },
  { label: "TXNS", key: "txns" },
  { label: "Token Info" },
  { label: "Audit Log" },
  { label: "Action" },
];

export function DiscoveryHeader() {
  const dispatch = useDispatch();
  const { sortKey, sortDirection } = useSelector(
    (state: RootState) => state.table
  );

  return (
    <div className="sticky top-0 z-20 bg-black/80 backdrop-blur border-b border-white/10">
      <div
        className="grid items-center h-[44px] px-3 text-xs text-white/50"
        style={{
          gridTemplateColumns:
            "400px 120px 120px 120px 120px 120px 140px 96px",
        }}
      >
        {columns.map((col, i) => {
          const isActive = col.key === sortKey;

          return (
            <div
              key={i}
              className={`flex items-center gap-1 ${
                col.key
                  ? "cursor-pointer hover:text-white"
                  : ""
              } ${isActive ? "text-white" : ""}`}
              onClick={() =>
                col.key && dispatch(setSort({ key: col.key }))
              }
            >
              {col.label}
              {isActive && sortDirection && (
                <span className="text-white/60">
                  {sortDirection === "asc" ? "↑" : "↓"}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
