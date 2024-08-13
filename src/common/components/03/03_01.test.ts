import {CityProps} from "common/types/TestsProps.ts";
import {addMoneyToBudget} from "common/components/03/03_01.ts";

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