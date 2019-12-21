import { Application } from "./Application";
import { Orchestrator } from "./Orchestrator";

/**
 * Keys of Applications
 */
export enum ApplicationKeys {
    Account = "Account",
    Catalogue = "Catalogue",
    Checkout = "Checkout",
    Sales = "Sales"
}

/**
 * Keys of Orchestrators
 */
export enum OrchestratorKeys {
    Compoxure = "Compoxure",
    WebComponents = "WebComponents",
    iFrame = "iFrame"
}

type Applications = Record<ApplicationKeys, Application>;
type Orchestrators = Record<OrchestratorKeys, Orchestrator>;

export interface ISystemOptions {
    applications: Applications;
    orchestrators: Orchestrators;
}

export class System {
    public readonly options: ISystemOptions;

    constructor(options: ISystemOptions) {
        this.options = options;
    }
}
