import { Plugin } from './plugin.js';

export interface MenuPlugin extends Plugin {
  run(): Promise<void>;
}
