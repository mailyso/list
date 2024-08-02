import { NestedListConfig } from "../types/listParams";
import * as Dom from '../utils/dom';
import { ListRenderer } from './listRenderer';

/**
 * Class that is responsible for ordered list rendering
 */
export class OrderedListRenderer extends ListRenderer {
  /**
   * Tool's configuration
   */
  protected config?: NestedListConfig;

  readOnly: boolean;

  constructor(readonly: boolean, config?: NestedListConfig) {
    super();
    this.config = config;
    this.readOnly = readonly;
  }

  /**
   * Renders ol wrapper for list
   * @param classes -
   * @returns - created html ol element
   */
  renderWrapper(classes: string[] = []): HTMLOListElement {
    classes.push(ListRenderer.CSS.wrapperOrdered);

    return Dom.make('ol', [ListRenderer.CSS.wrapper, ...classes]) as HTMLOListElement;
  }

  renderSublistWrapper(): HTMLElement {
    const divElement = Dom.make('ol', [ListRenderer.CSS.wrapperOrdered, ListRenderer.CSS.itemChildren]) as HTMLElement;

    return divElement;
  }

  /**
   * Redners list item element
   * @param content - content of the list item
   * @returns - created html list item element
   */
  renderItem(content: string): HTMLLIElement {
    const itemWrapper = Dom.make('li', ListRenderer.CSS.item);
    const itemBody = Dom.make('div', ListRenderer.CSS.itemBody);
    const itemContent = Dom.make('div', ListRenderer.CSS.itemContent, {
      innerHTML: content,
      contentEditable: (!this.readOnly).toString(),
    });

    itemBody.appendChild(itemContent);
    itemWrapper.appendChild(itemBody);

    return itemWrapper as HTMLLIElement;
  }

  /**
   * Return the item content
   *
   * @param {Element} item - item wrapper (<li>)
   * @returns {string}
   */
  getItemContent(item: Element): string {
    const contentNode = item.querySelector(`.${ListRenderer.CSS.itemContent}`);
    if (!contentNode) {
      return '';
    }

    if (Dom.isEmpty(contentNode)) {
      return '';
    }

    return contentNode.innerHTML;
  }
}
