// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
  setupFilesAfterEnv: ["./src/setupTests.js"],
  moduleDirectories: ['node_modules', 'src'],
};
// Or async function
module.exports = async () => {
  return config;
};
