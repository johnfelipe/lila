import view from './view';

import { init } from 'snabbdom';
import { VNode } from 'snabbdom/vnode'
import klass from 'snabbdom/modules/class';
import attributes from 'snabbdom/modules/attributes';

import { Tournament, Ctrl } from './interfaces'

const patch = init([klass, attributes]);

export function app(element: HTMLElement, env: any) {

  let vnode: VNode, ctrl: Ctrl = {
    data: env.data,
    trans: window.lichess.trans(env.i18n)
  };

  function redraw() {
    vnode = patch(vnode || element, view(ctrl));
  }

  redraw();
};