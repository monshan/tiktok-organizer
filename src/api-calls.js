export const getOembed = (desiredClip) => {
  return fetch(`https://www.tiktok.com/oembed?url=${desiredClip}`)
    .then(result => result.json())
};