import { createVuetify, ThemeDefinition } from 'vuetify';

import { aliases, mdi } from "vuetify/iconsets/mdi";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as labsComponents from "vuetify/labs/components"

import "@mdi/font/css/materialdesignicons.css"
import "vuetify/styles";

const myCustomLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        // background: '#d2d4d9',
        background: '#eeeeee',
        // surface: '#9fa1a6',
        // surface: '#e1e5e6',
        surface: '#cdcdcd',
        // primary: '#d3d8da',
        // primary: '#15191a',
        // primary: '#15191a',
        // secondary: '#32a852'
        // secondary: '#15191a'
    }
};

const myCustomDarkTheme: ThemeDefinition = {
    dark: true,
    colors: {
        background: '#363636',
        surface: '#2d2d2d',
        primary: '#6AA84F',
        secondary: '#363f43'
    }
};

export default createVuetify({
    components: {
        ...components,
        ...labsComponents
    },
    directives,
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi
        }
    },
    theme: {
        defaultTheme: 'dark',
        themes: {
            light: myCustomLightTheme,
            dark: myCustomDarkTheme
        }
    }
});
