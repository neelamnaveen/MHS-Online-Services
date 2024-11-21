export class CreateUserDto {
    readonly role: string;
    readonly email: string;
    readonly password: string;
    readonly contactNumber: string;
}

export class UpdateUserDto {
    readonly role: string;
    readonly email: string;
    readonly password: string;
    readonly contactNumber: string;
}
