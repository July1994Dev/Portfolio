const PartStatus = [
    {
        Name: "Todos",
        Description: "Todos",
        Value: 0
    },
    {
        Name: "Registrado",
        Description: "Registrado",
        Value: 1,
    },
    {
        Name: "NoRecolectado",
        Description: "No Recolectado",
        Value: 2,
    },
    {
        Name: "Recoleccion",
        Description: "Recoleccion",
        Value: 3,
    },
    {
        Name: "Recolectado",
        Description: "Recolectado",
        Value: 4,
    },
    {
        Name: "Aprobado",
        Description: "Aprobado",
        Value: 5,
    },
    {
        Name: "Rechazado",
        Description: "Rechazado",
        Value: 6,
    },
];

const RMAStatus = [
    {
        Name:"open",
        Class:"primary"
    },
    {
        Name:"processing",
        Class:"info"
    },
    {
        Name:"espera de recepcion",
        Class:"warning"
    },
    {
        Name:"recibida",
        Class:"success"
    },
    {
        Name:"facturada",
        Class:"success"
    },
    {
        Name:"cerrada",
        Class:"secondary"
    }
];

export { PartStatus, RMAStatus };