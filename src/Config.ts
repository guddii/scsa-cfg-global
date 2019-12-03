import * as settings from "./settings";
import { Application } from "./components";

export class Config {
  public MODE: string;
  public CURRENT: Application;
  public ORCHESTRATORS: any; // Map<String, Orchestrator>;
  public APPLICATIONS: any; // Application;
  public NODE_ENV: string;
  public PORT: string;

  /**
   * Instantiate configuration
   *
   * @param current Selects a configuration from the list of configurations.
   * @param from Use a different object to pick from than the orchestrator object.
   */
  constructor(current: string, from: string = "orchestrators") {
    this.MODE = process.env.MODE || "dev";
    const ConfigByMode: any = settings[this.MODE].options;
    this.ORCHESTRATORS = ConfigByMode.orchestrators;
    this.APPLICATIONS = ConfigByMode.applications;
    this.CURRENT = ConfigByMode[from][current];
    this.NODE_ENV = process.env.NODE_ENV || "development";
    this.PORT = process.env.PORT || this.CURRENT.options.url.port;
  }
}
