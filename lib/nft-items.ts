// Real collection data, captured from the live OpenSea collection page
// (opensea.io/collection/blocky-ai-agents). Nothing here is invented:
// the description is the collection's own published description, the
// supply/chain/launch and trait-category counts are OpenSea's own figures,
// and every item below is a real token with its real image and item URL.
//
// Deliberately NOT included: floor price, volume, holder counts, or
// per-item rarity ranks. At capture time the collection had no floor
// price and items showed as "Not listed", so any price or availability
// claim on the site would be misleading.

import { NFT } from "./links";

export const COLLECTION = {
  name: "Blocky AI Agents",
  supply: "10,000",
  chain: NFT.chain,
  launched: "October 2025",
  description:
    "10,000 Blocky Agents are more than NFTs — they're a covert squad of decentralized operatives on a mission to defend the chain and amplify the signal. Each Agent is a unique digital identity, forged on-chain, geared for action, and ready to represent.",
  opensea: NFT.opensea,
  contract: NFT.contract,
};

// Trait categories and their distinct-value counts, as listed by OpenSea.
export const TRAIT_CATEGORIES = [
  { name: "Legends", count: 196 },
  { name: "Body", count: 131 },
  { name: "Background", count: 37 },
  { name: "Gold Extras", count: 21 },
];

const itemUrl = (tokenId: string) =>
  `https://opensea.io/item/ethereum/${NFT.contract}/${tokenId}`;

export type NftItem = { name: string; tokenId: string; src: string; href: string };

const RAW: { name: string; tokenId: string; src: string }[] = [
  { name: "BLOCKY #8962", tokenId: "8963", src: "https://i2c.seadn.io/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/02b67bb96c78511b9fd74f38ee349b/3202b67bb96c78511b9fd74f38ee349b.png?w=500" },
  { name: "BLOCKY #9845", tokenId: "9787", src: "https://i2c.seadn.io/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/f562e2131ba3990b9a5a343422272b/e8f562e2131ba3990b9a5a343422272b.png?w=500" },
  { name: "BLOCKY #3869", tokenId: "3835", src: "https://i2c.seadn.io/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/c3f8d62801ce7a40c1d9e6edf7e15e/b0c3f8d62801ce7a40c1d9e6edf7e15e.png?w=500" },
  { name: "BLOCKY #7015", tokenId: "7071", src: "https://i2c.seadn.io/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/148552983c0ac91533de1185c8ffa2/08148552983c0ac91533de1185c8ffa2.png?w=500" },
  { name: "BLOCKY #8190", tokenId: "8311", src: "https://i2c.seadn.io/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/359abe662ec1476c591ae05b71e04f/a5359abe662ec1476c591ae05b71e04f.png?w=500" },
  { name: "BLOCKY #2120", tokenId: "2288", src: "https://i2c.seadn.io/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/cdd3aa93e54d7d779e5962c640171a/e7cdd3aa93e54d7d779e5962c640171a.png?w=500" },
  { name: "BLOCKY #6594", tokenId: "6485", src: "https://i2c.seadn.io/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/7ba6cc8f616b091bd9da42856621e4/ab7ba6cc8f616b091bd9da42856621e4.png?w=500" },
  { name: "BLOCKY #9486", tokenId: "9443", src: "https://i2c.seadn.io/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/87db7549fb2a7cc7dbb6c8c8f71245/f487db7549fb2a7cc7dbb6c8c8f71245.png?w=500" },
  { name: "BLOCKY #1027", tokenId: "1090", src: "https://i2c.seadn.io/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/a5ce022dbf5706238f97c3a9790210/43a5ce022dbf5706238f97c3a9790210.png?w=500" },
  { name: "BLOCKY #461", tokenId: "483", src: "https://i2c.seadn.io/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/d739b720c67c017f3eaccd6c6b3506/b7d739b720c67c017f3eaccd6c6b3506.png?w=500" },
  { name: "BLOCKY #9879", tokenId: "9850", src: "https://i2c.seadn.io/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/89ffcaf2d0f0ab6adefb2913f64602/c389ffcaf2d0f0ab6adefb2913f64602.png?w=500" },
  { name: "BLOCKY #9907", tokenId: "9863", src: "https://i2c.seadn.io/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/88a3b44a30e1ae7d7a3d40e2abcae8/6f88a3b44a30e1ae7d7a3d40e2abcae8.png?w=500" },
  { name: "BLOCKY #9014", tokenId: "9148", src: "https://i2c.seadn.io/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/b6dce8b978a8480327d125994476ee/98b6dce8b978a8480327d125994476ee.png?w=500" },
  { name: "BLOCKY #8403", tokenId: "8466", src: "https://i2c.seadn.io/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/984b1ba9d3ff188458d9f0428e5765/ca984b1ba9d3ff188458d9f0428e5765.png?w=500" },
  { name: "BLOCKY #6197", tokenId: "6218", src: "https://i2c.seadn.io/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/45b47b1feb108a93dfee8b33dcccea/1c45b47b1feb108a93dfee8b33dcccea.png?w=500" },
  { name: "BLOCKY #3908", tokenId: "3975", src: "https://i2c.seadn.io/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/cee941b3beb0e6d3d8f9e3403604d7/06cee941b3beb0e6d3d8f9e3403604d7.png?w=500" },
  { name: "BLOCKY #4116", tokenId: "4149", src: "https://i2c.seadn.io/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/65d8d0f224a212156e012bf5d20b42/2b65d8d0f224a212156e012bf5d20b42.png?w=500" },
  { name: "BLOCKY #2743", tokenId: "2773", src: "https://i2c.seadn.io/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/11b29227b62dd42510f4d05908d2ae/f811b29227b62dd42510f4d05908d2ae.png?w=500" },
  { name: "BLOCKY #940", tokenId: "889", src: "https://i2c.seadn.io/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/7aaa908385e3dd2f6a0385d5066332/ea7aaa908385e3dd2f6a0385d5066332.png?w=500" },
  { name: "BLOCKY #1955", tokenId: "1893", src: "https://i2c.seadn.io/ethereum/0x37d129c771c621277ad6ed53b12599156ec69ce1/54cd46f4ce4fb5913978d67abc6b09/ee54cd46f4ce4fb5913978d67abc6b09.png?w=500" },
];

export const NFT_ITEMS: NftItem[] = RAW.map((i) => ({
  ...i,
  href: itemUrl(i.tokenId),
}));
