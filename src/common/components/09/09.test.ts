import {ClientProps} from "common/types/ClientProps.ts";
import {hairdresser} from "common/components/09/09.ts";

test("", ()=> {
    let client: ClientProps = {
        name: "Dmitry",
        hair: 32,
        address: {title: "Minsk"}
    }

    hairdresser(client, 2)

    expect(client.hair).toBe(16)
})