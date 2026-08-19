// Single source of truth for every external/verified fact used across the site.
// Everything here was pulled directly from the live blockyaiagent.io DOM — nothing invented.

export const TOKEN = {
  chain: "Solana",
  contract: "9TwGzR67b7pVjhiDZyHoYk5ynYGLaCG3hezKXK6642US",
  buyPhantom: "https://phantom.app/download",
  buyRaydium:
    "https://raydium.io/swap/?inputMint=9TwGzR67b7pVjhiDZyHoYk5ynYGLaCG3hezKXK6642US&outputMint=sol",
  coingecko: "https://www.coingecko.com/en/coins/blocky-ai-agent",
  coinmarketcap:
    "https://dex.coinmarketcap.com/token/solana/9TwGzR67b7pVjhiDZyHoYk5ynYGLaCG3hezKXK6642US/",
  dexscreener:
    "https://dexscreener.com/solana/6awvwe21stdebwgtmxytir6hnrtlj4hyfdanccdzko6r",
};

export const NFT = {
  chain: "Ethereum",
  contract: "0x37d129c771c621277ad6ed53b12599156ec69ce1",
  opensea: "https://opensea.io/collection/blocky-ai-agents",
  // Real thumbnails from the live collection, verified against the OpenSea CDN.
  previewImages: [
    {
      src: "https://i2c.seadn.io/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/63a688f1ffcdd2a903f9681e125426/e463a688f1ffcdd2a903f9681e125426.png?w=350",
      alt: "BLOCKY #765",
    },
    {
      src: "https://i2c.seadn.io/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/1a74644378d9dfcf913866d1924be4/4e1a74644378d9dfcf913866d1924be4.png?w=350",
      alt: "BLOCKY #8700",
    },
    {
      src: "https://i2c.seadn.io/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/d739b720c67c017f3eaccd6c6b3506/b7d739b720c67c017f3eaccd6c6b3506.png?w=350",
      alt: "BLOCKY #461",
    },
  ],
};

export const SOCIAL = {
  telegram: { url: "https://t.me/BlockySolana", label: "900+ members" },
  x: { url: "https://x.com/blockyaiagent", label: "700+ followers" },
  instagram: { url: "https://www.instagram.com/blockyaiagent7", label: "Follow us" },
  tiktok: { url: "https://www.tiktok.com/@blocky.ai.agent", label: "Follow us" },
};

export const BLOCKY_MARKET_URL = "https://blocky-market.vercel.app";
