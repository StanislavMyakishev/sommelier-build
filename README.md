# SOMMELIER

Sommelier is a React-Native UI library made for WineUp.

## Installation

Before the start, install all dependencies:

```bash
yarn install
```

Also, download the **Expo** app from [Google play](https://play.google.com/store/apps/details?id=host.exp.exponent)/[App store](https://apps.apple.com/ru/app/expo-client/id982107779).

You could easily use it with a terminal or an emulator.

### Usage

- Add Sommelier to your project: `yarn add sommelier`

- Import components that you want to use, for example:

```typescript
import React from 'react'
import { View } from 'react-native'

import theme from 'sommelier/App/theme'
import { ThemeProvider } from 'styled-components'

import { H1 } from 'sommelier/App/components/Typography'
import Box from 'sommelier/App/components/Box'

// Use them in your Expo project, for example:
export default function App() {
  return (
    <View>
      <ThemeProvider theme={theme}>
        <Box borderRadius={10} backgroundColor="grayBackground" m={5}>
          <H1 fontFamily="PtSans" color="black">
            ABC
          </H1>
          <H1 fontFamily="PtSans" color="black" bold italic>
            ABC
          </H1>
        </Box>
      </ThemeProvider>
    </View>
  )
}
```