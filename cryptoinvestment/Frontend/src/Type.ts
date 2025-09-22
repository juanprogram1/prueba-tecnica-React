export interface ChartComponentProps {
  data?: { time: string; value: number }[];
  colors?: {
    backgroundColor?: string;
    lineColor?: string;
    textColor?: string;
    areaTopColor?: string;
    areaBottomColor?: string;
  };
}

export interface CryptoData {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  tags: string[];
  maxSupply: number;
  circulatingSupply: number;
  totalSupply: number;
  platform: string;
  cmcRank: number;
  dateAdded: string;
  dateUpdated: string;
  lastUpdated: string;
  quote: {
    USD: {
      price: number;
      volume_24h: number;
      market_cap: number;
      percent_change_1h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      last_updated: string;
    };
  };
}
