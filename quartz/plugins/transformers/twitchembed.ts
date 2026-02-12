import { QuartzTransformerPlugin } from "../types"

export const TwitchEmbed: QuartzTransformerPlugin = () => {
  return {
    name: "TwitchEmbed",
    textTransform(_ctx, src) {
      let content = src.toString()
      const embedRegex = /!embed\((https?:\/\/[^\s)]+)\)/g

      content = content.replace(embedRegex, (match, url) => {
        // 1. Clip Detection
        const clipMatch = url.match(/(?:clips\.twitch\.tv\/|twitch\.tv\/\w+\/clip\/)([a-zA-Z0-9_-]+)/)
        if (clipMatch) {
          const clipId = clipMatch[1]
          // Added &autoplay=false to the end of the src
          return `<iframe class="twitch-embed" src="https://clips.twitch.tv/embed?clip=${clipId}&parent=localhost&parent=mvyasu.github.io&autoplay=false" allowfullscreen="true" allow="autoplay; fullscreen"></iframe>`
        }

        // 2. Video Detection
        const videoMatch = url.match(/twitch\.tv\/videos\/(\d+)/)
        if (videoMatch) {
          const videoId = videoMatch[1]
          // Added &autoplay=false to the end of the src
          return `<iframe class="twitch-embed" src="https://player.twitch.tv/?video=${videoId}&parent=localhost&parent=mvyasu.github.io&autoplay=false" frameborder="0" allowfullscreen="true" scrolling="no"></iframe>`
        }

        return match 
      })

      return content
    },
  }
}