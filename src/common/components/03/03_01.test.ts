import {CityProps} from "common/types/TestsProps.ts";
import {addMoneyToBudget, repairHouse, toFireStaff, toHireStaff} from "common/components/03/03_01.ts";

let city: CityProps;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White street"
                    }
                }
            },
            {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: ("Happy street")
                    }
                }
            },
            {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: ("Happy street")
                    }
                }
            }
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 2000,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                type: "FIRE-STATION",
                budget: 50000,
                staffCount: 200,
                address: {
                    street: {
                        title: "South Str"
                    }
                }
            },
        ],
        citizensNumber: 20000000
    }
})

test("The budget should be changed for the HOSPITAL", ()=> {
    expect(city.governmentBuildings[0].budget).toBe(200000);

    addMoneyToBudget(city.governmentBuildings[0],100000)

    expect(city.governmentBuildings[0].budget).toBe(300000);
})
test("The budget should be changed for the FIRE-STATION", ()=> {
    expect(city.governmentBuildings[1].budget).toBe(50000);

    addMoneyToBudget(city.governmentBuildings[1],100000)

    expect(city.governmentBuildings[1].budget).toBe(150000);

    addMoneyToBudget(city.governmentBuildings[1],-10000)

    expect(city.governmentBuildings[1].budget).toBe(140000);
})
test("the houses should be repaired", ()=> {
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[2].repaired).toBe(false);

    repairHouse(city.houses[0]);
    repairHouse(city.houses[1]);
    repairHouse(city.houses[2]);

    expect(city.houses[0].repaired).toBe(true);
    expect(city.houses[1].repaired).toBe(true);
    expect(city.houses[2].repaired).toBe(true);
})
test("the staff should be fired", ()=> {
    expect(city.governmentBuildings[0].staffCount).toBe(2000);
    expect(city.governmentBuildings[1].staffCount).toBe(200);

    toFireStaff(city.governmentBuildings[0], 200)
    toFireStaff(city.governmentBuildings[1], 20)

    expect(city.governmentBuildings[0].staffCount).toBe(1800);
    expect(city.governmentBuildings[1].staffCount).toBe(180);
})
test("the staff should be increased", ()=> {
    expect(city.governmentBuildings[0].staffCount).toBe(2000);
    expect(city.governmentBuildings[1].staffCount).toBe(200);

    toHireStaff(city.governmentBuildings[0], 200)
    toHireStaff(city.governmentBuildings[1], 20)

    expect(city.governmentBuildings[0].staffCount).toBe(2200);
    expect(city.governmentBuildings[1].staffCount).toBe(220);
})