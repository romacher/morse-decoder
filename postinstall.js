const semver = require('semver');
const colors = require('colors/safe');

const { engines: { node: nodeVersion }} = require('./package');

if (!semver.satisfies(process.version, nodeVersion)) {
  process.emitWarning(
    colors.red(`
      For this task we are strictly recomend you to use node ${nodeVersion}.
      Now you are using node ${process.version}, if you are using any of features that not supported by node ${nodeVersion}, score won't be submitted
    `)
  );
}
