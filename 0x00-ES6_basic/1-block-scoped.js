// taskBlock.js
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    (function taskFunction() {
      const task = true; // eslint-disable-line no-unused-vars
      const task2 = false; // eslint-disable-line no-unused-vars
      // Variables task and task2 inside this function are scoped to this block
    }());
  }

  return [task, task2];
}
