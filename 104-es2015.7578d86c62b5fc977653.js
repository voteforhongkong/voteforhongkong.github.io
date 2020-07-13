(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{"8Mb5":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_virtual_scroll",(function(){return VirtualScroll}));var _index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("+9FH");const createNode=(el,type)=>{const template=getTemplate(el,type);return template&&el.ownerDocument?el.ownerDocument.importNode(template.content,!0).children[0]:null},getTemplate=(el,type)=>{switch(type){case"item":return el.querySelector("template:not([name])");case"header":return el.querySelector("template[name=header]");case"footer":return el.querySelector("template[name=footer]")}},calcCells=(items,itemHeight,headerHeight,footerHeight,headerFn,footerFn,approxHeaderHeight,approxFooterHeight,approxItemHeight,j,offset,len)=>{const cells=[],end=len+offset;for(let i=offset;i<end;i++){const item=items[i];if(headerFn){const value=headerFn(item,i,items);null!=value&&cells.push({i:j++,type:"header",value:value,index:i,height:headerHeight?headerHeight(value,i):approxHeaderHeight,reads:headerHeight?0:2,visible:!!headerHeight})}if(cells.push({i:j++,type:"item",value:item,index:i,height:itemHeight?itemHeight(item,i):approxItemHeight,reads:itemHeight?0:2,visible:!!itemHeight}),footerFn){const value=footerFn(item,i,items);null!=value&&cells.push({i:j++,type:"footer",value:value,index:i,height:footerHeight?footerHeight(value,i):approxFooterHeight,reads:footerHeight?0:2,visible:!!footerHeight})}}return cells},VirtualScroll=class{constructor(hostRef){Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.l)(this,hostRef),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=()=>{this.updateVirtualScroll()}}itemsChanged(){this.calcCells(),this.updateVirtualScroll()}async connectedCallback(){const contentEl=this.el.closest("ion-content");contentEl?(this.scrollEl=await contentEl.getScrollElement(),this.contentEl=contentEl,this.calcCells(),this.updateState()):console.error("<ion-virtual-scroll> must be used inside an <ion-content>")}componentDidUpdate(){this.updateState()}disconnectedCallback(){this.scrollEl=void 0}onResize(){this.calcCells(),this.updateVirtualScroll()}positionForItem(index){return Promise.resolve(((index,cells,heightIndex)=>{const cell=cells.find(c=>"item"===c.type&&c.index===index);return cell?heightIndex[cell.i]:-1})(index,this.cells,this.getHeightIndex()))}async checkRange(offset,len=-1){if(!this.items)return;const length=-1===len?this.items.length-offset:len,cellIndex=((cells,index)=>0===index?0:index===(cells.length>0?cells[cells.length-1].index:0)+1?cells.length:cells.findIndex(c=>c.index===index))(this.cells,offset),cells=calcCells(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,cellIndex,offset,length);this.cells=((dst,src,offset)=>{if(0===offset&&src.length>=dst.length)return src;for(let i=0;i<src.length;i++)dst[i+offset]=src[i];return dst})(this.cells,cells,cellIndex),this.lastItemLen=this.items.length,this.indexDirty=Math.max(offset-1,0),this.scheduleUpdate()}async checkEnd(){this.items&&this.checkRange(this.lastItemLen)}updateVirtualScroll(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.h)(this.readVS.bind(this)),Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.n)(this.writeVS.bind(this)))}readVS(){const{contentEl:contentEl,scrollEl:scrollEl,el:el}=this;let topOffset=0,node=el;for(;node&&node!==contentEl;)topOffset+=node.offsetTop,node=node.parentElement;this.viewportOffset=topOffset,scrollEl&&(this.viewportHeight=scrollEl.offsetHeight,this.currentScrollTop=scrollEl.scrollTop)}writeVS(){const dirtyIndex=this.indexDirty,viewport=(scrollTop=this.currentScrollTop-this.viewportOffset,vierportHeight=this.viewportHeight,{top:Math.max(scrollTop-100,0),bottom:scrollTop+vierportHeight+100}),heightIndex=this.getHeightIndex(),range=((heightIndex,viewport,buffer)=>{const topPos=viewport.top,bottomPos=viewport.bottom;let i=0;for(;i<heightIndex.length&&!(heightIndex[i]>topPos);i++);const offset=Math.max(i-2-1,0);for(;i<heightIndex.length&&!(heightIndex[i]>=bottomPos);i++);return{offset:offset,length:Math.min(i+2,heightIndex.length)-offset}})(heightIndex,viewport);var scrollTop,vierportHeight;((dirtyIndex,currentRange,range)=>dirtyIndex<=range.offset+range.length||currentRange.offset!==range.offset||currentRange.length!==range.length)(dirtyIndex,this.range,range)&&(this.range=range,((dom,heightIndex,cells,range)=>{for(const node of dom)node.change=0,node.d=!0;const toMutate=[],end=range.offset+range.length;for(let i=range.offset;i<end;i++){const cell=cells[i],node=dom.find(n=>n.d&&n.cell===cell);if(node){const top=heightIndex[i];top!==node.top&&(node.top=top,node.change=1),node.d=!1}else toMutate.push(cell)}const pool=dom.filter(n=>n.d);for(const cell of toMutate){const node=pool.find(n=>n.d&&n.cell.type===cell.type),index=cell.i;node?(node.d=!1,node.change=2,node.cell=cell,node.top=heightIndex[index]):dom.push({d:!1,cell:cell,visible:!0,change:2,top:heightIndex[index]})}dom.filter(n=>n.d&&-9999!==n.top).forEach(n=>{n.change=1,n.top=-9999})})(this.virtualDom,heightIndex,this.cells,range),this.nodeRender?((el,nodeRender,dom,updateCellHeight)=>{const children=Array.from(el.children).filter(n=>"TEMPLATE"!==n.tagName),childrenNu=children.length;let child;for(let i=0;i<dom.length;i++){const node=dom[i],cell=node.cell;if(2===node.change){if(i<childrenNu)child=children[i],nodeRender(child,cell,i);else{const newChild=createNode(el,cell.type);child=nodeRender(newChild,cell,i)||newChild,child.classList.add("virtual-item"),el.appendChild(child)}child.$ionCell=cell}else child=children[i];0!==node.change&&(child.style.transform=`translate3d(0,${node.top}px,0)`);const visible=cell.visible;node.visible!==visible&&(visible?child.classList.remove("virtual-loading"):child.classList.add("virtual-loading"),node.visible=visible),cell.reads>0&&(updateCellHeight(cell,child),cell.reads--)}})(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.k)(this))}updateCellHeight(cell,node){const update=()=>{if(node.$ionCell===cell){const style=window.getComputedStyle(node),height=node.offsetHeight+parseFloat(style.getPropertyValue("margin-bottom"));this.setCellHeight(cell,height)}};node&&node.componentOnReady?node.componentOnReady().then(update):update()}setCellHeight(cell,height){const index=cell.i;cell===this.cells[index]&&(cell.height===height&&!0===cell.visible||(cell.visible=!0,cell.height=height,this.indexDirty=Math.min(this.indexDirty,index),this.scheduleUpdate()))}scheduleUpdate(){clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout(()=>this.updateVirtualScroll(),100)}updateState(){const shouldEnable=!(!this.scrollEl||!this.cells);shouldEnable!==this.isEnabled&&(this.enableScrollEvents(shouldEnable),shouldEnable&&this.updateVirtualScroll())}calcCells(){this.items&&(this.lastItemLen=this.items.length,this.cells=calcCells(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)}getHeightIndex(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex}calcHeightIndex(index=0){this.heightIndex=((buf,len)=>{if(!buf)return new Uint32Array(len);if(buf.length===len)return buf;if(len>buf.length){const newBuf=new Uint32Array(len);return newBuf.set(buf),newBuf}return buf.subarray(0,len)})(this.heightIndex,this.cells.length),this.totalHeight=((buf,cells,index)=>{let acum=buf[index];for(let i=index;i<buf.length;i++)buf[i]=acum,acum+=cells[i].height;return acum})(this.heightIndex,this.cells,index),this.indexDirty=1/0}enableScrollEvents(shouldListen){this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);const scrollEl=this.scrollEl;scrollEl&&(this.isEnabled=shouldListen,scrollEl.addEventListener("scroll",this.onScroll),this.rmEvent=()=>{scrollEl.removeEventListener("scroll",this.onScroll)})}renderVirtualNode(node){const{type:type,value:value,index:index}=node.cell;switch(type){case"item":return this.renderItem(value,index);case"header":return this.renderHeader(value,index);case"footer":return this.renderFooter(value,index)}}render(){return Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.j)(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.b,{style:{height:`${this.totalHeight}px`}},this.renderItem&&Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.j)(VirtualProxy,{dom:this.virtualDom},this.virtualDom.map(node=>this.renderVirtualNode(node))))}get el(){return Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}}},VirtualProxy=({dom:dom},children,utils)=>utils.map(children,(child,i)=>{const node=dom[i],vattrs=child.vattrs||{};let classes=vattrs.class||"";return classes+="virtual-item ",node.visible||(classes+="virtual-loading"),Object.assign(Object.assign({},child),{vattrs:Object.assign(Object.assign({},vattrs),{class:classes,style:Object.assign(Object.assign({},vattrs.style),{transform:`translate3d(0,${node.top}px,0)`})})})});VirtualScroll.style="ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"}}]);