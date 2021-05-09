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
      const startSound = oembed.html.search(/https:\/\/www.tiktok.com\/music/g);
      const soundString = oembed.html.substring(startSound);
      const endSound = soundString.search(/">/);
      const endTitle = soundString.search(/<\/a>/);
      const sound_url = oembed.html.slice(startSound, startSound + endSound);
      const sound_title = soundString.slice(endSound + 2, endTitle);
      return {
        cite: desiredClip,
        title: oembed.title,
        author_url: oembed.author_url,
        author_name: oembed.author_name,
        html: oembed.html,
        data_video_id: video_id,
        sound_title: sound_title,
        sound_url: sound_url,
        thumbnail_url: oembed.thumbnail_url,
        isPinned: false
      }
    })
};