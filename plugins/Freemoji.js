function l(e){window.enmity.plugins.registerPlugin(e)}const t={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:e=>window.enmity.modules.filters.byName(e),byTypeName:e=>window.enmity.modules.filters.byTypeName(e),byTypeString:(...e)=>window.enmity.modules.filters.byTypeString(...e),byDefaultString:(...e)=>window.enmity.modules.filters.byDefaultString(...e),byString:(...e)=>window.enmity.modules.filters.byString(...e)};function d(...e){return window.enmity.modules.bulk(...e)}function y(e){return window.enmity.patcher.create(e)}const o=y("freemoji"),[w,{getEmojiURL:u},r,{getChannel:c}]=d(t.byProps("parse","unparse","parsePreprocessor"),t.byProps("getEmojiURL"),t.byProps("canUseEmojisEverywhere","canUseAnimatedEmojis"),t.byProps("getChannel")),p={name:"Freemoji",onStart(){o.after(r,"canUseEmojisEverywhere",()=>!0),o.after(r,"canUseAnimatedEmojis",()=>!0),o.before(window.enmity.modules.common.messages,"sendMessage",(e,[s,i])=>{const m=c(s);i.validNonShortcutEmojis.forEach((n,a)=>{n.guildId!==m.guild_id&&(n.size=24,i.content=i.content.replace(`<${n.animated?"a":""}:${n.name}:${n.id}>`,u(n).replace("webp","png")),delete i.validNonShortcutEmojis[a])}),i.validNonShortcutEmojis=i.validNonShortcutEmojis.filter(n=>n)})},onStop(){o.unpatchAll()}};l(p);