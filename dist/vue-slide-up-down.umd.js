!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):t.VueSlideUpDown=i()}(this,function(){return{name:"SlideUpDown",props:{active:Boolean,duration:{type:Number,default:500},tag:{type:String,default:"div"}},data:function(){return{style:{},initial:!1,hidden:!(void 0).active}},watch:{active:function(){this.layout()}},render:function(t){return t(this.tag,{style:this.style,ref:"container",attrs:{hidden:this.hidden},on:{transitionend:this.onTransitionEnd}},this.$slots.default)},mounted:function(){this.layout(),this.initial=!0},computed:{el:function(){return this.$refs.container}},methods:{layout:function(){var t=this;this.active?(this.hidden=!1,this.$emit("open-start"),this.initial&&this.setHeight("0px",function(){return t.el.scrollHeight+"px"})):(this.$emit("close-start"),this.setHeight(this.el.scrollHeight+"px",function(){return"0px"}))},asap:function(t){this.initial?this.$nextTick(t):t()},setHeight:function(t,i){var e=this;this.style={height:t},this.asap(function(){e.__=e.el.scrollHeight,e.style={height:i(),overflow:"hidden","transition-property":"height","transition-duration":e.duration+"ms"}})},onTransitionEnd:function(){this.active?(this.style={},this.$emit("open-end")):(this.style={height:"0",overflow:"hidden"},this.hidden=!0,this.$emit("close-end"))}}}});
//# sourceMappingURL=vue-slide-up-down.umd.js.map
