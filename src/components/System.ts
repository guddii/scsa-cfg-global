export interface SystemOptions {
    applications: object;
    orchestrators: object;
}

export class System {
    public readonly options: SystemOptions;

    constructor(options: SystemOptions) {
        this.options = options;
    }
}
