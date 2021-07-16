import { findGithubRemote, downloadRemoteFile } from './remote';
import { getArgv } from './argv';
import { downloadLocalFile } from './local';

(async function main() {
  const params = getArgv();
  const folder = params.folder || params.f || '.';
  const target = params._;

  const remoteUrl = findGithubRemote(target);
  if (remoteUrl) downloadRemoteFile(remoteUrl, folder);
  else downloadLocalFile(target, folder);
})().catch((err) => {
  if (err) throw err;
});
