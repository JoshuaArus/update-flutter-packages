const core = require('@actions/core');
const github = require('@actions/github');

try {
  const flutterProjectWorkspace = core.getInput('flutter-project');
  console.log(`Analyzing Flutter project @ ${flutterProjectWorkspace}...`);
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}