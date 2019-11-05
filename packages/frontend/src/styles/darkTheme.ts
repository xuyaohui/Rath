import { Spec } from 'vega';
const DarkMarkConfig: any = {
  color: 'rgb(141, 211, 199)',
}

export const DarkTheme = {

}
export const DarkVega: any = {
  background: '#262626',
  config: {
    legend: {
      titleColor: '#d9d9d9',
      labelColor: '#d9d9d9'	
    },
    axis: {
      tickColor: '#8c8c8c',
      labelColor: '#d9d9d9',
      titleColor: '#d9d9d9',
      gridColor: '#595959'
    },
    style: {
      'guide-label': {
        fill: '#d9d9d9'
      },
      'guide-title': {
        fill: '#d9d9d9'
      }
    },
    title: {
      color: '#d9d9d9'
    },
    mark: DarkMarkConfig,
    scale: {
      maxOpacity: 1,
      minOpacity: 0.42,
    },
    range: {
      category: { scheme: 'set3' },
      ramp: { scheme: 'rainbow' } 
    },
  }
}

export const DarkFabric = {
  palette: {
    themePrimary: '#69c0ff',
    themeLighterAlt: '#04080a',
    themeLighter: '#111f29',
    themeLight: '#1f3a4d',
    themeTertiary: '#3f7399',
    themeSecondary: '#5ca9e0',
    themeDarkAlt: '#78c7ff',
    themeDark: '#8dcfff',
    themeDarker: '#abdcff',
    neutralLighterAlt: '#303030',
    neutralLighter: '#383838',
    neutralLight: '#464646',
    neutralQuaternaryAlt: '#4e4e4e',
    neutralQuaternary: '#555555',
    neutralTertiaryAlt: '#727272',
    neutralTertiary: '#fcfcfc',
    neutralSecondary: '#fcfcfc',
    neutralPrimaryAlt: '#fdfdfd',
    neutralPrimary: '#fafafa',
    neutralDark: '#fefefe',
    black: '#fefefe',
    white: '#262626',
  }
}