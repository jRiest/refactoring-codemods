import {resolve, sep} from 'path';
import {defineTest} from 'jscodeshift/dist/testUtils';

const basedir = resolve(__dirname, `..${sep}__testfixtures__`);

const options = {
  prevFilePath: `${basedir}/old/path/to/bar.js`,
  nextFilePath: `${basedir}/new/path/to/bar.js`,
  printOptions: {
    trailingComma: true,
    quote: 'single',
  },
  'inline-single-expressions': true,
};

defineTest(__dirname, 'import-relative-transform', options);