import {ClientProps} from "common/types/ClientProps.ts";

export const makeHairstyle = (client: ClientProps, power: number) => {
    return {
        ...client,
        hair: client.hair / power
    }
}