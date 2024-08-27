import {ClientProps} from "common/types/ClientProps.ts";
import {makeHairstyle} from "common/components/09/09.ts";

test("immutability principle of object", () => {
    let client: ClientProps = {
        name: "Dmitry",
        hair: 32,
        address: {
            title: "Minsk"
        }
    }

    const HairstylesClient = makeHairstyle(client, 2)

    expect(client.hair).toBe(32)
    expect(HairstylesClient.hair).toBe(16)
    expect(HairstylesClient.address).toBe(client.address)
})