export interface IApplicationOptions {
    text: string;
    url?: URL;
}

export class Application {

    public readonly options: IApplicationOptions;

    constructor(options: IApplicationOptions) {
        this.options = options;
    }

}
