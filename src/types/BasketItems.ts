export interface BasketItems {
  mainId: number;
  displayName: string;
  finalPrice: number | undefined;
  quantity?: number;
  displayDescription?: string;
  price?: Price;
  displayAssets?: DisplayAsset[];
}

export interface Price {
  finalPrice: number;
}

export interface DisplayAsset {
  full_background: string;
}
