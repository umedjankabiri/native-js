import {CityProps, GovernmentBuildingsProps, HousesProps} from "common/types/TestsProps.ts";

export const addMoneyToBudget = (building: GovernmentBuildingsProps, newBudget: number) => {
    return building.budget += newBudget;
}
export const repairHouse = (house: HousesProps) => {
    return house.repaired = true;
}
export const toFireStaff = (employee: GovernmentBuildingsProps, staffToFired: number)=> {
    return employee.staffCount -= staffToFired;
}
export const toHireStaff = (employee: GovernmentBuildingsProps, staffToHire: number)=> {
    return employee.staffCount += staffToHire;
}
export function createMessage(city: CityProps) {
    return `Hello ${city.title} citizens. I want you to be happy. All ${city.citizensNumber} people`
}