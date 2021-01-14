/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface KeyboardDefinitionSchema {
  name: string;
  vendorId: string;
  productId: string;
  lighting?:
    | ('none' | 'qmk_backlight' | 'qmk_rgblight' | 'qmk_backlight_rgblight' | 'wt_rgb_backlight' | 'wt_mono_backlight')
    | {
        extends?: string;
        effects?: [] | [string] | [string, number];
        keycodes?: 'qmk' | 'wt';
        supportedBacklightValues?: number;
      };
  matrix: {
    rows: number;
    cols: number;
  };
  layouts: {
    keymap: (string | KeyOp)[][];
    labels?: string | string[];
  };
}
export interface KeyOp {
  x?: number;
  y?: number;
  c?: string;
  w?: number;
  h?: number;
  r?: number;
  rx?: number;
  ry?: number;
  d?: boolean;
  x2?: number;
  y2?: number;
  w2?: number;
  h2?: number;
  [k: string]: unknown;
}
