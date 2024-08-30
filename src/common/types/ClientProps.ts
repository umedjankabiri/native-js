export type ClientProps = {
    name: string;
    hair: number
    address: ClientAddressProps
}

type ClientAddressProps = {
    city: string
    houseNumber?: number
}
export type ClientWithLaptopProps = ClientProps & {
    laptop: LaptopProps
}
type LaptopProps = {
    title: string
}
export type ClientWithBooks = {
    books: string[]
}