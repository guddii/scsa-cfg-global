export interface ApplicationOptions {
    text: string;
    url?: URL;
}

export class Application {

    public readonly options: ApplicationOptions;

    constructor(options: ApplicationOptions) {
        this.options = options;
    }

}
