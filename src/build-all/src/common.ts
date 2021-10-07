import { createElement } from 'react';
import ReactDOM from 'react-dom';


export function innerHTML(divId: string, element: any) {
  const domContainer = document.querySelector(divId);
  const e = createElement;
  return ReactDOM.render(e(element), domContainer);
}