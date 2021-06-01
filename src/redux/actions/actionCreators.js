import {
  ACTION_TYPE_ADD_WORD,
  ACTION_TYPE_TOGGLE_WORD,
  ACTION_TYPE_REMOVE_WORD,
  ACTION_TYPE_SET_FILTER_MODE,
} from './index';

// function actioncreator
function addWord(newWord) {
  return {type: ACTION_TYPE_ADD_WORD, newWord};
}

function setFilterMode(filterMode) {
  return {type: ACTION_TYPE_SET_FILTER_MODE, filterMode};
}

function toggleWord(word) {
  return {type: ACTION_TYPE_TOGGLE_WORD, word};
}
function removeWord(word) {
  return {type: ACTION_TYPE_REMOVE_WORD, word};
}

export { addWord, setFilterMode, toggleWord, removeWord};
