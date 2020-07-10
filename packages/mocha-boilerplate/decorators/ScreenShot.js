import eventEmitter from '../eventBus';
import { screenshot } from 'taiko';
import { result } from 'lodash';

function screenShotOnFailure(target, property, descriptor) {

    let promise;
  await new Promise((resolve, reject) => {
    eventEmitter.on('myEvent', ({ test }) => {
      console.log('Data Received taking screenshot', test.title);
      promise = screenshot({
        path: `${test.title}.png`,
      });
      console.log('Done capturing screenshots!!');
    });

    eventEmitter.on('testEnd', async () => {
      console.log('TestEnd Resolving');
      if (promise) await promise;
      resolve();
    }); // call resolve when its done
    eventEmitter.on('error', reject); // don't forget this
  });
}

export { screenShotOnFailure };
