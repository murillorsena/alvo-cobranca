import { AuthServiceHttp } from "./services";
import { Router } from "vue-router";
import "pinia";

declare module "pinia" {
    export interface PiniaCustomProperties {
        authService: AuthServiceHttp;
        router: Router;
    }
}
