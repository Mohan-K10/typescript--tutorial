
function getChai(kind: string | number) {
    if (typeof kind === "string") {
        return `Making ${kind} chai`
    }

    return `Making default chai ${kind}`
}

function serveChai(msg? :string) {
    if(msg) {
        return `Serving ${msg}`
    }

    return `Serving default chai`
}

function orderChai(size: "Small" | "Medium" | "Large" | number) {
    if(size === "Small") {
        return `chai small size`
    }
    if (size === "Large" || size == "Medium") {
        return `Extra chai serve`
    }

    return `chai custom size ${size}`
}

// created two classes with same function name
class shikai {
    launch() {
        return `Using shikai in battle`
    }
}

class bankai {
    launch() {
        return `using Bankai in battle`
    }
}

// object powertype is used for both classes 
function fight(powertype: shikai | bankai) {
    // instanceof confirms inheritance of function
    // if powertype is using shikai then use launch function from shikai class
    if(powertype instanceof shikai) {
        return powertype.launch()
    }
     // if powertype is using bankai then use launch function from bankai class
    if(powertype instanceof bankai) {
        return powertype.launch()
    }
}
// chiaOrder consists of type and sugar with followinf datatype declared
type chaiOrder = {
    type: string,
    sugar: number
}

// the obj in parameter is any type and obj inherited the properties from the object chaiOrder which is type and sugar with its following data types
function isChaiOrder(obj: any): obj is chaiOrder {
    // adding the guard(true or false) function
    return (
        typeof obj === "object" && obj != null && typeof obj.type === "string" && typeof obj.sugar === "number"
    )
}
// item in parameter follows chaiOrder(type, sugar with its datatypes)
function serverOrder(item: chaiOrder | string) {
    // applying the guard isChaiOrder
    if(isChaiOrder(item)) {
        // Now the datatype can be confirmed 
        return `Serving ${item.type} with ${item.sugar}`
    }
    // if the item is not from the following datatypes from the chai Order then this statment returns
    return `custom chai serve: ${item}`
}


type masalachai = {type: "masalachai", spicelevel: number};
type gingerchai = {type: "gingerchai", amount: number}
type lemonchai = {type: "lemonchai", aroma: number}

type chai = masalachai | gingerchai | lemonchai

function makechai(order: chai) {
    switch (
        order.type
    ) {
        case "masalachai":
            return `making masala chai`
            break;
        case "gingerchai":
            return `making ginger chai`
            break;
        case "lemonchai":
            return `making lemon chai`
            break;
    }
}