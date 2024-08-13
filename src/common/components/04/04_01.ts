import {CityProps} from "common/types/TestsProps.ts";

export const demolishHousesOnTheStreet = (city: CityProps, street: string) =>
    city.houses = city.houses.filter(house => house.address.street.title !== street)