export class CreateTicketDto {
    readonly date: string;
    readonly typeOfService: string;
    readonly place: string;
    readonly comments: string;
}

export class UpdateTicketDto {
    readonly date: string;
    readonly typeOfService: string;
    readonly place: string;
    readonly comments: string;
}
