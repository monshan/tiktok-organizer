const getOembed = (desiredClip) => {
  fetch(`https://www.tiktok.com/oembed?url=${desiredClip}`)
    .then(result => result.json())
}

export default getOembed;