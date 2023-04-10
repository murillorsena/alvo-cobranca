export default interface Usecase {
    execute (): Promise<any>;
}
