import {GovernmentBuildingsProps} from "common/types/TestsProps.ts";

export const getStreetsTitlesOfGovernmentsBuildings = (buildings: GovernmentBuildingsProps[]) =>
    buildings.map(street => street.address.street.title)