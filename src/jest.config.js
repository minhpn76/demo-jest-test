// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
  setupFilesAfterEnv: ["./src/setupTests.js"]
};
// Or async function
module.exports = async () => {
  return config;
};
