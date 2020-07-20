import logger from '../utils/logger'

export default class ElementChain {
  constructor() {
    this.handler = [];
  }

  add(element) {
    this.handler.push(element);
    return this;
  }

  async findElementsByChain() {
    let currentValue = 0;

    for (let i = 0; i < this.handler.length; i++) {
      let element = await this.handler[i].exists();
      if (element) {
        return this.handler[i];
      } else {
        currentValue++;
        logger.debug('No element found with', JSON.stringify(this.handler[i]._description));
      }
      if (currentValue === this.handler.length) throw new Error('No elements found from the given chaining of locators!');
    }
  }
}