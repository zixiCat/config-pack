import { copyDirectorySync } from './utils';
import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const sh = execSync;

const REMOTE_CACHE_PATH = path.join(
  __dirname,
  '../',
  './node_modules/.cache/config-pack/temp'
);

export interface RemoteInfo {
  branch: string;
  author: string;
  type: 'file' | 'folder';
  repo: string;
  target: string;
  remote: string;
}

/**
 * find the index of github remote in _ argv
 * @param {string[]} otherArgv _ argv
 * @return {string} the url of github remote in otherArgv
 */
export const findGithubRemote = (otherArgv: string[]) => {
  for (let i = 0; i < otherArgv.length; i++) {
    if (otherArgv[i].includes('github.com')) return otherArgv[i];
  }
  return undefined;
};

/**
 * obtain the info from fetched url of github
 * @param {string} url the fetched url
 * @return {Object} the info of fetching
 */
export const getRemoteInfo = (url: string): RemoteInfo => {
  const urlPath = url.split('github.com')[1];
  const urlPathArr = urlPath.split('/');

  const author = urlPathArr[1];
  const repo = urlPathArr[2];
  const type = urlPathArr[3] === 'blob' ? 'file' : 'folder';
  const branch = urlPathArr[4];
  const target = `/${urlPathArr.slice(5).join('/')}`;
  const remote = `https://github.com/${author}/${repo}`;

  return { branch, author, type, repo, target, remote };
};

/**
 * download all remote file
 * @param {RemoteInfo} remoteInfo the info contained in url from
 * @param {string} destination the folder we download file/folder into
 */
export const downloadAllRemoteFile = (
  remoteInfo: RemoteInfo,
  destination: string
) => {
  fs.mkdirSync(destination, { recursive: true });
  sh(`git clone ${remoteInfo.remote} ${destination}`);
};

/**
 * download specific remote file/folder
 * @param {RemoteInfo} remoteInfo the info contained in url from
 * @param {string} destination the folder we download file/folder into
 */
export const downloadSpecificRemoteFile = (
  remoteInfo: RemoteInfo,
  destination: string
) => {
  const { type, target, remote } = remoteInfo;
  fs.mkdirSync(REMOTE_CACHE_PATH, {
    recursive: true,
  });
  try {
    sh(`git clone ${remote} ${REMOTE_CACHE_PATH}`);

    const targetName = target.split('/').pop();

    if (!targetName) throw new Error('can not find the target file or folder');

    if (type === 'file') {
      // when target is file
      destination && fs.mkdirSync(destination, { recursive: true });
      fs.copyFileSync(
        path.join(REMOTE_CACHE_PATH, target),
        path.join(process.cwd(), destination, targetName)
      );
    } else {
      // when target is folder
      copyDirectorySync(
        path.join(REMOTE_CACHE_PATH, target),
        path.join(process.cwd(), destination)
      );
    }
    fs.rmdirSync(REMOTE_CACHE_PATH, { recursive: true });
  } catch (err) {
    fs.rmdirSync(REMOTE_CACHE_PATH, { recursive: true });
    throw err || new Error('can not find the target file or folder');
  }
};

/**
 * download remote file
 * @param {string} url the fetched url
 * @param {string} destination the folder we download file/folder into
 */
export const downloadRemoteFile = (url: string, destination: string) => {
  const info = getRemoteInfo(url);
  if (info.target === '/') {
    downloadAllRemoteFile(info, destination);
  } else {
    downloadSpecificRemoteFile(info, destination);
  }
};
