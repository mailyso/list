import { IconNumber, IconLowerRoman, IconUpperRoman, IconLowerAlpha, IconUpperAlpha } from '../styles/icons/index.js';

export type OlCounterType = 'numeric' | 'upper-roman' | 'lower-roman' | 'upper-alpha' | 'lower-alpha';

/**
 * Enum that represents all of the supported styles of the counters for ordered list
 */
export const OlCounterTypesMap = new Map<string, string>([
  /**
   * Value that represents default arabic numbers for counters
   */
  ['Numeric', 'numeric'],

  /**
   * Value that represents lower roman numbers for counteres
   */
  ['Lower Roman', 'lower-roman'],

  /**
   * Value that represents upper roman numbers for counters
   */
  ['Upper Roman', 'upper-roman'],

  /**
   * Value that represents lower alpha characters for counters
   */
  ['Lower Alpha', 'lower-alpha'],

  /**
   * Value that represents upper alpha characters for counters
   */
  ['Upper Alpha', 'upper-alpha'],
]);

export const OlCounterIconsMap = new Map<string, string>([
  /**
   * Value that represents Icon for Numeric counter type
   */
  ['Numeric', IconNumber],

  /**
   * Value that represents Icon for Lower Roman counter type
   */
  ['Lower Roman', IconLowerRoman],

  /**
   * Value that represents Icon for Upper Roman counter type
   */
  ['Upper Roman', IconUpperRoman],

  /**
   * Value that represents Icon for Lower Alpha counter type
   */
  ['Lower Alpha', IconLowerAlpha],

  /**
   * Value that represents Icon for Upper Alpha counter type
   */
  ['Upper Alpha', IconUpperAlpha],
]);
