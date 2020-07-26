function redirect(link) {
  window.location.href = link;
}

function encode(string) {
  return Buffer.from(string).toString('hex');
}

function decode(string) {
  return Buffer.from(string, 'hex').toString();
}

function addHttpToURLIfNeeded(url) {
  if (!(url.startsWith('http://') || url.startsWith('https://'))) {
    return `http://${url}`;
  }

  return url;
}

function copyToClipboard(text) {
  // eslint-disable-next-line
  window.prompt('Copy to clipboard: Ctrl+C, Enter', text);
}

export {
  redirect, encode, decode, addHttpToURLIfNeeded, copyToClipboard,
};
