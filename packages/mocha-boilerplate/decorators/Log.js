import logger from '../utils/logger';

export default function log(name) {
  return function decorator(t, n, descriptor) {
    const original = descriptor.value;
    if (typeof original === 'function') {
      descriptor.value = async function (...args) {
        logger.info(`Executing ${name}`);
        try {
          const result = await original.apply(this, args);
          logger.info(
            `Completed Executing ${name}, ${JSON.stringify(this)}`
          );
          return result;
        } catch (e) {
          console.log(`Error from ${name}: ${e}`);
          throw e;
        }
      };
    }
    return descriptor;
  };
}
