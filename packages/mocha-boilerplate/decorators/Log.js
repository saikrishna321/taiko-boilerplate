export default function log(name) {
  return function decorator(t, n, descriptor) {
    const original = descriptor.value;
    if (typeof original === 'function') {
      descriptor.value = async function (...args) {
        console.log(`${new Date().toISOString()} - Executing ${name}`);
        try {
          const result = await original.apply(this, args);
          console.log(
            `${new Date().toISOString()} - Completed Executing ${name}`
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
