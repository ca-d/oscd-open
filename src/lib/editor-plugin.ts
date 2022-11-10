import { Plugin } from './plugin.js';

export interface EditorPlugin<T> extends Plugin {
  render(): Promise<T> | T;
}
