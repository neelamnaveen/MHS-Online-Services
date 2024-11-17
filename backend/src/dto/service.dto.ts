export class CreateServiceDto {
    readonly date: string;
    readonly typeOfService: string;
    readonly place: string;
    readonly principle: string;
    readonly interest: string;
    readonly platformId: string;
    readonly lenderUserId: string;
    readonly borrowerUserId: string;
    readonly status: string;
}

export class UpdateServiceDto {
    readonly date: string;
    readonly typeOfService: string;
    readonly place: string;
    readonly principle: string;
    readonly interest: string;
    readonly platformId: string;
    readonly lenderUserId: string;
    readonly borrowerUserId: string;
    readonly status: string;
}
