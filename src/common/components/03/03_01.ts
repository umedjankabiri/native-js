import {GovernmentBuildingsProps} from "common/types/TestsProps.ts";

export const addMoneyToBudget = (building: GovernmentBuildingsProps, newBudget: number) => {
    return building.budget += newBudget;
}