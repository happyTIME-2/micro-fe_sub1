declare namespace Apps {
  export interface App {
    name: string;
    entry: string | string[];
    fetch?: (url: string) => Promise<any>;
    container: string;
    activeRule: string;
  }
}