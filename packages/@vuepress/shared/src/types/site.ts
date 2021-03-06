import type { HeadConfig } from './head'
import type { LocaleConfig, LocaleData } from './locale'

/**
 * Vuepress site data
 */
export interface SiteData<T extends SiteThemeConfig = SiteThemeConfig>
  extends SiteLocaleData {
  // site base
  base: string

  // locale config
  locales: SiteLocaleConfig

  // theme config
  themeConfig: Partial<T>
}

/**
 * Locales data of vuepress site
 *
 * If they are set in the root of site data, they will be used
 * as the default value
 *
 * If they are set in the `locales` of site data, they will be
 * used for specific locale
 */
export interface SiteLocaleData extends LocaleData {
  // site language
  lang: string

  // site title
  title: string

  // site description
  description: string

  // tags in site <head>
  head: HeadConfig[]
}

/**
 * Site locale config
 *
 * @example
 * {
 *   '/en/': {
 *     lang: 'en-US',
 *     title: 'Hello',
 *   },
 *   '/zh/: {
 *     lang: 'zh-CN',
 *     title: '你好',
 *   }
 * }
 *
 * @remark suffix `Config` means this is for user config
 */
export type SiteLocaleConfig = LocaleConfig<SiteLocaleData>

/**
 * Site theme config
 *
 * @remark suffix `Config` means this is for user config
 */
export type SiteThemeConfig<
  ThemeLocaleData extends LocaleData = LocaleData
> = ThemeLocaleData & {
  locales?: LocaleConfig<ThemeLocaleData>
  [key: string]: any
}
