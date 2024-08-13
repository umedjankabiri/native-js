import {CityProps} from "common/types/TestsProps.ts";
import {
    demolishHousesOnTheStreet,
    getHousesOnTheStreet,
    getStreetsTitlesOfGovernmentsBuildings
} from "common/components/04/04_01.ts";

let city: CityProps;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1,
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
                id: 2,
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
                id: 3,
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
        citizensNumber: 1000000
    }
})

test("The houses should be destroyed", ()=> {
    demolishHousesOnTheStreet(city, "Happy street")

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
})
test("list of street names and government building titles", ()=> {
    let streets = getStreetsTitlesOfGovernmentsBuildings(city.governmentBuildings);

    expect(streets.length).toBe(2);
    expect(streets[0].title).toBe("Central Str");
    expect(streets[1].title).toBe("South Str");
})
test("list of street names and house titles", ()=> {
    const happyHouses = getHousesOnTheStreet(city, "Happy street")
    const whiteHouses = getHousesOnTheStreet(city, "White street")

    expect(happyHouses.length).toBe(2);
    expect(whiteHouses.length).toBe(1);
})