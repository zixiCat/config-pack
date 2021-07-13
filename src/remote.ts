const { execSync } = require('child_process');
const sh = execSync;

export interface RemoteInfo {
  branch: string;
  author: string;
  type: 'file' | 'folder';
  repo: string;
  path: string;
  remote: string;
}

/**
 * determine if it's github remote
 * @param {String} url the fetched url
 * @return {Boolean} the res
 */
export const isGithubRemote = (url: string) => {
  return url.includes('github.com');
};

/**
 * obtain the info from fetched url of github
 * @param {String} url the fetched url
 * @return {Object} the info of fetching
 */
export const getInfo = (url: string): RemoteInfo => {
  const urlPath = url.split('github.com')[1];
  const urlPathArr = urlPath.split('/');
  // if it's master
  //   if(9)

  const author = urlPathArr[1];
  const repo = urlPathArr[2];
  const type = urlPathArr[3] === 'tree' ? 'folder' : 'file';
  const branch = urlPathArr[4];
  const path = `/${urlPathArr.slice(4).join('/')}`;
  const remote = `https://github.com/${author}/${repo}`;

  return {
    branch,
    author,
    type,
    repo,
    path,
    remote,
  };
};

/**
 * obtain the info from fetched url of github
 * @param {RemoteInfo} remoteInfo the info contained in url from
 */
export const generateTempSpace = (remoteInfo: RemoteInfo) => {
  sh(`git clone ${remoteInfo.remote} ./tempConfig`);
};
