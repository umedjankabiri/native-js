import {
    AssociativeCompanyProps,
    ClientProps,
    ClientWithBooksProps,
    ClientWithLaptopProps,
    CompaniesProps,
    CompanyDefinitionProps
} from "common/types/ClientProps.ts";

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
export const changeClientAddress = (client: ClientProps, city: string) => {
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
export const changeClientHouse = (client: ClientWithLaptopProps, house: number) => {
    return {
        ...client,
        address: {
            ...client.address,
            houseNumber: house
        }
    }
}
export const addBook = (client: ClientWithLaptopProps & ClientWithBooksProps, newBook: string) => {
    return {
        ...client,
        books: [
            ...client.books,
            newBook
        ]
    }
}
export const changeBooks = (client: ClientWithLaptopProps & ClientWithBooksProps, oldBook: string, newBook: string) =>
    ({...client, books: client.books.map(book => book === oldBook ? newBook : book)})
export const removeBook = (client: ClientWithLaptopProps & ClientWithBooksProps, removedBook: string) =>
    ({...client, books: client.books.filter(book => book !== removedBook)})
export const addCompany = (worker: ClientWithLaptopProps & CompaniesProps, newCompany: CompanyDefinitionProps) =>
    ({...worker, companies: [...worker.companies, newCompany]})
export const changeCompanyName = (worker: ClientWithLaptopProps & CompaniesProps, id: number, newName: string) =>
    ({...worker, companies: worker.companies.map(company =>
            company.id === id ? {...company, name: newName} : company)})
export const changeAssociativeCompanyName = (worker: AssociativeCompanyProps, useNameID: string, id: number, newName: string) =>
    ({...worker, [useNameID]: worker[useNameID].map(company => company.id === id ? {...company, name: newName} : company)})
