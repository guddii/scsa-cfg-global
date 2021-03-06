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
    Nodesi = "Nodesi",
    WebComponents = "WebComponents",
    iFrame = "iFrame"
}

export type Applications = Record<ApplicationKeys, Application>;
export type Orchestrators = Record<OrchestratorKeys, Orchestrator>;

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
