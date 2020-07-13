(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{RyPD:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_split_pane",(function(){return SplitPane}));var _index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("+9FH"),_ionic_global_fbc9a2ac_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("ntsc");const QUERY={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""},SplitPane=class{constructor(hostRef){Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.l)(this,hostRef),this.visible=!1,this.disabled=!1,this.when=QUERY.lg,this.ionSplitPaneVisible=Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.f)(this,"ionSplitPaneVisible",7)}visibleChanged(visible){const detail={visible:visible,isPane:this.isPane.bind(this)};this.ionSplitPaneVisible.emit(detail)}connectedCallback(){this.styleChildren(),this.updateState()}disconnectedCallback(){this.rmL&&(this.rmL(),this.rmL=void 0)}updateState(){if(this.rmL&&(this.rmL(),this.rmL=void 0),this.disabled)return void(this.visible=!1);const query=this.when;if("boolean"==typeof query)return void(this.visible=query);const mediaQuery=QUERY[query]||query;if(0!==mediaQuery.length){if(window.matchMedia){const callback=q=>{this.visible=q.matches},mediaList=window.matchMedia(mediaQuery);mediaList.addListener(callback),this.rmL=()=>mediaList.removeListener(callback),this.visible=mediaList.matches}}else this.visible=!1}isPane(element){return!!this.visible&&element.parentElement===this.el&&element.classList.contains("split-pane-side")}styleChildren(){const contentId=this.contentId,children=this.el.children,nu=this.el.childElementCount;let foundMain=!1;for(let i=0;i<nu;i++){const child=children[i],isMain=void 0!==contentId&&child.id===contentId;if(isMain){if(foundMain)return void console.warn("split pane cannot have more than one main node");foundMain=!0}setPaneClass(child,isMain)}foundMain||console.warn("split pane does not have a specified main node")}render(){const mode=Object(_ionic_global_fbc9a2ac_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);return Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.j)(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.b,{class:{[mode]:!0,[`split-pane-${mode}`]:!0,"split-pane-visible":this.visible}},Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.j)("slot",null))}get el(){return Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{visible:["visibleChanged"],disabled:["updateState"],when:["updateState"]}}},setPaneClass=(el,isMain)=>{let toAdd,toRemove;isMain?(toAdd="split-pane-main",toRemove="split-pane-side"):(toAdd="split-pane-side",toRemove="split-pane-main");const classList=el.classList;classList.add(toAdd),classList.remove(toRemove)};SplitPane.style={ios:":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side),:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none !important;box-shadow:none !important;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){-ms-flex:1;flex:1}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){-ms-flex-order:-1;order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host{--border:0.55px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){border-left:0;border-right:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.split-pane-visible) ::slotted(.split-pane-side){border-left:unset;border-right:unset;-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border)}}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){border-left:var(--border);border-right:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){border-left:unset;border-right:unset;-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0}}",md:":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side),:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none !important;box-shadow:none !important;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){-ms-flex:1;flex:1}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){-ms-flex-order:-1;order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host{--border:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){border-left:0;border-right:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.split-pane-visible) ::slotted(.split-pane-side){border-left:unset;border-right:unset;-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border)}}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){border-left:var(--border);border-right:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){border-left:unset;border-right:unset;-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0}}"}}}]);