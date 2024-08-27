import {ClientProps} from "common/types/ClientProps.ts";

export const makeHairstyle = (client: ClientProps, power: number)=> {
    const copyClient = {...client}
    copyClient.hair /= power

    return copyClient
}