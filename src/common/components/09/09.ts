import {ClientProps, ClientWithLaptopProps} from "common/types/ClientProps.ts";

export const client: ClientProps = {
    name: "Dmitry",
    hair: 32,
    address: {
        city: "Minsk"
    }
}
export const makeHairstyle = (client: ClientProps, power: number) => {
    return {
        ...client,
        hair: client.hair / power
    }
}
export const changeClientAddress = (client: ClientProps, city: string)=> {
    return {
        ...client,
        address: {
            ...client.address,
            city: city
        }
    }
}
export const changeLaptop = (client: ClientWithLaptopProps, laptop: string) => {
    return {
        ...client,
        laptop: {
            ...client.laptop,
            title: laptop
        }
    }
}
export const changeClientHouse = (client: ClientWithLaptopProps, house: number)=> {
    return {
        ...client,
        address: {
            ...client.address,
            houseNumber: house
        }
    }
}