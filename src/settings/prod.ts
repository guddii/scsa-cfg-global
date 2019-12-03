import { Application, Orchestrator, System } from "../components";

export const prod = new System({
    applications: {
        Account: new Application({
            url: new URL("https://scsa-app-account.herokuapp.com"),
            text: "Account"
        }),
        Catalogue: new Application({
            url: new URL("https://scsa-app-catalogue.herokuapp.com"),
            text: "Catalogue"
        }),
        Checkout: new Application({
            url: new URL("https://scsa-app-checkout.herokuapp.com"),
            text: "Checkout"
        }),
        Sales: new Application({
            url: new URL("https://scsa-app-sales.herokuapp.com"),
            text: "Sales"
        })
    },
    orchestrators: {
        WebComponents: new Orchestrator({
            url: new URL("https://scsa-orc-webcomponent.herokuapp.com"),
            text: "Web Components"
        }),
        iFrame: new Orchestrator({
            url: new URL("https://scsa-orc-iframe.herokuapp.com"),
            text: "iFrame"
        }),
        Compoxure: new Orchestrator({
            url: new URL("https://scsa-orc-compoxure.herokuapp.com"),
            text: "Compoxure"
        })
    }
});
