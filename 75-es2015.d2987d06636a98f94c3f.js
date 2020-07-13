(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{"5g9+":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_range",(function(){return Range}));var _index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("+9FH"),_ionic_global_fbc9a2ac_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("ntsc"),_helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("gHap"),_theme_c2dc54d9_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("KwJk");const Range=class{constructor(hostRef){Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.l)(this,hostRef),this.noUpdate=!1,this.hasFocus=!1,this.ratioA=0,this.ratioB=0,this.debounce=0,this.name="",this.dualKnobs=!1,this.min=0,this.max=100,this.pin=!1,this.snaps=!1,this.step=1,this.ticks=!0,this.disabled=!1,this.value=0,this.clampBounds=value=>Object(_helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_2__.c)(this.min,value,this.max),this.ensureValueInBounds=value=>this.dualKnobs?{lower:this.clampBounds(value.lower),upper:this.clampBounds(value.upper)}:this.clampBounds(value),this.handleKeyboard=(knob,isIncrease)=>{let step=this.step;step=step>0?step:1,step/=this.max-this.min,isIncrease||(step*=-1),"A"===knob?this.ratioA=Object(_helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_2__.c)(0,this.ratioA+step,1):this.ratioB=Object(_helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_2__.c)(0,this.ratioB+step,1),this.updateValue()},this.onBlur=()=>{this.hasFocus&&(this.hasFocus=!1,this.ionBlur.emit(),this.emitStyle())},this.onFocus=()=>{this.hasFocus||(this.hasFocus=!0,this.ionFocus.emit(),this.emitStyle())},this.ionChange=Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.f)(this,"ionChange",7),this.ionStyle=Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.f)(this,"ionStyle",7),this.ionFocus=Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.f)(this,"ionFocus",7),this.ionBlur=Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.f)(this,"ionBlur",7)}debounceChanged(){this.ionChange=Object(_helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_2__.d)(this.ionChange,this.debounce)}minChanged(){this.noUpdate||this.updateRatio()}maxChanged(){this.noUpdate||this.updateRatio()}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled),this.emitStyle()}valueChanged(value){this.noUpdate||this.updateRatio(),value=this.ensureValueInBounds(value),this.ionChange.emit({value:value})}connectedCallback(){this.updateRatio(),this.debounceChanged(),this.disabledChanged()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}async componentDidLoad(){const rangeSlider=this.rangeSlider;rangeSlider&&(this.gesture=(await Promise.resolve().then(__webpack_require__.bind(null,"oDRl"))).createGesture({el:rangeSlider,gestureName:"range",gesturePriority:100,threshold:0,onStart:ev=>this.onStart(ev),onMove:ev=>this.onMove(ev),onEnd:ev=>this.onEnd(ev)}),this.gesture.enable(!this.disabled))}getValue(){const value=this.value||0;return this.dualKnobs?"object"==typeof value?value:{lower:0,upper:value}:"object"==typeof value?value.upper:value}emitStyle(){this.ionStyle.emit({interactive:!0,"interactive-disabled":this.disabled})}onStart(detail){const rect=this.rect=this.rangeSlider.getBoundingClientRect(),currentX=detail.currentX;let ratio=Object(_helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_2__.c)(0,(currentX-rect.left)/rect.width,1);"rtl"===document.dir&&(ratio=1-ratio),this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-ratio)<Math.abs(this.ratioB-ratio)?"A":"B",this.setFocus(this.pressedKnob),this.update(currentX)}onMove(detail){this.update(detail.currentX)}onEnd(detail){this.update(detail.currentX),this.pressedKnob=void 0}update(currentX){const rect=this.rect;let ratio=Object(_helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_2__.c)(0,(currentX-rect.left)/rect.width,1);"rtl"===document.dir&&(ratio=1-ratio),this.snaps&&(ratio=valueToRatio(ratioToValue(ratio,this.min,this.max,this.step),this.min,this.max)),"A"===this.pressedKnob?this.ratioA=ratio:this.ratioB=ratio,this.updateValue()}get valA(){return ratioToValue(this.ratioA,this.min,this.max,this.step)}get valB(){return ratioToValue(this.ratioB,this.min,this.max,this.step)}get ratioLower(){return this.dualKnobs?Math.min(this.ratioA,this.ratioB):0}get ratioUpper(){return this.dualKnobs?Math.max(this.ratioA,this.ratioB):this.ratioA}updateRatio(){const value=this.getValue(),{min:min,max:max}=this;this.dualKnobs?(this.ratioA=valueToRatio(value.lower,min,max),this.ratioB=valueToRatio(value.upper,min,max)):this.ratioA=valueToRatio(value,min,max)}updateValue(){this.noUpdate=!0;const{valA:valA,valB:valB}=this;this.value=this.dualKnobs?{lower:Math.min(valA,valB),upper:Math.max(valA,valB)}:valA,this.noUpdate=!1}setFocus(knob){if(this.el.shadowRoot){const knobEl=this.el.shadowRoot.querySelector("A"===knob?".range-knob-a":".range-knob-b");knobEl&&knobEl.focus()}}render(){const{min:min,max:max,step:step,el:el,handleKeyboard:handleKeyboard,pressedKnob:pressedKnob,disabled:disabled,pin:pin,ratioLower:ratioLower,ratioUpper:ratioUpper}=this,mode=Object(_ionic_global_fbc9a2ac_js__WEBPACK_IMPORTED_MODULE_1__.b)(this),isRTL="rtl"===document.dir,start=isRTL?"right":"left",tickStyle=tick=>({[start]:tick[start]}),barStyle={[start]:`${100*ratioLower}%`,[isRTL?"left":"right"]:`${100-100*ratioUpper}%`},ticks=[];if(this.snaps&&this.ticks)for(let value=min;value<=max;value+=step){const ratio=valueToRatio(value,min,max),tick={ratio:ratio,active:ratio>=ratioLower&&ratio<=ratioUpper};tick[start]=`${100*ratio}%`,ticks.push(tick)}return Object(_helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_2__.a)(!0,el,this.name,JSON.stringify(this.getValue()),disabled),Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.j)(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.b,{onFocusin:this.onFocus,onFocusout:this.onBlur,class:Object.assign(Object.assign({},Object(_theme_c2dc54d9_js__WEBPACK_IMPORTED_MODULE_3__.a)(this.color)),{[mode]:!0,"in-item":Object(_theme_c2dc54d9_js__WEBPACK_IMPORTED_MODULE_3__.c)("ion-item",el),"range-disabled":disabled,"range-pressed":void 0!==pressedKnob,"range-has-pin":pin})},Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.j)("slot",{name:"start"}),Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.j)("div",{class:"range-slider",ref:rangeEl=>this.rangeSlider=rangeEl},ticks.map(tick=>Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.j)("div",{style:tickStyle(tick),role:"presentation",class:{"range-tick":!0,"range-tick-active":tick.active},part:tick.active?"tick-active":"tick"})),Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.j)("div",{class:"range-bar",role:"presentation",part:"bar"}),Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.j)("div",{class:"range-bar range-bar-active",role:"presentation",style:barStyle,part:"bar-active"}),renderKnob(isRTL,{knob:"A",pressed:"A"===pressedKnob,value:this.valA,ratio:this.ratioA,pin:pin,disabled:disabled,handleKeyboard:handleKeyboard,min:min,max:max}),this.dualKnobs&&renderKnob(isRTL,{knob:"B",pressed:"B"===pressedKnob,value:this.valB,ratio:this.ratioB,pin:pin,disabled:disabled,handleKeyboard:handleKeyboard,min:min,max:max})),Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.j)("slot",{name:"end"}))}get el(){return Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{debounce:["debounceChanged"],min:["minChanged"],max:["maxChanged"],disabled:["disabledChanged"],value:["valueChanged"]}}},renderKnob=(isRTL,{knob:knob,value:value,ratio:ratio,min:min,max:max,disabled:disabled,pressed:pressed,pin:pin,handleKeyboard:handleKeyboard})=>{const start=isRTL?"right":"left";return Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.j)("div",{onKeyDown:ev=>{const key=ev.key;"ArrowLeft"===key||"ArrowDown"===key?(handleKeyboard(knob,!1),ev.preventDefault(),ev.stopPropagation()):"ArrowRight"!==key&&"ArrowUp"!==key||(handleKeyboard(knob,!0),ev.preventDefault(),ev.stopPropagation())},class:{"range-knob-handle":!0,"range-knob-a":"A"===knob,"range-knob-b":"B"===knob,"range-knob-pressed":pressed,"range-knob-min":value===min,"range-knob-max":value===max},style:(()=>{const style={};return style[start]=`${100*ratio}%`,style})(),role:"slider",tabindex:disabled?-1:0,"aria-valuemin":min,"aria-valuemax":max,"aria-disabled":disabled?"true":null,"aria-valuenow":value},pin&&Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.j)("div",{class:"range-pin",role:"presentation",part:"pin"},Math.round(value)),Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.j)("div",{class:"range-knob",role:"presentation",part:"knob"}))},ratioToValue=(ratio,min,max,step)=>{let value=(max-min)*ratio;return step>0&&(value=Math.round(value/step)*step+min),Object(_helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_2__.c)(min,value,max)},valueToRatio=(value,min,max)=>Object(_helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_2__.c)(0,(value-min)/(max-min),1);Range.style={ios:":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:#ffffff;--knob-box-shadow:0 3px 1px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.13), 0 0 0 1px rgba(0, 0, 0, 0.02);--knob-size:28px;--bar-height:2px;--bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){margin-left:0;margin-right:16px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted([slot=end]){margin-left:16px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:20px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick{margin-left:-1px;border-radius:0;position:absolute;top:18px;width:2px;height:8px;background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-tick{margin-left:unset;-webkit-margin-start:-1px;margin-inline-start:-1px}}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,  28px,  0) scale(0.01);transform:translate3d(0,  28px,  0) scale(0.01);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:inline-block;position:relative;top:-20px;min-width:28px;-webkit-transition:-webkit-transform 120ms ease;transition:-webkit-transform 120ms ease;transition:transform 120ms ease;transition:transform 120ms ease, -webkit-transform 120ms ease;background:transparent;color:var(--ion-text-color, #000);font-size:12px;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,  0,  0) scale(1);transform:translate3d(0,  0,  0) scale(1)}:host(.range-disabled){opacity:0.5}",md:':host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.26);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary, #3880ff);--pin-color:var(--ion-color-primary-contrast, #fff);padding-left:14px;padding-right:14px;padding-top:8px;padding-bottom:8px;font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px}}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb), 0.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin::before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){margin-left:0;margin-right:14px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px}}::slotted([slot=end]){margin-left:14px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:28px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(0.67);transform:scale(0.67);-webkit-transition-duration:120ms;transition-duration:120ms;-webkit-transition-property:background-color, border, -webkit-transform;transition-property:background-color, border, -webkit-transform;transition-property:transform, background-color, border;transition-property:transform, background-color, border, -webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translate3d(0,  0,  0) scale(0.01);transform:translate3d(0,  0,  0) scale(0.01);display:inline-block;position:relative;min-width:28px;height:28px;-webkit-transition:background 120ms ease, -webkit-transform 120ms ease;transition:background 120ms ease, -webkit-transform 120ms ease;transition:transform 120ms ease, background 120ms ease;transition:transform 120ms ease, background 120ms ease, -webkit-transform 120ms ease;background:var(--pin-background);color:var(--pin-color);text-align:center}.range-pin::before{left:50%;top:3px;margin-left:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background 120ms ease;transition:background 120ms ease;background:var(--pin-background);content:"";z-index:-1}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset;right:unset;right:50%}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin::before{margin-left:unset;-webkit-margin-start:-13px;margin-inline-start:-13px}}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,  -24px,  0) scale(1);transform:translate3d(0,  -24px,  0) scale(1)}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-bar,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250, #bfbfbf)}:host(.range-disabled) .range-knob{-webkit-transform:scale(0.55);transform:scale(0.55);outline:5px solid #fff;background-color:var(--ion-color-step-250, #bfbfbf)}'}}}]);