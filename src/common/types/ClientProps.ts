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
export type ClientWithBooksProps = {
    books: string[]
}
export type CompaniesProps = {
    companies: CompanyDefinitionProps[]
}
export type CompanyDefinitionProps = {
    id: number
    name: string
}
export type AssociativeCompanyProps = {
    [key: string]: CompanyDefinitionProps[]
}