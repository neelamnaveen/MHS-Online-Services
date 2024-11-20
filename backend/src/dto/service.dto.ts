export class CreateServiceDto {
    readonly date: string;
    readonly typeOfService: string;
    readonly place: string;
    readonly status: string;
    readonly image: string;
}

export class UpdateServiceDto {
    readonly date: string;
    readonly typeOfService: string;
    readonly place: string;
    readonly status: string;
}
