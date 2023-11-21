export interface ClienteModel
{
    id?: number,
    nombre?: string,
    telefono?: string,
    correo?: string,
    direccion?: string,
    colonia?: string,
    localidad?: string,
    referencia?: string,
    ssid?: string,
    ip?: string,
    estado?: boolean,
    idPlan?: string,
    
}
export interface clientesarray extends Array<ClienteModel>{

}