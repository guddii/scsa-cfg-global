import { Application, Orchestrator, System } from "../components";

export const dev = new System({
    applications: {
        Account: new Application({
            url: new URL("http://localhost:3010/"),
            text: "Account"
        }),
        Catalogue: new Application({
            url: new URL("http://localhost:3020/"),
            text: "Catalogue"
        }),
        Checkout: new Application({
            url: new URL("http://localhost:3030/"),
            text: "Checkout"
        }),
        Sales: new Application({
            url: new URL("http://localhost:3040/"),
            text: "Sales"
        })
    },
    orchestrators: {
        WebComponents: new Orchestrator({
            url: new URL("http://localhost:4010/"),
            text: "Web Components"
        }),
        iFrame: new Orchestrator({
            url: new URL("http://localhost:4020/"),
            text: "iFrame"
        }),
        Compoxure: new Orchestrator({
            url: new URL("http://localhost:4030/"),
            text: "Compoxure"
        })
    }
});
