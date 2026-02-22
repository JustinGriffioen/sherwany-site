export type { Locale } from "./messages"
export { messages, servicesMen, servicesWomen, waxingServices } from "./messages"

export const locales = ["nl", "en"] as const
export const defaultLocale = "nl" as const

export function getMessages(locale: string) {
  return locale === "en" ? require("./messages").messages.en : require("./messages").messages.nl
}
