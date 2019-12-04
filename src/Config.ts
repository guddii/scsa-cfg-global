import * as settings from "./settings";
import { Application, Orchestrator } from "./components";

export class Config {
  public CURRENT: Application;
  public PARENT: Orchestrator;
  public ORCHESTRATORS: any;
  public APPLICATIONS: any;
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
  constructor(current: string, from: string = "orchestrators", parent: string = "WebComponents") {
    this.SCSA_ENDPOINT_SETTINGS = process.env.SCSA_ENDPOINT_SETTINGS || "development";
    this.ORCHESTRATORS = this.settings().orchestrators;
    this.APPLICATIONS = this.settings().applications;
    this.CURRENT = this.settings()[from][current];
    this.PARENT = this.settings()["orchestrators"][parent];
    this.NODE_ENV = process.env.NODE_ENV || "development";
    this.PORT = process.env.PORT || this.CURRENT.options.url.port || "0";
  }

  settings() {
    return settings[this.SCSA_ENDPOINT_SETTINGS].options;
  }


}
