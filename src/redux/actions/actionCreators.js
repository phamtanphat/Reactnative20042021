import {ACTION_TYPE_ADD_WORD} from './index';

// function actioncreator
function addWord(newWord) {
  return {type: ACTION_TYPE_ADD_WORD, newWord};
}

export {addWord};
