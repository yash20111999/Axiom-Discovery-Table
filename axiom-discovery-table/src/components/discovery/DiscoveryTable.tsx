"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { DiscoveryRow } from "./DiscoveryRow";
import { DiscoveryHeader } from "./DiscoveryHeader";
import { DiscoveryToken } from "./types";
import { useMemo } from "react";

const MOCK_DATA: DiscoveryToken[] = [
  {
    id: "1",
    name: "snowguy",
    symbol: "snowguy",
    age: "2h",
    avatarUrl: "/mock/token.png",
    marketCap: "$90.5K",
    marketCapChange: 23.19,
    liquidity: "$28.5K",
    volume: "$37K",
    txnsTotal: "11.3K",
    txnsBuy: "11K",
    txnsSell: "337",
    auditScore: 14.13,
    paid: true,
  },
  {
    id: "2",
    name: "axiom",
    symbol: "axiom",
    age: "5h",
    avatarUrl: "/mock/token.png",
    marketCap: "$140K",
    marketCapChange: -4.81,
    liquidity: "$55K",
    volume: "$91K",
    txnsTotal: "7.2K",
    txnsBuy: "3.9K",
    txnsSell: "3.3K",
    auditScore: 92,
    paid: false,
  },
];

function parseValue(value: string) {
  return Number(
    value
      .replace("$", "")
      .replace("K", "000")
      .replace("M", "000000")
  );
}

export function DiscoveryTable() {
  const { sortKey, sortDirection } = useSelector(
    (state: RootState) => state.table
  );

  const sortedData = useMemo(() => {
    if (!sortKey || !sortDirection) return MOCK_DATA;

    return [...MOCK_DATA].sort((a, b) => {
      const getVal = (t: DiscoveryToken) => {
        if (sortKey === "marketCap") return parseValue(t.marketCap);
        if (sortKey === "liquidity") return parseValue(t.liquidity);
        if (sortKey === "volume") return parseValue(t.volume);
        if (sortKey === "txns") return parseValue(t.txnsTotal);
        return 0;
      };

      const diff = getVal(a) - getVal(b);
      return sortDirection === "asc" ? diff : -diff;
      });
  }, [sortKey, sortDirection]);


  return (
    <div className="relative">
      <div className="overflow-x-auto">
        <div className="min-w-[1100px] space-y-2">
          <DiscoveryHeader />
          {sortedData.map((token) => (
            <DiscoveryRow key={token.id} token={token} />
          ))}
        </div>
      </div>
    </div>
  );
}
