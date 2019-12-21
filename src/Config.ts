import {
    Application,
    Applications,
    Orchestrator,
    Orchestrators
} from "./components";
import * as settings from "./settings";

export class Config {
    public KEY: any;
    public CURRENT: Application;
    public PARENT: Orchestrator;
    public ORCHESTRATORS: Orchestrators;
    public APPLICATIONS: Applications;
    public NODE_ENV: string;
    public PORT: string;
    public SCSA_ENDPOINT_SETTINGS: string;

    /**
     * Instantiate configuration
     *
     * @param current Selects a configuration from the list of configurations.
     * @param from Use a different object to pick from than the orchestrator object.
     * @param parent Parent of a Self-contained System.
     */
    constructor(
        current: any,
        from: string = "orchestrators",
        parent: string = "WebComponents"
    ) {
        this.KEY = current;
        this.SCSA_ENDPOINT_SETTINGS =
            process.env.SCSA_ENDPOINT_SETTINGS || "development";
        this.ORCHESTRATORS = this.settings().orchestrators;
        this.APPLICATIONS = this.settings().applications;
        this.CURRENT = this.settings()[from][current];
        this.PARENT = this.settings().orchestrators[parent];
        this.NODE_ENV = process.env.NODE_ENV || "development";
        this.PORT = process.env.PORT || this.CURRENT.options.url.port || "0";
    }

    public settings() {
        return settings[this.SCSA_ENDPOINT_SETTINGS].options;
    }

    public endpoints() {
        return { ...this.APPLICATIONS, ...this.ORCHESTRATORS };
    }
}
