import {GovernmentBuildingsProps, HousesProps} from "common/types/TestsProps.ts";

export const getStreetsTitlesOfGovernmentsBuildings = (buildings: GovernmentBuildingsProps[]) =>
    buildings.map(street => street.address.street.title)
export const getStreetsTitlesOfHouses = (houses: HousesProps[]) =>
    houses.map(house => house.address.street.title);
export const createMessages = (houses: HousesProps[])=>
    houses.map(house => `Hello guys from ${house.address.street.title}`)