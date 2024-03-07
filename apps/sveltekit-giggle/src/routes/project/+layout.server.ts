import type { LayoutServerLoad, LayoutServerLoadEvent } from "./$types";


export const load: LayoutServerLoad = (event: LayoutServerLoadEvent) => {
    return {
        topic: "Some topic"
    }
};