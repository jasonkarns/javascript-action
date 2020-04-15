const core = require('@actions/core')

async function run () {
}

// This is the action entrypoint so we autorun;
// but also export the promise so this can be required.
module.exports = run()

// Rejections must cause the action to fail.
module.exports.catch(core.setFailed)
