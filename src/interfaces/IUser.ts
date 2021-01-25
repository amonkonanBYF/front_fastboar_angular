
export interface IUser {
    id?:string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password:string,
    roles:any[],
    dateCreated: Date,
    newletter:boolean,
    ticket?:any[],
    userTicketAsId?:string
    additionalProp1?:any

}

export interface ITicket {
    id:string,
    valeurs: string,
    lots:string,
    createdAT?: Date
    busy:boolean
}