function o(n){window.enmity.plugins.registerPlugin(n)}function i(...n){return window.enmity.getModuleByProps(n)}function r(n){return window.enmity.patcher.create(n)}const t=r("no-reply-mention"),l=i("createPendingReply"),u={name:"NoReplyMention",onStart(){t.before(l,"createPendingReply",(n,e)=>(e[0].shouldMention=!1,e))},onStop(){t.unpatchAll()}};o(u);
