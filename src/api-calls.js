export const getOembed = (desiredClip) => {
  return fetch(`https://www.tiktok.com/oembed?url=${desiredClip}`)
    .then(result => result.json())
    .then(oembed => {
      if (oembed.status_msg) {
        return {
          cite: desiredClip,
          status_msg: oembed.status_msg
        };
      }
      const video_id = oembed.html.substring(oembed.html.search(/data-video-id="/g) + 15, oembed.html.search(/data-video-id="/g) + 34);
      return {
        cite: desiredClip,
        title: oembed.title,
        author_url: oembed.author_url,
        author_name: oembed.author_name,
        html: oembed.html,
        data_video_id: video_id,
        thumbnail_url: oembed.thumbnail_url
      }
    })
};