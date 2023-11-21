export interface TicketModel{
    
    id?: number,
    fecha: Date,
    idAdeudo?: number,
    idCobros?: number,
    cliente?: number,
    localidad?:string,
    fechaVencimiento?: Date,
    descripcion?: Date,
    total?: number,
    nombreCliente?:string;
    telefonoCliente?:string;
    nombreplan?:string;
    }
    export interface Ticketsarray extends Array<TicketModel>{

    }