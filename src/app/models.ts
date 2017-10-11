export interface Advertisement {
  id: number;
  advertisementType: AdvertisementType;
  cityID: number;
  city: City;
  address: string;
  price: number;
  size: number;
  room: number;
  halfRoom: number;
  buildDate: number;
  description: string;
  imageUrl: string;
}

export enum AdvertisementType {
  flat = 0,
  house = 1,
  holidayHouse = 2,
  buildingPlot = 3
}

export interface City {
  id: number;
  zip: string;
  name: string;
}

export class Filter {
  cityId?: number;
  cityName?: string;
  priceMin?: number;
  priceMax?: number;

  sizeMin?: number;
  sizeMax?: number;

  roomMin?: number;
  roomMax?: number;

  page?: number;
  pageSize?: number;
}
