function i(n){window.enmity.plugins.registerPlugin(n)}function o(...n){return window.enmity.getModuleByProps(n)}function r(n){return window.enmity.patcher.create(n)}const t=r("no-reply-mention"),l=o("createPendingReply"),u={name:"ExamplePlugin",onStart(){t.before(l,"createPendingReply",(n,e)=>(e[0].shouldMention=!1,e))},onStop(){t.unpatchAll()}};i(u);
