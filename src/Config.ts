import * as settings from "./settings";
import { Application } from "./components";

const convert = (map: any) =>
  Array.from(map).reduce((obj, [key, value]) => {
    // @ts-ignore
    obj[key] = value;
    return obj;
  }, {});

export class Config {
  public MODE: string;
  public CURRENT: Application;
  public ORCHESTRATORS: any; // Map<String, Orchestrator>;
  public APPLICATIONS: any; // Application;
  public NODE_ENV: string;
  public PORT: string;

  constructor(current: string) {
    this.MODE = process.env.MODE || "dev";
    const ConfigByMode: any = settings[this.MODE].options;
    this.ORCHESTRATORS = ConfigByMode.orchestrators;
    this.APPLICATIONS = ConfigByMode.applications;
    this.CURRENT = ConfigByMode.orchestrators[current];
    this.NODE_ENV = process.env.NODE_ENV || "development";
    this.PORT = process.env.PORT || this.CURRENT.options.url.port;
  }
}
