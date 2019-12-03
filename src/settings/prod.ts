import { Application, Orchestrator, System } from "../components";

export const prod = new System({
    applications: {
        Account: new Application({
            href: new URL("https://scsa-app-account.herokuapp.com"),
            text: "Account"
        }),
        Catalogue: new Application({
            href: new URL("https://scsa-app-catalogue.herokuapp.com"),
            text: "Catalogue"
        }),
        Checkout: new Application({
            href: new URL("https://scsa-app-checkout.herokuapp.com"),
            text: "Checkout"
        })
    },
    orchestrators: {
        WebComponents: new Orchestrator({
            href: new URL("https://scsa-orc-webcomponent.herokuapp.com"),
            text: "Web Components"
        }),
        iFrame: new Orchestrator({
            href: new URL("https://scsa-orc-iframe.herokuapp.com"),
            text: "iFrame"
        }),
        Compoxure: new Orchestrator({
            href: new URL("https://scsa-orc-compoxure.herokuapp.com"),
            text: "Compoxure"
        })
    }
});
