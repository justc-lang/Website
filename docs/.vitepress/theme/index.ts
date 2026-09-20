import DefaultTheme from 'vitepress/theme-without-fonts';
import type { Theme } from 'vitepress';

import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import '@shikijs/vitepress-twoslash/style.css'

import './style.css';
import './fonts.css';

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.use(TwoslashFloatingVue);
    }
} satisfies Theme;
