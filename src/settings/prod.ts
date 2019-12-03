import { Application, Orchestrator, System } from "../components";

export const prod = new System({
    applications: new Map<string, Application>()
        .set(
            "Account",
            new Application({
                href: new URL("https://scsa-app-account.herokuapp.com"),
                text: "Account"
            })
        )
        .set(
            "Catalogue",
            new Application({
                href: new URL("https://scsa-app-catalogue.herokuapp.com"),
                text: "Catalogue"
            })
        )
        .set(
            "Checkout",
            new Application({
                href: new URL("https://scsa-app-checkout.herokuapp.com"),
                text: "Checkout"
            })
        ),
    orchestrators: new Map<string, Orchestrator>()
        .set(
            "WebComponents",
            new Orchestrator({
                href: new URL("https://scsa-orc-webcomponent.herokuapp.com"),
                text: "Web Components"
            })
        )
        .set(
            "iFrame",
            new Orchestrator({
                href: new URL("https://scsa-orc-iframe.herokuapp.com"),
                text: "iFrame"
            })
        )
        .set(
            "Compoxure",
            new Orchestrator({
                href: new URL("https://scsa-orc-compoxure.herokuapp.com"),
                text: "Compoxure"
            })
        )
});
