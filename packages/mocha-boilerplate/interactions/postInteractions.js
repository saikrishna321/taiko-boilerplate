import FlowManager from '../flows/FlowManager';

let runner;
export default new (class PostInteractions {
  constructor() {
    runner = new FlowManager();
  }
  async deletePost(title) {
    await runner.deletePost(title);
  }
})();
