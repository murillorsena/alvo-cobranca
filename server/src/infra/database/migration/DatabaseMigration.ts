export interface DatabaseMigration {
    up (): Promise<void>;
    down (): Promise<void>;
}
