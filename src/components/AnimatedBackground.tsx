"use client";

import React, { useEffect, useState } from "react";

interface Coin {
  id: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export default function CryptoTicker() {
  const [cryptoData, setCryptoData] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1"
        );
        const data = await res.json();
        setCryptoData(data);
      } catch (error) {
        console.error("Failed to fetch crypto data", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 60000); // refresh every 1 min
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black text-white border-b border-gray-700 overflow-hidden h-10">
      <div className="relative w-full h-full">
        {loading ? (
          <div className="flex items-center justify-center h-full text-sm text-gray-400">
            Loading crypto prices...
          </div>
        ) : (
          <div className="absolute top-0 left-0 flex h-full whitespace-nowrap animate-scroll">
            {[...cryptoData, ...cryptoData].map((coin, index) => (
              <div
                key={`${coin.id}-${index}`}
                className="flex items-center gap-2 px-4 text-sm"
              >
                <span className="font-semibold uppercase">{coin.symbol}</span>
                <span>${coin.current_price.toFixed(2)}</span>
                <span
                  className={
                    coin.price_change_percentage_24h >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}




