import supportMultipleEntry from './supportMultipleEntry';
import getValidSettings from './getValidSettings';
import { EntryParam } from './types/entry';

function main(params: EntryParam[], keepDefaultEntry?: boolean) {
  const entries = getValidSettings(params);
  const addMultiEntry = supportMultipleEntry(entries, keepDefaultEntry);
  return {
    addMultiEntry
  };
}
export default main;
module.exports = main;
