import {changeClientAddress, client, changeLaptop, makeHairstyle} from "common/components/09/09.ts";
import {ClientWithLaptopProps} from "common/types/ClientProps.ts";

test("immutability principle of object", () => {
    const HairstylesClient = makeHairstyle(client, 2)

    expect(client.hair).toBe(32)
    expect(HairstylesClient.hair).toBe(16)
    expect(HairstylesClient.address).toBe(client.address)
})
test("immutability changing 'address' object, which inside the 'client' object", () => {
    const changedAddress = changeClientAddress(client, "Kiev")

    expect(client).not.toBe(changedAddress)
    expect(client.address.city).toBe("Minsk")
    expect(changedAddress.address.city).toBe("Kiev")
})
test("immutability changing 'laptop' object, which inside the 'clientWithLaptop' object", () => {
    let clientWithLaptop: ClientWithLaptopProps = {
        name: client.name,
        hair: client.hair,
        laptop: {
            title: "Asus"
        },
        address: client.address,
    }
    const AnotherClientWithLaptop = changeLaptop(clientWithLaptop,  "macbook Pro 16 M3 MAX")

    expect(clientWithLaptop).not.toBe(AnotherClientWithLaptop)
    expect(AnotherClientWithLaptop.laptop).not.toBe(clientWithLaptop.laptop)
    expect(AnotherClientWithLaptop.address).toBe(clientWithLaptop.address)
    expect(clientWithLaptop.laptop.title).toBe("Asus")
    expect(AnotherClientWithLaptop.laptop.title).toBe("macbook Pro 16 M3 MAX")
})
