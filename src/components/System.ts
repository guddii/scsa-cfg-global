import { Application } from "./Application";
import { Orchestrator } from "./Orchestrator";

export interface ISCSAConfigurationOptions {
    applications: object;
    orchestrators: object;
}

export class System {
    public readonly options: ISCSAConfigurationOptions;

    constructor(options: ISCSAConfigurationOptions) {
        this.options = options;
    }
}
