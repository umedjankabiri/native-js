/* *** Student props for testing students *** */
export type StudentProps = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressProps
    technologies: TechnologiesProps[]
}
type AddressProps = {
    country: string
    city: CityProps
}
type CityProps = {
    title: string
    street: string
}
type TechnologiesProps = {
    id: number
    title: string
}