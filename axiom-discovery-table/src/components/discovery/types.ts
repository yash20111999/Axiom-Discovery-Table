export interface DiscoveryToken {
  id: string;
  name: string;
  symbol: string;
  age: string;
  avatarUrl: string;

  marketCap: string;
  marketCapChange: number;

  liquidity: string;
  volume: string;

  txnsTotal: string;
  txnsBuy: string;
  txnsSell: string;

  auditScore: number; // used in Token Info for now
  paid: boolean;
}
