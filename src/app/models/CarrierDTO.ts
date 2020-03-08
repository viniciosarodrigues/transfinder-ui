export class CarrierDTO {
    logo: string = '';
    name: string = '';
    cnpj: string = '';
    number: string = '';
    whatsapp: string = '';
    email: string = '';

    constructor(logo, name, cnpj, number, whatsapp, email) {
        this.logo = logo;
        this.name = name;
        this.cnpj = cnpj;
        this.number = number;
        this.whatsapp = whatsapp;
        this.email = email;
    }
}