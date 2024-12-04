export class CreateTicketDto {
    readonly email?: string;
    date: string;
    readonly typeOfService: string;
    readonly place?: string;
    readonly comments?: string;
    status?: string;
}

export class UpdateTicketDto {
    readonly email?: string;
    date: string;
    readonly typeOfService: string;
    readonly place?: string;
    readonly comments?: string;
    status?: string;
}
