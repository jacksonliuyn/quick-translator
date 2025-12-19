/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Target Language - The language to translate to */
  "targetLanguage": "auto" | "english" | "chinese" | "japanese"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `translate` command */
  export type Translate = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `translate` command */
  export type Translate = {}
}

