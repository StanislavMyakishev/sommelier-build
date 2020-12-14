import 'styled-components';
import { headerSizes } from './headerSizes';
import { boxSizes } from './boxSizes';
import { colors } from './Colors';
import { borderStyles } from './borderStyles';
import { fontSizes } from './FontSizes';
import {
  inputSearchSizes,
  searchSizes,
  inputSearchFontSizes,
} from './inputSearchSizes';

declare module 'styled-components' {
  export interface DefaultTheme {
    headerSizes: typeof headerSizes;
    boxSizes: typeof boxSizes;
    colors: typeof colors;
    fontSizes: typeof fontSizes;
    borderStyles: typeof borderStyles;
    inputSearchSizes: typeof inputSearchSizes;
    searchSizes: typeof searchSizes;
    inputSearchFontSizes: typeof inputSearchFontSizes;
  }
}
