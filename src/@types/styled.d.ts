import 'styled-components'
import { defaultTheme } from '@theme/index'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  type ThemeType = typeof defaultTheme

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
