import { Application, Orchestrator, System } from "../components";

export const dev = new System({
    applications: {
        Account: new Application({
            href: new URL("http://localhost:3010/"),
            text: "Account"
        }),
        Catalogue: new Application({
            href: new URL("http://localhost:3020/"),
            text: "Catalogue"
        }),
        Checkout: new Application({
            href: new URL("http://localhost:3030/"),
            text: "Checkout"
        })
    },
    orchestrators: {
        WebComponents: new Orchestrator({
            href: new URL("http://localhost:4010/"),
            text: "Web Components"
        }),
        iFrame: new Orchestrator({
            href: new URL("http://localhost:4020/"),
            text: "iFrame"
        }),
        Compoxure: new Orchestrator({
            href: new URL("http://localhost:4030/"),
            text: "Compoxure"
        })
    }
});
