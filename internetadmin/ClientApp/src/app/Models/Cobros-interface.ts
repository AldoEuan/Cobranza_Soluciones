
export interface CobrosModel {
    id?: number,
    cliente?: number,
    nombreCliente?:string,
    idAdeudo?: number,
    descripcionPago?: Date,
    importeAdeudo?: number,
    fechaPago?: Date,
    total: number,
    observaciones: string,
    localidad: string,
}
export interface cobrosArray extends Array<CobrosModel> {

}





export interface CobrarModel {
    id?: number,
    fechaPago?: Date,
    total: number,
    observaciones: string,
    localidad: string,
}