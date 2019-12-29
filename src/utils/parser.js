import gonzales from 'gonzales-pe';

import Formatter from './formatter';
import * as CATEGORIES from './properties';

export const parseCSS = (css = '', spaceStr = '  ') => {
  try {
    const formatter = new Formatter(CATEGORIES);
    const delimiter = gonzales.createNode({ content: ';', type: 'delimiter' });
    const space = gonzales.createNode({ content: spaceStr, type: 'space' });
    const newLine = gonzales.createNode({ content: '\n', type: 'space' });

    let ast = gonzales.parse(css);

    // Traverse the tree, and group each declaration by type
    ast.traverseByType('ruleset', (ruleset, rulesetIndex) => {
      ruleset.traverseByType('block', (block, blockIndex) => {
        block.traverseByType('declaration', (node, nodeIndex) => {
          const nodeName = formatter.getNodeName(node);
          formatter.addNode(node, nodeName, `${rulesetIndex}.${blockIndex}`);
        });
      });
    });

    // Get the result
    const arr = formatter.getNodes();

    // Purge everything under parent then rebuild it
    ast.traverseByType('ruleset', (ruleset, rulesetIndex) => {
      ruleset.traverseByType('block', (block, blockIndex) => {
        block.content = [];
        const childNodes = arr.filter(
          node => node.parentIdentifier === rulesetIndex + '.' + blockIndex
        );
        let position = 0;
        childNodes.forEach((node, index) => {
          block.insert(++position, newLine);
          block.insert(++position, space);
          block.insert(++position, node.node);
          block.insert(++position, delimiter);

          // newline for different type
          if (
            index + 1 < childNodes.length &&
            node.type !== childNodes[index + 1].type
          ) {
            block.insert(++position, newLine);
          }
          // new line for closing brace
          if (index === childNodes.length - 1) {
            block.insert(++position, newLine);
          }
        });
      });
    });
    return ast.toString();
  } catch (e) {
    console.log(e);
    return 'Huh, Something went wrong 🤔\n\nMake sure you wrote valid CSS.\nNote that SASS or LESS format is not supported at the moment.';
  }
};
