import { suite, test } from '@testdeck/mocha';

@suite
class SearchTest {
  @test
  async searchTest() {
    const textSearch = new TextSearch();
    const voiceSearch = new VoiceSearch();
    const strageyManager = new StrategyManager(textSearch);
    strageyManager.doAction();
  }
}

class StrategyManager {
  constructor(strategy) {
    this._strategy = strategy;
  }

  doAction() {
    this._strategy.doAction();
  }
}

class TextSearch {
  doAction() {
    console.log('Text Search....');
  }
}

class VoiceSearch {
  doAction() {
    console.log('Voice Search');
  }
}
