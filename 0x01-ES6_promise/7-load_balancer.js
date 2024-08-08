/ A function that return the value returned by the promise resolved first
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
    .then((result) => result)
    .catch((error) => error);
}
