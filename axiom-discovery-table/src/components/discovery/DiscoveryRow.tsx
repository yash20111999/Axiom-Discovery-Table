import Image from "next/image";
import { DiscoveryToken } from "./types";
import { Sparkline } from "./Sparkline";


interface Props {
  token: DiscoveryToken;
}

export function DiscoveryRow({ token }: Props) {
  const isPositive = token.marketCapChange >= 0;

  return (
    <div
      className="grid items-center h-[72px] px-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] transition-colors"
      style={{
        gridTemplateColumns:
          "400px 120px 120px 120px 120px 120px 140px 96px",
      }}
    >
      {/* Pair Info */}
      <div className="flex items-center gap-3">
        <Image
          src={token.avatarUrl}
          alt={token.name}
          width={44}
          height={44}
          className="rounded-md bg-white/10"
        />
        <div className="min-w-0">
          <div className="flex items-center gap-1 text-sm font-medium text-white">
            <span className="truncate">{token.name}</span>
            <span className="text-white/50">{token.symbol}</span>
            <span className="ml-1 text-white/40">⧉</span>
          </div>
          <div className="mt-1 flex items-center gap-2 text-xs text-white/40">
            <span>{token.age}</span>
            <span className="h-3 w-px bg-white/20" />
            <span>👥 22</span>
            <span>🌐</span>
            <span>𝕏</span>
            <span>🔍</span>
          </div>
        </div>
        <Sparkline
          points={[12, 14, 13, 16, 15, 18, 20, 19, 22, 24]}
          isPositive={isPositive}
        />
      </div>

      {/* Market Cap */}
      <div className="flex flex-row gap-1">
        <div className="flex items-center gap-2">
          <span className="text-sm text-white">{token.marketCap}</span>
          <span
            className={`text-xs ${
              isPositive ? "text-emerald-400" : "text-red-400"
            }`}
          >
            {isPositive ? "+" : ""}
            {token.marketCapChange}%
          </span>
        </div>
      </div>


      {/* Liquidity */}
      <div className="text-sm text-white">{token.liquidity}</div>

      {/* Volume */}
      <div className="text-sm text-white">{token.volume}</div>

      {/* TXNS */}
      <div>
        <div className="text-sm text-white">{token.txnsTotal}</div>
        <div className="text-xs">
          <span className="text-emerald-400">{token.txnsBuy}</span>
          <span className="text-white/40"> / </span>
          <span className="text-red-400">{token.txnsSell}</span>
        </div>
      </div>

      {/* 🔑 TOKEN INFO (NEW COLUMN) */}
      <div className="flex flex-col gap-2">
        <span className="inline-flex items-center gap-1 rounded bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-400">
          🧑‍🤝‍🧑 {token.auditScore}%
        </span>
        <span className="inline-flex items-center gap-1 rounded bg-white/10 px-2 py-0.5 text-xs text-white/70">
          🔒 Safe
        </span>
      </div>

      {/* Audit Log */}
      <div className="space-y-2">
        <div className="text-xs text-emerald-400">100%</div>
        {token.paid && (
          <span className="inline-block rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400">
            Paid
          </span>
        )}
      </div>

      {/* Action */}
      <button className="h-9 w-full rounded-full bg-indigo-500 text-sm font-medium text-white hover:bg-indigo-400 transition">
        Buy
      </button>
    </div>
  );
}
