import { useUserStore } from '../Stores/userStore.js';
import { storeToRefs } from '../Vue/pinia.js';

const getCookie = (name) => {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=')
        return parts[0] === name ? decodeURIComponent(parts[1]) : r
    }, '')
};

const validateSession = () => {

    const { isLogged } = storeToRefs(useUserStore());
    const { updateSession } = useUserStore();
    const tkn = getCookie("ATMDT");
    const data = ParseJwt(tkn);
    if (data !== "") {
        updateSession(true, data);
    } else {
        updateSession(false, null);
    }

    if (!isLogged.value) {
        window.location.href = '/Login';
    }
};

const CancelToken = axios.CancelToken;

const ParseJwt = (token) => {
    try {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    } catch {
        return "";
    }
};

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

const createToast = (icon, message, time) => {
    Toast.fire({
        icon: icon,
        title: `<span style="font-size: 20px;font-weight: 100;">${message}</span>`,
        timer: time,
    })
};

const toReturnPart = (lista) => {
    return {
        "ReturnPartId": 0,
        "Code": null,
        "ReturnPartClave": 0,
        "ReturnType": 0,
        "Customer": cust.AccountNumber,
        "Email": emp.UserName,
        "Phone": cust.PhoneNumber,
        "Agent": emp.UserName,
        "BillToSite": lista[0].BillToSite,
        "ShipToSite": lista[0].ShipToSite,
        "TransactionType": lista[0].TransactionType,
        "Route": null,
        "Status": null,
        "BiName": storeCustomer.BiName,
        "CustAccountId": cust.CustAccountId,
        "PartySiteId": null,
        "SiteUseId": null,
        "ReturnPartItems": lista.map(x => {
            return {
                "ReturnPartItemId": 0,
                "ReturnPartItemClave": 0,
                "ReturnPartID": 0,
                "Invoice": x.invoice,
                "Product": x.ItemNumber,
                "Units": x.Quantity,
                "SalePrice": x.UnitSellingPrice,
                "Assembler": null,
                "Model": null,
                "Year": 0,
                "Engine": null,
                "ReasonReturnPartID": x.reasonId,
                "ReturnPart": null,
                "ReturnPartItemImages": x.images.map(y => {
                    return {
                        "Url": y
                    }
                }),
                "ReasonReturnPart": null,
                "Comments": x.comments,
                "ReasonName": x.ReasonName,
                "OrderNumber": x.CrossReference,
                "Assembler": x.Assembler,
                "Model": x.Model,
                "Year": x.Year,
                "Engine": x.Engine
            }
        })
    };
};

const cascoToReturnPart = (lista) => {
    return {
        "ReturnPartId": 0,
        "Code": null,
        "ReturnPartClave": 0,
        "ReturnType": 0,
        "Customer": cust.AccountNumber,
        "Email": emp.UserName,
        "Phone": cust.PhoneNumber,
        "Agent": emp.UserName,
        "TransactionType": null,
        "ShipToSite": null,
        "BillToSite": null,
        "Route": null,
        "Status": null,
        "BiName": storeCustomer.BiName,
        "CustAccountId": cust.CustAccountId,
        "PartySiteId": null,
        "SiteUseId": null,
        "ReturnPartItems": lista.map(x => {
            return {
                "ReturnPartItemId": 0,
                "ReturnPartItemClave": 0,
                "ReturnPartID": 0,
                "Invoice": x.Invoice == "" || x.Invoice == null ? " " : x.Invoice,
                "Product": x.SKU,
                "Units": x.Quantity,
                "SalePrice": 0,
                "Assembler": null,
                "Model": null,
                "Year": 0,
                "Engine": null,
                "ReasonReturnPartID": 38,
                "ReturnPart": null,
                "ReturnPartItemImages": [],
                "ReasonReturnPart": null,
                "Comments": x.Comments,
                "ReasonName": "Devolución de casco",
                "OrderNumber": x.OrderNumber
            }
        })
    };
};

const isEmptyObject = (item) => {
    return Object.keys(item).length === 0;
};

const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  };

export { validateSession, getCookie, CancelToken, ParseJwt, toReturnPart, cascoToReturnPart, createToast, isEmptyObject, select };