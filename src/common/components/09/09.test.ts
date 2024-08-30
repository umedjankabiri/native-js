import {
    addBook, changeBooks,
    changeClientAddress,
    changeClientHouse,
    changeLaptop,
    client,
    makeHairstyle, removeBook, addCompany, changeCompanyName
} from "common/components/09/09.ts";
import {
    ClientWithBooksProps,
    ClientWithLaptopProps,
    CompaniesProps,
    CompanyDefinitionProps
} from "common/types/ClientProps.ts";

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
test("immutability changing 'address' object, which inside the 'clientWithNewHouse' object", () => {
    let clientWithNewHouse: ClientWithLaptopProps = {
        name: client.name,
        hair: client.hair,
        laptop: {
            title: "Asus"
        },
        address: client.address,
    }
    const AnotherClientWithNewHouse = changeClientHouse(clientWithNewHouse, 99)

    expect(clientWithNewHouse).not.toBe(AnotherClientWithNewHouse)
    expect(AnotherClientWithNewHouse.address).not.toBe(clientWithNewHouse.address)
    expect(AnotherClientWithNewHouse.laptop).toBe(clientWithNewHouse.laptop)
    expect(AnotherClientWithNewHouse.address.houseNumber).toBe(99)
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
    const AnotherClientWithLaptop = changeLaptop(clientWithLaptop, "macbook Pro 16 M3 MAX")

    expect(clientWithLaptop).not.toBe(AnotherClientWithLaptop)
    expect(AnotherClientWithLaptop.laptop).not.toBe(clientWithLaptop.laptop)
    expect(AnotherClientWithLaptop.address).toBe(clientWithLaptop.address)
    expect(clientWithLaptop.laptop.title).toBe("Asus")
    expect(AnotherClientWithLaptop.laptop.title).toBe("macbook Pro 16 M3 MAX")
})
test("immutability adding 'book' to array 'books', which inside the 'clientWithBook' object", () => {
    let clientWithBook: ClientWithLaptopProps & ClientWithBooksProps = {
        name: client.name,
        hair: client.hair,
        laptop: {
            title: "Asus"
        },
        address: client.address,
        books: ["HTML", "CSS", "JS", "REACT"]
    }
    const AnotherClientWithBook = addBook(clientWithBook, "Typescript")

    expect(clientWithBook).not.toBe(AnotherClientWithBook)
    expect(AnotherClientWithBook.laptop).toBe(clientWithBook.laptop)
    expect(AnotherClientWithBook.address).toBe(clientWithBook.address)
    expect(AnotherClientWithBook.books[4]).toBe('Typescript')
    expect(AnotherClientWithBook.books.length).toBe(5)
})
test("immutability changing 'books' array, which inside the 'clientWithLaptop' object", () => {
    let clientWithBooks: ClientWithLaptopProps & ClientWithBooksProps = {
        name: client.name,
        hair: client.hair,
        laptop: {
            title: "Asus"
        },
        address: client.address,
        books: ["HTML", "CSS", "JS", "REACT", "Typescript", "Redux"]
    }
    let AnotherClientWithBooks = addBook(clientWithBooks, "Redux")

    expect(AnotherClientWithBooks.books[5]).toBe('Redux')
    AnotherClientWithBooks = changeBooks(clientWithBooks, "Redux", "RTK Query")

    expect(clientWithBooks).not.toBe(AnotherClientWithBooks)
    expect(AnotherClientWithBooks.laptop).toBe(clientWithBooks.laptop)
    expect(AnotherClientWithBooks.address).toBe(clientWithBooks.address)
    expect(AnotherClientWithBooks.books[4]).toBe('Typescript')
    expect(AnotherClientWithBooks.books[5]).toBe('RTK Query')
    expect(AnotherClientWithBooks.books.length).toBe(6)
})
test("immutability removing from 'book' array, which inside the 'clientWithBooks' object", () => {
    let clientWithBooks: ClientWithLaptopProps & ClientWithBooksProps = {
        name: client.name,
        hair: client.hair,
        laptop: {
            title: "Asus"
        },
        address: client.address,
        books: ["HTML", "CSS", "JS", "REACT", "Typescript", "Redux"]
    }
    let AnotherClientWithBooks = removeBook(clientWithBooks, "Redux")

    expect(clientWithBooks).not.toBe(AnotherClientWithBooks)
    expect(AnotherClientWithBooks.laptop).toBe(clientWithBooks.laptop)
    expect(AnotherClientWithBooks.address).toBe(clientWithBooks.address)
    expect(AnotherClientWithBooks.books).toStrictEqual(["HTML", "CSS", "JS", "REACT", "Typescript"])
    expect(clientWithBooks.books).toStrictEqual(["HTML", "CSS", "JS", "REACT", "Typescript", "Redux"])
    expect(AnotherClientWithBooks.books.length).toBe(5)
    expect(clientWithBooks.books.length).toBe(6)
})
test("immutability adding 'companies' array, which inside the 'workerInNewCompany' object", () => {
    let workerInNewCompany: ClientWithLaptopProps & CompaniesProps = {
        name: client.name,
        hair: client.hair,
        laptop: {
            title: "Asus"
        },
        address: client.address,
        companies: [{id: 1, name: "GSM Planet"}, {id: 2, name: "Karpan"}]
    }
    let newCompany: CompanyDefinitionProps = {id: 3, name: "Yavuzlar"}
    let AnotherWorkerInNewCompany = addCompany(workerInNewCompany, newCompany)

    expect(workerInNewCompany).not.toBe(AnotherWorkerInNewCompany)
    expect(AnotherWorkerInNewCompany.laptop).toBe(workerInNewCompany.laptop)
    expect(AnotherWorkerInNewCompany.address).toBe(workerInNewCompany.address)
    expect(workerInNewCompany.companies).not.toBe(AnotherWorkerInNewCompany.companies)
    expect(AnotherWorkerInNewCompany.companies[2]).toStrictEqual({id: 3, name: "Yavuzlar"})
    expect(AnotherWorkerInNewCompany.companies.length).toBe(3)
})
test("immutability changing name inside of 'companies' array, which inside the 'workerInNewCompany' object", () => {
    let workerInNewCompany: ClientWithLaptopProps & CompaniesProps = {
        name: client.name,
        hair: client.hair,
        laptop: {
            title: "Asus"
        },
        address: client.address,
        companies: [{id: 1, name: "GSM Planet"}, {id: 2, name: "Karpan"}, {id: 3, name: "Yavuzlar"}]
    }
    let AnotherWorkerInNewCompany = changeCompanyName(workerInNewCompany, 1, "Planeta GSM")

    expect(workerInNewCompany).not.toBe(AnotherWorkerInNewCompany)
    expect(AnotherWorkerInNewCompany.laptop).toBe(workerInNewCompany.laptop)
    expect(AnotherWorkerInNewCompany.address).toBe(workerInNewCompany.address)
    expect(workerInNewCompany.companies).not.toBe(AnotherWorkerInNewCompany.companies)
    expect(AnotherWorkerInNewCompany.companies[0].name).toBe("Planeta GSM")
    expect(AnotherWorkerInNewCompany.companies.length).toBe(3)
})
