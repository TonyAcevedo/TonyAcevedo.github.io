// Garden Gnome Software - Skin
// Pano2VR 5.2.4/15996
// Filename: simplex_vXtr3d_V3_1g_VR_Oct.ggsk
// Generated Thu Oct 11 23:27:53 2018

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	ggSkinVars['ht_ani'] = false;
	var me=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
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
	
	this.preloadImages=function() {
		var preLoadImg=new Image();
		preLoadImg.src=basePath + 'images/floorpln_hydbttn__o.png';
		preLoadImg.src=basePath + 'images/floorpln_shwbtn__o.png';
		preLoadImg.src=basePath + 'images/vrheadset__o.png';
		preLoadImg.src=basePath + 'images/videoplayer__o.png';
		preLoadImg.src=basePath + 'images/mapbttnhyd__o.png';
		preLoadImg.src=basePath + 'images/floorpln_hyd__o.png';
		preLoadImg.src=basePath + 'images/floorpln_show__o.png';
		preLoadImg.src=basePath + 'images/thumbnail_button__o.png';
		preLoadImg.src=basePath + 'images/_605__o.png';
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._containerflrplan=document.createElement('div');
		this._containerflrplan.ggId="ContainerFlrplan";
		this._containerflrplan.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._containerflrplan.ggVisible=true;
		this._containerflrplan.className='ggskin ggskin_container ';
		this._containerflrplan.ggType='container';
		hs ='';
		hs+='height : 768px;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 1250px;';
		hs+='pointer-events:none;';
		this._containerflrplan.setAttribute('style',hs);
		this._containerflrplan.style[domTransform + 'Origin']='0% 0%';
		me._containerflrplan.ggIsActive=function() {
			return false;
		}
		me._containerflrplan.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._containerflrplan.ggCurrentLogicStatePosition = -1;
		me._containerflrplan.ggCurrentLogicStateScaling = -1;
		this._containerflrplan.ggUpdateConditionTimer=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height < 1)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._containerflrplan.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._containerflrplan.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._containerflrplan.style[domTransition]='left none, top none, ' + cssPrefix + 'transform none';
				if (me._containerflrplan.ggCurrentLogicStatePosition == 0) {
					me._containerflrplan.style.left='-5px';
					me._containerflrplan.style.top='20px';
				}
				else {
					me._containerflrplan.style.left='0px';
					me._containerflrplan.style.top='-1px';
				}
			}
			var newLogicStateScaling;
			if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width <= 320) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height < 1)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width <= 375) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height < 1)
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width <= 414) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height < 1)
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width <= 480) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height > 1)
			)
			{
				newLogicStateScaling = 3;
			}
			else if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width <= 568) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height > 1)
			)
			{
				newLogicStateScaling = 4;
			}
			else if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width <= 640) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height > 1)
			)
			{
				newLogicStateScaling = 5;
			}
			else if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width <= 667) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height > 1)
			)
			{
				newLogicStateScaling = 6;
			}
			else if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width <= 732) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height > 1)
			)
			{
				newLogicStateScaling = 7;
			}
			else if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width <= 736) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height > 1)
			)
			{
				newLogicStateScaling = 8;
			}
			else if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width <= 768) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height < 1)
			)
			{
				newLogicStateScaling = 9;
			}
			else if (
				(me.player.getIsMobile() == false) && 
				(me.player.getViewerSize().width <= 960)
			)
			{
				newLogicStateScaling = 10;
			}
			else if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width <= 1024) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height > 1) || 
				(me.player.getViewerSize().width / me.player.getViewerSize().height < 1)
			)
			{
				newLogicStateScaling = 11;
			}
			else if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width >= 1024) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height > 1)
			)
			{
				newLogicStateScaling = 12;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._containerflrplan.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._containerflrplan.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._containerflrplan.style[domTransition]='left none, top none, ' + cssPrefix + 'transform none';
				if (me._containerflrplan.ggCurrentLogicStateScaling == 0) {
					me._containerflrplan.ggParameter.sx = 0.38;
					me._containerflrplan.ggParameter.sy = 0.4;
					me._containerflrplan.style[domTransform]=parameterToTransform(me._containerflrplan.ggParameter);
				}
				else if (me._containerflrplan.ggCurrentLogicStateScaling == 1) {
					me._containerflrplan.ggParameter.sx = 0.4;
					me._containerflrplan.ggParameter.sy = 0.45;
					me._containerflrplan.style[domTransform]=parameterToTransform(me._containerflrplan.ggParameter);
				}
				else if (me._containerflrplan.ggCurrentLogicStateScaling == 2) {
					me._containerflrplan.ggParameter.sx = 0.45;
					me._containerflrplan.ggParameter.sy = 0.48;
					me._containerflrplan.style[domTransform]=parameterToTransform(me._containerflrplan.ggParameter);
				}
				else if (me._containerflrplan.ggCurrentLogicStateScaling == 3) {
					me._containerflrplan.ggParameter.sx = 0.45;
					me._containerflrplan.ggParameter.sy = 0.45;
					me._containerflrplan.style[domTransform]=parameterToTransform(me._containerflrplan.ggParameter);
				}
				else if (me._containerflrplan.ggCurrentLogicStateScaling == 4) {
					me._containerflrplan.ggParameter.sx = 0.45;
					me._containerflrplan.ggParameter.sy = 0.45;
					me._containerflrplan.style[domTransform]=parameterToTransform(me._containerflrplan.ggParameter);
				}
				else if (me._containerflrplan.ggCurrentLogicStateScaling == 5) {
					me._containerflrplan.ggParameter.sx = 0.51;
					me._containerflrplan.ggParameter.sy = 0.51;
					me._containerflrplan.style[domTransform]=parameterToTransform(me._containerflrplan.ggParameter);
				}
				else if (me._containerflrplan.ggCurrentLogicStateScaling == 6) {
					me._containerflrplan.ggParameter.sx = 0.54;
					me._containerflrplan.ggParameter.sy = 0.54;
					me._containerflrplan.style[domTransform]=parameterToTransform(me._containerflrplan.ggParameter);
				}
				else if (me._containerflrplan.ggCurrentLogicStateScaling == 7) {
					me._containerflrplan.ggParameter.sx = 0.59;
					me._containerflrplan.ggParameter.sy = 0.59;
					me._containerflrplan.style[domTransform]=parameterToTransform(me._containerflrplan.ggParameter);
				}
				else if (me._containerflrplan.ggCurrentLogicStateScaling == 8) {
					me._containerflrplan.ggParameter.sx = 0.6;
					me._containerflrplan.ggParameter.sy = 0.6;
					me._containerflrplan.style[domTransform]=parameterToTransform(me._containerflrplan.ggParameter);
				}
				else if (me._containerflrplan.ggCurrentLogicStateScaling == 9) {
					me._containerflrplan.ggParameter.sx = 0.61;
					me._containerflrplan.ggParameter.sy = 0.63;
					me._containerflrplan.style[domTransform]=parameterToTransform(me._containerflrplan.ggParameter);
				}
				else if (me._containerflrplan.ggCurrentLogicStateScaling == 10) {
					me._containerflrplan.ggParameter.sx = 0.85;
					me._containerflrplan.ggParameter.sy = 0.85;
					me._containerflrplan.style[domTransform]=parameterToTransform(me._containerflrplan.ggParameter);
				}
				else if (me._containerflrplan.ggCurrentLogicStateScaling == 11) {
					me._containerflrplan.ggParameter.sx = 0.82;
					me._containerflrplan.ggParameter.sy = 0.82;
					me._containerflrplan.style[domTransform]=parameterToTransform(me._containerflrplan.ggParameter);
				}
				else if (me._containerflrplan.ggCurrentLogicStateScaling == 12) {
					me._containerflrplan.ggParameter.sx = 1;
					me._containerflrplan.ggParameter.sy = 1;
					me._containerflrplan.style[domTransform]=parameterToTransform(me._containerflrplan.ggParameter);
				}
				else {
					me._containerflrplan.ggParameter.sx = 1;
					me._containerflrplan.ggParameter.sy = 1;
					me._containerflrplan.style[domTransform]=parameterToTransform(me._containerflrplan.ggParameter);
				}
			}
		}
		this._containerflrplan.ggUpdatePosition=function (useTransition) {
		}
		this._floorplancontainer=document.createElement('div');
		this._floorplancontainer.ggId="FloorPlanContainer";
		this._floorplancontainer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._floorplancontainer.ggVisible=true;
		this._floorplancontainer.className='ggskin ggskin_rectangle ';
		this._floorplancontainer.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 436px;';
		hs+='left : -343px;';
		hs+='position : absolute;';
		hs+='top : 155px;';
		hs+='visibility : inherit;';
		hs+='width : 338px;';
		hs+='pointer-events:auto;';
		this._floorplancontainer.setAttribute('style',hs);
		this._floorplancontainer.style[domTransform + 'Origin']='50% 50%';
		me._floorplancontainer.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._floorplancontainer.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._floorplancontainer.ggUpdatePosition=function (useTransition) {
		}
		this._floor_plan_bg=document.createElement('div');
		this._floor_plan_bg.ggId="floor_plan_bg";
		this._floor_plan_bg.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		this._floor_plan_bg.ggVisible=true;
		this._floor_plan_bg.className='ggskin ggskin_rectangle ';
		this._floor_plan_bg.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(156,156,156,0.901961);';
		hs+='border : 4px solid #939393;';
		hs+='cursor : default;';
		hs+='height : 433px;';
		hs+='left : -3px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 335px;';
		hs+='pointer-events:auto;';
		this._floor_plan_bg.setAttribute('style',hs);
		this._floor_plan_bg.style[domTransform + 'Origin']='50% 50%';
		this._floor_plan_bg.style[domTransform]=parameterToTransform(this._floor_plan_bg.ggParameter);
		me._floor_plan_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._floor_plan_bg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._floor_plan_bg.ggCurrentLogicStateScaling = -1;
		this._floor_plan_bg.ggUpdateConditionNodeChange=function () {
			var newLogicStateScaling;
			if (
				(me.ggUserdata.tags.indexOf("BR") == -1)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._floor_plan_bg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._floor_plan_bg.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._floor_plan_bg.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._floor_plan_bg.ggCurrentLogicStateScaling == 0) {
					me._floor_plan_bg.ggParameter.sx = 0;
					me._floor_plan_bg.ggParameter.sy = 0;
					me._floor_plan_bg.style[domTransform]=parameterToTransform(me._floor_plan_bg.ggParameter);
				}
				else {
					me._floor_plan_bg.ggParameter.sx = 0;
					me._floor_plan_bg.ggParameter.sy = 0;
					me._floor_plan_bg.style[domTransform]=parameterToTransform(me._floor_plan_bg.ggParameter);
				}
			}
		}
		this._floor_plan_bg.ggUpdatePosition=function (useTransition) {
		}
		this._floor_plan_bg.ggNodeChange=function () {
			me._floor_plan_bg.ggUpdateConditionNodeChange();
		}
		this._flrplan_select=document.createElement('div');
		this._flrplan_select.ggId="FlrPlan_select";
		this._flrplan_select.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._flrplan_select.ggVisible=true;
		this._flrplan_select.className='ggskin ggskin_rectangle ';
		this._flrplan_select.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 15px;';
		hs+='border-radius : 15px;';
		hs+='background : rgba(255,255,255,0.0392157);';
		hs+='border : 0px solid #0000ff;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 158px;';
		hs+='position : absolute;';
		hs+='top : 405px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._flrplan_select.setAttribute('style',hs);
		this._flrplan_select.style[domTransform + 'Origin']='50% 50%';
		me._flrplan_select.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._flrplan_select.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._flrplan_select.ggUpdatePosition=function (useTransition) {
		}
		this._floorpln_hydbttn=document.createElement('div');
		this._floorpln_hydbttn__img=document.createElement('img');
		this._floorpln_hydbttn__img.className='ggskin ggskin_button';
		this._floorpln_hydbttn__img.setAttribute('src',basePath + 'images/floorpln_hydbttn.png');
		this._floorpln_hydbttn__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._floorpln_hydbttn__img.className='ggskin ggskin_button';
		this._floorpln_hydbttn__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._floorpln_hydbttn__img);
		this._floorpln_hydbttn.appendChild(this._floorpln_hydbttn__img);
		this._floorpln_hydbttn.ggId="FloorPln_HydBttn";
		this._floorpln_hydbttn.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		this._floorpln_hydbttn.ggVisible=true;
		this._floorpln_hydbttn.className='ggskin ggskin_button ';
		this._floorpln_hydbttn.ggType='button';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		this._floorpln_hydbttn.setAttribute('style',hs);
		this._floorpln_hydbttn.style[domTransform + 'Origin']='50% 50%';
		this._floorpln_hydbttn.style[domTransform]=parameterToTransform(this._floorpln_hydbttn.ggParameter);
		me._floorpln_hydbttn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._floorpln_hydbttn.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._floorpln_hydbttn.onclick=function (e) {
			if (me.player.transitionsDisabled) {
				me._floorplans.style[domTransition]='none';
			} else {
				me._floorplans.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._floorplans.ggParameter.rx=0;me._floorplans.ggParameter.ry=0;
			me._floorplans.style[domTransform]=parameterToTransform(me._floorplans.ggParameter);
			me._floorpln_hydbttn.style[domTransition]='none';
			me._floorpln_hydbttn.ggParameter.sx=0;me._floorpln_hydbttn.ggParameter.sy=0;
			me._floorpln_hydbttn.style[domTransform]=parameterToTransform(me._floorpln_hydbttn.ggParameter);
			if (me.player.transitionsDisabled) {
				me._floorpln_shwbtn.style[domTransition]='none';
			} else {
				me._floorpln_shwbtn.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._floorpln_shwbtn.ggParameter.sx=1;me._floorpln_shwbtn.ggParameter.sy=1;
			me._floorpln_shwbtn.style[domTransform]=parameterToTransform(me._floorpln_shwbtn.ggParameter);
		}
		this._floorpln_hydbttn.onmouseover=function (e) {
			me._floorpln_hydbttn__img.src=basePath + 'images/floorpln_hydbttn__o.png';
			me.elementMouseOver['floorpln_hydbttn']=true;
		}
		this._floorpln_hydbttn.onmouseout=function (e) {
			me._floorpln_hydbttn__img.src=basePath + 'images/floorpln_hydbttn.png';
			me.elementMouseOver['floorpln_hydbttn']=false;
		}
		this._floorpln_hydbttn.ontouchend=function (e) {
			me.elementMouseOver['floorpln_hydbttn']=false;
		}
		me._floorpln_hydbttn.ggCurrentLogicStateScaling = -1;
		this._floorpln_hydbttn.ggUpdateConditionNodeChange=function () {
			var newLogicStateScaling;
			if (
				(me.ggUserdata.tags.indexOf("BR") != -1)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._floorpln_hydbttn.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._floorpln_hydbttn.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._floorpln_hydbttn.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._floorpln_hydbttn.ggCurrentLogicStateScaling == 0) {
					me._floorpln_hydbttn.ggParameter.sx = 1;
					me._floorpln_hydbttn.ggParameter.sy = 1;
					me._floorpln_hydbttn.style[domTransform]=parameterToTransform(me._floorpln_hydbttn.ggParameter);
				}
				else {
					me._floorpln_hydbttn.ggParameter.sx = 0;
					me._floorpln_hydbttn.ggParameter.sy = 0;
					me._floorpln_hydbttn.style[domTransform]=parameterToTransform(me._floorpln_hydbttn.ggParameter);
				}
			}
		}
		this._floorpln_hydbttn.ggUpdatePosition=function (useTransition) {
		}
		this._floorpln_hydbttn.ggNodeChange=function () {
			me._floorpln_hydbttn.ggUpdateConditionNodeChange();
		}
		this.__1brtt_flrpln_bttn_hide=document.createElement('div');
		this.__1brtt_flrpln_bttn_hide__text=document.createElement('div');
		this.__1brtt_flrpln_bttn_hide.className='ggskin ggskin_textdiv';
		this.__1brtt_flrpln_bttn_hide.ggTextDiv=this.__1brtt_flrpln_bttn_hide__text;
		this.__1brtt_flrpln_bttn_hide.ggId="1BRtt_FlrPln_Bttn_hide";
		this.__1brtt_flrpln_bttn_hide.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__1brtt_flrpln_bttn_hide.ggVisible=false;
		this.__1brtt_flrpln_bttn_hide.className='ggskin ggskin_text ';
		this.__1brtt_flrpln_bttn_hide.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -64px;';
		hs+='position : absolute;';
		hs+='top : 34px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this.__1brtt_flrpln_bttn_hide.setAttribute('style',hs);
		this.__1brtt_flrpln_bttn_hide.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this.__1brtt_flrpln_bttn_hide__text.setAttribute('style',hs);
		this.__1brtt_flrpln_bttn_hide__text.innerHTML="Show Floor Plan";
		this.__1brtt_flrpln_bttn_hide.appendChild(this.__1brtt_flrpln_bttn_hide__text);
		me.__1brtt_flrpln_bttn_hide.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__1brtt_flrpln_bttn_hide.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me.__1brtt_flrpln_bttn_hide.ggCurrentLogicStateVisible = -1;
		this.__1brtt_flrpln_bttn_hide.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['floorpln_hydbttn'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1brtt_flrpln_bttn_hide.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1brtt_flrpln_bttn_hide.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1brtt_flrpln_bttn_hide.style[domTransition]='';
				if (me.__1brtt_flrpln_bttn_hide.ggCurrentLogicStateVisible == 0) {
					me.__1brtt_flrpln_bttn_hide.style.visibility=(Number(me.__1brtt_flrpln_bttn_hide.style.opacity)>0||!me.__1brtt_flrpln_bttn_hide.style.opacity)?'inherit':'hidden';
					me.__1brtt_flrpln_bttn_hide.ggVisible=true;
				}
				else {
					me.__1brtt_flrpln_bttn_hide.style.visibility="hidden";
					me.__1brtt_flrpln_bttn_hide.ggVisible=false;
				}
			}
		}
		this.__1brtt_flrpln_bttn_hide.ggUpdatePosition=function (useTransition) {
		}
		this._tt_flrpln_white_bttn_hide=document.createElement('div');
		this._tt_flrpln_white_bttn_hide__text=document.createElement('div');
		this._tt_flrpln_white_bttn_hide.className='ggskin ggskin_textdiv';
		this._tt_flrpln_white_bttn_hide.ggTextDiv=this._tt_flrpln_white_bttn_hide__text;
		this._tt_flrpln_white_bttn_hide.ggId="tt_FlrPln_white__Bttn_hide";
		this._tt_flrpln_white_bttn_hide.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_flrpln_white_bttn_hide.ggVisible=true;
		this._tt_flrpln_white_bttn_hide.className='ggskin ggskin_text ';
		this._tt_flrpln_white_bttn_hide.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_flrpln_white_bttn_hide.setAttribute('style',hs);
		this._tt_flrpln_white_bttn_hide.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_flrpln_white_bttn_hide__text.setAttribute('style',hs);
		this._tt_flrpln_white_bttn_hide__text.innerHTML="Show Floor Plan";
		this._tt_flrpln_white_bttn_hide.appendChild(this._tt_flrpln_white_bttn_hide__text);
		me._tt_flrpln_white_bttn_hide.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_flrpln_white_bttn_hide.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_flrpln_white_bttn_hide.ggUpdatePosition=function (useTransition) {
		}
		this.__1brtt_flrpln_bttn_hide.appendChild(this._tt_flrpln_white_bttn_hide);
		this._floorpln_hydbttn.appendChild(this.__1brtt_flrpln_bttn_hide);
		this._flrplan_select.appendChild(this._floorpln_hydbttn);
		this._floorpln_shwbtn=document.createElement('div');
		this._floorpln_shwbtn__img=document.createElement('img');
		this._floorpln_shwbtn__img.className='ggskin ggskin_button';
		this._floorpln_shwbtn__img.setAttribute('src',basePath + 'images/floorpln_shwbtn.png');
		this._floorpln_shwbtn__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._floorpln_shwbtn__img.className='ggskin ggskin_button';
		this._floorpln_shwbtn__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._floorpln_shwbtn__img);
		this._floorpln_shwbtn.appendChild(this._floorpln_shwbtn__img);
		this._floorpln_shwbtn.ggId="FloorPln_ShwBtn";
		this._floorpln_shwbtn.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._floorpln_shwbtn.ggVisible=true;
		this._floorpln_shwbtn.className='ggskin ggskin_button ';
		this._floorpln_shwbtn.ggType='button';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		this._floorpln_shwbtn.setAttribute('style',hs);
		this._floorpln_shwbtn.style[domTransform + 'Origin']='50% 50%';
		me._floorpln_shwbtn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._floorpln_shwbtn.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._floorpln_shwbtn.onclick=function (e) {
			if (me.player.transitionsDisabled) {
				me._floorplans.style[domTransition]='none';
			} else {
				me._floorplans.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._floorplans.ggParameter.rx=0;me._floorplans.ggParameter.ry=400;
			me._floorplans.style[domTransform]=parameterToTransform(me._floorplans.ggParameter);
			me._floorpln_shwbtn.style[domTransition]='none';
			me._floorpln_shwbtn.ggParameter.sx=0;me._floorpln_shwbtn.ggParameter.sy=0;
			me._floorpln_shwbtn.style[domTransform]=parameterToTransform(me._floorpln_shwbtn.ggParameter);
			me._floorpln_hydbttn.style[domTransition]='none';
			me._floorpln_hydbttn.ggParameter.sx=1;me._floorpln_hydbttn.ggParameter.sy=1;
			me._floorpln_hydbttn.style[domTransform]=parameterToTransform(me._floorpln_hydbttn.ggParameter);
		}
		this._floorpln_shwbtn.onmouseover=function (e) {
			me._floorpln_shwbtn__img.src=basePath + 'images/floorpln_shwbtn__o.png';
			me.elementMouseOver['floorpln_shwbtn']=true;
		}
		this._floorpln_shwbtn.onmouseout=function (e) {
			me._floorpln_shwbtn__img.src=basePath + 'images/floorpln_shwbtn.png';
			me.elementMouseOver['floorpln_shwbtn']=false;
		}
		this._floorpln_shwbtn.ontouchend=function (e) {
			me.elementMouseOver['floorpln_shwbtn']=false;
		}
		this._floorpln_shwbtn.ggUpdatePosition=function (useTransition) {
		}
		this.__1brtt_flrplndet_show=document.createElement('div');
		this.__1brtt_flrplndet_show__text=document.createElement('div');
		this.__1brtt_flrplndet_show.className='ggskin ggskin_textdiv';
		this.__1brtt_flrplndet_show.ggTextDiv=this.__1brtt_flrplndet_show__text;
		this.__1brtt_flrplndet_show.ggId="1BRtt_FlrPlnDet_show";
		this.__1brtt_flrplndet_show.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__1brtt_flrplndet_show.ggVisible=false;
		this.__1brtt_flrplndet_show.className='ggskin ggskin_text ';
		this.__1brtt_flrplndet_show.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this.__1brtt_flrplndet_show.setAttribute('style',hs);
		this.__1brtt_flrplndet_show.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this.__1brtt_flrplndet_show__text.setAttribute('style',hs);
		this.__1brtt_flrplndet_show__text.innerHTML="Show FloorPlan Details";
		this.__1brtt_flrplndet_show.appendChild(this.__1brtt_flrplndet_show__text);
		me.__1brtt_flrplndet_show.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__1brtt_flrplndet_show.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me.__1brtt_flrplndet_show.ggCurrentLogicStateVisible = -1;
		this.__1brtt_flrplndet_show.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['floorpln_shwbtn'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1brtt_flrplndet_show.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1brtt_flrplndet_show.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1brtt_flrplndet_show.style[domTransition]='';
				if (me.__1brtt_flrplndet_show.ggCurrentLogicStateVisible == 0) {
					me.__1brtt_flrplndet_show.style.visibility=(Number(me.__1brtt_flrplndet_show.style.opacity)>0||!me.__1brtt_flrplndet_show.style.opacity)?'inherit':'hidden';
					me.__1brtt_flrplndet_show.ggVisible=true;
				}
				else {
					me.__1brtt_flrplndet_show.style.visibility="hidden";
					me.__1brtt_flrplndet_show.ggVisible=false;
				}
			}
		}
		this.__1brtt_flrplndet_show.ggUpdatePosition=function (useTransition) {
		}
		this.__1brtt_flrplndet_white_show=document.createElement('div');
		this.__1brtt_flrplndet_white_show__text=document.createElement('div');
		this.__1brtt_flrplndet_white_show.className='ggskin ggskin_textdiv';
		this.__1brtt_flrplndet_white_show.ggTextDiv=this.__1brtt_flrplndet_white_show__text;
		this.__1brtt_flrplndet_white_show.ggId="1BRtt_FlrPlnDet_white_show";
		this.__1brtt_flrplndet_white_show.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__1brtt_flrplndet_white_show.ggVisible=true;
		this.__1brtt_flrplndet_white_show.className='ggskin ggskin_text ';
		this.__1brtt_flrplndet_white_show.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this.__1brtt_flrplndet_white_show.setAttribute('style',hs);
		this.__1brtt_flrplndet_white_show.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this.__1brtt_flrplndet_white_show__text.setAttribute('style',hs);
		this.__1brtt_flrplndet_white_show__text.innerHTML="Show FloorPlan Details";
		this.__1brtt_flrplndet_white_show.appendChild(this.__1brtt_flrplndet_white_show__text);
		me.__1brtt_flrplndet_white_show.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__1brtt_flrplndet_white_show.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__1brtt_flrplndet_white_show.ggUpdatePosition=function (useTransition) {
		}
		this.__1brtt_flrplndet_show.appendChild(this.__1brtt_flrplndet_white_show);
		this._floorpln_shwbtn.appendChild(this.__1brtt_flrplndet_show);
		this._flrplan_select.appendChild(this._floorpln_shwbtn);
		this._floor_plan_bg.appendChild(this._flrplan_select);
		this._mask=document.createElement('div');
		this._mask.ggId="mask";
		this._mask.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mask.ggVisible=true;
		this._mask.className='ggskin ggskin_container ';
		this._mask.ggType='container';
		hs ='';
		hs+='height : 400px;';
		hs+='left : 12px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 310px;';
		hs+='pointer-events:none;';
		this._mask.setAttribute('style',hs);
		this._mask.style[domTransform + 'Origin']='50% 50%';
		me._mask.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._mask.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._mask.ggUpdatePosition=function (useTransition) {
		}
		this._floorplans=document.createElement('div');
		this._floorplans.ggId="floorplans";
		this._floorplans.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._floorplans.ggVisible=true;
		this._floorplans.className='ggskin ggskin_container ';
		this._floorplans.ggType='container';
		hs ='';
		hs+='height : 400px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 310px;';
		hs+='pointer-events:none;';
		this._floorplans.setAttribute('style',hs);
		this._floorplans.style[domTransform + 'Origin']='50% 50%';
		me._floorplans.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._floorplans.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._floorplans.ggUpdatePosition=function (useTransition) {
		}
		this.__1br_flrplan=document.createElement('div');
		this.__1br_flrplan.ggId="1BR FlrPlan";
		this.__1br_flrplan.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		this.__1br_flrplan.ggVisible=true;
		this.__1br_flrplan.className='ggskin ggskin_rectangle ';
		this.__1br_flrplan.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='cursor : default;';
		hs+='height : 399px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 309px;';
		hs+='pointer-events:auto;';
		this.__1br_flrplan.setAttribute('style',hs);
		this.__1br_flrplan.style[domTransform + 'Origin']='50% 50%';
		this.__1br_flrplan.style[domTransform]=parameterToTransform(this.__1br_flrplan.ggParameter);
		me.__1br_flrplan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__1br_flrplan.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me.__1br_flrplan.ggCurrentLogicStateScaling = -1;
		this.__1br_flrplan.ggUpdateConditionNodeChange=function () {
			var newLogicStateScaling;
			if (
				(me.ggUserdata.tags.indexOf("1BR") != -1)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__1br_flrplan.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__1br_flrplan.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__1br_flrplan.style[domTransition]='' + cssPrefix + 'transform none';
				if (me.__1br_flrplan.ggCurrentLogicStateScaling == 0) {
					me.__1br_flrplan.ggParameter.sx = 1;
					me.__1br_flrplan.ggParameter.sy = 1;
					me.__1br_flrplan.style[domTransform]=parameterToTransform(me.__1br_flrplan.ggParameter);
				}
				else {
					me.__1br_flrplan.ggParameter.sx = 0;
					me.__1br_flrplan.ggParameter.sy = 0;
					me.__1br_flrplan.style[domTransform]=parameterToTransform(me.__1br_flrplan.ggParameter);
				}
			}
		}
		this.__1br_flrplan.ggUpdatePosition=function (useTransition) {
		}
		this.__1br_flrplan.ggNodeChange=function () {
			me.__1br_flrplan.ggUpdateConditionNodeChange();
		}
		this.__1brflrplan=document.createElement('div');
		this.__1brflrplan__img=document.createElement('img');
		this.__1brflrplan__img.className='ggskin ggskin_image';
		this.__1brflrplan__img.setAttribute('src',basePath + 'images/_1brflrplan.png');
		this.__1brflrplan__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this.__1brflrplan__img.className='ggskin ggskin_image';
		this.__1brflrplan__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__1brflrplan__img);
		this.__1brflrplan.appendChild(this.__1brflrplan__img);
		this.__1brflrplan.ggId="1BRFlrPlan";
		this.__1brflrplan.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__1brflrplan.ggVisible=true;
		this.__1brflrplan.className='ggskin ggskin_image ';
		this.__1brflrplan.ggType='image';
		hs ='';
		hs+='height : 400px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 310px;';
		hs+='pointer-events:auto;';
		this.__1brflrplan.setAttribute('style',hs);
		this.__1brflrplan.style[domTransform + 'Origin']='50% 50%';
		me.__1brflrplan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__1brflrplan.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__1brflrplan.ggUpdatePosition=function (useTransition) {
		}
		this.__1br_flrplan.appendChild(this.__1brflrplan);
		this.__1brfpdet=document.createElement('div');
		this.__1brfpdet__img=document.createElement('img');
		this.__1brfpdet__img.className='ggskin ggskin_image';
		this.__1brfpdet__img.setAttribute('src',basePath + 'images/_1brfpdet.png');
		this.__1brfpdet__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this.__1brfpdet__img.className='ggskin ggskin_image';
		this.__1brfpdet__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__1brfpdet__img);
		this.__1brfpdet.appendChild(this.__1brfpdet__img);
		this.__1brfpdet.ggId="1BRFPDet";
		this.__1brfpdet.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__1brfpdet.ggVisible=true;
		this.__1brfpdet.className='ggskin ggskin_image ';
		this.__1brfpdet.ggType='image';
		hs ='';
		hs+='height : 400px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -401px;';
		hs+='visibility : inherit;';
		hs+='width : 310px;';
		hs+='pointer-events:auto;';
		this.__1brfpdet.setAttribute('style',hs);
		this.__1brfpdet.style[domTransform + 'Origin']='50% 50%';
		me.__1brfpdet.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__1brfpdet.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__1brfpdet.ggUpdatePosition=function (useTransition) {
		}
		this.__1br_flrplan.appendChild(this.__1brfpdet);
		this.__1brmarker_1=document.createElement('div');
		this.__1brmarker_1.ggMarkerNodeId='{node1}';
		nodeMarker.push(this.__1brmarker_1);
		this.__1brmarker_1.ggId="1BRMarker 1";
		this.__1brmarker_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__1brmarker_1.ggVisible=true;
		this.__1brmarker_1.className='ggskin ggskin_mark ';
		this.__1brmarker_1.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 181px;';
		hs+='position : absolute;';
		hs+='top : 317px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this.__1brmarker_1.setAttribute('style',hs);
		this.__1brmarker_1.style[domTransform + 'Origin']='50% 50%';
		me.__1brmarker_1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me.__1brmarker_1.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this.__1brmarker_1.onclick=function (e) {
			me.player.openNext('{node1}');
		}
		this.__1brmarker_1.ggActivate=function () {
			me.__1brbeam.style[domTransition]='none';
			me.__1brbeam.ggParameter.rx=182;me.__1brbeam.ggParameter.ry=318;
			me.__1brbeam.style[domTransform]=parameterToTransform(me.__1brbeam.ggParameter);
		}
		this.__1brmarker_1.ggUpdateConditionNodeChange=function () {
				me.__1brmarker_1__normal.ggNodeChangeMain();
				me.__1brmarker_1__active.ggNodeChangeMain();
		}
		this.__1brmarker_1.ggUpdatePosition=function (useTransition) {
		}
		this.__1brmarker_1.ggNodeChange=function () {
			me.__1brmarker_1.ggUpdateConditionNodeChange();
		}
		this.__1br_flrplan.appendChild(this.__1brmarker_1);
		this.__1brmarker_2=document.createElement('div');
		this.__1brmarker_2.ggMarkerNodeId='{node5}';
		nodeMarker.push(this.__1brmarker_2);
		this.__1brmarker_2.ggId="1BRMarker 2";
		this.__1brmarker_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__1brmarker_2.ggVisible=true;
		this.__1brmarker_2.className='ggskin ggskin_mark ';
		this.__1brmarker_2.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 131px;';
		hs+='position : absolute;';
		hs+='top : 196px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this.__1brmarker_2.setAttribute('style',hs);
		this.__1brmarker_2.style[domTransform + 'Origin']='50% 50%';
		me.__1brmarker_2.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me.__1brmarker_2.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this.__1brmarker_2.onclick=function (e) {
			me.player.openNext('{node5}');
		}
		this.__1brmarker_2.ggActivate=function () {
			me.__1brbeam.style[domTransition]='none';
			me.__1brbeam.ggParameter.rx=132;me.__1brbeam.ggParameter.ry=197;
			me.__1brbeam.style[domTransform]=parameterToTransform(me.__1brbeam.ggParameter);
		}
		this.__1brmarker_2.ggUpdateConditionNodeChange=function () {
				me.__1brmarker_2__normal.ggNodeChangeMain();
				me.__1brmarker_2__active.ggNodeChangeMain();
		}
		this.__1brmarker_2.ggUpdatePosition=function (useTransition) {
		}
		this.__1brmarker_2.ggNodeChange=function () {
			me.__1brmarker_2.ggUpdateConditionNodeChange();
		}
		this.__1br_flrplan.appendChild(this.__1brmarker_2);
		this.__1brmarker_3=document.createElement('div');
		this.__1brmarker_3.ggMarkerNodeId='{node2}';
		nodeMarker.push(this.__1brmarker_3);
		this.__1brmarker_3.ggId="1BRMarker 3";
		this.__1brmarker_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__1brmarker_3.ggVisible=true;
		this.__1brmarker_3.className='ggskin ggskin_mark ';
		this.__1brmarker_3.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 183px;';
		hs+='position : absolute;';
		hs+='top : 201px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this.__1brmarker_3.setAttribute('style',hs);
		this.__1brmarker_3.style[domTransform + 'Origin']='50% 50%';
		me.__1brmarker_3.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me.__1brmarker_3.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this.__1brmarker_3.onclick=function (e) {
			me.player.openNext('{node2}');
		}
		this.__1brmarker_3.ggActivate=function () {
			me.__1brbeam.style[domTransition]='none';
			me.__1brbeam.ggParameter.rx=184;me.__1brbeam.ggParameter.ry=202;
			me.__1brbeam.style[domTransform]=parameterToTransform(me.__1brbeam.ggParameter);
		}
		this.__1brmarker_3.ggUpdateConditionNodeChange=function () {
				me.__1brmarker_3__normal.ggNodeChangeMain();
				me.__1brmarker_3__active.ggNodeChangeMain();
		}
		this.__1brmarker_3.ggUpdatePosition=function (useTransition) {
		}
		this.__1brmarker_3.ggNodeChange=function () {
			me.__1brmarker_3.ggUpdateConditionNodeChange();
		}
		this.__1br_flrplan.appendChild(this.__1brmarker_3);
		this.__1brmarker_4=document.createElement('div');
		this.__1brmarker_4.ggMarkerNodeId='{node6}';
		nodeMarker.push(this.__1brmarker_4);
		this.__1brmarker_4.ggId="1BRMarker 4";
		this.__1brmarker_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__1brmarker_4.ggVisible=true;
		this.__1brmarker_4.className='ggskin ggskin_mark ';
		this.__1brmarker_4.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 66px;';
		hs+='position : absolute;';
		hs+='top : 296px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this.__1brmarker_4.setAttribute('style',hs);
		this.__1brmarker_4.style[domTransform + 'Origin']='50% 50%';
		me.__1brmarker_4.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me.__1brmarker_4.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this.__1brmarker_4.onclick=function (e) {
			me.player.openNext('{node6}');
		}
		this.__1brmarker_4.ggActivate=function () {
			me.__1brbeam.style[domTransition]='none';
			me.__1brbeam.ggParameter.rx=67;me.__1brbeam.ggParameter.ry=297;
			me.__1brbeam.style[domTransform]=parameterToTransform(me.__1brbeam.ggParameter);
		}
		this.__1brmarker_4.ggUpdateConditionNodeChange=function () {
				me.__1brmarker_4__normal.ggNodeChangeMain();
				me.__1brmarker_4__active.ggNodeChangeMain();
		}
		this.__1brmarker_4.ggUpdatePosition=function (useTransition) {
		}
		this.__1brmarker_4.ggNodeChange=function () {
			me.__1brmarker_4.ggUpdateConditionNodeChange();
		}
		this.__1br_flrplan.appendChild(this.__1brmarker_4);
		this.__1brbeam=document.createElement('div');
		this.__1brbeam.ggId="1BRbeam";
		this.__1brbeam.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__1brbeam.ggVisible=true;
		this.__1brbeam.className='ggskin ggskin_rectangle ';
		this.__1brbeam.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 11px;';
		hs+='left : -9px;';
		hs+='position : absolute;';
		hs+='top : -7px;';
		hs+='visibility : inherit;';
		hs+='width : 11px;';
		hs+='pointer-events:auto;';
		this.__1brbeam.setAttribute('style',hs);
		this.__1brbeam.style[domTransform + 'Origin']='50% 50%';
		me.__1brbeam.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__1brbeam.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__1brbeam.ggUpdatePosition=function (useTransition) {
		}
		this.__1brimage_radar1=document.createElement('div');
		this.__1brimage_radar1__img=document.createElement('img');
		this.__1brimage_radar1__img.className='ggskin ggskin_image';
		this.__1brimage_radar1__img.setAttribute('src',basePath + 'images/_1brimage_radar1.png');
		this.__1brimage_radar1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this.__1brimage_radar1__img.className='ggskin ggskin_image';
		this.__1brimage_radar1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__1brimage_radar1__img);
		this.__1brimage_radar1.appendChild(this.__1brimage_radar1__img);
		this.__1brimage_radar1.ggId="1BRImage_radar1";
		this.__1brimage_radar1.ggLeft=-38;
		this.__1brimage_radar1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__1brimage_radar1.ggVisible=true;
		this.__1brimage_radar1.className='ggskin ggskin_image ';
		this.__1brimage_radar1.ggType='image';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -38px;';
		hs+='position : absolute;';
		hs+='top : -43px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		this.__1brimage_radar1.setAttribute('style',hs);
		this.__1brimage_radar1.style[domTransform + 'Origin']='50% 50%';
		me.__1brimage_radar1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__1brimage_radar1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__1brimage_radar1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this.__1brbeam.appendChild(this.__1brimage_radar1);
		this.__1brbeam_cover=document.createElement('div');
		this.__1brbeam_cover.ggId="1BRbeam cover";
		this.__1brbeam_cover.ggLeft=-10;
		this.__1brbeam_cover.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__1brbeam_cover.ggVisible=true;
		this.__1brbeam_cover.className='ggskin ggskin_rectangle ';
		this.__1brbeam_cover.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : #aa5500;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 11px;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		this.__1brbeam_cover.setAttribute('style',hs);
		this.__1brbeam_cover.style[domTransform + 'Origin']='50% 50%';
		me.__1brbeam_cover.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__1brbeam_cover.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__1brbeam_cover.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this.__1brbeam.appendChild(this.__1brbeam_cover);
		this.__1br_flrplan.appendChild(this.__1brbeam);
		this._floorplans.appendChild(this.__1br_flrplan);
		this.__2br_flrplan=document.createElement('div');
		this.__2br_flrplan.ggId="2BR FlrPlan";
		this.__2br_flrplan.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		this.__2br_flrplan.ggVisible=true;
		this.__2br_flrplan.className='ggskin ggskin_rectangle ';
		this.__2br_flrplan.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='cursor : default;';
		hs+='height : 399px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 309px;';
		hs+='pointer-events:auto;';
		this.__2br_flrplan.setAttribute('style',hs);
		this.__2br_flrplan.style[domTransform + 'Origin']='50% 50%';
		this.__2br_flrplan.style[domTransform]=parameterToTransform(this.__2br_flrplan.ggParameter);
		me.__2br_flrplan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__2br_flrplan.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me.__2br_flrplan.ggCurrentLogicStateScaling = -1;
		this.__2br_flrplan.ggUpdateConditionNodeChange=function () {
			var newLogicStateScaling;
			if (
				(me.ggUserdata.tags.indexOf("2BR") != -1)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__2br_flrplan.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__2br_flrplan.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__2br_flrplan.style[domTransition]='' + cssPrefix + 'transform none';
				if (me.__2br_flrplan.ggCurrentLogicStateScaling == 0) {
					me.__2br_flrplan.ggParameter.sx = 1;
					me.__2br_flrplan.ggParameter.sy = 1;
					me.__2br_flrplan.style[domTransform]=parameterToTransform(me.__2br_flrplan.ggParameter);
				}
				else {
					me.__2br_flrplan.ggParameter.sx = 0;
					me.__2br_flrplan.ggParameter.sy = 0;
					me.__2br_flrplan.style[domTransform]=parameterToTransform(me.__2br_flrplan.ggParameter);
				}
			}
		}
		this.__2br_flrplan.ggUpdatePosition=function (useTransition) {
		}
		this.__2br_flrplan.ggNodeChange=function () {
			me.__2br_flrplan.ggUpdateConditionNodeChange();
		}
		this.__2brflrplan=document.createElement('div');
		this.__2brflrplan__img=document.createElement('img');
		this.__2brflrplan__img.className='ggskin ggskin_image';
		this.__2brflrplan__img.setAttribute('src',basePath + 'images/_2brflrplan.png');
		this.__2brflrplan__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this.__2brflrplan__img.className='ggskin ggskin_image';
		this.__2brflrplan__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__2brflrplan__img);
		this.__2brflrplan.appendChild(this.__2brflrplan__img);
		this.__2brflrplan.ggId="2BRFlrPlan";
		this.__2brflrplan.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__2brflrplan.ggVisible=true;
		this.__2brflrplan.className='ggskin ggskin_image ';
		this.__2brflrplan.ggType='image';
		hs ='';
		hs+='height : 400px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 310px;';
		hs+='pointer-events:auto;';
		this.__2brflrplan.setAttribute('style',hs);
		this.__2brflrplan.style[domTransform + 'Origin']='50% 50%';
		me.__2brflrplan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__2brflrplan.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__2brflrplan.ggUpdatePosition=function (useTransition) {
		}
		this.__2br_flrplan.appendChild(this.__2brflrplan);
		this.__2brfpdet=document.createElement('div');
		this.__2brfpdet__img=document.createElement('img');
		this.__2brfpdet__img.className='ggskin ggskin_image';
		this.__2brfpdet__img.setAttribute('src',basePath + 'images/_2brfpdet.png');
		this.__2brfpdet__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this.__2brfpdet__img.className='ggskin ggskin_image';
		this.__2brfpdet__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__2brfpdet__img);
		this.__2brfpdet.appendChild(this.__2brfpdet__img);
		this.__2brfpdet.ggId="2BRFPDet";
		this.__2brfpdet.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__2brfpdet.ggVisible=true;
		this.__2brfpdet.className='ggskin ggskin_image ';
		this.__2brfpdet.ggType='image';
		hs ='';
		hs+='height : 400px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -401px;';
		hs+='visibility : inherit;';
		hs+='width : 310px;';
		hs+='pointer-events:auto;';
		this.__2brfpdet.setAttribute('style',hs);
		this.__2brfpdet.style[domTransform + 'Origin']='50% 50%';
		me.__2brfpdet.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__2brfpdet.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__2brfpdet.ggUpdatePosition=function (useTransition) {
		}
		this.__2br_flrplan.appendChild(this.__2brfpdet);
		this.__2brmarker_1=document.createElement('div');
		this.__2brmarker_1.ggMarkerNodeId='{node9}';
		nodeMarker.push(this.__2brmarker_1);
		this.__2brmarker_1.ggId="2BRMarker 1";
		this.__2brmarker_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__2brmarker_1.ggVisible=true;
		this.__2brmarker_1.className='ggskin ggskin_mark ';
		this.__2brmarker_1.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 175px;';
		hs+='position : absolute;';
		hs+='top : 358px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this.__2brmarker_1.setAttribute('style',hs);
		this.__2brmarker_1.style[domTransform + 'Origin']='50% 50%';
		me.__2brmarker_1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me.__2brmarker_1.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this.__2brmarker_1.onclick=function (e) {
			me.player.openNext('{node9}');
		}
		this.__2brmarker_1.ggActivate=function () {
			me.__2brbeam.style[domTransition]='none';
			me.__2brbeam.ggParameter.rx=176;me.__2brbeam.ggParameter.ry=359;
			me.__2brbeam.style[domTransform]=parameterToTransform(me.__2brbeam.ggParameter);
		}
		this.__2brmarker_1.ggUpdateConditionNodeChange=function () {
				me.__2brmarker_1__normal.ggNodeChangeMain();
				me.__2brmarker_1__active.ggNodeChangeMain();
		}
		this.__2brmarker_1.ggUpdatePosition=function (useTransition) {
		}
		this.__2brmarker_1.ggNodeChange=function () {
			me.__2brmarker_1.ggUpdateConditionNodeChange();
		}
		this.__2br_flrplan.appendChild(this.__2brmarker_1);
		this.__2brmarkerr_2=document.createElement('div');
		this.__2brmarkerr_2.ggMarkerNodeId='{node11}';
		nodeMarker.push(this.__2brmarkerr_2);
		this.__2brmarkerr_2.ggId="2BRMarkerr 2";
		this.__2brmarkerr_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__2brmarkerr_2.ggVisible=true;
		this.__2brmarkerr_2.className='ggskin ggskin_mark ';
		this.__2brmarkerr_2.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 155px;';
		hs+='position : absolute;';
		hs+='top : 120px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this.__2brmarkerr_2.setAttribute('style',hs);
		this.__2brmarkerr_2.style[domTransform + 'Origin']='50% 50%';
		me.__2brmarkerr_2.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me.__2brmarkerr_2.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this.__2brmarkerr_2.onclick=function (e) {
			me.player.openNext('{node11}');
		}
		this.__2brmarkerr_2.ggActivate=function () {
			me.__2brbeam.style[domTransition]='none';
			me.__2brbeam.ggParameter.rx=156;me.__2brbeam.ggParameter.ry=121;
			me.__2brbeam.style[domTransform]=parameterToTransform(me.__2brbeam.ggParameter);
		}
		this.__2brmarkerr_2.ggUpdateConditionNodeChange=function () {
				me.__2brmarkerr_2__normal.ggNodeChangeMain();
				me.__2brmarkerr_2__active.ggNodeChangeMain();
		}
		this.__2brmarkerr_2.ggUpdatePosition=function (useTransition) {
		}
		this.__2brmarkerr_2.ggNodeChange=function () {
			me.__2brmarkerr_2.ggUpdateConditionNodeChange();
		}
		this.__2br_flrplan.appendChild(this.__2brmarkerr_2);
		this.__2brmarker_3=document.createElement('div');
		this.__2brmarker_3.ggMarkerNodeId='{node8}';
		nodeMarker.push(this.__2brmarker_3);
		this.__2brmarker_3.ggId="2BRMarker 3";
		this.__2brmarker_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__2brmarker_3.ggVisible=true;
		this.__2brmarker_3.className='ggskin ggskin_mark ';
		this.__2brmarker_3.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 195px;';
		hs+='position : absolute;';
		hs+='top : 170px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this.__2brmarker_3.setAttribute('style',hs);
		this.__2brmarker_3.style[domTransform + 'Origin']='50% 50%';
		me.__2brmarker_3.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me.__2brmarker_3.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this.__2brmarker_3.onclick=function (e) {
			me.player.openNext('{node8}');
		}
		this.__2brmarker_3.ggActivate=function () {
			me.__2brbeam.style[domTransition]='none';
			me.__2brbeam.ggParameter.rx=196;me.__2brbeam.ggParameter.ry=171;
			me.__2brbeam.style[domTransform]=parameterToTransform(me.__2brbeam.ggParameter);
		}
		this.__2brmarker_3.ggUpdateConditionNodeChange=function () {
				me.__2brmarker_3__normal.ggNodeChangeMain();
				me.__2brmarker_3__active.ggNodeChangeMain();
		}
		this.__2brmarker_3.ggUpdatePosition=function (useTransition) {
		}
		this.__2brmarker_3.ggNodeChange=function () {
			me.__2brmarker_3.ggUpdateConditionNodeChange();
		}
		this.__2br_flrplan.appendChild(this.__2brmarker_3);
		this.__2brmarker_4=document.createElement('div');
		this.__2brmarker_4.ggMarkerNodeId='{node7}';
		nodeMarker.push(this.__2brmarker_4);
		this.__2brmarker_4.ggId="2BRMarker 4";
		this.__2brmarker_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__2brmarker_4.ggVisible=true;
		this.__2brmarker_4.className='ggskin ggskin_mark ';
		this.__2brmarker_4.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 150px;';
		hs+='position : absolute;';
		hs+='top : 243px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this.__2brmarker_4.setAttribute('style',hs);
		this.__2brmarker_4.style[domTransform + 'Origin']='50% 50%';
		me.__2brmarker_4.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me.__2brmarker_4.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this.__2brmarker_4.onclick=function (e) {
			me.player.openNext('{node7}');
		}
		this.__2brmarker_4.ggActivate=function () {
			me.__2brbeam.style[domTransition]='none';
			me.__2brbeam.ggParameter.rx=151;me.__2brbeam.ggParameter.ry=244;
			me.__2brbeam.style[domTransform]=parameterToTransform(me.__2brbeam.ggParameter);
		}
		this.__2brmarker_4.ggUpdateConditionNodeChange=function () {
				me.__2brmarker_4__normal.ggNodeChangeMain();
				me.__2brmarker_4__active.ggNodeChangeMain();
		}
		this.__2brmarker_4.ggUpdatePosition=function (useTransition) {
		}
		this.__2brmarker_4.ggNodeChange=function () {
			me.__2brmarker_4.ggUpdateConditionNodeChange();
		}
		this.__2br_flrplan.appendChild(this.__2brmarker_4);
		this.__2brmarker_5=document.createElement('div');
		this.__2brmarker_5.ggMarkerNodeId='{node10}';
		nodeMarker.push(this.__2brmarker_5);
		this.__2brmarker_5.ggId="2BRMarker 5";
		this.__2brmarker_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__2brmarker_5.ggVisible=true;
		this.__2brmarker_5.className='ggskin ggskin_mark ';
		this.__2brmarker_5.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 178px;';
		hs+='position : absolute;';
		hs+='top : 318px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this.__2brmarker_5.setAttribute('style',hs);
		this.__2brmarker_5.style[domTransform + 'Origin']='50% 50%';
		me.__2brmarker_5.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me.__2brmarker_5.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this.__2brmarker_5.onclick=function (e) {
			me.player.openNext('{node10}');
		}
		this.__2brmarker_5.ggActivate=function () {
			me.__2brbeam.style[domTransition]='none';
			me.__2brbeam.ggParameter.rx=179;me.__2brbeam.ggParameter.ry=319;
			me.__2brbeam.style[domTransform]=parameterToTransform(me.__2brbeam.ggParameter);
		}
		this.__2brmarker_5.ggUpdateConditionNodeChange=function () {
				me.__2brmarker_5__normal.ggNodeChangeMain();
				me.__2brmarker_5__active.ggNodeChangeMain();
		}
		this.__2brmarker_5.ggUpdatePosition=function (useTransition) {
		}
		this.__2brmarker_5.ggNodeChange=function () {
			me.__2brmarker_5.ggUpdateConditionNodeChange();
		}
		this.__2br_flrplan.appendChild(this.__2brmarker_5);
		this.__2brbeam=document.createElement('div');
		this.__2brbeam.ggId="2BRbeam";
		this.__2brbeam.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__2brbeam.ggVisible=true;
		this.__2brbeam.className='ggskin ggskin_rectangle ';
		this.__2brbeam.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 6px;';
		hs+='left : -4px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : inherit;';
		hs+='width : 6px;';
		hs+='pointer-events:auto;';
		this.__2brbeam.setAttribute('style',hs);
		this.__2brbeam.style[domTransform + 'Origin']='50% 50%';
		me.__2brbeam.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__2brbeam.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__2brbeam.ggUpdatePosition=function (useTransition) {
		}
		this.__2brimage_radar=document.createElement('div');
		this.__2brimage_radar__img=document.createElement('img');
		this.__2brimage_radar__img.className='ggskin ggskin_image';
		this.__2brimage_radar__img.setAttribute('src',basePath + 'images/_2brimage_radar.png');
		this.__2brimage_radar__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this.__2brimage_radar__img.className='ggskin ggskin_image';
		this.__2brimage_radar__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__2brimage_radar__img);
		this.__2brimage_radar.appendChild(this.__2brimage_radar__img);
		this.__2brimage_radar.ggId="2BRImage_radar";
		this.__2brimage_radar.ggLeft=-33;
		this.__2brimage_radar.ggTop=-48;
		this.__2brimage_radar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__2brimage_radar.ggVisible=true;
		this.__2brimage_radar.className='ggskin ggskin_image ';
		this.__2brimage_radar.ggType='image';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -33px;';
		hs+='position : absolute;';
		hs+='top : -48px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		this.__2brimage_radar.setAttribute('style',hs);
		this.__2brimage_radar.style[domTransform + 'Origin']='50% 50%';
		me.__2brimage_radar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__2brimage_radar.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__2brimage_radar.ggUpdatePosition=function (useTransition) {
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
		this.__2brbeam.appendChild(this.__2brimage_radar);
		this.__2brbeam_cover=document.createElement('div');
		this.__2brbeam_cover.ggId="2BRbeam cover";
		this.__2brbeam_cover.ggLeft=-3;
		this.__2brbeam_cover.ggTop=-4;
		this.__2brbeam_cover.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__2brbeam_cover.ggVisible=true;
		this.__2brbeam_cover.className='ggskin ggskin_rectangle ';
		this.__2brbeam_cover.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : #aa5500;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 6px;';
		hs+='left : -3px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : inherit;';
		hs+='width : 6px;';
		hs+='pointer-events:auto;';
		this.__2brbeam_cover.setAttribute('style',hs);
		this.__2brbeam_cover.style[domTransform + 'Origin']='50% 50%';
		me.__2brbeam_cover.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__2brbeam_cover.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__2brbeam_cover.ggUpdatePosition=function (useTransition) {
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
		this.__2brbeam.appendChild(this.__2brbeam_cover);
		this.__2br_flrplan.appendChild(this.__2brbeam);
		this._floorplans.appendChild(this.__2br_flrplan);
		this.__3br_flrplan=document.createElement('div');
		this.__3br_flrplan.ggId="3BR FlrPlan";
		this.__3br_flrplan.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		this.__3br_flrplan.ggVisible=true;
		this.__3br_flrplan.className='ggskin ggskin_rectangle ';
		this.__3br_flrplan.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='cursor : default;';
		hs+='height : 399px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 309px;';
		hs+='pointer-events:auto;';
		this.__3br_flrplan.setAttribute('style',hs);
		this.__3br_flrplan.style[domTransform + 'Origin']='50% 50%';
		this.__3br_flrplan.style[domTransform]=parameterToTransform(this.__3br_flrplan.ggParameter);
		me.__3br_flrplan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__3br_flrplan.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me.__3br_flrplan.ggCurrentLogicStateScaling = -1;
		this.__3br_flrplan.ggUpdateConditionNodeChange=function () {
			var newLogicStateScaling;
			if (
				(me.ggUserdata.tags.indexOf("3BR") != -1)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__3br_flrplan.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__3br_flrplan.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__3br_flrplan.style[domTransition]='' + cssPrefix + 'transform none';
				if (me.__3br_flrplan.ggCurrentLogicStateScaling == 0) {
					me.__3br_flrplan.ggParameter.sx = 1;
					me.__3br_flrplan.ggParameter.sy = 1;
					me.__3br_flrplan.style[domTransform]=parameterToTransform(me.__3br_flrplan.ggParameter);
				}
				else {
					me.__3br_flrplan.ggParameter.sx = 0;
					me.__3br_flrplan.ggParameter.sy = 0;
					me.__3br_flrplan.style[domTransform]=parameterToTransform(me.__3br_flrplan.ggParameter);
				}
			}
		}
		this.__3br_flrplan.ggUpdatePosition=function (useTransition) {
		}
		this.__3br_flrplan.ggNodeChange=function () {
			me.__3br_flrplan.ggUpdateConditionNodeChange();
		}
		this.__3brflrplan=document.createElement('div');
		this.__3brflrplan__img=document.createElement('img');
		this.__3brflrplan__img.className='ggskin ggskin_image';
		this.__3brflrplan__img.setAttribute('src',basePath + 'images/_3brflrplan.png');
		this.__3brflrplan__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this.__3brflrplan__img.className='ggskin ggskin_image';
		this.__3brflrplan__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__3brflrplan__img);
		this.__3brflrplan.appendChild(this.__3brflrplan__img);
		this.__3brflrplan.ggId="3BRFlrPlan";
		this.__3brflrplan.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__3brflrplan.ggVisible=true;
		this.__3brflrplan.className='ggskin ggskin_image ';
		this.__3brflrplan.ggType='image';
		hs ='';
		hs+='height : 400px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 310px;';
		hs+='pointer-events:auto;';
		this.__3brflrplan.setAttribute('style',hs);
		this.__3brflrplan.style[domTransform + 'Origin']='50% 50%';
		me.__3brflrplan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__3brflrplan.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__3brflrplan.ggUpdatePosition=function (useTransition) {
		}
		this.__3br_flrplan.appendChild(this.__3brflrplan);
		this.__3brflrplandetails=document.createElement('div');
		this.__3brflrplandetails__img=document.createElement('img');
		this.__3brflrplandetails__img.className='ggskin ggskin_image';
		this.__3brflrplandetails__img.setAttribute('src',basePath + 'images/_3brflrplandetails.png');
		this.__3brflrplandetails__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this.__3brflrplandetails__img.className='ggskin ggskin_image';
		this.__3brflrplandetails__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__3brflrplandetails__img);
		this.__3brflrplandetails.appendChild(this.__3brflrplandetails__img);
		this.__3brflrplandetails.ggId="3BRFlrPlanDetails";
		this.__3brflrplandetails.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__3brflrplandetails.ggVisible=true;
		this.__3brflrplandetails.className='ggskin ggskin_image ';
		this.__3brflrplandetails.ggType='image';
		hs ='';
		hs+='height : 400px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -401px;';
		hs+='visibility : inherit;';
		hs+='width : 310px;';
		hs+='pointer-events:auto;';
		this.__3brflrplandetails.setAttribute('style',hs);
		this.__3brflrplandetails.style[domTransform + 'Origin']='50% 50%';
		me.__3brflrplandetails.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__3brflrplandetails.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__3brflrplandetails.ggUpdatePosition=function (useTransition) {
		}
		this.__3br_flrplan.appendChild(this.__3brflrplandetails);
		this.__3brmarker_1=document.createElement('div');
		this.__3brmarker_1.ggMarkerNodeId='{node14}';
		nodeMarker.push(this.__3brmarker_1);
		this.__3brmarker_1.ggId="3BRMarker 1";
		this.__3brmarker_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__3brmarker_1.ggVisible=true;
		this.__3brmarker_1.className='ggskin ggskin_mark ';
		this.__3brmarker_1.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 128px;';
		hs+='position : absolute;';
		hs+='top : 324px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this.__3brmarker_1.setAttribute('style',hs);
		this.__3brmarker_1.style[domTransform + 'Origin']='50% 50%';
		me.__3brmarker_1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me.__3brmarker_1.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this.__3brmarker_1.onclick=function (e) {
			me.player.openNext('{node14}');
		}
		this.__3brmarker_1.ggActivate=function () {
			me.__3brbeam.style[domTransition]='none';
			me.__3brbeam.ggParameter.rx=129;me.__3brbeam.ggParameter.ry=325;
			me.__3brbeam.style[domTransform]=parameterToTransform(me.__3brbeam.ggParameter);
		}
		this.__3brmarker_1.ggUpdateConditionNodeChange=function () {
				me.__3brmarker_1__normal.ggNodeChangeMain();
				me.__3brmarker_1__active.ggNodeChangeMain();
		}
		this.__3brmarker_1.ggUpdatePosition=function (useTransition) {
		}
		this.__3brmarker_1.ggNodeChange=function () {
			me.__3brmarker_1.ggUpdateConditionNodeChange();
		}
		this.__3br_flrplan.appendChild(this.__3brmarker_1);
		this.__3brmarker_2=document.createElement('div');
		this.__3brmarker_2.ggMarkerNodeId='{node15}';
		nodeMarker.push(this.__3brmarker_2);
		this.__3brmarker_2.ggId="3BRMarker 2";
		this.__3brmarker_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__3brmarker_2.ggVisible=true;
		this.__3brmarker_2.className='ggskin ggskin_mark ';
		this.__3brmarker_2.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 235px;';
		hs+='position : absolute;';
		hs+='top : 198px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this.__3brmarker_2.setAttribute('style',hs);
		this.__3brmarker_2.style[domTransform + 'Origin']='50% 50%';
		me.__3brmarker_2.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me.__3brmarker_2.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this.__3brmarker_2.onclick=function (e) {
			me.player.openNext('{node15}');
		}
		this.__3brmarker_2.ggActivate=function () {
			me.__3brbeam.style[domTransition]='none';
			me.__3brbeam.ggParameter.rx=236;me.__3brbeam.ggParameter.ry=199;
			me.__3brbeam.style[domTransform]=parameterToTransform(me.__3brbeam.ggParameter);
		}
		this.__3brmarker_2.ggUpdateConditionNodeChange=function () {
				me.__3brmarker_2__normal.ggNodeChangeMain();
				me.__3brmarker_2__active.ggNodeChangeMain();
		}
		this.__3brmarker_2.ggUpdatePosition=function (useTransition) {
		}
		this.__3brmarker_2.ggNodeChange=function () {
			me.__3brmarker_2.ggUpdateConditionNodeChange();
		}
		this.__3br_flrplan.appendChild(this.__3brmarker_2);
		this.__3brmarker_3=document.createElement('div');
		this.__3brmarker_3.ggMarkerNodeId='{node12}';
		nodeMarker.push(this.__3brmarker_3);
		this.__3brmarker_3.ggId="3BRMarker 3";
		this.__3brmarker_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__3brmarker_3.ggVisible=true;
		this.__3brmarker_3.className='ggskin ggskin_mark ';
		this.__3brmarker_3.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 236px;';
		hs+='position : absolute;';
		hs+='top : 149px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this.__3brmarker_3.setAttribute('style',hs);
		this.__3brmarker_3.style[domTransform + 'Origin']='50% 50%';
		me.__3brmarker_3.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me.__3brmarker_3.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this.__3brmarker_3.onclick=function (e) {
			me.player.openNext('{node12}');
		}
		this.__3brmarker_3.ggActivate=function () {
			me.__3brbeam.style[domTransition]='none';
			me.__3brbeam.ggParameter.rx=237;me.__3brbeam.ggParameter.ry=150;
			me.__3brbeam.style[domTransform]=parameterToTransform(me.__3brbeam.ggParameter);
		}
		this.__3brmarker_3.ggUpdateConditionNodeChange=function () {
				me.__3brmarker_3__normal.ggNodeChangeMain();
				me.__3brmarker_3__active.ggNodeChangeMain();
		}
		this.__3brmarker_3.ggUpdatePosition=function (useTransition) {
		}
		this.__3brmarker_3.ggNodeChange=function () {
			me.__3brmarker_3.ggUpdateConditionNodeChange();
		}
		this.__3br_flrplan.appendChild(this.__3brmarker_3);
		this.__3brmarker_4=document.createElement('div');
		this.__3brmarker_4.ggMarkerNodeId='{node16}';
		nodeMarker.push(this.__3brmarker_4);
		this.__3brmarker_4.ggId="3BRMarker 4";
		this.__3brmarker_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__3brmarker_4.ggVisible=true;
		this.__3brmarker_4.className='ggskin ggskin_mark ';
		this.__3brmarker_4.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='top : 174px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this.__3brmarker_4.setAttribute('style',hs);
		this.__3brmarker_4.style[domTransform + 'Origin']='50% 50%';
		me.__3brmarker_4.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me.__3brmarker_4.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this.__3brmarker_4.onclick=function (e) {
			me.player.openNext('{node16}');
		}
		this.__3brmarker_4.ggActivate=function () {
			me.__3brbeam.style[domTransition]='none';
			me.__3brbeam.ggParameter.rx=61;me.__3brbeam.ggParameter.ry=175;
			me.__3brbeam.style[domTransform]=parameterToTransform(me.__3brbeam.ggParameter);
		}
		this.__3brmarker_4.ggUpdateConditionNodeChange=function () {
				me.__3brmarker_4__normal.ggNodeChangeMain();
				me.__3brmarker_4__active.ggNodeChangeMain();
		}
		this.__3brmarker_4.ggUpdatePosition=function (useTransition) {
		}
		this.__3brmarker_4.ggNodeChange=function () {
			me.__3brmarker_4.ggUpdateConditionNodeChange();
		}
		this.__3br_flrplan.appendChild(this.__3brmarker_4);
		this.__3brmarker_5=document.createElement('div');
		this.__3brmarker_5.ggMarkerNodeId='{node17}';
		nodeMarker.push(this.__3brmarker_5);
		this.__3brmarker_5.ggId="3BRMarker 5";
		this.__3brmarker_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__3brmarker_5.ggVisible=true;
		this.__3brmarker_5.className='ggskin ggskin_mark ';
		this.__3brmarker_5.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 179px;';
		hs+='position : absolute;';
		hs+='top : 150px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this.__3brmarker_5.setAttribute('style',hs);
		this.__3brmarker_5.style[domTransform + 'Origin']='50% 50%';
		me.__3brmarker_5.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me.__3brmarker_5.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this.__3brmarker_5.onclick=function (e) {
			me.player.openNext('{node17}');
		}
		this.__3brmarker_5.ggActivate=function () {
			me.__3brbeam.style[domTransition]='none';
			me.__3brbeam.ggParameter.rx=180;me.__3brbeam.ggParameter.ry=151;
			me.__3brbeam.style[domTransform]=parameterToTransform(me.__3brbeam.ggParameter);
		}
		this.__3brmarker_5.ggUpdateConditionNodeChange=function () {
				me.__3brmarker_5__normal.ggNodeChangeMain();
				me.__3brmarker_5__active.ggNodeChangeMain();
		}
		this.__3brmarker_5.ggUpdatePosition=function (useTransition) {
		}
		this.__3brmarker_5.ggNodeChange=function () {
			me.__3brmarker_5.ggUpdateConditionNodeChange();
		}
		this.__3br_flrplan.appendChild(this.__3brmarker_5);
		this.__3brbeam=document.createElement('div');
		this.__3brbeam.ggId="3BRbeam";
		this.__3brbeam.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__3brbeam.ggVisible=true;
		this.__3brbeam.className='ggskin ggskin_rectangle ';
		this.__3brbeam.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 11px;';
		hs+='left : -12px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 11px;';
		hs+='pointer-events:auto;';
		this.__3brbeam.setAttribute('style',hs);
		this.__3brbeam.style[domTransform + 'Origin']='50% 50%';
		me.__3brbeam.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__3brbeam.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__3brbeam.ggUpdatePosition=function (useTransition) {
		}
		this.__3brimage_radar=document.createElement('div');
		this.__3brimage_radar__img=document.createElement('img');
		this.__3brimage_radar__img.className='ggskin ggskin_image';
		this.__3brimage_radar__img.setAttribute('src',basePath + 'images/_3brimage_radar.png');
		this.__3brimage_radar__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this.__3brimage_radar__img.className='ggskin ggskin_image';
		this.__3brimage_radar__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__3brimage_radar__img);
		this.__3brimage_radar.appendChild(this.__3brimage_radar__img);
		this.__3brimage_radar.ggId="3BRImage_radar";
		this.__3brimage_radar.ggLeft=-39;
		this.__3brimage_radar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__3brimage_radar.ggVisible=true;
		this.__3brimage_radar.className='ggskin ggskin_image ';
		this.__3brimage_radar.ggType='image';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -39px;';
		hs+='position : absolute;';
		hs+='top : -43px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		this.__3brimage_radar.setAttribute('style',hs);
		this.__3brimage_radar.style[domTransform + 'Origin']='50% 50%';
		me.__3brimage_radar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__3brimage_radar.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__3brimage_radar.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this.__3brbeam.appendChild(this.__3brimage_radar);
		this.__3brbeam_cover=document.createElement('div');
		this.__3brbeam_cover.ggId="3BRbeam cover";
		this.__3brbeam_cover.ggLeft=-10;
		this.__3brbeam_cover.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__3brbeam_cover.ggVisible=true;
		this.__3brbeam_cover.className='ggskin ggskin_rectangle ';
		this.__3brbeam_cover.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : #aa5500;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 11px;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		this.__3brbeam_cover.setAttribute('style',hs);
		this.__3brbeam_cover.style[domTransform + 'Origin']='50% 50%';
		me.__3brbeam_cover.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__3brbeam_cover.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__3brbeam_cover.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this.__3brbeam.appendChild(this.__3brbeam_cover);
		this.__3br_flrplan.appendChild(this.__3brbeam);
		this._floorplans.appendChild(this.__3br_flrplan);
		this._mask.appendChild(this._floorplans);
		this._floor_plan_bg.appendChild(this._mask);
		this._flrplanclose=document.createElement('div');
		this._flrplanclose__img=document.createElement('img');
		this._flrplanclose__img.className='ggskin ggskin_svg';
		this._flrplanclose__img.setAttribute('src',basePath + 'images/flrplanclose.svg');
		this._flrplanclose__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._flrplanclose__img['ondragstart']=function() { return false; };
		this._flrplanclose.appendChild(this._flrplanclose__img);
		this._flrplanclose__imgo=document.createElement('img');
		this._flrplanclose__imgo.className='ggskin ggskin_svg';
		this._flrplanclose__imgo.setAttribute('src',basePath + 'images/flrplanclose__o.svg');
		this._flrplanclose__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._flrplanclose__imgo['ondragstart']=function() { return false; };
		this._flrplanclose.appendChild(this._flrplanclose__imgo);
		this._flrplanclose.ggId="FlrPlanClose";
		this._flrplanclose.ggLeft=-31;
		this._flrplanclose.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._flrplanclose.ggVisible=true;
		this._flrplanclose.className='ggskin ggskin_svg ';
		this._flrplanclose.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -33px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._flrplanclose.setAttribute('style',hs);
		this._flrplanclose.style[domTransform + 'Origin']='50% 50%';
		me._flrplanclose.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._flrplanclose.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._flrplanclose.onclick=function (e) {
			if (me.player.transitionsDisabled) {
				me._floor_plan_bg.style[domTransition]='none';
			} else {
				me._floor_plan_bg.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._floor_plan_bg.ggParameter.rx=0;me._floor_plan_bg.ggParameter.ry=0;
			me._floor_plan_bg.style[domTransform]=parameterToTransform(me._floor_plan_bg.ggParameter);
			me._floorpln_hyd.style[domTransition]='none';
			me._floorpln_hyd.ggParameter.sx=0;me._floorpln_hyd.ggParameter.sy=0;
			me._floorpln_hyd.style[domTransform]=parameterToTransform(me._floorpln_hyd.ggParameter);
			me._floorpln_show.style[domTransition]='none';
			me._floorpln_show.ggParameter.sx=1;me._floorpln_show.ggParameter.sy=1;
			me._floorpln_show.style[domTransform]=parameterToTransform(me._floorpln_show.ggParameter);
		}
		this._flrplanclose.onmouseover=function (e) {
			me._flrplanclose__img.style.visibility='hidden';
			me._flrplanclose__imgo.style.visibility='inherit';
		}
		this._flrplanclose.onmouseout=function (e) {
			me._flrplanclose__img.style.visibility='inherit';
			me._flrplanclose__imgo.style.visibility='hidden';
		}
		this._flrplanclose.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 4 + w) + 'px';
			}
		}
		this._floor_plan_bg.appendChild(this._flrplanclose);
		this._floorplancontainer.appendChild(this._floor_plan_bg);
		this._containerflrplan.appendChild(this._floorplancontainer);
		this.divSkin.appendChild(this._containerflrplan);
		this._container4vrinfo=document.createElement('div');
		this._container4vrinfo.ggId="Container4VRinfo";
		this._container4vrinfo.ggLeft=-119;
		this._container4vrinfo.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		this._container4vrinfo.ggVisible=true;
		this._container4vrinfo.className='ggskin ggskin_container ';
		this._container4vrinfo.ggType='container';
		hs ='';
		hs+='height : 153px;';
		hs+='left : -119px;';
		hs+='position : absolute;';
		hs+='top : 262px;';
		hs+='visibility : inherit;';
		hs+='width : 238px;';
		hs+='pointer-events:none;';
		this._container4vrinfo.setAttribute('style',hs);
		this._container4vrinfo.style[domTransform + 'Origin']='50% 50%';
		this._container4vrinfo.style[domTransform]=parameterToTransform(this._container4vrinfo.ggParameter);
		me._container4vrinfo.ggIsActive=function() {
			return false;
		}
		me._container4vrinfo.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._container4vrinfo.ggCurrentLogicStatePosition = -1;
		this._container4vrinfo.ggUpdateConditionTimer=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height > 1) && 
				(me.player.getViewerSize().height <= 414)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._container4vrinfo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._container4vrinfo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._container4vrinfo.style[domTransition]='left none, top none';
				if (me._container4vrinfo.ggCurrentLogicStatePosition == 0) {
					me._container4vrinfo.ggLeft=-119;
					me._container4vrinfo.style.top='120px';
					me._container4vrinfo.ggUpdatePosition(true);
				}
				else {
					me._container4vrinfo.ggLeft=-119;
					me._container4vrinfo.style.top='262px';
					me._container4vrinfo.ggUpdatePosition(true);
				}
			}
		}
		this._container4vrinfo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
			}
		}
		this._rectangle_1=document.createElement('div');
		this._rectangle_1.ggId="Rectangle 1";
		this._rectangle_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_1.ggVisible=true;
		this._rectangle_1.className='ggskin ggskin_rectangle ';
		this._rectangle_1.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : rgba(162,162,162,0.941176);';
		hs+='border : 1px solid rgba(20,20,209,0.784314);';
		hs+='cursor : default;';
		hs+='height : 316px;';
		hs+='left : -81px;';
		hs+='position : absolute;';
		hs+='top : -87px;';
		hs+='visibility : inherit;';
		hs+='width : 398px;';
		hs+='pointer-events:auto;';
		this._rectangle_1.setAttribute('style',hs);
		this._rectangle_1.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._rectangle_1.ggCurrentLogicStateScaling = -1;
		this._rectangle_1.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width < 768)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_1.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._rectangle_1.ggCurrentLogicStateScaling == 0) {
					me._rectangle_1.ggParameter.sx = 0.7;
					me._rectangle_1.ggParameter.sy = 0.7;
					me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
				}
				else {
					me._rectangle_1.ggParameter.sx = 1;
					me._rectangle_1.ggParameter.sy = 1;
					me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
				}
			}
		}
		this._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		this._text_10=document.createElement('div');
		this._text_10__text=document.createElement('div');
		this._text_10.className='ggskin ggskin_textdiv';
		this._text_10.ggTextDiv=this._text_10__text;
		this._text_10.ggId="Text 10";
		this._text_10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_10.ggVisible=true;
		this._text_10.className='ggskin ggskin_text ';
		this._text_10.ggType='text';
		hs ='';
		hs+='height : 297px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 391px;';
		hs+='pointer-events:auto;';
		this._text_10.setAttribute('style',hs);
		this._text_10.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 391px;';
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
		this._text_10__text.setAttribute('style',hs);
		this._text_10__text.innerHTML="<font size=2><br\/>BASIC REQUIREMENTS FOR VR TOUR:<br\/><br\/>- Google Cardboard viewer or VR Viewer.<br\/>- Smartphones running Android OS 4.5 and higher <br\/>  or iPhones with iOS 9.1 and higher <br\/>- Display size from 4.7\u201d- 5.5\"<br\/><br\/>If viewed on a tablet, do not use the touchscreen.<br\/>Hold tablet at eye level, use red dot as point of reference<br\/>and move tablet around you.<br\/><br\/>For more VR information check <a href=https:\/\/vr.google.com\/cardboard\/ target=_blank>Google VR <\/a><br\/><br\/>Caution: May cause dizziness after prolonged use.";
		this._text_10.appendChild(this._text_10__text);
		me._text_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_10.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_10.ggUpdatePosition=function (useTransition) {
		}
		this._rectangle_1.appendChild(this._text_10);
		this._latervr_txt=document.createElement('div');
		this._latervr_txt__text=document.createElement('div');
		this._latervr_txt.className='ggskin ggskin_textdiv';
		this._latervr_txt.ggTextDiv=this._latervr_txt__text;
		this._latervr_txt.ggId="LaterVR_txt";
		this._latervr_txt.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._latervr_txt.ggVisible=true;
		this._latervr_txt.className='ggskin ggskin_text ';
		this._latervr_txt.ggType='text';
		hs ='';
		hs+='height : 15px;';
		hs+='left : 269px;';
		hs+='position : absolute;';
		hs+='top : 282px;';
		hs+='visibility : inherit;';
		hs+='width : 51px;';
		hs+='pointer-events:auto;';
		this._latervr_txt.setAttribute('style',hs);
		this._latervr_txt.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 51px;';
		hs+='height: 15px;';
		hs+='background: #828282;';
		hs+='background: rgba(130,130,130,0.882353);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(170,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._latervr_txt__text.setAttribute('style',hs);
		this._latervr_txt__text.innerHTML="<font size=1>Later<\/font>";
		this._latervr_txt.appendChild(this._latervr_txt__text);
		me._latervr_txt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._latervr_txt.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._latervr_txt.onclick=function (e) {
			var flag=me._container4vrinfo.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._container4vrinfo.style[domTransition]='none';
			} else {
				me._container4vrinfo.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._container4vrinfo.ggParameter.sx=0;me._container4vrinfo.ggParameter.sy=0;
				me._container4vrinfo.style[domTransform]=parameterToTransform(me._container4vrinfo.ggParameter);
			} else {
				me._container4vrinfo.ggParameter.sx=0;me._container4vrinfo.ggParameter.sy=0;
				me._container4vrinfo.style[domTransform]=parameterToTransform(me._container4vrinfo.ggParameter);
			}
			me._container4vrinfo.ggScaleActive=!flag;
		}
		this._latervr_txt.ggUpdatePosition=function (useTransition) {
		}
		this._rectangle_1.appendChild(this._latervr_txt);
		this._text_11=document.createElement('div');
		this._text_11__text=document.createElement('div');
		this._text_11.className='ggskin ggskin_textdiv';
		this._text_11.ggTextDiv=this._text_11__text;
		this._text_11.ggId="Text 11";
		this._text_11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_11.ggVisible=true;
		this._text_11.className='ggskin ggskin_text ';
		this._text_11.ggType='text';
		hs ='';
		hs+='height : 16px;';
		hs+='left : 72px;';
		hs+='position : absolute;';
		hs+='top : 282px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		this._text_11.setAttribute('style',hs);
		this._text_11.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 50px;';
		hs+='height: 16px;';
		hs+='background: #a9b398;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(244,244,244,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._text_11__text.setAttribute('style',hs);
		this._text_11__text.innerHTML="<font size=1>Try now<\/font>";
		this._text_11.appendChild(this._text_11__text);
		me._text_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_11.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_11.onclick=function (e) {
			me.player.openUrl("CardbrdVR.html","_blank");
			var flag=me._container4vrinfo.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._container4vrinfo.style[domTransition]='none';
			} else {
				me._container4vrinfo.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._container4vrinfo.ggParameter.sx=0;me._container4vrinfo.ggParameter.sy=0;
				me._container4vrinfo.style[domTransform]=parameterToTransform(me._container4vrinfo.ggParameter);
			} else {
				me._container4vrinfo.ggParameter.sx=0;me._container4vrinfo.ggParameter.sy=0;
				me._container4vrinfo.style[domTransform]=parameterToTransform(me._container4vrinfo.ggParameter);
			}
			me._container4vrinfo.ggScaleActive=!flag;
		}
		this._text_11.ggUpdatePosition=function (useTransition) {
		}
		this._rectangle_1.appendChild(this._text_11);
		this._container4vrinfo.appendChild(this._rectangle_1);
		this.divSkin.appendChild(this._container4vrinfo);
		this._container4mm=document.createElement('div');
		this._container4mm.ggId="Container4MM";
		this._container4mm.ggLeft=-324;
		this._container4mm.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container4mm.ggVisible=true;
		this._container4mm.className='ggskin ggskin_container ';
		this._container4mm.ggType='container';
		hs ='';
		hs+='height : 420px;';
		hs+='left : -324px;';
		hs+='position : absolute;';
		hs+='top : 174px;';
		hs+='visibility : inherit;';
		hs+='width : 648px;';
		hs+='pointer-events:none;';
		this._container4mm.setAttribute('style',hs);
		this._container4mm.style[domTransform + 'Origin']='50% 50%';
		me._container4mm.ggIsActive=function() {
			return false;
		}
		me._container4mm.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._container4mm.ggCurrentLogicStatePosition = -1;
		me._container4mm.ggCurrentLogicStateScaling = -1;
		this._container4mm.ggUpdateConditionTimer=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height > 1) && 
				(me.player.getViewerSize().width <= 736)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height < 1) && 
				(me.player.getViewerSize().width < 760)
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height < 1) && 
				(me.player.getViewerSize().width >= 768)
			)
			{
				newLogicStatePosition = 2;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._container4mm.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._container4mm.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._container4mm.style[domTransition]='left none, top none, ' + cssPrefix + 'transform none';
				if (me._container4mm.ggCurrentLogicStatePosition == 0) {
					me._container4mm.ggLeft=-324;
					me._container4mm.style.top='5px';
					me._container4mm.ggUpdatePosition(true);
				}
				else if (me._container4mm.ggCurrentLogicStatePosition == 1) {
					me._container4mm.ggLeft=-324;
					me._container4mm.style.top='80px';
					me._container4mm.ggUpdatePosition(true);
				}
				else if (me._container4mm.ggCurrentLogicStatePosition == 2) {
					me._container4mm.ggLeft=-324;
					me._container4mm.style.top='250px';
					me._container4mm.ggUpdatePosition(true);
				}
				else {
					me._container4mm.ggLeft=-324;
					me._container4mm.style.top='174px';
					me._container4mm.ggUpdatePosition(true);
				}
			}
			var newLogicStateScaling;
			if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height < 1) && 
				(me.player.getViewerSize().width <= 320)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height < 1) && 
				(me.player.getViewerSize().width <= 375)
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height < 1) && 
				(me.player.getViewerSize().width <= 414)
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height > 1) && 
				(me.player.getViewerSize().width <= 568)
			)
			{
				newLogicStateScaling = 3;
			}
			else if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height > 1) && 
				(me.player.getViewerSize().width <= 667)
			)
			{
				newLogicStateScaling = 4;
			}
			else if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height > 1) && 
				(me.player.getViewerSize().width <= 736)
			)
			{
				newLogicStateScaling = 5;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._container4mm.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._container4mm.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._container4mm.style[domTransition]='left none, top none, ' + cssPrefix + 'transform none';
				if (me._container4mm.ggCurrentLogicStateScaling == 0) {
					me._container4mm.ggParameter.sx = 0.45;
					me._container4mm.ggParameter.sy = 0.45;
					me._container4mm.style[domTransform]=parameterToTransform(me._container4mm.ggParameter);
				}
				else if (me._container4mm.ggCurrentLogicStateScaling == 1) {
					me._container4mm.ggParameter.sx = 0.5;
					me._container4mm.ggParameter.sy = 0.5;
					me._container4mm.style[domTransform]=parameterToTransform(me._container4mm.ggParameter);
				}
				else if (me._container4mm.ggCurrentLogicStateScaling == 2) {
					me._container4mm.ggParameter.sx = 0.6;
					me._container4mm.ggParameter.sy = 0.6;
					me._container4mm.style[domTransform]=parameterToTransform(me._container4mm.ggParameter);
				}
				else if (me._container4mm.ggCurrentLogicStateScaling == 3) {
					me._container4mm.ggParameter.sx = 0.55;
					me._container4mm.ggParameter.sy = 0.55;
					me._container4mm.style[domTransform]=parameterToTransform(me._container4mm.ggParameter);
				}
				else if (me._container4mm.ggCurrentLogicStateScaling == 4) {
					me._container4mm.ggParameter.sx = 0.65;
					me._container4mm.ggParameter.sy = 0.65;
					me._container4mm.style[domTransform]=parameterToTransform(me._container4mm.ggParameter);
				}
				else if (me._container4mm.ggCurrentLogicStateScaling == 5) {
					me._container4mm.ggParameter.sx = 0.7;
					me._container4mm.ggParameter.sy = 0.7;
					me._container4mm.style[domTransform]=parameterToTransform(me._container4mm.ggParameter);
				}
				else {
					me._container4mm.ggParameter.sx = 1;
					me._container4mm.ggParameter.sy = 1;
					me._container4mm.style[domTransform]=parameterToTransform(me._container4mm.ggParameter);
				}
			}
		}
		this._container4mm.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
			}
		}
		this._maprect=document.createElement('div');
		this._maprect.ggId="MapRect";
		this._maprect.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		this._maprect.ggVisible=false;
		this._maprect.className='ggskin ggskin_rectangle ';
		this._maprect.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 419px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 647px;';
		hs+='pointer-events:auto;';
		this._maprect.setAttribute('style',hs);
		this._maprect.style[domTransform + 'Origin']='50% 50%';
		this._maprect.style[domTransform]=parameterToTransform(this._maprect.ggParameter);
		me._maprect.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._maprect.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._maprect.ggCurrentLogicStateScaling = -1;
		me._maprect.ggCurrentLogicStateVisible = -1;
		this._maprect.ggUpdateConditionNodeChange=function () {
			var newLogicStateScaling;
			if (
				(me.ggUserdata.tags.indexOf("Amenities") == -1)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._maprect.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._maprect.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._maprect.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._maprect.ggCurrentLogicStateScaling == 0) {
					me._maprect.ggParameter.sx = 0;
					me._maprect.ggParameter.sy = 0;
					me._maprect.style[domTransform]=parameterToTransform(me._maprect.ggParameter);
				}
				else {
					me._maprect.ggParameter.sx = 0;
					me._maprect.ggParameter.sy = 0;
					me._maprect.style[domTransform]=parameterToTransform(me._maprect.ggParameter);
				}
			}
			var newLogicStateVisible;
			if (
				(me.ggUserdata.tags.indexOf("Amenities") == -1)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._maprect.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._maprect.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._maprect.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._maprect.ggCurrentLogicStateVisible == 0) {
					me._maprect.style.visibility="hidden";
					me._maprect.ggVisible=false;
				}
				else {
					me._maprect.style.visibility="hidden";
					me._maprect.ggVisible=false;
				}
			}
		}
		this._maprect.ggUpdatePosition=function (useTransition) {
		}
		this._maprect.ggNodeChange=function () {
			me._maprect.ggUpdateConditionNodeChange();
		}
		this._map_1=document.createElement('div');
		this._map_1.innerHTML='Map goes here...';
		this._map_1.ggFilter = '';
		this._map_1.ggFilteredIds = [];
		this._map_1.ggId="Map 1";
		this._map_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_1.ggVisible=true;
		this._map_1.className='ggskin ggskin_map ';
		this._map_1.ggType='map';
		hs ='';
		hs+='background : #fff;';
		hs+='border : 1px solid #000;';
		hs+='height : 410px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 638px;';
		hs+='pointer-events:auto;';
		this._map_1.setAttribute('style',hs);
		this._map_1.style[domTransform + 'Origin']='50% 50%';
		me._map_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_1.ggUpdateConditionTimer=function () {
			me._map_1.ggRadar.update();
		}
		this._map_1.ggUpdatePosition=function (useTransition) {
		}
		this._map_1.ggNodeChange=function () {
			if (this.ggLastActivMarker) {
				if (this.ggLastActivMarker._div.ggDeactivate) this.ggLastActivMarker._div.ggDeactivate();
			}
			var id=me.player.getCurrentNode();
			var marker=this.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			this.ggLastActivMarker=marker;
		}
		this._maprect.appendChild(this._map_1);
		this._map_close=document.createElement('div');
		this._map_close__img=document.createElement('img');
		this._map_close__img.className='ggskin ggskin_svg';
		this._map_close__img.setAttribute('src',basePath + 'images/map_close.svg');
		this._map_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._map_close__img['ondragstart']=function() { return false; };
		this._map_close.appendChild(this._map_close__img);
		this._map_close__imgo=document.createElement('img');
		this._map_close__imgo.className='ggskin ggskin_svg';
		this._map_close__imgo.setAttribute('src',basePath + 'images/map_close__o.svg');
		this._map_close__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._map_close__imgo['ondragstart']=function() { return false; };
		this._map_close.appendChild(this._map_close__imgo);
		this._map_close.ggId="Map_close";
		this._map_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_close.ggVisible=true;
		this._map_close.className='ggskin ggskin_svg ';
		this._map_close.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 609px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._map_close.setAttribute('style',hs);
		this._map_close.style[domTransform + 'Origin']='50% 50%';
		me._map_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_close.onclick=function (e) {
			if (me.player.transitionsDisabled) {
				me._maprect.style[domTransition]='none';
			} else {
				me._maprect.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._maprect.ggParameter.sx=0;me._maprect.ggParameter.sy=0;
			me._maprect.style[domTransform]=parameterToTransform(me._maprect.ggParameter);
			me._mapbttnhyd.style[domTransition]='none';
			me._mapbttnhyd.ggParameter.sx=0;me._mapbttnhyd.ggParameter.sy=0;
			me._mapbttnhyd.style[domTransform]=parameterToTransform(me._mapbttnhyd.ggParameter);
			me._mapbttnshw.style[domTransition]='none';
			me._mapbttnshw.ggParameter.sx=1;me._mapbttnshw.ggParameter.sy=1;
			me._mapbttnshw.style[domTransform]=parameterToTransform(me._mapbttnshw.ggParameter);
		}
		this._map_close.onmouseover=function (e) {
			me._map_close__img.style.visibility='hidden';
			me._map_close__imgo.style.visibility='inherit';
		}
		this._map_close.onmouseout=function (e) {
			me._map_close__img.style.visibility='inherit';
			me._map_close__imgo.style.visibility='hidden';
		}
		this._map_close.ggUpdatePosition=function (useTransition) {
		}
		this._maprect.appendChild(this._map_close);
		this._container4mm.appendChild(this._maprect);
		this._videozt=document.createElement('div');
		this._videozt.ggId="VideoZT";
		this._videozt.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		this._videozt.ggVisible=true;
		this._videozt.className='ggskin ggskin_rectangle ';
		this._videozt.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 7px;';
		hs+='border-radius : 7px;';
		hs+='background : rgba(145,145,145,0.784314);';
		hs+='border : 1px solid #c8c841;';
		hs+='cursor : default;';
		hs+='height : 425px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 647px;';
		hs+='pointer-events:auto;';
		this._videozt.setAttribute('style',hs);
		this._videozt.style[domTransform + 'Origin']='50% 50%';
		this._videozt.style[domTransform]=parameterToTransform(this._videozt.ggParameter);
		me._videozt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._videozt.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._videozt.ggUpdatePosition=function (useTransition) {
		}
		this._video_1=document.createElement('div');
		this._video_1.seekbars = [];
		this._video_1.ggInitMedia = function(media) {
			notifySeekbars = function() {
				for (var i = 0; i < me._video_1.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_1.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._video_1.hasChildNodes()) {
				me._video_1.removeChild(me._video_1.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				me._video_1.ggVideoNotLoaded = true;
				return;
			}
			me._video_1.ggVideoNotLoaded = false;
			me._video_1__vid=document.createElement('iframe');
			me._video_1__vid.className='ggskin ggskin_video';
		var ggVideoParams = '?autoplay=1&amp;controls=1&amp;loop=1&amp;rel=0';
		var ggVideoUrl = 'https://www.youtube.com/embed/' + media + ggVideoParams;
			me._video_1__vid.setAttribute('src', ggVideoUrl);
			me._video_1__vid.setAttribute('width', '100%');
			me._video_1__vid.setAttribute('height', '100%');
			me._video_1__vid.setAttribute('style', 'border:none; ');
			me._video_1.appendChild(me._video_1__vid);
			me._video_1.ggVideoSource = media;
		}
		this._video_1.ggId="Video 1";
		this._video_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_1.ggVisible=false;
		this._video_1.className='ggskin ggskin_video ';
		this._video_1.ggType='video';
		hs ='';
		hs+='height : 420px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 640px;';
		hs+='pointer-events:auto;';
		this._video_1.setAttribute('style',hs);
		this._video_1.style[domTransform + 'Origin']='50% 50%';
		me._video_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._video_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._video_1.ggUpdatePosition=function (useTransition) {
		}
		this._videozt.appendChild(this._video_1);
		this._vplyr_close=document.createElement('div');
		this._vplyr_close__img=document.createElement('img');
		this._vplyr_close__img.className='ggskin ggskin_svg';
		this._vplyr_close__img.setAttribute('src',basePath + 'images/vplyr_close.svg');
		this._vplyr_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._vplyr_close__img['ondragstart']=function() { return false; };
		this._vplyr_close.appendChild(this._vplyr_close__img);
		this._vplyr_close__imgo=document.createElement('img');
		this._vplyr_close__imgo.className='ggskin ggskin_svg';
		this._vplyr_close__imgo.setAttribute('src',basePath + 'images/vplyr_close__o.svg');
		this._vplyr_close__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._vplyr_close__imgo['ondragstart']=function() { return false; };
		this._vplyr_close.appendChild(this._vplyr_close__imgo);
		this._vplyr_close.ggId="VPlyr_close";
		this._vplyr_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vplyr_close.ggVisible=true;
		this._vplyr_close.className='ggskin ggskin_svg ';
		this._vplyr_close.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 611px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._vplyr_close.setAttribute('style',hs);
		this._vplyr_close.style[domTransform + 'Origin']='50% 50%';
		me._vplyr_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vplyr_close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vplyr_close.onclick=function (e) {
			var flag=me._videozt.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._videozt.style[domTransition]='none';
			} else {
				me._videozt.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._videozt.ggParameter.sx=0;me._videozt.ggParameter.sy=0;
				me._videozt.style[domTransform]=parameterToTransform(me._videozt.ggParameter);
			} else {
				me._videozt.ggParameter.sx=0;me._videozt.ggParameter.sy=0;
				me._videozt.style[domTransform]=parameterToTransform(me._videozt.ggParameter);
			}
			me._videozt.ggScaleActive=!flag;
			me._video_1.ggVisible = !me._video_1.ggVisible;
			var flag=me._video_1.ggVisible;
			if (me._video_1.ggVideoNotLoaded) {
				me._video_1.ggInitMedia(me._video_1.ggVideoSource);
			}
			else {
				me._video_1.ggInitMedia('');
			}
			me._video_1.style[domTransition]='none';
			me._video_1.style.visibility=((flag)&&(Number(me._video_1.style.opacity)>0||!me._video_1.style.opacity))?'inherit':'hidden';
		}
		this._vplyr_close.onmouseover=function (e) {
			me._vplyr_close__img.style.visibility='hidden';
			me._vplyr_close__imgo.style.visibility='inherit';
		}
		this._vplyr_close.onmouseout=function (e) {
			me._vplyr_close__img.style.visibility='inherit';
			me._vplyr_close__imgo.style.visibility='hidden';
		}
		this._vplyr_close.ggUpdatePosition=function (useTransition) {
		}
		this._videozt.appendChild(this._vplyr_close);
		this._container4mm.appendChild(this._videozt);
		this.divSkin.appendChild(this._container4mm);
		this._container4mdle=document.createElement('div');
		this._container4mdle.ggId="Container4Mdle";
		this._container4mdle.ggLeft=-323;
		this._container4mdle.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container4mdle.ggVisible=true;
		this._container4mdle.className='ggskin ggskin_container ';
		this._container4mdle.ggType='container';
		hs ='';
		hs+='height : 477px;';
		hs+='left : -323px;';
		hs+='position : absolute;';
		hs+='top : 120px;';
		hs+='visibility : inherit;';
		hs+='width : 649px;';
		hs+='pointer-events:none;';
		this._container4mdle.setAttribute('style',hs);
		this._container4mdle.style[domTransform + 'Origin']='50% 0%';
		me._container4mdle.ggIsActive=function() {
			return false;
		}
		me._container4mdle.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._container4mdle.ggCurrentLogicStateScaling = -1;
		this._container4mdle.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width <= 736)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._container4mdle.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._container4mdle.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._container4mdle.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._container4mdle.ggCurrentLogicStateScaling == 0) {
					me._container4mdle.ggParameter.sx = 0.6;
					me._container4mdle.ggParameter.sy = 0.6;
					me._container4mdle.style[domTransform]=parameterToTransform(me._container4mdle.ggParameter);
				}
				else {
					me._container4mdle.ggParameter.sx = 1;
					me._container4mdle.ggParameter.sy = 1;
					me._container4mdle.style[domTransform]=parameterToTransform(me._container4mdle.ggParameter);
				}
			}
		}
		this._container4mdle.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
			}
		}
		this._hekpkahon=document.createElement('div');
		this._hekpkahon.ggId="HekpKahon";
		this._hekpkahon.ggLeft=-228;
		this._hekpkahon.ggTop=-185;
		this._hekpkahon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hekpkahon.ggVisible=true;
		this._hekpkahon.className='ggskin ggskin_container ';
		this._hekpkahon.ggType='container';
		hs ='';
		hs+='height : 427px;';
		hs+='left : -228px;';
		hs+='position : absolute;';
		hs+='top : -185px;';
		hs+='visibility : inherit;';
		hs+='width : 453px;';
		hs+='pointer-events:none;';
		this._hekpkahon.setAttribute('style',hs);
		this._hekpkahon.style[domTransform + 'Origin']='50% 50%';
		me._hekpkahon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._hekpkahon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._hekpkahon.ggCurrentLogicStatePosition = -1;
		this._hekpkahon.ggUpdateConditionTimer=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height > 1) && 
				(me.player.getViewerSize().height <= 414)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._hekpkahon.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._hekpkahon.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._hekpkahon.style[domTransition]='left none, top none';
				if (me._hekpkahon.ggCurrentLogicStatePosition == 0) {
					me._hekpkahon.ggLeft=-228;
					me._hekpkahon.ggTop=-338;
					me._hekpkahon.ggUpdatePosition(true);
				}
				else {
					me._hekpkahon.ggLeft=-228;
					me._hekpkahon.ggTop=-185;
					me._hekpkahon.ggUpdatePosition(true);
				}
			}
		}
		this._hekpkahon.ggUpdatePosition=function (useTransition) {
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
		this._kahondaga=document.createElement('div');
		this._kahondaga.ggId="KahonDaga";
		this._kahondaga.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		this._kahondaga.ggVisible=true;
		this._kahondaga.className='ggskin ggskin_container ';
		this._kahondaga.ggType='container';
		hs ='';
		hs+='height : 427px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 453px;';
		hs+='pointer-events:none;';
		this._kahondaga.setAttribute('style',hs);
		this._kahondaga.style[domTransform + 'Origin']='50% 50%';
		this._kahondaga.style[domTransform]=parameterToTransform(this._kahondaga.ggParameter);
		me._kahondaga.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._kahondaga.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._kahondaga.ggCurrentLogicStateScaling = -1;
		this._kahondaga.ggUpdateConditionNodeChange=function () {
			var newLogicStateScaling;
			if (
				(me.player.getIsMobile() == false)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._kahondaga.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._kahondaga.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._kahondaga.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._kahondaga.ggCurrentLogicStateScaling == 0) {
					me._kahondaga.ggParameter.sx = 1;
					me._kahondaga.ggParameter.sy = 1;
					me._kahondaga.style[domTransform]=parameterToTransform(me._kahondaga.ggParameter);
				}
				else {
					me._kahondaga.ggParameter.sx = 0;
					me._kahondaga.ggParameter.sy = 0;
					me._kahondaga.style[domTransform]=parameterToTransform(me._kahondaga.ggParameter);
				}
			}
		}
		this._kahondaga.ggUpdatePosition=function (useTransition) {
		}
		this._kahondaga.ggNodeChange=function () {
			me._kahondaga.ggUpdateConditionNodeChange();
		}
		this._tint=document.createElement('div');
		this._tint.ggId="Tint";
		this._tint.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tint.ggVisible=true;
		this._tint.className='ggskin ggskin_rectangle ';
		this._tint.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 14px;';
		hs+='border-radius : 14px;';
		hs+='background : rgba(62,62,62,0.901961);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 423px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 450px;';
		hs+='pointer-events:auto;';
		this._tint.setAttribute('style',hs);
		this._tint.style[domTransform + 'Origin']='50% 50%';
		me._tint.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tint.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tint.ggUpdatePosition=function (useTransition) {
		}
		this._trapclose=document.createElement('div');
		this._trapclose__img=document.createElement('img');
		this._trapclose__img.className='ggskin ggskin_svg';
		this._trapclose__img.setAttribute('src',basePath + 'images/trapclose.svg');
		this._trapclose__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._trapclose__img['ondragstart']=function() { return false; };
		this._trapclose.appendChild(this._trapclose__img);
		this._trapclose__imgo=document.createElement('img');
		this._trapclose__imgo.className='ggskin ggskin_svg';
		this._trapclose__imgo.setAttribute('src',basePath + 'images/trapclose__o.svg');
		this._trapclose__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._trapclose__imgo['ondragstart']=function() { return false; };
		this._trapclose.appendChild(this._trapclose__imgo);
		this._trapclose.ggId="TrapClose";
		this._trapclose.ggLeft=-38;
		this._trapclose.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._trapclose.ggVisible=true;
		this._trapclose.className='ggskin ggskin_svg ';
		this._trapclose.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -39px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._trapclose.setAttribute('style',hs);
		this._trapclose.style[domTransform + 'Origin']='50% 50%';
		me._trapclose.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._trapclose.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._trapclose.onclick=function (e) {
			var flag=me._hekpkahon.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._hekpkahon.style[domTransition]='none';
			} else {
				me._hekpkahon.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._hekpkahon.ggParameter.sx=1;me._hekpkahon.ggParameter.sy=1;
				me._hekpkahon.style[domTransform]=parameterToTransform(me._hekpkahon.ggParameter);
			} else {
				me._hekpkahon.ggParameter.sx=0;me._hekpkahon.ggParameter.sy=0;
				me._hekpkahon.style[domTransform]=parameterToTransform(me._hekpkahon.ggParameter);
			}
			me._hekpkahon.ggScaleActive=!flag;
		}
		this._trapclose.onmouseover=function (e) {
			me._trapclose__img.style.visibility='hidden';
			me._trapclose__imgo.style.visibility='inherit';
		}
		this._trapclose.onmouseout=function (e) {
			me._trapclose__img.style.visibility='inherit';
			me._trapclose__imgo.style.visibility='hidden';
		}
		this._trapclose.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 1 + w) + 'px';
			}
		}
		this._tint.appendChild(this._trapclose);
		this._kahondaga.appendChild(this._tint);
		this._flrplanbtn=document.createElement('div');
		this._flrplanbtn__img=document.createElement('img');
		this._flrplanbtn__img.className='ggskin ggskin_image';
		this._flrplanbtn__img.setAttribute('src',basePath + 'images/flrplanbtn.png');
		this._flrplanbtn__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._flrplanbtn__img.className='ggskin ggskin_image';
		this._flrplanbtn__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._flrplanbtn__img);
		this._flrplanbtn.appendChild(this._flrplanbtn__img);
		this._flrplanbtn.ggId="FlrPlanBtn";
		this._flrplanbtn.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._flrplanbtn.ggVisible=true;
		this._flrplanbtn.className='ggskin ggskin_image ';
		this._flrplanbtn.ggType='image';
		hs ='';
		hs+='height : 27px;';
		hs+='left : 134px;';
		hs+='position : absolute;';
		hs+='top : 358px;';
		hs+='visibility : inherit;';
		hs+='width : 29px;';
		hs+='pointer-events:auto;';
		this._flrplanbtn.setAttribute('style',hs);
		this._flrplanbtn.style[domTransform + 'Origin']='50% 50%';
		me._flrplanbtn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._flrplanbtn.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._flrplanbtn.ggUpdatePosition=function (useTransition) {
		}
		this._fptxt=document.createElement('div');
		this._fptxt__text=document.createElement('div');
		this._fptxt.className='ggskin ggskin_textdiv';
		this._fptxt.ggTextDiv=this._fptxt__text;
		this._fptxt.ggId="FPTxt";
		this._fptxt.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fptxt.ggVisible=true;
		this._fptxt.className='ggskin ggskin_text ';
		this._fptxt.ggType='text';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		this._fptxt.setAttribute('style',hs);
		this._fptxt.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 178px;';
		hs+='height: 36px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(250,250,250,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._fptxt__text.setAttribute('style',hs);
		this._fptxt__text.innerHTML="Show or hide Floor Plan<br\/> when viewing model units";
		this._fptxt.appendChild(this._fptxt__text);
		me._fptxt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fptxt.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fptxt.ggUpdatePosition=function (useTransition) {
		}
		this._flrplanbtn.appendChild(this._fptxt);
		this._kahondaga.appendChild(this._flrplanbtn);
		this._thumbnailbtn=document.createElement('div');
		this._thumbnailbtn__img=document.createElement('img');
		this._thumbnailbtn__img.className='ggskin ggskin_image';
		this._thumbnailbtn__img.setAttribute('src',basePath + 'images/thumbnailbtn.png');
		this._thumbnailbtn__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._thumbnailbtn__img.className='ggskin ggskin_image';
		this._thumbnailbtn__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._thumbnailbtn__img);
		this._thumbnailbtn.appendChild(this._thumbnailbtn__img);
		this._thumbnailbtn.ggId="ThumbnailBtn";
		this._thumbnailbtn.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnailbtn.ggVisible=true;
		this._thumbnailbtn.className='ggskin ggskin_image ';
		this._thumbnailbtn.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 132px;';
		hs+='position : absolute;';
		hs+='top : 319px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._thumbnailbtn.setAttribute('style',hs);
		this._thumbnailbtn.style[domTransform + 'Origin']='50% 50%';
		me._thumbnailbtn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._thumbnailbtn.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._thumbnailbtn.ggUpdatePosition=function (useTransition) {
		}
		this._tntxxt=document.createElement('div');
		this._tntxxt__text=document.createElement('div');
		this._tntxxt.className='ggskin ggskin_textdiv';
		this._tntxxt.ggTextDiv=this._tntxxt__text;
		this._tntxxt.ggId="TNTxxt";
		this._tntxxt.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tntxxt.ggVisible=true;
		this._tntxxt.className='ggskin ggskin_text ';
		this._tntxxt.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 44px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 160px;';
		hs+='pointer-events:auto;';
		this._tntxxt.setAttribute('style',hs);
		this._tntxxt.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 160px;';
		hs+='height: 18px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(254,254,254,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tntxxt__text.setAttribute('style',hs);
		this._tntxxt__text.innerHTML="Show or hide thumbnail";
		this._tntxxt.appendChild(this._tntxxt__text);
		me._tntxxt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tntxxt.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tntxxt.ggUpdatePosition=function (useTransition) {
		}
		this._thumbnailbtn.appendChild(this._tntxxt);
		this._kahondaga.appendChild(this._thumbnailbtn);
		this._googlemap=document.createElement('div');
		this._googlemap__img=document.createElement('img');
		this._googlemap__img.className='ggskin ggskin_image';
		this._googlemap__img.setAttribute('src',basePath + 'images/googlemap.png');
		this._googlemap__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._googlemap__img.className='ggskin ggskin_image';
		this._googlemap__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._googlemap__img);
		this._googlemap.appendChild(this._googlemap__img);
		this._googlemap.ggId="GoogleMap";
		this._googlemap.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._googlemap.ggVisible=true;
		this._googlemap.className='ggskin ggskin_image ';
		this._googlemap.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 132px;';
		hs+='position : absolute;';
		hs+='top : 284px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._googlemap.setAttribute('style',hs);
		this._googlemap.style[domTransform + 'Origin']='50% 50%';
		me._googlemap.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._googlemap.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._googlemap.ggUpdatePosition=function (useTransition) {
		}
		this._ggletxt=document.createElement('div');
		this._ggletxt__text=document.createElement('div');
		this._ggletxt.className='ggskin ggskin_textdiv';
		this._ggletxt.ggTextDiv=this._ggletxt__text;
		this._ggletxt.ggId="GgleTxt";
		this._ggletxt.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ggletxt.ggVisible=true;
		this._ggletxt.className='ggskin ggskin_text ';
		this._ggletxt.ggType='text';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 39px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 179px;';
		hs+='pointer-events:auto;';
		this._ggletxt.setAttribute('style',hs);
		this._ggletxt.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 179px;';
		hs+='height: 19px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._ggletxt__text.setAttribute('style',hs);
		this._ggletxt__text.innerHTML="Show or hide Google Map";
		this._ggletxt.appendChild(this._ggletxt__text);
		me._ggletxt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ggletxt.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ggletxt.ggUpdatePosition=function (useTransition) {
		}
		this._googlemap.appendChild(this._ggletxt);
		this._kahondaga.appendChild(this._googlemap);
		this._keyboard=document.createElement('div');
		this._keyboard__img=document.createElement('img');
		this._keyboard__img.className='ggskin ggskin_image';
		this._keyboard__img.setAttribute('src',basePath + 'images/keyboard.png');
		this._keyboard__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._keyboard__img.className='ggskin ggskin_image';
		this._keyboard__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._keyboard__img);
		this._keyboard.appendChild(this._keyboard__img);
		this._keyboard.ggId="Keyboard";
		this._keyboard.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._keyboard.ggVisible=true;
		this._keyboard.className='ggskin ggskin_image ';
		this._keyboard.ggType='image';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 137px;';
		hs+='position : absolute;';
		hs+='top : 177px;';
		hs+='visibility : inherit;';
		hs+='width : 209px;';
		hs+='pointer-events:auto;';
		this._keyboard.setAttribute('style',hs);
		this._keyboard.style[domTransform + 'Origin']='50% 50%';
		me._keyboard.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._keyboard.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._keyboard.ggUpdatePosition=function (useTransition) {
		}
		this._text_4=document.createElement('div');
		this._text_4__text=document.createElement('div');
		this._text_4.className='ggskin ggskin_textdiv';
		this._text_4.ggTextDiv=this._text_4__text;
		this._text_4.ggId="Text 4";
		this._text_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_4.ggVisible=true;
		this._text_4.className='ggskin ggskin_text ';
		this._text_4.ggType='text';
		hs ='';
		hs+='height : 55px;';
		hs+='left : -89px;';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : inherit;';
		hs+='width : 379px;';
		hs+='pointer-events:auto;';
		this._text_4.setAttribute('style',hs);
		this._text_4.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 379px;';
		hs+='height: 55px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(252,252,252,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_4__text.setAttribute('style',hs);
		this._text_4__text.innerHTML="use the right, left, up or down key to navigate around<br\/>use the minus or plus key to zoom in or out ";
		this._text_4.appendChild(this._text_4__text);
		me._text_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_4.ggUpdatePosition=function (useTransition) {
		}
		this._keyboard.appendChild(this._text_4);
		this._kahondaga.appendChild(this._keyboard);
		this._text_3=document.createElement('div');
		this._text_3__text=document.createElement('div');
		this._text_3.className='ggskin ggskin_textdiv';
		this._text_3.ggTextDiv=this._text_3__text;
		this._text_3.ggId="Text 3";
		this._text_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_3.ggVisible=true;
		this._text_3.className='ggskin ggskin_text ';
		this._text_3.ggType='text';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 187px;';
		hs+='position : absolute;';
		hs+='top : 156px;';
		hs+='visibility : inherit;';
		hs+='width : 97px;';
		hs+='pointer-events:auto;';
		this._text_3.setAttribute('style',hs);
		this._text_3.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 97px;';
		hs+='height: 19px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(254,254,254,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_3__text.setAttribute('style',hs);
		this._text_3__text.innerHTML="OR";
		this._text_3.appendChild(this._text_3__text);
		me._text_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_3.ggUpdatePosition=function (useTransition) {
		}
		this._kahondaga.appendChild(this._text_3);
		this._daga=document.createElement('div');
		this._daga__img=document.createElement('img');
		this._daga__img.className='ggskin ggskin_image';
		this._daga__img.setAttribute('src',basePath + 'images/daga.png');
		this._daga__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._daga__img.className='ggskin ggskin_image';
		this._daga__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._daga__img);
		this._daga.appendChild(this._daga__img);
		this._daga.ggId="Daga";
		this._daga.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._daga.ggVisible=true;
		this._daga.className='ggskin ggskin_image ';
		this._daga.ggType='image';
		hs ='';
		hs+='height : 60px;';
		hs+='left : 183px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 84px;';
		hs+='pointer-events:auto;';
		this._daga.setAttribute('style',hs);
		this._daga.style[domTransform + 'Origin']='50% 50%';
		me._daga.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._daga.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._daga.ggUpdatePosition=function (useTransition) {
		}
		this._text_2=document.createElement('div');
		this._text_2__text=document.createElement('div');
		this._text_2.className='ggskin ggskin_textdiv';
		this._text_2.ggTextDiv=this._text_2__text;
		this._text_2.ggId="Text 2";
		this._text_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_2.ggVisible=true;
		this._text_2.className='ggskin ggskin_text ';
		this._text_2.ggType='text';
		hs ='';
		hs+='height : 44px;';
		hs+='left : -127px;';
		hs+='position : absolute;';
		hs+='top : 77px;';
		hs+='visibility : inherit;';
		hs+='width : 345px;';
		hs+='pointer-events:auto;';
		this._text_2.setAttribute('style',hs);
		this._text_2.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 345px;';
		hs+='height: 44px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_2__text.setAttribute('style',hs);
		this._text_2__text.innerHTML="Hold the left mouse button, drag to move around<br\/>Use the mouse wheel to zoom in our out";
		this._text_2.appendChild(this._text_2__text);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_2.ggUpdatePosition=function (useTransition) {
		}
		this._daga.appendChild(this._text_2);
		this._kahondaga.appendChild(this._daga);
		this._hekpkahon.appendChild(this._kahondaga);
		this._kahonmobile=document.createElement('div');
		this._kahonmobile.ggId="KahonMobile";
		this._kahonmobile.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		this._kahonmobile.ggVisible=true;
		this._kahonmobile.className='ggskin ggskin_container ';
		this._kahonmobile.ggType='container';
		hs ='';
		hs+='height : 387px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 399px;';
		hs+='pointer-events:none;';
		this._kahonmobile.setAttribute('style',hs);
		this._kahonmobile.style[domTransform + 'Origin']='50% 50%';
		this._kahonmobile.style[domTransform]=parameterToTransform(this._kahonmobile.ggParameter);
		me._kahonmobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._kahonmobile.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._kahonmobile.ggCurrentLogicStateScaling = -1;
		this._kahonmobile.ggUpdateConditionNodeChange=function () {
			var newLogicStateScaling;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._kahonmobile.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._kahonmobile.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._kahonmobile.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._kahonmobile.ggCurrentLogicStateScaling == 0) {
					me._kahonmobile.ggParameter.sx = 1;
					me._kahonmobile.ggParameter.sy = 1;
					me._kahonmobile.style[domTransform]=parameterToTransform(me._kahonmobile.ggParameter);
				}
				else {
					me._kahonmobile.ggParameter.sx = 0;
					me._kahonmobile.ggParameter.sy = 0;
					me._kahonmobile.style[domTransform]=parameterToTransform(me._kahonmobile.ggParameter);
				}
			}
		}
		this._kahonmobile.ggUpdatePosition=function (useTransition) {
		}
		this._kahonmobile.ggNodeChange=function () {
			me._kahonmobile.ggUpdateConditionNodeChange();
		}
		this._pointtint=document.createElement('div');
		this._pointtint.ggId="PointTint";
		this._pointtint.ggTop=-190;
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
		hs+='height : 378px;';
		hs+='left : 2.01%;';
		hs+='position : absolute;';
		hs+='top : -191px;';
		hs+='visibility : inherit;';
		hs+='width : 385px;';
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
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._helpbox_close=document.createElement('div');
		this._helpbox_close__img=document.createElement('img');
		this._helpbox_close__img.className='ggskin ggskin_svg';
		this._helpbox_close__img.setAttribute('src',basePath + 'images/helpbox_close.svg');
		this._helpbox_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._helpbox_close__img['ondragstart']=function() { return false; };
		this._helpbox_close.appendChild(this._helpbox_close__img);
		this._helpbox_close__imgo=document.createElement('img');
		this._helpbox_close__imgo.className='ggskin ggskin_svg';
		this._helpbox_close__imgo.setAttribute('src',basePath + 'images/helpbox_close__o.svg');
		this._helpbox_close__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._helpbox_close__imgo['ondragstart']=function() { return false; };
		this._helpbox_close.appendChild(this._helpbox_close__imgo);
		this._helpbox_close.ggId="HelpBox_close";
		this._helpbox_close.ggLeft=-33;
		this._helpbox_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._helpbox_close.ggVisible=true;
		this._helpbox_close.className='ggskin ggskin_svg ';
		this._helpbox_close.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -35px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._helpbox_close.setAttribute('style',hs);
		this._helpbox_close.style[domTransform + 'Origin']='50% 50%';
		me._helpbox_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._helpbox_close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._helpbox_close.onclick=function (e) {
			var flag=me._hekpkahon.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._hekpkahon.style[domTransition]='none';
			} else {
				me._hekpkahon.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._hekpkahon.ggParameter.sx=1;me._hekpkahon.ggParameter.sy=1;
				me._hekpkahon.style[domTransform]=parameterToTransform(me._hekpkahon.ggParameter);
			} else {
				me._hekpkahon.ggParameter.sx=0;me._hekpkahon.ggParameter.sy=0;
				me._hekpkahon.style[domTransform]=parameterToTransform(me._hekpkahon.ggParameter);
			}
			me._hekpkahon.ggScaleActive=!flag;
		}
		this._helpbox_close.onmouseover=function (e) {
			me._helpbox_close__img.style.visibility='hidden';
			me._helpbox_close__imgo.style.visibility='inherit';
		}
		this._helpbox_close.onmouseout=function (e) {
			me._helpbox_close__img.style.visibility='inherit';
			me._helpbox_close__imgo.style.visibility='hidden';
		}
		this._helpbox_close.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 3 + w) + 'px';
			}
		}
		this._pointtint.appendChild(this._helpbox_close);
		this._kahonmobile.appendChild(this._pointtint);
		this._text_5=document.createElement('div');
		this._text_5__text=document.createElement('div');
		this._text_5.className='ggskin ggskin_textdiv';
		this._text_5.ggTextDiv=this._text_5__text;
		this._text_5.ggId="Text 5";
		this._text_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_5.ggVisible=true;
		this._text_5.className='ggskin ggskin_text ';
		this._text_5.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 96px;';
		hs+='position : absolute;';
		hs+='top : 94px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		this._text_5.setAttribute('style',hs);
		this._text_5.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 220px;';
		hs+='height: 25px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(253,253,253,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_5__text.setAttribute('style',hs);
		this._text_5__text.innerHTML="Pinch in or out to zoom in or out";
		this._text_5.appendChild(this._text_5__text);
		me._text_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_5.ggUpdatePosition=function (useTransition) {
		}
		this._kahonmobile.appendChild(this._text_5);
		this._finger1=document.createElement('div');
		this._finger1__img=document.createElement('img');
		this._finger1__img.className='ggskin ggskin_image';
		this._finger1__img.setAttribute('src',basePath + 'images/finger1.png');
		this._finger1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._finger1__img.className='ggskin ggskin_image';
		this._finger1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._finger1__img);
		this._finger1.appendChild(this._finger1__img);
		this._finger1.ggId="Finger1";
		this._finger1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._finger1.ggVisible=true;
		this._finger1.className='ggskin ggskin_image ';
		this._finger1.ggType='image';
		hs ='';
		hs+='height : 58px;';
		hs+='left : 131px;';
		hs+='position : absolute;';
		hs+='top : 29px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		this._finger1.setAttribute('style',hs);
		this._finger1.style[domTransform + 'Origin']='50% 50%';
		me._finger1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._finger1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._finger1.ggUpdatePosition=function (useTransition) {
		}
		this._kahonmobile.appendChild(this._finger1);
		this._finger2=document.createElement('div');
		this._finger2__img=document.createElement('img');
		this._finger2__img.className='ggskin ggskin_image';
		this._finger2__img.setAttribute('src',basePath + 'images/finger2.png');
		this._finger2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._finger2__img.className='ggskin ggskin_image';
		this._finger2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._finger2__img);
		this._finger2.appendChild(this._finger2__img);
		this._finger2.ggId="Finger2";
		this._finger2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._finger2.ggVisible=true;
		this._finger2.className='ggskin ggskin_image ';
		this._finger2.ggType='image';
		hs ='';
		hs+='height : 58px;';
		hs+='left : 196px;';
		hs+='position : absolute;';
		hs+='top : 27px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		this._finger2.setAttribute('style',hs);
		this._finger2.style[domTransform + 'Origin']='50% 50%';
		me._finger2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._finger2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._finger2.ggUpdatePosition=function (useTransition) {
		}
		this._kahonmobile.appendChild(this._finger2);
		this._text_6=document.createElement('div');
		this._text_6__text=document.createElement('div');
		this._text_6.className='ggskin ggskin_textdiv';
		this._text_6.ggTextDiv=this._text_6__text;
		this._text_6.ggId="Text 6";
		this._text_6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_6.ggVisible=true;
		this._text_6.className='ggskin ggskin_text ';
		this._text_6.ggType='text';
		hs ='';
		hs+='height : 41px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 191px;';
		hs+='visibility : inherit;';
		hs+='width : 378px;';
		hs+='pointer-events:auto;';
		this._text_6.setAttribute('style',hs);
		this._text_6.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 378px;';
		hs+='height: 41px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(252,252,252,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_6__text.setAttribute('style',hs);
		this._text_6__text.innerHTML="Swipe to move left, right, up or down<br\/>Tap, hold or drag to choose pano image or move around";
		this._text_6.appendChild(this._text_6__text);
		me._text_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_6.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_6.ggUpdatePosition=function (useTransition) {
		}
		this._kahonmobile.appendChild(this._text_6);
		this._finger3=document.createElement('div');
		this._finger3__img=document.createElement('img');
		this._finger3__img.className='ggskin ggskin_image';
		this._finger3__img.setAttribute('src',basePath + 'images/finger3.png');
		this._finger3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._finger3__img.className='ggskin ggskin_image';
		this._finger3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._finger3__img);
		this._finger3.appendChild(this._finger3__img);
		this._finger3.ggId="Finger3";
		this._finger3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._finger3.ggVisible=true;
		this._finger3.className='ggskin ggskin_image ';
		this._finger3.ggType='image';
		hs ='';
		hs+='height : 58px;';
		hs+='left : 142px;';
		hs+='position : absolute;';
		hs+='top : 127px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		this._finger3.setAttribute('style',hs);
		this._finger3.style[domTransform + 'Origin']='50% 50%';
		me._finger3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._finger3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._finger3.ggUpdatePosition=function (useTransition) {
		}
		this._kahonmobile.appendChild(this._finger3);
		this._finger4=document.createElement('div');
		this._finger4__img=document.createElement('img');
		this._finger4__img.className='ggskin ggskin_image';
		this._finger4__img.setAttribute('src',basePath + 'images/finger4.png');
		this._finger4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._finger4__img.className='ggskin ggskin_image';
		this._finger4__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._finger4__img);
		this._finger4.appendChild(this._finger4__img);
		this._finger4.ggId="Finger4";
		this._finger4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._finger4.ggVisible=true;
		this._finger4.className='ggskin ggskin_image ';
		this._finger4.ggType='image';
		hs ='';
		hs+='height : 65px;';
		hs+='left : 204px;';
		hs+='position : absolute;';
		hs+='top : 117px;';
		hs+='visibility : inherit;';
		hs+='width : 53px;';
		hs+='pointer-events:auto;';
		this._finger4.setAttribute('style',hs);
		this._finger4.style[domTransform + 'Origin']='50% 50%';
		me._finger4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._finger4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._finger4.ggUpdatePosition=function (useTransition) {
		}
		this._kahonmobile.appendChild(this._finger4);
		this._gmap2=document.createElement('div');
		this._gmap2__img=document.createElement('img');
		this._gmap2__img.className='ggskin ggskin_image';
		this._gmap2__img.setAttribute('src',basePath + 'images/gmap2.png');
		this._gmap2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gmap2__img.className='ggskin ggskin_image';
		this._gmap2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gmap2__img);
		this._gmap2.appendChild(this._gmap2__img);
		this._gmap2.ggId="Gmap2";
		this._gmap2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gmap2.ggVisible=true;
		this._gmap2.className='ggskin ggskin_image ';
		this._gmap2.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 87px;';
		hs+='position : absolute;';
		hs+='top : 243px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gmap2.setAttribute('style',hs);
		this._gmap2.style[domTransform + 'Origin']='50% 50%';
		me._gmap2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gmap2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gmap2.ggUpdatePosition=function (useTransition) {
		}
		this._text_7=document.createElement('div');
		this._text_7__text=document.createElement('div');
		this._text_7.className='ggskin ggskin_textdiv';
		this._text_7.ggTextDiv=this._text_7__text;
		this._text_7.ggId="Text 7";
		this._text_7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_7.ggVisible=true;
		this._text_7.className='ggskin ggskin_text ';
		this._text_7.ggType='text';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 38px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		this._text_7.setAttribute('style',hs);
		this._text_7.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 190px;';
		hs+='height: 19px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_7__text.setAttribute('style',hs);
		this._text_7__text.innerHTML="Show or hide Google Map";
		this._text_7.appendChild(this._text_7__text);
		me._text_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_7.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_7.ggUpdatePosition=function (useTransition) {
		}
		this._gmap2.appendChild(this._text_7);
		this._kahonmobile.appendChild(this._gmap2);
		this._tn2=document.createElement('div');
		this._tn2__img=document.createElement('img');
		this._tn2__img.className='ggskin ggskin_image';
		this._tn2__img.setAttribute('src',basePath + 'images/tn2.png');
		this._tn2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._tn2__img.className='ggskin ggskin_image';
		this._tn2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._tn2__img);
		this._tn2.appendChild(this._tn2__img);
		this._tn2.ggId="TN2";
		this._tn2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tn2.ggVisible=true;
		this._tn2.className='ggskin ggskin_image ';
		this._tn2.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 86px;';
		hs+='position : absolute;';
		hs+='top : 280px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._tn2.setAttribute('style',hs);
		this._tn2.style[domTransform + 'Origin']='50% 50%';
		me._tn2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tn2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tn2.ggUpdatePosition=function (useTransition) {
		}
		this._text_9=document.createElement('div');
		this._text_9__text=document.createElement('div');
		this._text_9.className='ggskin ggskin_textdiv';
		this._text_9.ggTextDiv=this._text_9__text;
		this._text_9.ggId="Text 9";
		this._text_9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_9.ggVisible=true;
		this._text_9.className='ggskin ggskin_text ';
		this._text_9.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 154px;';
		hs+='pointer-events:auto;';
		this._text_9.setAttribute('style',hs);
		this._text_9.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 154px;';
		hs+='height: 18px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #ffffff;';
		hs+='border: 1px solid rgba(255,255,255,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_9__text.setAttribute('style',hs);
		this._text_9__text.innerHTML="Show or hide thumbnails";
		this._text_9.appendChild(this._text_9__text);
		me._text_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_9.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_9.ggUpdatePosition=function (useTransition) {
		}
		this._tn2.appendChild(this._text_9);
		this._kahonmobile.appendChild(this._tn2);
		this._fp2=document.createElement('div');
		this._fp2__img=document.createElement('img');
		this._fp2__img.className='ggskin ggskin_image';
		this._fp2__img.setAttribute('src',basePath + 'images/fp2.png');
		this._fp2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._fp2__img.className='ggskin ggskin_image';
		this._fp2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._fp2__img);
		this._fp2.appendChild(this._fp2__img);
		this._fp2.ggId="FP2";
		this._fp2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fp2.ggVisible=true;
		this._fp2.className='ggskin ggskin_image ';
		this._fp2.ggType='image';
		hs ='';
		hs+='height : 29px;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : 321px;';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		this._fp2.setAttribute('style',hs);
		this._fp2.style[domTransform + 'Origin']='50% 50%';
		me._fp2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fp2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fp2.ggUpdatePosition=function (useTransition) {
		}
		this._text_8=document.createElement('div');
		this._text_8__text=document.createElement('div');
		this._text_8.className='ggskin ggskin_textdiv';
		this._text_8.ggTextDiv=this._text_8__text;
		this._text_8.ggId="Text 8";
		this._text_8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_8.ggVisible=true;
		this._text_8.className='ggskin ggskin_text ';
		this._text_8.ggType='text';
		hs ='';
		hs+='height : 39px;';
		hs+='left : 36px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 186px;';
		hs+='pointer-events:auto;';
		this._text_8.setAttribute('style',hs);
		this._text_8.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 186px;';
		hs+='height: 39px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_8__text.setAttribute('style',hs);
		this._text_8__text.innerHTML="Show or hide Floor Plan<br\/> when viewing model units";
		this._text_8.appendChild(this._text_8__text);
		me._text_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_8.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_8.ggUpdatePosition=function (useTransition) {
		}
		this._fp2.appendChild(this._text_8);
		this._kahonmobile.appendChild(this._fp2);
		this._hekpkahon.appendChild(this._kahonmobile);
		this._container4mdle.appendChild(this._hekpkahon);
		this._information=document.createElement('div');
		this._information.ggId="information";
		this._information.ggLeft=-162;
		this._information.ggTop=-20;
		this._information.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		this._information.ggVisible=true;
		this._information.className='ggskin ggskin_container ';
		this._information.ggType='container';
		hs ='';
		hs+='height : 92px;';
		hs+='left : -162px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 322px;';
		hs+='pointer-events:none;';
		this._information.setAttribute('style',hs);
		this._information.style[domTransform + 'Origin']='50% 50%';
		this._information.style[domTransform]=parameterToTransform(this._information.ggParameter);
		me._information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._information.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._information.ggUpdatePosition=function (useTransition) {
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
		this._informationbg=document.createElement('div');
		this._informationbg.ggId="informationbg";
		this._informationbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._informationbg.ggVisible=true;
		this._informationbg.className='ggskin ggskin_rectangle ';
		this._informationbg.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(158,158,158,0.784314);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 90px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 320px;';
		hs+='pointer-events:auto;';
		this._informationbg.setAttribute('style',hs);
		this._informationbg.style[domTransform + 'Origin']='50% 50%';
		me._informationbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._informationbg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._informationbg.ggUpdatePosition=function (useTransition) {
		}
		this._information.appendChild(this._informationbg);
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
		hs+='height : 60px;';
		hs+='left : 98px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : inherit;';
		hs+='width : 282px;';
		hs+='pointer-events:auto;';
		this._text_1.setAttribute('style',hs);
		this._text_1.style[domTransform + 'Origin']='50% 0%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 282px;';
		hs+='height: 60px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_1__text.setAttribute('style',hs);
		this._text_1__text.innerHTML="<font size=\"2\">360 DMCIHomes Virtual Tour<br\/>by \xa9 360VRTek<br\/>     \u2709  sales@360VRTek.com<\/font>";
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
			return me.player.getCurrentNode();
		}
		this._text_1.ggUpdatePosition=function (useTransition) {
		}
		this._information.appendChild(this._text_1);
		this.__360vrtek_logo=document.createElement('div');
		this.__360vrtek_logo__img=document.createElement('img');
		this.__360vrtek_logo__img.className='ggskin ggskin_image';
		this.__360vrtek_logo__img.setAttribute('src',basePath + 'images/_360vrtek_logo.png');
		this.__360vrtek_logo__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this.__360vrtek_logo__img.className='ggskin ggskin_image';
		this.__360vrtek_logo__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__360vrtek_logo__img);
		this.__360vrtek_logo.appendChild(this.__360vrtek_logo__img);
		this.__360vrtek_logo.ggId="360VRTek Logo";
		this.__360vrtek_logo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__360vrtek_logo.ggVisible=true;
		this.__360vrtek_logo.className='ggskin ggskin_image ';
		this.__360vrtek_logo.ggType='image';
		hs ='';
		hs+='height : 75px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 78px;';
		hs+='pointer-events:auto;';
		this.__360vrtek_logo.setAttribute('style',hs);
		this.__360vrtek_logo.style[domTransform + 'Origin']='50% 50%';
		me.__360vrtek_logo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__360vrtek_logo.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__360vrtek_logo.ggUpdatePosition=function (useTransition) {
		}
		this._information.appendChild(this.__360vrtek_logo);
		this._ht_info_close=document.createElement('div');
		this._ht_info_close__img=document.createElement('img');
		this._ht_info_close__img.className='ggskin ggskin_svg';
		this._ht_info_close__img.setAttribute('src',basePath + 'images/ht_info_close.svg');
		this._ht_info_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._ht_info_close__img['ondragstart']=function() { return false; };
		this._ht_info_close.appendChild(this._ht_info_close__img);
		this._ht_info_close__imgo=document.createElement('img');
		this._ht_info_close__imgo.className='ggskin ggskin_svg';
		this._ht_info_close__imgo.setAttribute('src',basePath + 'images/ht_info_close__o.svg');
		this._ht_info_close__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._ht_info_close__imgo['ondragstart']=function() { return false; };
		this._ht_info_close.appendChild(this._ht_info_close__imgo);
		this._ht_info_close.ggId="ht_info_close";
		this._ht_info_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_info_close.ggVisible=true;
		this._ht_info_close.className='ggskin ggskin_svg ';
		this._ht_info_close.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 291px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._ht_info_close.setAttribute('style',hs);
		this._ht_info_close.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_info_close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ht_info_close.onclick=function (e) {
			var flag=me._information.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._information.style[domTransition]='none';
			} else {
				me._information.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._information.ggParameter.sx=0;me._information.ggParameter.sy=0;
				me._information.style[domTransform]=parameterToTransform(me._information.ggParameter);
			} else {
				me._information.ggParameter.sx=0;me._information.ggParameter.sy=0;
				me._information.style[domTransform]=parameterToTransform(me._information.ggParameter);
			}
			me._information.ggScaleActive=!flag;
		}
		this._ht_info_close.onmouseover=function (e) {
			me._ht_info_close__img.style.visibility='hidden';
			me._ht_info_close__imgo.style.visibility='inherit';
		}
		this._ht_info_close.onmouseout=function (e) {
			me._ht_info_close__img.style.visibility='inherit';
			me._ht_info_close__imgo.style.visibility='hidden';
		}
		this._ht_info_close.ggUpdatePosition=function (useTransition) {
		}
		this._information.appendChild(this._ht_info_close);
		this._container4mdle.appendChild(this._information);
		this._loading=document.createElement('div');
		this._loading.ggId="loading";
		this._loading.ggLeft=-106;
		this._loading.ggTop=-3;
		this._loading.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading.ggVisible=true;
		this._loading.className='ggskin ggskin_container ';
		this._loading.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -106px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		this._loading.setAttribute('style',hs);
		this._loading.style[domTransform + 'Origin']='50% 50%';
		me._loading.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading.onclick=function (e) {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this._loading.ggUpdatePosition=function (useTransition) {
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
		this._loadingbg=document.createElement('div');
		this._loadingbg.ggId="loadingbg";
		this._loadingbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbg.ggVisible=true;
		this._loadingbg.className='ggskin ggskin_rectangle ';
		this._loadingbg.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 58px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 208px;';
		hs+='pointer-events:auto;';
		this._loadingbg.setAttribute('style',hs);
		this._loadingbg.style[domTransform + 'Origin']='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingbg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingbg.ggUpdatePosition=function (useTransition) {
		}
		this._loading.appendChild(this._loadingbg);
		this._loadingtext=document.createElement('div');
		this._loadingtext__text=document.createElement('div');
		this._loadingtext.className='ggskin ggskin_textdiv';
		this._loadingtext.ggTextDiv=this._loadingtext__text;
		this._loadingtext.ggId="loadingtext";
		this._loadingtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingtext.ggVisible=true;
		this._loadingtext.className='ggskin ggskin_text ';
		this._loadingtext.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 176px;';
		hs+='pointer-events:auto;';
		this._loadingtext.setAttribute('style',hs);
		this._loadingtext.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loadingtext__text.setAttribute('style',hs);
		this._loadingtext.ggUpdateText=function() {
			var hs="Loading... "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		this._loadingtext.appendChild(this._loadingtext__text);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingtext.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingtext.ggUpdatePosition=function (useTransition) {
		}
		this._loading.appendChild(this._loadingtext);
		this._loadingbar=document.createElement('div');
		this._loadingbar.ggId="loadingbar";
		this._loadingbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbar.ggVisible=true;
		this._loadingbar.className='ggskin ggskin_rectangle ';
		this._loadingbar.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #808080;';
		hs+='cursor : default;';
		hs+='height : 12px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 181px;';
		hs+='pointer-events:auto;';
		this._loadingbar.setAttribute('style',hs);
		this._loadingbar.style[domTransform + 'Origin']='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingbar.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingbar.ggUpdatePosition=function (useTransition) {
		}
		this._loading.appendChild(this._loadingbar);
		this._container4mdle.appendChild(this._loading);
		this.divSkin.appendChild(this._container4mdle);
		this._containermm_btns=document.createElement('div');
		this._containermm_btns.ggId="ContainerMM_btns";
		this._containermm_btns.ggLeft=-128;
		this._containermm_btns.ggTop=-51;
		this._containermm_btns.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._containermm_btns.ggVisible=true;
		this._containermm_btns.className='ggskin ggskin_container ';
		this._containermm_btns.ggType='container';
		hs ='';
		hs+='height : 35px;';
		hs+='left : -128px;';
		hs+='position : absolute;';
		hs+='top : -51px;';
		hs+='visibility : inherit;';
		hs+='width : 106px;';
		hs+='pointer-events:none;';
		this._containermm_btns.setAttribute('style',hs);
		this._containermm_btns.style[domTransform + 'Origin']='50% 50%';
		me._containermm_btns.ggIsActive=function() {
			return false;
		}
		me._containermm_btns.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._containermm_btns.ggCurrentLogicStateScaling = -1;
		this._containermm_btns.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height > 1) && 
				(me.player.getViewerSize().width <= 640)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height < 1) && 
				(me.player.getViewerSize().width <= 736)
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._containermm_btns.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._containermm_btns.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._containermm_btns.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._containermm_btns.ggCurrentLogicStateScaling == 0) {
					me._containermm_btns.ggParameter.sx = 0.75;
					me._containermm_btns.ggParameter.sy = 0.75;
					me._containermm_btns.style[domTransform]=parameterToTransform(me._containermm_btns.ggParameter);
				}
				else if (me._containermm_btns.ggCurrentLogicStateScaling == 1) {
					me._containermm_btns.ggParameter.sx = 0.8;
					me._containermm_btns.ggParameter.sy = 0.8;
					me._containermm_btns.style[domTransform]=parameterToTransform(me._containermm_btns.ggParameter);
				}
				else {
					me._containermm_btns.ggParameter.sx = 1;
					me._containermm_btns.ggParameter.sy = 1;
					me._containermm_btns.style[domTransform]=parameterToTransform(me._containermm_btns.ggParameter);
				}
			}
		}
		this._containermm_btns.ggUpdatePosition=function (useTransition) {
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
		this._vrheadset=document.createElement('div');
		this._vrheadset__img=document.createElement('img');
		this._vrheadset__img.className='ggskin ggskin_button';
		this._vrheadset__img.setAttribute('src',basePath + 'images/vrheadset.png');
		this._vrheadset__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._vrheadset__img.className='ggskin ggskin_button';
		this._vrheadset__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._vrheadset__img);
		this._vrheadset.appendChild(this._vrheadset__img);
		this._vrheadset.ggId="VRHeadset";
		this._vrheadset.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vrheadset.ggVisible=true;
		this._vrheadset.className='ggskin ggskin_button ';
		this._vrheadset.ggType='button';
		hs ='';
		hs+='height : 35px;';
		hs+='left : 66px;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._vrheadset.setAttribute('style',hs);
		this._vrheadset.style[domTransform + 'Origin']='50% 50%';
		me._vrheadset.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vrheadset.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vrheadset.onclick=function (e) {
			var flag=me._container4vrinfo.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._container4vrinfo.style[domTransition]='none';
			} else {
				me._container4vrinfo.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._container4vrinfo.ggParameter.sx=0;me._container4vrinfo.ggParameter.sy=0;
				me._container4vrinfo.style[domTransform]=parameterToTransform(me._container4vrinfo.ggParameter);
			} else {
				me._container4vrinfo.ggParameter.sx=1;me._container4vrinfo.ggParameter.sy=1;
				me._container4vrinfo.style[domTransform]=parameterToTransform(me._container4vrinfo.ggParameter);
			}
			me._container4vrinfo.ggScaleActive=!flag;
		}
		this._vrheadset.onmouseover=function (e) {
			me._vrheadset__img.src=basePath + 'images/vrheadset__o.png';
		}
		this._vrheadset.onmouseout=function (e) {
			me._vrheadset__img.src=basePath + 'images/vrheadset.png';
		}
		this._vrheadset.ggUpdatePosition=function (useTransition) {
		}
		this._containermm_btns.appendChild(this._vrheadset);
		this._videoplayer=document.createElement('div');
		this._videoplayer__img=document.createElement('img');
		this._videoplayer__img.className='ggskin ggskin_button';
		this._videoplayer__img.setAttribute('src',basePath + 'images/videoplayer.png');
		this._videoplayer__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._videoplayer__img.className='ggskin ggskin_button';
		this._videoplayer__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._videoplayer__img);
		this._videoplayer.appendChild(this._videoplayer__img);
		this._videoplayer.ggId="VideoPlayer";
		this._videoplayer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._videoplayer.ggVisible=true;
		this._videoplayer.className='ggskin ggskin_button ';
		this._videoplayer.ggType='button';
		hs ='';
		hs+='height : 35px;';
		hs+='left : 13px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._videoplayer.setAttribute('style',hs);
		this._videoplayer.style[domTransform + 'Origin']='50% 50%';
		me._videoplayer.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._videoplayer.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._videoplayer.onclick=function (e) {
			var flag=me._videozt.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._videozt.style[domTransition]='none';
			} else {
				me._videozt.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._videozt.ggParameter.sx=0;me._videozt.ggParameter.sy=0;
				me._videozt.style[domTransform]=parameterToTransform(me._videozt.ggParameter);
			} else {
				me._videozt.ggParameter.sx=1;me._videozt.ggParameter.sy=1;
				me._videozt.style[domTransform]=parameterToTransform(me._videozt.ggParameter);
			}
			me._videozt.ggScaleActive=!flag;
			me._video_1.ggVisible = !me._video_1.ggVisible;
			var flag=me._video_1.ggVisible;
			if (me._video_1.ggVideoNotLoaded) {
				me._video_1.ggInitMedia(me._video_1.ggVideoSource);
			}
			else {
				me._video_1.ggInitMedia('');
			}
			me._video_1.style[domTransition]='none';
			me._video_1.style.visibility=((flag)&&(Number(me._video_1.style.opacity)>0||!me._video_1.style.opacity))?'inherit':'hidden';
		}
		this._videoplayer.onmouseover=function (e) {
			me._videoplayer__img.src=basePath + 'images/videoplayer__o.png';
		}
		this._videoplayer.onmouseout=function (e) {
			me._videoplayer__img.src=basePath + 'images/videoplayer.png';
		}
		me._videoplayer.ggCurrentLogicStateScaling = -1;
		this._videoplayer.ggUpdateConditionNodeChange=function () {
			var newLogicStateScaling;
			if (
				(me.ggUserdata.tags.indexOf("BR") != -1)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._videoplayer.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._videoplayer.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._videoplayer.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._videoplayer.ggCurrentLogicStateScaling == 0) {
					me._videoplayer.ggParameter.sx = 0;
					me._videoplayer.ggParameter.sy = 0;
					me._videoplayer.style[domTransform]=parameterToTransform(me._videoplayer.ggParameter);
				}
				else {
					me._videoplayer.ggParameter.sx = 1;
					me._videoplayer.ggParameter.sy = 1;
					me._videoplayer.style[domTransform]=parameterToTransform(me._videoplayer.ggParameter);
				}
			}
		}
		this._videoplayer.ggUpdatePosition=function (useTransition) {
		}
		this._videoplayer.ggNodeChange=function () {
			me._videoplayer.ggUpdateConditionNodeChange();
		}
		this._containermm_btns.appendChild(this._videoplayer);
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
		this._fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen.ggVisible=true;
		this._fullscreen.className='ggskin ggskin_svg ';
		this._fullscreen.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : -37px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._fullscreen.setAttribute('style',hs);
		this._fullscreen.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fullscreen.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fullscreen.onclick=function (e) {
			me.player.toggleFullscreen();
		}
		this._fullscreen.onmouseover=function (e) {
			me._tt_fullscreen.style[domTransition]='none';
			me._tt_fullscreen.style.visibility=(Number(me._tt_fullscreen.style.opacity)>0||!me._tt_fullscreen.style.opacity)?'inherit':'hidden';
			me._tt_fullscreen.ggVisible=true;
			me._fullscreen__img.style.visibility='hidden';
			me._fullscreen__imgo.style.visibility='inherit';
		}
		this._fullscreen.onmouseout=function (e) {
			me._tt_fullscreen.style[domTransition]='none';
			me._tt_fullscreen.style.visibility='hidden';
			me._tt_fullscreen.ggVisible=false;
			me._fullscreen__img.style.visibility='inherit';
			me._fullscreen__imgo.style.visibility='hidden';
		}
		this._fullscreen.ggUpdatePosition=function (useTransition) {
		}
		this._tt_fullscreen=document.createElement('div');
		this._tt_fullscreen__text=document.createElement('div');
		this._tt_fullscreen.className='ggskin ggskin_textdiv';
		this._tt_fullscreen.ggTextDiv=this._tt_fullscreen__text;
		this._tt_fullscreen.ggId="tt_fullscreen";
		this._tt_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen.ggVisible=false;
		this._tt_fullscreen.className='ggskin ggskin_text ';
		this._tt_fullscreen.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_fullscreen.setAttribute('style',hs);
		this._tt_fullscreen.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen__text.setAttribute('style',hs);
		this._tt_fullscreen__text.innerHTML="Fullscreen";
		this._tt_fullscreen.appendChild(this._tt_fullscreen__text);
		me._tt_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_fullscreen.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		this._tt_fullscreen_white=document.createElement('div');
		this._tt_fullscreen_white__text=document.createElement('div');
		this._tt_fullscreen_white.className='ggskin ggskin_textdiv';
		this._tt_fullscreen_white.ggTextDiv=this._tt_fullscreen_white__text;
		this._tt_fullscreen_white.ggId="tt_fullscreen_white";
		this._tt_fullscreen_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen_white.ggVisible=true;
		this._tt_fullscreen_white.className='ggskin ggskin_text ';
		this._tt_fullscreen_white.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_fullscreen_white.setAttribute('style',hs);
		this._tt_fullscreen_white.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen_white__text.setAttribute('style',hs);
		this._tt_fullscreen_white__text.innerHTML="Fullscreen";
		this._tt_fullscreen_white.appendChild(this._tt_fullscreen_white__text);
		me._tt_fullscreen_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_fullscreen_white.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_fullscreen_white.ggUpdatePosition=function (useTransition) {
		}
		this._tt_fullscreen.appendChild(this._tt_fullscreen_white);
		this._fullscreen.appendChild(this._tt_fullscreen);
		this._containermm_btns.appendChild(this._fullscreen);
		this.divSkin.appendChild(this._containermm_btns);
		this._kahonessentials=document.createElement('div');
		this._kahonessentials.ggId="KahonEssentials";
		this._kahonessentials.ggTop=-96;
		this._kahonessentials.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._kahonessentials.ggVisible=true;
		this._kahonessentials.className='ggskin ggskin_container ';
		this._kahonessentials.ggType='container';
		hs ='';
		hs+='height : 91px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : -96px;';
		hs+='visibility : inherit;';
		hs+='width : 97px;';
		hs+='pointer-events:none;';
		this._kahonessentials.setAttribute('style',hs);
		this._kahonessentials.style[domTransform + 'Origin']='50% 50%';
		me._kahonessentials.ggIsActive=function() {
			return false;
		}
		me._kahonessentials.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._kahonessentials.ggCurrentLogicStateScaling = -1;
		this._kahonessentials.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height > 1) && 
				(me.player.getViewerSize().width <= 640)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height < 1) && 
				(me.player.getViewerSize().width <= 736)
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._kahonessentials.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._kahonessentials.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._kahonessentials.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._kahonessentials.ggCurrentLogicStateScaling == 0) {
					me._kahonessentials.ggParameter.sx = 0.75;
					me._kahonessentials.ggParameter.sy = 0.75;
					me._kahonessentials.style[domTransform]=parameterToTransform(me._kahonessentials.ggParameter);
				}
				else if (me._kahonessentials.ggCurrentLogicStateScaling == 1) {
					me._kahonessentials.ggParameter.sx = 0.8;
					me._kahonessentials.ggParameter.sy = 0.8;
					me._kahonessentials.style[domTransform]=parameterToTransform(me._kahonessentials.ggParameter);
				}
				else {
					me._kahonessentials.ggParameter.sx = 1;
					me._kahonessentials.ggParameter.sy = 1;
					me._kahonessentials.style[domTransform]=parameterToTransform(me._kahonessentials.ggParameter);
				}
			}
		}
		this._kahonessentials.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._mapkahon=document.createElement('div');
		this._mapkahon.ggId="MapKahon";
		this._mapkahon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mapkahon.ggVisible=true;
		this._mapkahon.className='ggskin ggskin_container ';
		this._mapkahon.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._mapkahon.setAttribute('style',hs);
		this._mapkahon.style[domTransform + 'Origin']='50% 50%';
		me._mapkahon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._mapkahon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._mapkahon.ggUpdatePosition=function (useTransition) {
		}
		this._mapbttnhyd=document.createElement('div');
		this._mapbttnhyd__img=document.createElement('img');
		this._mapbttnhyd__img.className='ggskin ggskin_button';
		this._mapbttnhyd__img.setAttribute('src',basePath + 'images/mapbttnhyd.png');
		this._mapbttnhyd__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._mapbttnhyd__img.className='ggskin ggskin_button';
		this._mapbttnhyd__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._mapbttnhyd__img);
		this._mapbttnhyd.appendChild(this._mapbttnhyd__img);
		this._mapbttnhyd.ggId="MapbttnHyd";
		this._mapbttnhyd.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		this._mapbttnhyd.ggVisible=true;
		this._mapbttnhyd.className='ggskin ggskin_button ';
		this._mapbttnhyd.ggType='button';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._mapbttnhyd.setAttribute('style',hs);
		this._mapbttnhyd.style[domTransform + 'Origin']='50% 50%';
		this._mapbttnhyd.style[domTransform]=parameterToTransform(this._mapbttnhyd.ggParameter);
		me._mapbttnhyd.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._mapbttnhyd.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._mapbttnhyd.onclick=function (e) {
			if (me.player.transitionsDisabled) {
				me._maprect.style[domTransition]='none';
			} else {
				me._maprect.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._maprect.ggParameter.sx=0;me._maprect.ggParameter.sy=0;
			me._maprect.style[domTransform]=parameterToTransform(me._maprect.ggParameter);
			me._mapbttnhyd.style[domTransition]='none';
			me._mapbttnhyd.ggParameter.sx=0;me._mapbttnhyd.ggParameter.sy=0;
			me._mapbttnhyd.style[domTransform]=parameterToTransform(me._mapbttnhyd.ggParameter);
			me._mapbttnshw.style[domTransition]='none';
			me._mapbttnshw.ggParameter.sx=1;me._mapbttnshw.ggParameter.sy=1;
			me._mapbttnshw.style[domTransform]=parameterToTransform(me._mapbttnshw.ggParameter);
		}
		this._mapbttnhyd.onmouseover=function (e) {
			me._mapbttnhyd__img.src=basePath + 'images/mapbttnhyd__o.png';
		}
		this._mapbttnhyd.onmouseout=function (e) {
			me._mapbttnhyd__img.src=basePath + 'images/mapbttnhyd.png';
		}
		me._mapbttnhyd.ggCurrentLogicStateScaling = -1;
		this._mapbttnhyd.ggUpdateConditionNodeChange=function () {
			var newLogicStateScaling;
			if (
				(me.ggUserdata.tags.indexOf("Amenities") != -1)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._mapbttnhyd.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._mapbttnhyd.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._mapbttnhyd.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._mapbttnhyd.ggCurrentLogicStateScaling == 0) {
					me._mapbttnhyd.ggParameter.sx = 1;
					me._mapbttnhyd.ggParameter.sy = 1;
					me._mapbttnhyd.style[domTransform]=parameterToTransform(me._mapbttnhyd.ggParameter);
				}
				else {
					me._mapbttnhyd.ggParameter.sx = 0;
					me._mapbttnhyd.ggParameter.sy = 0;
					me._mapbttnhyd.style[domTransform]=parameterToTransform(me._mapbttnhyd.ggParameter);
				}
			}
		}
		this._mapbttnhyd.ggUpdatePosition=function (useTransition) {
		}
		this._mapbttnhyd.ggNodeChange=function () {
			me._mapbttnhyd.ggUpdateConditionNodeChange();
		}
		this._mapkahon.appendChild(this._mapbttnhyd);
		this._mapbttnshw=document.createElement('div');
		this._mapbttnshw__img=document.createElement('img');
		this._mapbttnshw__img.className='ggskin ggskin_svg';
		this._mapbttnshw__img.setAttribute('src',basePath + 'images/mapbttnshw.svg');
		this._mapbttnshw__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._mapbttnshw__img['ondragstart']=function() { return false; };
		this._mapbttnshw.appendChild(this._mapbttnshw__img);
		this._mapbttnshw__imgo=document.createElement('img');
		this._mapbttnshw__imgo.className='ggskin ggskin_svg';
		this._mapbttnshw__imgo.setAttribute('src',basePath + 'images/mapbttnshw__o.svg');
		this._mapbttnshw__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._mapbttnshw__imgo['ondragstart']=function() { return false; };
		this._mapbttnshw.appendChild(this._mapbttnshw__imgo);
		this._mapbttnshw.ggId="MapbttnShw";
		this._mapbttnshw.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		this._mapbttnshw.ggVisible=true;
		this._mapbttnshw.className='ggskin ggskin_svg ';
		this._mapbttnshw.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._mapbttnshw.setAttribute('style',hs);
		this._mapbttnshw.style[domTransform + 'Origin']='50% 50%';
		this._mapbttnshw.style[domTransform]=parameterToTransform(this._mapbttnshw.ggParameter);
		me._mapbttnshw.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._mapbttnshw.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._mapbttnshw.onclick=function (e) {
			me._maprect.style[domTransition]='none';
			me._maprect.style.visibility=(Number(me._maprect.style.opacity)>0||!me._maprect.style.opacity)?'inherit':'hidden';
			me._maprect.ggVisible=true;
			if (me.player.transitionsDisabled) {
				me._maprect.style[domTransition]='none';
			} else {
				me._maprect.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._maprect.ggParameter.sx=1;me._maprect.ggParameter.sy=1;
			me._maprect.style[domTransform]=parameterToTransform(me._maprect.ggParameter);
			me._mapbttnshw.style[domTransition]='none';
			me._mapbttnshw.ggParameter.sx=0;me._mapbttnshw.ggParameter.sy=0;
			me._mapbttnshw.style[domTransform]=parameterToTransform(me._mapbttnshw.ggParameter);
			me._mapbttnhyd.style[domTransition]='none';
			me._mapbttnhyd.ggParameter.sx=1;me._mapbttnhyd.ggParameter.sy=1;
			me._mapbttnhyd.style[domTransform]=parameterToTransform(me._mapbttnhyd.ggParameter);
		}
		this._mapbttnshw.onmouseover=function (e) {
			me._mapbttnshw__img.style.visibility='hidden';
			me._mapbttnshw__imgo.style.visibility='inherit';
		}
		this._mapbttnshw.onmouseout=function (e) {
			me._mapbttnshw__img.style.visibility='inherit';
			me._mapbttnshw__imgo.style.visibility='hidden';
		}
		me._mapbttnshw.ggCurrentLogicStateScaling = -1;
		this._mapbttnshw.ggUpdateConditionNodeChange=function () {
			var newLogicStateScaling;
			if (
				(me.ggUserdata.tags.indexOf("Amenities") != -1)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._mapbttnshw.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._mapbttnshw.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._mapbttnshw.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._mapbttnshw.ggCurrentLogicStateScaling == 0) {
					me._mapbttnshw.ggParameter.sx = 1;
					me._mapbttnshw.ggParameter.sy = 1;
					me._mapbttnshw.style[domTransform]=parameterToTransform(me._mapbttnshw.ggParameter);
				}
				else {
					me._mapbttnshw.ggParameter.sx = 0;
					me._mapbttnshw.ggParameter.sy = 0;
					me._mapbttnshw.style[domTransform]=parameterToTransform(me._mapbttnshw.ggParameter);
				}
			}
		}
		this._mapbttnshw.ggUpdatePosition=function (useTransition) {
		}
		this._mapbttnshw.ggNodeChange=function () {
			me._mapbttnshw.ggUpdateConditionNodeChange();
		}
		this._mapkahon.appendChild(this._mapbttnshw);
		this._kahonessentials.appendChild(this._mapkahon);
		this._floorplanbuttons=document.createElement('div');
		this._floorplanbuttons.ggId="FloorPlanButtons";
		this._floorplanbuttons.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._floorplanbuttons.ggVisible=true;
		this._floorplanbuttons.className='ggskin ggskin_container ';
		this._floorplanbuttons.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 34px;';
		hs+='pointer-events:none;';
		this._floorplanbuttons.setAttribute('style',hs);
		this._floorplanbuttons.style[domTransform + 'Origin']='50% 50%';
		me._floorplanbuttons.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._floorplanbuttons.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._floorplanbuttons.ggUpdatePosition=function (useTransition) {
		}
		this._floorpln_hyd=document.createElement('div');
		this._floorpln_hyd__img=document.createElement('img');
		this._floorpln_hyd__img.className='ggskin ggskin_button';
		this._floorpln_hyd__img.setAttribute('src',basePath + 'images/floorpln_hyd.png');
		this._floorpln_hyd__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._floorpln_hyd__img.className='ggskin ggskin_button';
		this._floorpln_hyd__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._floorpln_hyd__img);
		this._floorpln_hyd.appendChild(this._floorpln_hyd__img);
		this._floorpln_hyd.ggId="FloorPln_Hyd";
		this._floorpln_hyd.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		this._floorpln_hyd.ggVisible=true;
		this._floorpln_hyd.className='ggskin ggskin_button ';
		this._floorpln_hyd.ggType='button';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._floorpln_hyd.setAttribute('style',hs);
		this._floorpln_hyd.style[domTransform + 'Origin']='50% 50%';
		this._floorpln_hyd.style[domTransform]=parameterToTransform(this._floorpln_hyd.ggParameter);
		me._floorpln_hyd.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._floorpln_hyd.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._floorpln_hyd.onclick=function (e) {
			if (me.player.transitionsDisabled) {
				me._floor_plan_bg.style[domTransition]='none';
			} else {
				me._floor_plan_bg.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._floor_plan_bg.ggParameter.rx=0;me._floor_plan_bg.ggParameter.ry=0;
			me._floor_plan_bg.style[domTransform]=parameterToTransform(me._floor_plan_bg.ggParameter);
			me._floorpln_hyd.style[domTransition]='none';
			me._floorpln_hyd.ggParameter.sx=0;me._floorpln_hyd.ggParameter.sy=0;
			me._floorpln_hyd.style[domTransform]=parameterToTransform(me._floorpln_hyd.ggParameter);
			if (me.player.transitionsDisabled) {
				me._floorpln_show.style[domTransition]='none';
			} else {
				me._floorpln_show.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._floorpln_show.ggParameter.sx=1;me._floorpln_show.ggParameter.sy=1;
			me._floorpln_show.style[domTransform]=parameterToTransform(me._floorpln_show.ggParameter);
		}
		this._floorpln_hyd.onmouseover=function (e) {
			me._floorpln_hyd__img.src=basePath + 'images/floorpln_hyd__o.png';
			me.elementMouseOver['floorpln_hyd']=true;
		}
		this._floorpln_hyd.onmouseout=function (e) {
			me._floorpln_hyd__img.src=basePath + 'images/floorpln_hyd.png';
			me.elementMouseOver['floorpln_hyd']=false;
		}
		this._floorpln_hyd.ontouchend=function (e) {
			me.elementMouseOver['floorpln_hyd']=false;
		}
		me._floorpln_hyd.ggCurrentLogicStateScaling = -1;
		this._floorpln_hyd.ggUpdateConditionNodeChange=function () {
			var newLogicStateScaling;
			if (
				(me.ggUserdata.tags.indexOf("BR") == -1)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._floorpln_hyd.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._floorpln_hyd.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._floorpln_hyd.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._floorpln_hyd.ggCurrentLogicStateScaling == 0) {
					me._floorpln_hyd.ggParameter.sx = 0;
					me._floorpln_hyd.ggParameter.sy = 0;
					me._floorpln_hyd.style[domTransform]=parameterToTransform(me._floorpln_hyd.ggParameter);
				}
				else {
					me._floorpln_hyd.ggParameter.sx = 0;
					me._floorpln_hyd.ggParameter.sy = 0;
					me._floorpln_hyd.style[domTransform]=parameterToTransform(me._floorpln_hyd.ggParameter);
				}
			}
		}
		this._floorpln_hyd.ggUpdatePosition=function (useTransition) {
		}
		this._floorpln_hyd.ggNodeChange=function () {
			me._floorpln_hyd.ggUpdateConditionNodeChange();
		}
		this.__1brtt_flrpln_hide=document.createElement('div');
		this.__1brtt_flrpln_hide__text=document.createElement('div');
		this.__1brtt_flrpln_hide.className='ggskin ggskin_textdiv';
		this.__1brtt_flrpln_hide.ggTextDiv=this.__1brtt_flrpln_hide__text;
		this.__1brtt_flrpln_hide.ggId="1BRtt_FlrPln_hide";
		this.__1brtt_flrpln_hide.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__1brtt_flrpln_hide.ggVisible=false;
		this.__1brtt_flrpln_hide.className='ggskin ggskin_text ';
		this.__1brtt_flrpln_hide.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -47px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this.__1brtt_flrpln_hide.setAttribute('style',hs);
		this.__1brtt_flrpln_hide.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this.__1brtt_flrpln_hide__text.setAttribute('style',hs);
		this.__1brtt_flrpln_hide__text.innerHTML="Hide Floor Plan";
		this.__1brtt_flrpln_hide.appendChild(this.__1brtt_flrpln_hide__text);
		me.__1brtt_flrpln_hide.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__1brtt_flrpln_hide.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me.__1brtt_flrpln_hide.ggCurrentLogicStateVisible = -1;
		this.__1brtt_flrpln_hide.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['floorpln_hyd'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1brtt_flrpln_hide.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1brtt_flrpln_hide.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1brtt_flrpln_hide.style[domTransition]='';
				if (me.__1brtt_flrpln_hide.ggCurrentLogicStateVisible == 0) {
					me.__1brtt_flrpln_hide.style.visibility=(Number(me.__1brtt_flrpln_hide.style.opacity)>0||!me.__1brtt_flrpln_hide.style.opacity)?'inherit':'hidden';
					me.__1brtt_flrpln_hide.ggVisible=true;
				}
				else {
					me.__1brtt_flrpln_hide.style.visibility="hidden";
					me.__1brtt_flrpln_hide.ggVisible=false;
				}
			}
		}
		this.__1brtt_flrpln_hide.ggUpdatePosition=function (useTransition) {
		}
		this._tt_flrpln_white_hide=document.createElement('div');
		this._tt_flrpln_white_hide__text=document.createElement('div');
		this._tt_flrpln_white_hide.className='ggskin ggskin_textdiv';
		this._tt_flrpln_white_hide.ggTextDiv=this._tt_flrpln_white_hide__text;
		this._tt_flrpln_white_hide.ggId="tt_FlrPln_white_hide";
		this._tt_flrpln_white_hide.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_flrpln_white_hide.ggVisible=true;
		this._tt_flrpln_white_hide.className='ggskin ggskin_text ';
		this._tt_flrpln_white_hide.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_flrpln_white_hide.setAttribute('style',hs);
		this._tt_flrpln_white_hide.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_flrpln_white_hide__text.setAttribute('style',hs);
		this._tt_flrpln_white_hide__text.innerHTML="Hide Floor Plan";
		this._tt_flrpln_white_hide.appendChild(this._tt_flrpln_white_hide__text);
		me._tt_flrpln_white_hide.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_flrpln_white_hide.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_flrpln_white_hide.ggUpdatePosition=function (useTransition) {
		}
		this.__1brtt_flrpln_hide.appendChild(this._tt_flrpln_white_hide);
		this._floorpln_hyd.appendChild(this.__1brtt_flrpln_hide);
		this._floorplanbuttons.appendChild(this._floorpln_hyd);
		this._floorpln_show=document.createElement('div');
		this._floorpln_show__img=document.createElement('img');
		this._floorpln_show__img.className='ggskin ggskin_button';
		this._floorpln_show__img.setAttribute('src',basePath + 'images/floorpln_show.png');
		this._floorpln_show__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._floorpln_show__img.className='ggskin ggskin_button';
		this._floorpln_show__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._floorpln_show__img);
		this._floorpln_show.appendChild(this._floorpln_show__img);
		this._floorpln_show.ggId="FloorPln_Show";
		this._floorpln_show.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		this._floorpln_show.ggVisible=true;
		this._floorpln_show.className='ggskin ggskin_button ';
		this._floorpln_show.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._floorpln_show.setAttribute('style',hs);
		this._floorpln_show.style[domTransform + 'Origin']='50% 50%';
		this._floorpln_show.style[domTransform]=parameterToTransform(this._floorpln_show.ggParameter);
		me._floorpln_show.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._floorpln_show.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._floorpln_show.onclick=function (e) {
			me._floor_plan_bg.style[domTransition]='none';
			me._floor_plan_bg.ggParameter.sx=1;me._floor_plan_bg.ggParameter.sy=1;
			me._floor_plan_bg.style[domTransform]=parameterToTransform(me._floor_plan_bg.ggParameter);
			if (me.player.transitionsDisabled) {
				me._floor_plan_bg.style[domTransition]='none';
			} else {
				me._floor_plan_bg.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._floor_plan_bg.ggParameter.rx=384;me._floor_plan_bg.ggParameter.ry=0;
			me._floor_plan_bg.style[domTransform]=parameterToTransform(me._floor_plan_bg.ggParameter);
			me._floorpln_show.style[domTransition]='none';
			me._floorpln_show.ggParameter.sx=0;me._floorpln_show.ggParameter.sy=0;
			me._floorpln_show.style[domTransform]=parameterToTransform(me._floorpln_show.ggParameter);
			if (me.player.transitionsDisabled) {
				me._floorpln_hyd.style[domTransition]='none';
			} else {
				me._floorpln_hyd.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._floorpln_hyd.ggParameter.sx=1;me._floorpln_hyd.ggParameter.sy=1;
			me._floorpln_hyd.style[domTransform]=parameterToTransform(me._floorpln_hyd.ggParameter);
		}
		this._floorpln_show.onmouseover=function (e) {
			me._floorpln_show__img.src=basePath + 'images/floorpln_show__o.png';
			me.elementMouseOver['floorpln_show']=true;
		}
		this._floorpln_show.onmouseout=function (e) {
			me._floorpln_show__img.src=basePath + 'images/floorpln_show.png';
			me.elementMouseOver['floorpln_show']=false;
		}
		this._floorpln_show.ontouchend=function (e) {
			me.elementMouseOver['floorpln_show']=false;
		}
		me._floorpln_show.ggCurrentLogicStateScaling = -1;
		this._floorpln_show.ggUpdateConditionNodeChange=function () {
			var newLogicStateScaling;
			if (
				(me.ggUserdata.tags.indexOf("BR") != -1)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._floorpln_show.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._floorpln_show.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._floorpln_show.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._floorpln_show.ggCurrentLogicStateScaling == 0) {
					me._floorpln_show.ggParameter.sx = 1;
					me._floorpln_show.ggParameter.sy = 1;
					me._floorpln_show.style[domTransform]=parameterToTransform(me._floorpln_show.ggParameter);
				}
				else {
					me._floorpln_show.ggParameter.sx = 0;
					me._floorpln_show.ggParameter.sy = 0;
					me._floorpln_show.style[domTransform]=parameterToTransform(me._floorpln_show.ggParameter);
				}
			}
		}
		this._floorpln_show.ggUpdatePosition=function (useTransition) {
		}
		this._floorpln_show.ggNodeChange=function () {
			me._floorpln_show.ggUpdateConditionNodeChange();
		}
		this.__1brtt_flrpln_show=document.createElement('div');
		this.__1brtt_flrpln_show__text=document.createElement('div');
		this.__1brtt_flrpln_show.className='ggskin ggskin_textdiv';
		this.__1brtt_flrpln_show.ggTextDiv=this.__1brtt_flrpln_show__text;
		this.__1brtt_flrpln_show.ggId="1BRtt_FlrPln_show";
		this.__1brtt_flrpln_show.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__1brtt_flrpln_show.ggVisible=false;
		this.__1brtt_flrpln_show.className='ggskin ggskin_text ';
		this.__1brtt_flrpln_show.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -47px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this.__1brtt_flrpln_show.setAttribute('style',hs);
		this.__1brtt_flrpln_show.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this.__1brtt_flrpln_show__text.setAttribute('style',hs);
		this.__1brtt_flrpln_show__text.innerHTML="Show Floor Plan";
		this.__1brtt_flrpln_show.appendChild(this.__1brtt_flrpln_show__text);
		me.__1brtt_flrpln_show.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__1brtt_flrpln_show.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me.__1brtt_flrpln_show.ggCurrentLogicStateVisible = -1;
		this.__1brtt_flrpln_show.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['floorpln_show'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1brtt_flrpln_show.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1brtt_flrpln_show.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1brtt_flrpln_show.style[domTransition]='';
				if (me.__1brtt_flrpln_show.ggCurrentLogicStateVisible == 0) {
					me.__1brtt_flrpln_show.style.visibility=(Number(me.__1brtt_flrpln_show.style.opacity)>0||!me.__1brtt_flrpln_show.style.opacity)?'inherit':'hidden';
					me.__1brtt_flrpln_show.ggVisible=true;
				}
				else {
					me.__1brtt_flrpln_show.style.visibility="hidden";
					me.__1brtt_flrpln_show.ggVisible=false;
				}
			}
		}
		this.__1brtt_flrpln_show.ggUpdatePosition=function (useTransition) {
		}
		this._tt_flrpln_white_show=document.createElement('div');
		this._tt_flrpln_white_show__text=document.createElement('div');
		this._tt_flrpln_white_show.className='ggskin ggskin_textdiv';
		this._tt_flrpln_white_show.ggTextDiv=this._tt_flrpln_white_show__text;
		this._tt_flrpln_white_show.ggId="tt_FlrPln_white_show";
		this._tt_flrpln_white_show.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_flrpln_white_show.ggVisible=true;
		this._tt_flrpln_white_show.className='ggskin ggskin_text ';
		this._tt_flrpln_white_show.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_flrpln_white_show.setAttribute('style',hs);
		this._tt_flrpln_white_show.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_flrpln_white_show__text.setAttribute('style',hs);
		this._tt_flrpln_white_show__text.innerHTML="Show Floor Plan";
		this._tt_flrpln_white_show.appendChild(this._tt_flrpln_white_show__text);
		me._tt_flrpln_white_show.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_flrpln_white_show.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_flrpln_white_show.ggUpdatePosition=function (useTransition) {
		}
		this.__1brtt_flrpln_show.appendChild(this._tt_flrpln_white_show);
		this._floorpln_show.appendChild(this.__1brtt_flrpln_show);
		this._floorplanbuttons.appendChild(this._floorpln_show);
		this._kahonessentials.appendChild(this._floorplanbuttons);
		this._info=document.createElement('div');
		this._info__img=document.createElement('img');
		this._info__img.className='ggskin ggskin_svg';
		this._info__img.setAttribute('src',basePath + 'images/info.svg');
		this._info__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._info__img['ondragstart']=function() { return false; };
		this._info.appendChild(this._info__img);
		this._info__imgo=document.createElement('img');
		this._info__imgo.className='ggskin ggskin_svg';
		this._info__imgo.setAttribute('src',basePath + 'images/info__o.svg');
		this._info__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._info__imgo['ondragstart']=function() { return false; };
		this._info.appendChild(this._info__imgo);
		this._info.ggId="info";
		this._info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info.ggVisible=true;
		this._info.className='ggskin ggskin_svg ';
		this._info.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		this._info.setAttribute('style',hs);
		this._info.style[domTransform + 'Origin']='50% 50%';
		me._info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info.onclick=function (e) {
			var flag=me._information.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._information.style[domTransition]='none';
			} else {
				me._information.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._information.ggParameter.sx=0;me._information.ggParameter.sy=0;
				me._information.style[domTransform]=parameterToTransform(me._information.ggParameter);
			} else {
				me._information.ggParameter.sx=1;me._information.ggParameter.sy=1;
				me._information.style[domTransform]=parameterToTransform(me._information.ggParameter);
			}
			me._information.ggScaleActive=!flag;
		}
		this._info.onmouseover=function (e) {
			me._info__img.style.visibility='hidden';
			me._info__imgo.style.visibility='inherit';
		}
		this._info.onmouseout=function (e) {
			me._info__img.style.visibility='inherit';
			me._info__imgo.style.visibility='hidden';
		}
		this._info.ggUpdatePosition=function (useTransition) {
		}
		this._kahonessentials.appendChild(this._info);
		this._thumbnail_button=document.createElement('div');
		this._thumbnail_button__img=document.createElement('img');
		this._thumbnail_button__img.className='ggskin ggskin_button';
		this._thumbnail_button__img.setAttribute('src',basePath + 'images/thumbnail_button.png');
		this._thumbnail_button__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._thumbnail_button__img.className='ggskin ggskin_button';
		this._thumbnail_button__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._thumbnail_button__img);
		this._thumbnail_button.appendChild(this._thumbnail_button__img);
		this._thumbnail_button.ggId="ThumbNail button";
		this._thumbnail_button.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail_button.ggVisible=true;
		this._thumbnail_button.className='ggskin ggskin_button ';
		this._thumbnail_button.ggType='button';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 57px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._thumbnail_button.setAttribute('style',hs);
		this._thumbnail_button.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._thumbnail_button.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._thumbnail_button.onclick=function (e) {
			var flag=me._thumbnail_menu.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._thumbnail_menu.style[domTransition]='none';
			} else {
				me._thumbnail_menu.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._thumbnail_menu.ggParameter.sx=1;me._thumbnail_menu.ggParameter.sy=1;
				me._thumbnail_menu.style[domTransform]=parameterToTransform(me._thumbnail_menu.ggParameter);
			} else {
				me._thumbnail_menu.ggParameter.sx=0;me._thumbnail_menu.ggParameter.sy=0;
				me._thumbnail_menu.style[domTransform]=parameterToTransform(me._thumbnail_menu.ggParameter);
			}
			me._thumbnail_menu.ggScaleActive=!flag;
			var flag=me._headerbg.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._headerbg.style[domTransition]='none';
			} else {
				me._headerbg.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._headerbg.ggParameter.sx=1;me._headerbg.ggParameter.sy=1;
				me._headerbg.style[domTransform]=parameterToTransform(me._headerbg.ggParameter);
			} else {
				me._headerbg.ggParameter.sx=0;me._headerbg.ggParameter.sy=0;
				me._headerbg.style[domTransform]=parameterToTransform(me._headerbg.ggParameter);
			}
			me._headerbg.ggScaleActive=!flag;
		}
		this._thumbnail_button.onmouseover=function (e) {
			me._thumbnail_button__img.src=basePath + 'images/thumbnail_button__o.png';
		}
		this._thumbnail_button.onmouseout=function (e) {
			me._thumbnail_button__img.src=basePath + 'images/thumbnail_button.png';
		}
		this._thumbnail_button.ggUpdatePosition=function (useTransition) {
		}
		this._kahonessentials.appendChild(this._thumbnail_button);
		this.__605=document.createElement('div');
		this.__605__img=document.createElement('img');
		this.__605__img.className='ggskin ggskin_button';
		this.__605__img.setAttribute('src',basePath + 'images/_605.png');
		this.__605__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this.__605__img.className='ggskin ggskin_button';
		this.__605__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__605__img);
		this.__605.appendChild(this.__605__img);
		this.__605.ggId="605";
		this.__605.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__605.ggVisible=true;
		this.__605.className='ggskin ggskin_button ';
		this.__605.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 31px;';
		hs+='left : 54px;';
		hs+='position : absolute;';
		hs+='top : 57px;';
		hs+='visibility : inherit;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		this.__605.setAttribute('style',hs);
		this.__605.style[domTransform + 'Origin']='50% 50%';
		me.__605.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__605.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__605.onclick=function (e) {
			var flag=me._hekpkahon.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._hekpkahon.style[domTransition]='none';
			} else {
				me._hekpkahon.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._hekpkahon.ggParameter.sx=1;me._hekpkahon.ggParameter.sy=1;
				me._hekpkahon.style[domTransform]=parameterToTransform(me._hekpkahon.ggParameter);
			} else {
				me._hekpkahon.ggParameter.sx=0;me._hekpkahon.ggParameter.sy=0;
				me._hekpkahon.style[domTransform]=parameterToTransform(me._hekpkahon.ggParameter);
			}
			me._hekpkahon.ggScaleActive=!flag;
		}
		this.__605.onmouseover=function (e) {
			me.__605__img.src=basePath + 'images/_605__o.png';
		}
		this.__605.onmouseout=function (e) {
			me.__605__img.src=basePath + 'images/_605.png';
		}
		this.__605.ggUpdatePosition=function (useTransition) {
		}
		this._kahonessentials.appendChild(this.__605);
		this.divSkin.appendChild(this._kahonessentials);
		this._tn_location_box=document.createElement('div');
		this._tn_location_box__text=document.createElement('div');
		this._tn_location_box.className='ggskin ggskin_textdiv';
		this._tn_location_box.ggTextDiv=this._tn_location_box__text;
		this._tn_location_box.ggId="TN_Location Box";
		this._tn_location_box.ggLeft=-78;
		this._tn_location_box.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tn_location_box.ggVisible=true;
		this._tn_location_box.className='ggskin ggskin_text ';
		this._tn_location_box.ggType='text';
		hs ='';
		hs+='height : 22px;';
		hs+='left : -78px;';
		hs+='position : absolute;';
		hs+='top : 118px;';
		hs+='visibility : inherit;';
		hs+='width : 153px;';
		hs+='pointer-events:auto;';
		this._tn_location_box.setAttribute('style',hs);
		this._tn_location_box.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #c3c3c3;';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,85,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tn_location_box__text.setAttribute('style',hs);
		this._tn_location_box.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tn_location_box.ggUpdateText();
		this._tn_location_box.appendChild(this._tn_location_box__text);
		me._tn_location_box.ggIsActive=function() {
			return false;
		}
		me._tn_location_box.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._tn_location_box.ggCurrentLogicStatePosition = -1;
		this._tn_location_box.ggUpdateConditionTimer=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height < 1) && 
				(me.player.getViewerSize().width <= 414)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height > 1) && 
				(me.player.getViewerSize().width <= 736)
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height > 1) && 
				(me.player.getViewerSize().width <= 1024)
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height < 1) && 
				(me.player.getViewerSize().width <= 1366)
			)
			{
				newLogicStatePosition = 3;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tn_location_box.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tn_location_box.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tn_location_box.style[domTransition]='left none, top none';
				if (me._tn_location_box.ggCurrentLogicStatePosition == 0) {
					me._tn_location_box.ggLeft=-78;
					me._tn_location_box.style.top='71px';
					me._tn_location_box.ggUpdatePosition(true);
				}
				else if (me._tn_location_box.ggCurrentLogicStatePosition == 1) {
					me._tn_location_box.ggLeft=-78;
					me._tn_location_box.style.top='77px';
					me._tn_location_box.ggUpdatePosition(true);
				}
				else if (me._tn_location_box.ggCurrentLogicStatePosition == 2) {
					me._tn_location_box.ggLeft=-65;
					me._tn_location_box.style.top='89px';
					me._tn_location_box.ggUpdatePosition(true);
				}
				else if (me._tn_location_box.ggCurrentLogicStatePosition == 3) {
					me._tn_location_box.ggLeft=-78;
					me._tn_location_box.style.top='94px';
					me._tn_location_box.ggUpdatePosition(true);
				}
				else {
					me._tn_location_box.ggLeft=-78;
					me._tn_location_box.style.top='118px';
					me._tn_location_box.ggUpdatePosition(true);
				}
			}
		}
		this._tn_location_box.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
			}
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((155-this.ggTextDiv.offsetWidth)*0) + 'px';
		}
		this.divSkin.appendChild(this._tn_location_box);
		this._container4hdr=document.createElement('div');
		this._container4hdr.ggId="Container4Hdr";
		this._container4hdr.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container4hdr.ggVisible=true;
		this._container4hdr.className='ggskin ggskin_container ';
		this._container4hdr.ggType='container';
		hs ='';
		hs+='height : 120px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : inherit;';
		hs+='width : 1250px;';
		hs+='pointer-events:none;';
		this._container4hdr.setAttribute('style',hs);
		this._container4hdr.style[domTransform + 'Origin']='0% 0%';
		me._container4hdr.ggIsActive=function() {
			return false;
		}
		me._container4hdr.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._container4hdr.ggCurrentLogicStateScaling = -1;
		this._container4hdr.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height < 1) && 
				(me.player.getViewerSize().width <= 414)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height > 1) && 
				(me.player.getViewerSize().width <= 736)
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				(me.player.getIsMobile() == false) && 
				(me.player.getViewerSize().width <= 960)
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height > 1) && 
				(me.player.getViewerSize().width <= 1024)
			)
			{
				newLogicStateScaling = 3;
			}
			else if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height < 1) && 
				(me.player.getViewerSize().width <= 1366)
			)
			{
				newLogicStateScaling = 4;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._container4hdr.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._container4hdr.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._container4hdr.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._container4hdr.ggCurrentLogicStateScaling == 0) {
					me._container4hdr.ggParameter.sx = 0.6;
					me._container4hdr.ggParameter.sy = 0.6;
					me._container4hdr.style[domTransform]=parameterToTransform(me._container4hdr.ggParameter);
				}
				else if (me._container4hdr.ggCurrentLogicStateScaling == 1) {
					me._container4hdr.ggParameter.sx = 0.65;
					me._container4hdr.ggParameter.sy = 0.65;
					me._container4hdr.style[domTransform]=parameterToTransform(me._container4hdr.ggParameter);
				}
				else if (me._container4hdr.ggCurrentLogicStateScaling == 2) {
					me._container4hdr.ggParameter.sx = 0.75;
					me._container4hdr.ggParameter.sy = 0.75;
					me._container4hdr.style[domTransform]=parameterToTransform(me._container4hdr.ggParameter);
				}
				else if (me._container4hdr.ggCurrentLogicStateScaling == 3) {
					me._container4hdr.ggParameter.sx = 0.75;
					me._container4hdr.ggParameter.sy = 0.75;
					me._container4hdr.style[domTransform]=parameterToTransform(me._container4hdr.ggParameter);
				}
				else if (me._container4hdr.ggCurrentLogicStateScaling == 4) {
					me._container4hdr.ggParameter.sx = 0.8;
					me._container4hdr.ggParameter.sy = 0.8;
					me._container4hdr.style[domTransform]=parameterToTransform(me._container4hdr.ggParameter);
				}
				else {
					me._container4hdr.ggParameter.sx = 1;
					me._container4hdr.ggParameter.sy = 1;
					me._container4hdr.style[domTransform]=parameterToTransform(me._container4hdr.ggParameter);
				}
			}
		}
		this._container4hdr.ggUpdatePosition=function (useTransition) {
		}
		this._header=document.createElement('div');
		this._header.ggId="Header";
		this._header.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._header.ggVisible=true;
		this._header.className='ggskin ggskin_rectangle ';
		this._header.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='cursor : default;';
		hs+='height : 119px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 1249px;';
		hs+='pointer-events:auto;';
		this._header.setAttribute('style',hs);
		this._header.style[domTransform + 'Origin']='50% 50%';
		me._header.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._header.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._header.ggUpdatePosition=function (useTransition) {
		}
		this._headerbg=document.createElement('div');
		this._headerbg__img=document.createElement('img');
		this._headerbg__img.className='ggskin ggskin_image';
		this._headerbg__img.setAttribute('src',basePath + 'images/headerbg.png');
		this._headerbg__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._headerbg__img.className='ggskin ggskin_image';
		this._headerbg__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._headerbg__img);
		this._headerbg.appendChild(this._headerbg__img);
		this._headerbg.ggId="HeaderBg";
		this._headerbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._headerbg.ggVisible=true;
		this._headerbg.className='ggskin ggskin_image ';
		this._headerbg.ggType='image';
		hs ='';
		hs+='height : 142px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : -13px;';
		hs+='visibility : inherit;';
		hs+='width : 1355px;';
		hs+='pointer-events:auto;';
		this._headerbg.setAttribute('style',hs);
		this._headerbg.style[domTransform + 'Origin']='50% 50%';
		me._headerbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._headerbg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._headerbg.ggUpdatePosition=function (useTransition) {
		}
		this._header.appendChild(this._headerbg);
		this._zt_logo=document.createElement('div');
		this._zt_logo__img=document.createElement('img');
		this._zt_logo__img.className='ggskin ggskin_image';
		this._zt_logo__img.setAttribute('src',basePath + 'images/zt_logo.png');
		this._zt_logo__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._zt_logo__img.className='ggskin ggskin_image';
		this._zt_logo__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._zt_logo__img);
		this._zt_logo.appendChild(this._zt_logo__img);
		this._zt_logo.ggId="ZT_logo";
		this._zt_logo.ggLeft=-112;
		this._zt_logo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zt_logo.ggVisible=true;
		this._zt_logo.className='ggskin ggskin_image ';
		this._zt_logo.ggType='image';
		hs ='';
		hs+='height : 85px;';
		hs+='left : -113px;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 103px;';
		hs+='pointer-events:auto;';
		this._zt_logo.setAttribute('style',hs);
		this._zt_logo.style[domTransform + 'Origin']='50% 50%';
		me._zt_logo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zt_logo.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._zt_logo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 1 + w) + 'px';
			}
		}
		this._buttons_social=document.createElement('div');
		this._buttons_social.ggId="buttons_social";
		this._buttons_social.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._buttons_social.ggVisible=true;
		this._buttons_social.className='ggskin ggskin_container ';
		this._buttons_social.ggType='container';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 83px;';
		hs+='visibility : inherit;';
		hs+='width : 93px;';
		hs+='pointer-events:none;';
		this._buttons_social.setAttribute('style',hs);
		this._buttons_social.style[domTransform + 'Origin']='50% 50%';
		me._buttons_social.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._buttons_social.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._buttons_social.ggUpdatePosition=function (useTransition) {
		}
		this._social_rectangle_1=document.createElement('div');
		this._social_rectangle_1.ggId="Social Rectangle 1";
		this._social_rectangle_1.ggLeft=-93;
		this._social_rectangle_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._social_rectangle_1.ggVisible=true;
		this._social_rectangle_1.className='ggskin ggskin_rectangle ';
		this._social_rectangle_1.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='cursor : default;';
		hs+='height : 19px;';
		hs+='left : -93px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		this._social_rectangle_1.setAttribute('style',hs);
		this._social_rectangle_1.style[domTransform + 'Origin']='50% 50%';
		me._social_rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._social_rectangle_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._social_rectangle_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._button_g=document.createElement('div');
		this._button_g__img=document.createElement('img');
		this._button_g__img.className='ggskin ggskin_svg';
		this._button_g__img.setAttribute('src',basePath + 'images/button_g.svg');
		this._button_g__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_g__img['ondragstart']=function() { return false; };
		this._button_g.appendChild(this._button_g__img);
		this._button_g__imgo=document.createElement('img');
		this._button_g__imgo.className='ggskin ggskin_svg';
		this._button_g__imgo.setAttribute('src',basePath + 'images/button_g__o.svg');
		this._button_g__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_g__imgo['ondragstart']=function() { return false; };
		this._button_g.appendChild(this._button_g__imgo);
		this._button_g.ggId="button_G+";
		this._button_g.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_g.ggVisible=true;
		this._button_g.className='ggskin ggskin_svg ';
		this._button_g.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 19px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		this._button_g.setAttribute('style',hs);
		this._button_g.style[domTransform + 'Origin']='50% 50%';
		me._button_g.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_g.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_g.onclick=function (e) {
			window.open('https://plusone.google.com/_/+1/confirm?url=' + location.href);
		}
		this._button_g.onmouseover=function (e) {
			me._button_g__img.style.visibility='hidden';
			me._button_g__imgo.style.visibility='inherit';
		}
		this._button_g.onmouseout=function (e) {
			me._button_g__img.style.visibility='inherit';
			me._button_g__imgo.style.visibility='hidden';
		}
		this._button_g.ggUpdatePosition=function (useTransition) {
		}
		this._social_rectangle_1.appendChild(this._button_g);
		this._button_facebook=document.createElement('div');
		this._button_facebook__img=document.createElement('img');
		this._button_facebook__img.className='ggskin ggskin_svg';
		this._button_facebook__img.setAttribute('src',basePath + 'images/button_facebook.svg');
		this._button_facebook__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_facebook__img['ondragstart']=function() { return false; };
		this._button_facebook.appendChild(this._button_facebook__img);
		this._button_facebook__imgo=document.createElement('img');
		this._button_facebook__imgo.className='ggskin ggskin_svg';
		this._button_facebook__imgo.setAttribute('src',basePath + 'images/button_facebook__o.svg');
		this._button_facebook__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_facebook__imgo['ondragstart']=function() { return false; };
		this._button_facebook.appendChild(this._button_facebook__imgo);
		this._button_facebook.ggId="button_facebook";
		this._button_facebook.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_facebook.ggVisible=true;
		this._button_facebook.className='ggskin ggskin_svg ';
		this._button_facebook.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : 37px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		this._button_facebook.setAttribute('style',hs);
		this._button_facebook.style[domTransform + 'Origin']='50% 50%';
		me._button_facebook.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_facebook.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_facebook.onclick=function (e) {
			window.open('https://www.facebook.com/sharer/sharer.php?u=' + location.href);
		}
		this._button_facebook.onmouseover=function (e) {
			me._button_facebook__img.style.visibility='hidden';
			me._button_facebook__imgo.style.visibility='inherit';
		}
		this._button_facebook.onmouseout=function (e) {
			me._button_facebook__img.style.visibility='inherit';
			me._button_facebook__imgo.style.visibility='hidden';
		}
		this._button_facebook.ggUpdatePosition=function (useTransition) {
		}
		this._social_rectangle_1.appendChild(this._button_facebook);
		this._button_twitter=document.createElement('div');
		this._button_twitter__img=document.createElement('img');
		this._button_twitter__img.className='ggskin ggskin_svg';
		this._button_twitter__img.setAttribute('src',basePath + 'images/button_twitter.svg');
		this._button_twitter__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_twitter__img['ondragstart']=function() { return false; };
		this._button_twitter.appendChild(this._button_twitter__img);
		this._button_twitter__imgo=document.createElement('img');
		this._button_twitter__imgo.className='ggskin ggskin_svg';
		this._button_twitter__imgo.setAttribute('src',basePath + 'images/button_twitter__o.svg');
		this._button_twitter__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_twitter__imgo['ondragstart']=function() { return false; };
		this._button_twitter.appendChild(this._button_twitter__imgo);
		this._button_twitter.ggId="button_twitter";
		this._button_twitter.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_twitter.ggVisible=true;
		this._button_twitter.className='ggskin ggskin_svg ';
		this._button_twitter.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : 63px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		this._button_twitter.setAttribute('style',hs);
		this._button_twitter.style[domTransform + 'Origin']='50% 50%';
		me._button_twitter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_twitter.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_twitter.onclick=function (e) {
			window.open('http://twitter.com/share?url=' + location.href);
		}
		this._button_twitter.onmouseover=function (e) {
			me._button_twitter__img.style.visibility='hidden';
			me._button_twitter__imgo.style.visibility='inherit';
		}
		this._button_twitter.onmouseout=function (e) {
			me._button_twitter__img.style.visibility='inherit';
			me._button_twitter__imgo.style.visibility='hidden';
		}
		this._button_twitter.ggUpdatePosition=function (useTransition) {
		}
		this._social_rectangle_1.appendChild(this._button_twitter);
		this._buttons_social.appendChild(this._social_rectangle_1);
		this._zt_logo.appendChild(this._buttons_social);
		this._header.appendChild(this._zt_logo);
		this._contact_info=document.createElement('div');
		this._contact_info__text=document.createElement('div');
		this._contact_info.className='ggskin ggskin_textdiv';
		this._contact_info.ggTextDiv=this._contact_info__text;
		this._contact_info.ggId="Contact_info";
		this._contact_info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._contact_info.ggVisible=true;
		this._contact_info.className='ggskin ggskin_text ';
		this._contact_info.ggType='text';
		hs ='';
		hs+='height : 132px;';
		hs+='left : 120px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 732px;';
		hs+='pointer-events:auto;';
		this._contact_info.setAttribute('style',hs);
		this._contact_info.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 732px;';
		hs+='height: 132px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(25,25,25,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._contact_info__text.setAttribute('style',hs);
		this._contact_info__text.innerHTML="<font color=\"white\" size=\"3\"><br\/>WING S. ACEVEDO<br\/>Senior Property Consultant<br\/>call : <a href=\"tel:+63025096592\" style=\"color:white\">509.6592<\/a> <br\/>sms: <a href=\"sms:+63909273935803\" style=\"color:white\">0927.393.5803<\/a><br\/>  \u2709 : <a href=\"mailto:sales@360dmcihomes.com?Subject=Inquiry\" style=\"color:white\" target=\"_top\"> sales@360DMCIHomes.com<\/a><\/font>";
		this._contact_info.appendChild(this._contact_info__text);
		me._contact_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._contact_info.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._contact_info.ggUpdatePosition=function (useTransition) {
		}
		this._header.appendChild(this._contact_info);
		this._thumbnail_menu=document.createElement('div');
		this._thumbnail_menu__content=document.createElement('div');
		this._thumbnail_menu.ggContent=this._thumbnail_menu__content;
		this._thumbnail_menu.appendChild(this._thumbnail_menu__content);
		hs ='';
		hs+='background : rgba(195,195,195,0);';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		this._thumbnail_menu__content.setAttribute('style',hs);
		this._thumbnail_menu.ggId="Thumbnail Menu";
		this._thumbnail_menu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail_menu.ggVisible=true;
		this._thumbnail_menu.className='ggskin ggskin_scrollarea ';
		this._thumbnail_menu.ggType='scrollarea';
		hs ='';
		hs+='-webkit-overflow-scrolling : touch;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(195,195,195,0);';
		hs+='border : 1px solid rgba(209,209,209,0);';
		hs+='height : 109px;';
		hs+='left : 404px;';
		hs+='overflow-x : auto;';
		hs+='overflow-y : hidden;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 57.2%;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 5px;';
		this._thumbnail_menu.setAttribute('style',hs);
		this._thumbnail_menu.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._thumbnail_menu.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._thumbnail_menu.ggUpdatePosition=function (useTransition) {
			{
				this.ggContent.style.left = '0px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = '0px';
				this.ggContent.style.marginTop = '0px';
			}
		}
		this._thumbnail_cloner=document.createElement('div');
		this._thumbnail_cloner.ggNumRepeat = 1;
		this._thumbnail_cloner.ggWidth = 118;
		this._thumbnail_cloner.ggHeight = 87;
		this._thumbnail_cloner.ggUpdating = false;
		this._thumbnail_cloner.ggFilter = [];
		this._thumbnail_cloner.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			if (typeof filter=='object') {
				me._thumbnail_cloner.ggFilter = filter;
			} else {
				filter = me._thumbnail_cloner.ggFilter;
			};
			if (me._thumbnail_cloner.hasChildNodes() == true) {
				while (me._thumbnail_cloner.firstChild) {
					me._thumbnail_cloner.removeChild(me._thumbnail_cloner.firstChild);
				}
			}
			var tourNodes = me.player.getNodeIds();
			var row = 0;
			var column = 0;
			var numRows = me._thumbnail_cloner.ggNumRepeat;
			if (numRows < 1) numRows = 1;
			for (i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = false;
				if (filter.length > 0) {
					var nodeData = me.player.getNodeUserdata(nodeId);
					for (j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) != -1) passed = true;
					}
				}
				else passed = true;
				if (passed) {
					me._thumbnail_cloner__node = document.createElement('div');
					me._thumbnail_cloner.appendChild(me._thumbnail_cloner__node);
					me._thumbnail_cloner__node.setAttribute('style','position: absolute; top: ' + (row * me._thumbnail_cloner.ggHeight) + 'px; left:' + (column * me._thumbnail_cloner.ggWidth) + 'px; height: ' + me._thumbnail_cloner.ggHeight + 'px; width: ' + me._thumbnail_cloner.ggWidth + 'px; overflow: hidden;');
					var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me);
					me._thumbnail_cloner__node.appendChild(inst.__div);
					me._thumbnail_cloner__node.ggObj=inst;
					me.updateSize(inst.__div);
					row++;
					if (row >= numRows) {
						row = 0;
						column++;
					}
				}
			}
			me._thumbnail_cloner.ggClonerCallChildFunctions('ggUpdateConditionTimer');
			me._thumbnail_cloner.ggUpdating = false;
		}
		this._thumbnail_cloner.ggClonerCallChildFunctions = function(functionname){
			var stack = [];
			var i;
			for(i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				stack.push(me._thumbnail_cloner.childNodes[i]);
			}
			while (stack.length > 0) {
				var e = stack.pop();
				if (typeof e[functionname] == 'function')
					e[functionname]();
				if(e.hasChildNodes()) {
					for(i=0; i<e.childNodes.length; i++) {
						stack.push(e.childNodes[i]);
					}
				}
			}
		}
		this._thumbnail_cloner.ggTags = [];
		this._thumbnail_cloner.ggId="Thumbnail Cloner";
		this._thumbnail_cloner.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail_cloner.ggVisible=true;
		this._thumbnail_cloner.className='ggskin ggskin_cloner ';
		this._thumbnail_cloner.ggType='cloner';
		hs ='';
		hs+='height : 86px;';
		hs+='left : 4px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 117px;';
		hs+='pointer-events:none;';
		this._thumbnail_cloner.setAttribute('style',hs);
		this._thumbnail_cloner.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._thumbnail_cloner.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=me.player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							if ((p.scrollLeft + p.clientWidth) < (childOffX + child.clientWidth)) {
								p.scrollLeft = (childOffX + child.clientWidth) - p.clientWidth;
							}
							if ((p.scrollTop + p.clientHeight) < (childOffY + child.clientHeight)) {
								p.scrollTop = (childOffY + child.clientHeight) - p.clientHeight;
							}
							if (childOffX < p.scrollLeft) {
								p.scrollLeft = childOffX;
							}
							if (childOffY < p.scrollTop) {
								p.scrollTop = childOffY;
							}
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		this._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
			var w=me.player.getViewerSize().width;
			var h=me.player.getViewerSize().height
			if ((!me._thumbnail_cloner.ggLastSize) || (me._thumbnail_cloner.ggLastSize.w!=w) || (me._thumbnail_cloner.ggLastSize.h!=h)) {
				me._thumbnail_cloner.ggLastSize={ w:w, h:h };
				me._thumbnail_cloner.ggUpdate();
			}
		}
		this._thumbnail_cloner.ggNodeChange=function () {
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
		}
		this._thumbnail_menu__content.appendChild(this._thumbnail_cloner);
		this._header.appendChild(this._thumbnail_menu);
		this._dmcihomeslogo=document.createElement('div');
		this._dmcihomeslogo__img=document.createElement('img');
		this._dmcihomeslogo__img.className='ggskin ggskin_image';
		this._dmcihomeslogo__img.setAttribute('src',basePath + 'images/dmcihomeslogo.png');
		this._dmcihomeslogo__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._dmcihomeslogo__img.className='ggskin ggskin_image';
		this._dmcihomeslogo__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._dmcihomeslogo__img);
		this._dmcihomeslogo.appendChild(this._dmcihomeslogo__img);
		this._dmcihomeslogo.ggId="DMCIHomeslogo";
		this._dmcihomeslogo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dmcihomeslogo.ggVisible=true;
		this._dmcihomeslogo.className='ggskin ggskin_image ';
		this._dmcihomeslogo.ggType='image';
		hs ='';
		hs+='height : 110px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		this._dmcihomeslogo.setAttribute('style',hs);
		this._dmcihomeslogo.style[domTransform + 'Origin']='50% 50%';
		me._dmcihomeslogo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dmcihomeslogo.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dmcihomeslogo.ggUpdatePosition=function (useTransition) {
		}
		this._header.appendChild(this._dmcihomeslogo);
		this._container4hdr.appendChild(this._header);
		this.divSkin.appendChild(this._container4hdr);
		this.__1brmarker_1__normal=new SkinElement__1brdot_Class(this,this.__1brmarker_1);
		this.__1brmarker_1__normal.style.visibility='inherit';
		this.__1brmarker_1__normal.style.left='-3px';
		this.__1brmarker_1__normal.style.top='-3px';
		this.__1brmarker_1.ggMarkerNormal=this.__1brmarker_1__normal;
		this.__1brmarker_1__active=new SkinElement__1brdot_Class(this,this.__1brmarker_1);
		this.__1brmarker_1__active.style.visibility='hidden';
		this.__1brmarker_1__active.style.left='-3px';
		this.__1brmarker_1__active.style.top='-3px';
		this.__1brmarker_1.ggMarkerActive=this.__1brmarker_1__active;
		if (this.__1brmarker_1.firstChild) {
			this.__1brmarker_1.insertBefore(this.__1brmarker_1__active,this.__1brmarker_1.firstChild);
		} else {
			this.__1brmarker_1.appendChild(this.__1brmarker_1__active);
		}
		if (this.__1brmarker_1.firstChild) {
			this.__1brmarker_1.insertBefore(this.__1brmarker_1__normal,this.__1brmarker_1.firstChild);
		} else {
			this.__1brmarker_1.appendChild(this.__1brmarker_1__normal);
		}
		this.__1brmarker_2__normal=new SkinElement__1brdot_Class(this,this.__1brmarker_2);
		this.__1brmarker_2__normal.style.visibility='inherit';
		this.__1brmarker_2__normal.style.left='-3px';
		this.__1brmarker_2__normal.style.top='-3px';
		this.__1brmarker_2.ggMarkerNormal=this.__1brmarker_2__normal;
		this.__1brmarker_2__active=new SkinElement__1brdot_Class(this,this.__1brmarker_2);
		this.__1brmarker_2__active.style.visibility='hidden';
		this.__1brmarker_2__active.style.left='-3px';
		this.__1brmarker_2__active.style.top='-3px';
		this.__1brmarker_2.ggMarkerActive=this.__1brmarker_2__active;
		if (this.__1brmarker_2.firstChild) {
			this.__1brmarker_2.insertBefore(this.__1brmarker_2__active,this.__1brmarker_2.firstChild);
		} else {
			this.__1brmarker_2.appendChild(this.__1brmarker_2__active);
		}
		if (this.__1brmarker_2.firstChild) {
			this.__1brmarker_2.insertBefore(this.__1brmarker_2__normal,this.__1brmarker_2.firstChild);
		} else {
			this.__1brmarker_2.appendChild(this.__1brmarker_2__normal);
		}
		this.__1brmarker_3__normal=new SkinElement__1brdot_Class(this,this.__1brmarker_3);
		this.__1brmarker_3__normal.style.visibility='inherit';
		this.__1brmarker_3__normal.style.left='-3px';
		this.__1brmarker_3__normal.style.top='-3px';
		this.__1brmarker_3.ggMarkerNormal=this.__1brmarker_3__normal;
		this.__1brmarker_3__active=new SkinElement__1brdot_Class(this,this.__1brmarker_3);
		this.__1brmarker_3__active.style.visibility='hidden';
		this.__1brmarker_3__active.style.left='-3px';
		this.__1brmarker_3__active.style.top='-3px';
		this.__1brmarker_3.ggMarkerActive=this.__1brmarker_3__active;
		if (this.__1brmarker_3.firstChild) {
			this.__1brmarker_3.insertBefore(this.__1brmarker_3__active,this.__1brmarker_3.firstChild);
		} else {
			this.__1brmarker_3.appendChild(this.__1brmarker_3__active);
		}
		if (this.__1brmarker_3.firstChild) {
			this.__1brmarker_3.insertBefore(this.__1brmarker_3__normal,this.__1brmarker_3.firstChild);
		} else {
			this.__1brmarker_3.appendChild(this.__1brmarker_3__normal);
		}
		this.__1brmarker_4__normal=new SkinElement__1brdot_Class(this,this.__1brmarker_4);
		this.__1brmarker_4__normal.style.visibility='inherit';
		this.__1brmarker_4__normal.style.left='-3px';
		this.__1brmarker_4__normal.style.top='-3px';
		this.__1brmarker_4.ggMarkerNormal=this.__1brmarker_4__normal;
		this.__1brmarker_4__active=new SkinElement__1brdot_Class(this,this.__1brmarker_4);
		this.__1brmarker_4__active.style.visibility='hidden';
		this.__1brmarker_4__active.style.left='-3px';
		this.__1brmarker_4__active.style.top='-3px';
		this.__1brmarker_4.ggMarkerActive=this.__1brmarker_4__active;
		if (this.__1brmarker_4.firstChild) {
			this.__1brmarker_4.insertBefore(this.__1brmarker_4__active,this.__1brmarker_4.firstChild);
		} else {
			this.__1brmarker_4.appendChild(this.__1brmarker_4__active);
		}
		if (this.__1brmarker_4.firstChild) {
			this.__1brmarker_4.insertBefore(this.__1brmarker_4__normal,this.__1brmarker_4.firstChild);
		} else {
			this.__1brmarker_4.appendChild(this.__1brmarker_4__normal);
		}
		this.__2brmarker_1__normal=new SkinElement__2brdot_Class(this,this.__2brmarker_1);
		this.__2brmarker_1__normal.style.visibility='inherit';
		this.__2brmarker_1__normal.style.left='-3px';
		this.__2brmarker_1__normal.style.top='-3px';
		this.__2brmarker_1.ggMarkerNormal=this.__2brmarker_1__normal;
		this.__2brmarker_1__active=new SkinElement__2brdot_Class(this,this.__2brmarker_1);
		this.__2brmarker_1__active.style.visibility='hidden';
		this.__2brmarker_1__active.style.left='-3px';
		this.__2brmarker_1__active.style.top='-3px';
		this.__2brmarker_1.ggMarkerActive=this.__2brmarker_1__active;
		if (this.__2brmarker_1.firstChild) {
			this.__2brmarker_1.insertBefore(this.__2brmarker_1__active,this.__2brmarker_1.firstChild);
		} else {
			this.__2brmarker_1.appendChild(this.__2brmarker_1__active);
		}
		if (this.__2brmarker_1.firstChild) {
			this.__2brmarker_1.insertBefore(this.__2brmarker_1__normal,this.__2brmarker_1.firstChild);
		} else {
			this.__2brmarker_1.appendChild(this.__2brmarker_1__normal);
		}
		this.__2brmarkerr_2__normal=new SkinElement__2brdot_Class(this,this.__2brmarkerr_2);
		this.__2brmarkerr_2__normal.style.visibility='inherit';
		this.__2brmarkerr_2__normal.style.left='-3px';
		this.__2brmarkerr_2__normal.style.top='-3px';
		this.__2brmarkerr_2.ggMarkerNormal=this.__2brmarkerr_2__normal;
		this.__2brmarkerr_2__active=new SkinElement__2brdot_Class(this,this.__2brmarkerr_2);
		this.__2brmarkerr_2__active.style.visibility='hidden';
		this.__2brmarkerr_2__active.style.left='-3px';
		this.__2brmarkerr_2__active.style.top='-3px';
		this.__2brmarkerr_2.ggMarkerActive=this.__2brmarkerr_2__active;
		if (this.__2brmarkerr_2.firstChild) {
			this.__2brmarkerr_2.insertBefore(this.__2brmarkerr_2__active,this.__2brmarkerr_2.firstChild);
		} else {
			this.__2brmarkerr_2.appendChild(this.__2brmarkerr_2__active);
		}
		if (this.__2brmarkerr_2.firstChild) {
			this.__2brmarkerr_2.insertBefore(this.__2brmarkerr_2__normal,this.__2brmarkerr_2.firstChild);
		} else {
			this.__2brmarkerr_2.appendChild(this.__2brmarkerr_2__normal);
		}
		this.__2brmarker_3__normal=new SkinElement__2brdot_Class(this,this.__2brmarker_3);
		this.__2brmarker_3__normal.style.visibility='inherit';
		this.__2brmarker_3__normal.style.left='-3px';
		this.__2brmarker_3__normal.style.top='-3px';
		this.__2brmarker_3.ggMarkerNormal=this.__2brmarker_3__normal;
		this.__2brmarker_3__active=new SkinElement__2brdot_Class(this,this.__2brmarker_3);
		this.__2brmarker_3__active.style.visibility='hidden';
		this.__2brmarker_3__active.style.left='-3px';
		this.__2brmarker_3__active.style.top='-3px';
		this.__2brmarker_3.ggMarkerActive=this.__2brmarker_3__active;
		if (this.__2brmarker_3.firstChild) {
			this.__2brmarker_3.insertBefore(this.__2brmarker_3__active,this.__2brmarker_3.firstChild);
		} else {
			this.__2brmarker_3.appendChild(this.__2brmarker_3__active);
		}
		if (this.__2brmarker_3.firstChild) {
			this.__2brmarker_3.insertBefore(this.__2brmarker_3__normal,this.__2brmarker_3.firstChild);
		} else {
			this.__2brmarker_3.appendChild(this.__2brmarker_3__normal);
		}
		this.__2brmarker_4__normal=new SkinElement__2brdot_Class(this,this.__2brmarker_4);
		this.__2brmarker_4__normal.style.visibility='inherit';
		this.__2brmarker_4__normal.style.left='-3px';
		this.__2brmarker_4__normal.style.top='-3px';
		this.__2brmarker_4.ggMarkerNormal=this.__2brmarker_4__normal;
		this.__2brmarker_4__active=new SkinElement__2brdot_Class(this,this.__2brmarker_4);
		this.__2brmarker_4__active.style.visibility='hidden';
		this.__2brmarker_4__active.style.left='-3px';
		this.__2brmarker_4__active.style.top='-3px';
		this.__2brmarker_4.ggMarkerActive=this.__2brmarker_4__active;
		if (this.__2brmarker_4.firstChild) {
			this.__2brmarker_4.insertBefore(this.__2brmarker_4__active,this.__2brmarker_4.firstChild);
		} else {
			this.__2brmarker_4.appendChild(this.__2brmarker_4__active);
		}
		if (this.__2brmarker_4.firstChild) {
			this.__2brmarker_4.insertBefore(this.__2brmarker_4__normal,this.__2brmarker_4.firstChild);
		} else {
			this.__2brmarker_4.appendChild(this.__2brmarker_4__normal);
		}
		this.__2brmarker_5__normal=new SkinElement__2brdot_Class(this,this.__2brmarker_5);
		this.__2brmarker_5__normal.style.visibility='inherit';
		this.__2brmarker_5__normal.style.left='-3px';
		this.__2brmarker_5__normal.style.top='-3px';
		this.__2brmarker_5.ggMarkerNormal=this.__2brmarker_5__normal;
		this.__2brmarker_5__active=new SkinElement__2brdot_Class(this,this.__2brmarker_5);
		this.__2brmarker_5__active.style.visibility='hidden';
		this.__2brmarker_5__active.style.left='-3px';
		this.__2brmarker_5__active.style.top='-3px';
		this.__2brmarker_5.ggMarkerActive=this.__2brmarker_5__active;
		if (this.__2brmarker_5.firstChild) {
			this.__2brmarker_5.insertBefore(this.__2brmarker_5__active,this.__2brmarker_5.firstChild);
		} else {
			this.__2brmarker_5.appendChild(this.__2brmarker_5__active);
		}
		if (this.__2brmarker_5.firstChild) {
			this.__2brmarker_5.insertBefore(this.__2brmarker_5__normal,this.__2brmarker_5.firstChild);
		} else {
			this.__2brmarker_5.appendChild(this.__2brmarker_5__normal);
		}
		this.__3brmarker_1__normal=new SkinElement__3brdot_Class(this,this.__3brmarker_1);
		this.__3brmarker_1__normal.style.visibility='inherit';
		this.__3brmarker_1__normal.style.left='-11px';
		this.__3brmarker_1__normal.style.top='0px';
		this.__3brmarker_1.ggMarkerNormal=this.__3brmarker_1__normal;
		this.__3brmarker_1__active=new SkinElement__3brdot_Class(this,this.__3brmarker_1);
		this.__3brmarker_1__active.style.visibility='hidden';
		this.__3brmarker_1__active.style.left='-11px';
		this.__3brmarker_1__active.style.top='0px';
		this.__3brmarker_1.ggMarkerActive=this.__3brmarker_1__active;
		if (this.__3brmarker_1.firstChild) {
			this.__3brmarker_1.insertBefore(this.__3brmarker_1__active,this.__3brmarker_1.firstChild);
		} else {
			this.__3brmarker_1.appendChild(this.__3brmarker_1__active);
		}
		if (this.__3brmarker_1.firstChild) {
			this.__3brmarker_1.insertBefore(this.__3brmarker_1__normal,this.__3brmarker_1.firstChild);
		} else {
			this.__3brmarker_1.appendChild(this.__3brmarker_1__normal);
		}
		this.__3brmarker_2__normal=new SkinElement__3brdot_Class(this,this.__3brmarker_2);
		this.__3brmarker_2__normal.style.visibility='inherit';
		this.__3brmarker_2__normal.style.left='-11px';
		this.__3brmarker_2__normal.style.top='0px';
		this.__3brmarker_2.ggMarkerNormal=this.__3brmarker_2__normal;
		this.__3brmarker_2__active=new SkinElement__3brdot_Class(this,this.__3brmarker_2);
		this.__3brmarker_2__active.style.visibility='hidden';
		this.__3brmarker_2__active.style.left='-11px';
		this.__3brmarker_2__active.style.top='0px';
		this.__3brmarker_2.ggMarkerActive=this.__3brmarker_2__active;
		if (this.__3brmarker_2.firstChild) {
			this.__3brmarker_2.insertBefore(this.__3brmarker_2__active,this.__3brmarker_2.firstChild);
		} else {
			this.__3brmarker_2.appendChild(this.__3brmarker_2__active);
		}
		if (this.__3brmarker_2.firstChild) {
			this.__3brmarker_2.insertBefore(this.__3brmarker_2__normal,this.__3brmarker_2.firstChild);
		} else {
			this.__3brmarker_2.appendChild(this.__3brmarker_2__normal);
		}
		this.__3brmarker_3__normal=new SkinElement__3brdot_Class(this,this.__3brmarker_3);
		this.__3brmarker_3__normal.style.visibility='inherit';
		this.__3brmarker_3__normal.style.left='-11px';
		this.__3brmarker_3__normal.style.top='0px';
		this.__3brmarker_3.ggMarkerNormal=this.__3brmarker_3__normal;
		this.__3brmarker_3__active=new SkinElement__3brdot_Class(this,this.__3brmarker_3);
		this.__3brmarker_3__active.style.visibility='hidden';
		this.__3brmarker_3__active.style.left='-11px';
		this.__3brmarker_3__active.style.top='0px';
		this.__3brmarker_3.ggMarkerActive=this.__3brmarker_3__active;
		if (this.__3brmarker_3.firstChild) {
			this.__3brmarker_3.insertBefore(this.__3brmarker_3__active,this.__3brmarker_3.firstChild);
		} else {
			this.__3brmarker_3.appendChild(this.__3brmarker_3__active);
		}
		if (this.__3brmarker_3.firstChild) {
			this.__3brmarker_3.insertBefore(this.__3brmarker_3__normal,this.__3brmarker_3.firstChild);
		} else {
			this.__3brmarker_3.appendChild(this.__3brmarker_3__normal);
		}
		this.__3brmarker_4__normal=new SkinElement__3brdot_Class(this,this.__3brmarker_4);
		this.__3brmarker_4__normal.style.visibility='inherit';
		this.__3brmarker_4__normal.style.left='-11px';
		this.__3brmarker_4__normal.style.top='0px';
		this.__3brmarker_4.ggMarkerNormal=this.__3brmarker_4__normal;
		this.__3brmarker_4__active=new SkinElement__3brdot_Class(this,this.__3brmarker_4);
		this.__3brmarker_4__active.style.visibility='hidden';
		this.__3brmarker_4__active.style.left='-11px';
		this.__3brmarker_4__active.style.top='0px';
		this.__3brmarker_4.ggMarkerActive=this.__3brmarker_4__active;
		if (this.__3brmarker_4.firstChild) {
			this.__3brmarker_4.insertBefore(this.__3brmarker_4__active,this.__3brmarker_4.firstChild);
		} else {
			this.__3brmarker_4.appendChild(this.__3brmarker_4__active);
		}
		if (this.__3brmarker_4.firstChild) {
			this.__3brmarker_4.insertBefore(this.__3brmarker_4__normal,this.__3brmarker_4.firstChild);
		} else {
			this.__3brmarker_4.appendChild(this.__3brmarker_4__normal);
		}
		this.__3brmarker_5__normal=new SkinElement__3brdot_Class(this,this.__3brmarker_5);
		this.__3brmarker_5__normal.style.visibility='inherit';
		this.__3brmarker_5__normal.style.left='-11px';
		this.__3brmarker_5__normal.style.top='0px';
		this.__3brmarker_5.ggMarkerNormal=this.__3brmarker_5__normal;
		this.__3brmarker_5__active=new SkinElement__3brdot_Class(this,this.__3brmarker_5);
		this.__3brmarker_5__active.style.visibility='hidden';
		this.__3brmarker_5__active.style.left='-11px';
		this.__3brmarker_5__active.style.top='0px';
		this.__3brmarker_5.ggMarkerActive=this.__3brmarker_5__active;
		if (this.__3brmarker_5.firstChild) {
			this.__3brmarker_5.insertBefore(this.__3brmarker_5__active,this.__3brmarker_5.firstChild);
		} else {
			this.__3brmarker_5.appendChild(this.__3brmarker_5__active);
		}
		if (this.__3brmarker_5.firstChild) {
			this.__3brmarker_5.insertBefore(this.__3brmarker_5__normal,this.__3brmarker_5.firstChild);
		} else {
			this.__3brmarker_5.appendChild(this.__3brmarker_5__normal);
		}
		this._map_1.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		this._map_1.ggRadar.update=function() {
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			var radar=me._map_1.ggRadar;
			var map=me._map_1.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = me.player.getFov();
			var pan = me.player.getPanNorth();
			var zoom = map.getZoom();
			var gps=me.player.getNodeLatLng();
			var filterpassed = true;
			var currentId = me.player.getCurrentNode();
			if (me._map_1.ggFilteredIds.length > 0 && me._map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat()) && (gps[1]==radar.activeNodeLatLng.lng())) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
				var rLat = 4.0*r2d / Math.pow(2,zoom);     // beam size
				var rLng = rLat/Math.cos(radar.activeNodeLatLng.lat() * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=5;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng();
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat();
					radar_path.push(new google.maps.LatLng(y, x));
				}
				if (radar.poly) {
					radar.poly.setMap(null);
					radar.poly = null;
				}
				radar.poly = new google.maps.Polygon({
					paths: radar_path,
					strokeColor: '#ff0000',
					strokeOpacity: 0.8,
					strokeWeight: 1,
					fillColor: '#ff0000',
					fillOpacity: 0.35
				});
				radar.poly.setMap(map);
			} else {
				if (radar) {
					activeNodeLatLng = new google.maps.LatLng(0,0);
					if (radar.poly) {
						radar.poly.setMap(null);
						radar.poly = null;
					}
				}
			}
		}
		this._map_1.ggMarkerArray=[];
		this._map_1.ggGoogleMarkerArray=[];
		this._map_1.ggInitMap=function() {
		me._map_1.ggMapNotLoaded = false;
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			var gps=me.player.getNodeLatLng();
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = new google.maps.LatLng(0,0);
			}
			var mapOptions = {
				zoom: 14,
				center: activeNodeLatLng,
				mapTypeId: google.maps.MapTypeId.HYBRID,
				streetViewControl: false
			};
			me._map_1.ggMap = new google.maps.Map(me._map_1, mapOptions);
		}
		this._map_1.ggClearMap=function() {
		me._map_1.ggMap = null;
		me._map_1.ggClearMapMarkers();
		me._map_1.ggMapNotLoaded = true;
		}
		this._map_1.ggClearMapMarkers=function() {
			for (i = 0; i < me._map_1.ggGoogleMarkerArray.length; i ++) {
				me._map_1.ggGoogleMarkerArray[i].setMap(null);
			}
			me._map_1.ggGoogleMarkerArray=[];
		}
		this._map_1.ggInitMapMarkers=function(updateMapBounds) {
			me._map_1.ggClearMapMarkers();
			var ids=me.player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = me.player.getNodeUserdata(nodeId);
					for (j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			var bounds=new google.maps.LatLngBounds();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps=me.player.getNodeLatLng(id);
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = new google.maps.LatLng(gps[0], gps[1]);
					marker = new google.maps.Marker({position: markerLocation,map: me._map_1.ggMap});
					marker.setTitle(me.player.getNodeTitle(id));
					marker.setAnimation(google.maps.Animation.DROP);
					marker.setClickable(true);
					marker.ggId=id;
					google.maps.event.addListener(marker, 'click', function() {
						me.player.openNext('{' + this.ggId + '}');
						activeNodeLatLng=me.position;
						lastFov=-1; // force radar update
					});
					me._map_1.ggGoogleMarkerArray.push(marker);
					bounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && !bounds.isEmpty() && updateMapBounds) {
				me._map_1.ggMap.fitBounds(bounds);
			}
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
		}
		me._video_1.ggVideoSource = 'DmBItZlVkvY';
		me._video_1.ggVideoNotLoaded = true;
		this.preloadImages();
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
			me._map_1.ggInitMap();
			me._map_1.ggInitMapMarkers(true);
			me._thumbnail_cloner.ggUpdate(me._thumbnail_cloner.ggTags);
		}
		this.divSkin.ggLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
			me._loading.ggVisible=true;
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
		me._floor_plan_bg.ggNodeChange();
		me._floorpln_hydbttn.ggNodeChange();
		me.__1br_flrplan.ggNodeChange();
		me.__1brmarker_1.ggNodeChange();
		me.__1brmarker_2.ggNodeChange();
		me.__1brmarker_3.ggNodeChange();
		me.__1brmarker_4.ggNodeChange();
		me.__2br_flrplan.ggNodeChange();
		me.__2brmarker_1.ggNodeChange();
		me.__2brmarkerr_2.ggNodeChange();
		me.__2brmarker_3.ggNodeChange();
		me.__2brmarker_4.ggNodeChange();
		me.__2brmarker_5.ggNodeChange();
		me.__3br_flrplan.ggNodeChange();
		me.__3brmarker_1.ggNodeChange();
		me.__3brmarker_2.ggNodeChange();
		me.__3brmarker_3.ggNodeChange();
		me.__3brmarker_4.ggNodeChange();
		me.__3brmarker_5.ggNodeChange();
		me._maprect.ggNodeChange();
		me._map_1.ggNodeChange();
		me._kahondaga.ggNodeChange();
		me._kahonmobile.ggNodeChange();
		me._videoplayer.ggNodeChange();
		me._mapbttnhyd.ggNodeChange();
		me._mapbttnshw.ggNodeChange();
		me._floorpln_hyd.ggNodeChange();
		me._floorpln_show.ggNodeChange();
		me._thumbnail_cloner.ggNodeChange();
		me.ggHotspotCallChildFunctions('ggNodeChange');
		var newMarker=[];
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		me._containerflrplan.ggUpdateConditionTimer();
		if (me.elementMouseOver['floorpln_hydbttn']) {
		}
		me.__1brtt_flrpln_bttn_hide.ggUpdateConditionTimer();
		if (me.elementMouseOver['floorpln_shwbtn']) {
		}
		me.__1brtt_flrplndet_show.ggUpdateConditionTimer();
		var hs='';
		if (me.__1brimage_radar1.ggParameter) {
			hs+=parameterToTransform(me.__1brimage_radar1.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 0)) + 'deg) ';
		hs+='scale(' + (Math.tan(me.player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ',1.0) ';
		hs+='scale(1.0,' + (Math.cos(1*me.player.getTilt()*Math.PI/180.0 + 0)) + ') ';
		me.__1brimage_radar1.style[domTransform]=hs;
		var hs='';
		if (me.__2brimage_radar.ggParameter) {
			hs+=parameterToTransform(me.__2brimage_radar.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 0)) + 'deg) ';
		hs+='scale(' + (Math.tan(me.player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ',1.0) ';
		hs+='scale(1.0,' + (Math.cos(1*me.player.getTilt()*Math.PI/180.0 + 0)) + ') ';
		me.__2brimage_radar.style[domTransform]=hs;
		var hs='';
		if (me.__3brimage_radar.ggParameter) {
			hs+=parameterToTransform(me.__3brimage_radar.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 0)) + 'deg) ';
		hs+='scale(' + (Math.tan(me.player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ',1.0) ';
		hs+='scale(1.0,' + (Math.cos(1*me.player.getTilt()*Math.PI/180.0 + 0)) + ') ';
		me.__3brimage_radar.style[domTransform]=hs;
		me._container4vrinfo.ggUpdateConditionTimer();
		me._rectangle_1.ggUpdateConditionTimer();
		me._container4mm.ggUpdateConditionTimer();
		me._map_1.ggUpdateConditionTimer();
		me._container4mdle.ggUpdateConditionTimer();
		me._hekpkahon.ggUpdateConditionTimer();
		me._pointtint.ggUpdateConditionTimer();
		me._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		me._containermm_btns.ggUpdateConditionTimer();
		me._kahonessentials.ggUpdateConditionTimer();
		if (me.elementMouseOver['floorpln_hyd']) {
		}
		me.__1brtt_flrpln_hide.ggUpdateConditionTimer();
		if (me.elementMouseOver['floorpln_show']) {
		}
		me.__1brtt_flrpln_show.ggUpdateConditionTimer();
		me._tn_location_box.ggUpdateText();
		me._tn_location_box.ggUpdateConditionTimer();
		me._container4hdr.ggUpdateConditionTimer();
		me._thumbnail_cloner.ggClonerCallChildFunctions('ggUpdateConditionTimer');
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
		
		if (hotspot.skinid=='ht_nodeLeft_TnB') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_nodeLeft_TnB";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 645px;';
			hs+='position : absolute;';
			hs+='top : -39px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
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
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._chevron_left0=document.createElement('div');
			this._chevron_left0__img=document.createElement('img');
			this._chevron_left0__img.className='ggskin ggskin_button';
			this._chevron_left0__img.setAttribute('src',basePath + 'images/chevron_left0.png');
			this._chevron_left0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._chevron_left0__img.className='ggskin ggskin_button';
			this._chevron_left0__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._chevron_left0__img);
			this._chevron_left0.appendChild(this._chevron_left0__img);
			this._chevron_left0.ggId="Chevron_Left";
			this._chevron_left0.ggParameter={ rx:0,ry:0,a:-75,sx:0.5,sy:0.9 };
			this._chevron_left0.ggVisible=true;
			this._chevron_left0.className='ggskin ggskin_button ';
			this._chevron_left0.ggType='button';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 75px;';
			hs+='left : -2137.38%;';
			hs+='position : absolute;';
			hs+='top : -658.04%;';
			hs+='visibility : inherit;';
			hs+='width : 220px;';
			hs+='pointer-events:auto;';
			this._chevron_left0.setAttribute('style',hs);
			this._chevron_left0.style[domTransform + 'Origin']='50% 50%';
			this._chevron_left0.style[domTransform]=parameterToTransform(this._chevron_left0.ggParameter);
			me._chevron_left0.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._chevron_left0.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._chevron_left0.onmouseover=function (e) {
				me._chevron_left0__img.src=basePath + 'images/chevron_left0__o.png';
			}
			this._chevron_left0.onmouseout=function (e) {
				me._chevron_left0__img.src=basePath + 'images/chevron_left0.png';
			}
			this._chevron_left0.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._chevron_left0);
			this._tnbhnode_preview=document.createElement('div');
			this._tnbhnode_preview.ggId="TnBhnode_preview";
			this._tnbhnode_preview.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tnbhnode_preview.ggVisible=false;
			this._tnbhnode_preview.className='ggskin ggskin_container ';
			this._tnbhnode_preview.ggType='container';
			hs ='';
			hs+='height : 103px;';
			hs+='left : -68px;';
			hs+='position : absolute;';
			hs+='top : -161px;';
			hs+='visibility : hidden;';
			hs+='width : 153px;';
			hs+='pointer-events:none;';
			this._tnbhnode_preview.setAttribute('style',hs);
			this._tnbhnode_preview.style[domTransform + 'Origin']='50% 50%';
			me._tnbhnode_preview.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tnbhnode_preview.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._tnbhnode_preview.ggCurrentLogicStateVisible = -1;
			this._tnbhnode_preview.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._tnbhnode_preview.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._tnbhnode_preview.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._tnbhnode_preview.style[domTransition]='';
					if (me._tnbhnode_preview.ggCurrentLogicStateVisible == 0) {
						me._tnbhnode_preview.style.visibility=(Number(me._tnbhnode_preview.style.opacity)>0||!me._tnbhnode_preview.style.opacity)?'inherit':'hidden';
						me._tnbhnode_preview.ggVisible=true;
					}
					else {
						me._tnbhnode_preview.style.visibility="hidden";
						me._tnbhnode_preview.ggVisible=false;
					}
				}
			}
			this._tnbhnode_preview.ggUpdatePosition=function (useTransition) {
			}
			this._tnbpreview_pictureframe_=document.createElement('div');
			this._tnbpreview_pictureframe_.ggId="TnBpreview_pictureframe ";
			this._tnbpreview_pictureframe_.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tnbpreview_pictureframe_.ggVisible=true;
			this._tnbpreview_pictureframe_.className='ggskin ggskin_rectangle ';
			this._tnbpreview_pictureframe_.ggType='rectangle';
			hs ='';
			hs+=cssPrefix + 'border-radius : 5px;';
			hs+='border-radius : 5px;';
			hs+='background : rgba(255,255,255,0.784314);';
			hs+='border : 1px solid #000000;';
			hs+='cursor : default;';
			hs+='height : 99px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 0px;';
			hs+='visibility : inherit;';
			hs+='width : 149px;';
			hs+='pointer-events:auto;';
			this._tnbpreview_pictureframe_.setAttribute('style',hs);
			this._tnbpreview_pictureframe_.style[domTransform + 'Origin']='50% 50%';
			me._tnbpreview_pictureframe_.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tnbpreview_pictureframe_.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tnbpreview_pictureframe_.ggUpdatePosition=function (useTransition) {
			}
			this._tnbhnode_preview.appendChild(this._tnbpreview_pictureframe_);
			this._tnb=document.createElement('div');
			this._tnb__img=document.createElement('img');
			this._tnb__img.className='ggskin ggskin_image';
			this._tnb__img.setAttribute('src',basePath + 'images/tnb.png');
			this._tnb__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._tnb__img.className='ggskin ggskin_image';
			this._tnb__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._tnb__img);
			this._tnb.appendChild(this._tnb__img);
			this._tnb.ggId="TnB";
			this._tnb.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tnb.ggVisible=true;
			this._tnb.className='ggskin ggskin_image ';
			this._tnb.ggType='image';
			hs ='';
			hs+='height : 90px;';
			hs+='left : 5px;';
			hs+='position : absolute;';
			hs+='top : 4px;';
			hs+='visibility : inherit;';
			hs+='width : 141px;';
			hs+='pointer-events:auto;';
			this._tnb.setAttribute('style',hs);
			this._tnb.style[domTransform + 'Origin']='50% 50%';
			me._tnb.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tnb.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tnb.ggUpdatePosition=function (useTransition) {
			}
			this._tnbhnode_preview.appendChild(this._tnb);
			this._tnbtltip_bg=document.createElement('div');
			this._tnbtltip_bg.ggId="TnBtltip_bg";
			this._tnbtltip_bg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tnbtltip_bg.ggVisible=true;
			this._tnbtltip_bg.className='ggskin ggskin_rectangle ';
			this._tnbtltip_bg.ggType='rectangle';
			hs ='';
			hs+='background : rgba(0,0,0,0.392157);';
			hs+='border : 0px solid #000000;';
			hs+='cursor : default;';
			hs+='height : 20px;';
			hs+='left : 5px;';
			hs+='position : absolute;';
			hs+='top : 77px;';
			hs+='visibility : inherit;';
			hs+='width : 140px;';
			hs+='pointer-events:auto;';
			this._tnbtltip_bg.setAttribute('style',hs);
			this._tnbtltip_bg.style[domTransform + 'Origin']='50% 50%';
			me._tnbtltip_bg.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tnbtltip_bg.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tnbtltip_bg.ggUpdatePosition=function (useTransition) {
			}
			this._tnbhnode_preview.appendChild(this._tnbtltip_bg);
			this._tnb_drop_shadow=document.createElement('div');
			this._tnb_drop_shadow__text=document.createElement('div');
			this._tnb_drop_shadow.className='ggskin ggskin_textdiv';
			this._tnb_drop_shadow.ggTextDiv=this._tnb_drop_shadow__text;
			this._tnb_drop_shadow.ggId="TnB_drop_shadow";
			this._tnb_drop_shadow.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tnb_drop_shadow.ggVisible=true;
			this._tnb_drop_shadow.className='ggskin ggskin_text ';
			this._tnb_drop_shadow.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : 1px;';
			hs+='position : absolute;';
			hs+='top : 80px;';
			hs+='visibility : inherit;';
			hs+='width : 148px;';
			hs+='pointer-events:auto;';
			this._tnb_drop_shadow.setAttribute('style',hs);
			this._tnb_drop_shadow.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 148px;';
			hs+='height: 20px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tnb_drop_shadow__text.setAttribute('style',hs);
			this._tnb_drop_shadow__text.innerHTML=me.hotspot.title;
			this._tnb_drop_shadow.appendChild(this._tnb_drop_shadow__text);
			me._tnb_drop_shadow.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tnb_drop_shadow.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tnb_drop_shadow.ggUpdatePosition=function (useTransition) {
			}
			this._tnbhnode_preview.appendChild(this._tnb_drop_shadow);
			this._tnbt=document.createElement('div');
			this._tnbt__text=document.createElement('div');
			this._tnbt.className='ggskin ggskin_textdiv';
			this._tnbt.ggTextDiv=this._tnbt__text;
			this._tnbt.ggId="TnBT";
			this._tnbt.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tnbt.ggVisible=true;
			this._tnbt.className='ggskin ggskin_text ';
			this._tnbt.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 79px;';
			hs+='visibility : inherit;';
			hs+='width : 148px;';
			hs+='pointer-events:auto;';
			this._tnbt.setAttribute('style',hs);
			this._tnbt.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 148px;';
			hs+='height: 20px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tnbt__text.setAttribute('style',hs);
			this._tnbt__text.innerHTML=me.hotspot.title;
			this._tnbt.appendChild(this._tnbt__text);
			me._tnbt.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tnbt.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tnbt.ggUpdatePosition=function (useTransition) {
			}
			this._tnbhnode_preview.appendChild(this._tnbt);
			this._tnbchkmrk_tick=document.createElement('div');
			this._tnbchkmrk_tick__img=document.createElement('img');
			this._tnbchkmrk_tick__img.className='ggskin ggskin_svg';
			this._tnbchkmrk_tick__img.setAttribute('src',basePath + 'images/tnbchkmrk_tick.svg');
			this._tnbchkmrk_tick__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._tnbchkmrk_tick__img['ondragstart']=function() { return false; };
			this._tnbchkmrk_tick.appendChild(this._tnbchkmrk_tick__img);
			this._tnbchkmrk_tick.ggId="TnBchkMrk_tick";
			this._tnbchkmrk_tick.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tnbchkmrk_tick.ggVisible=false;
			this._tnbchkmrk_tick.className='ggskin ggskin_svg ';
			this._tnbchkmrk_tick.ggType='svg';
			hs ='';
			hs+='height : 36px;';
			hs+='left : 110px;';
			hs+='position : absolute;';
			hs+='top : 3px;';
			hs+='visibility : hidden;';
			hs+='width : 36px;';
			hs+='pointer-events:auto;';
			this._tnbchkmrk_tick.setAttribute('style',hs);
			this._tnbchkmrk_tick.style[domTransform + 'Origin']='50% 50%';
			me._tnbchkmrk_tick.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tnbchkmrk_tick.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._tnbchkmrk_tick.ggCurrentLogicStateVisible = -1;
			this._tnbchkmrk_tick.ggUpdateConditionNodeChange=function () {
				var newLogicStateVisible;
				if (
					(me.player.nodeVisited(me._tnbchkmrk_tick.ggElementNodeId()) == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._tnbchkmrk_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._tnbchkmrk_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._tnbchkmrk_tick.style[domTransition]='';
					if (me._tnbchkmrk_tick.ggCurrentLogicStateVisible == 0) {
						me._tnbchkmrk_tick.style.visibility=(Number(me._tnbchkmrk_tick.style.opacity)>0||!me._tnbchkmrk_tick.style.opacity)?'inherit':'hidden';
						me._tnbchkmrk_tick.ggVisible=true;
					}
					else {
						me._tnbchkmrk_tick.style.visibility="hidden";
						me._tnbchkmrk_tick.ggVisible=false;
					}
				}
			}
			this._tnbchkmrk_tick.ggUpdatePosition=function (useTransition) {
			}
			this._tnbchkmrk_tick.ggNodeChange=function () {
				me._tnbchkmrk_tick.ggUpdateConditionNodeChange();
			}
			this._tnbhnode_preview.appendChild(this._tnbchkmrk_tick);
			this.__div.appendChild(this._tnbhnode_preview);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._tnbhnode_preview.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_node') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_node";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 444px;';
			hs+='position : absolute;';
			hs+='top : -70px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._hsimage_node=document.createElement('div');
			this._hsimage_node__img=document.createElement('img');
			this._hsimage_node__img.className='ggskin ggskin_svg';
			this._hsimage_node__img.setAttribute('src',basePath + 'images/hsimage_node.svg');
			this._hsimage_node__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._hsimage_node__img['ondragstart']=function() { return false; };
			this._hsimage_node.appendChild(this._hsimage_node__img);
			this._hsimage_node__imgo=document.createElement('img');
			this._hsimage_node__imgo.className='ggskin ggskin_svg';
			this._hsimage_node__imgo.setAttribute('src',basePath + 'images/hsimage_node__o.svg');
			this._hsimage_node__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._hsimage_node__imgo['ondragstart']=function() { return false; };
			this._hsimage_node.appendChild(this._hsimage_node__imgo);
			this._hsimage_node.ggId="hsimage_node";
			this._hsimage_node.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hsimage_node.ggVisible=true;
			this._hsimage_node.className='ggskin ggskin_svg ';
			this._hsimage_node.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 32px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			hs+='pointer-events:auto;';
			this._hsimage_node.setAttribute('style',hs);
			this._hsimage_node.style[domTransform + 'Origin']='50% 50%';
			me._hsimage_node.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hsimage_node.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._hsimage_node.onmouseover=function (e) {
				me._hsimage_node__img.style.visibility='hidden';
				me._hsimage_node__imgo.style.visibility='inherit';
			}
			this._hsimage_node.onmouseout=function (e) {
				me._hsimage_node__img.style.visibility='inherit';
				me._hsimage_node__imgo.style.visibility='hidden';
			}
			this._hsimage_node.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._hsimage_node);
			this._hotspot_preview=document.createElement('div');
			this._hotspot_preview.ggId="hotspot_preview";
			this._hotspot_preview.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hotspot_preview.ggVisible=false;
			this._hotspot_preview.className='ggskin ggskin_container ';
			this._hotspot_preview.ggType='container';
			hs ='';
			hs+='height : 103px;';
			hs+='left : -73px;';
			hs+='position : absolute;';
			hs+='top : -128px;';
			hs+='visibility : hidden;';
			hs+='width : 153px;';
			hs+='pointer-events:none;';
			this._hotspot_preview.setAttribute('style',hs);
			this._hotspot_preview.style[domTransform + 'Origin']='50% 50%';
			me._hotspot_preview.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hotspot_preview.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hotspot_preview.ggCurrentLogicStateVisible = -1;
			this._hotspot_preview.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hotspot_preview.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hotspot_preview.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._hotspot_preview.style[domTransition]='';
					if (me._hotspot_preview.ggCurrentLogicStateVisible == 0) {
						me._hotspot_preview.style.visibility=(Number(me._hotspot_preview.style.opacity)>0||!me._hotspot_preview.style.opacity)?'inherit':'hidden';
						me._hotspot_preview.ggVisible=true;
					}
					else {
						me._hotspot_preview.style.visibility="hidden";
						me._hotspot_preview.ggVisible=false;
					}
				}
			}
			this._hotspot_preview.ggUpdatePosition=function (useTransition) {
			}
			this._preview_picture_frame_=document.createElement('div');
			this._preview_picture_frame_.ggId="preview_picture_frame ";
			this._preview_picture_frame_.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._preview_picture_frame_.ggVisible=true;
			this._preview_picture_frame_.className='ggskin ggskin_rectangle ';
			this._preview_picture_frame_.ggType='rectangle';
			hs ='';
			hs+=cssPrefix + 'border-radius : 5px;';
			hs+='border-radius : 5px;';
			hs+='background : rgba(255,255,255,0.784314);';
			hs+='border : 1px solid #000000;';
			hs+='cursor : default;';
			hs+='height : 99px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 0px;';
			hs+='visibility : inherit;';
			hs+='width : 149px;';
			hs+='pointer-events:auto;';
			this._preview_picture_frame_.setAttribute('style',hs);
			this._preview_picture_frame_.style[domTransform + 'Origin']='50% 50%';
			me._preview_picture_frame_.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._preview_picture_frame_.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._preview_picture_frame_.ggUpdatePosition=function (useTransition) {
			}
			this._hotspot_preview.appendChild(this._preview_picture_frame_);
			this._preview_nodeimage_1br=document.createElement('div');
			this._preview_nodeimage_1br__img=document.createElement('img');
			this._preview_nodeimage_1br__img.className='ggskin ggskin_nodeimage';
			this._preview_nodeimage_1br__img.setAttribute('src',basePath + "images/preview_nodeimage_1br_" + nodeId + ".png");
			this._preview_nodeimage_1br.ggNodeId=nodeId;
			this._preview_nodeimage_1br__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._preview_nodeimage_1br__img.className='ggskin ggskin_nodeimage';
			this._preview_nodeimage_1br__img['ondragstart']=function() { return false; };
			this._preview_nodeimage_1br.appendChild(this._preview_nodeimage_1br__img);
			this._preview_nodeimage_1br.ggId="Preview NodeImage_1BR";
			this._preview_nodeimage_1br.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._preview_nodeimage_1br.ggVisible=true;
			this._preview_nodeimage_1br.className='ggskin ggskin_nodeimage ';
			this._preview_nodeimage_1br.ggType='nodeimage';
			hs ='';
			hs+='height : 90px;';
			hs+='left : 5px;';
			hs+='position : absolute;';
			hs+='top : 5px;';
			hs+='visibility : inherit;';
			hs+='width : 140px;';
			hs+='pointer-events:auto;';
			this._preview_nodeimage_1br.setAttribute('style',hs);
			this._preview_nodeimage_1br.style[domTransform + 'Origin']='50% 50%';
			me._preview_nodeimage_1br.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me._preview_nodeimage_1br.ggElementNodeId=function() {
				return this.ggNodeId;
			}
			this._preview_nodeimage_1br.ggUpdatePosition=function (useTransition) {
			}
			this._hotspot_preview.appendChild(this._preview_nodeimage_1br);
			this._tooltip_bg=document.createElement('div');
			this._tooltip_bg.ggId="tooltip_bg";
			this._tooltip_bg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tooltip_bg.ggVisible=true;
			this._tooltip_bg.className='ggskin ggskin_rectangle ';
			this._tooltip_bg.ggType='rectangle';
			hs ='';
			hs+='background : rgba(0,0,0,0.392157);';
			hs+='border : 0px solid #000000;';
			hs+='cursor : default;';
			hs+='height : 20px;';
			hs+='left : 5px;';
			hs+='position : absolute;';
			hs+='top : 77px;';
			hs+='visibility : inherit;';
			hs+='width : 140px;';
			hs+='pointer-events:auto;';
			this._tooltip_bg.setAttribute('style',hs);
			this._tooltip_bg.style[domTransform + 'Origin']='50% 50%';
			me._tooltip_bg.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tooltip_bg.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tooltip_bg.ggUpdatePosition=function (useTransition) {
			}
			this._hotspot_preview.appendChild(this._tooltip_bg);
			this._tooltip_drop_shadow=document.createElement('div');
			this._tooltip_drop_shadow__text=document.createElement('div');
			this._tooltip_drop_shadow.className='ggskin ggskin_textdiv';
			this._tooltip_drop_shadow.ggTextDiv=this._tooltip_drop_shadow__text;
			this._tooltip_drop_shadow.ggId="tooltip_drop_shadow";
			this._tooltip_drop_shadow.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tooltip_drop_shadow.ggVisible=true;
			this._tooltip_drop_shadow.className='ggskin ggskin_text ';
			this._tooltip_drop_shadow.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : 1px;';
			hs+='position : absolute;';
			hs+='top : 80px;';
			hs+='visibility : inherit;';
			hs+='width : 148px;';
			hs+='pointer-events:auto;';
			this._tooltip_drop_shadow.setAttribute('style',hs);
			this._tooltip_drop_shadow.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 148px;';
			hs+='height: 20px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tooltip_drop_shadow__text.setAttribute('style',hs);
			this._tooltip_drop_shadow__text.innerHTML=me.hotspot.title;
			this._tooltip_drop_shadow.appendChild(this._tooltip_drop_shadow__text);
			me._tooltip_drop_shadow.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tooltip_drop_shadow.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tooltip_drop_shadow.ggUpdatePosition=function (useTransition) {
			}
			this._hotspot_preview.appendChild(this._tooltip_drop_shadow);
			this._tooltip=document.createElement('div');
			this._tooltip__text=document.createElement('div');
			this._tooltip.className='ggskin ggskin_textdiv';
			this._tooltip.ggTextDiv=this._tooltip__text;
			this._tooltip.ggId="tooltip";
			this._tooltip.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tooltip.ggVisible=true;
			this._tooltip.className='ggskin ggskin_text ';
			this._tooltip.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 79px;';
			hs+='visibility : inherit;';
			hs+='width : 148px;';
			hs+='pointer-events:auto;';
			this._tooltip.setAttribute('style',hs);
			this._tooltip.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 148px;';
			hs+='height: 20px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tooltip__text.setAttribute('style',hs);
			this._tooltip__text.innerHTML=me.hotspot.title;
			this._tooltip.appendChild(this._tooltip__text);
			me._tooltip.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tooltip.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tooltip.ggUpdatePosition=function (useTransition) {
			}
			this._hotspot_preview.appendChild(this._tooltip);
			this._checkmark_tick=document.createElement('div');
			this._checkmark_tick__img=document.createElement('img');
			this._checkmark_tick__img.className='ggskin ggskin_svg';
			this._checkmark_tick__img.setAttribute('src',basePath + 'images/checkmark_tick.svg');
			this._checkmark_tick__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._checkmark_tick__img['ondragstart']=function() { return false; };
			this._checkmark_tick.appendChild(this._checkmark_tick__img);
			this._checkmark_tick.ggId="checkmark_tick";
			this._checkmark_tick.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._checkmark_tick.ggVisible=false;
			this._checkmark_tick.className='ggskin ggskin_svg ';
			this._checkmark_tick.ggType='svg';
			hs ='';
			hs+='height : 36px;';
			hs+='left : 110px;';
			hs+='position : absolute;';
			hs+='top : 3px;';
			hs+='visibility : hidden;';
			hs+='width : 36px;';
			hs+='pointer-events:auto;';
			this._checkmark_tick.setAttribute('style',hs);
			this._checkmark_tick.style[domTransform + 'Origin']='50% 50%';
			me._checkmark_tick.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._checkmark_tick.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._checkmark_tick.ggCurrentLogicStateVisible = -1;
			this._checkmark_tick.ggUpdateConditionNodeChange=function () {
				var newLogicStateVisible;
				if (
					(me.player.nodeVisited(me._checkmark_tick.ggElementNodeId()) == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._checkmark_tick.style[domTransition]='';
					if (me._checkmark_tick.ggCurrentLogicStateVisible == 0) {
						me._checkmark_tick.style.visibility=(Number(me._checkmark_tick.style.opacity)>0||!me._checkmark_tick.style.opacity)?'inherit':'hidden';
						me._checkmark_tick.ggVisible=true;
					}
					else {
						me._checkmark_tick.style.visibility="hidden";
						me._checkmark_tick.ggVisible=false;
					}
				}
			}
			this._checkmark_tick.ggUpdatePosition=function (useTransition) {
			}
			this._checkmark_tick.ggNodeChange=function () {
				me._checkmark_tick.ggUpdateConditionNodeChange();
			}
			this._hotspot_preview.appendChild(this._checkmark_tick);
			this.__div.appendChild(this._hotspot_preview);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hotspot_preview.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_nodeLeft') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_nodeLeft";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 239px;';
			hs+='position : absolute;';
			hs+='top : -39px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
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
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._chevron_left=document.createElement('div');
			this._chevron_left__img=document.createElement('img');
			this._chevron_left__img.className='ggskin ggskin_button';
			this._chevron_left__img.setAttribute('src',basePath + 'images/chevron_left.png');
			this._chevron_left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._chevron_left__img.className='ggskin ggskin_button';
			this._chevron_left__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._chevron_left__img);
			this._chevron_left.appendChild(this._chevron_left__img);
			this._chevron_left.ggId="Chevron_Left";
			this._chevron_left.ggParameter={ rx:0,ry:0,a:-75,sx:0.5,sy:0.9 };
			this._chevron_left.ggVisible=true;
			this._chevron_left.className='ggskin ggskin_button ';
			this._chevron_left.ggType='button';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 75px;';
			hs+='left : -2217.16%;';
			hs+='position : absolute;';
			hs+='top : -658.07%;';
			hs+='visibility : inherit;';
			hs+='width : 220px;';
			hs+='pointer-events:auto;';
			this._chevron_left.setAttribute('style',hs);
			this._chevron_left.style[domTransform + 'Origin']='50% 50%';
			this._chevron_left.style[domTransform]=parameterToTransform(this._chevron_left.ggParameter);
			me._chevron_left.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._chevron_left.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._chevron_left.onmouseover=function (e) {
				me._chevron_left__img.src=basePath + 'images/chevron_left__o.png';
			}
			this._chevron_left.onmouseout=function (e) {
				me._chevron_left__img.src=basePath + 'images/chevron_left.png';
			}
			this._chevron_left.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._chevron_left);
			this._hnode_preview=document.createElement('div');
			this._hnode_preview.ggId="hnode_preview";
			this._hnode_preview.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hnode_preview.ggVisible=false;
			this._hnode_preview.className='ggskin ggskin_container ';
			this._hnode_preview.ggType='container';
			hs ='';
			hs+='height : 103px;';
			hs+='left : -72px;';
			hs+='position : absolute;';
			hs+='top : -163px;';
			hs+='visibility : hidden;';
			hs+='width : 153px;';
			hs+='pointer-events:none;';
			this._hnode_preview.setAttribute('style',hs);
			this._hnode_preview.style[domTransform + 'Origin']='50% 50%';
			me._hnode_preview.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hnode_preview.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hnode_preview.ggCurrentLogicStateVisible = -1;
			this._hnode_preview.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hnode_preview.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hnode_preview.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._hnode_preview.style[domTransition]='';
					if (me._hnode_preview.ggCurrentLogicStateVisible == 0) {
						me._hnode_preview.style.visibility=(Number(me._hnode_preview.style.opacity)>0||!me._hnode_preview.style.opacity)?'inherit':'hidden';
						me._hnode_preview.ggVisible=true;
					}
					else {
						me._hnode_preview.style.visibility="hidden";
						me._hnode_preview.ggVisible=false;
					}
				}
			}
			this._hnode_preview.ggUpdatePosition=function (useTransition) {
			}
			this._preview_pictureframe_0=document.createElement('div');
			this._preview_pictureframe_0.ggId="preview_pictureframe ";
			this._preview_pictureframe_0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._preview_pictureframe_0.ggVisible=true;
			this._preview_pictureframe_0.className='ggskin ggskin_rectangle ';
			this._preview_pictureframe_0.ggType='rectangle';
			hs ='';
			hs+=cssPrefix + 'border-radius : 5px;';
			hs+='border-radius : 5px;';
			hs+='background : rgba(255,255,255,0.784314);';
			hs+='border : 1px solid #000000;';
			hs+='cursor : default;';
			hs+='height : 99px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 0px;';
			hs+='visibility : inherit;';
			hs+='width : 149px;';
			hs+='pointer-events:auto;';
			this._preview_pictureframe_0.setAttribute('style',hs);
			this._preview_pictureframe_0.style[domTransform + 'Origin']='50% 50%';
			me._preview_pictureframe_0.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._preview_pictureframe_0.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._preview_pictureframe_0.ggUpdatePosition=function (useTransition) {
			}
			this._hnode_preview.appendChild(this._preview_pictureframe_0);
			this._previewnodeimage=document.createElement('div');
			this._previewnodeimage__img=document.createElement('img');
			this._previewnodeimage__img.className='ggskin ggskin_nodeimage';
			this._previewnodeimage__img.setAttribute('src',basePath + "images/preview_nodeimage_1br_" + nodeId + ".png");
			this._previewnodeimage.ggNodeId=nodeId;
			this._previewnodeimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._previewnodeimage__img.className='ggskin ggskin_nodeimage';
			this._previewnodeimage__img['ondragstart']=function() { return false; };
			this._previewnodeimage.appendChild(this._previewnodeimage__img);
			this._previewnodeimage.ggId="PreviewNodeImage";
			this._previewnodeimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._previewnodeimage.ggVisible=true;
			this._previewnodeimage.className='ggskin ggskin_nodeimage ';
			this._previewnodeimage.ggType='nodeimage';
			hs ='';
			hs+='height : 90px;';
			hs+='left : 4px;';
			hs+='position : absolute;';
			hs+='top : 5px;';
			hs+='visibility : inherit;';
			hs+='width : 140px;';
			hs+='pointer-events:auto;';
			this._previewnodeimage.setAttribute('style',hs);
			this._previewnodeimage.style[domTransform + 'Origin']='50% 50%';
			me._previewnodeimage.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me._previewnodeimage.ggElementNodeId=function() {
				return this.ggNodeId;
			}
			this._previewnodeimage.ggUpdatePosition=function (useTransition) {
			}
			this._hnode_preview.appendChild(this._previewnodeimage);
			this._tltip_bg0=document.createElement('div');
			this._tltip_bg0.ggId="tltip_bg";
			this._tltip_bg0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tltip_bg0.ggVisible=true;
			this._tltip_bg0.className='ggskin ggskin_rectangle ';
			this._tltip_bg0.ggType='rectangle';
			hs ='';
			hs+='background : rgba(0,0,0,0.392157);';
			hs+='border : 0px solid #000000;';
			hs+='cursor : default;';
			hs+='height : 20px;';
			hs+='left : 5px;';
			hs+='position : absolute;';
			hs+='top : 77px;';
			hs+='visibility : inherit;';
			hs+='width : 140px;';
			hs+='pointer-events:auto;';
			this._tltip_bg0.setAttribute('style',hs);
			this._tltip_bg0.style[domTransform + 'Origin']='50% 50%';
			me._tltip_bg0.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tltip_bg0.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tltip_bg0.ggUpdatePosition=function (useTransition) {
			}
			this._hnode_preview.appendChild(this._tltip_bg0);
			this._tltip_drop_shadow0=document.createElement('div');
			this._tltip_drop_shadow0__text=document.createElement('div');
			this._tltip_drop_shadow0.className='ggskin ggskin_textdiv';
			this._tltip_drop_shadow0.ggTextDiv=this._tltip_drop_shadow0__text;
			this._tltip_drop_shadow0.ggId="tltip_drop_shadow";
			this._tltip_drop_shadow0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tltip_drop_shadow0.ggVisible=true;
			this._tltip_drop_shadow0.className='ggskin ggskin_text ';
			this._tltip_drop_shadow0.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : 1px;';
			hs+='position : absolute;';
			hs+='top : 80px;';
			hs+='visibility : inherit;';
			hs+='width : 148px;';
			hs+='pointer-events:auto;';
			this._tltip_drop_shadow0.setAttribute('style',hs);
			this._tltip_drop_shadow0.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 148px;';
			hs+='height: 20px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tltip_drop_shadow0__text.setAttribute('style',hs);
			this._tltip_drop_shadow0__text.innerHTML=me.hotspot.title;
			this._tltip_drop_shadow0.appendChild(this._tltip_drop_shadow0__text);
			me._tltip_drop_shadow0.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tltip_drop_shadow0.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tltip_drop_shadow0.ggUpdatePosition=function (useTransition) {
			}
			this._hnode_preview.appendChild(this._tltip_drop_shadow0);
			this._tltip0=document.createElement('div');
			this._tltip0__text=document.createElement('div');
			this._tltip0.className='ggskin ggskin_textdiv';
			this._tltip0.ggTextDiv=this._tltip0__text;
			this._tltip0.ggId="tltip";
			this._tltip0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tltip0.ggVisible=true;
			this._tltip0.className='ggskin ggskin_text ';
			this._tltip0.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 79px;';
			hs+='visibility : inherit;';
			hs+='width : 148px;';
			hs+='pointer-events:auto;';
			this._tltip0.setAttribute('style',hs);
			this._tltip0.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 148px;';
			hs+='height: 20px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tltip0__text.setAttribute('style',hs);
			this._tltip0__text.innerHTML=me.hotspot.title;
			this._tltip0.appendChild(this._tltip0__text);
			me._tltip0.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tltip0.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tltip0.ggUpdatePosition=function (useTransition) {
			}
			this._hnode_preview.appendChild(this._tltip0);
			this._chkmrk_tick0=document.createElement('div');
			this._chkmrk_tick0__img=document.createElement('img');
			this._chkmrk_tick0__img.className='ggskin ggskin_svg';
			this._chkmrk_tick0__img.setAttribute('src',basePath + 'images/chkmrk_tick0.svg');
			this._chkmrk_tick0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._chkmrk_tick0__img['ondragstart']=function() { return false; };
			this._chkmrk_tick0.appendChild(this._chkmrk_tick0__img);
			this._chkmrk_tick0.ggId="chkMrk_tick";
			this._chkmrk_tick0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._chkmrk_tick0.ggVisible=false;
			this._chkmrk_tick0.className='ggskin ggskin_svg ';
			this._chkmrk_tick0.ggType='svg';
			hs ='';
			hs+='height : 36px;';
			hs+='left : 110px;';
			hs+='position : absolute;';
			hs+='top : 3px;';
			hs+='visibility : hidden;';
			hs+='width : 36px;';
			hs+='pointer-events:auto;';
			this._chkmrk_tick0.setAttribute('style',hs);
			this._chkmrk_tick0.style[domTransform + 'Origin']='50% 50%';
			me._chkmrk_tick0.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._chkmrk_tick0.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._chkmrk_tick0.ggCurrentLogicStateVisible = -1;
			this._chkmrk_tick0.ggUpdateConditionNodeChange=function () {
				var newLogicStateVisible;
				if (
					(me.player.nodeVisited(me._chkmrk_tick0.ggElementNodeId()) == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._chkmrk_tick0.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._chkmrk_tick0.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._chkmrk_tick0.style[domTransition]='';
					if (me._chkmrk_tick0.ggCurrentLogicStateVisible == 0) {
						me._chkmrk_tick0.style.visibility=(Number(me._chkmrk_tick0.style.opacity)>0||!me._chkmrk_tick0.style.opacity)?'inherit':'hidden';
						me._chkmrk_tick0.ggVisible=true;
					}
					else {
						me._chkmrk_tick0.style.visibility="hidden";
						me._chkmrk_tick0.ggVisible=false;
					}
				}
			}
			this._chkmrk_tick0.ggUpdatePosition=function (useTransition) {
			}
			this._chkmrk_tick0.ggNodeChange=function () {
				me._chkmrk_tick0.ggUpdateConditionNodeChange();
			}
			this._hnode_preview.appendChild(this._chkmrk_tick0);
			this.__div.appendChild(this._hnode_preview);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hnode_preview.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_url_Atrium') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_url_Atrium";
			this.__div.ggLeft=-525;
			this.__div.ggTop=-453;
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : -525px;';
			hs+='position : absolute;';
			hs+='top : -453px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
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
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
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
			this._ht_url_image=document.createElement('div');
			this._ht_url_image__img=document.createElement('img');
			this._ht_url_image__img.className='ggskin ggskin_svg';
			this._ht_url_image__img.setAttribute('src',basePath + 'images/ht_url_image.svg');
			this._ht_url_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_url_image__img['ondragstart']=function() { return false; };
			this._ht_url_image.appendChild(this._ht_url_image__img);
			this._ht_url_image__imgo=document.createElement('img');
			this._ht_url_image__imgo.className='ggskin ggskin_svg';
			this._ht_url_image__imgo.setAttribute('src',basePath + 'images/ht_url_image__o.svg');
			this._ht_url_image__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._ht_url_image__imgo['ondragstart']=function() { return false; };
			this._ht_url_image.appendChild(this._ht_url_image__imgo);
			this._ht_url_image.ggId="ht_url_image";
			this._ht_url_image.ggLeft=-17;
			this._ht_url_image.ggTop=-18;
			this._ht_url_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_url_image.ggVisible=true;
			this._ht_url_image.className='ggskin ggskin_svg ';
			this._ht_url_image.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 32px;';
			hs+='left : -17px;';
			hs+='position : absolute;';
			hs+='top : -18px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			hs+='pointer-events:auto;';
			this._ht_url_image.setAttribute('style',hs);
			this._ht_url_image.style[domTransform + 'Origin']='50% 50%';
			me._ht_url_image.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_url_image.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_url_image.onmouseover=function (e) {
				me._ht_url_image__img.style.visibility='hidden';
				me._ht_url_image__imgo.style.visibility='inherit';
			}
			this._ht_url_image.onmouseout=function (e) {
				me._ht_url_image__img.style.visibility='inherit';
				me._ht_url_image__imgo.style.visibility='hidden';
			}
			this._ht_url_image.ggUpdatePosition=function (useTransition) {
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
			this.__div.appendChild(this._ht_url_image);
			this._hurl_preview_atrium=document.createElement('div');
			this._hurl_preview_atrium.ggId="hUrl_preview_Atrium";
			this._hurl_preview_atrium.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hurl_preview_atrium.ggVisible=false;
			this._hurl_preview_atrium.className='ggskin ggskin_container ';
			this._hurl_preview_atrium.ggType='container';
			hs ='';
			hs+='height : 103px;';
			hs+='left : -73px;';
			hs+='position : absolute;';
			hs+='top : -117px;';
			hs+='visibility : hidden;';
			hs+='width : 153px;';
			hs+='pointer-events:none;';
			this._hurl_preview_atrium.setAttribute('style',hs);
			this._hurl_preview_atrium.style[domTransform + 'Origin']='50% 50%';
			me._hurl_preview_atrium.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hurl_preview_atrium.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hurl_preview_atrium.ggCurrentLogicStateVisible = -1;
			this._hurl_preview_atrium.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hurl_preview_atrium.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hurl_preview_atrium.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._hurl_preview_atrium.style[domTransition]='';
					if (me._hurl_preview_atrium.ggCurrentLogicStateVisible == 0) {
						me._hurl_preview_atrium.style.visibility=(Number(me._hurl_preview_atrium.style.opacity)>0||!me._hurl_preview_atrium.style.opacity)?'inherit':'hidden';
						me._hurl_preview_atrium.ggVisible=true;
					}
					else {
						me._hurl_preview_atrium.style.visibility="hidden";
						me._hurl_preview_atrium.ggVisible=false;
					}
				}
			}
			this._hurl_preview_atrium.ggUpdatePosition=function (useTransition) {
			}
			this._preview_url_pictureframe_=document.createElement('div');
			this._preview_url_pictureframe_.ggId="preview_URL_pictureframe ";
			this._preview_url_pictureframe_.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._preview_url_pictureframe_.ggVisible=true;
			this._preview_url_pictureframe_.className='ggskin ggskin_rectangle ';
			this._preview_url_pictureframe_.ggType='rectangle';
			hs ='';
			hs+=cssPrefix + 'border-radius : 5px;';
			hs+='border-radius : 5px;';
			hs+='background : rgba(255,255,255,0.784314);';
			hs+='border : 1px solid #000000;';
			hs+='cursor : default;';
			hs+='height : 99px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 0px;';
			hs+='visibility : inherit;';
			hs+='width : 149px;';
			hs+='pointer-events:auto;';
			this._preview_url_pictureframe_.setAttribute('style',hs);
			this._preview_url_pictureframe_.style[domTransform + 'Origin']='50% 50%';
			me._preview_url_pictureframe_.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._preview_url_pictureframe_.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._preview_url_pictureframe_.ggUpdatePosition=function (useTransition) {
			}
			this._hurl_preview_atrium.appendChild(this._preview_url_pictureframe_);
			this._atrium_preview=document.createElement('div');
			this._atrium_preview__img=document.createElement('img');
			this._atrium_preview__img.className='ggskin ggskin_image';
			this._atrium_preview__img.setAttribute('src',basePath + 'images/atrium_preview.png');
			this._atrium_preview__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._atrium_preview__img.className='ggskin ggskin_image';
			this._atrium_preview__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._atrium_preview__img);
			this._atrium_preview.appendChild(this._atrium_preview__img);
			this._atrium_preview.ggId="Atrium Preview";
			this._atrium_preview.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._atrium_preview.ggVisible=true;
			this._atrium_preview.className='ggskin ggskin_image ';
			this._atrium_preview.ggType='image';
			hs ='';
			hs+='height : 93px;';
			hs+='left : 4px;';
			hs+='position : absolute;';
			hs+='top : 4px;';
			hs+='visibility : inherit;';
			hs+='width : 144px;';
			hs+='pointer-events:auto;';
			this._atrium_preview.setAttribute('style',hs);
			this._atrium_preview.style[domTransform + 'Origin']='50% 50%';
			me._atrium_preview.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._atrium_preview.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._atrium_preview.ggUpdatePosition=function (useTransition) {
			}
			this._hurl_preview_atrium.appendChild(this._atrium_preview);
			this._tl_tip_bg=document.createElement('div');
			this._tl_tip_bg.ggId="tl_tip_bg";
			this._tl_tip_bg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tl_tip_bg.ggVisible=true;
			this._tl_tip_bg.className='ggskin ggskin_rectangle ';
			this._tl_tip_bg.ggType='rectangle';
			hs ='';
			hs+='background : rgba(0,0,0,0.392157);';
			hs+='border : 0px solid #000000;';
			hs+='cursor : default;';
			hs+='height : 20px;';
			hs+='left : 5px;';
			hs+='position : absolute;';
			hs+='top : 77px;';
			hs+='visibility : inherit;';
			hs+='width : 140px;';
			hs+='pointer-events:auto;';
			this._tl_tip_bg.setAttribute('style',hs);
			this._tl_tip_bg.style[domTransform + 'Origin']='50% 50%';
			me._tl_tip_bg.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tl_tip_bg.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tl_tip_bg.ggUpdatePosition=function (useTransition) {
			}
			this._hurl_preview_atrium.appendChild(this._tl_tip_bg);
			this._tl_tip_drop_shadow=document.createElement('div');
			this._tl_tip_drop_shadow__text=document.createElement('div');
			this._tl_tip_drop_shadow.className='ggskin ggskin_textdiv';
			this._tl_tip_drop_shadow.ggTextDiv=this._tl_tip_drop_shadow__text;
			this._tl_tip_drop_shadow.ggId="tl_tip_drop_shadow";
			this._tl_tip_drop_shadow.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tl_tip_drop_shadow.ggVisible=true;
			this._tl_tip_drop_shadow.className='ggskin ggskin_text ';
			this._tl_tip_drop_shadow.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : 1px;';
			hs+='position : absolute;';
			hs+='top : 80px;';
			hs+='visibility : inherit;';
			hs+='width : 148px;';
			hs+='pointer-events:auto;';
			this._tl_tip_drop_shadow.setAttribute('style',hs);
			this._tl_tip_drop_shadow.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 148px;';
			hs+='height: 20px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tl_tip_drop_shadow__text.setAttribute('style',hs);
			this._tl_tip_drop_shadow__text.innerHTML=me.hotspot.title;
			this._tl_tip_drop_shadow.appendChild(this._tl_tip_drop_shadow__text);
			me._tl_tip_drop_shadow.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tl_tip_drop_shadow.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tl_tip_drop_shadow.ggUpdatePosition=function (useTransition) {
			}
			this._hurl_preview_atrium.appendChild(this._tl_tip_drop_shadow);
			this._tl_tip=document.createElement('div');
			this._tl_tip__text=document.createElement('div');
			this._tl_tip.className='ggskin ggskin_textdiv';
			this._tl_tip.ggTextDiv=this._tl_tip__text;
			this._tl_tip.ggId="tl_tip";
			this._tl_tip.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tl_tip.ggVisible=true;
			this._tl_tip.className='ggskin ggskin_text ';
			this._tl_tip.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 79px;';
			hs+='visibility : inherit;';
			hs+='width : 148px;';
			hs+='pointer-events:auto;';
			this._tl_tip.setAttribute('style',hs);
			this._tl_tip.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 148px;';
			hs+='height: 20px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tl_tip__text.setAttribute('style',hs);
			this._tl_tip__text.innerHTML=me.hotspot.title;
			this._tl_tip.appendChild(this._tl_tip__text);
			me._tl_tip.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tl_tip.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tl_tip.ggUpdatePosition=function (useTransition) {
			}
			this._hurl_preview_atrium.appendChild(this._tl_tip);
			this._chkmrk_tck=document.createElement('div');
			this._chkmrk_tck__img=document.createElement('img');
			this._chkmrk_tck__img.className='ggskin ggskin_svg';
			this._chkmrk_tck__img.setAttribute('src',basePath + 'images/chkmrk_tck.svg');
			this._chkmrk_tck__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._chkmrk_tck__img['ondragstart']=function() { return false; };
			this._chkmrk_tck.appendChild(this._chkmrk_tck__img);
			this._chkmrk_tck.ggId="chkMrk_tck";
			this._chkmrk_tck.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._chkmrk_tck.ggVisible=false;
			this._chkmrk_tck.className='ggskin ggskin_svg ';
			this._chkmrk_tck.ggType='svg';
			hs ='';
			hs+='height : 36px;';
			hs+='left : 110px;';
			hs+='position : absolute;';
			hs+='top : 3px;';
			hs+='visibility : hidden;';
			hs+='width : 36px;';
			hs+='pointer-events:auto;';
			this._chkmrk_tck.setAttribute('style',hs);
			this._chkmrk_tck.style[domTransform + 'Origin']='50% 50%';
			me._chkmrk_tck.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._chkmrk_tck.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._chkmrk_tck.ggCurrentLogicStateVisible = -1;
			this._chkmrk_tck.ggUpdateConditionNodeChange=function () {
				var newLogicStateVisible;
				if (
					(me.player.nodeVisited(me._chkmrk_tck.ggElementNodeId()) == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._chkmrk_tck.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._chkmrk_tck.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._chkmrk_tck.style[domTransition]='';
					if (me._chkmrk_tck.ggCurrentLogicStateVisible == 0) {
						me._chkmrk_tck.style.visibility=(Number(me._chkmrk_tck.style.opacity)>0||!me._chkmrk_tck.style.opacity)?'inherit':'hidden';
						me._chkmrk_tck.ggVisible=true;
					}
					else {
						me._chkmrk_tck.style.visibility="hidden";
						me._chkmrk_tck.ggVisible=false;
					}
				}
			}
			this._chkmrk_tck.ggUpdatePosition=function (useTransition) {
			}
			this._chkmrk_tck.ggNodeChange=function () {
				me._chkmrk_tck.ggUpdateConditionNodeChange();
			}
			this._hurl_preview_atrium.appendChild(this._chkmrk_tck);
			this.__div.appendChild(this._hurl_preview_atrium);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hurl_preview_atrium.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='Hs_Ground') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hs_Ground";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : -93px;';
			hs+='position : absolute;';
			hs+='top : 16px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
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
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._ground_hotspot=document.createElement('div');
			this._ground_hotspot__img=document.createElement('img');
			this._ground_hotspot__img.className='ggskin ggskin_image';
			this._ground_hotspot__img.setAttribute('src',basePath + 'images/ground_hotspot.png');
			this._ground_hotspot__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ground_hotspot__img.className='ggskin ggskin_image';
			this._ground_hotspot__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._ground_hotspot__img);
			this._ground_hotspot.appendChild(this._ground_hotspot__img);
			this._ground_hotspot.ggId="Ground Hotspot";
			this._ground_hotspot.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ground_hotspot.ggVisible=true;
			this._ground_hotspot.className='ggskin ggskin_image ';
			this._ground_hotspot.ggType='image';
			hs ='';
			hs+='height : 15px;';
			hs+='left : -29px;';
			hs+='position : absolute;';
			hs+='top : -11px;';
			hs+='visibility : inherit;';
			hs+='width : 65px;';
			hs+='pointer-events:auto;';
			this._ground_hotspot.setAttribute('style',hs);
			this._ground_hotspot.style[domTransform + 'Origin']='50% 50%';
			me._ground_hotspot.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ground_hotspot.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ground_hotspot.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._ground_hotspot);
			this._hsgrnd_preview=document.createElement('div');
			this._hsgrnd_preview.ggId="HsGrnd_preview";
			this._hsgrnd_preview.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hsgrnd_preview.ggVisible=false;
			this._hsgrnd_preview.className='ggskin ggskin_container ';
			this._hsgrnd_preview.ggType='container';
			hs ='';
			hs+='height : 103px;';
			hs+='left : -76px;';
			hs+='position : absolute;';
			hs+='top : -201px;';
			hs+='visibility : hidden;';
			hs+='width : 153px;';
			hs+='pointer-events:none;';
			this._hsgrnd_preview.setAttribute('style',hs);
			this._hsgrnd_preview.style[domTransform + 'Origin']='50% 50%';
			me._hsgrnd_preview.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hsgrnd_preview.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hsgrnd_preview.ggCurrentLogicStateVisible = -1;
			this._hsgrnd_preview.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hsgrnd_preview.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hsgrnd_preview.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._hsgrnd_preview.style[domTransition]='';
					if (me._hsgrnd_preview.ggCurrentLogicStateVisible == 0) {
						me._hsgrnd_preview.style.visibility=(Number(me._hsgrnd_preview.style.opacity)>0||!me._hsgrnd_preview.style.opacity)?'inherit':'hidden';
						me._hsgrnd_preview.ggVisible=true;
					}
					else {
						me._hsgrnd_preview.style.visibility="hidden";
						me._hsgrnd_preview.ggVisible=false;
					}
				}
			}
			this._hsgrnd_preview.ggUpdatePosition=function (useTransition) {
			}
			this._gnrdpreview_url_pictureframe_=document.createElement('div');
			this._gnrdpreview_url_pictureframe_.ggId="Gnrdpreview_URL_pictureframe ";
			this._gnrdpreview_url_pictureframe_.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._gnrdpreview_url_pictureframe_.ggVisible=true;
			this._gnrdpreview_url_pictureframe_.className='ggskin ggskin_rectangle ';
			this._gnrdpreview_url_pictureframe_.ggType='rectangle';
			hs ='';
			hs+=cssPrefix + 'border-radius : 5px;';
			hs+='border-radius : 5px;';
			hs+='background : rgba(255,255,255,0.784314);';
			hs+='border : 1px solid #000000;';
			hs+='cursor : default;';
			hs+='height : 99px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 0px;';
			hs+='visibility : inherit;';
			hs+='width : 149px;';
			hs+='pointer-events:auto;';
			this._gnrdpreview_url_pictureframe_.setAttribute('style',hs);
			this._gnrdpreview_url_pictureframe_.style[domTransform + 'Origin']='50% 50%';
			me._gnrdpreview_url_pictureframe_.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._gnrdpreview_url_pictureframe_.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._gnrdpreview_url_pictureframe_.ggUpdatePosition=function (useTransition) {
			}
			this._hsgrnd_preview.appendChild(this._gnrdpreview_url_pictureframe_);
			this._grnd1b_url_preview=document.createElement('div');
			this._grnd1b_url_preview__img=document.createElement('img');
			this._grnd1b_url_preview__img.className='ggskin ggskin_nodeimage';
			this._grnd1b_url_preview__img.setAttribute('src',basePath + "images/preview_nodeimage_1br_" + nodeId + ".png");
			this._grnd1b_url_preview.ggNodeId=nodeId;
			this._grnd1b_url_preview__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._grnd1b_url_preview__img.className='ggskin ggskin_nodeimage';
			this._grnd1b_url_preview__img['ondragstart']=function() { return false; };
			this._grnd1b_url_preview.appendChild(this._grnd1b_url_preview__img);
			this._grnd1b_url_preview.ggId="Grnd1B URL Preview";
			this._grnd1b_url_preview.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._grnd1b_url_preview.ggVisible=true;
			this._grnd1b_url_preview.className='ggskin ggskin_nodeimage ';
			this._grnd1b_url_preview.ggType='nodeimage';
			hs ='';
			hs+='height : 90px;';
			hs+='left : 4px;';
			hs+='position : absolute;';
			hs+='top : 2px;';
			hs+='visibility : inherit;';
			hs+='width : 140px;';
			hs+='pointer-events:auto;';
			this._grnd1b_url_preview.setAttribute('style',hs);
			this._grnd1b_url_preview.style[domTransform + 'Origin']='50% 50%';
			me._grnd1b_url_preview.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me._grnd1b_url_preview.ggElementNodeId=function() {
				return this.ggNodeId;
			}
			this._grnd1b_url_preview.ggUpdatePosition=function (useTransition) {
			}
			this._hsgrnd_preview.appendChild(this._grnd1b_url_preview);
			this._grndtl_tip_bg=document.createElement('div');
			this._grndtl_tip_bg.ggId="Grndtl_tip_bg";
			this._grndtl_tip_bg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._grndtl_tip_bg.ggVisible=true;
			this._grndtl_tip_bg.className='ggskin ggskin_rectangle ';
			this._grndtl_tip_bg.ggType='rectangle';
			hs ='';
			hs+='background : rgba(0,0,0,0.392157);';
			hs+='border : 0px solid #000000;';
			hs+='cursor : default;';
			hs+='height : 20px;';
			hs+='left : 5px;';
			hs+='position : absolute;';
			hs+='top : 77px;';
			hs+='visibility : inherit;';
			hs+='width : 140px;';
			hs+='pointer-events:auto;';
			this._grndtl_tip_bg.setAttribute('style',hs);
			this._grndtl_tip_bg.style[domTransform + 'Origin']='50% 50%';
			me._grndtl_tip_bg.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._grndtl_tip_bg.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._grndtl_tip_bg.ggUpdatePosition=function (useTransition) {
			}
			this._hsgrnd_preview.appendChild(this._grndtl_tip_bg);
			this._grndtl_tip_drop_shadow=document.createElement('div');
			this._grndtl_tip_drop_shadow__text=document.createElement('div');
			this._grndtl_tip_drop_shadow.className='ggskin ggskin_textdiv';
			this._grndtl_tip_drop_shadow.ggTextDiv=this._grndtl_tip_drop_shadow__text;
			this._grndtl_tip_drop_shadow.ggId="Grndtl_tip_drop_shadow";
			this._grndtl_tip_drop_shadow.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._grndtl_tip_drop_shadow.ggVisible=true;
			this._grndtl_tip_drop_shadow.className='ggskin ggskin_text ';
			this._grndtl_tip_drop_shadow.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : 1px;';
			hs+='position : absolute;';
			hs+='top : 80px;';
			hs+='visibility : inherit;';
			hs+='width : 148px;';
			hs+='pointer-events:auto;';
			this._grndtl_tip_drop_shadow.setAttribute('style',hs);
			this._grndtl_tip_drop_shadow.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 148px;';
			hs+='height: 20px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._grndtl_tip_drop_shadow__text.setAttribute('style',hs);
			this._grndtl_tip_drop_shadow__text.innerHTML=me.hotspot.title;
			this._grndtl_tip_drop_shadow.appendChild(this._grndtl_tip_drop_shadow__text);
			me._grndtl_tip_drop_shadow.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._grndtl_tip_drop_shadow.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._grndtl_tip_drop_shadow.ggUpdatePosition=function (useTransition) {
			}
			this._hsgrnd_preview.appendChild(this._grndtl_tip_drop_shadow);
			this._grndtl_tip=document.createElement('div');
			this._grndtl_tip__text=document.createElement('div');
			this._grndtl_tip.className='ggskin ggskin_textdiv';
			this._grndtl_tip.ggTextDiv=this._grndtl_tip__text;
			this._grndtl_tip.ggId="Grndtl_tip";
			this._grndtl_tip.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._grndtl_tip.ggVisible=true;
			this._grndtl_tip.className='ggskin ggskin_text ';
			this._grndtl_tip.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 79px;';
			hs+='visibility : inherit;';
			hs+='width : 148px;';
			hs+='pointer-events:auto;';
			this._grndtl_tip.setAttribute('style',hs);
			this._grndtl_tip.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 148px;';
			hs+='height: 20px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._grndtl_tip__text.setAttribute('style',hs);
			this._grndtl_tip__text.innerHTML=me.hotspot.title;
			this._grndtl_tip.appendChild(this._grndtl_tip__text);
			me._grndtl_tip.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._grndtl_tip.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._grndtl_tip.ggUpdatePosition=function (useTransition) {
			}
			this._hsgrnd_preview.appendChild(this._grndtl_tip);
			this._grndchkmrk_tck=document.createElement('div');
			this._grndchkmrk_tck__img=document.createElement('img');
			this._grndchkmrk_tck__img.className='ggskin ggskin_svg';
			this._grndchkmrk_tck__img.setAttribute('src',basePath + 'images/grndchkmrk_tck.svg');
			this._grndchkmrk_tck__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._grndchkmrk_tck__img['ondragstart']=function() { return false; };
			this._grndchkmrk_tck.appendChild(this._grndchkmrk_tck__img);
			this._grndchkmrk_tck.ggId="GrndchkMrk_tck";
			this._grndchkmrk_tck.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._grndchkmrk_tck.ggVisible=false;
			this._grndchkmrk_tck.className='ggskin ggskin_svg ';
			this._grndchkmrk_tck.ggType='svg';
			hs ='';
			hs+='height : 36px;';
			hs+='left : 110px;';
			hs+='position : absolute;';
			hs+='top : 3px;';
			hs+='visibility : hidden;';
			hs+='width : 36px;';
			hs+='pointer-events:auto;';
			this._grndchkmrk_tck.setAttribute('style',hs);
			this._grndchkmrk_tck.style[domTransform + 'Origin']='50% 50%';
			me._grndchkmrk_tck.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._grndchkmrk_tck.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._grndchkmrk_tck.ggCurrentLogicStateVisible = -1;
			this._grndchkmrk_tck.ggUpdateConditionNodeChange=function () {
				var newLogicStateVisible;
				if (
					(me.player.nodeVisited(me._grndchkmrk_tck.ggElementNodeId()) == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._grndchkmrk_tck.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._grndchkmrk_tck.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._grndchkmrk_tck.style[domTransition]='';
					if (me._grndchkmrk_tck.ggCurrentLogicStateVisible == 0) {
						me._grndchkmrk_tck.style.visibility=(Number(me._grndchkmrk_tck.style.opacity)>0||!me._grndchkmrk_tck.style.opacity)?'inherit':'hidden';
						me._grndchkmrk_tck.ggVisible=true;
					}
					else {
						me._grndchkmrk_tck.style.visibility="hidden";
						me._grndchkmrk_tck.ggVisible=false;
					}
				}
			}
			this._grndchkmrk_tck.ggUpdatePosition=function (useTransition) {
			}
			this._grndchkmrk_tck.ggNodeChange=function () {
				me._grndchkmrk_tck.ggUpdateConditionNodeChange();
			}
			this._hsgrnd_preview.appendChild(this._grndchkmrk_tck);
			this.__div.appendChild(this._hsgrnd_preview);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hsgrnd_preview.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="ht_nodeFrnt";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : -249px;';
			hs+='position : absolute;';
			hs+='top : -19px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
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
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._chevron_frnt=document.createElement('div');
			this._chevron_frnt__img=document.createElement('img');
			this._chevron_frnt__img.className='ggskin ggskin_button';
			this._chevron_frnt__img.setAttribute('src',basePath + 'images/chevron_frnt.png');
			this._chevron_frnt__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._chevron_frnt__img.className='ggskin ggskin_button';
			this._chevron_frnt__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._chevron_frnt__img);
			this._chevron_frnt.appendChild(this._chevron_frnt__img);
			this._chevron_frnt.ggId="Chevron_Frnt";
			this._chevron_frnt.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.9 };
			this._chevron_frnt.ggVisible=true;
			this._chevron_frnt.className='ggskin ggskin_button ';
			this._chevron_frnt.ggType='button';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 75px;';
			hs+='left : -114px;';
			hs+='position : absolute;';
			hs+='top : -41px;';
			hs+='visibility : inherit;';
			hs+='width : 220px;';
			hs+='pointer-events:auto;';
			this._chevron_frnt.setAttribute('style',hs);
			this._chevron_frnt.style[domTransform + 'Origin']='50% 50%';
			this._chevron_frnt.style[domTransform]=parameterToTransform(this._chevron_frnt.ggParameter);
			me._chevron_frnt.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._chevron_frnt.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._chevron_frnt.onmouseover=function (e) {
				me._chevron_frnt__img.src=basePath + 'images/chevron_frnt__o.png';
			}
			this._chevron_frnt.onmouseout=function (e) {
				me._chevron_frnt__img.src=basePath + 'images/chevron_frnt.png';
			}
			this._chevron_frnt.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._chevron_frnt);
			this._hnode_previewfrnt=document.createElement('div');
			this._hnode_previewfrnt.ggId="hnode_previewFrnt";
			this._hnode_previewfrnt.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hnode_previewfrnt.ggVisible=false;
			this._hnode_previewfrnt.className='ggskin ggskin_container ';
			this._hnode_previewfrnt.ggType='container';
			hs ='';
			hs+='height : 103px;';
			hs+='left : -76px;';
			hs+='position : absolute;';
			hs+='top : -165px;';
			hs+='visibility : hidden;';
			hs+='width : 153px;';
			hs+='pointer-events:none;';
			this._hnode_previewfrnt.setAttribute('style',hs);
			this._hnode_previewfrnt.style[domTransform + 'Origin']='50% 50%';
			me._hnode_previewfrnt.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hnode_previewfrnt.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hnode_previewfrnt.ggCurrentLogicStateVisible = -1;
			this._hnode_previewfrnt.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hnode_previewfrnt.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hnode_previewfrnt.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._hnode_previewfrnt.style[domTransition]='';
					if (me._hnode_previewfrnt.ggCurrentLogicStateVisible == 0) {
						me._hnode_previewfrnt.style.visibility=(Number(me._hnode_previewfrnt.style.opacity)>0||!me._hnode_previewfrnt.style.opacity)?'inherit':'hidden';
						me._hnode_previewfrnt.ggVisible=true;
					}
					else {
						me._hnode_previewfrnt.style.visibility="hidden";
						me._hnode_previewfrnt.ggVisible=false;
					}
				}
			}
			this._hnode_previewfrnt.ggUpdatePosition=function (useTransition) {
			}
			this._preview_pictureframe_=document.createElement('div');
			this._preview_pictureframe_.ggId="preview_pictureframe ";
			this._preview_pictureframe_.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._preview_pictureframe_.ggVisible=true;
			this._preview_pictureframe_.className='ggskin ggskin_rectangle ';
			this._preview_pictureframe_.ggType='rectangle';
			hs ='';
			hs+=cssPrefix + 'border-radius : 5px;';
			hs+='border-radius : 5px;';
			hs+='background : rgba(255,255,255,0.784314);';
			hs+='border : 1px solid #000000;';
			hs+='cursor : default;';
			hs+='height : 99px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 0px;';
			hs+='visibility : inherit;';
			hs+='width : 149px;';
			hs+='pointer-events:auto;';
			this._preview_pictureframe_.setAttribute('style',hs);
			this._preview_pictureframe_.style[domTransform + 'Origin']='50% 50%';
			me._preview_pictureframe_.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._preview_pictureframe_.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._preview_pictureframe_.ggUpdatePosition=function (useTransition) {
			}
			this._hnode_previewfrnt.appendChild(this._preview_pictureframe_);
			this._previewnodeimagefrnt=document.createElement('div');
			this._previewnodeimagefrnt__img=document.createElement('img');
			this._previewnodeimagefrnt__img.className='ggskin ggskin_nodeimage';
			this._previewnodeimagefrnt__img.setAttribute('src',basePath + "images/preview_nodeimage_1br_" + nodeId + ".png");
			this._previewnodeimagefrnt.ggNodeId=nodeId;
			this._previewnodeimagefrnt__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._previewnodeimagefrnt__img.className='ggskin ggskin_nodeimage';
			this._previewnodeimagefrnt__img['ondragstart']=function() { return false; };
			this._previewnodeimagefrnt.appendChild(this._previewnodeimagefrnt__img);
			this._previewnodeimagefrnt.ggId="PreviewNodeImageFrnt";
			this._previewnodeimagefrnt.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._previewnodeimagefrnt.ggVisible=true;
			this._previewnodeimagefrnt.className='ggskin ggskin_nodeimage ';
			this._previewnodeimagefrnt.ggType='nodeimage';
			hs ='';
			hs+='height : 90px;';
			hs+='left : 4px;';
			hs+='position : absolute;';
			hs+='top : 5px;';
			hs+='visibility : inherit;';
			hs+='width : 140px;';
			hs+='pointer-events:auto;';
			this._previewnodeimagefrnt.setAttribute('style',hs);
			this._previewnodeimagefrnt.style[domTransform + 'Origin']='50% 50%';
			me._previewnodeimagefrnt.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me._previewnodeimagefrnt.ggElementNodeId=function() {
				return this.ggNodeId;
			}
			this._previewnodeimagefrnt.ggUpdatePosition=function (useTransition) {
			}
			this._hnode_previewfrnt.appendChild(this._previewnodeimagefrnt);
			this._tltip_bg=document.createElement('div');
			this._tltip_bg.ggId="tltip_bg";
			this._tltip_bg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tltip_bg.ggVisible=true;
			this._tltip_bg.className='ggskin ggskin_rectangle ';
			this._tltip_bg.ggType='rectangle';
			hs ='';
			hs+='background : rgba(0,0,0,0.392157);';
			hs+='border : 0px solid #000000;';
			hs+='cursor : default;';
			hs+='height : 20px;';
			hs+='left : 5px;';
			hs+='position : absolute;';
			hs+='top : 77px;';
			hs+='visibility : inherit;';
			hs+='width : 140px;';
			hs+='pointer-events:auto;';
			this._tltip_bg.setAttribute('style',hs);
			this._tltip_bg.style[domTransform + 'Origin']='50% 50%';
			me._tltip_bg.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tltip_bg.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tltip_bg.ggUpdatePosition=function (useTransition) {
			}
			this._hnode_previewfrnt.appendChild(this._tltip_bg);
			this._tltip_drop_shadow=document.createElement('div');
			this._tltip_drop_shadow__text=document.createElement('div');
			this._tltip_drop_shadow.className='ggskin ggskin_textdiv';
			this._tltip_drop_shadow.ggTextDiv=this._tltip_drop_shadow__text;
			this._tltip_drop_shadow.ggId="tltip_drop_shadow";
			this._tltip_drop_shadow.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tltip_drop_shadow.ggVisible=true;
			this._tltip_drop_shadow.className='ggskin ggskin_text ';
			this._tltip_drop_shadow.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : 1px;';
			hs+='position : absolute;';
			hs+='top : 80px;';
			hs+='visibility : inherit;';
			hs+='width : 148px;';
			hs+='pointer-events:auto;';
			this._tltip_drop_shadow.setAttribute('style',hs);
			this._tltip_drop_shadow.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 148px;';
			hs+='height: 20px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tltip_drop_shadow__text.setAttribute('style',hs);
			this._tltip_drop_shadow__text.innerHTML=me.hotspot.title;
			this._tltip_drop_shadow.appendChild(this._tltip_drop_shadow__text);
			me._tltip_drop_shadow.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tltip_drop_shadow.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tltip_drop_shadow.ggUpdatePosition=function (useTransition) {
			}
			this._hnode_previewfrnt.appendChild(this._tltip_drop_shadow);
			this._tltip=document.createElement('div');
			this._tltip__text=document.createElement('div');
			this._tltip.className='ggskin ggskin_textdiv';
			this._tltip.ggTextDiv=this._tltip__text;
			this._tltip.ggId="tltip";
			this._tltip.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tltip.ggVisible=true;
			this._tltip.className='ggskin ggskin_text ';
			this._tltip.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 79px;';
			hs+='visibility : inherit;';
			hs+='width : 148px;';
			hs+='pointer-events:auto;';
			this._tltip.setAttribute('style',hs);
			this._tltip.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 148px;';
			hs+='height: 20px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tltip__text.setAttribute('style',hs);
			this._tltip__text.innerHTML=me.hotspot.title;
			this._tltip.appendChild(this._tltip__text);
			me._tltip.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tltip.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tltip.ggUpdatePosition=function (useTransition) {
			}
			this._hnode_previewfrnt.appendChild(this._tltip);
			this._chkmrk_tick=document.createElement('div');
			this._chkmrk_tick__img=document.createElement('img');
			this._chkmrk_tick__img.className='ggskin ggskin_svg';
			this._chkmrk_tick__img.setAttribute('src',basePath + 'images/chkmrk_tick.svg');
			this._chkmrk_tick__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._chkmrk_tick__img['ondragstart']=function() { return false; };
			this._chkmrk_tick.appendChild(this._chkmrk_tick__img);
			this._chkmrk_tick.ggId="chkMrk_tick";
			this._chkmrk_tick.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._chkmrk_tick.ggVisible=false;
			this._chkmrk_tick.className='ggskin ggskin_svg ';
			this._chkmrk_tick.ggType='svg';
			hs ='';
			hs+='height : 36px;';
			hs+='left : 110px;';
			hs+='position : absolute;';
			hs+='top : 3px;';
			hs+='visibility : hidden;';
			hs+='width : 36px;';
			hs+='pointer-events:auto;';
			this._chkmrk_tick.setAttribute('style',hs);
			this._chkmrk_tick.style[domTransform + 'Origin']='50% 50%';
			me._chkmrk_tick.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._chkmrk_tick.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._chkmrk_tick.ggCurrentLogicStateVisible = -1;
			this._chkmrk_tick.ggUpdateConditionNodeChange=function () {
				var newLogicStateVisible;
				if (
					(me.player.nodeVisited(me._chkmrk_tick.ggElementNodeId()) == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._chkmrk_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._chkmrk_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._chkmrk_tick.style[domTransition]='';
					if (me._chkmrk_tick.ggCurrentLogicStateVisible == 0) {
						me._chkmrk_tick.style.visibility=(Number(me._chkmrk_tick.style.opacity)>0||!me._chkmrk_tick.style.opacity)?'inherit':'hidden';
						me._chkmrk_tick.ggVisible=true;
					}
					else {
						me._chkmrk_tick.style.visibility="hidden";
						me._chkmrk_tick.ggVisible=false;
					}
				}
			}
			this._chkmrk_tick.ggUpdatePosition=function (useTransition) {
			}
			this._chkmrk_tick.ggNodeChange=function () {
				me._chkmrk_tick.ggUpdateConditionNodeChange();
			}
			this._hnode_previewfrnt.appendChild(this._chkmrk_tick);
			this.__div.appendChild(this._hnode_previewfrnt);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hnode_previewfrnt.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	function SkinElement__3brdot_Class(skinObj,ggParent) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		this.__3brdot=document.createElement('div');
		this.__3brdot.ggId="3BRdot";
		this.__3brdot.ggLeft=58;
		this.__3brdot.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__3brdot.ggVisible=true;
		this.__3brdot.className='ggskin ggskin_rectangle ';
		this.__3brdot.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : #7d7d7d;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 11px;';
		hs+='left : 57px;';
		hs+='position : absolute;';
		hs+='top : -210px;';
		hs+='visibility : inherit;';
		hs+='width : 11px;';
		hs+='pointer-events:auto;';
		this.__3brdot.setAttribute('style',hs);
		this.__3brdot.style[domTransform + 'Origin']='50% 50%';
		me.__3brdot.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__3brdot.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this.__3brdot.ggUpdatePosition=function (useTransition) {
		}
		this.__3brdot.ggNodeChangeMain=function() {
		}
		return this.__3brdot;
	};
	function SkinElement__2brdot_Class(skinObj,ggParent) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		this.__2brdot=document.createElement('div');
		this.__2brdot.ggId="2BRdot";
		this.__2brdot.ggLeft=213;
		this.__2brdot.ggTop=-409;
		this.__2brdot.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__2brdot.ggVisible=true;
		this.__2brdot.className='ggskin ggskin_rectangle ';
		this.__2brdot.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : #ff0000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 6px;';
		hs+='left : 212px;';
		hs+='position : absolute;';
		hs+='top : -410px;';
		hs+='visibility : inherit;';
		hs+='width : 6px;';
		hs+='pointer-events:auto;';
		this.__2brdot.setAttribute('style',hs);
		this.__2brdot.style[domTransform + 'Origin']='50% 50%';
		me.__2brdot.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__2brdot.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this.__2brdot.ggUpdatePosition=function (useTransition) {
		}
		this.__2brdot.ggNodeChangeMain=function() {
		}
		return this.__2brdot;
	};
	function SkinElement__1brdot_Class(skinObj,ggParent) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		this.__1brdot=document.createElement('div');
		this.__1brdot.ggId="1BRdot";
		this.__1brdot.ggLeft=213;
		this.__1brdot.ggTop=-409;
		this.__1brdot.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__1brdot.ggVisible=true;
		this.__1brdot.className='ggskin ggskin_rectangle ';
		this.__1brdot.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : #ff0000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 6px;';
		hs+='left : 212px;';
		hs+='position : absolute;';
		hs+='top : -410px;';
		hs+='visibility : inherit;';
		hs+='width : 6px;';
		hs+='pointer-events:auto;';
		this.__1brdot.setAttribute('style',hs);
		this.__1brdot.style[domTransform + 'Origin']='50% 50%';
		me.__1brdot.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__1brdot.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this.__1brdot.ggUpdatePosition=function (useTransition) {
		}
		this.__1brdot.ggNodeChangeMain=function() {
		}
		return this.__1brdot;
	};
	function SkinCloner_thumbnail_cloner_Class(nodeId, parent) {
		var me=this;
		this.skin=parent;
		this.player=this.skin.player;
		this.findElements=this.skin.findElements;
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position: absolute; left: 0px; top: 0px; width: 118px; height: 87px; visibility: inherit;');
		this.__div.ggIsActive = function() {
			return me.player.getCurrentNode()==me.ggNodeId;
		}
		this.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		this._thumbnail_nodeimage=document.createElement('div');
		this._thumbnail_nodeimage__img=document.createElement('img');
		this._thumbnail_nodeimage__img.className='ggskin ggskin_nodeimage';
		this._thumbnail_nodeimage__img.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		this._thumbnail_nodeimage.ggNodeId=nodeId;
		this._thumbnail_nodeimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._thumbnail_nodeimage__img.className='ggskin ggskin_nodeimage';
		this._thumbnail_nodeimage__img['ondragstart']=function() { return false; };
		this._thumbnail_nodeimage.appendChild(this._thumbnail_nodeimage__img);
		this._thumbnail_nodeimage.ggId="Thumbnail NodeImage";
		this._thumbnail_nodeimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail_nodeimage.ggVisible=true;
		this._thumbnail_nodeimage.className='ggskin ggskin_nodeimage ';
		this._thumbnail_nodeimage.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 84px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 115px;';
		hs+='pointer-events:auto;';
		this._thumbnail_nodeimage.setAttribute('style',hs);
		this._thumbnail_nodeimage.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_nodeimage.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._thumbnail_nodeimage.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		this._thumbnail_nodeimage.onclick=function (e) {
			me.player.openNext("{"+me.ggNodeId+"}","");
		}
		this._thumbnail_nodeimage.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_nodeimage']=true;
		}
		this._thumbnail_nodeimage.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_nodeimage']=false;
		}
		this._thumbnail_nodeimage.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_nodeimage']=false;
		}
		this._thumbnail_nodeimage.ggUpdatePosition=function (useTransition) {
		}
		this._tn_checkmark_tick=document.createElement('div');
		this._tn_checkmark_tick__img=document.createElement('img');
		this._tn_checkmark_tick__img.className='ggskin ggskin_svg';
		this._tn_checkmark_tick__img.setAttribute('src',basePath + 'images/tn_checkmark_tick.svg');
		this._tn_checkmark_tick__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._tn_checkmark_tick__img['ondragstart']=function() { return false; };
		this._tn_checkmark_tick.appendChild(this._tn_checkmark_tick__img);
		this._tn_checkmark_tick.ggId="tn_checkmark_tick";
		this._tn_checkmark_tick.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tn_checkmark_tick.ggVisible=false;
		this._tn_checkmark_tick.className='ggskin ggskin_svg ';
		this._tn_checkmark_tick.ggType='svg';
		hs ='';
		hs+='height : 22px;';
		hs+='left : 94px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : hidden;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		this._tn_checkmark_tick.setAttribute('style',hs);
		this._tn_checkmark_tick.style[domTransform + 'Origin']='50% 50%';
		me._tn_checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tn_checkmark_tick.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tn_checkmark_tick.ggCurrentLogicStateVisible = -1;
		this._tn_checkmark_tick.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.nodeVisited(me._tn_checkmark_tick.ggElementNodeId()) == true) || 
				(me._tn_checkmark_tick.ggIsActive() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tn_checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tn_checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tn_checkmark_tick.style[domTransition]='';
				if (me._tn_checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._tn_checkmark_tick.style.visibility=(Number(me._tn_checkmark_tick.style.opacity)>0||!me._tn_checkmark_tick.style.opacity)?'inherit':'hidden';
					me._tn_checkmark_tick.ggVisible=true;
				}
				else {
					me._tn_checkmark_tick.style.visibility="hidden";
					me._tn_checkmark_tick.ggVisible=false;
				}
			}
		}
		this._tn_checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		this._thumbnail_nodeimage.appendChild(this._tn_checkmark_tick);
		this._thumbnail_active=document.createElement('div');
		this._thumbnail_active.ggId="Thumbnail Active";
		this._thumbnail_active.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail_active.ggVisible=true;
		this._thumbnail_active.className='ggskin ggskin_rectangle ';
		this._thumbnail_active.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #b8b8b8;';
		hs+='cursor : default;';
		hs+='height : 79px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 111px;';
		hs+='pointer-events:auto;';
		this._thumbnail_active.setAttribute('style',hs);
		this._thumbnail_active.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._thumbnail_active.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._thumbnail_active.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active']=true;
		}
		this._thumbnail_active.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
		}
		this._thumbnail_active.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
		}
		me._thumbnail_active.ggCurrentLogicStateBorderColor = -1;
		this._thumbnail_active.ggUpdateConditionTimer=function () {
			var newLogicStateBorderColor;
			if (
				(me._thumbnail_active.ggIsActive() == true)
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				(me.elementMouseOver['thumbnail_active'] == true)
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active.style[domTransition]='border-color none';
				if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active.style.borderColor="rgba(222,191,34,0.784314)";
				}
				else if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active.style.borderColor="rgba(184,184,184,1)";
				}
			}
		}
		this._thumbnail_active.ggUpdatePosition=function (useTransition) {
		}
		this._thumbnail_nodeimage.appendChild(this._thumbnail_active);
		this._tnhintbox=document.createElement('div');
		this._tnhintbox.ggId="TNHintBox";
		this._tnhintbox.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tnhintbox.ggVisible=false;
		this._tnhintbox.className='ggskin ggskin_rectangle ';
		this._tnhintbox.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : rgba(227,227,227,0);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='cursor : default;';
		hs+='height : 19px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 113px;';
		hs+='pointer-events:auto;';
		this._tnhintbox.setAttribute('style',hs);
		this._tnhintbox.style[domTransform + 'Origin']='50% 50%';
		me._tnhintbox.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tnhintbox.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tnhintbox.ggCurrentLogicStateVisible = -1;
		this._tnhintbox.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['thumbnail_nodeimage'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tnhintbox.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tnhintbox.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tnhintbox.style[domTransition]='';
				if (me._tnhintbox.ggCurrentLogicStateVisible == 0) {
					me._tnhintbox.style.visibility=(Number(me._tnhintbox.style.opacity)>0||!me._tnhintbox.style.opacity)?'inherit':'hidden';
					me._tnhintbox.ggVisible=true;
				}
				else {
					me._tnhintbox.style.visibility="hidden";
					me._tnhintbox.ggVisible=false;
				}
			}
		}
		this._tnhintbox.ggUpdatePosition=function (useTransition) {
		}
		this._tnhint_txt=document.createElement('div');
		this._tnhint_txt__text=document.createElement('div');
		this._tnhint_txt.className='ggskin ggskin_textdiv';
		this._tnhint_txt.ggTextDiv=this._tnhint_txt__text;
		this._tnhint_txt.ggId="TNHint_Txt";
		this._tnhint_txt.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tnhint_txt.ggVisible=true;
		this._tnhint_txt.className='ggskin ggskin_text ';
		this._tnhint_txt.ggType='text';
		hs ='';
		hs+='height : 19px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 111px;';
		hs+='pointer-events:auto;';
		this._tnhint_txt.setAttribute('style',hs);
		this._tnhint_txt.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 111px;';
		hs+='height: auto;';
		hs+='background: #b3b3b3;';
		hs+='background: rgba(179,179,179,0.588235);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tnhint_txt__text.setAttribute('style',hs);
		this._tnhint_txt__text.innerHTML="<font size=1>"+me.ggUserdata.title+"<\/font>";
		this._tnhint_txt.appendChild(this._tnhint_txt__text);
		me._tnhint_txt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tnhint_txt.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tnhint_txt.ggUpdatePosition=function (useTransition) {
		}
		this._tnhintbox.appendChild(this._tnhint_txt);
		this._thumbnail_nodeimage.appendChild(this._tnhintbox);
		this.__div.appendChild(this._thumbnail_nodeimage);
	};
	this.addSkin();
};