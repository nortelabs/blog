import { createTamagui } from 'tamagui'
import { defaultConfig } from '@tamagui/config/v4'

const tamaguiConfig = createTamagui(defaultConfig)

export default tamaguiConfig

export type Conf = typeof tamaguiConfig

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}
