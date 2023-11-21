 
export interface AdeudoModel
{
    id: number,
    idCliente?: number,
    fechaVencimiento?: Date,
    descripcion?: Date,
    importe?: number,
    idCobros?: number,
    importeCobrado?: number,
    fechaCobro?: Date,
    saldo?: number,
    ClienteNombre?:string,
    status?: boolean,
}
export interface adeudoarray extends Array<AdeudoModel>{

}