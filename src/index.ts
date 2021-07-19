import Prompt from './prompt';
import { getArgv } from './argv';
import { downloadLocalFile } from './local';
import { findGithubRemote, downloadRemoteFile } from './remote';

(async function main() {
  const params = getArgv();
  const folder = params.folder || params.f || '.';
  const target = params._;

  const remoteUrl = findGithubRemote(target);
  const prompt = new Prompt();
  prompt.fetching();
  if (remoteUrl) downloadRemoteFile(remoteUrl, folder);
  else downloadLocalFile(target, folder);
  prompt.succeeded();
})().catch((err) => {
  if (err) throw err;
});
