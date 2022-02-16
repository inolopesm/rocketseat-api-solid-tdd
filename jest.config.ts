import { Config } from '@jest/types'

const config: Config.InitialOptions = {
  clearMocks: true,
  coverageProvider: 'v8',
  preset: 'ts-jest',
}

export default config
