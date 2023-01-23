import { createPopper } from "popper.js";

const popcorn = document.querySelector('#popcorn');
const tooltip = document.querySelector('#tooltip');

createPopper(popcorn, tooltip, {
  placement: 'right',
});
