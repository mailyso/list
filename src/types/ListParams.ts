import type { ChecklistItemMeta, OrderedListItemMeta, UnorderedListItemMeta } from './ItemMeta';
import type { OlCounterType } from './OlCounterType';

/**
 * list style to make list as ordered or unordered
 */
export type NestedListDataStyle = 'ordered' | 'unordered' | 'checklist';

/**
 * Interface that represents data of the Nested List tool
 */
export interface ListData {
  /**
   * list type 'ordered' or 'unordered' or 'checklist'
   */
  style: NestedListDataStyle;
  /**
   * list of first-level elements
   */
  items: ListItem[];
  /**
   * Max level of the nesting in list
   * If nesting is not needed, it could be set to 1
   */
  maxLevel?: number;
  /**
   * Start property used only in ordered list
   */
  start?: number;
  /**
   * Counters type used only in ordered list
   */
  counterType?: OlCounterType;
}

/**
 * Interface that represents data of the List tool
 */
export interface OldListData {
  /**
   * Style of the List tool
   */
  style: 'ordered' | 'unordered';
  /**
   * Array of items of the List tool
   */
  items: string[];
}

/**
 * List item within the output data
 */
export interface ListItem {
  /**
   * list item text content
   */
  content: string;

  /**
   * Meta information of each list item
   */
  meta: OrderedListItemMeta | UnorderedListItemMeta | ChecklistItemMeta;

  /**
   * sublist items
   */
  items: ListItem[];
}

/**
 * Tool's configuration
 */
export interface NestedListConfig {
  /**
   * default list style: ordered or unordered
   * default is unordered
   */
  defaultStyle?: NestedListDataStyle;
}
