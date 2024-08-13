export type StudentProps = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressProps
    technologies: string[]
}
type AddressProps = {
    country: string
    city: string
}