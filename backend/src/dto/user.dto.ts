export class CreateUserDto {
    readonly name: string;
    readonly emailId: string;
    readonly password: string;
    readonly contactNumber: string;
    readonly userSecret: string;
    readonly platformId: string;
    readonly DOB: string;
    readonly organization: string;
}

export class UpdateUserDto {
    readonly name: string;
    readonly emailId: string;
    readonly password: string;
    readonly contactNumber: string;
    readonly userSecret: string;
    readonly platformId: string;
    readonly DOB: string;
    readonly organization: string;
}
