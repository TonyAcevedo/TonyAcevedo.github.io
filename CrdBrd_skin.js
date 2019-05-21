// Garden Gnome Software - Skin
// Pano2VR 5.1/15722
// Filename: cardboard_beta1.ggsk
// Generated Mon Jul 24 20:40:59 2017

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	ggSkinVars['ht_ani'] = false;
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._reddot=document.createElement('div');
		this._reddot.ggId="redDot";
		this._reddot.ggLeft=-2;
		this._reddot.ggTop=5;
		this._reddot.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._reddot.ggVisible=true;
		this._reddot.className='ggskin ggskin_rectangle ';
		this._reddot.ggType='rectangle';
		hs ='';
		hs+='background : #aa0000;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 3px;';
		hs+='left : -2px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 3px;';
		hs+='pointer-events:auto;';
		this._reddot.setAttribute('style',hs);
		this._reddot.style[domTransform + 'Origin']='50% 50%';
		me._reddot.ggIsActive=function() {
			return false;
		}
		me._reddot.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._reddot.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this.divSkin.appendChild(this._reddot);
		this._ht_node_timer=document.createElement('div');
		this._ht_node_timer.ggTimestamp=this.ggCurrentTime;
		this._ht_node_timer.ggLastIsActive=true;
		this._ht_node_timer.ggTimeout=500;
		this._ht_node_timer.ggId="ht_node_timer";
		this._ht_node_timer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_node_timer.ggVisible=true;
		this._ht_node_timer.className='ggskin ggskin_timer ';
		this._ht_node_timer.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 62px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._ht_node_timer.setAttribute('style',hs);
		this._ht_node_timer.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_timer.ggIsActive=function() {
			return (me._ht_node_timer.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._ht_node_timer.ggTimestamp) / me._ht_node_timer.ggTimeout) % 2 == 0));
		}
		me._ht_node_timer.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._ht_node_timer.ggActivate=function () {
			ggSkinVars['ht_ani'] = true;
		}
		this._ht_node_timer.ggDeactivate=function () {
			ggSkinVars['ht_ani'] = false;
		}
		this._ht_node_timer.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._ht_node_timer);
		this._tbox_timer=document.createElement('div');
		this._tbox_timer.ggTimestamp=this.ggCurrentTime;
		this._tbox_timer.ggLastIsActive=true;
		this._tbox_timer.ggTimeout=20000;
		this._tbox_timer.ggId="TBox_Timer";
		this._tbox_timer.ggLeft=-50;
		this._tbox_timer.ggTop=-160;
		this._tbox_timer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tbox_timer.ggVisible=true;
		this._tbox_timer.className='ggskin ggskin_timer ';
		this._tbox_timer.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : -160px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		this._tbox_timer.setAttribute('style',hs);
		this._tbox_timer.style[domTransform + 'Origin']='50% 50%';
		me._tbox_timer.ggIsActive=function() {
			return (me._tbox_timer.ggTimestamp + me._tbox_timer.ggTimeout) >= me.ggCurrentTime;
		}
		me._tbox_timer.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._tbox_timer.ggDeactivate=function () {
			ggSkinVars['ht_ani'] = false;
		}
		me._tbox_timer.ggCurrentLogicStateVisible = -1;
		this._tbox_timer.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me._tbox_timer.ggIsActive() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tbox_timer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tbox_timer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tbox_timer.style[domTransition]='';
				if (me._tbox_timer.ggCurrentLogicStateVisible == 0) {
					me._tbox_timer.style.visibility="hidden";
					me._tbox_timer.ggVisible=false;
				}
				else {
					me._tbox_timer.style.visibility=(Number(me._tbox_timer.style.opacity)>0||!me._tbox_timer.style.opacity)?'inherit':'hidden';
					me._tbox_timer.ggVisible=true;
				}
			}
		}
		this._tbox_timer.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._pointtint=document.createElement('div');
		this._pointtint.ggId="PointTint";
		this._pointtint.ggLeft=-100;
		this._pointtint.ggTop=13;
		this._pointtint.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		this._pointtint.ggVisible=true;
		this._pointtint.className='ggskin ggskin_rectangle ';
		this._pointtint.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(145,145,145,0.960784);';
		hs+='border : 3px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 270px;';
		hs+='left : -101px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 197px;';
		hs+='pointer-events:auto;';
		this._pointtint.setAttribute('style',hs);
		this._pointtint.style[domTransform + 'Origin']='50% 50%';
		this._pointtint.style[domTransform]=parameterToTransform(this._pointtint.ggParameter);
		me._pointtint.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._pointtint.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._pointtint.ggCurrentLogicStateScaling = -1;
		this._pointtint.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width < 960) || 
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._pointtint.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._pointtint.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._pointtint.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._pointtint.ggCurrentLogicStateScaling == 0) {
					me._pointtint.ggParameter.sx = 1;
					me._pointtint.ggParameter.sy = 1;
					me._pointtint.style[domTransform]=parameterToTransform(me._pointtint.ggParameter);
				}
				else {
					me._pointtint.ggParameter.sx = 0;
					me._pointtint.ggParameter.sy = 0;
					me._pointtint.style[domTransform]=parameterToTransform(me._pointtint.ggParameter);
				}
			}
		}
		this._pointtint.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._tbox_timer.appendChild(this._pointtint);
		this._fullscrn_icon=document.createElement('div');
		this._fullscrn_icon__img=document.createElement('img');
		this._fullscrn_icon__img.className='ggskin ggskin_image';
		this._fullscrn_icon__img.setAttribute('src',basePath + 'images/fullscrn_icon.png');
		this._fullscrn_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._fullscrn_icon__img.className='ggskin ggskin_image';
		this._fullscrn_icon__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._fullscrn_icon__img);
		this._fullscrn_icon.appendChild(this._fullscrn_icon__img);
		this._fullscrn_icon.ggId="FullScrn_Icon";
		this._fullscrn_icon.ggLeft=-71;
		this._fullscrn_icon.ggTop=81;
		this._fullscrn_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscrn_icon.ggVisible=true;
		this._fullscrn_icon.className='ggskin ggskin_image ';
		this._fullscrn_icon.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -71px;';
		hs+='position : absolute;';
		hs+='top : 81px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._fullscrn_icon.setAttribute('style',hs);
		this._fullscrn_icon.style[domTransform + 'Origin']='50% 50%';
		me._fullscrn_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fullscrn_icon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fullscrn_icon.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._fullscrntxt=document.createElement('div');
		this._fullscrntxt__text=document.createElement('div');
		this._fullscrntxt.className='ggskin ggskin_textdiv';
		this._fullscrntxt.ggTextDiv=this._fullscrntxt__text;
		this._fullscrntxt.ggId="FullScrnTxt";
		this._fullscrntxt.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscrntxt.ggVisible=true;
		this._fullscrntxt.className='ggskin ggskin_text ';
		this._fullscrntxt.ggType='text';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 31px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 115px;';
		hs+='pointer-events:auto;';
		this._fullscrntxt.setAttribute('style',hs);
		this._fullscrntxt.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 115px;';
		hs+='height: 19px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._fullscrntxt__text.setAttribute('style',hs);
		this._fullscrntxt__text.innerHTML="FullScreen View";
		this._fullscrntxt.appendChild(this._fullscrntxt__text);
		me._fullscrntxt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fullscrntxt.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fullscrntxt.ggUpdatePosition=function (useTransition) {
		}
		this._fullscrn_icon.appendChild(this._fullscrntxt);
		this._tbox_timer.appendChild(this._fullscrn_icon);
		this._node_tip_image=document.createElement('div');
		this._node_tip_image__img=document.createElement('img');
		this._node_tip_image__img.className='ggskin ggskin_image';
		this._node_tip_image__img.setAttribute('src',basePath + 'images/node_tip_image.png');
		this._node_tip_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._node_tip_image__img.className='ggskin ggskin_image';
		this._node_tip_image__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._node_tip_image__img);
		this._node_tip_image.appendChild(this._node_tip_image__img);
		this._node_tip_image.ggId="Node_tip_image";
		this._node_tip_image.ggLeft=-49;
		this._node_tip_image.ggTop=51;
		this._node_tip_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._node_tip_image.ggVisible=true;
		this._node_tip_image.className='ggskin ggskin_image ';
		this._node_tip_image.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -49px;';
		hs+='position : absolute;';
		hs+='top : 51px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._node_tip_image.setAttribute('style',hs);
		this._node_tip_image.style[domTransform + 'Origin']='50% 50%';
		me._node_tip_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._node_tip_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._node_tip_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._node_tip_name=document.createElement('div');
		this._node_tip_name__text=document.createElement('div');
		this._node_tip_name.className='ggskin ggskin_textdiv';
		this._node_tip_name.ggTextDiv=this._node_tip_name__text;
		this._node_tip_name.ggId="Node_tip_name";
		this._node_tip_name.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._node_tip_name.ggVisible=true;
		this._node_tip_name.className='ggskin ggskin_text ';
		this._node_tip_name.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 31px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 61px;';
		hs+='pointer-events:auto;';
		this._node_tip_name.setAttribute('style',hs);
		this._node_tip_name.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 61px;';
		hs+='height: 20px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._node_tip_name__text.setAttribute('style',hs);
		this._node_tip_name__text.innerHTML="Hotspot";
		this._node_tip_name.appendChild(this._node_tip_name__text);
		me._node_tip_name.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._node_tip_name.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._node_tip_name.ggUpdatePosition=function (useTransition) {
		}
		this._node_tip_image.appendChild(this._node_tip_name);
		this._tbox_timer.appendChild(this._node_tip_image);
		this._reddot_tip=document.createElement('div');
		this._reddot_tip.ggId="redDot_tip";
		this._reddot_tip.ggLeft=-35;
		this._reddot_tip.ggTop=39;
		this._reddot_tip.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._reddot_tip.ggVisible=true;
		this._reddot_tip.className='ggskin ggskin_rectangle ';
		this._reddot_tip.ggType='rectangle';
		hs ='';
		hs+='background : #aa0000;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 3px;';
		hs+='left : -35px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 3px;';
		hs+='pointer-events:auto;';
		this._reddot_tip.setAttribute('style',hs);
		this._reddot_tip.style[domTransform + 'Origin']='50% 50%';
		me._reddot_tip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._reddot_tip.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._reddot_tip.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._reddt_name=document.createElement('div');
		this._reddt_name__text=document.createElement('div');
		this._reddt_name.className='ggskin ggskin_textdiv';
		this._reddt_name.ggTextDiv=this._reddt_name__text;
		this._reddt_name.ggId="RedDt_name";
		this._reddt_name.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._reddt_name.ggVisible=true;
		this._reddt_name.className='ggskin ggskin_text ';
		this._reddt_name.ggType='text';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		this._reddt_name.setAttribute('style',hs);
		this._reddt_name.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 74px;';
		hs+='height: 19px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._reddt_name__text.setAttribute('style',hs);
		this._reddt_name__text.innerHTML="Red Dot";
		this._reddt_name.appendChild(this._reddt_name__text);
		me._reddt_name.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._reddt_name.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._reddt_name.ggUpdatePosition=function (useTransition) {
		}
		this._reddot_tip.appendChild(this._reddt_name);
		this._tbox_timer.appendChild(this._reddot_tip);
		this._text_instruction=document.createElement('div');
		this._text_instruction__text=document.createElement('div');
		this._text_instruction.className='ggskin ggskin_textdiv';
		this._text_instruction.ggTextDiv=this._text_instruction__text;
		this._text_instruction.ggId="Text_instruction";
		this._text_instruction.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_instruction.ggVisible=true;
		this._text_instruction.className='ggskin ggskin_text ';
		this._text_instruction.ggType='text';
		hs ='';
		hs+='height : 87px;';
		hs+='left : -29px;';
		hs+='position : absolute;';
		hs+='top : 120px;';
		hs+='visibility : inherit;';
		hs+='width : 159px;';
		hs+='pointer-events:auto;';
		this._text_instruction.setAttribute('style',hs);
		this._text_instruction.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 159px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_instruction__text.setAttribute('style',hs);
		this._text_instruction__text.innerHTML="<font size=2><br\/>Toggle to Full Screen View <br\/><br\/>Move your head to align the red dot with a hotspot and wait until the image changes. <\/font>";
		this._text_instruction.appendChild(this._text_instruction__text);
		me._text_instruction.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_instruction.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_instruction.ggUpdatePosition=function (useTransition) {
		}
		this._tbox_timer.appendChild(this._text_instruction);
		this._countdown_txt=document.createElement('div');
		this._countdown_txt__text=document.createElement('div');
		this._countdown_txt.className='ggskin ggskin_textdiv';
		this._countdown_txt.ggTextDiv=this._countdown_txt__text;
		this._countdown_txt.ggId="Countdown_txt";
		this._countdown_txt.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._countdown_txt.ggVisible=true;
		this._countdown_txt.className='ggskin ggskin_text ';
		this._countdown_txt.ggType='text';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -66px;';
		hs+='position : absolute;';
		hs+='top : 246px;';
		hs+='visibility : inherit;';
		hs+='width : 228px;';
		hs+='pointer-events:auto;';
		this._countdown_txt.setAttribute('style',hs);
		this._countdown_txt.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 228px;';
		hs+='height: 32px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._countdown_txt__text.setAttribute('style',hs);
		this._countdown_txt__text.innerHTML="<font size=1><p>Box closing in <span id=\"countdowntimer\">20 <\/span> seconds<\/p>";
		this._countdown_txt.appendChild(this._countdown_txt__text);
		me._countdown_txt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._countdown_txt.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._countdown_txt.ggUpdatePosition=function (useTransition) {
		}
		this._tbox_timer.appendChild(this._countdown_txt);
		this.divSkin.appendChild(this._tbox_timer);
		this._fullscreen=document.createElement('div');
		this._fullscreen__img=document.createElement('img');
		this._fullscreen__img.className='ggskin ggskin_svg';
		this._fullscreen__img.setAttribute('src',basePath + 'images/fullscreen.svg');
		this._fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._fullscreen__img['ondragstart']=function() { return false; };
		this._fullscreen.appendChild(this._fullscreen__img);
		this._fullscreen__imgo=document.createElement('img');
		this._fullscreen__imgo.className='ggskin ggskin_svg';
		this._fullscreen__imgo.setAttribute('src',basePath + 'images/fullscreen__o.svg');
		this._fullscreen__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._fullscreen__imgo['ondragstart']=function() { return false; };
		this._fullscreen.appendChild(this._fullscreen__imgo);
		this._fullscreen.ggId="fullscreen";
		this._fullscreen.ggLeft=-35;
		this._fullscreen.ggTop=-30;
		this._fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen.ggVisible=true;
		this._fullscreen.className='ggskin ggskin_svg ';
		this._fullscreen.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -35px;';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._fullscreen.setAttribute('style',hs);
		this._fullscreen.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen.ggIsActive=function() {
			return false;
		}
		me._fullscreen.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._fullscreen.onclick=function (e) {
			me.player.toggleFullscreen();
		}
		this._fullscreen.onmouseover=function (e) {
			me._fullscreen__img.style.visibility='hidden';
			me._fullscreen__imgo.style.visibility='inherit';
		}
		this._fullscreen.onmouseout=function (e) {
			me._fullscreen__img.style.visibility='inherit';
			me._fullscreen__imgo.style.visibility='hidden';
		}
		this._fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._fullscreen);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.ggHotspotCallChildFunctions=function(functionname) {
		var stack = me.player.getCurrentPointHotspots();
		while (stack.length > 0) {
			var e = stack.pop();
			if (typeof e[functionname] == 'function') {
				e[functionname]();
			}
			if(e.hasChildNodes()) {
				for(var i=0; i<e.childNodes.length; i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		if (me._ht_node_timer.ggLastIsActive!=me._ht_node_timer.ggIsActive()) {
			me._ht_node_timer.ggLastIsActive=me._ht_node_timer.ggIsActive();
			if (me._ht_node_timer.ggLastIsActive) {
				ggSkinVars['ht_ani'] = true;
			} else {
				ggSkinVars['ht_ani'] = false;
			}
		}
		if (me._tbox_timer.ggLastIsActive!=me._tbox_timer.ggIsActive()) {
			me._tbox_timer.ggLastIsActive=me._tbox_timer.ggIsActive();
			if (me._tbox_timer.ggLastIsActive) {
			} else {
				ggSkinVars['ht_ani'] = false;
			}
		}
		me._tbox_timer.ggUpdateConditionTimer();
		me._pointtint.ggUpdateConditionTimer();
		me.ggHotspotCallChildFunctions('ggUpdateConditionTimer');
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		{
			this.__div=document.createElement('div');
			this.__div.ggId="ht_node";
			this.__div.ggLeft=-3;
			this.__div.ggTop=-69;
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : -3px;';
			hs+='position : absolute;';
			hs+='top : -69px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this._text_1=document.createElement('div');
			this._text_1__text=document.createElement('div');
			this._text_1.className='ggskin ggskin_textdiv';
			this._text_1.ggTextDiv=this._text_1__text;
			this._text_1.ggId="Text 1";
			this._text_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_1.ggVisible=true;
			this._text_1.className='ggskin ggskin_text ';
			this._text_1.ggType='text';
			hs ='';
			hs+='height : 17px;';
			hs+='left : -49px;';
			hs+='position : absolute;';
			hs+='top : 23px;';
			hs+='visibility : inherit;';
			hs+='width : 95px;';
			hs+='pointer-events:auto;';
			this._text_1.setAttribute('style',hs);
			this._text_1.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #95c866;';
			hs+='background: rgba(149,200,102,0.784314);';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 6px;';
			hs+=cssPrefix + 'border-radius: 6px;';
			hs+='color: rgba(248,248,248,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 3px 2px 3px;';
			hs+='overflow: hidden;';
			this._text_1__text.setAttribute('style',hs);
			this._text_1.ggUpdateText=function() {
				var hs="<font size=1>"+me.ggUserdata.title+"<\/font>";
				if (hs!=this.ggText) {
					this.ggText=hs;
					this.ggTextDiv.innerHTML=hs;
					if (this.ggUpdatePosition) this.ggUpdatePosition();
				}
			}
			me._text_1.ggUpdateText();
			this._text_1.appendChild(this._text_1__text);
			me._text_1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._text_1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._text_1.ggUpdatePosition=function (useTransition) {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((99-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._text_1);
			this._ht_node_image=document.createElement('div');
			this._ht_node_image__img=document.createElement('img');
			this._ht_node_image__img.className='ggskin ggskin_svg';
			this._ht_node_image__img.setAttribute('src',basePath + 'images/ht_node_image.svg');
			this._ht_node_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_node_image__img['ondragstart']=function() { return false; };
			this._ht_node_image.appendChild(this._ht_node_image__img);
			this._ht_node_image.ggId="ht_node_image";
			this._ht_node_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_node_image.ggVisible=true;
			this._ht_node_image.className='ggskin ggskin_svg ';
			this._ht_node_image.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 32px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			hs+='pointer-events:auto;';
			this._ht_node_image.setAttribute('style',hs);
			this._ht_node_image.style[domTransform + 'Origin']='50% 50%';
			me._ht_node_image.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_node_image.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._ht_node_image.ggCurrentLogicStateScaling = -1;
			this._ht_node_image.ggUpdateConditionTimer=function () {
				var newLogicStateScaling;
				if (
					(ggSkinVars['ht_ani'] == true)
				)
				{
					newLogicStateScaling = 0;
				}
				else {
					newLogicStateScaling = -1;
				}
				if (me._ht_node_image.ggCurrentLogicStateScaling != newLogicStateScaling) {
					me._ht_node_image.ggCurrentLogicStateScaling = newLogicStateScaling;
					me._ht_node_image.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
					if (me._ht_node_image.ggCurrentLogicStateScaling == 0) {
						me._ht_node_image.ggParameter.sx = 1.1;
						me._ht_node_image.ggParameter.sy = 1.1;
						me._ht_node_image.style[domTransform]=parameterToTransform(me._ht_node_image.ggParameter);
					}
					else {
						me._ht_node_image.ggParameter.sx = 1;
						me._ht_node_image.ggParameter.sy = 1;
						me._ht_node_image.style[domTransform]=parameterToTransform(me._ht_node_image.ggParameter);
					}
				}
			}
			this._ht_node_image.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._ht_node_image);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._text_1.ggUpdateText();
				me._ht_node_image.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};