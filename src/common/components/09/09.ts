import {ClientProps} from "common/types/ClientProps.ts";

export const hairdresser = (client: ClientProps, power: number)=> {
    client.hair /= power
}