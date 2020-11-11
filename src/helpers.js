export const MAX_TABS = 7;
//  UNPURE
export const tabBase = 'cdx-list--tab_';
export const setLiNumber = (node, curData, index) => {
  // console.log(index, curData.tabs[index], curData.tabs);
  const nodeTab = curData.tabs[index];
  let curTabIndex = index;
  let dispNum = 0;
  while(curData.tabs[curTabIndex] >= nodeTab && curTabIndex >= 0) {
    if(curData.tabs[curTabIndex] === nodeTab) {
      dispNum++;
    }
    curTabIndex--;
  }

  node.style = `list-style-type: "${dispNum}.";`
}
/**
 * set tabs
 * @param elem {element} target to set tabs
 * @param num {number} number of tabs to add
 */
export const setTab = (elem, num) => {
  removeTab(elem);

  elem.classList.add(`${tabBase}${num <= MAX_TABS ? num : MAX_TABS}`);
}

/**
 * get amount of tabs
 * @param elem {element} target element to extract tab count
 * @returns {number}
 */
export const getTabCount = (elem) => {
  const elemClassList = elem.className.split(" ");
  //  clear original tabs
  let tabs = 0;
  elemClassList.forEach(className => {
    if(className.includes(tabBase)) {
      tabs = `${className.charAt(className.length - 1)}`;
    }
  });
  return Number(tabs);
}

/**
 *  remove all tabs
 * @param elem {element} target to remove tabs
 */
export const removeTab = (elem) => {
  const elemClassList = elem.className.split(" ");
  elemClassList.forEach(className => {
    if(className.includes(tabBase)) elem.classList.remove(className);
  });
}

/**
 * Helper for making Elements with attributes
 *
 * @param  {string} tagName           - new Element tag name
 * @param  {Array|string} classNames  - list or name of CSS classname(s)
 * @param  {object} attributes        - any attributes
 * @returns {Element}
 */
export const _make = (tagName, classNames = null, attributes = {}) => {
  const el = document.createElement(tagName);

  if (Array.isArray(classNames)) {
    el.classList.add(...classNames);
  } else if (classNames) {
    el.classList.add(classNames);
  }

  for (const attrName in attributes) {
    el[attrName] = attributes[attrName];
  }

  return el;
}

/**
 * get current focused element
 * @returns {element}
 */
export function getCurrentNode() {
  const node = window.getSelection().getRangeAt(0).commonAncestorContainer;
  return node.nodeType === 1 ? node : node.parentNode;
}