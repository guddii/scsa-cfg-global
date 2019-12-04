import * as settings from "./settings";
import { Application, Orchestrator } from "./components";

export class Config {
  public CURRENT: Application;
  public PARENT: Orchestrator;
  public ORCHESTRATORS: any; // Map<String, Orchestrator>;
  public APPLICATIONS: any; // Application;
  public NODE_ENV: string;
  public PORT: string;

  /**
   * Instantiate configuration
   *
   * @param current Selects a configuration from the list of configurations.
   * @param from Use a different object to pick from than the orchestrator object.
   * @param parent
   */
  constructor(current: string, from: string = "orchestrators", parent: string = "WebComponents") {
    this.NODE_ENV = process.env.NODE_ENV || "development";

    const scope: any = settings[this.NODE_ENV].options;
    this.ORCHESTRATORS = scope.orchestrators;
    this.APPLICATIONS = scope.applications;
    this.CURRENT = scope[from][current];
    this.PARENT = scope["orchestrators"][parent];

    this.PORT = process.env.PORT || this.CURRENT.options.url.port || "4010";

  }
}
