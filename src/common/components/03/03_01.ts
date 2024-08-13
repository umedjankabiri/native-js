import {GovernmentBuildingsProps, HousesProps} from "common/types/TestsProps.ts";

export const addMoneyToBudget = (building: GovernmentBuildingsProps, newBudget: number) => {
    return building.budget += newBudget;
}
export const repairHouse = (house: HousesProps) => {
    return house.repaired = true;
}