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
        background: '#ffffff',
        surface: '#f6f6f7',
        primary: '#6AA84F',
        secondary: '#363f43'
    }
};

const myCustomDarkTheme: ThemeDefinition = {
    dark: true,
    colors: {
        background: '#1b1b1f',
        surface: '#202127',
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
