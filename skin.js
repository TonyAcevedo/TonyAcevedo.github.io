// Garden Gnome Software - Skin
// Pano2VR 6.1 beta2/17561
// Filename: 1BR_simplex_V3_Ora.ggsk
// Generated 2019-05-21T16:49:47

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
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
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
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
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('configloaded', function() { me.callNodeChange(me.divSkin); });
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
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
		el=me._container1=document.createElement('div');
		el.ggId="Container1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 768px;';
		hs+='left : -5px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 1250px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		me._container1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width <= 320) && 
				(player.getViewerSize().width / player.getViewerSize().height < 1)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width <= 375) && 
				(player.getViewerSize().width / player.getViewerSize().height < 1)
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width <= 414) && 
				(player.getViewerSize().width / player.getViewerSize().height < 1)
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width <= 480) && 
				(player.getViewerSize().width / player.getViewerSize().height > 1)
			)
			{
				newLogicStateScaling = 3;
			}
			else if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width <= 568) && 
				(player.getViewerSize().width / player.getViewerSize().height > 1)
			)
			{
				newLogicStateScaling = 4;
			}
			else if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width <= 640) && 
				(player.getViewerSize().width / player.getViewerSize().height > 1)
			)
			{
				newLogicStateScaling = 5;
			}
			else if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width <= 667) && 
				(player.getViewerSize().width / player.getViewerSize().height > 1)
			)
			{
				newLogicStateScaling = 6;
			}
			else if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width <= 732) && 
				(player.getViewerSize().width / player.getViewerSize().height > 1)
			)
			{
				newLogicStateScaling = 7;
			}
			else if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width <= 736) && 
				(player.getViewerSize().width / player.getViewerSize().height > 1)
			)
			{
				newLogicStateScaling = 8;
			}
			else if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width <= 768) && 
				(player.getViewerSize().width / player.getViewerSize().height < 1)
			)
			{
				newLogicStateScaling = 9;
			}
			else if (
				(player.getIsMobile() == false) && 
				(player.getViewerSize().width <= 960)
			)
			{
				newLogicStateScaling = 10;
			}
			else if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width <= 1024) && 
				(player.getViewerSize().width / player.getViewerSize().height > 1) || 
				(player.getViewerSize().width / player.getViewerSize().height < 1)
			)
			{
				newLogicStateScaling = 11;
			}
			else if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width >= 1024) && 
				(player.getViewerSize().width / player.getViewerSize().height > 1)
			)
			{
				newLogicStateScaling = 12;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._container1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._container1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._container1.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._container1.ggCurrentLogicStateScaling == 0) {
					me._container1.ggParameter.sx = 0.38;
					me._container1.ggParameter.sy = 0.4;
					me._container1.style[domTransform]=parameterToTransform(me._container1.ggParameter);
				}
				else if (me._container1.ggCurrentLogicStateScaling == 1) {
					me._container1.ggParameter.sx = 0.4;
					me._container1.ggParameter.sy = 0.45;
					me._container1.style[domTransform]=parameterToTransform(me._container1.ggParameter);
				}
				else if (me._container1.ggCurrentLogicStateScaling == 2) {
					me._container1.ggParameter.sx = 0.45;
					me._container1.ggParameter.sy = 0.48;
					me._container1.style[domTransform]=parameterToTransform(me._container1.ggParameter);
				}
				else if (me._container1.ggCurrentLogicStateScaling == 3) {
					me._container1.ggParameter.sx = 0.45;
					me._container1.ggParameter.sy = 0.45;
					me._container1.style[domTransform]=parameterToTransform(me._container1.ggParameter);
				}
				else if (me._container1.ggCurrentLogicStateScaling == 4) {
					me._container1.ggParameter.sx = 0.45;
					me._container1.ggParameter.sy = 0.45;
					me._container1.style[domTransform]=parameterToTransform(me._container1.ggParameter);
				}
				else if (me._container1.ggCurrentLogicStateScaling == 5) {
					me._container1.ggParameter.sx = 0.51;
					me._container1.ggParameter.sy = 0.51;
					me._container1.style[domTransform]=parameterToTransform(me._container1.ggParameter);
				}
				else if (me._container1.ggCurrentLogicStateScaling == 6) {
					me._container1.ggParameter.sx = 0.54;
					me._container1.ggParameter.sy = 0.54;
					me._container1.style[domTransform]=parameterToTransform(me._container1.ggParameter);
				}
				else if (me._container1.ggCurrentLogicStateScaling == 7) {
					me._container1.ggParameter.sx = 0.59;
					me._container1.ggParameter.sy = 0.59;
					me._container1.style[domTransform]=parameterToTransform(me._container1.ggParameter);
				}
				else if (me._container1.ggCurrentLogicStateScaling == 8) {
					me._container1.ggParameter.sx = 0.6;
					me._container1.ggParameter.sy = 0.6;
					me._container1.style[domTransform]=parameterToTransform(me._container1.ggParameter);
				}
				else if (me._container1.ggCurrentLogicStateScaling == 9) {
					me._container1.ggParameter.sx = 0.61;
					me._container1.ggParameter.sy = 0.63;
					me._container1.style[domTransform]=parameterToTransform(me._container1.ggParameter);
				}
				else if (me._container1.ggCurrentLogicStateScaling == 10) {
					me._container1.ggParameter.sx = 0.85;
					me._container1.ggParameter.sy = 0.85;
					me._container1.style[domTransform]=parameterToTransform(me._container1.ggParameter);
				}
				else if (me._container1.ggCurrentLogicStateScaling == 11) {
					me._container1.ggParameter.sx = 0.82;
					me._container1.ggParameter.sy = 0.82;
					me._container1.style[domTransform]=parameterToTransform(me._container1.ggParameter);
				}
				else if (me._container1.ggCurrentLogicStateScaling == 12) {
					me._container1.ggParameter.sx = 1;
					me._container1.ggParameter.sy = 1;
					me._container1.style[domTransform]=parameterToTransform(me._container1.ggParameter);
				}
				else {
					me._container1.ggParameter.sx = 1;
					me._container1.ggParameter.sy = 1;
					me._container1.style[domTransform]=parameterToTransform(me._container1.ggParameter);
				}
			}
		}
		me._container1.ggUpdatePosition=function (useTransition) {
		}
		el=me._floorplancontainer=document.createElement('div');
		el.ggId="FloorPlanContainer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 436px;';
		hs+='left : -334px;';
		hs+='position : absolute;';
		hs+='top : 155px;';
		hs+='visibility : inherit;';
		hs+='width : 338px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._floorplancontainer.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplancontainer.ggUpdatePosition=function (useTransition) {
		}
		el=me._floor_plan_bg=document.createElement('div');
		el.ggId="floor_plan_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._floor_plan_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floor_plan_bg.logicBlock_scaling = function() {
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
				me._floor_plan_bg.style[domTransition]='' + cssPrefix + 'transform 0s';
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
		me._floor_plan_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._flrplan_select=document.createElement('div');
		el.ggId="FlrPlan_select";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._flrplan_select.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._flrplan_select.ggUpdatePosition=function (useTransition) {
		}
		el=me._floorpln_hydbttn=document.createElement('div');
		els=me._floorpln_hydbttn__img=document.createElement('img');
		els.className='ggskin ggskin_floorpln_hydbttn';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAACwklEQVR4nO2dQXLDIAxFSacHSM7Yc+WM7Q3cFZOEMQYhfUmA3joTS8+KMDYmt+NIAZAv6wBWJwSDCcFgphP8eN6Px/M+zchx8zbIScn7/fm7SXwPFxeCNSrSSriZYKufubZodcGe+qeGbDXBnsS+g5YMFzwqdjRx7eO1gAqmJItKkCpcOg6I4N6ktAcci7jEBfckYX2Nqhmj6ExuBrm9MUgNymIV3ArIg9gz0HGLVPCsclNqx8atZHYFXwXgWewZiFxYFbyS3JSuYx6t5GHBq8nNSEseEryq3Iyk5KEeXDtIGZjX+w81KPH3FhK5gnvlroBETiTBs1Ukkl4XItfBK1Zvhpvbd+8Hua1B+iSU8Yx8P+Xmz9lnH8/70TrudE+VvdE6SV2CdxrYapjM5I'+
			'I2TcFRvS9qOV+1iahgMEOCd6zeDLWKLwXHxIJP93WwBpxrW683oMgtYuf2kKE4iEFOkLNfUVVw9F8ZXPVgCrO0qmgRYEiCZ6kaDWBPNAIaaj1410EzKhhMCBam/KWqtQjNFY2eiAoWpiykEAwmBIMh9eCex9TaWPVt1YUnQZ0QDMbV3TRv7UeCquDaciFvcE6KRn5iy1d3grJWJHowmBAM5lLwyFKh1aEuJYsKBtMUHFX8Qu01ruCTq0tF2JueqzGaa9dMTmLSgTwZ6Be6Ocdmt4gdqpiTY7dgxIvSM8BdtRkLT8CQ31X2ug4Xgcm7yru0CqlCEn9HYwXJkjlAJhozS5bef2hYsOW1JwrE5k7QTZEy3gc/ZA7sFjH7kih0gahtTJfxUs1a8YoNcr2BeKhmzWIw2Rw043X31ZTkYoPtH2y9b+9oHNKxuNmguUR7B2zO'+
			'Ma9Q2cPdQ99tMeUW4+94lTz9JvklXkRrDbCm/wRjIXv5Pyo5Ay3acnLjQnAJV7iX2WJKTgWvRCw8AROCwYRgMCEYzD9blMLyTgUIzwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAC1ElEQVR4nO2dW3LDIAxFcaYLsNeYdWWNyQ7cj447iWNAgC4IuOevj4nRsSKD44hl350JtseqOpLn/bVovl4uS0vB2lJDtBJeXXBNqT5qyq4i2IJUH2jZUMGWxb6DlHxDvTD5A5LBJZlbmk0tj32FuuDUANE1MEe45pjUBKcE0nKOWnucKoIlg7Yy8T+Qii4dd5HgWoNEUWP82YJ7zFofyFiypmkjyXVONtbc2UlyBscO1JPYK7TjS8rg0eU6F48hNZPFGTyD3DOhmKXxcqkMRiR4xux1LhyXtFSISoTvxa4G0MsdNB+pMcWSK5rBKXJHpSTWoODes7EG22PdQ56yLnIzZe9Bbsw/vj9olAbUibgaW+6xUu+u+f5/e6z71Rg4TVPkSv6X4FBNmbE0nI'+
			'EulUk6H4I1loYzkLIAYQaDoWAwIsEsD99Iy8Tt6pdED+9Coybnk5vzjrF6gY6WCJYHPxI3vMiBON5Rt/cfiD4manAqPZUtlggwQcE9ZUornvfXEvLEDAZDwWCgFznOTpjBcCgYyPZYd2iJkM5CRi4lzGAgz/troWAwFAwmWIN9D1NYwULtjo2BGQyGgsFQMBgT94Mt1/lSfpwLPzVoGY0Tg447+wl3IvskmzUYDAWD+Res8ZWlmZA+6MIMBvMhmFksI8UFMxgMBStzrgKq7QxmINXB11L5OAMaMmudEO0eD5rjSC4RM2dxTuxewZxRfJLb0oHPpoGJ9ouw+mh+TUocFDXkkB6kZ0oTTOVrXKPWZI241BYaI0mONdlwjl2nzCAWjGw/aAnttpHqrRVzBmEBVFzJJWLEJyaRSQNtb3tgNZtrxJB9kUs5oMVsrpUg1VqM'+
			'v9NLD3fnGrcYP9O64/8Vrbd9aL7Nw5mW+2hoHP8MbKsdi3U3RhcblbzTi2TuZdQxU293VmM202RHxNbCh9uwz4eVT52RNBV8Rku4paW5KcEjwlkEmF95DsrsNORpgAAAAABJRU5ErkJggg==';
		me._floorpln_hydbttn__img.ggOverSrc=hs;
		el.ggId="FloorPln_HydBttn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._floorpln_hydbttn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorpln_hydbttn.logicBlock_scaling = function() {
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
				me._floorpln_hydbttn.style[domTransition]='' + cssPrefix + 'transform 0s';
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
		me._floorpln_hydbttn.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._floorplans.style[domTransition]='none';
			} else {
				me._floorplans.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._floorplans.ggParameter.rx=0;me._floorplans.ggParameter.ry=0;
			me._floorplans.style[domTransform]=parameterToTransform(me._floorplans.ggParameter);
			me._floorpln_hydbttn.style[domTransition]='none';
			me._floorpln_hydbttn.ggParameter.sx=0;me._floorpln_hydbttn.ggParameter.sy=0;
			me._floorpln_hydbttn.style[domTransform]=parameterToTransform(me._floorpln_hydbttn.ggParameter);
			if (player.transitionsDisabled) {
				me._floorpln_shwbtn.style[domTransition]='none';
			} else {
				me._floorpln_shwbtn.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._floorpln_shwbtn.ggParameter.sx=1;me._floorpln_shwbtn.ggParameter.sy=1;
			me._floorpln_shwbtn.style[domTransform]=parameterToTransform(me._floorpln_shwbtn.ggParameter);
		}
		me._floorpln_hydbttn.onmouseover=function (e) {
			me._floorpln_hydbttn__img.src=me._floorpln_hydbttn__img.ggOverSrc;
			me.elementMouseOver['floorpln_hydbttn']=true;
			me.__1brtt_flrpln_bttn_hide.logicBlock_visible();
		}
		me._floorpln_hydbttn.onmouseout=function (e) {
			me._floorpln_hydbttn__img.src=me._floorpln_hydbttn__img.ggNormalSrc;
			me.elementMouseOver['floorpln_hydbttn']=false;
			me.__1brtt_flrpln_bttn_hide.logicBlock_visible();
		}
		me._floorpln_hydbttn.ontouchend=function (e) {
			me.elementMouseOver['floorpln_hydbttn']=false;
			me.__1brtt_flrpln_bttn_hide.logicBlock_visible();
		}
		me._floorpln_hydbttn.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1brtt_flrpln_bttn_hide=document.createElement('div');
		els=me.__1brtt_flrpln_bttn_hide__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1BRtt_FlrPln_Bttn_hide";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -64px;';
		hs+='position : absolute;';
		hs+='top : 34px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Show Floor Plan";
		el.appendChild(els);
		me.__1brtt_flrpln_bttn_hide.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1brtt_flrpln_bttn_hide.logicBlock_visible = function() {
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
		me.__1brtt_flrpln_bttn_hide.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_flrpln_white_bttn_hide=document.createElement('div');
		els=me._tt_flrpln_white_bttn_hide__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_FlrPln_white__Bttn_hide";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Show Floor Plan";
		el.appendChild(els);
		me._tt_flrpln_white_bttn_hide.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_flrpln_white_bttn_hide.ggUpdatePosition=function (useTransition) {
		}
		me.__1brtt_flrpln_bttn_hide.appendChild(me._tt_flrpln_white_bttn_hide);
		me._floorpln_hydbttn.appendChild(me.__1brtt_flrpln_bttn_hide);
		me._flrplan_select.appendChild(me._floorpln_hydbttn);
		el=me._floorpln_shwbtn=document.createElement('div');
		els=me._floorpln_shwbtn__img=document.createElement('img');
		els.className='ggskin ggskin_floorpln_shwbtn';
		hs='data:image/png;base64,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'+
			'wQAyT7P4g7K8MK8VWvAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._floorpln_shwbtn__img.ggOverSrc=hs;
		el.ggId="FloorPln_ShwBtn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._floorpln_shwbtn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorpln_shwbtn.onclick=function (e) {
			if (player.transitionsDisabled) {
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
		me._floorpln_shwbtn.onmouseover=function (e) {
			me._floorpln_shwbtn__img.src=me._floorpln_shwbtn__img.ggOverSrc;
			me.elementMouseOver['floorpln_shwbtn']=true;
			me.__1brtt_flrplndet_show.logicBlock_visible();
		}
		me._floorpln_shwbtn.onmouseout=function (e) {
			me._floorpln_shwbtn__img.src=me._floorpln_shwbtn__img.ggNormalSrc;
			me.elementMouseOver['floorpln_shwbtn']=false;
			me.__1brtt_flrplndet_show.logicBlock_visible();
		}
		me._floorpln_shwbtn.ontouchend=function (e) {
			me.elementMouseOver['floorpln_shwbtn']=false;
			me.__1brtt_flrplndet_show.logicBlock_visible();
		}
		me._floorpln_shwbtn.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1brtt_flrplndet_show=document.createElement('div');
		els=me.__1brtt_flrplndet_show__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1BRtt_FlrPlnDet_show";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Show FloorPlan Details";
		el.appendChild(els);
		me.__1brtt_flrplndet_show.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1brtt_flrplndet_show.logicBlock_visible = function() {
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
		me.__1brtt_flrplndet_show.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1brtt_flrplndet_white_show=document.createElement('div');
		els=me.__1brtt_flrplndet_white_show__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1BRtt_FlrPlnDet_white_show";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Show FloorPlan Details";
		el.appendChild(els);
		me.__1brtt_flrplndet_white_show.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1brtt_flrplndet_white_show.ggUpdatePosition=function (useTransition) {
		}
		me.__1brtt_flrplndet_show.appendChild(me.__1brtt_flrplndet_white_show);
		me._floorpln_shwbtn.appendChild(me.__1brtt_flrplndet_show);
		me._flrplan_select.appendChild(me._floorpln_shwbtn);
		me._floor_plan_bg.appendChild(me._flrplan_select);
		el=me._mask=document.createElement('div');
		el.ggId="mask";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 400px;';
		hs+='left : 12px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 310px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mask.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mask.ggUpdatePosition=function (useTransition) {
		}
		el=me._floorplans=document.createElement('div');
		el.ggId="floorplans";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 400px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 310px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._floorplans.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplans.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1br_flrplan=document.createElement('div');
		el.ggId="1BR FlrPlan";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me.__1br_flrplan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1br_flrplan.logicBlock_scaling = function() {
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
				me.__1br_flrplan.style[domTransition]='' + cssPrefix + 'transform 0s';
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
		me.__1br_flrplan.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1brflrplan=document.createElement('div');
		els=me.__1brflrplan__img=document.createElement('img');
		els.className='ggskin ggskin__1brflrplan';
		hs=basePath + 'images/_1brflrplan.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1BRFlrPlan";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 400px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 310px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__1brflrplan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1brflrplan.ggUpdatePosition=function (useTransition) {
		}
		me.__1br_flrplan.appendChild(me.__1brflrplan);
		el=me.__1brfpdet=document.createElement('div');
		els=me.__1brfpdet__img=document.createElement('img');
		els.className='ggskin ggskin__1brfpdet';
		hs=basePath + 'images/_1brfpdet.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1BRFPDet";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 400px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -401px;';
		hs+='visibility : inherit;';
		hs+='width : 310px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__1brfpdet.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1brfpdet.ggUpdatePosition=function (useTransition) {
		}
		me.__1br_flrplan.appendChild(me.__1brfpdet);
		el=me.__1brmarker_1=document.createElement('div');
		el.ggMarkerNodeId='{node1}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="1BRMarker 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 181px;';
		hs+='position : absolute;';
		hs+='top : 317px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__1brmarker_1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__1brmarker_1.onclick=function (e) {
			player.openNext('{node1}');
		}
		me.__1brmarker_1.ggActivate=function () {
			me.__1brbeam.style[domTransition]='none';
			me.__1brbeam.ggParameter.rx=181;me.__1brbeam.ggParameter.ry=317;
			me.__1brbeam.style[domTransform]=parameterToTransform(me.__1brbeam.ggParameter);
		}
		me.__1brmarker_1.ggUpdatePosition=function (useTransition) {
		}
		me.__1br_flrplan.appendChild(me.__1brmarker_1);
		el=me.__1brmarker_2=document.createElement('div');
		el.ggMarkerNodeId='{node5}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="1BRMarker 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 131px;';
		hs+='position : absolute;';
		hs+='top : 196px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__1brmarker_2.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__1brmarker_2.onclick=function (e) {
			player.openNext('{node5}');
		}
		me.__1brmarker_2.ggActivate=function () {
			me.__1brbeam.style[domTransition]='none';
			me.__1brbeam.ggParameter.rx=131;me.__1brbeam.ggParameter.ry=196;
			me.__1brbeam.style[domTransform]=parameterToTransform(me.__1brbeam.ggParameter);
		}
		me.__1brmarker_2.ggUpdatePosition=function (useTransition) {
		}
		me.__1br_flrplan.appendChild(me.__1brmarker_2);
		el=me.__1brmarker_3=document.createElement('div');
		el.ggMarkerNodeId='{node2}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="1BRMarker 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 183px;';
		hs+='position : absolute;';
		hs+='top : 201px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__1brmarker_3.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__1brmarker_3.onclick=function (e) {
			player.openNext('{node2}');
		}
		me.__1brmarker_3.ggActivate=function () {
			me.__1brbeam.style[domTransition]='none';
			me.__1brbeam.ggParameter.rx=183;me.__1brbeam.ggParameter.ry=201;
			me.__1brbeam.style[domTransform]=parameterToTransform(me.__1brbeam.ggParameter);
		}
		me.__1brmarker_3.ggUpdatePosition=function (useTransition) {
		}
		me.__1br_flrplan.appendChild(me.__1brmarker_3);
		el=me.__1brmarker_4=document.createElement('div');
		el.ggMarkerNodeId='{node6}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="1BRMarker 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 66px;';
		hs+='position : absolute;';
		hs+='top : 296px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__1brmarker_4.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__1brmarker_4.onclick=function (e) {
			player.openNext('{node6}');
		}
		me.__1brmarker_4.ggActivate=function () {
			me.__1brbeam.style[domTransition]='none';
			me.__1brbeam.ggParameter.rx=66;me.__1brbeam.ggParameter.ry=296;
			me.__1brbeam.style[domTransform]=parameterToTransform(me.__1brbeam.ggParameter);
		}
		me.__1brmarker_4.ggUpdatePosition=function (useTransition) {
		}
		me.__1br_flrplan.appendChild(me.__1brmarker_4);
		el=me.__1brbeam=document.createElement('div');
		el.ggId="1BRbeam";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__1brbeam.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1brbeam.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1brimage_radar1=document.createElement('div');
		els=me.__1brimage_radar1__img=document.createElement('img');
		els.className='ggskin ggskin__1brimage_radar1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABaCAYAAAAIJFAjAAADcklEQVR4nO2aLZdUMQxAb86BxaDBrAcDHgMKgQLDD0ChwYDCoDD7AzDgMWAwKDB4MOBRmFVrMEHMdqbT17R933Mg10xfm7R5nSZNOwPO/42EgsJRVK9pe4aSjEb1oRzLa0YvJ5frz3qO+471s/0K/OkYr3DZ6CBHzqCcIfGz9dLpOKl82pYbM9XN2REqz0L5QtJ2MRWegKwRE/abfrbYcBY37KFwhe4s5yi1WfLxmDX92tgU2k0dgd9xZbYDheOoPZ1ly8g+L2Qtd8vXLd1SH51PgV+pYuoCgSOj3hp4iEzJf1vjSa3fqn3mN6ZwvVvVFJlbXcP6dkurbDACP4x6G4WbBWMsPyxF7Ljc55NMuTbmtl7ge+flzrFcINC6K7S6wtYoykvVWuZWHBi801'+
			'SXlsKtIR3nuxq/lPsi8LXSXkfhzq5YdYFEtRg3WuRa+4jbAUTgc0FuI1QTiHq9S9sys/zekrUieTJ8r6xQBD412FqNATFxPKiloBZ9fXWuLHJvgGYUHgwYo0/WZrlYbrJNPYEPrcb1DkoKDxOjahHc8vlUPqebs7e0LarAu9Z3gX4uELhkGDeElm+7pDvajkHbksKjfHXzuaDQdVXPzBYF3vQdcPC+rPA4MaiW7VGog7q7lLZFBF4PeY8hLhDomyWW/Ns6U8zOqMxM4elUhoxB4GSE7jgUnjMsK6zVh7ZAZ9mfV75qMNNkktxc4cWu2Om/dMQtbml0XWHvWeDlKMMZFwNiSvFgMX8ewmSnM90sxaGHGGtnMHUFno2xN+pnOnQTjFrPCdapsuYyIvBkEoOZzgUCrXeJB8PkFxRqJyQt5/hc0NwLlLJLwCZhlhsahbe7'+
			'YjFLJNNOIrd9lnwKPoqpXSDQ9xemPjFiUma7o9Oex9KdWt4m2RzDJ2fWS0qF98YY1v1B3C6RwP1ZDGTmCQBQ+FgYs7rsBe7NYtg5c8WAmIPeGmdfAQAKX+wm8ygsArfntm2RCQDQ3Q8UtUuTIDTVDzJFlnCBQHCFgzocLbYCABS+tYwrcGMBc+qGzIHCTwpXYwLXlrRnSRcIhCzxIFxh8RUAoJu/quTO+Md5jflYZQIAdPNnpa0rCFxdy5bVUDhVOF3ThjViQMzqWeIhTMDqgdBxHMdxHMdxHMdxHMdxHMdxHMdxHMdxHMdxHMdxHMdxnH+PvzgsG4NYzC0lAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1BRImage_radar1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90px;';
		hs+='position : absolute;';
		hs+='right : -26px;';
		hs+='top : -43px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__1brimage_radar1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1brimage_radar1.ggUpdatePosition=function (useTransition) {
		}
		me.__1brbeam.appendChild(me.__1brimage_radar1);
		el=me.__1brbeam_cover=document.createElement('div');
		el.ggId="1BRbeam cover";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : #aa5500;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 11px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__1brbeam_cover.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1brbeam_cover.ggUpdatePosition=function (useTransition) {
		}
		me.__1brbeam.appendChild(me.__1brbeam_cover);
		me.__1br_flrplan.appendChild(me.__1brbeam);
		me._floorplans.appendChild(me.__1br_flrplan);
		el=me.__2br_flrplan=document.createElement('div');
		el.ggId="2BR FlrPlan";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me.__2br_flrplan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2br_flrplan.logicBlock_scaling = function() {
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
				me.__2br_flrplan.style[domTransition]='' + cssPrefix + 'transform 0s';
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
		me.__2br_flrplan.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2brflrplan=document.createElement('div');
		els=me.__2brflrplan__img=document.createElement('img');
		els.className='ggskin ggskin__2brflrplan';
		hs=basePath + 'images/_2brflrplan.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="2BRFlrPlan";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 400px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 310px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__2brflrplan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2brflrplan.ggUpdatePosition=function (useTransition) {
		}
		me.__2br_flrplan.appendChild(me.__2brflrplan);
		el=me.__2brfpdet=document.createElement('div');
		els=me.__2brfpdet__img=document.createElement('img');
		els.className='ggskin ggskin__2brfpdet';
		hs=basePath + 'images/_2brfpdet.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="2BRFPDet";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 400px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -401px;';
		hs+='visibility : inherit;';
		hs+='width : 310px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__2brfpdet.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2brfpdet.ggUpdatePosition=function (useTransition) {
		}
		me.__2br_flrplan.appendChild(me.__2brfpdet);
		el=me.__2brmarker_1=document.createElement('div');
		el.ggMarkerNodeId='{node9}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="2BRMarker 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 175px;';
		hs+='position : absolute;';
		hs+='top : 358px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__2brmarker_1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__2brmarker_1.onclick=function (e) {
			player.openNext('{node9}');
		}
		me.__2brmarker_1.ggActivate=function () {
			me.__2brbeam.style[domTransition]='none';
			me.__2brbeam.ggParameter.rx=175;me.__2brbeam.ggParameter.ry=358;
			me.__2brbeam.style[domTransform]=parameterToTransform(me.__2brbeam.ggParameter);
		}
		me.__2brmarker_1.ggUpdatePosition=function (useTransition) {
		}
		me.__2br_flrplan.appendChild(me.__2brmarker_1);
		el=me.__2brmarkerr_2=document.createElement('div');
		el.ggMarkerNodeId='{node11}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="2BRMarkerr 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 155px;';
		hs+='position : absolute;';
		hs+='top : 120px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__2brmarkerr_2.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__2brmarkerr_2.onclick=function (e) {
			player.openNext('{node11}');
		}
		me.__2brmarkerr_2.ggActivate=function () {
			me.__2brbeam.style[domTransition]='none';
			me.__2brbeam.ggParameter.rx=155;me.__2brbeam.ggParameter.ry=120;
			me.__2brbeam.style[domTransform]=parameterToTransform(me.__2brbeam.ggParameter);
		}
		me.__2brmarkerr_2.ggUpdatePosition=function (useTransition) {
		}
		me.__2br_flrplan.appendChild(me.__2brmarkerr_2);
		el=me.__2brmarker_3=document.createElement('div');
		el.ggMarkerNodeId='{node8}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="2BRMarker 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 195px;';
		hs+='position : absolute;';
		hs+='top : 170px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__2brmarker_3.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__2brmarker_3.onclick=function (e) {
			player.openNext('{node8}');
		}
		me.__2brmarker_3.ggActivate=function () {
			me.__2brbeam.style[domTransition]='none';
			me.__2brbeam.ggParameter.rx=195;me.__2brbeam.ggParameter.ry=170;
			me.__2brbeam.style[domTransform]=parameterToTransform(me.__2brbeam.ggParameter);
		}
		me.__2brmarker_3.ggUpdatePosition=function (useTransition) {
		}
		me.__2br_flrplan.appendChild(me.__2brmarker_3);
		el=me.__2brmarker_4=document.createElement('div');
		el.ggMarkerNodeId='{node7}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="2BRMarker 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 150px;';
		hs+='position : absolute;';
		hs+='top : 243px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__2brmarker_4.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__2brmarker_4.onclick=function (e) {
			player.openNext('{node7}');
		}
		me.__2brmarker_4.ggActivate=function () {
			me.__2brbeam.style[domTransition]='none';
			me.__2brbeam.ggParameter.rx=150;me.__2brbeam.ggParameter.ry=243;
			me.__2brbeam.style[domTransform]=parameterToTransform(me.__2brbeam.ggParameter);
		}
		me.__2brmarker_4.ggUpdatePosition=function (useTransition) {
		}
		me.__2br_flrplan.appendChild(me.__2brmarker_4);
		el=me.__2brmarker_5=document.createElement('div');
		el.ggMarkerNodeId='{node10}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="2BRMarker 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 178px;';
		hs+='position : absolute;';
		hs+='top : 318px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__2brmarker_5.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__2brmarker_5.onclick=function (e) {
			player.openNext('{node10}');
		}
		me.__2brmarker_5.ggActivate=function () {
			me.__2brbeam.style[domTransition]='none';
			me.__2brbeam.ggParameter.rx=178;me.__2brbeam.ggParameter.ry=318;
			me.__2brbeam.style[domTransform]=parameterToTransform(me.__2brbeam.ggParameter);
		}
		me.__2brmarker_5.ggUpdatePosition=function (useTransition) {
		}
		me.__2br_flrplan.appendChild(me.__2brmarker_5);
		el=me.__2brbeam=document.createElement('div');
		el.ggId="2BRbeam";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__2brbeam.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2brbeam.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2brimage_radar=document.createElement('div');
		els=me.__2brimage_radar__img=document.createElement('img');
		els.className='ggskin ggskin__2brimage_radar';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABaCAYAAAAIJFAjAAADcklEQVR4nO2aLZdUMQxAb86BxaDBrAcDHgMKgQLDD0ChwYDCoDD7AzDgMWAwKDB4MOBRmFVrMEHMdqbT17R933Mg10xfm7R5nSZNOwPO/42EgsJRVK9pe4aSjEb1oRzLa0YvJ5frz3qO+471s/0K/OkYr3DZ6CBHzqCcIfGz9dLpOKl82pYbM9XN2REqz0L5QtJ2MRWegKwRE/abfrbYcBY37KFwhe4s5yi1WfLxmDX92tgU2k0dgd9xZbYDheOoPZ1ly8g+L2Qtd8vXLd1SH51PgV+pYuoCgSOj3hp4iEzJf1vjSa3fqn3mN6ZwvVvVFJlbXcP6dkurbDACP4x6G4WbBWMsPyxF7Ljc55NMuTbmtl7ge+flzrFcINC6K7S6wtYoykvVWuZWHBi801'+
			'SXlsKtIR3nuxq/lPsi8LXSXkfhzq5YdYFEtRg3WuRa+4jbAUTgc0FuI1QTiHq9S9sys/zekrUieTJ8r6xQBD412FqNATFxPKiloBZ9fXWuLHJvgGYUHgwYo0/WZrlYbrJNPYEPrcb1DkoKDxOjahHc8vlUPqebs7e0LarAu9Z3gX4uELhkGDeElm+7pDvajkHbksKjfHXzuaDQdVXPzBYF3vQdcPC+rPA4MaiW7VGog7q7lLZFBF4PeY8hLhDomyWW/Ns6U8zOqMxM4elUhoxB4GSE7jgUnjMsK6zVh7ZAZ9mfV75qMNNkktxc4cWu2Om/dMQtbml0XWHvWeDlKMMZFwNiSvFgMX8ewmSnM90sxaGHGGtnMHUFno2xN+pnOnQTjFrPCdapsuYyIvBkEoOZzgUCrXeJB8PkFxRqJyQt5/hc0NwLlLJLwCZhlhsahbe7'+
			'YjFLJNNOIrd9lnwKPoqpXSDQ9xemPjFiUma7o9Oex9KdWt4m2RzDJ2fWS0qF98YY1v1B3C6RwP1ZDGTmCQBQ+FgYs7rsBe7NYtg5c8WAmIPeGmdfAQAKX+wm8ygsArfntm2RCQDQ3Q8UtUuTIDTVDzJFlnCBQHCFgzocLbYCABS+tYwrcGMBc+qGzIHCTwpXYwLXlrRnSRcIhCzxIFxh8RUAoJu/quTO+Md5jflYZQIAdPNnpa0rCFxdy5bVUDhVOF3ThjViQMzqWeIhTMDqgdBxHMdxHMdxHMdxHMdxHMdxHMdxHMdxHMdxHMdxHMdxnH+PvzgsG4NYzC0lAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="2BRImage_radar";
		el.ggDx=-1;
		el.ggDy=-3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__2brimage_radar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2brimage_radar.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__2brbeam.appendChild(me.__2brimage_radar);
		el=me.__2brbeam_cover=document.createElement('div');
		el.ggId="2BRbeam cover";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : #aa5500;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 6px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 6px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__2brbeam_cover.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2brbeam_cover.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__2brbeam.appendChild(me.__2brbeam_cover);
		me.__2br_flrplan.appendChild(me.__2brbeam);
		me._floorplans.appendChild(me.__2br_flrplan);
		el=me.__3br_flrplan=document.createElement('div');
		el.ggId="3BR FlrPlan";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me.__3br_flrplan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3br_flrplan.logicBlock_scaling = function() {
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
				me.__3br_flrplan.style[domTransition]='' + cssPrefix + 'transform 0s';
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
		me.__3br_flrplan.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3brflrplan=document.createElement('div');
		els=me.__3brflrplan__img=document.createElement('img');
		els.className='ggskin ggskin__3brflrplan';
		hs=basePath + 'images/_3brflrplan.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="3BRFlrPlan";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 400px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 310px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__3brflrplan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3brflrplan.ggUpdatePosition=function (useTransition) {
		}
		me.__3br_flrplan.appendChild(me.__3brflrplan);
		el=me.__3brflrplandetails=document.createElement('div');
		els=me.__3brflrplandetails__img=document.createElement('img');
		els.className='ggskin ggskin__3brflrplandetails';
		hs=basePath + 'images/_3brflrplandetails.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="3BRFlrPlanDetails";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 400px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -401px;';
		hs+='visibility : inherit;';
		hs+='width : 310px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__3brflrplandetails.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3brflrplandetails.ggUpdatePosition=function (useTransition) {
		}
		me.__3br_flrplan.appendChild(me.__3brflrplandetails);
		el=me.__3brmarker_1=document.createElement('div');
		el.ggMarkerNodeId='{node14}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="3BRMarker 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 128px;';
		hs+='position : absolute;';
		hs+='top : 324px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__3brmarker_1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__3brmarker_1.onclick=function (e) {
			player.openNext('{node14}');
		}
		me.__3brmarker_1.ggActivate=function () {
			me.__3brbeam.style[domTransition]='none';
			me.__3brbeam.ggParameter.rx=128;me.__3brbeam.ggParameter.ry=324;
			me.__3brbeam.style[domTransform]=parameterToTransform(me.__3brbeam.ggParameter);
		}
		me.__3brmarker_1.ggUpdatePosition=function (useTransition) {
		}
		me.__3br_flrplan.appendChild(me.__3brmarker_1);
		el=me.__3brmarker_2=document.createElement('div');
		el.ggMarkerNodeId='{node15}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="3BRMarker 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 235px;';
		hs+='position : absolute;';
		hs+='top : 198px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__3brmarker_2.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__3brmarker_2.onclick=function (e) {
			player.openNext('{node15}');
		}
		me.__3brmarker_2.ggActivate=function () {
			me.__3brbeam.style[domTransition]='none';
			me.__3brbeam.ggParameter.rx=235;me.__3brbeam.ggParameter.ry=198;
			me.__3brbeam.style[domTransform]=parameterToTransform(me.__3brbeam.ggParameter);
		}
		me.__3brmarker_2.ggUpdatePosition=function (useTransition) {
		}
		me.__3br_flrplan.appendChild(me.__3brmarker_2);
		el=me.__3brmarker_3=document.createElement('div');
		el.ggMarkerNodeId='{node12}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="3BRMarker 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 236px;';
		hs+='position : absolute;';
		hs+='top : 149px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__3brmarker_3.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__3brmarker_3.onclick=function (e) {
			player.openNext('{node12}');
		}
		me.__3brmarker_3.ggActivate=function () {
			me.__3brbeam.style[domTransition]='none';
			me.__3brbeam.ggParameter.rx=236;me.__3brbeam.ggParameter.ry=149;
			me.__3brbeam.style[domTransform]=parameterToTransform(me.__3brbeam.ggParameter);
		}
		me.__3brmarker_3.ggUpdatePosition=function (useTransition) {
		}
		me.__3br_flrplan.appendChild(me.__3brmarker_3);
		el=me.__3brmarker_4=document.createElement('div');
		el.ggMarkerNodeId='{node16}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="3BRMarker 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='top : 174px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__3brmarker_4.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__3brmarker_4.onclick=function (e) {
			player.openNext('{node16}');
		}
		me.__3brmarker_4.ggActivate=function () {
			me.__3brbeam.style[domTransition]='none';
			me.__3brbeam.ggParameter.rx=60;me.__3brbeam.ggParameter.ry=174;
			me.__3brbeam.style[domTransform]=parameterToTransform(me.__3brbeam.ggParameter);
		}
		me.__3brmarker_4.ggUpdatePosition=function (useTransition) {
		}
		me.__3br_flrplan.appendChild(me.__3brmarker_4);
		el=me.__3brmarker_5=document.createElement('div');
		el.ggMarkerNodeId='{node17}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="3BRMarker 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 179px;';
		hs+='position : absolute;';
		hs+='top : 150px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__3brmarker_5.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__3brmarker_5.onclick=function (e) {
			player.openNext('{node17}');
		}
		me.__3brmarker_5.ggActivate=function () {
			me.__3brbeam.style[domTransition]='none';
			me.__3brbeam.ggParameter.rx=179;me.__3brbeam.ggParameter.ry=150;
			me.__3brbeam.style[domTransform]=parameterToTransform(me.__3brbeam.ggParameter);
		}
		me.__3brmarker_5.ggUpdatePosition=function (useTransition) {
		}
		me.__3br_flrplan.appendChild(me.__3brmarker_5);
		el=me.__3brbeam=document.createElement('div');
		el.ggId="3BRbeam";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__3brbeam.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3brbeam.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3brimage_radar=document.createElement('div');
		els=me.__3brimage_radar__img=document.createElement('img');
		els.className='ggskin ggskin__3brimage_radar';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABaCAYAAAAIJFAjAAADcklEQVR4nO2aLZdUMQxAb86BxaDBrAcDHgMKgQLDD0ChwYDCoDD7AzDgMWAwKDB4MOBRmFVrMEHMdqbT17R933Mg10xfm7R5nSZNOwPO/42EgsJRVK9pe4aSjEb1oRzLa0YvJ5frz3qO+471s/0K/OkYr3DZ6CBHzqCcIfGz9dLpOKl82pYbM9XN2REqz0L5QtJ2MRWegKwRE/abfrbYcBY37KFwhe4s5yi1WfLxmDX92tgU2k0dgd9xZbYDheOoPZ1ly8g+L2Qtd8vXLd1SH51PgV+pYuoCgSOj3hp4iEzJf1vjSa3fqn3mN6ZwvVvVFJlbXcP6dkurbDACP4x6G4WbBWMsPyxF7Ljc55NMuTbmtl7ge+flzrFcINC6K7S6wtYoykvVWuZWHBi801'+
			'SXlsKtIR3nuxq/lPsi8LXSXkfhzq5YdYFEtRg3WuRa+4jbAUTgc0FuI1QTiHq9S9sys/zekrUieTJ8r6xQBD412FqNATFxPKiloBZ9fXWuLHJvgGYUHgwYo0/WZrlYbrJNPYEPrcb1DkoKDxOjahHc8vlUPqebs7e0LarAu9Z3gX4uELhkGDeElm+7pDvajkHbksKjfHXzuaDQdVXPzBYF3vQdcPC+rPA4MaiW7VGog7q7lLZFBF4PeY8hLhDomyWW/Ns6U8zOqMxM4elUhoxB4GSE7jgUnjMsK6zVh7ZAZ9mfV75qMNNkktxc4cWu2Om/dMQtbml0XWHvWeDlKMMZFwNiSvFgMX8ewmSnM90sxaGHGGtnMHUFno2xN+pnOnQTjFrPCdapsuYyIvBkEoOZzgUCrXeJB8PkFxRqJyQt5/hc0NwLlLJLwCZhlhsahbe7'+
			'YjFLJNNOIrd9lnwKPoqpXSDQ9xemPjFiUma7o9Oex9KdWt4m2RzDJ2fWS0qF98YY1v1B3C6RwP1ZDGTmCQBQ+FgYs7rsBe7NYtg5c8WAmIPeGmdfAQAKX+wm8ygsArfntm2RCQDQ3Q8UtUuTIDTVDzJFlnCBQHCFgzocLbYCABS+tYwrcGMBc+qGzIHCTwpXYwLXlrRnSRcIhCzxIFxh8RUAoJu/quTO+Md5jflYZQIAdPNnpa0rCFxdy5bVUDhVOF3ThjViQMzqWeIhTMDqgdBxHMdxHMdxHMdxHMdxHMdxHMdxHMdxHMdxHMdxHMdxnH+PvzgsG4NYzC0lAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="3BRImage_radar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90px;';
		hs+='position : absolute;';
		hs+='right : -25px;';
		hs+='top : -43px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__3brimage_radar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3brimage_radar.ggUpdatePosition=function (useTransition) {
		}
		me.__3brbeam.appendChild(me.__3brimage_radar);
		el=me.__3brbeam_cover=document.createElement('div');
		el.ggId="3BRbeam cover";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : #aa5500;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 11px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__3brbeam_cover.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3brbeam_cover.ggUpdatePosition=function (useTransition) {
		}
		me.__3brbeam.appendChild(me.__3brbeam_cover);
		me.__3br_flrplan.appendChild(me.__3brbeam);
		me._floorplans.appendChild(me.__3br_flrplan);
		me._mask.appendChild(me._floorplans);
		me._floor_plan_bg.appendChild(me._mask);
		el=me._flrplanclose=document.createElement('div');
		els=me._flrplanclose__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG9wYWNpdHk9IjAuNCI+DQoJPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzDQoJCWMtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40'+
			'NjctMS4yMjQtMC40NjctMS42OTEsMC4wMDENCgkJYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMA0KCQlsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MQ0KCQljLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNj'+
			'c4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2DQoJCWMwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIy'+
			'LDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIvPg0KPC9nPg0KPGc+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzDQoJCWMtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40NjctMS4yMjQtMC40NjctMS42OTEsMC4wMDENCgkJYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuND'+
			'Y3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMA0KCQlsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MQ0KCQljLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNjc4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4'+
			'OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2DQoJCWMwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIyLDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIvPg0KPC9nPg0KPC9zdmc+DQo=';
		me._flrplanclose__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;flrplanclose;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._flrplanclose__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4NCgk8cGF0aCBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5Mw0KCQljLTAuNDY3'+
			'LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwDQoJCWMtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MkwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjYtMC40NjcsMS4yMjQsMCwxLjY5MWMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMQ0KCQlsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjENCgkJYy00Ljg4Mi'+
			'00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OGM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NywyOS43MjEsMTIuMDQzLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41OSwwLTUuMTcxLTAuOTg0LTcuMTQ2LTIuOTU5QzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNg0KCQljMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzUsMS45'+
			'NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OEMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6Ii8+DQo8L2c+DQo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MywxNmwzLjQzOS0zLjQ0DQoJCWMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5M2MtMC40NjctMC40NjctMS4yMjUtMC40NjctMS'+
			'42OTIsMC4wMDFsLTMuNDQsMy40NGwtMy40NDEtMy40NDENCgkJYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxDQoJCWMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMWwzLjQ0LTMuNDRsMy40NCwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNCwwLjQ2NywxLjY5MSwwDQoJCUMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjFjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0x'+
			'Ny42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk2LDAsMTcuNjc4DQoJCWM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTkNCgkJQzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNmMwLTIuNTkxLDAuOTgzLTUuMTcsMi45NTktNy4xNDdjMS45NzctMS45NzYsNC41NTYtMi45NTksNy4xNDgtMi45Ng0KCQljMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OWMxLjk3NSwxLjk3NywyLjk1Nyw0LjU1NiwyLjk1OS'+
			'w3LjE0N2MtMC4wMDEsMi41OTItMC45ODQsNS4xNy0yLjk2LDcuMTQ4DQoJCUMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._flrplanclose__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;flrplanclose;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="FlrPlanClose";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : -3px;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._flrplanclose.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._flrplanclose.onclick=function (e) {
			if (player.transitionsDisabled) {
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
		me._flrplanclose.onmouseover=function (e) {
			me._flrplanclose__img.style.visibility='hidden';
			me._flrplanclose__imgo.style.visibility='inherit';
		}
		me._flrplanclose.onmouseout=function (e) {
			me._flrplanclose__img.style.visibility='inherit';
			me._flrplanclose__imgo.style.visibility='hidden';
		}
		me._flrplanclose.ggUpdatePosition=function (useTransition) {
		}
		me._floor_plan_bg.appendChild(me._flrplanclose);
		me._floorplancontainer.appendChild(me._floor_plan_bg);
		me._container1.appendChild(me._floorplancontainer);
		me.divSkin.appendChild(me._container1);
		el=me._container4map=document.createElement('div');
		el.ggId="Container4Map";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 420px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 174px;';
		hs+='visibility : inherit;';
		hs+='width : 648px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container4map.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container4map.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width / player.getViewerSize().height > 1) && 
				(player.getViewerSize().width <= 736)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._container4map.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._container4map.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._container4map.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._container4map.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._container4map.style.top='5px';
					me._container4map.ggUpdatePosition(true);
				}
				else {
					me._container4map.ggDx=0;
					me._container4map.style.top='174px';
					me._container4map.ggUpdatePosition(true);
				}
			}
		}
		me._container4map.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width / player.getViewerSize().height < 1) && 
				(player.getViewerSize().width <= 320)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width / player.getViewerSize().height < 1) && 
				(player.getViewerSize().width <= 375)
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width / player.getViewerSize().height < 1) && 
				(player.getViewerSize().width <= 414)
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width / player.getViewerSize().height > 1) && 
				(player.getViewerSize().width <= 568)
			)
			{
				newLogicStateScaling = 3;
			}
			else if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width / player.getViewerSize().height > 1) && 
				(player.getViewerSize().width <= 667)
			)
			{
				newLogicStateScaling = 4;
			}
			else if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width / player.getViewerSize().height > 1) && 
				(player.getViewerSize().width <= 736)
			)
			{
				newLogicStateScaling = 5;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._container4map.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._container4map.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._container4map.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._container4map.ggCurrentLogicStateScaling == 0) {
					me._container4map.ggParameter.sx = 0.45;
					me._container4map.ggParameter.sy = 0.45;
					me._container4map.style[domTransform]=parameterToTransform(me._container4map.ggParameter);
				}
				else if (me._container4map.ggCurrentLogicStateScaling == 1) {
					me._container4map.ggParameter.sx = 0.5;
					me._container4map.ggParameter.sy = 0.5;
					me._container4map.style[domTransform]=parameterToTransform(me._container4map.ggParameter);
				}
				else if (me._container4map.ggCurrentLogicStateScaling == 2) {
					me._container4map.ggParameter.sx = 0.6;
					me._container4map.ggParameter.sy = 0.6;
					me._container4map.style[domTransform]=parameterToTransform(me._container4map.ggParameter);
				}
				else if (me._container4map.ggCurrentLogicStateScaling == 3) {
					me._container4map.ggParameter.sx = 0.55;
					me._container4map.ggParameter.sy = 0.55;
					me._container4map.style[domTransform]=parameterToTransform(me._container4map.ggParameter);
				}
				else if (me._container4map.ggCurrentLogicStateScaling == 4) {
					me._container4map.ggParameter.sx = 0.65;
					me._container4map.ggParameter.sy = 0.65;
					me._container4map.style[domTransform]=parameterToTransform(me._container4map.ggParameter);
				}
				else if (me._container4map.ggCurrentLogicStateScaling == 5) {
					me._container4map.ggParameter.sx = 0.7;
					me._container4map.ggParameter.sy = 0.7;
					me._container4map.style[domTransform]=parameterToTransform(me._container4map.ggParameter);
				}
				else {
					me._container4map.ggParameter.sx = 1;
					me._container4map.ggParameter.sy = 1;
					me._container4map.style[domTransform]=parameterToTransform(me._container4map.ggParameter);
				}
			}
		}
		me._container4map.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._maprect=document.createElement('div');
		el.ggId="MapRect";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 419px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 647px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._maprect.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._maprect.logicBlock_scaling = function() {
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
		}
		me._maprect.logicBlock_visible = function() {
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
		me._maprect.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggId="Map 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 409px;';
		hs+='left : 3px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 637px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_1.ggUpdateConditionTimer=function () {
			me._map_1.ggRadar.update();
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
		}
		me._map_1.ggNodeChange=function () {
			if (me._map_1.ggLastActivMarker) {
				if (me._map_1.ggLastActivMarker._div.ggDeactivate) me._map_1.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me._map_1.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me._map_1.ggLastActivMarker=marker;
			}
			if (player.getMapType(me._map_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1.ggChangeMap(mapId);
					}
				}
			}
			me._map_1.ggLastNodeId = id;
		}
		me._maprect.appendChild(me._map_1);
		el=me._map_close=document.createElement('div');
		els=me._map_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG9wYWNpdHk9IjAuNCI+DQoJPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzDQoJCWMtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40'+
			'NjctMS4yMjQtMC40NjctMS42OTEsMC4wMDENCgkJYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMA0KCQlsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MQ0KCQljLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNj'+
			'c4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2DQoJCWMwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIy'+
			'LDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIvPg0KPC9nPg0KPGc+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzDQoJCWMtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40NjctMS4yMjQtMC40NjctMS42OTEsMC4wMDENCgkJYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuND'+
			'Y3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMA0KCQlsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MQ0KCQljLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNjc4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4'+
			'OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2DQoJCWMwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIyLDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIvPg0KPC9nPg0KPC9zdmc+DQo=';
		me._map_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;map_close;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._map_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4NCgk8cGF0aCBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5Mw0KCQljLTAuNDY3'+
			'LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwDQoJCWMtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MkwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjYtMC40NjcsMS4yMjQsMCwxLjY5MWMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMQ0KCQlsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjENCgkJYy00Ljg4Mi'+
			'00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OGM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NywyOS43MjEsMTIuMDQzLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41OSwwLTUuMTcxLTAuOTg0LTcuMTQ2LTIuOTU5QzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNg0KCQljMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzUsMS45'+
			'NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OEMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6Ii8+DQo8L2c+DQo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MywxNmwzLjQzOS0zLjQ0DQoJCWMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5M2MtMC40NjctMC40NjctMS4yMjUtMC40NjctMS'+
			'42OTIsMC4wMDFsLTMuNDQsMy40NGwtMy40NDEtMy40NDENCgkJYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxDQoJCWMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMWwzLjQ0LTMuNDRsMy40NCwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNCwwLjQ2NywxLjY5MSwwDQoJCUMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjFjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0x'+
			'Ny42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk2LDAsMTcuNjc4DQoJCWM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTkNCgkJQzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNmMwLTIuNTkxLDAuOTgzLTUuMTcsMi45NTktNy4xNDdjMS45NzctMS45NzYsNC41NTYtMi45NTksNy4xNDgtMi45Ng0KCQljMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OWMxLjk3NSwxLjk3NywyLjk1Nyw0LjU1NiwyLjk1OS'+
			'w3LjE0N2MtMC4wMDEsMi41OTItMC45ODQsNS4xNy0yLjk2LDcuMTQ4DQoJCUMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._map_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;map_close;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Map_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 609px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_close.onclick=function (e) {
			if (player.transitionsDisabled) {
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
		me._map_close.onmouseover=function (e) {
			me._map_close__img.style.visibility='hidden';
			me._map_close__imgo.style.visibility='inherit';
		}
		me._map_close.onmouseout=function (e) {
			me._map_close__img.style.visibility='inherit';
			me._map_close__imgo.style.visibility='hidden';
		}
		me._map_close.ggUpdatePosition=function (useTransition) {
		}
		me._maprect.appendChild(me._map_close);
		me._container4map.appendChild(me._maprect);
		me.divSkin.appendChild(me._container4map);
		el=me._container4mdle=document.createElement('div');
		el.ggId="Container4Mdle";
		el.ggDx=1.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 477px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 120px;';
		hs+='visibility : inherit;';
		hs+='width : 649px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		me._container4mdle.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container4mdle.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width <= 736)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._container4mdle.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._container4mdle.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._container4mdle.style[domTransition]='' + cssPrefix + 'transform 0s';
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
		me._container4mdle.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._hekpkahon=document.createElement('div');
		el.ggId="HekpKahon";
		el.ggDx=-1.5;
		el.ggDy=28.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 427px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 453px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hekpkahon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hekpkahon.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width / player.getViewerSize().height > 1) && 
				(player.getViewerSize().height <= 414)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._hekpkahon.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._hekpkahon.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._hekpkahon.style[domTransition]='left 0s, top 0s';
				if (me._hekpkahon.ggCurrentLogicStatePosition == 0) {
					this.ggDx = -2;
					this.ggDy = -125;
					me._hekpkahon.ggUpdatePosition(true);
				}
				else {
					me._hekpkahon.ggDx=-1.5;
					me._hekpkahon.ggDy=28.5;
					me._hekpkahon.ggUpdatePosition(true);
				}
			}
		}
		me._hekpkahon.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._kahondaga=document.createElement('div');
		el.ggId="KahonDaga";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 427px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 453px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._kahondaga.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._kahondaga.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getIsMobile() == false)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._kahondaga.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._kahondaga.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._kahondaga.style[domTransition]='' + cssPrefix + 'transform 0s';
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
		me._kahondaga.ggUpdatePosition=function (useTransition) {
		}
		el=me._tint=document.createElement('div');
		el.ggId="Tint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tint.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tint.ggUpdatePosition=function (useTransition) {
		}
		el=me._trapclose=document.createElement('div');
		els=me._trapclose__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG9wYWNpdHk9IjAuNCI+DQoJPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzDQoJCWMtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40'+
			'NjctMS4yMjQtMC40NjctMS42OTEsMC4wMDENCgkJYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMA0KCQlsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MQ0KCQljLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNj'+
			'c4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2DQoJCWMwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIy'+
			'LDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIvPg0KPC9nPg0KPGc+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzDQoJCWMtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40NjctMS4yMjQtMC40NjctMS42OTEsMC4wMDENCgkJYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuND'+
			'Y3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMA0KCQlsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MQ0KCQljLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNjc4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4'+
			'OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2DQoJCWMwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIyLDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIvPg0KPC9nPg0KPC9zdmc+DQo=';
		me._trapclose__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;trapclose;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._trapclose__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4NCgk8cGF0aCBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5Mw0KCQljLTAuNDY3'+
			'LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwDQoJCWMtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MkwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjYtMC40NjcsMS4yMjQsMCwxLjY5MWMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMQ0KCQlsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjENCgkJYy00Ljg4Mi'+
			'00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OGM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NywyOS43MjEsMTIuMDQzLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41OSwwLTUuMTcxLTAuOTg0LTcuMTQ2LTIuOTU5QzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNg0KCQljMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzUsMS45'+
			'NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OEMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6Ii8+DQo8L2c+DQo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MywxNmwzLjQzOS0zLjQ0DQoJCWMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5M2MtMC40NjctMC40NjctMS4yMjUtMC40NjctMS'+
			'42OTIsMC4wMDFsLTMuNDQsMy40NGwtMy40NDEtMy40NDENCgkJYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxDQoJCWMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMWwzLjQ0LTMuNDRsMy40NCwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNCwwLjQ2NywxLjY5MSwwDQoJCUMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjFjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0x'+
			'Ny42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk2LDAsMTcuNjc4DQoJCWM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTkNCgkJQzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNmMwLTIuNTkxLDAuOTgzLTUuMTcsMi45NTktNy4xNDdjMS45NzctMS45NzYsNC41NTYtMi45NTksNy4xNDgtMi45Ng0KCQljMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OWMxLjk3NSwxLjk3NywyLjk1Nyw0LjU1NiwyLjk1OS'+
			'w3LjE0N2MtMC4wMDEsMi41OTItMC45ODQsNS4xNy0yLjk2LDcuMTQ4DQoJCUMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._trapclose__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;trapclose;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="TrapClose";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._trapclose.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._trapclose.onclick=function (e) {
			var flag=me._hekpkahon.ggScaleActive;
			if (player.transitionsDisabled) {
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
		me._trapclose.onmouseover=function (e) {
			me._trapclose__img.style.visibility='hidden';
			me._trapclose__imgo.style.visibility='inherit';
		}
		me._trapclose.onmouseout=function (e) {
			me._trapclose__img.style.visibility='inherit';
			me._trapclose__imgo.style.visibility='hidden';
		}
		me._trapclose.ggUpdatePosition=function (useTransition) {
		}
		me._tint.appendChild(me._trapclose);
		me._kahondaga.appendChild(me._tint);
		el=me._flrplanbtn=document.createElement('div');
		els=me._flrplanbtn__img=document.createElement('img');
		els.className='ggskin ggskin_flrplanbtn';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAC2ElEQVR4nO2dUVrEIAyE6X5e3St5FY+DD+tqywINkIEA87+pKyTTNECXhsN7NxEva49jrB1yDjsCa1ti4yIMFrhn72MEHyCwhXumn9idBLYgagqs2GCBLQt7BifyA9UweQKK4JZWW6NpZN+RFvUFLm0RPeDUeKhnk6LAJS2NnKP2tVNJYEkrNib+/0g9b7O7UeA+RuLA298g8IxRmwLnS+U0bSVxnZPZWheKFRF89x8zCRtD17/CCF5dXOfufSgLyYII3kHckJzPMn+5VAYjFHjH6HUu75fs3hemiNSnYgbM8gQtRalP+eASRHCJuKtS7+uNwLNHYw+8z+lUOcjtFL0v6nz+SP9JIzWgLkTMttq+Sp+upT7vfcwGTtNUeRc/InAup+yYGkKgS2VSSi'+
			'Bw+9JwD+QLEEYwGAoMRigw08M7sjTxiP2S6JFZaPQkvLg1d4zNAVqQIpge0txrw0EOxvOOepx/IPoYycGlzJO2mCLA3Ag8T6SM4zhyOjGCwVBgMOBBjrMTRjAYCgzFe3CKkM5C1k0ljGAox0GBwVBgMDc5OL6Zwg4WcnfeBkYwGAoMhgKDMfI82HKeb+NX4NyuQctoXBis3w073Inkm2zmYDB/An9+fY+0Y1mCt4w0Nm+c25hh8Krd9CLTiikCTCBw+4t3eyDXghEMhgKrc80CyuUMdqBMg8hS+XUFNMTsdUF0azxo2lGRInaO4nLfMwJzRnGlrqQD96aBEdSLsLk1vy/1GjQW5JB1MjdtAab0GteqObndL8WFxkoi54tsPGHVKRMUCIwrP2gL3bKRgNKK5UbYAONXRYpYccckLmjA5W3/ujEazXgfGga5kg4tRnOf'+
			'AOlYYvzS7SQ13J0bXGI8ZGzF/zhjj30wcMxDyMhzNDT6D1rDZUeLefeOKQ4qOTOLyDzLaFo2P+4MP5sZdCLiaMGXO7AvhZVvnYE9j46lK1rW2FmaGxN4PX4AW44UfjzRTKEAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="FlrPlanBtn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 27px;';
		hs+='left : 134px;';
		hs+='position : absolute;';
		hs+='top : 358px;';
		hs+='visibility : inherit;';
		hs+='width : 29px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._flrplanbtn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._flrplanbtn.ggUpdatePosition=function (useTransition) {
		}
		el=me._fptxt=document.createElement('div');
		els=me._fptxt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="FPTxt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 182px;';
		hs+='height: 38px;';
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
		els.setAttribute('style',hs);
		els.innerHTML="Show or hide Floor Plan<br\/> when viewing model units";
		el.appendChild(els);
		me._fptxt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fptxt.ggUpdatePosition=function (useTransition) {
		}
		me._flrplanbtn.appendChild(me._fptxt);
		me._kahondaga.appendChild(me._flrplanbtn);
		el=me._thumbnailbtn=document.createElement('div');
		els=me._thumbnailbtn__img=document.createElement('img');
		els.className='ggskin ggskin_thumbnailbtn';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADdklEQVRYhc1XMXOjPBB93KQQHXSo5DroRPddyXX2P0ib+1mkJB0l6Uxpd1IHHS6VDnVWt1fkpBgH52xf5u57M5qJg9A+dvftrgIQ/im+/FvzwN2lG8f9SEopTNMEAIjjGADAGIMxBgBwOBwQxzGyLEOe5cEl5wa/C4EzbK2FEAKcc0RRtLjXGAOtNYZhAAAIIfA1/fohkQ8JbHdb0lojyzJkWTYzZK3FNE1gjCEMQwBAkiR+zzAMUEohTVN8++/bWRJnCbTPLVlrUZal/2KlFKSUAM6HoCgKCCE80a7rwBjDerVeJLFIoH1uiTGGsiwBAPv9Hl3XgXN+9qDjd7XWWK/X3iNd18Fae+Zdmq/tdktN05CDlJKqqqLTfb9bVVWRlNKf0zQNbbfb9+cc/x'+
			'jHkZqmoWmavPG6rq827lZd157ENE1U1zWN40hnCTRNQ33fExGR1vrdl0spSUpJfd+TlPIiYpvNhrTWRETU9z01TTN7z+fAuB9pt9vh/v4eAPD4+IgfDz98zDbdZjFdv5ffg37oSWsNALDWgjHmnwFA9VjRw8MDAODp6QlCCF8nfCFSSvnsVUqBc+6NSCVpwuST0qHrOv/30jOpJBWiCDjn/nwhBPb7PfBL1b4UT9PkjUopZxnLGIO1dskBF2G9WgdOvpxzOG/NCABAFEVe06dwbj3GtaSMMe+q6B3wK/7hzh/qKptDnuXBRm/o2OWnpJzWj/9XiMJ7MQxDTziOY/RDT3mWB3enzFx5PYVLqCXkWR4gO/f0FVEUYZomJEkyC+n/ox0fM4rjeDG2pzK01iJNU+RZPpPhMY69Zozx/cMYgzRN3wjkWR5U24ocmcPhMDvo'+
			'nAxd2wU+liHw2qhcaA+Hg68DsxAsZakj9ScydFhSmSdwrM+iKNA+t97lp9l9LdrnloqiAABorWdFzlfCNE0xDAOyLIMQwvd94FVOm+69DF1MgXlVdISd+7XWWK1WAOBtvOGKZnTLatuWxnE824xmOSCEgFIKxhgkSYKiKFA9VjcP7vVTTZxzpGkKYwyGYfD9ZtEDbiBp2/avDSQXjWQvLy9o2/aqkawsS6/1j0aym4fSMAwRRRGstV6inzaUOlwylgOvamCMzWrIH4/lDrdeTJz3eMJvv5gsETn9amcYeLuaXXIjuprAKfqhJxd7xtjFd8FPI/BZ+AmCZRaTGAKeWgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ThumbnailBtn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 132px;';
		hs+='position : absolute;';
		hs+='top : 319px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnailbtn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnailbtn.ggUpdatePosition=function (useTransition) {
		}
		el=me._tntxxt=document.createElement('div');
		els=me._tntxxt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TNTxxt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 44px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 162px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 164px;';
		hs+='height: 20px;';
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
		els.setAttribute('style',hs);
		els.innerHTML="Show or hide thumbnail";
		el.appendChild(els);
		me._tntxxt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tntxxt.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnailbtn.appendChild(me._tntxxt);
		me._kahondaga.appendChild(me._thumbnailbtn);
		el=me._googlemap=document.createElement('div');
		els=me._googlemap__img=document.createElement('img');
		els.className='ggskin ggskin_googlemap';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEvUlEQVRYhe2XQUzbZhiGfzKHxA6xlbnFtGGjoSkBlroiMBJok7mgbVq0MKKpSDtwmUQkLlw4cuhtl0lwaMWth61SLkiFVOoBaZ0YJIFCOHjUAZKshioKLCUssgk0ju3ssJKxFlhQ0u3S52bZv99Hv199tgF4x/9MxWknb9269V4ikSByuVydKIr1MAxrRVH0PnnyhCuXAHT0gKIoKJfLVQuCcEkQhMuSJH1MUdTVhoaGumQymZ2dnf1Zr9ffFwThHoZhszMzM+myCDgcDkMmk+nAcbzTZDKZGxsbPyRJkqitrUVQFAVKpRJ4vd4NnU6nu337dk84HL7u8/n8HMf9oFKpfpmfn98tNpCiKLUsyxdkWZb8fv9zCAAAeJ6/PDQ09L3L5bp4GHgSCIKArq'+
			'4u3Gq1frW4uHjj4cOHgVwu9yMMw7Nzc3MvTgrkef4yBEFXjEbjdbVaXR0Khb4DAPwlIMuygiAICMfxordOo9GAmzdv4lartScUCt2YmpoKZjKZ+yiKLoqiqMhkMvWVlZUNRqPxusFgMJnNZr3ZbD6H4zgUCASSfr9fWXgEpYAgCHA4HO+3tbV9GQgE7OPj4/cMBgNJUZT5MBBFUVBRcXzfFaUKHBVpb2/HMAy72NbWZuzp6ampr6+HMAw7MbysAkfIn+XityFwJooS4Hke8DyvkCRJIYpiWQWOLSHP8yCdTssMw6Romk6wLBsNh8MrEATt3blzp9btdluam5thCCq5w38L7O7u5qenp1/QNL3Fsmx0aWkpqtPp1C0tLY0tLS1X6+rqGkOh0GwqldobGBgYdTqdlNvttjQ1NcGnzY3jEASh0EoIAAC0Wi0+NjY2jmGY'+
			'zmKxmEiSNPf3939qNBpRFEWBWq0GXq93Y319XTcyMvJ5JBKx+Xy+4KFIb2+vpbm5GT4pMJvNAo7jAMuyezRNb62srDAIgtQUBPb393cHBwe/dblcdSiKAhg+8V4AhmFgt9ux1tbWL5aXlzt9Pl/Q4/GMOp1Oqru7uxUAACRJAqlUCsTj8QOaprfX1tZYmqbX4vH4H+3t7VdgGD4nSVK8ICBJUl6v18MEQRS9jQiCvCEyPDw8imHYy8ePHysnJyd/isViWyRJXjKZTI0ej8dNkuR5HMchv9+fnJubgwoCpXBUZGFhofPu3bv3tFot7HQ6rdeuXSMIgqg8bRiVXuMjIhaLBUNR9ILNZvuor6/vg2LWvZVBdNro/U8EzkLRAvn8mUZ86QKyLIN0Og2i0ajo8/kSy8vLEY7j4vPz86lMJlM2gUIJ8/k8SKfTYGdnR3z69G'+
			'mSYZgEy7KrDMMEs9lsVKPRsAqFIj8yMrLU0dHxTW9vr8Nms+EajaZ0ARiGhUePHtEPHjzYZhgmKAhCpKqqilUoFFsLCwsvX1vDvvoO/OSsIoIgAI7jQDKZFCsqKuSCAARBz8LhsAcAsH1M4BsEg8EkAGDidZGmpqZ/fNMdBr6aiL/HYrHN1dXVlc3NzaBWq30GwL/8FxRLZ2dntSAIDovF0r+zs/PcarV+RhBEZSwW24xEIr+ur68vqlSq35RK5aZSqUzOzMwU3ullETjEbrefl2X564ODAx6CoGcqlWqjpqYmOTExIZUz5x1l5U9ybh0CVeYJJgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="GoogleMap";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 132px;';
		hs+='position : absolute;';
		hs+='top : 284px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._googlemap.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._googlemap.ggUpdatePosition=function (useTransition) {
		}
		el=me._ggletxt=document.createElement('div');
		els=me._ggletxt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="GgleTxt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 39px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 181px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 183px;';
		hs+='height: 21px;';
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
		els.setAttribute('style',hs);
		els.innerHTML="Show or hide Google Map";
		el.appendChild(els);
		me._ggletxt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ggletxt.ggUpdatePosition=function (useTransition) {
		}
		me._googlemap.appendChild(me._ggletxt);
		me._kahondaga.appendChild(me._googlemap);
		el=me._keyboard=document.createElement('div');
		els=me._keyboard__img=document.createElement('img');
		els.className='ggskin ggskin_keyboard';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Keyboard";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 137px;';
		hs+='position : absolute;';
		hs+='top : 177px;';
		hs+='visibility : inherit;';
		hs+='width : 209px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._keyboard.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._keyboard.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_4=document.createElement('div');
		els=me._text_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 55px;';
		hs+='left : -89px;';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : inherit;';
		hs+='width : 381px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 383px;';
		hs+='height: 57px;';
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
		els.setAttribute('style',hs);
		els.innerHTML="use the right, left, up or down key to navigate around<br\/>use the minus or plus key to zoom in or out ";
		el.appendChild(els);
		me._text_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4.ggUpdatePosition=function (useTransition) {
		}
		me._keyboard.appendChild(me._text_4);
		me._kahondaga.appendChild(me._keyboard);
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 187px;';
		hs+='position : absolute;';
		hs+='top : 156px;';
		hs+='visibility : inherit;';
		hs+='width : 99px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 101px;';
		hs+='height: 21px;';
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
		els.setAttribute('style',hs);
		els.innerHTML="OR";
		el.appendChild(els);
		me._text_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3.ggUpdatePosition=function (useTransition) {
		}
		me._kahondaga.appendChild(me._text_3);
		el=me._daga=document.createElement('div');
		els=me._daga__img=document.createElement('img');
		els.className='ggskin ggskin_daga';
		hs=basePath + 'images/daga.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Daga";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 60px;';
		hs+='left : 183px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 84px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._daga.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._daga.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 44px;';
		hs+='left : -127px;';
		hs+='position : absolute;';
		hs+='top : 77px;';
		hs+='visibility : inherit;';
		hs+='width : 347px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 347px;';
		hs+='height: 44px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Hold the left mouse button, drag to move around<br\/>Use the mouse wheel to zoom in our out";
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me._daga.appendChild(me._text_2);
		me._kahondaga.appendChild(me._daga);
		me._hekpkahon.appendChild(me._kahondaga);
		el=me._kahonmobile=document.createElement('div');
		el.ggId="KahonMobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 387px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 399px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._kahonmobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._kahonmobile.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._kahonmobile.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._kahonmobile.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._kahonmobile.style[domTransition]='' + cssPrefix + 'transform 0s';
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
		me._kahonmobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._pointtint=document.createElement('div');
		el.ggId="PointTint";
		el.ggDy=0.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(145,145,145,0.960784);';
		hs+='border : 3px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 378px;';
		hs+='left : 1.63406%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 385px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._pointtint.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pointtint.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getViewerSize().width < 960) || 
				(player.getIsMobile() == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._pointtint.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._pointtint.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._pointtint.style[domTransition]='' + cssPrefix + 'transform 0s';
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
		me._pointtint.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._helpbox_close=document.createElement('div');
		els=me._helpbox_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG9wYWNpdHk9IjAuNCI+DQoJPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzDQoJCWMtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40'+
			'NjctMS4yMjQtMC40NjctMS42OTEsMC4wMDENCgkJYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMA0KCQlsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MQ0KCQljLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNj'+
			'c4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2DQoJCWMwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIy'+
			'LDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIvPg0KPC9nPg0KPGc+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzDQoJCWMtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40NjctMS4yMjQtMC40NjctMS42OTEsMC4wMDENCgkJYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuND'+
			'Y3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMA0KCQlsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MQ0KCQljLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNjc4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4'+
			'OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2DQoJCWMwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIyLDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIvPg0KPC9nPg0KPC9zdmc+DQo=';
		me._helpbox_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;helpbox_close;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._helpbox_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4NCgk8cGF0aCBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5Mw0KCQljLTAuNDY3'+
			'LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwDQoJCWMtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MkwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjYtMC40NjcsMS4yMjQsMCwxLjY5MWMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMQ0KCQlsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjENCgkJYy00Ljg4Mi'+
			'00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OGM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NywyOS43MjEsMTIuMDQzLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41OSwwLTUuMTcxLTAuOTg0LTcuMTQ2LTIuOTU5QzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNg0KCQljMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzUsMS45'+
			'NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OEMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6Ii8+DQo8L2c+DQo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MywxNmwzLjQzOS0zLjQ0DQoJCWMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5M2MtMC40NjctMC40NjctMS4yMjUtMC40NjctMS'+
			'42OTIsMC4wMDFsLTMuNDQsMy40NGwtMy40NDEtMy40NDENCgkJYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxDQoJCWMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMWwzLjQ0LTMuNDRsMy40NCwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNCwwLjQ2NywxLjY5MSwwDQoJCUMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjFjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0x'+
			'Ny42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk2LDAsMTcuNjc4DQoJCWM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTkNCgkJQzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNmMwLTIuNTkxLDAuOTgzLTUuMTcsMi45NTktNy4xNDdjMS45NzctMS45NzYsNC41NTYtMi45NTksNy4xNDgtMi45Ng0KCQljMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OWMxLjk3NSwxLjk3NywyLjk1Nyw0LjU1NiwyLjk1OS'+
			'w3LjE0N2MtMC4wMDEsMi41OTItMC45ODQsNS4xNy0yLjk2LDcuMTQ4DQoJCUMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._helpbox_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;helpbox_close;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="HelpBox_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : -1px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._helpbox_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._helpbox_close.onclick=function (e) {
			var flag=me._hekpkahon.ggScaleActive;
			if (player.transitionsDisabled) {
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
		me._helpbox_close.onmouseover=function (e) {
			me._helpbox_close__img.style.visibility='hidden';
			me._helpbox_close__imgo.style.visibility='inherit';
		}
		me._helpbox_close.onmouseout=function (e) {
			me._helpbox_close__img.style.visibility='inherit';
			me._helpbox_close__imgo.style.visibility='hidden';
		}
		me._helpbox_close.ggUpdatePosition=function (useTransition) {
		}
		me._pointtint.appendChild(me._helpbox_close);
		me._kahonmobile.appendChild(me._pointtint);
		el=me._text_5=document.createElement('div');
		els=me._text_5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 96px;';
		hs+='position : absolute;';
		hs+='top : 94px;';
		hs+='visibility : inherit;';
		hs+='width : 222px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 224px;';
		hs+='height: 27px;';
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
		els.setAttribute('style',hs);
		els.innerHTML="Pinch in or out to zoom in or out";
		el.appendChild(els);
		me._text_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_5.ggUpdatePosition=function (useTransition) {
		}
		me._kahonmobile.appendChild(me._text_5);
		el=me._finger1=document.createElement('div');
		els=me._finger1__img=document.createElement('img');
		els.className='ggskin ggskin_finger1';
		hs='data:image/png;base64,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'+
			'twAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Finger1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 58px;';
		hs+='left : 131px;';
		hs+='position : absolute;';
		hs+='top : 29px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._finger1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._finger1.ggUpdatePosition=function (useTransition) {
		}
		me._kahonmobile.appendChild(me._finger1);
		el=me._finger2=document.createElement('div');
		els=me._finger2__img=document.createElement('img');
		els.className='ggskin ggskin_finger2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Finger2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 58px;';
		hs+='left : 196px;';
		hs+='position : absolute;';
		hs+='top : 27px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._finger2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._finger2.ggUpdatePosition=function (useTransition) {
		}
		me._kahonmobile.appendChild(me._finger2);
		el=me._text_6=document.createElement('div');
		els=me._text_6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 41px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 191px;';
		hs+='visibility : inherit;';
		hs+='width : 380px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 382px;';
		hs+='height: 43px;';
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
		els.setAttribute('style',hs);
		els.innerHTML="Swipe to move left, right, up or down<br\/>Tap, hold or drag to choose pano image or move around";
		el.appendChild(els);
		me._text_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_6.ggUpdatePosition=function (useTransition) {
		}
		me._kahonmobile.appendChild(me._text_6);
		el=me._finger3=document.createElement('div');
		els=me._finger3__img=document.createElement('img');
		els.className='ggskin ggskin_finger3';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Finger3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 58px;';
		hs+='left : 142px;';
		hs+='position : absolute;';
		hs+='top : 127px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._finger3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._finger3.ggUpdatePosition=function (useTransition) {
		}
		me._kahonmobile.appendChild(me._finger3);
		el=me._finger4=document.createElement('div');
		els=me._finger4__img=document.createElement('img');
		els.className='ggskin ggskin_finger4';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Finger4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 65px;';
		hs+='left : 204px;';
		hs+='position : absolute;';
		hs+='top : 117px;';
		hs+='visibility : inherit;';
		hs+='width : 53px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._finger4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._finger4.ggUpdatePosition=function (useTransition) {
		}
		me._kahonmobile.appendChild(me._finger4);
		el=me._gmap2=document.createElement('div');
		els=me._gmap2__img=document.createElement('img');
		els.className='ggskin ggskin_gmap2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEvUlEQVRYhe2XQUzbZhiGfzKHxA6xlbnFtGGjoSkBlroiMBJok7mgbVq0MKKpSDtwmUQkLlw4cuhtl0lwaMWth61SLkiFVOoBaZ0YJIFCOHjUAZKshioKLCUssgk0ju3ssJKxFlhQ0u3S52bZv99Hv199tgF4x/9MxWknb9269V4ikSByuVydKIr1MAxrRVH0PnnyhCuXAHT0gKIoKJfLVQuCcEkQhMuSJH1MUdTVhoaGumQymZ2dnf1Zr9ffFwThHoZhszMzM+myCDgcDkMmk+nAcbzTZDKZGxsbPyRJkqitrUVQFAVKpRJ4vd4NnU6nu337dk84HL7u8/n8HMf9oFKpfpmfn98tNpCiKLUsyxdkWZb8fv9zCAAAeJ6/PDQ09L3L5bp4GHgSCIKArq'+
			'4u3Gq1frW4uHjj4cOHgVwu9yMMw7Nzc3MvTgrkef4yBEFXjEbjdbVaXR0Khb4DAPwlIMuygiAICMfxordOo9GAmzdv4lartScUCt2YmpoKZjKZ+yiKLoqiqMhkMvWVlZUNRqPxusFgMJnNZr3ZbD6H4zgUCASSfr9fWXgEpYAgCHA4HO+3tbV9GQgE7OPj4/cMBgNJUZT5MBBFUVBRcXzfFaUKHBVpb2/HMAy72NbWZuzp6ampr6+HMAw7MbysAkfIn+XityFwJooS4Hke8DyvkCRJIYpiWQWOLSHP8yCdTssMw6Romk6wLBsNh8MrEATt3blzp9btdluam5thCCq5w38L7O7u5qenp1/QNL3Fsmx0aWkpqtPp1C0tLY0tLS1X6+rqGkOh0GwqldobGBgYdTqdlNvttjQ1NcGnzY3jEASh0EoIAAC0Wi0+NjY2jmGY'+
			'zmKxmEiSNPf3939qNBpRFEWBWq0GXq93Y319XTcyMvJ5JBKx+Xy+4KFIb2+vpbm5GT4pMJvNAo7jAMuyezRNb62srDAIgtQUBPb393cHBwe/dblcdSiKAhg+8V4AhmFgt9ux1tbWL5aXlzt9Pl/Q4/GMOp1Oqru7uxUAACRJAqlUCsTj8QOaprfX1tZYmqbX4vH4H+3t7VdgGD4nSVK8ICBJUl6v18MEQRS9jQiCvCEyPDw8imHYy8ePHysnJyd/isViWyRJXjKZTI0ej8dNkuR5HMchv9+fnJubgwoCpXBUZGFhofPu3bv3tFot7HQ6rdeuXSMIgqg8bRiVXuMjIhaLBUNR9ILNZvuor6/vg2LWvZVBdNro/U8EzkLRAvn8mUZ86QKyLIN0Og2i0ajo8/kSy8vLEY7j4vPz86lMJlM2gUIJ8/k8SKfTYGdnR3z69G'+
			'mSYZgEy7KrDMMEs9lsVKPRsAqFIj8yMrLU0dHxTW9vr8Nms+EajaZ0ARiGhUePHtEPHjzYZhgmKAhCpKqqilUoFFsLCwsvX1vDvvoO/OSsIoIgAI7jQDKZFCsqKuSCAARBz8LhsAcAsH1M4BsEg8EkAGDidZGmpqZ/fNMdBr6aiL/HYrHN1dXVlc3NzaBWq30GwL/8FxRLZ2dntSAIDovF0r+zs/PcarV+RhBEZSwW24xEIr+ur68vqlSq35RK5aZSqUzOzMwU3ullETjEbrefl2X564ODAx6CoGcqlWqjpqYmOTExIZUz5x1l5U9ybh0CVeYJJgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Gmap2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 87px;';
		hs+='position : absolute;';
		hs+='top : 243px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gmap2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gmap2.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_7=document.createElement('div');
		els=me._text_7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 38px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 192px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 194px;';
		hs+='height: 21px;';
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
		els.setAttribute('style',hs);
		els.innerHTML="Show or hide Google Map";
		el.appendChild(els);
		me._text_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_7.ggUpdatePosition=function (useTransition) {
		}
		me._gmap2.appendChild(me._text_7);
		me._kahonmobile.appendChild(me._gmap2);
		el=me._tn2=document.createElement('div');
		els=me._tn2__img=document.createElement('img');
		els.className='ggskin ggskin_tn2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADdklEQVRYhc1XMXOjPBB93KQQHXSo5DroRPddyXX2P0ib+1mkJB0l6Uxpd1IHHS6VDnVWt1fkpBgH52xf5u57M5qJg9A+dvftrgIQ/im+/FvzwN2lG8f9SEopTNMEAIjjGADAGIMxBgBwOBwQxzGyLEOe5cEl5wa/C4EzbK2FEAKcc0RRtLjXGAOtNYZhAAAIIfA1/fohkQ8JbHdb0lojyzJkWTYzZK3FNE1gjCEMQwBAkiR+zzAMUEohTVN8++/bWRJnCbTPLVlrUZal/2KlFKSUAM6HoCgKCCE80a7rwBjDerVeJLFIoH1uiTGGsiwBAPv9Hl3XgXN+9qDjd7XWWK/X3iNd18Fae+Zdmq/tdktN05CDlJKqqqLTfb9bVVWRlNKf0zQNbbfb9+cc/x'+
			'jHkZqmoWmavPG6rq827lZd157ENE1U1zWN40hnCTRNQ33fExGR1vrdl0spSUpJfd+TlPIiYpvNhrTWRETU9z01TTN7z+fAuB9pt9vh/v4eAPD4+IgfDz98zDbdZjFdv5ffg37oSWsNALDWgjHmnwFA9VjRw8MDAODp6QlCCF8nfCFSSvnsVUqBc+6NSCVpwuST0qHrOv/30jOpJBWiCDjn/nwhBPb7PfBL1b4UT9PkjUopZxnLGIO1dskBF2G9WgdOvpxzOG/NCABAFEVe06dwbj3GtaSMMe+q6B3wK/7hzh/qKptDnuXBRm/o2OWnpJzWj/9XiMJ7MQxDTziOY/RDT3mWB3enzFx5PYVLqCXkWR4gO/f0FVEUYZomJEkyC+n/ox0fM4rjeDG2pzK01iJNU+RZPpPhMY69Zozx/cMYgzRN3wjkWR5U24ocmcPhMDvo'+
			'nAxd2wU+liHw2qhcaA+Hg68DsxAsZakj9ScydFhSmSdwrM+iKNA+t97lp9l9LdrnloqiAABorWdFzlfCNE0xDAOyLIMQwvd94FVOm+69DF1MgXlVdISd+7XWWK1WAOBtvOGKZnTLatuWxnE824xmOSCEgFIKxhgkSYKiKFA9VjcP7vVTTZxzpGkKYwyGYfD9ZtEDbiBp2/avDSQXjWQvLy9o2/aqkawsS6/1j0aym4fSMAwRRRGstV6inzaUOlwylgOvamCMzWrIH4/lDrdeTJz3eMJvv5gsETn9amcYeLuaXXIjuprAKfqhJxd7xtjFd8FPI/BZ+AmCZRaTGAKeWgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="TN2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 86px;';
		hs+='position : absolute;';
		hs+='top : 280px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tn2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tn2.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_9=document.createElement('div');
		els=me._text_9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 156px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 158px;';
		hs+='height: 20px;';
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
		els.setAttribute('style',hs);
		els.innerHTML="Show or hide thumbnails";
		el.appendChild(els);
		me._text_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_9.ggUpdatePosition=function (useTransition) {
		}
		me._tn2.appendChild(me._text_9);
		me._kahonmobile.appendChild(me._tn2);
		el=me._fp2=document.createElement('div');
		els=me._fp2__img=document.createElement('img');
		els.className='ggskin ggskin_fp2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAC2ElEQVR4nO2dUVrEIAyE6X5e3St5FY+DD+tqywINkIEA87+pKyTTNECXhsN7NxEva49jrB1yDjsCa1ti4yIMFrhn72MEHyCwhXumn9idBLYgagqs2GCBLQt7BifyA9UweQKK4JZWW6NpZN+RFvUFLm0RPeDUeKhnk6LAJS2NnKP2tVNJYEkrNib+/0g9b7O7UeA+RuLA298g8IxRmwLnS+U0bSVxnZPZWheKFRF89x8zCRtD17/CCF5dXOfufSgLyYII3kHckJzPMn+5VAYjFHjH6HUu75fs3hemiNSnYgbM8gQtRalP+eASRHCJuKtS7+uNwLNHYw+8z+lUOcjtFL0v6nz+SP9JIzWgLkTMttq+Sp+upT7vfcwGTtNUeRc/InAup+yYGkKgS2VSSi'+
			'Bw+9JwD+QLEEYwGAoMRigw08M7sjTxiP2S6JFZaPQkvLg1d4zNAVqQIpge0txrw0EOxvOOepx/IPoYycGlzJO2mCLA3Ag8T6SM4zhyOjGCwVBgMOBBjrMTRjAYCgzFe3CKkM5C1k0ljGAox0GBwVBgMDc5OL6Zwg4WcnfeBkYwGAoMhgKDMfI82HKeb+NX4NyuQctoXBis3w073Inkm2zmYDB/An9+fY+0Y1mCt4w0Nm+c25hh8Krd9CLTiikCTCBw+4t3eyDXghEMhgKrc80CyuUMdqBMg8hS+XUFNMTsdUF0azxo2lGRInaO4nLfMwJzRnGlrqQD96aBEdSLsLk1vy/1GjQW5JB1MjdtAab0GteqObndL8WFxkoi54tsPGHVKRMUCIwrP2gL3bKRgNKK5UbYAONXRYpYccckLmjA5W3/ujEazXgfGga5kg4tRnOf'+
			'AOlYYvzS7SQ13J0bXGI8ZGzF/zhjj30wcMxDyMhzNDT6D1rDZUeLefeOKQ4qOTOLyDzLaFo2P+4MP5sZdCLiaMGXO7AvhZVvnYE9j46lK1rW2FmaGxN4PX4AW44UfjzRTKEAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="FP2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 29px;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : 321px;';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fp2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fp2.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_8=document.createElement('div');
		els=me._text_8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 39px;';
		hs+='left : 36px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 188px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 190px;';
		hs+='height: 41px;';
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
		els.setAttribute('style',hs);
		els.innerHTML="Show or hide Floor Plan<br\/> when viewing model units";
		el.appendChild(els);
		me._text_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_8.ggUpdatePosition=function (useTransition) {
		}
		me._fp2.appendChild(me._text_8);
		me._kahonmobile.appendChild(me._fp2);
		me._hekpkahon.appendChild(me._kahonmobile);
		me._container4mdle.appendChild(me._hekpkahon);
		el=me._information=document.createElement('div');
		el.ggId="information";
		el.ggDx=-1;
		el.ggDy=26;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 92px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 322px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._informationbg=document.createElement('div');
		el.ggId="informationbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._informationbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._informationbg.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._informationbg);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 60px;';
		hs+='left : 98px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : inherit;';
		hs+='width : 284px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 284px;';
		hs+='height: 60px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<font size=\"2\">360 DMCIHomes Virtual Tour<br\/>by \xa9 360VRTek<br\/>     \u2709  sales@360VRTek.com<\/font>";
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._text_1);
		el=me.__360vrtek_logo=document.createElement('div');
		els=me.__360vrtek_logo__img=document.createElement('img');
		els.className='ggskin ggskin__360vrtek_logo';
		hs=basePath + 'images/_360vrtek_logo.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="360VRTek Logo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 75px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 78px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__360vrtek_logo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__360vrtek_logo.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me.__360vrtek_logo);
		el=me._ht_info_close=document.createElement('div');
		els=me._ht_info_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG9wYWNpdHk9IjAuNCI+DQoJPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzDQoJCWMtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40'+
			'NjctMS4yMjQtMC40NjctMS42OTEsMC4wMDENCgkJYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMA0KCQlsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MQ0KCQljLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNj'+
			'c4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2DQoJCWMwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIy'+
			'LDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIvPg0KPC9nPg0KPGc+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzDQoJCWMtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40NjctMS4yMjQtMC40NjctMS42OTEsMC4wMDENCgkJYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuND'+
			'Y3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMA0KCQlsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MQ0KCQljLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNjc4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4'+
			'OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2DQoJCWMwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIyLDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIvPg0KPC9nPg0KPC9zdmc+DQo=';
		me._ht_info_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_info_close;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4NCgk8cGF0aCBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5Mw0KCQljLTAuNDY3'+
			'LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwDQoJCWMtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MkwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjYtMC40NjcsMS4yMjQsMCwxLjY5MWMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMQ0KCQlsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjENCgkJYy00Ljg4Mi'+
			'00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OGM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NywyOS43MjEsMTIuMDQzLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41OSwwLTUuMTcxLTAuOTg0LTcuMTQ2LTIuOTU5QzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNg0KCQljMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzUsMS45'+
			'NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OEMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6Ii8+DQo8L2c+DQo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MywxNmwzLjQzOS0zLjQ0DQoJCWMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5M2MtMC40NjctMC40NjctMS4yMjUtMC40NjctMS'+
			'42OTIsMC4wMDFsLTMuNDQsMy40NGwtMy40NDEtMy40NDENCgkJYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxDQoJCWMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMWwzLjQ0LTMuNDRsMy40NCwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNCwwLjQ2NywxLjY5MSwwDQoJCUMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjFjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0x'+
			'Ny42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk2LDAsMTcuNjc4DQoJCWM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTkNCgkJQzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNmMwLTIuNTkxLDAuOTgzLTUuMTcsMi45NTktNy4xNDdjMS45NzctMS45NzYsNC41NTYtMi45NTksNy4xNDgtMi45Ng0KCQljMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OWMxLjk3NSwxLjk3NywyLjk1Nyw0LjU1NiwyLjk1OS'+
			'w3LjE0N2MtMC4wMDEsMi41OTItMC45ODQsNS4xNy0yLjk2LDcuMTQ4DQoJCUMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._ht_info_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_info_close;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 291px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_close.onclick=function (e) {
			var flag=me._information.ggScaleActive;
			if (player.transitionsDisabled) {
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
		me._ht_info_close.onmouseover=function (e) {
			me._ht_info_close__img.style.visibility='hidden';
			me._ht_info_close__imgo.style.visibility='inherit';
		}
		me._ht_info_close.onmouseout=function (e) {
			me._ht_info_close__img.style.visibility='inherit';
			me._ht_info_close__imgo.style.visibility='hidden';
		}
		me._ht_info_close.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._ht_info_close);
		me._container4mdle.appendChild(me._information);
		el=me._loading=document.createElement('div');
		el.ggId="loading";
		el.ggDx=-1;
		el.ggDy=27;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading.onclick=function (e) {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		me._loading.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._loadingbg=document.createElement('div');
		el.ggId="loadingbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbg.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbg);
		el=me._loadingtext=document.createElement('div');
		els=me._loadingtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="loadingtext";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
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
		els.setAttribute('style',hs);
		me._loadingtext.ggUpdateText=function() {
			var hs="Loading... "+(player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		player.addListener('downloadprogress', function() {
			me._loadingtext.ggUpdateText();
		});
		el.appendChild(els);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingtext.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingtext);
		el=me._loadingbar=document.createElement('div');
		el.ggId="loadingbar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbar.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbar);
		me._container4mdle.appendChild(me._loading);
		me.divSkin.appendChild(me._container4mdle);
		el=me._kahonessentials=document.createElement('div');
		el.ggId="KahonEssentials";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 5px;';
		hs+='height : 91px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 97px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._kahonessentials.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._kahonessentials.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width / player.getViewerSize().height > 1) && 
				(player.getViewerSize().width <= 640)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width / player.getViewerSize().height < 1) && 
				(player.getViewerSize().width <= 736)
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._kahonessentials.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._kahonessentials.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._kahonessentials.style[domTransition]='' + cssPrefix + 'transform 0s';
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
		me._kahonessentials.ggUpdatePosition=function (useTransition) {
		}
		el=me._mapkahon=document.createElement('div');
		el.ggId="MapKahon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mapkahon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mapkahon.ggUpdatePosition=function (useTransition) {
		}
		el=me._mapbttnhyd=document.createElement('div');
		els=me._mapbttnhyd__img=document.createElement('img');
		els.className='ggskin ggskin_mapbttnhyd';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACiklEQVRYhe2XLXfiQBSGn+xZMXGMy8iRwYFbJHWsow4bGX7G/gTiiiSuceAWi0tdkZGDCy7jsoKSBgq0fJz27J593T1zZ+4zc2dubpzyV8lX6tuXRv8PcA7AorsoEz+5+YVxjl3C+Y95uV6vyfMcay3DYchoFAGglKK/7Du3APheN2atWZllGQDaau7v+28mhGEIwHg8LqWUZ4M89Z7K1qxVzakAskFWmrlhOAw/tFAQBABEUVQqpWi1WuhYv4FZdBdlnudsNyZSQWPQKLe+FYCOtYPH2TmunQjSl2Wj0aCeOp1rer2flX8cT3Bdt7J3UmCtPTd+pSAImM/nLJdLwnB41K8oih175xUIIS4GAOh2u+/6uK67A/Ftf/AzVI9TAWSD7FM+CkdToGPt7A'+
			'9uNZ3OeHgYI6UkjuOrAPZP+eAlnE5nGGMqO8s296MoCqy1RFGElJLBYHARRH2jFcAqWJViKhiNIrIMpJQ0m006dCrnUTqi3W7zbAqKPLsIJM/z488QYNg+/oQAns0LvdQIOAmSJI8YY06uVwF4Y8+xDXv+RTwAEkWjl0FDONzd0Pjx92EAuLIOSI0WFmMMvu/Tvbs76ObaFdCs7J06cE0lBDBWYK09GvyQdgCklFcBXKJPL0RHAU4VorqUuC5N+zr5NZxkk6r4KKVQbYUxBteuKYR3ewDYFBshBFJK/JaPn/ibJmMNLDc+q2BVpmlKlmUI5Z8VsCgKvLH3tiMC6HQ6VO3S6jXgvryx5/ToAZCopLTWUgiPpnJJD9Sd2XTKer2mKAq01pu1DwHUe7WPqr/sO9sTSdNX4niySZ9SCq3160muducf7YovVeInpe/XUveO'+
			'bg5wrv6eP6N/FuAPF1sw0+dITc4AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC3klEQVRYhd2WoZabQBSGP3oqBhdcR44kLnFEpo64ravNOvIGtX2E4BKZdcUFF2zkuiCRrAPHuKmgcDYhm5Cz2dOe/m7gHu43d+78XMv8NPxNffqr2f8FgM99gp79Z5NlGQAP6YN1TwDrXA/sp3uT5zl5niOE4PFxzmq1RmsNgOu6TPfTu4C0FYjcyLQJJ/NOoJSSLMsIgoAkSQgHoVFK4T/77wKxzE/Dfro3k4l3NXi5DAmCoF0nSUKapvQBiUex8f0ZYbgEYDwe4yWe1TbhbpdcBRBCHK2n0ylBEOA4DuEgNJEbtecZj2LDD8uEg9CEg7B9HgQLpJTtN3o1YaOmB07leR6e5xHHMU0yhWoTXtpI72u43cZXY3zfB6iPxJ/1+m5vgNnM7xvaO/lNAN'+
			'DtgbcUx9v7A2w2T2/2wKmuVeD1Ri424W6X0DhgVdVesF6vmc+7PnGLtNbYtn0MUJblUUKtNWla09q2TVVVFEWB1powDBFCnAXpe0yNPgNUVcVr67Vtm+FwyCSZHAWvvqwQ0mUobQ6Hw1kQrTVxvH3zGJ6eNlRVfgxg2zaL8uS+ZsfL7WhLlmUI4JBX4CjGJyDD4RAhRCd54361CgAcxwFeWXFVVXzdf71YrtWXFTiq87ypiNYax3EoiuLovRACKSX+rAZLdjts28ZLPKu3E/5yf9VHdObdaUXgjxnNrvtB72v4Lf12NeaQV2iteye/CeCj9CEAfXf/IQC3+kAvgI3asBwscRwHNbgcq7Um3l7+F7y29LO3oOl4gEW5QCnF9+y7RQmRiAxFgVKKrOyD31VnHhBCkKYpy0FtGFJKgjKwgjKwDMbyEq8dtx7SB2v+Mre0'+
			'1lBknYoIIa72wMvLSwtxdiq+RYmXmDRNGY/H9TXMU4JFdwoCWK9WQO0RzVT9boBG8Sg2WZa1O5s/PrYJpZRIKRnFo87gejeARpEbGSEESincyL06st8d4Fb9n054i34D349JzzrUqpMAAAAASUVORK5CYII=';
		me._mapbttnhyd__img.ggOverSrc=hs;
		el.ggId="MapbttnHyd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._mapbttnhyd.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mapbttnhyd.logicBlock_scaling = function() {
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
				me._mapbttnhyd.style[domTransition]='' + cssPrefix + 'transform 0s';
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
		me._mapbttnhyd.onclick=function (e) {
			if (player.transitionsDisabled) {
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
		me._mapbttnhyd.onmouseover=function (e) {
			me._mapbttnhyd__img.src=me._mapbttnhyd__img.ggOverSrc;
			me.elementMouseOver['mapbttnhyd']=true;
			me._tt_map_hyd.logicBlock_visible();
		}
		me._mapbttnhyd.onmouseout=function (e) {
			me._mapbttnhyd__img.src=me._mapbttnhyd__img.ggNormalSrc;
			me.elementMouseOver['mapbttnhyd']=false;
			me._tt_map_hyd.logicBlock_visible();
		}
		me._mapbttnhyd.ontouchend=function (e) {
			me.elementMouseOver['mapbttnhyd']=false;
			me._tt_map_hyd.logicBlock_visible();
		}
		me._mapbttnhyd.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_map_hyd=document.createElement('div');
		els=me._tt_map_hyd__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_Map_Hyd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -58px;';
		hs+='position : absolute;';
		hs+='top : 38px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Hide Map";
		el.appendChild(els);
		me._tt_map_hyd.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_map_hyd.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['mapbttnhyd'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_map_hyd.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_map_hyd.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_map_hyd.style[domTransition]='';
				if (me._tt_map_hyd.ggCurrentLogicStateVisible == 0) {
					me._tt_map_hyd.style.visibility=(Number(me._tt_map_hyd.style.opacity)>0||!me._tt_map_hyd.style.opacity)?'inherit':'hidden';
					me._tt_map_hyd.ggVisible=true;
				}
				else {
					me._tt_map_hyd.style.visibility="hidden";
					me._tt_map_hyd.ggVisible=false;
				}
			}
		}
		me._tt_map_hyd.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_map_white_hyd=document.createElement('div');
		els=me._tt_map_white_hyd__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_Map_white__Hyd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Hide Map";
		el.appendChild(els);
		me._tt_map_white_hyd.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_map_white_hyd.ggUpdatePosition=function (useTransition) {
		}
		me._tt_map_hyd.appendChild(me._tt_map_white_hyd);
		me._mapbttnhyd.appendChild(me._tt_map_hyd);
		me._mapkahon.appendChild(me._mapbttnhyd);
		el=me._mapbttnshw=document.createElement('div');
		els=me._mapbttnshw__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+Cgk8cGF0aCBkPSJNMjguNDk5LDE1LjM0NGwtNy42NCwxLjk4M1Y5LjI0Mmw3LjY0LTEuOTA1VjE1LjM0NHogTTE5LjgzNiw5LjIyOXY3LjkzM2wtNy42NzMtMy44MzNWNS40MTYNCgkJQzEyLjE2Myw1LjQxNiwxOS43NzgsOS4yMDksMTkuODM2LDkuMjI5eiBNMTEuMTQxLDUuMTU1djguMDkyTDMuNSwxNS4xNjZWNy4wNkwxMS4xNDEsNS4xNTV6IE0zLjUsMTYuMjJs'+
			'Ny42NDEtMS45MTl2OC4zMg0KCQljMCwwLjA0NSwwLjAwOCwwLjA5LDAuMDE5LDAuMTMyTDMuNSwyNC42NjJWMTYuMjJ6IE0xMi4zMzUsMjIuODM4Yy0wLjA2My0wLjAzMi0wLjEyNy0wLjA1OC0wLjE5NC0wLjA4DQoJCWMwLjAxMi0wLjA0NCwwLjAyMS0wLjA5LDAuMDIxLTAuMTM3di04LjE0OWw3LjY3MywzLjgzMnY4LjI4MUwxMi4zMzUsMjIuODM4eiBNMjAuODU5LDI2Ljg0NnYtOC40NjJsNy42NC0xLjk4MkwyOC41LDI0Ljk0DQoJCUwyMC44NTksMjYuODQ2eiIvPg0KCTwvZz4KCTxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgoJPHBhdGggZD'+
			'0iTTI4LjQ5OSwxNS4zNDRsLTcuNjQsMS45ODNWOS4yNDJsNy42NC0xLjkwNVYxNS4zNDR6IE0xOS44MzYsOS4yMjl2Ny45MzNsLTcuNjczLTMuODMzVjUuNDE2DQoJCUMxMi4xNjMsNS40MTYsMTkuNzc4LDkuMjA5LDE5LjgzNiw5LjIyOXogTTExLjE0MSw1LjE1NXY4LjA5MkwzLjUsMTUuMTY2VjcuMDZMMTEuMTQxLDUuMTU1eiBNMy41LDE2LjIybDcuNjQxLTEuOTE5djguMzINCgkJYzAsMC4wNDUsMC4wMDgsMC4wOSwwLjAxOSwwLjEzMkwzLjUsMjQuNjYyVjE2LjIyeiBNMTIuMzM1LDIyLjgzOGMtMC4wNjMtMC4wMzItMC4xMjctMC4wNTgtMC4xOTQtMC4wOA0KCQljMC4wMTItMC4wNDQsMC4w'+
			'MjEtMC4wOSwwLjAyMS0wLjEzN3YtOC4xNDlsNy42NzMsMy44MzJ2OC4yODFMMTIuMzM1LDIyLjgzOHogTTIwLjg1OSwyNi44NDZ2LTguNDYybDcuNjQtMS45ODJMMjguNSwyNC45NA0KCQlMMjAuODU5LDI2Ljg0NnoiLz4NCgk8L2c+Cjwvc3ZnPg==';
		me._mapbttnshw__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;mapbttnshw;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._mapbttnshw__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCTxwYXRoIGQ9Ik0yOC40OTksMTUuMzQ0bC03LjY0LDEuOTgzVjkuMjQybDcuNjQtMS45MDVWMTUuMzQ0eiBNMTkuODM2LDkuMjI5djcuOTMzbC03LjY3My0zLjgzM1Y1LjQxNg0KCQlDMTIuMTYzLDUuNDE2LDE5Ljc3OCw5LjIwOSwxOS44MzYsOS4yMjl6IE0x'+
			'MS4xNDEsNS4xNTV2OC4wOTJMMy41LDE1LjE2NlY3LjA2TDExLjE0MSw1LjE1NXogTTMuNSwxNi4yMmw3LjY0MS0xLjkxOXY4LjMyDQoJCWMwLDAuMDQ1LDAuMDA4LDAuMDksMC4wMTksMC4xMzJMMy41LDI0LjY2MlYxNi4yMnogTTEyLjMzNSwyMi44MzhjLTAuMDYzLTAuMDMyLTAuMTI3LTAuMDU4LTAuMTk0LTAuMDgNCgkJYzAuMDEyLTAuMDQ0LDAuMDIxLTAuMDksMC4wMjEtMC4xMzd2LTguMTQ5bDcuNjczLDMuODMydjguMjgxTDEyLjMzNSwyMi44Mzh6IE0yMC44NTksMjYuODQ2di04LjQ2Mmw3LjY0LTEuOTgyTDI4LjUsMjQuOTQNCgkJTDIwLjg1OSwyNi44NDZ6Ii8+DQoJPC9nPgoJPGcgZm'+
			'lsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCTxwYXRoIGQ9Ik0yOC40OTksMTUuMzQ0bC03LjY0LDEuOTgzVjkuMjQybDcuNjQtMS45MDVWMTUuMzQ0eiBNMTkuODM2LDkuMjI5djcuOTMzbC03LjY3My0zLjgzM1Y1LjQxNg0KCQlDMTIuMTYzLDUuNDE2LDE5Ljc3OCw5LjIwOSwxOS44MzYsOS4yMjl6IE0xMS4xNDEsNS4xNTV2OC4wOTJMMy41LDE1LjE2NlY3LjA2TDExLjE0MSw1LjE1NXogTTMuNSwxNi4yMmw3LjY0MS0xLjkxOXY4LjMyDQoJCWMw'+
			'LDAuMDQ1LDAuMDA4LDAuMDksMC4wMTksMC4xMzJMMy41LDI0LjY2MlYxNi4yMnogTTEyLjMzNSwyMi44MzhjLTAuMDYzLTAuMDMyLTAuMTI3LTAuMDU4LTAuMTk0LTAuMDgNCgkJYzAuMDEyLTAuMDQ0LDAuMDIxLTAuMDksMC4wMjEtMC4xMzd2LTguMTQ5bDcuNjczLDMuODMydjguMjgxTDEyLjMzNSwyMi44Mzh6IE0yMC44NTksMjYuODQ2di04LjQ2Mmw3LjY0LTEuOTgyTDI4LjUsMjQuOTQNCgkJTDIwLjg1OSwyNi44NDZ6Ii8+DQoJPC9nPgo8L3N2Zz4=';
		me._mapbttnshw__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;mapbttnshw;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="MapbttnShw";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._mapbttnshw.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mapbttnshw.logicBlock_scaling = function() {
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
		me._mapbttnshw.onclick=function (e) {
			me._maprect.style[domTransition]='none';
			me._maprect.style.visibility=(Number(me._maprect.style.opacity)>0||!me._maprect.style.opacity)?'inherit':'hidden';
			me._maprect.ggVisible=true;
			if (player.transitionsDisabled) {
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
		me._mapbttnshw.onmouseover=function (e) {
			me._mapbttnshw__img.style.visibility='hidden';
			me._mapbttnshw__imgo.style.visibility='inherit';
			me.elementMouseOver['mapbttnshw']=true;
			me._tt_map_show.logicBlock_visible();
		}
		me._mapbttnshw.onmouseout=function (e) {
			me._mapbttnshw__img.style.visibility='inherit';
			me._mapbttnshw__imgo.style.visibility='hidden';
			me.elementMouseOver['mapbttnshw']=false;
			me._tt_map_show.logicBlock_visible();
		}
		me._mapbttnshw.ontouchend=function (e) {
			me.elementMouseOver['mapbttnshw']=false;
			me._tt_map_show.logicBlock_visible();
		}
		me._mapbttnshw.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_map_show=document.createElement('div');
		els=me._tt_map_show__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_Map_show";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -58px;';
		hs+='position : absolute;';
		hs+='top : 38px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Show Map";
		el.appendChild(els);
		me._tt_map_show.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_map_show.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['mapbttnshw'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_map_show.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_map_show.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_map_show.style[domTransition]='';
				if (me._tt_map_show.ggCurrentLogicStateVisible == 0) {
					me._tt_map_show.style.visibility=(Number(me._tt_map_show.style.opacity)>0||!me._tt_map_show.style.opacity)?'inherit':'hidden';
					me._tt_map_show.ggVisible=true;
				}
				else {
					me._tt_map_show.style.visibility="hidden";
					me._tt_map_show.ggVisible=false;
				}
			}
		}
		me._tt_map_show.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_map_white_show=document.createElement('div');
		els=me._tt_map_white_show__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_Map_white_show";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Show Map";
		el.appendChild(els);
		me._tt_map_white_show.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_map_white_show.ggUpdatePosition=function (useTransition) {
		}
		me._tt_map_show.appendChild(me._tt_map_white_show);
		me._mapbttnshw.appendChild(me._tt_map_show);
		me._mapkahon.appendChild(me._mapbttnshw);
		me._kahonessentials.appendChild(me._mapkahon);
		el=me._floorplanbuttons=document.createElement('div');
		el.ggId="FloorPlanButtons";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 34px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._floorplanbuttons.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplanbuttons.ggUpdatePosition=function (useTransition) {
		}
		el=me._floorpln_hyd=document.createElement('div');
		els=me._floorpln_hyd__img=document.createElement('img');
		els.className='ggskin ggskin_floorpln_hyd';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAC2UlEQVR4nO2dz1XDMAyHXR4HVmAF1uDGkRUYg1m6QjfoPmwRTn6UvPiPLP0k2dF37mukL6ocJ4572bYUAHmyDmB1QjCYEAxmOsHX23273u7TjBwXb4OclLyvz/eLxPdwcSFYoyKthJsJtvqZa4tWF+ypf2rIVhPsSewjaMlwwaNiRxPXPl4LqGBKsqgEqcKl44AI7k1Ke8CxiEtccE8S1teomjGKzuRmkNsbg9SgLFbBrYA8iD0CHbdIBc8qN6V2bNxKZldwLQDPYo9A5MKq4JXkplSPebSShwWvJjcjLXlI8KpyM5KSh3pw6SD7wLzefyhBib+3kMgV3Ct3BSRyIgmerSKR9LoQuQ5esXoz3Nyeez/IbQ3SJ2Efz8j3U27+HH32ertvreNO91TZG6'+
			'2T1CX4TANbCZOZXNCmKTiq949SzrU2ERUMZkjwGas3Q63iquCYWPDpvg7WgHNt6/UGFLlFnLk9ZCgOYpAT5OhXVBQc/VcGVz2YwiytKloEGJLgWapGA9gTjYCGWg8+66AZFQwmBAuz/6WqtQjNFY2eiAoWZl9IIRhMCAZD6sE9j6m1serbqgtPgjIhGIyru2ne2o8ERcGl5ULe4JwUjfzElq+eCcpakejBYKqCf15eteJYlqrg74838lKh1aEuJYsWAaYpeGTB26qovcYV/Kd2qQh703M1RnPtmslJTDqQJwP9Qjfn2OwWcYYq5uTYLRjxovQMcFdtxsITMOR3lb2uw0Vg8q7yWVqFVCGJv6OxgmTJHCATjZklS+8/NCzY8toTBWJzJ+imSBnvgx8yB3aLmH1JFLpA1Damy3ipZq14xQa53kA8VLNmMZhsDprxuvtq'+
			'SnKxwfYPtt63dzQO6VjcbNC8R3sHbM4xa6js4e6h77aYcovxR7xKnn6T/D1eRGsNsKb/BGMhe/k/KjkCLdpycuNC8B6ucC+zxZScCl6JWHgCJgSDCcFgQjCYX+jgy662+4QOAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAC7ElEQVR4nO2dy3XCMBBFZQ6LtJAW0ga7LGmBMlKLW6AD+kkXziLHHGOs/zxpJL27y+dgzfUwlowZTctiVDDfH6IjuV0vk+TrpTLVFCwt1UUt4cUFl5Rqo6TsIoI1SLWBlg0VrFnsFqTkE+qFyT+QDM7J3NxsqnnsI8QFxwaIroEpwiXHJCY4JpCac9TS4xQRHDJoLRP/lVDRuePOElxqkChKjD9ZcItZawMZS9I0rSe5xoSNNXV2Ep3BvgO1JPYI6fiiMrh3ucb4Y4jN5OAMHkHuHlfMofFyqQwmSPCI2WuMO67QUhFUImwvdjSAVu6g2YiNyZdc3gyOkdsrObE6BbeejSWY74/F5SnpIjdS9q6kxny2/UGiNKBOxNHYUo8Ve3fN9v/z/bEcjYHTNE'+
			'GO5L8JdtWUEUvDHuhSmcTzIlhiaTgCMQsQZjAYCgYTJJjl4Z3QMnE6+iWRw7rQKMn+5Ka8Y7ReoL0lguXBTogbXuRArO+o0/YHIo+KGhxLS2WLJQKMU3BLmVKL2/UyuTwxg8FQMBjoRY6zE2YwHAoGMt8fC7REhM5Cei4lzGAgt+tlomAwFAzGWYNtD1NoQUPt9o2BGQyGgsFQMBgV94M11/lczsa4nxrUjMSJQced/IQ7CfskmzUYzFPw78dnzXF0y1Pwz/dX9leWRiL0QReWCDAvgiW+eDcCMS6YwWAoWJh9FRBtZzACsQ7elsrrGZCQWeqESPd4kBxHdIkYOYtTYrcK5ozildSWDnw2DYy3X4TWR/NLkuMgqyFH6EFaJjfBRL7G1WtNlohLbKHRk2Rfkw1j2HVKDcGCke0HNSHdNlK8tWLKIDSAiiu6RPT4xCQy'+
			'aaDtbVe0ZnOJGJIvcjEH1JjNpRKkWIvxLa30cDemcovxPbU7/h9Re9uH6ts87Km5j4bE8ffAttrRWHd9NLFRyZZWJHMvo4YZeruzErOZKjsi1hbe3YZ9NrR86oykquA9UsI1Lc1VCe4RziLA/AELtdOou8R3UAAAAABJRU5ErkJggg==';
		me._floorpln_hyd__img.ggOverSrc=hs;
		el.ggId="FloorPln_Hyd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._floorpln_hyd.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorpln_hyd.logicBlock_scaling = function() {
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
				me._floorpln_hyd.style[domTransition]='' + cssPrefix + 'transform 0s';
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
		me._floorpln_hyd.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._floor_plan_bg.style[domTransition]='none';
			} else {
				me._floor_plan_bg.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._floor_plan_bg.ggParameter.rx=0;me._floor_plan_bg.ggParameter.ry=0;
			me._floor_plan_bg.style[domTransform]=parameterToTransform(me._floor_plan_bg.ggParameter);
			me._floorpln_hyd.style[domTransition]='none';
			me._floorpln_hyd.ggParameter.sx=0;me._floorpln_hyd.ggParameter.sy=0;
			me._floorpln_hyd.style[domTransform]=parameterToTransform(me._floorpln_hyd.ggParameter);
			if (player.transitionsDisabled) {
				me._floorpln_show.style[domTransition]='none';
			} else {
				me._floorpln_show.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._floorpln_show.ggParameter.sx=1;me._floorpln_show.ggParameter.sy=1;
			me._floorpln_show.style[domTransform]=parameterToTransform(me._floorpln_show.ggParameter);
		}
		me._floorpln_hyd.onmouseover=function (e) {
			me._floorpln_hyd__img.src=me._floorpln_hyd__img.ggOverSrc;
			me.elementMouseOver['floorpln_hyd']=true;
			me.__1brtt_flrpln_hide.logicBlock_visible();
		}
		me._floorpln_hyd.onmouseout=function (e) {
			me._floorpln_hyd__img.src=me._floorpln_hyd__img.ggNormalSrc;
			me.elementMouseOver['floorpln_hyd']=false;
			me.__1brtt_flrpln_hide.logicBlock_visible();
		}
		me._floorpln_hyd.ontouchend=function (e) {
			me.elementMouseOver['floorpln_hyd']=false;
			me.__1brtt_flrpln_hide.logicBlock_visible();
		}
		me._floorpln_hyd.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1brtt_flrpln_hide=document.createElement('div');
		els=me.__1brtt_flrpln_hide__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1BRtt_FlrPln_hide";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -47px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Hide Floor Plan";
		el.appendChild(els);
		me.__1brtt_flrpln_hide.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1brtt_flrpln_hide.logicBlock_visible = function() {
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
		me.__1brtt_flrpln_hide.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_flrpln_white_hide=document.createElement('div');
		els=me._tt_flrpln_white_hide__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_FlrPln_white_hide";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Hide Floor Plan";
		el.appendChild(els);
		me._tt_flrpln_white_hide.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_flrpln_white_hide.ggUpdatePosition=function (useTransition) {
		}
		me.__1brtt_flrpln_hide.appendChild(me._tt_flrpln_white_hide);
		me._floorpln_hyd.appendChild(me.__1brtt_flrpln_hide);
		me._floorplanbuttons.appendChild(me._floorpln_hyd);
		el=me._floorpln_show=document.createElement('div');
		els=me._floorpln_show__img=document.createElement('img');
		els.className='ggskin ggskin_floorpln_show';
		hs='data:image/png;base64,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'+
			'wQAyT7P4g7K8MK8VWvAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._floorpln_show__img.ggOverSrc=hs;
		el.ggId="FloorPln_Show";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._floorpln_show.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorpln_show.logicBlock_scaling = function() {
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
				me._floorpln_show.style[domTransition]='' + cssPrefix + 'transform 0s';
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
		me._floorpln_show.onclick=function (e) {
			me._floor_plan_bg.style[domTransition]='none';
			me._floor_plan_bg.ggParameter.sx=1;me._floor_plan_bg.ggParameter.sy=1;
			me._floor_plan_bg.style[domTransform]=parameterToTransform(me._floor_plan_bg.ggParameter);
			if (player.transitionsDisabled) {
				me._floor_plan_bg.style[domTransition]='none';
			} else {
				me._floor_plan_bg.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._floor_plan_bg.ggParameter.rx=384;me._floor_plan_bg.ggParameter.ry=0;
			me._floor_plan_bg.style[domTransform]=parameterToTransform(me._floor_plan_bg.ggParameter);
			me._floorpln_show.style[domTransition]='none';
			me._floorpln_show.ggParameter.sx=0;me._floorpln_show.ggParameter.sy=0;
			me._floorpln_show.style[domTransform]=parameterToTransform(me._floorpln_show.ggParameter);
			if (player.transitionsDisabled) {
				me._floorpln_hyd.style[domTransition]='none';
			} else {
				me._floorpln_hyd.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._floorpln_hyd.ggParameter.sx=1;me._floorpln_hyd.ggParameter.sy=1;
			me._floorpln_hyd.style[domTransform]=parameterToTransform(me._floorpln_hyd.ggParameter);
		}
		me._floorpln_show.onmouseover=function (e) {
			me._floorpln_show__img.src=me._floorpln_show__img.ggOverSrc;
			me.elementMouseOver['floorpln_show']=true;
			me.__1brtt_flrpln_show.logicBlock_visible();
		}
		me._floorpln_show.onmouseout=function (e) {
			me._floorpln_show__img.src=me._floorpln_show__img.ggNormalSrc;
			me.elementMouseOver['floorpln_show']=false;
			me.__1brtt_flrpln_show.logicBlock_visible();
		}
		me._floorpln_show.ontouchend=function (e) {
			me.elementMouseOver['floorpln_show']=false;
			me.__1brtt_flrpln_show.logicBlock_visible();
		}
		me._floorpln_show.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1brtt_flrpln_show=document.createElement('div');
		els=me.__1brtt_flrpln_show__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1BRtt_FlrPln_show";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -47px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Show Floor Plan";
		el.appendChild(els);
		me.__1brtt_flrpln_show.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1brtt_flrpln_show.logicBlock_visible = function() {
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
		me.__1brtt_flrpln_show.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_flrpln_white_show=document.createElement('div');
		els=me._tt_flrpln_white_show__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_FlrPln_white_show";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Show Floor Plan";
		el.appendChild(els);
		me._tt_flrpln_white_show.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_flrpln_white_show.ggUpdatePosition=function (useTransition) {
		}
		me.__1brtt_flrpln_show.appendChild(me._tt_flrpln_white_show);
		me._floorpln_show.appendChild(me.__1brtt_flrpln_show);
		me._floorplanbuttons.appendChild(me._floorpln_show);
		me._kahonessentials.appendChild(me._floorplanbuttons);
		el=me._info=document.createElement('div');
		els=me._info__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CgkJPGc+DQoJCQk8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUsMTYsMy41bDAsMGM2LjkwMywwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwDQoJCQkJYy0wLjAwMSw2LjkwMy01LjU5NywxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwMywzLjUsMTZMMy41LDE2eiBNOC44NTQsOC44NTMNCgkJCQlDNy4wMjIsMTAu'+
			'Njg2LDUuODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBjMC4wMDEsMi43OTUsMS4xMjksNS4zMTQsMi45NjEsNy4xNDZsMCwwYzEuODMyLDEuODMxLDQuMzUyLDIuOTYsNy4xNDYsMi45NmwwLDANCgkJCQljMi43OTUsMCw1LjMxNC0xLjEyOSw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMiwyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bDAsMGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDANCgkJCQlDMjEuMzEzLDcuMDIyLDE4Ljc5NSw1Ljg5MywxNiw1Ljg5MmwwLDBDMTMuMjA1LDUuODkzLDEwLjY4Niw3LjAyMiw4Ljg1NCw4Ljg1M0w4Ljg1NCw4Ljg1M3oiLz4NCgkJPC9nPg0KCQ'+
			'k8Zz4NCgkJCTxwYXRoIGQ9Ik0xNC45NjMsMTAuMDVWOS41MjFjMC0wLjY2MSwwLjUzNi0xLjE5NiwxLjE5Ny0xLjE5NmwwLDBjMC42NiwwLDEuMTk2LDAuNTM2LDEuMTk2LDEuMTk2bDAsMHYwLjUyOQ0KCQkJCWMwLDAuNjYxLTAuNTM2LDEuMTk2LTEuMTk2LDEuMTk2bDAsMEMxNS41LDExLjI0NywxNC45NjMsMTAuNzExLDE0Ljk2MywxMC4wNUwxNC45NjMsMTAuMDV6Ii8+DQoJCQk8Zz4NCgkJCQk8cGF0aCBkPSJNMTguNTMyLDIwLjM5MWgtMS4xNzZ2LTYuNDczYzAtMC4wMjEtMC4wMDUtMC4wNDItMC4wMDYtMC4wNjNjMC0wLjAxNCwwLjAwNC0wLjAyNiwwLjAwNC0wLjA0DQoJCQkJCWMwLTAu'+
			'NjYxLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0yLjIyNmMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NmMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMS4wMzF2NS4zNzloLTEuMjA3DQoJCQkJCWMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NmMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoNC43NzVjMC42NiwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2DQoJCQkJCUMxOS43MjksMjAuOTI2LDE5LjE5MiwyMC4zOTEsMTguNTMyLDIwLjM5MXoiLz4NCgkJCTwvZz4NCgkJPC9nPg0KCTwvZz4KCTxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMC'+
			'Igc3Ryb2tlLXdpZHRoPSIwLjIiPgoJCTxnPg0KCQkJPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41LDE2LDMuNWwwLDBjNi45MDMsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMA0KCQkJCWMtMC4wMDEsNi45MDMtNS41OTcsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTguODU0LDguODUzDQoJCQkJQzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwYzAuMDAxLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYxLDcuMTQ2bDAsMGMxLjgzMiwxLjgzMSw0LjM1MiwyLjk2LDcuMTQ2LDIuOTZsMCwwDQoJ'+
			'CQkJYzIuNzk1LDAsNS4zMTQtMS4xMjksNy4xNDctMi45NmwwLDBjMS44MzEtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwDQoJCQkJQzIxLjMxMyw3LjAyMiwxOC43OTUsNS44OTMsMTYsNS44OTJsMCwwQzEzLjIwNSw1Ljg5MywxMC42ODYsNy4wMjIsOC44NTQsOC44NTNMOC44NTQsOC44NTN6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBkPSJNMTQuOTYzLDEwLjA1VjkuNTIxYzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTctMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNiwxLjE5NiwxLjE5NmwwLDB2MC'+
			'41MjkNCgkJCQljMCwwLjY2MS0wLjUzNiwxLjE5Ni0xLjE5NiwxLjE5NmwwLDBDMTUuNSwxMS4yNDcsMTQuOTYzLDEwLjcxMSwxNC45NjMsMTAuMDVMMTQuOTYzLDEwLjA1eiIvPg0KCQkJPGc+DQoJCQkJPHBhdGggZD0iTTE4LjUzMiwyMC4zOTFoLTEuMTc2di02LjQ3M2MwLTAuMDIxLTAuMDA1LTAuMDQyLTAuMDA2LTAuMDYzYzAtMC4wMTQsMC4wMDQtMC4wMjYsMC4wMDQtMC4wNA0KCQkJCQljMC0wLjY2MS0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMi4yMjZjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDEuMDMxdjUuMzc5'+
			'aC0xLjIwNw0KCQkJCQljLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDQuNzc1YzAuNjYsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5Ng0KCQkJCQlDMTkuNzI5LDIwLjkyNiwxOS4xOTIsMjAuMzkxLDE4LjUzMiwyMC4zOTF6Ii8+DQoJCQk8L2c+DQoJCTwvZz4NCgk8L2c+Cjwvc3ZnPg==';
		me._info__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;info;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNSwxNiwzLjVsMCwwYzYuOTAzLDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDANCgkJCQljLTAuMDAxLDYuOTAzLTUuNTk3LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4'+
			'LjQ5OSwzLjUsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE04Ljg1NCw4Ljg1Mw0KCQkJCUM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLjAwMSwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2MSw3LjE0NmwwLDBjMS44MzIsMS44MzEsNC4zNTIsMi45Niw3LjE0NiwyLjk2bDAsMA0KCQkJCWMyLjc5NSwwLDUuMzE0LTEuMTI5LDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMA0KCQkJCUMyMS4zMTMsNy4wMjIsMTguNzk1LDUuODkzLDE2LDUuODkybDAsMEMxMy4yMD'+
			'UsNS44OTMsMTAuNjg2LDcuMDIyLDguODU0LDguODUzTDguODU0LDguODUzeiIvPg0KCQk8L2c+DQoJCTxnPg0KCQkJPHBhdGggZD0iTTE0Ljk2MywxMC4wNVY5LjUyMWMwLTAuNjYxLDAuNTM2LTEuMTk2LDEuMTk3LTEuMTk2bDAsMGMwLjY2LDAsMS4xOTYsMC41MzYsMS4xOTYsMS4xOTZsMCwwdjAuNTI5DQoJCQkJYzAsMC42NjEtMC41MzYsMS4xOTYtMS4xOTYsMS4xOTZsMCwwQzE1LjUsMTEuMjQ3LDE0Ljk2MywxMC43MTEsMTQuOTYzLDEwLjA1TDE0Ljk2MywxMC4wNXoiLz4NCgkJCTxnPg0KCQkJCTxwYXRoIGQ9Ik0xOC41MzIsMjAuMzkxaC0xLjE3NnYtNi40NzNjMC0wLjAyMS0wLjAwNS0w'+
			'LjA0Mi0wLjAwNi0wLjA2M2MwLTAuMDE0LDAuMDA0LTAuMDI2LDAuMDA0LTAuMDQNCgkJCQkJYzAtMC42NjEtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTIuMjI2Yy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgxLjAzMXY1LjM3OWgtMS4yMDcNCgkJCQkJYy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5Nmg0Ljc3NWMwLjY2LDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTYNCgkJCQkJQzE5LjcyOSwyMC45MjYsMTkuMTkyLDIwLjM5MSwxOC41MzIsMjAuMzkxeiIvPg'+
			'0KCQkJPC9nPg0KCQk8L2c+DQoJPC9nPgoJPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNSwxNiwzLjVsMCwwYzYuOTAzLDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDANCgkJCQljLTAuMDAxLDYuOTAzLTUuNTk3LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwzLjUsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE04Ljg1NCw4Ljg1Mw0KCQkJCUM3'+
			'LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLjAwMSwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2MSw3LjE0NmwwLDBjMS44MzIsMS44MzEsNC4zNTIsMi45Niw3LjE0NiwyLjk2bDAsMA0KCQkJCWMyLjc5NSwwLDUuMzE0LTEuMTI5LDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMA0KCQkJCUMyMS4zMTMsNy4wMjIsMTguNzk1LDUuODkzLDE2LDUuODkybDAsMEMxMy4yMDUsNS44OTMsMTAuNjg2LDcuMDIyLDguODU0LDguODUzTDguODU0LDguODUzeiIvPg0KCQ'+
			'k8L2c+DQoJCTxnPg0KCQkJPHBhdGggZD0iTTE0Ljk2MywxMC4wNVY5LjUyMWMwLTAuNjYxLDAuNTM2LTEuMTk2LDEuMTk3LTEuMTk2bDAsMGMwLjY2LDAsMS4xOTYsMC41MzYsMS4xOTYsMS4xOTZsMCwwdjAuNTI5DQoJCQkJYzAsMC42NjEtMC41MzYsMS4xOTYtMS4xOTYsMS4xOTZsMCwwQzE1LjUsMTEuMjQ3LDE0Ljk2MywxMC43MTEsMTQuOTYzLDEwLjA1TDE0Ljk2MywxMC4wNXoiLz4NCgkJCTxnPg0KCQkJCTxwYXRoIGQ9Ik0xOC41MzIsMjAuMzkxaC0xLjE3NnYtNi40NzNjMC0wLjAyMS0wLjAwNS0wLjA0Mi0wLjAwNi0wLjA2M2MwLTAuMDE0LDAuMDA0LTAuMDI2LDAuMDA0LTAuMDQNCgkJ'+
			'CQkJYzAtMC42NjEtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTIuMjI2Yy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgxLjAzMXY1LjM3OWgtMS4yMDcNCgkJCQkJYy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5Nmg0Ljc3NWMwLjY2LDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTYNCgkJCQkJQzE5LjcyOSwyMC45MjYsMTkuMTkyLDIwLjM5MSwxOC41MzIsMjAuMzkxeiIvPg0KCQkJPC9nPg0KCQk8L2c+DQoJPC9nPgo8L3N2Zz4=';
		me._info__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;info;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info.onclick=function (e) {
			var flag=me._information.ggScaleActive;
			if (player.transitionsDisabled) {
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
		me._info.onmouseover=function (e) {
			me._info__img.style.visibility='hidden';
			me._info__imgo.style.visibility='inherit';
		}
		me._info.onmouseout=function (e) {
			me._info__img.style.visibility='inherit';
			me._info__imgo.style.visibility='hidden';
		}
		me._info.ggUpdatePosition=function (useTransition) {
		}
		me._kahonessentials.appendChild(me._info);
		el=me._thumbnail_button=document.createElement('div');
		els=me._thumbnail_button__img=document.createElement('img');
		els.className='ggskin ggskin_thumbnail_button';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._thumbnail_button__img.ggOverSrc=hs;
		el.ggId="ThumbNail button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 57px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_button.onclick=function (e) {
			var flag=me._thumbnail_menu.ggScaleActive;
			if (player.transitionsDisabled) {
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
			if (player.transitionsDisabled) {
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
		me._thumbnail_button.onmouseover=function (e) {
			me._thumbnail_button__img.src=me._thumbnail_button__img.ggOverSrc;
			me.elementMouseOver['thumbnail_button']=true;
			me._tt_tnail_show.logicBlock_visible();
		}
		me._thumbnail_button.onmouseout=function (e) {
			me._thumbnail_button__img.src=me._thumbnail_button__img.ggNormalSrc;
			me.elementMouseOver['thumbnail_button']=false;
			me._tt_tnail_show.logicBlock_visible();
		}
		me._thumbnail_button.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_button']=false;
			me._tt_tnail_show.logicBlock_visible();
		}
		me._thumbnail_button.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_tnail_show=document.createElement('div');
		els=me._tt_tnail_show__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_TNail_show";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Show Thumbnail";
		el.appendChild(els);
		me._tt_tnail_show.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_tnail_show.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['thumbnail_button'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_tnail_show.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_tnail_show.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_tnail_show.style[domTransition]='';
				if (me._tt_tnail_show.ggCurrentLogicStateVisible == 0) {
					me._tt_tnail_show.style.visibility=(Number(me._tt_tnail_show.style.opacity)>0||!me._tt_tnail_show.style.opacity)?'inherit':'hidden';
					me._tt_tnail_show.ggVisible=true;
				}
				else {
					me._tt_tnail_show.style.visibility="hidden";
					me._tt_tnail_show.ggVisible=false;
				}
			}
		}
		me._tt_tnail_show.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_tnail_white_show=document.createElement('div');
		els=me._tt_tnail_white_show__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_TNail_white_show";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Show Thumbnail";
		el.appendChild(els);
		me._tt_tnail_white_show.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_tnail_white_show.ggUpdatePosition=function (useTransition) {
		}
		me._tt_tnail_show.appendChild(me._tt_tnail_white_show);
		me._thumbnail_button.appendChild(me._tt_tnail_show);
		me._kahonessentials.appendChild(me._thumbnail_button);
		el=me.__605=document.createElement('div');
		els=me.__605__img=document.createElement('img');
		els.className='ggskin ggskin__605';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me.__605__img.ggOverSrc=hs;
		el.ggId="605";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 31px;';
		hs+='left : 54px;';
		hs+='position : absolute;';
		hs+='top : 57px;';
		hs+='visibility : inherit;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__605.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__605.onclick=function (e) {
			var flag=me._hekpkahon.ggScaleActive;
			if (player.transitionsDisabled) {
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
		me.__605.onmouseover=function (e) {
			me.__605__img.src=me.__605__img.ggOverSrc;
		}
		me.__605.onmouseout=function (e) {
			me.__605__img.src=me.__605__img.ggNormalSrc;
		}
		me.__605.ggUpdatePosition=function (useTransition) {
		}
		me._kahonessentials.appendChild(me.__605);
		me.divSkin.appendChild(me._kahonessentials);
		el=me._tn_location_box=document.createElement('div');
		els=me._tn_location_box__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TN_Location Box";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 22px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 118px;';
		hs+='visibility : inherit;';
		hs+='width : 155px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
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
		els.setAttribute('style',hs);
		me._tn_location_box.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tn_location_box.ggUpdateText();
		player.addListener('changenode', function() {
			me._tn_location_box.ggUpdateText();
		});
		el.appendChild(els);
		me._tn_location_box.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._tn_location_box.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width / player.getViewerSize().height < 1) && 
				(player.getViewerSize().width <= 414)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width / player.getViewerSize().height > 1) && 
				(player.getViewerSize().width <= 736)
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width / player.getViewerSize().height > 1) && 
				(player.getViewerSize().width <= 1024)
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width / player.getViewerSize().height < 1) && 
				(player.getViewerSize().width <= 1366)
			)
			{
				newLogicStatePosition = 3;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tn_location_box.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tn_location_box.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tn_location_box.style[domTransition]='left 0s, top 0s';
				if (me._tn_location_box.ggCurrentLogicStatePosition == 0) {
					this.ggDx = -0.5;
					me._tn_location_box.style.top='71px';
					me._tn_location_box.ggUpdatePosition(true);
				}
				else if (me._tn_location_box.ggCurrentLogicStatePosition == 1) {
					this.ggDx = -0.5;
					me._tn_location_box.style.top='77px';
					me._tn_location_box.ggUpdatePosition(true);
				}
				else if (me._tn_location_box.ggCurrentLogicStatePosition == 2) {
					this.ggDx = -0.5;
					me._tn_location_box.style.top='89px';
					me._tn_location_box.ggUpdatePosition(true);
				}
				else if (me._tn_location_box.ggCurrentLogicStatePosition == 3) {
					this.ggDx = -0.5;
					me._tn_location_box.style.top='94px';
					me._tn_location_box.ggUpdatePosition(true);
				}
				else {
					me._tn_location_box.ggDx=0;
					me._tn_location_box.style.top='118px';
					me._tn_location_box.ggUpdatePosition(true);
				}
			}
		}
		me._tn_location_box.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((157-this.ggTextDiv.offsetWidth)*0) + 'px';
		}
		me.divSkin.appendChild(me._tn_location_box);
		el=me._container4hdr=document.createElement('div');
		el.ggId="Container4Hdr";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 120px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : inherit;';
		hs+='width : 1250px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		me._container4hdr.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container4hdr.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width / player.getViewerSize().height < 1) && 
				(player.getViewerSize().width <= 414)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width / player.getViewerSize().height > 1) && 
				(player.getViewerSize().width <= 736)
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width / player.getViewerSize().height > 1) && 
				(player.getViewerSize().width <= 1024)
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width / player.getViewerSize().height < 1) && 
				(player.getViewerSize().width <= 1366)
			)
			{
				newLogicStateScaling = 3;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._container4hdr.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._container4hdr.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._container4hdr.style[domTransition]='' + cssPrefix + 'transform 0s';
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
		me._container4hdr.ggUpdatePosition=function (useTransition) {
		}
		el=me._header=document.createElement('div');
		el.ggId="Header";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._header.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._header.ggUpdatePosition=function (useTransition) {
		}
		el=me._buttons_social=document.createElement('div');
		el.ggId="buttons_social";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 1146px;';
		hs+='position : absolute;';
		hs+='top : 95px;';
		hs+='visibility : inherit;';
		hs+='width : 93px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._buttons_social.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._buttons_social.ggUpdatePosition=function (useTransition) {
		}
		el=me._social_rectangle_1=document.createElement('div');
		el.ggId="Social Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='cursor : default;';
		hs+='height : 19px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._social_rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._social_rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_g=document.createElement('div');
		els=me._button_g__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg'+
			'0KCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDM0MC44Yy0zMSwwLTU2LjIsMjUuMS01Ni4yLDU2LjJjMCwzMS4xLDI1LjEsNTYuMiw1Ni4yLDU2LjJzNTYuMi0yNS4xLDU2LjItNTYuMg0KCQlDLTExOC44LDM2NS45LTE0NCwzNDAuOC0xNzUsMzQwLjh6IE0tMTcyLjgsMzgzLjFjMCw1LjMtMyw3LjgtNiwxMC4yYy0wLjksMC45LTIsMS45LTIsMy41czEuMSwyLjQsMS45LDMuMWwyLjYsMg0KCQljMy4yLDIuNiw2LDUuMSw2LDEwYzAsNi43LTYuNSwxMy42LTE4LjksMTMuNmMtMTAuNCwwLTE1LjQtNS0xNS40LTEwLjNjMC0yLjYsMS4zLTYuMyw1LjUtOC43YzQuNS0yLjcsMTAuNS0zLjEs'+
			'MTMuNy0zLjMNCgkJYy0xLTEuMy0yLjEtMi43LTIuMS00LjljMC0xLjIsMC40LTEuOSwwLjctMi44Yy0wLjgsMC4xLTEuNiwwLjEtMi4zLDAuMWMtNy42LDAtMTEuOS01LjctMTEuOS0xMS4zYzAtMy4zLDEuNS03LDQuNi05LjYNCgkJYzQuMS0zLjQsOS00LDEyLjktNGgxNC44bC00LjYsMi42bC00LjUsMEMtMTc2LjIsMzc0LjctMTcyLjgsMzc3LjYtMTcyLjgsMzgzLjF6IE0tMTQxLjQsMzg0LjFoLTEwLjlWMzk1aC0yLjd2LTEwLjloLTEwLjl2LTIuNw0KCQloMTAuOXYtMTAuOWgyLjd2MTAuOWgxMC45VjM4NC4xeiIvPg0KCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTg4LjIsMzczLjFjLT'+
			'EuOSwwLTMuOSwwLjktNSwyLjRjLTEuMiwxLjUtMS42LDMuNC0xLjYsNS4zYzAsNC44LDIuOCwxMi44LDksMTIuOGMxLjgsMCwzLjctMC45LDQuOS0yDQoJCWMxLjYtMS42LDEuOC00LDEuOC01LjNDLTE3OS4xLDM4MS4yLTE4Mi4yLDM3My4xLTE4OC4yLDM3My4xeiIvPg0KCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTg0LjYsNDA1LjFjLTAuNiwwLTQuNSwwLjEtNy41LDEuMWMtMS42LDAuNi02LjIsMi4zLTYuMiw3LjRzNSw4LjcsMTIuNiw4LjdjNi45LDAsMTAuNS0zLjMsMTAuNS03LjcNCgkJYzAtMy42LTIuMy01LjYtNy44LTkuNUMtMTgzLjYsNDA1LjEtMTgzLjksNDA1LjEtMTg0LjYs'+
			'NDA1LjF6Ii8+DQo8L2c+DQo8Zz4NCgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE3Ny45LDM3My4yYzEuNiwxLjQsNS4xLDQuMiw1LjEsOS43YzAsNS4zLTMsNy44LTYsMTAuMmMtMC45LDAuOS0yLDEuOS0yLDMuNXMxLjEsMi40LDEuOSwzLjFsMi42LDINCgkJYzMuMiwyLjYsNiw1LjEsNiwxMGMwLDYuNy02LjUsMTMuNi0xOC45LDEzLjZjLTEwLjQsMC0xNS40LTUtMTUuNC0xMC4zYzAtMi42LDEuMy02LjMsNS41LTguN2M0LjUtMi43LDEwLjUtMy4xLDEzLjctMy4zDQoJCWMtMS0xLjMtMi4xLTIuNy0yLjEtNC45YzAtMS4yLDAuNC0xLjksMC43LTIuOGMtMC44LDAuMS0xLjYsMC4xLTIuMy'+
			'wwLjFjLTcuNiwwLTExLjktNS43LTExLjktMTEuM2MwLTMuMywxLjUtNyw0LjYtOS42DQoJCWM0LjEtMy40LDktNCwxMi45LTRoMTQuOGwtNC42LDIuNkMtMTczLjQsMzczLjEtMTc3LjksMzczLjItMTc3LjksMzczLjJ6IE0tMTgzLDQwNWMtMC42LTAuMS0wLjktMC4xLTEuNi0wLjENCgkJYy0wLjYsMC00LjUsMC4xLTcuNSwxLjFjLTEuNiwwLjYtNi4yLDIuMy02LjIsNy40YzAsNS4xLDUsOC43LDEyLjYsOC43YzYuOSwwLDEwLjUtMy4zLDEwLjUtNy43Qy0xNzUuMiw0MTAuOC0xNzcuNSw0MDguOS0xODMsNDA1DQoJCSBNLTE4MC45LDM5MS40YzEuNi0xLjYsMS44LTQsMS44LTUuM2MwLTUuMi0z'+
			'LjEtMTMuMi05LTEzLjJjLTEuOSwwLTMuOSwwLjktNSwyLjRjLTEuMiwxLjUtMS42LDMuNC0xLjYsNS4zYzAsNC44LDIuOCwxMi44LDksMTIuOA0KCQlDLTE4NCwzOTMuNC0xODIsMzkyLjUtMTgwLjksMzkxLjQiLz4NCgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE0MS40LDM4MS4yaC0xMC45di0xMC45aC0yLjd2MTAuOWgtMTAuOXYyLjdoMTAuOXYxMC45aDIuN3YtMTAuOWgxMC45VjM4MS4yeiIvPg0KPC9nPg0KPC9zdmc+DQo=';
		me._button_g__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_g;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_g__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg'+
			'0KCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDMzNC42Yy0zNC41LDAtNjIuNCwyNy45LTYyLjQsNjIuNHMyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjRTLTE0MC41LDMzNC42LTE3NSwzMzQuNnoNCgkJIE0tMTcyLjgsMzgxLjZjMCw1LjgtMy4zLDguNi02LjYsMTEuMmMtMSwxLTIuMiwyLjEtMi4yLDMuOXMxLjIsMi43LDIuMSwzLjRsMi44LDIuMmMzLjUsMi45LDYuNiw1LjYsNi42LDExDQoJCWMwLDcuNC03LjIsMTQuOS0yMC44LDE0LjljLTExLjUsMC0xNy01LjUtMTctMTEuM2MwLTIuOCwxLjQtNi45LDYuMS05LjZjNC45LTMsMTEuNS0zLjQsMTUuMS0zLjZj'+
			'LTEuMS0xLjQtMi40LTIuOS0yLjQtNS40DQoJCWMwLTEuNCwwLjQtMi4xLDAuOC0zLjFjLTAuOSwwLjEtMS43LDAuMi0yLjUsMC4yYy04LjQsMC0xMy4xLTYuMi0xMy4xLTEyLjRjMC0zLjYsMS42LTcuNiw1LjEtMTAuNmM0LjUtMy43LDkuOS00LjQsMTQuMS00LjRoMTYuMw0KCQlsLTUsMi44bC00LjksMEMtMTc2LjYsMzcyLjQtMTcyLjgsMzc1LjYtMTcyLjgsMzgxLjZ6IE0tMTM4LjIsMzgyLjdoLTEydjEyaC0zdi0xMmgtMTJ2LTNoMTJ2LTEyaDN2MTJoMTJWMzgyLjd6Ii8+DQoJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xODUuOCw0MDUuOWMtMC43LDAtNSwwLjItOC4zLDEuM2MtMS43LD'+
			'AuNi02LjgsMi41LTYuOCw4LjFjMCw1LjYsNS41LDkuNiwxMy45LDkuNg0KCQljNy42LDAsMTEuNi0zLjYsMTEuNi04LjVjMC00LTIuNi02LjItOC42LTEwLjRDLTE4NC42LDQwNS45LTE4NSw0MDUuOS0xODUuOCw0MDUuOXoiLz4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE4OS43LDM3MC43Yy0yLjEsMC00LjMsMS01LjUsMi42Yy0xLjMsMS43LTEuNywzLjgtMS43LDUuOGMwLDUuMywzLjEsMTQsOS45LDE0YzIsMCw0LjEtMC45LDUuNC0yLjINCgkJYzEuOC0xLjgsMi00LjQsMi01LjhDLTE3OS43LDM3OS41LTE4My4xLDM3MC43LTE4OS43LDM3MC43eiIvPg0KPC9nPg0KPGc+DQoJPHBh'+
			'dGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzguNCwzNzEuMWMxLjgsMS41LDUuNiw0LjYsNS42LDEwLjdjMCw1LjgtMy4zLDguNi02LjYsMTEuMmMtMSwxLTIuMiwyLjEtMi4yLDMuOXMxLjIsMi43LDIuMSwzLjQNCgkJbDIuOCwyLjJjMy41LDIuOSw2LjYsNS42LDYuNiwxMWMwLDcuNC03LjIsMTQuOS0yMC44LDE0LjljLTExLjUsMC0xNy01LjUtMTctMTEuM2MwLTIuOCwxLjQtNi45LDYuMS05LjZjNC45LTMsMTEuNS0zLjQsMTUuMS0zLjYNCgkJYy0xLjEtMS40LTIuNC0yLjktMi40LTUuNGMwLTEuNCwwLjQtMi4xLDAuOC0zLjFjLTAuOSwwLjEtMS43LDAuMi0yLjUsMC4yYy04LjQsMC0xMy4xLT'+
			'YuMi0xMy4xLTEyLjRjMC0zLjYsMS42LTcuNiw1LjEtMTAuNg0KCQljNC41LTMuNyw5LjktNC40LDE0LjEtNC40aDE2LjNsLTUsMi44Qy0xNzMuNSwzNzEtMTc4LjQsMzcxLjEtMTc4LjQsMzcxLjF6IE0tMTg0LDQwNi4xYy0wLjYtMC4xLTEtMC4xLTEuOC0wLjENCgkJYy0wLjcsMC01LDAuMi04LjMsMS4zYy0xLjcsMC42LTYuOCwyLjUtNi44LDguMWMwLDUuNiw1LjUsOS42LDEzLjksOS42YzcuNiwwLDExLjYtMy42LDExLjYtOC41Qy0xNzUuNCw0MTIuNS0xNzgsNDEwLjMtMTg0LDQwNi4xDQoJCSBNLTE4MS43LDM5MS4xYzEuOC0xLjgsMi00LjQsMi01LjhjMC01LjctMy40LTE0LjUtOS45LTE0'+
			'LjVjLTIuMSwwLTQuMywxLTUuNSwyLjZjLTEuMywxLjctMS43LDMuOC0xLjcsNS44YzAsNS4zLDMuMSwxNCw5LjksMTQNCgkJQy0xODUuMSwzOTMuMy0xODIuOSwzOTIuNC0xODEuNywzOTEuMSIvPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTM4LjIsMzc5LjloLTEydi0xMmgtM3YxMmgtMTJ2M2gxMnYxMmgzdi0xMmgxMlYzNzkuOXoiLz4NCjwvZz4NCjwvc3ZnPg0K';
		me._button_g__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;button_g;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_G+";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 19px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_g.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_g.onclick=function (e) {
			window.open('https://plusone.google.com/_/+1/confirm?url=' + location.href);
		}
		me._button_g.onmouseover=function (e) {
			me._button_g__img.style.visibility='hidden';
			me._button_g__imgo.style.visibility='inherit';
		}
		me._button_g.onmouseout=function (e) {
			me._button_g__img.style.visibility='inherit';
			me._button_g__imgo.style.visibility='hidden';
		}
		me._button_g.ggUpdatePosition=function (useTransition) {
		}
		me._social_rectangle_1.appendChild(me._button_g);
		el=me._button_facebook=document.createElement('div');
		els=me._button_facebook__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYX'+
			'RoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDM0MC44Yy0zMSwwLTU2LjIsMjUuMS01Ni4yLDU2LjJjMCwzMS4xLDI1LjEsNTYuMiw1Ni4yLDU2LjJzNTYuMi0yNS4xLDU2LjItNTYuMg0KCUMtMTE4LjgsMzY1LjktMTQ0LDM0MC44LTE3NSwzNDAuOHogTS0xNTguMywzNzcuNmgtMTBjLTEuMiwwLTIuNSwxLjYtMi41LDMuOHY2LjRoMTIuNXYxMi41aC0xMi41djMwLjFoLTEyLjV2LTMwLjFoLTEwdi0xMi41aDEwDQoJdi02LjNjMC05LDYuNy0xNi4zLDE1LTE2LjNoMTBWMzc3LjZ6Ii8+DQo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2OC4zLDM3Ny42aDEwdi0xMi40aC0xMGMtOC4zLDAtMTUs'+
			'Ny4zLTE1LDE2LjN2Ni4zaC0xMHYxMi41aDEwdjMwLjFoMTIuNXYtMzAuMWgxMi41di0xMi41aC0xMi41di02LjQNCglDLTE3MC44LDM3OS4yLTE2OS41LDM3Ny42LTE2OC4zLDM3Ny42eiIvPg0KPC9zdmc+DQo=';
		me._button_facebook__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_facebook;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_facebook__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYX'+
			'RoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDMzNC42Yy0zNC41LDAtNjIuNCwyNy45LTYyLjQsNjIuNHMyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjRTLTE0MC41LDMzNC42LTE3NSwzMzQuNnogTS0xNTYuNSwzNzUuNg0KCWgtMTFjLTEuMywwLTIuOCwxLjgtMi44LDQuMXY3aDEzLjh2MTMuN2gtMTMuOHYzMy4yaC0xMy44di0zMy4yaC0xMXYtMTMuN2gxMXYtNi45YzAtOS45LDcuNC0xNy45LDE2LjUtMTcuOWgxMVYzNzUuNnoiLz4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTY3LjUsMzc1LjZoMTF2LTEzLjZoLTExYy05LjEsMC0xNi41LDgtMTYuNSwxNy45djYu'+
			'OWgtMTF2MTMuN2gxMXYzMy4yaDEzLjh2LTMzLjJoMTMuOHYtMTMuN2gtMTMuOHYtNw0KCUMtMTcwLjMsMzc3LjMtMTY4LjgsMzc1LjYtMTY3LjUsMzc1LjZ6Ii8+DQo8L3N2Zz4NCg==';
		me._button_facebook__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;button_facebook;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_facebook";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : 37px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_facebook.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_facebook.onclick=function (e) {
			window.open('https://www.facebook.com/sharer/sharer.php?u=' + location.href);
		}
		me._button_facebook.onmouseover=function (e) {
			me._button_facebook__img.style.visibility='hidden';
			me._button_facebook__imgo.style.visibility='inherit';
		}
		me._button_facebook.onmouseout=function (e) {
			me._button_facebook__img.style.visibility='inherit';
			me._button_facebook__imgo.style.visibility='hidden';
		}
		me._button_facebook.ggUpdatePosition=function (useTransition) {
		}
		me._social_rectangle_1.appendChild(me._button_facebook);
		el=me._button_twitter=document.createElement('div');
		els=me._button_twitter__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYX'+
			'RoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDM0MC44Yy0zMSwwLTU2LjIsMjUuMS01Ni4yLDU2LjJjMCwzMS4xLDI1LjEsNTYuMiw1Ni4yLDU2LjJzNTYuMi0yNS4xLDU2LjItNTYuMg0KCUMtMTE4LjgsMzY1LjktMTQ0LDM0MC44LTE3NSwzNDAuOHogTS0xNTAsMzg1LjdsMCwxLjZjMCwxNi4zLTEyLjQsMzUuMi0zNS4yLDM1LjJjLTcsMC0xMy41LTIuMS0xOS01LjZjMSwwLjEsMS45LDAuMiwyLjksMC4yDQoJYzUuOCwwLDExLjEtMiwxNS40LTUuM2MtNS40LTAuMS0xMC0zLjctMTEuNi04LjZjMC43LDAuMSwxLjUsMC4yLDIuMywwLjJjMS4xLDAsMi4yLTAuMSwzLjItMC40Yy01LjctMS4xLTku'+
			'OS02LjEtOS45LTEyLjF2LTAuMg0KCWMxLjcsMC45LDMuNiwxLjUsNS42LDEuNmMtMy4zLTIuMi01LjUtNi01LjUtMTAuM2MwLTIuMywwLjYtNC40LDEuNy02LjJjNi4xLDcuNSwxNS4yLDEyLjQsMjUuNSwxMi45Yy0wLjItMC45LTAuMy0xLjktMC4zLTIuOA0KCWMwLTYuOCw1LjUtMTIuNCwxMi40LTEyLjRjMy41LDAsNi44LDEuNSw5LDMuOWMyLjgtMC41LDUuNS0xLjYsNy45LTNjLTAuOSwyLjktMi45LDUuMy01LjQsNi44YzIuNS0wLjMsNC45LTEsNy4xLTEuOQ0KCUMtMTQ1LjUsMzgxLjgtMTQ3LjYsMzg0LTE1MCwzODUuN3oiLz4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTQzLjksMz'+
			'c5LjNjLTIuMiwxLTQuNiwxLjYtNy4xLDEuOWMyLjUtMS41LDQuNS00LDUuNC02LjhjLTIuNCwxLjQtNSwyLjUtNy45LDNjLTIuMy0yLjQtNS41LTMuOS05LTMuOQ0KCWMtNi44LDAtMTIuNCw1LjUtMTIuNCwxMi40YzAsMSwwLjEsMS45LDAuMywyLjhjLTEwLjMtMC41LTE5LjQtNS41LTI1LjUtMTIuOWMtMS4xLDEuOC0xLjcsNC0xLjcsNi4yYzAsNC4zLDIuMiw4LjEsNS41LDEwLjMNCgljLTItMC4xLTMuOS0wLjYtNS42LTEuNnYwLjJjMCw2LDQuMywxMSw5LjksMTIuMWMtMSwwLjMtMi4xLDAuNC0zLjIsMC40Yy0wLjgsMC0xLjYtMC4xLTIuMy0wLjJjMS42LDQuOSw2LjEsOC41LDExLjYsOC42'+
			'DQoJYy00LjIsMy4zLTkuNiw1LjMtMTUuNCw1LjNjLTEsMC0yLTAuMS0yLjktMC4yYzUuNSwzLjUsMTIsNS42LDE5LDUuNmMyMi43LDAsMzUuMi0xOC44LDM1LjItMzUuMmwwLTEuNg0KCUMtMTQ3LjYsMzg0LTE0NS41LDM4MS44LTE0My45LDM3OS4zeiIvPg0KPC9zdmc+DQo=';
		me._button_twitter__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_twitter;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_twitter__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYX'+
			'RoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDMzNC42Yy0zNC41LDAtNjIuNCwyNy45LTYyLjQsNjIuNHMyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjRTLTE0MC41LDMzNC42LTE3NSwzMzQuNnoNCgkgTS0xNDcuNiwzODQuNWwwLDEuOGMwLDE4LTEzLjcsMzguNy0zOC43LDM4LjdjLTcuNywwLTE0LjgtMi4zLTIwLjktNi4xYzEuMSwwLjEsMi4xLDAuMiwzLjIsMC4yYzYuNCwwLDEyLjItMi4yLDE2LjktNS44DQoJYy02LTAuMS0xMS00LTEyLjctOS41YzAuOCwwLjIsMS43LDAuMiwyLjUsMC4yYzEuMiwwLDIuNC0wLjIsMy42LTAuNWMtNi4yLTEuMi0xMC45LTYuNy0xMC45'+
			'LTEzLjNWMzkwYzEuOCwxLDMuOSwxLjYsNi4yLDEuNw0KCWMtMy43LTIuNC02LjEtNi42LTYuMS0xMS4zYzAtMi41LDAuNy00LjgsMS44LTYuOGM2LjcsOC4yLDE2LjcsMTMuNiwyOCwxNC4yYy0wLjItMS0wLjMtMi4xLTAuMy0zLjFjMC03LjUsNi4xLTEzLjYsMTMuNi0xMy42DQoJYzMuOSwwLDcuNCwxLjYsOS45LDQuM2MzLjEtMC42LDYtMS43LDguNi0zLjNjLTEsMy4yLTMuMiw1LjgtNiw3LjVjMi43LTAuMyw1LjQtMS4xLDcuOC0yLjFDLTE0Mi43LDM4MC4yLTE0NSwzODIuNi0xNDcuNiwzODQuNXoiDQoJLz4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTQwLjksMzc3LjVjLTIuNCwxLj'+
			'EtNS4xLDEuOC03LjgsMi4xYzIuOC0xLjcsNS00LjQsNi03LjVjLTIuNiwxLjYtNS41LDIuNy04LjYsMy4zDQoJYy0yLjUtMi42LTYtNC4zLTkuOS00LjNjLTcuNSwwLTEzLjYsNi4xLTEzLjYsMTMuNmMwLDEuMSwwLjEsMi4xLDAuMywzLjFjLTExLjMtMC42LTIxLjMtNi0yOC0xNC4yYy0xLjIsMi0xLjgsNC40LTEuOCw2LjgNCgljMCw0LjcsMi40LDguOSw2LjEsMTEuM2MtMi4yLTAuMS00LjMtMC43LTYuMi0xLjd2MC4yYzAsNi42LDQuNywxMi4xLDEwLjksMTMuM2MtMS4yLDAuMy0yLjMsMC41LTMuNiwwLjVjLTAuOSwwLTEuNy0wLjEtMi41LTAuMg0KCWMxLjcsNS40LDYuNyw5LjMsMTIuNyw5'+
			'LjVjLTQuNywzLjYtMTAuNSw1LjgtMTYuOSw1LjhjLTEuMSwwLTIuMi0wLjEtMy4yLTAuMmM2LDMuOSwxMy4yLDYuMSwyMC45LDYuMWMyNSwwLDM4LjctMjAuNywzOC43LTM4LjcNCglsMC0xLjhDLTE0NSwzODIuNi0xNDIuNywzODAuMi0xNDAuOSwzNzcuNXoiLz4NCjwvc3ZnPg0K';
		me._button_twitter__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;button_twitter;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_twitter";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : 63px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_twitter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_twitter.onclick=function (e) {
			window.open('http://twitter.com/share?url=' + location.href);
		}
		me._button_twitter.onmouseover=function (e) {
			me._button_twitter__img.style.visibility='hidden';
			me._button_twitter__imgo.style.visibility='inherit';
		}
		me._button_twitter.onmouseout=function (e) {
			me._button_twitter__img.style.visibility='inherit';
			me._button_twitter__imgo.style.visibility='hidden';
		}
		me._button_twitter.ggUpdatePosition=function (useTransition) {
		}
		me._social_rectangle_1.appendChild(me._button_twitter);
		me._buttons_social.appendChild(me._social_rectangle_1);
		me._header.appendChild(me._buttons_social);
		el=me._headerbg=document.createElement('div');
		els=me._headerbg__img=document.createElement('img');
		els.className='ggskin ggskin_headerbg';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAABYCAYAAAADWVAbAAAEf0lEQVR4nO3cz07jVhTA4XNtJ4KIRPAALNjMK+RBW9ZVn4h1n4AtfwRJHMXuYpoZhaCKDpya8XzfLta1c9Y/Hd1yfX0dAAAAAADw0Zrb29uhZwAAAAAA4JOr6zoWi0WUUg6el1JiOp2++k559SkAAAAAALywj8993x88Pz8/j1JKTCaTuLi4iKqqYjKZDDEiAAAAAAAAAAAAAMAPKnVdDz0DAAAAAMAva7fbDT1Cmma5XP4+9BAAAAAAAL+qtm2j67o3n23b9k1n1+v10dmu62K1Wh38XyklNpvN0b3OXdcdPfuvmsVi8SUi3vcVAAAAAAB+Cq9tXL8WoNfrdWy324Nn2+02np+fj959Gbr332tms9mfEfG2vA4AAAAAwOjM5/Mffrfv+6MN7n+2uk'+
			'szm83EZwAAAAAAPlrfzGazoYcAAAAAAGCEmpOTk6FnAAAAAABghARoAAAAAABSNNPpdOgZAAAAAAAYIQEaAAAAAIAUAjQAAAAAACma1Wo19AwAAAAAAIxQc3NzM/QMAAAAAACMUDX0AAAAAAAAjJM7oAEAAAAASCFAAwAAAACQoplMJkPPAAAAAADACAnQAAAAAACkaOq6HnoGAAAAAABGSIAGAAAAACBFU1XV0DMAAAAAADBCAjQAAAAAACkEaAAAAAAAUgjQAAAAAACkEKABAAAAAEghQAMAAAAAkEKABgAAAAAgRVNKGXoGAAAAAABGyAY0AAAAAAApbEADAAAAAJDCBjQAAAAAAClsQAMAAAAAkMIGNAAAAAAAKQRoAAAAAABSuIIDAAAAAIAUAjQAAAAAAClcwQEAAAAAQAob0AAAAAAApBCgAQAAAABIIUAD'+
			'AAAAAJBCgAYAAAAAIIUADQAAAABACgEaAAAAAIAUAjQAAAAAACkEaAAAAAAAUgjQAAAAAACkqIYeAAAAAACAcbIBDQAAAABACgEaAAAAAIAUruAAAAAAACCFDWgAAAAAAFII0AAAAAAApHAFBwAAAAAAKWxAAwAAAACQwgY0AAAAAAApBGgAAAAAAFII0AAAAAAApBCgAQAAAABIIUADAAAAAJBCgAYAAAAAIIUADQAAAABACgEaAAAAAIAUAjQAAAAAACkEaAAAAAAAUgjQAAAAAACkEKABAAAAAEghQAMAAAAAkEKABgAAAAAghQANAAAAAEAKARoAAAAAgBQCNAAAAAAAKQRoAAAAAABSCNAAAAAAAKQQoAEAAAAASCFAAwAAAACQoomIEhH90IMAAAAAADC8rutiu92++fxut4uHh4fo+8PM3LZtVZbL5R8fPS'+
			'AAAAAAAD+np6enuLu7i4ivMbqqvl+ksY/Mfd/HZrOJiK8B+vHxMSIiqqqKs7Oz/fHS3N/fP/1vkwMAAAAA8OntI3JVVTGfz6Oqquj7/mjL+aW6ruP09DRKKRER0VxdXf0W7oIGAAAAAOCDNRHx19BDAAAAAAAwPjafAQAAAABIIUADAAAAAJCiuby8/PajbdtYrVb/+kLXdbFer9/9x33fx263e/d3AAAAAAD4nP4G/SS1nPcs1RUAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="HeaderBg";
		el.ggDx=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 158px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 1250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._headerbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._headerbg.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._header.appendChild(me._headerbg);
		el=me._contact_info=document.createElement('div');
		els=me._contact_info__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Contact_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 132px;';
		hs+='left : 120px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 734px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 734px;';
		hs+='height: 132px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(25,25,25,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<font color=\"white\" size=\"3\"><br\/>WING S. ACEVEDO<br\/>Senior Property Consultant<br\/>HLURB # 012898<br\/>call : <a href=\"tel:+63022197172\" style=\"color:white\">509.6592<\/a> <br\/>sms: <a href=\"sms:+63909273935803?body=I%20am%20interested.%20Please%20contact%20me.\"style=\"color:white\">0927.393.5803<\/a><br\/>\u2709 : <a href=\"mailto:sales@360dmcihomes.com?Subject=Hello\" style=\"color:white\" target=\"_top\"> sales@360DMCIHomes.com<\/a><\/font>";
		el.appendChild(els);
		me._contact_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._contact_info.ggUpdatePosition=function (useTransition) {
		}
		me._header.appendChild(me._contact_info);
		el=me._thumbnail_menu=document.createElement('div');
		els=me._thumbnail_menu__content=document.createElement('div');
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 88px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 120px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0) return;
			me._thumbnail_menu.ggScrollPosX = (me._thumbnail_menu__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
			me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.clientWidth - me._thumbnail_menu__horScrollFg.clientWidth);
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.clientWidth);
		}
		me._thumbnail_menu.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu.ggScrollPosX >= me._thumbnail_menu__horScrollBg.clientWidth - me._thumbnail_menu__horScrollFg.clientWidth)) {
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.clientWidth - me._thumbnail_menu__horScrollFg.clientWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu.ggScrollPosX <= 0)) {
					me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.clientWidth);
			}, 10);
		}
		me._thumbnail_menu.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0) return;
			me._thumbnail_menu.ggScrollPosY = (me._thumbnail_menu__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
			me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.clientHeight - me._thumbnail_menu__vertScrollFg.clientHeight);
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			me._thumbnail_menu__content.style.top = -(Math.round(me._thumbnail_menu.ggScrollPosY / me._thumbnail_menu.ggVPercentVisible)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.clientHeight);
		}
		me._thumbnail_menu.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu.ggScrollPosY >= me._thumbnail_menu__vertScrollBg.clientHeight - me._thumbnail_menu__vertScrollFg.clientHeight)) {
					me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.clientHeight - me._thumbnail_menu__vertScrollFg.clientHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu.ggScrollPosY <= 0)) {
					me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			me._thumbnail_menu__content.style.top = -(Math.round(me._thumbnail_menu.ggScrollPosY / me._thumbnail_menu.ggVPercentVisible)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.clientHeight);
			}, 10);
		}
		me._thumbnail_menu.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t[0].clientX;
			me._thumbnail_menu.ggDragLastY = t[0].clientY;
			me._thumbnail_menu__content.ontouchend = function() {
				me._thumbnail_menu__content.ontouchend = null;
				me._thumbnail_menu__content.ontouchmove = null;
			}
			me._thumbnail_menu__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu.ggDragLastX;
				var diffY = t[0].clientY - me._thumbnail_menu.ggDragLastY;
				me._thumbnail_menu.ggDragLastX = t[0].clientX;
				me._thumbnail_menu.ggDragLastY = t[0].clientY;
				me._thumbnail_menu.ggScrollByX(-diffX);
				me._thumbnail_menu.ggScrollByY(-diffY);
			}
		}
		elHorScrollBg = me._thumbnail_menu__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 714.428px; height: 15px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 714.428px; height: 15px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._thumbnail_menu.ggScrollPosX = 0;
		me._thumbnail_menu.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragLastX = e.clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t[0].clientX;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragLastX = t[0].clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu.ggScrollByXSmooth(20 * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Thumbnail Menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(195,195,195,0);';
		hs+='border : 1px solid rgba(209,209,209,0);';
		hs+='height : 109px;';
		hs+='left : 404px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 57.2%;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 5px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_menu.ggUpdatePosition=function (useTransition) {
			{
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var clientWidthWithScale = this.getBoundingClientRect().width;
				var clientHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e.getBoundingClientRect) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes()) {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > clientWidthWithScale) {
					me._thumbnail_menu__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu.ggHorScrollVisible) {
					if (me._thumbnail_menu.ggVertScrollVisible) {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth - 15;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width - me._thumbnail_menu__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width;
					}
					me._thumbnail_menu__horScrollBg.style.width = me._thumbnail_menu.ggAvailableWidth + 'px';
					me._thumbnail_menu.ggHPercentVisible = me._thumbnail_menu.ggAvailableWidthWithScale / contentWidth;
					if (me._thumbnail_menu.ggHPercentVisible > 1.0) me._thumbnail_menu.ggHPercentVisible = 1.0;
					me._thumbnail_menu.ggScrollWidth = Math.round(me._thumbnail_menu__horScrollBg.clientWidth * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu__horScrollFg.style.width = me._thumbnail_menu.ggScrollWidth + 'px';
					me._thumbnail_menu.ggScrollPosX = me._thumbnail_menu.ggScrollPosXPercent * me._thumbnail_menu.ggAvailableWidth;
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.clientWidth - me._thumbnail_menu__horScrollFg.clientWidth);
					me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
					me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				} else {
					me._thumbnail_menu.ggScrollPosX = 0;
					me._thumbnail_menu.ggScrollPosXPercent = 0.0;
					me._thumbnail_menu__content.style.left = this.ggContentLeftOffset + 'px';
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggWidth = 117;
		el.ggHeight = 86;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._tnhintbox.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._tnhintbox.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._tn_checkmark_tick.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._tn_checkmark_tick.logicBlock_visible();
					}
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._tn_checkmark_tick.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._tn_checkmark_tick.logicBlock_visible();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			var el=me._thumbnail_cloner;
			el.ggInstances = [];
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			el.ggCurrentFilter = filter;
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var numRows = el.ggNumRepeat;
			if (numRows < 1) numRows = 1;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				if (filter.length > 0) {
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner.ggWidth) + 'px';
				var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me, el, parameter);
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= numRows) {
					row = 0;
					column++;
				}
				}
			}
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_active();
			me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes();
			me._thumbnail_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
		}
		el.ggFilter = [];
		el.ggId="Thumbnail Cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 86px;';
		hs+='left : 3px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 117px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
			var w=player.getViewerSize().width;
			var h=player.getViewerSize().height
			if ((!me._thumbnail_cloner.ggLastSize) || (me._thumbnail_cloner.ggLastSize.w!=w) || (me._thumbnail_cloner.ggLastSize.h!=h)) {
				me._thumbnail_cloner.ggLastSize={ w:w, h:h };
				me._thumbnail_cloner.ggUpdate();
			}
		}
		me._thumbnail_cloner.ggNodeChange=function () {
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu__content.appendChild(me._thumbnail_cloner);
		me._header.appendChild(me._thumbnail_menu);
		el=me._dmcihomeslogo=document.createElement('div');
		els=me._dmcihomeslogo__img=document.createElement('img');
		els.className='ggskin ggskin_dmcihomeslogo';
		hs=basePath + 'images/dmcihomeslogo.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="DMCIHomeslogo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 110px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dmcihomeslogo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dmcihomeslogo.ggUpdatePosition=function (useTransition) {
		}
		me._header.appendChild(me._dmcihomeslogo);
		me._container4hdr.appendChild(me._header);
		me.divSkin.appendChild(me._container4hdr);
		var clonedNormalElement = new SkinElement__1brdot_Class(this,me.__1brmarker_1);
		me.__1brmarker_1__normal = clonedNormalElement.__1brdot;
		me.__1brmarker_1__normal.style.visibility='inherit';
		me.__1brmarker_1__normal.style.left='-3px';
		me.__1brmarker_1__normal.style.top='-3px';
		me.__1brmarker_1.ggMarkerNormal=me.__1brmarker_1__normal;
		me.__1brmarker_1.ggMarkerInstances.push(me.__1brmarker_1__normal);
		var clonedActiveElement = new SkinElement__1brdot_Class(this,me.__1brmarker_1);
		me.__1brmarker_1__active= clonedActiveElement.__1brdot;
		me.__1brmarker_1__active.style.visibility='hidden';
		me.__1brmarker_1__active.style.left='-3px';
		me.__1brmarker_1__active.style.top='-3px';
		me.__1brmarker_1.ggMarkerActive=me.__1brmarker_1__active;
		me.__1brmarker_1.ggMarkerInstances.push(me.__1brmarker_1__active);
		if (me.__1brmarker_1.firstChild) {
			me.__1brmarker_1.insertBefore(me.__1brmarker_1__active,me.__1brmarker_1.firstChild);
		} else {
			me.__1brmarker_1.appendChild(me.__1brmarker_1__active);
		}
		if (me.__1brmarker_1.firstChild) {
			me.__1brmarker_1.insertBefore(me.__1brmarker_1__normal,me.__1brmarker_1.firstChild);
		} else {
			me.__1brmarker_1.appendChild(me.__1brmarker_1__normal);
		}
		for (var i = 0; i < me.__1brmarker_1.childNodes.length; i++) {
			me.__1brmarker_1.ggMarkerInstances.push(me.__1brmarker_1.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__1brdot_Class(this,me.__1brmarker_2);
		me.__1brmarker_2__normal = clonedNormalElement.__1brdot;
		me.__1brmarker_2__normal.style.visibility='inherit';
		me.__1brmarker_2__normal.style.left='-3px';
		me.__1brmarker_2__normal.style.top='-3px';
		me.__1brmarker_2.ggMarkerNormal=me.__1brmarker_2__normal;
		me.__1brmarker_2.ggMarkerInstances.push(me.__1brmarker_2__normal);
		var clonedActiveElement = new SkinElement__1brdot_Class(this,me.__1brmarker_2);
		me.__1brmarker_2__active= clonedActiveElement.__1brdot;
		me.__1brmarker_2__active.style.visibility='hidden';
		me.__1brmarker_2__active.style.left='-3px';
		me.__1brmarker_2__active.style.top='-3px';
		me.__1brmarker_2.ggMarkerActive=me.__1brmarker_2__active;
		me.__1brmarker_2.ggMarkerInstances.push(me.__1brmarker_2__active);
		if (me.__1brmarker_2.firstChild) {
			me.__1brmarker_2.insertBefore(me.__1brmarker_2__active,me.__1brmarker_2.firstChild);
		} else {
			me.__1brmarker_2.appendChild(me.__1brmarker_2__active);
		}
		if (me.__1brmarker_2.firstChild) {
			me.__1brmarker_2.insertBefore(me.__1brmarker_2__normal,me.__1brmarker_2.firstChild);
		} else {
			me.__1brmarker_2.appendChild(me.__1brmarker_2__normal);
		}
		for (var i = 0; i < me.__1brmarker_2.childNodes.length; i++) {
			me.__1brmarker_2.ggMarkerInstances.push(me.__1brmarker_2.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__1brdot_Class(this,me.__1brmarker_3);
		me.__1brmarker_3__normal = clonedNormalElement.__1brdot;
		me.__1brmarker_3__normal.style.visibility='inherit';
		me.__1brmarker_3__normal.style.left='-3px';
		me.__1brmarker_3__normal.style.top='-3px';
		me.__1brmarker_3.ggMarkerNormal=me.__1brmarker_3__normal;
		me.__1brmarker_3.ggMarkerInstances.push(me.__1brmarker_3__normal);
		var clonedActiveElement = new SkinElement__1brdot_Class(this,me.__1brmarker_3);
		me.__1brmarker_3__active= clonedActiveElement.__1brdot;
		me.__1brmarker_3__active.style.visibility='hidden';
		me.__1brmarker_3__active.style.left='-3px';
		me.__1brmarker_3__active.style.top='-3px';
		me.__1brmarker_3.ggMarkerActive=me.__1brmarker_3__active;
		me.__1brmarker_3.ggMarkerInstances.push(me.__1brmarker_3__active);
		if (me.__1brmarker_3.firstChild) {
			me.__1brmarker_3.insertBefore(me.__1brmarker_3__active,me.__1brmarker_3.firstChild);
		} else {
			me.__1brmarker_3.appendChild(me.__1brmarker_3__active);
		}
		if (me.__1brmarker_3.firstChild) {
			me.__1brmarker_3.insertBefore(me.__1brmarker_3__normal,me.__1brmarker_3.firstChild);
		} else {
			me.__1brmarker_3.appendChild(me.__1brmarker_3__normal);
		}
		for (var i = 0; i < me.__1brmarker_3.childNodes.length; i++) {
			me.__1brmarker_3.ggMarkerInstances.push(me.__1brmarker_3.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__1brdot_Class(this,me.__1brmarker_4);
		me.__1brmarker_4__normal = clonedNormalElement.__1brdot;
		me.__1brmarker_4__normal.style.visibility='inherit';
		me.__1brmarker_4__normal.style.left='-3px';
		me.__1brmarker_4__normal.style.top='-3px';
		me.__1brmarker_4.ggMarkerNormal=me.__1brmarker_4__normal;
		me.__1brmarker_4.ggMarkerInstances.push(me.__1brmarker_4__normal);
		var clonedActiveElement = new SkinElement__1brdot_Class(this,me.__1brmarker_4);
		me.__1brmarker_4__active= clonedActiveElement.__1brdot;
		me.__1brmarker_4__active.style.visibility='hidden';
		me.__1brmarker_4__active.style.left='-3px';
		me.__1brmarker_4__active.style.top='-3px';
		me.__1brmarker_4.ggMarkerActive=me.__1brmarker_4__active;
		me.__1brmarker_4.ggMarkerInstances.push(me.__1brmarker_4__active);
		if (me.__1brmarker_4.firstChild) {
			me.__1brmarker_4.insertBefore(me.__1brmarker_4__active,me.__1brmarker_4.firstChild);
		} else {
			me.__1brmarker_4.appendChild(me.__1brmarker_4__active);
		}
		if (me.__1brmarker_4.firstChild) {
			me.__1brmarker_4.insertBefore(me.__1brmarker_4__normal,me.__1brmarker_4.firstChild);
		} else {
			me.__1brmarker_4.appendChild(me.__1brmarker_4__normal);
		}
		for (var i = 0; i < me.__1brmarker_4.childNodes.length; i++) {
			me.__1brmarker_4.ggMarkerInstances.push(me.__1brmarker_4.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__2brdot_Class(this,me.__2brmarker_1);
		me.__2brmarker_1__normal = clonedNormalElement.__2brdot;
		me.__2brmarker_1__normal.style.visibility='inherit';
		me.__2brmarker_1__normal.style.left='-3px';
		me.__2brmarker_1__normal.style.top='-3px';
		me.__2brmarker_1.ggMarkerNormal=me.__2brmarker_1__normal;
		me.__2brmarker_1.ggMarkerInstances.push(me.__2brmarker_1__normal);
		var clonedActiveElement = new SkinElement__2brdot_Class(this,me.__2brmarker_1);
		me.__2brmarker_1__active= clonedActiveElement.__2brdot;
		me.__2brmarker_1__active.style.visibility='hidden';
		me.__2brmarker_1__active.style.left='-3px';
		me.__2brmarker_1__active.style.top='-3px';
		me.__2brmarker_1.ggMarkerActive=me.__2brmarker_1__active;
		me.__2brmarker_1.ggMarkerInstances.push(me.__2brmarker_1__active);
		if (me.__2brmarker_1.firstChild) {
			me.__2brmarker_1.insertBefore(me.__2brmarker_1__active,me.__2brmarker_1.firstChild);
		} else {
			me.__2brmarker_1.appendChild(me.__2brmarker_1__active);
		}
		if (me.__2brmarker_1.firstChild) {
			me.__2brmarker_1.insertBefore(me.__2brmarker_1__normal,me.__2brmarker_1.firstChild);
		} else {
			me.__2brmarker_1.appendChild(me.__2brmarker_1__normal);
		}
		for (var i = 0; i < me.__2brmarker_1.childNodes.length; i++) {
			me.__2brmarker_1.ggMarkerInstances.push(me.__2brmarker_1.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__2brdot_Class(this,me.__2brmarkerr_2);
		me.__2brmarkerr_2__normal = clonedNormalElement.__2brdot;
		me.__2brmarkerr_2__normal.style.visibility='inherit';
		me.__2brmarkerr_2__normal.style.left='-3px';
		me.__2brmarkerr_2__normal.style.top='-3px';
		me.__2brmarkerr_2.ggMarkerNormal=me.__2brmarkerr_2__normal;
		me.__2brmarkerr_2.ggMarkerInstances.push(me.__2brmarkerr_2__normal);
		var clonedActiveElement = new SkinElement__2brdot_Class(this,me.__2brmarkerr_2);
		me.__2brmarkerr_2__active= clonedActiveElement.__2brdot;
		me.__2brmarkerr_2__active.style.visibility='hidden';
		me.__2brmarkerr_2__active.style.left='-3px';
		me.__2brmarkerr_2__active.style.top='-3px';
		me.__2brmarkerr_2.ggMarkerActive=me.__2brmarkerr_2__active;
		me.__2brmarkerr_2.ggMarkerInstances.push(me.__2brmarkerr_2__active);
		if (me.__2brmarkerr_2.firstChild) {
			me.__2brmarkerr_2.insertBefore(me.__2brmarkerr_2__active,me.__2brmarkerr_2.firstChild);
		} else {
			me.__2brmarkerr_2.appendChild(me.__2brmarkerr_2__active);
		}
		if (me.__2brmarkerr_2.firstChild) {
			me.__2brmarkerr_2.insertBefore(me.__2brmarkerr_2__normal,me.__2brmarkerr_2.firstChild);
		} else {
			me.__2brmarkerr_2.appendChild(me.__2brmarkerr_2__normal);
		}
		for (var i = 0; i < me.__2brmarkerr_2.childNodes.length; i++) {
			me.__2brmarkerr_2.ggMarkerInstances.push(me.__2brmarkerr_2.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__2brdot_Class(this,me.__2brmarker_3);
		me.__2brmarker_3__normal = clonedNormalElement.__2brdot;
		me.__2brmarker_3__normal.style.visibility='inherit';
		me.__2brmarker_3__normal.style.left='-3px';
		me.__2brmarker_3__normal.style.top='-3px';
		me.__2brmarker_3.ggMarkerNormal=me.__2brmarker_3__normal;
		me.__2brmarker_3.ggMarkerInstances.push(me.__2brmarker_3__normal);
		var clonedActiveElement = new SkinElement__2brdot_Class(this,me.__2brmarker_3);
		me.__2brmarker_3__active= clonedActiveElement.__2brdot;
		me.__2brmarker_3__active.style.visibility='hidden';
		me.__2brmarker_3__active.style.left='-3px';
		me.__2brmarker_3__active.style.top='-3px';
		me.__2brmarker_3.ggMarkerActive=me.__2brmarker_3__active;
		me.__2brmarker_3.ggMarkerInstances.push(me.__2brmarker_3__active);
		if (me.__2brmarker_3.firstChild) {
			me.__2brmarker_3.insertBefore(me.__2brmarker_3__active,me.__2brmarker_3.firstChild);
		} else {
			me.__2brmarker_3.appendChild(me.__2brmarker_3__active);
		}
		if (me.__2brmarker_3.firstChild) {
			me.__2brmarker_3.insertBefore(me.__2brmarker_3__normal,me.__2brmarker_3.firstChild);
		} else {
			me.__2brmarker_3.appendChild(me.__2brmarker_3__normal);
		}
		for (var i = 0; i < me.__2brmarker_3.childNodes.length; i++) {
			me.__2brmarker_3.ggMarkerInstances.push(me.__2brmarker_3.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__2brdot_Class(this,me.__2brmarker_4);
		me.__2brmarker_4__normal = clonedNormalElement.__2brdot;
		me.__2brmarker_4__normal.style.visibility='inherit';
		me.__2brmarker_4__normal.style.left='-3px';
		me.__2brmarker_4__normal.style.top='-3px';
		me.__2brmarker_4.ggMarkerNormal=me.__2brmarker_4__normal;
		me.__2brmarker_4.ggMarkerInstances.push(me.__2brmarker_4__normal);
		var clonedActiveElement = new SkinElement__2brdot_Class(this,me.__2brmarker_4);
		me.__2brmarker_4__active= clonedActiveElement.__2brdot;
		me.__2brmarker_4__active.style.visibility='hidden';
		me.__2brmarker_4__active.style.left='-3px';
		me.__2brmarker_4__active.style.top='-3px';
		me.__2brmarker_4.ggMarkerActive=me.__2brmarker_4__active;
		me.__2brmarker_4.ggMarkerInstances.push(me.__2brmarker_4__active);
		if (me.__2brmarker_4.firstChild) {
			me.__2brmarker_4.insertBefore(me.__2brmarker_4__active,me.__2brmarker_4.firstChild);
		} else {
			me.__2brmarker_4.appendChild(me.__2brmarker_4__active);
		}
		if (me.__2brmarker_4.firstChild) {
			me.__2brmarker_4.insertBefore(me.__2brmarker_4__normal,me.__2brmarker_4.firstChild);
		} else {
			me.__2brmarker_4.appendChild(me.__2brmarker_4__normal);
		}
		for (var i = 0; i < me.__2brmarker_4.childNodes.length; i++) {
			me.__2brmarker_4.ggMarkerInstances.push(me.__2brmarker_4.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__2brdot_Class(this,me.__2brmarker_5);
		me.__2brmarker_5__normal = clonedNormalElement.__2brdot;
		me.__2brmarker_5__normal.style.visibility='inherit';
		me.__2brmarker_5__normal.style.left='-3px';
		me.__2brmarker_5__normal.style.top='-3px';
		me.__2brmarker_5.ggMarkerNormal=me.__2brmarker_5__normal;
		me.__2brmarker_5.ggMarkerInstances.push(me.__2brmarker_5__normal);
		var clonedActiveElement = new SkinElement__2brdot_Class(this,me.__2brmarker_5);
		me.__2brmarker_5__active= clonedActiveElement.__2brdot;
		me.__2brmarker_5__active.style.visibility='hidden';
		me.__2brmarker_5__active.style.left='-3px';
		me.__2brmarker_5__active.style.top='-3px';
		me.__2brmarker_5.ggMarkerActive=me.__2brmarker_5__active;
		me.__2brmarker_5.ggMarkerInstances.push(me.__2brmarker_5__active);
		if (me.__2brmarker_5.firstChild) {
			me.__2brmarker_5.insertBefore(me.__2brmarker_5__active,me.__2brmarker_5.firstChild);
		} else {
			me.__2brmarker_5.appendChild(me.__2brmarker_5__active);
		}
		if (me.__2brmarker_5.firstChild) {
			me.__2brmarker_5.insertBefore(me.__2brmarker_5__normal,me.__2brmarker_5.firstChild);
		} else {
			me.__2brmarker_5.appendChild(me.__2brmarker_5__normal);
		}
		for (var i = 0; i < me.__2brmarker_5.childNodes.length; i++) {
			me.__2brmarker_5.ggMarkerInstances.push(me.__2brmarker_5.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__3brdot_Class(this,me.__3brmarker_1);
		me.__3brmarker_1__normal = clonedNormalElement.__3brdot;
		me.__3brmarker_1__normal.style.visibility='inherit';
		me.__3brmarker_1__normal.style.left='-11px';
		me.__3brmarker_1__normal.style.top='0px';
		me.__3brmarker_1.ggMarkerNormal=me.__3brmarker_1__normal;
		me.__3brmarker_1.ggMarkerInstances.push(me.__3brmarker_1__normal);
		var clonedActiveElement = new SkinElement__3brdot_Class(this,me.__3brmarker_1);
		me.__3brmarker_1__active= clonedActiveElement.__3brdot;
		me.__3brmarker_1__active.style.visibility='hidden';
		me.__3brmarker_1__active.style.left='-11px';
		me.__3brmarker_1__active.style.top='0px';
		me.__3brmarker_1.ggMarkerActive=me.__3brmarker_1__active;
		me.__3brmarker_1.ggMarkerInstances.push(me.__3brmarker_1__active);
		if (me.__3brmarker_1.firstChild) {
			me.__3brmarker_1.insertBefore(me.__3brmarker_1__active,me.__3brmarker_1.firstChild);
		} else {
			me.__3brmarker_1.appendChild(me.__3brmarker_1__active);
		}
		if (me.__3brmarker_1.firstChild) {
			me.__3brmarker_1.insertBefore(me.__3brmarker_1__normal,me.__3brmarker_1.firstChild);
		} else {
			me.__3brmarker_1.appendChild(me.__3brmarker_1__normal);
		}
		for (var i = 0; i < me.__3brmarker_1.childNodes.length; i++) {
			me.__3brmarker_1.ggMarkerInstances.push(me.__3brmarker_1.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__3brdot_Class(this,me.__3brmarker_2);
		me.__3brmarker_2__normal = clonedNormalElement.__3brdot;
		me.__3brmarker_2__normal.style.visibility='inherit';
		me.__3brmarker_2__normal.style.left='-11px';
		me.__3brmarker_2__normal.style.top='0px';
		me.__3brmarker_2.ggMarkerNormal=me.__3brmarker_2__normal;
		me.__3brmarker_2.ggMarkerInstances.push(me.__3brmarker_2__normal);
		var clonedActiveElement = new SkinElement__3brdot_Class(this,me.__3brmarker_2);
		me.__3brmarker_2__active= clonedActiveElement.__3brdot;
		me.__3brmarker_2__active.style.visibility='hidden';
		me.__3brmarker_2__active.style.left='-11px';
		me.__3brmarker_2__active.style.top='0px';
		me.__3brmarker_2.ggMarkerActive=me.__3brmarker_2__active;
		me.__3brmarker_2.ggMarkerInstances.push(me.__3brmarker_2__active);
		if (me.__3brmarker_2.firstChild) {
			me.__3brmarker_2.insertBefore(me.__3brmarker_2__active,me.__3brmarker_2.firstChild);
		} else {
			me.__3brmarker_2.appendChild(me.__3brmarker_2__active);
		}
		if (me.__3brmarker_2.firstChild) {
			me.__3brmarker_2.insertBefore(me.__3brmarker_2__normal,me.__3brmarker_2.firstChild);
		} else {
			me.__3brmarker_2.appendChild(me.__3brmarker_2__normal);
		}
		for (var i = 0; i < me.__3brmarker_2.childNodes.length; i++) {
			me.__3brmarker_2.ggMarkerInstances.push(me.__3brmarker_2.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__3brdot_Class(this,me.__3brmarker_3);
		me.__3brmarker_3__normal = clonedNormalElement.__3brdot;
		me.__3brmarker_3__normal.style.visibility='inherit';
		me.__3brmarker_3__normal.style.left='-11px';
		me.__3brmarker_3__normal.style.top='0px';
		me.__3brmarker_3.ggMarkerNormal=me.__3brmarker_3__normal;
		me.__3brmarker_3.ggMarkerInstances.push(me.__3brmarker_3__normal);
		var clonedActiveElement = new SkinElement__3brdot_Class(this,me.__3brmarker_3);
		me.__3brmarker_3__active= clonedActiveElement.__3brdot;
		me.__3brmarker_3__active.style.visibility='hidden';
		me.__3brmarker_3__active.style.left='-11px';
		me.__3brmarker_3__active.style.top='0px';
		me.__3brmarker_3.ggMarkerActive=me.__3brmarker_3__active;
		me.__3brmarker_3.ggMarkerInstances.push(me.__3brmarker_3__active);
		if (me.__3brmarker_3.firstChild) {
			me.__3brmarker_3.insertBefore(me.__3brmarker_3__active,me.__3brmarker_3.firstChild);
		} else {
			me.__3brmarker_3.appendChild(me.__3brmarker_3__active);
		}
		if (me.__3brmarker_3.firstChild) {
			me.__3brmarker_3.insertBefore(me.__3brmarker_3__normal,me.__3brmarker_3.firstChild);
		} else {
			me.__3brmarker_3.appendChild(me.__3brmarker_3__normal);
		}
		for (var i = 0; i < me.__3brmarker_3.childNodes.length; i++) {
			me.__3brmarker_3.ggMarkerInstances.push(me.__3brmarker_3.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__3brdot_Class(this,me.__3brmarker_4);
		me.__3brmarker_4__normal = clonedNormalElement.__3brdot;
		me.__3brmarker_4__normal.style.visibility='inherit';
		me.__3brmarker_4__normal.style.left='-11px';
		me.__3brmarker_4__normal.style.top='0px';
		me.__3brmarker_4.ggMarkerNormal=me.__3brmarker_4__normal;
		me.__3brmarker_4.ggMarkerInstances.push(me.__3brmarker_4__normal);
		var clonedActiveElement = new SkinElement__3brdot_Class(this,me.__3brmarker_4);
		me.__3brmarker_4__active= clonedActiveElement.__3brdot;
		me.__3brmarker_4__active.style.visibility='hidden';
		me.__3brmarker_4__active.style.left='-11px';
		me.__3brmarker_4__active.style.top='0px';
		me.__3brmarker_4.ggMarkerActive=me.__3brmarker_4__active;
		me.__3brmarker_4.ggMarkerInstances.push(me.__3brmarker_4__active);
		if (me.__3brmarker_4.firstChild) {
			me.__3brmarker_4.insertBefore(me.__3brmarker_4__active,me.__3brmarker_4.firstChild);
		} else {
			me.__3brmarker_4.appendChild(me.__3brmarker_4__active);
		}
		if (me.__3brmarker_4.firstChild) {
			me.__3brmarker_4.insertBefore(me.__3brmarker_4__normal,me.__3brmarker_4.firstChild);
		} else {
			me.__3brmarker_4.appendChild(me.__3brmarker_4__normal);
		}
		for (var i = 0; i < me.__3brmarker_4.childNodes.length; i++) {
			me.__3brmarker_4.ggMarkerInstances.push(me.__3brmarker_4.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__3brdot_Class(this,me.__3brmarker_5);
		me.__3brmarker_5__normal = clonedNormalElement.__3brdot;
		me.__3brmarker_5__normal.style.visibility='inherit';
		me.__3brmarker_5__normal.style.left='-11px';
		me.__3brmarker_5__normal.style.top='0px';
		me.__3brmarker_5.ggMarkerNormal=me.__3brmarker_5__normal;
		me.__3brmarker_5.ggMarkerInstances.push(me.__3brmarker_5__normal);
		var clonedActiveElement = new SkinElement__3brdot_Class(this,me.__3brmarker_5);
		me.__3brmarker_5__active= clonedActiveElement.__3brdot;
		me.__3brmarker_5__active.style.visibility='hidden';
		me.__3brmarker_5__active.style.left='-11px';
		me.__3brmarker_5__active.style.top='0px';
		me.__3brmarker_5.ggMarkerActive=me.__3brmarker_5__active;
		me.__3brmarker_5.ggMarkerInstances.push(me.__3brmarker_5__active);
		if (me.__3brmarker_5.firstChild) {
			me.__3brmarker_5.insertBefore(me.__3brmarker_5__active,me.__3brmarker_5.firstChild);
		} else {
			me.__3brmarker_5.appendChild(me.__3brmarker_5__active);
		}
		if (me.__3brmarker_5.firstChild) {
			me.__3brmarker_5.insertBefore(me.__3brmarker_5__normal,me.__3brmarker_5.firstChild);
		} else {
			me.__3brmarker_5.appendChild(me.__3brmarker_5__normal);
		}
		for (var i = 0; i < me.__3brmarker_5.childNodes.length; i++) {
			me.__3brmarker_5.ggMarkerInstances.push(me.__3brmarker_5.childNodes[i]);
		}
		me._map_1.ggMarkerInstances=[];
		me._map_1.ggMapId = 'googlehybrid';
		me._map_1.ggLastNodeId=null;
		me._map_1.ggMarkerArray=[];
		me._map_1.ggGoogleMarkerArray=[];
		me._map_1.ggLastZoom = -1;
		me._map_1.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		me._map_1.ggRadar.update=function() {
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			var radar=me._map_1.ggRadar;
			var map=me._map_1.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (player.getMapType(me._map_1.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map_1.ggMapId);
				pan -= me._map_1.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_1.ggFilteredIds.length > 0 && me._map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat()) && (gps[1]==radar.activeNodeLatLng.lng())) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
				var tileDeg = 360.0 / Math.pow(2, zoom);
				var rLng = tileDeg * 0.976563;
				var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat() * d2r);
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
		me._map_1.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me._map_1.ggInitMap=function(keepZoom) {
			me._map_1.ggMapNotLoaded = false;
			var mapType = player.getMapType(me._map_1.ggMapId);
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapType == 'file') {
				me._map_1.style.backgroundColor = mapDetails['bgcolor'];
				me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me._map_1.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me._map_1.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map_1.ggMapId);
			}
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = new google.maps.LatLng(0,0);
			}
			if (mapType == 'web') {
				var mapTypeId;
				if (me._map_1.ggMapId == 'googleroadmap') {
					mapTypeId = google.maps.MapTypeId.ROADMAP;
				} else if (me._map_1.ggMapId == 'googlehybrid') {
					mapTypeId = google.maps.MapTypeId.HYBRID;
				} else if (me._map_1.ggMapId == 'googlesatellite') {
					mapTypeId = google.maps.MapTypeId.SATELLITE;
				} else if (me._map_1.ggMapId == 'googleterrain') {
					mapTypeId = google.maps.MapTypeId.TERRAIN;
				} else {
					mapTypeId = mapDetails['mapprovider'];
				}
				if (me._map_1.ggLastZoom == -1) me._map_1.ggLastZoom = 14;
				var initZoom = keepZoom ? me._map_1.ggLastZoom : 14;
				var mapOptions = {
					zoom: initZoom,
					center: activeNodeLatLng,
					mapTypeId: mapTypeId,
					fullscreenControl: false,
					mapTypeControl: false,
					streetViewControl: false
				};
				me._map_1.ggMap = new google.maps.Map(me._map_1, mapOptions);
				if (mapTypeId == 'googlecustomstyle') {
					var styledMapType = new google.maps.StyledMapType(JSON.parse(mapDetails['googlecustomstylecode']), {name: 'Styled Map'});
					me._map_1.ggMap.mapTypes.set('styled_map', styledMapType);
					me._map_1.ggMap.setMapTypeId('styled_map');
				}
				if (mapTypeId == 'openstreetmap') {
					me._map_1.ggMap.mapTypes.set('openstreetmap', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							if (mapDetails['mapstyle'] == 'streets') {
								return 'http://tile.openstreetmap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
							} else if (mapDetails['mapstyle'] == 'outdoors') {
								return 'http://a.tile.opentopomap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
							}
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: mapDetails['mapstyle'] == 'outdoors' ? 17 : 18
					}));
				}
				if (mapTypeId == 'mapbox') {
					me._map_1.ggMap.mapTypes.set('mapbox', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							if (mapDetails['styleurl'] == '') {
								return 'https://api.mapbox.com/v4/mapbox.' + mapDetails['mapstyle'] + '/' + zoom + '/' + coord.x + '/' + coord.y + '@2x.png?access_token=' + mapDetails['mapkey'];
							} else {
								var styleurlstring = mapDetails['styleurl'];
								styleurlstring = styleurlstring.slice(styleurlstring.indexOf('styles/') + 7);
								return 'https://api.mapbox.com/styles/v1/' + styleurlstring + '/tiles/256/' + zoom + '/' + coord.x + '/' + coord.y + '@2x?access_token=' + mapDetails['mapkey'];
							}
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: 18
					}));
				}
				if (mapTypeId == 'custom') {
					me._map_1.ggMap.mapTypes.set('custom', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							var urlString = mapDetails['mapurltemplate'];
							urlString = urlString.replace('{s}', 'a');
							urlString = urlString.replace('{z}', zoom);
							urlString = urlString.replace('{x}', coord.x);
							urlString = urlString.replace('{y}', coord.y);
							return urlString;
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: mapDetails['mapmaxzoom']
					}));
				}
			} else if (mapType == 'file') {
				if (me._map_1.ggLastZoom == -1) me._map_1.ggLastZoom = 7;
				var initZoom = keepZoom ? me._map_1.ggLastZoom : 7;
				var mapOptions = {
				  backgroundColor: mapDetails['bgcolor'],
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: activeNodeLatLng,
					fullscreenControl: false,
					mapTypeControl: false,
					streetViewControl: false
				};
				me._map_1.ggMap = new google.maps.Map(me._map_1, mapOptions);
				var customMapType = new google.maps.ImageMapType({
					getTileUrl: function(coord, zoom) {
						if (me._map_1.ggTileAvailable(coord.x, coord.y, zoom)) {
							return basePath + 'images/maptiles/' + me._map_1.ggMapId + '/' + zoom + '/' + coord.x + '_' + coord.y + '.' + mapDetails['tileformat'];
						} else {
							return null;
						}
					},
					tileSize: new google.maps.Size(256, 256),
					minZoom: 7,
					maxZoom: 7 + mapDetails['zoomlevels'],
					name: mapDetails['title'],
				});
				me._map_1.ggMap.mapTypes.set(me._map_1.ggMapId, customMapType);
				me._map_1.ggMap.setMapTypeId(me._map_1.ggMapId);
				google.maps.event.addListener(me._map_1.ggMap, 'center_changed', function() {
					me._map_1.ggCheckBounds(mapDetails);
				});
				google.maps.event.addListener(me._map_1.ggMap, 'zoom_changed', function() {
					me._map_1.ggCheckBounds(mapDetails);
				});
			}
		}
		me._map_1.ggClearMap=function() {
		me._map_1.ggMap = null;
		me._map_1.ggClearMapMarkers();
		me._map_1.ggMapNotLoaded = true;
		}
		me._map_1.ggClearMapMarkers=function() {
			me._map_1.ggLastActivMarker = null;
			var id,marker;
			var markers=me._map_1.ggGoogleMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.setMap(null);
				}
			}
			me._map_1.ggGoogleMarkerArray=[];
		}
		me._map_1.ggCenterNode=function() {
			if (!me._map_1.ggMap) return;
			var gps;
			if (player.getMapType(me._map_1.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map_1.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = new google.maps.LatLng(gps[0], gps[1]);
				me._map_1.ggMap.panTo(markerLocation);
			}
		}
		me._map_1.ggFitBounds=function(force) {
			if (!me._map_1.ggMarkerBounds.isEmpty()) {
				if (me._map_1.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me._map_1.ggGoogleMarkerArray).length > 1) {
					me._map_1.ggMap.fitBounds(me._map_1.ggMarkerBounds, 30);
				} else {
					me._map_1.ggMap.setCenter(me._map_1.ggMarkerBounds.getCenter());
					if (player.getMapType(me._map_1.ggMapId) == 'web') {
						me._map_1.ggMap.setZoom(18);
					} else {
						me._map_1.ggMap.setZoom(7);
					}
				}
			}
		}
		me._map_1.ggInitMapMarkers=function(updateMapBounds) {
			me._map_1.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			me._map_1.ggMarkerBounds = new google.maps.LatLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me._map_1.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me._map_1.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = new google.maps.LatLng(gps[0], gps[1]);
					marker = new google.maps.Marker({position: markerLocation,map: me._map_1.ggMap});
					marker.setTitle(player.getNodeTitle(id));
					marker.setClickable(true);
					marker.ggId=id;
					google.maps.event.addListener(marker, 'click', function() {
						player.openNext('{' + this.ggId + '}');
						activeNodeLatLng=me.position;
						lastFov=-1; // force radar update
					});
					me._map_1.ggGoogleMarkerArray[id] = marker;
					me._map_1.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && !me._map_1.ggMarkerBounds.isEmpty() && updateMapBounds) {
				me._map_1.ggFitBounds(false);
			}
			skin.updateSize(me._map_1);
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
		}
		me._map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'file') {
				return;
			}
			if (me._map_1.ggMap) {
				me._map_1.ggLastZoom = me._map_1.ggMap.getZoom();
			}
			me._map_1.ggMapId = mapId;
			me._map_1.ggClearMap();
			me._map_1.ggInitMap(true);
			me._map_1.ggInitMapMarkers(false);
		}
		me._map_1.ggInCheckBounds=false;
		me._map_1.ggCheckBounds=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				var mapWidthInDeg = tileInDeg * (tmpWidth / 256);
			var mapHeightInDeg = mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				var mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				var mapWidthInDeg = mapHeightInDeg * mapAR;
			}
			if (me._map_1.ggInCheckBounds) return;
			me._map_1.ggInCheckBounds = true;
			var mapCenter = me._map_1.ggMap.getCenter();
			var currentZoom = me._map_1.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me._map_1.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me._map_1.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng();
			var y = mapCenter.lat();
			if (mapWidthInDeg < me._map_1.clientWidth * pixelInDeg) {
				x = mapWidthInDeg / 2;
			} else {
			if (x > mapWidthInDeg - xOffset) x = mapWidthInDeg - xOffset;
			if (x < xOffset) x = xOffset;
			}
			if (mapHeightInDeg < me._map_1.clientHeight * pixelInDeg) {
				y = -mapHeightInDeg / 2;
			} else {
			if (y < -mapHeightInDeg + yOffset) y = -mapHeightInDeg + yOffset;
			if (y > -yOffset) y = -yOffset;
			}
			me._map_1.ggMap.setCenter(new google.maps.LatLng(y, x));
			me._map_1.ggInCheckBounds = false;
		}
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._map_1.ggInitMap(false);
			me._map_1.ggInitMapMarkers(true);
			me._thumbnail_cloner.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
			me._thumbnail_menu.ggUpdatePosition();
		});
		player.addListener('beforechangenode', function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
			me._loading.ggVisible=true;
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_nodeleft_tnb_mouseover = function(){
		if(hotspotTemplates['ht_nodeLeft_TnB']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_nodeLeft_TnB'].length; i++) {
				if (hotspotTemplates['ht_nodeLeft_TnB'][i]._tnbhnode_preview.logicBlock_visible) {
					hotspotTemplates['ht_nodeLeft_TnB'][i]._tnbhnode_preview.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_nodeleft_tnb_changevisitednodes = function(){
		if(hotspotTemplates['ht_nodeLeft_TnB']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_nodeLeft_TnB'].length; i++) {
				if (hotspotTemplates['ht_nodeLeft_TnB'][i]._tnbchkmrk_tick.logicBlock_visible) {
					hotspotTemplates['ht_nodeLeft_TnB'][i]._tnbchkmrk_tick.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hotspot_preview.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_changevisitednodes = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._checkmark_tick.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._checkmark_tick.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_nodeleft_mouseover = function(){
		if(hotspotTemplates['ht_nodeLeft']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_nodeLeft'].length; i++) {
				if (hotspotTemplates['ht_nodeLeft'][i]._hnode_preview.logicBlock_visible) {
					hotspotTemplates['ht_nodeLeft'][i]._hnode_preview.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_nodeleft_changevisitednodes = function(){
		if(hotspotTemplates['ht_nodeLeft']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_nodeLeft'].length; i++) {
				if (hotspotTemplates['ht_nodeLeft'][i]._chkmrk_tick0.logicBlock_visible) {
					hotspotTemplates['ht_nodeLeft'][i]._chkmrk_tick0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_atrium_mouseover = function(){
		if(hotspotTemplates['ht_url_Atrium']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url_Atrium'].length; i++) {
				if (hotspotTemplates['ht_url_Atrium'][i]._hurl_preview_atrium.logicBlock_visible) {
					hotspotTemplates['ht_url_Atrium'][i]._hurl_preview_atrium.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_atrium_changevisitednodes = function(){
		if(hotspotTemplates['ht_url_Atrium']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url_Atrium'].length; i++) {
				if (hotspotTemplates['ht_url_Atrium'][i]._chkmrk_tck.logicBlock_visible) {
					hotspotTemplates['ht_url_Atrium'][i]._chkmrk_tck.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hs_ground_mouseover = function(){
		if(hotspotTemplates['Hs_Ground']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hs_Ground'].length; i++) {
				if (hotspotTemplates['Hs_Ground'][i]._hsgrnd_preview.logicBlock_visible) {
					hotspotTemplates['Hs_Ground'][i]._hsgrnd_preview.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hs_ground_changevisitednodes = function(){
		if(hotspotTemplates['Hs_Ground']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hs_Ground'].length; i++) {
				if (hotspotTemplates['Hs_Ground'][i]._grndchkmrk_tck.logicBlock_visible) {
					hotspotTemplates['Hs_Ground'][i]._grndchkmrk_tck.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_nodefrnt_mouseover = function(){
		if(hotspotTemplates['ht_nodeFrnt']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_nodeFrnt'].length; i++) {
				if (hotspotTemplates['ht_nodeFrnt'][i]._hnode_previewfrnt.logicBlock_visible) {
					hotspotTemplates['ht_nodeFrnt'][i]._hnode_previewfrnt.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_nodefrnt_changevisitednodes = function(){
		if(hotspotTemplates['ht_nodeFrnt']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_nodeFrnt'].length; i++) {
				if (hotspotTemplates['ht_nodeFrnt'][i]._chkmrk_tick.logicBlock_visible) {
					hotspotTemplates['ht_nodeFrnt'][i]._chkmrk_tick.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;
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
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		var hs='';
		if (me.__1brimage_radar1.ggParameter) {
			hs+=parameterToTransform(me.__1brimage_radar1.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 0)) + 'deg) ';
		hs+='scale(' + (Math.tan(player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ',1.0) ';
		hs+='scale(1.0,' + (Math.cos(1*player.getTilt()*Math.PI/180.0 + 0)) + ') ';
		me.__1brimage_radar1.style[domTransform]=hs;
		var hs='';
		if (me.__2brimage_radar.ggParameter) {
			hs+=parameterToTransform(me.__2brimage_radar.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 0)) + 'deg) ';
		hs+='scale(' + (Math.tan(player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ',1.0) ';
		hs+='scale(1.0,' + (Math.cos(1*player.getTilt()*Math.PI/180.0 + 0)) + ') ';
		me.__2brimage_radar.style[domTransform]=hs;
		var hs='';
		if (me.__3brimage_radar.ggParameter) {
			hs+=parameterToTransform(me.__3brimage_radar.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 0)) + 'deg) ';
		hs+='scale(' + (Math.tan(player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ',1.0) ';
		hs+='scale(1.0,' + (Math.cos(1*player.getTilt()*Math.PI/180.0 + 0)) + ') ';
		me.__3brimage_radar.style[domTransform]=hs;
		me._map_1.ggUpdateConditionTimer();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_nodeleft_tnb(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_nodeleft_tnb=document.createElement('div');
		el.ggId="ht_nodeLeft_TnB";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 645px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_nodeleft_tnb.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_nodeleft_tnb.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodeleft_tnb.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodeleft_tnb.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_nodeleft_tnb']=true;
			me._tnbhnode_preview.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodeleft_tnb.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_nodeleft_tnb']=false;
			me._tnbhnode_preview.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodeleft_tnb.ontouchend=function (e) {
			me.elementMouseOver['ht_nodeleft_tnb']=false;
			me._tnbhnode_preview.logicBlock_visible();
		}
		me._ht_nodeleft_tnb.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_left0=document.createElement('div');
		els=me._chevron_left0__img=document.createElement('img');
		els.className='ggskin ggskin_chevron_left0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAACECAYAAACNvfeQAAADNUlEQVR4nO3cwVLiQBSG0Rukyvd/W5GYnoWwmXFmIIT0n3DOUqu0CXy5nYAOrbUC+jr0XgAgRIggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggxH1oVdVaa633QphHiBv19fXV6hLg9WvDMNTvX2MbBifRzbn3CRuesgoWZSJux9xJ16qqTdPkjBtMiMHO5/Mf28+5DodDLfWzWJ6taaa1nhTb1hAmYpa1J1arqna58UNHJmKGpC'+
			'fBlOzAROzk8p5f4jVb4pp2T4jra1XVLu/5JbNtXZGt6Xr2cKDjzx5bZSI+0ZJvP4TY02OJYiI+QWttC1vPh43jWMfjcf8PdAVCXNYrH0xBPuDYewE70TPAnwLosZ7r7xTkDK4RZ/rprx9WNtTfX/T/+t6ztapq4zi+8u7gbram86RNwP/Z2npfjom4AeM4Vj025YaqGs7n82JrYlkm4jx7+FD2Hh7DbrhZk2mNF+/1dzgTB7A1zdLjJstQdkbdCbGzaZqq+t7lrKqq4fsTCMPpdOq5jJclxE4+Pj6qqobD4RB1DfX+/n49KSyyrtPpZNTewJZknkcOWlR4N5r9eH0M7jYm4nq6bz8fMFTVcHkb5S5vb2/Lr2aHTMR5bjporbXrtdce3fPC2esxWIyJ+ASfn59V3/c/9vwC3PKEj2MizvO3g/ayL8xpmtrlXzb+5GWP'+
			'y61MxGW8/HS43P319sdMJuI8befXf0vxp1E3EiIEsDWFAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAL8AvKy7EqBgkhsAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._chevron_left0__img.ggOverSrc=hs;
		el.ggId="Chevron_Left";
		el.ggParameter={ rx:0,ry:0,a:-75,sx:0.5,sy:0.9 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 75px;';
		hs+='left : -2137.38%;';
		hs+='position : absolute;';
		hs+='top : -658.04%;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._chevron_left0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_left0.onmouseover=function (e) {
			me._chevron_left0__img.src=me._chevron_left0__img.ggOverSrc;
		}
		me._chevron_left0.onmouseout=function (e) {
			me._chevron_left0__img.src=me._chevron_left0__img.ggNormalSrc;
		}
		me._chevron_left0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_nodeleft_tnb.appendChild(me._chevron_left0);
		el=me._tnbhnode_preview=document.createElement('div');
		el.ggId="TnBhnode_preview";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 103px;';
		hs+='left : -68px;';
		hs+='position : absolute;';
		hs+='top : -161px;';
		hs+='visibility : hidden;';
		hs+='width : 153px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tnbhnode_preview.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tnbhnode_preview.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_nodeleft_tnb'] == true)
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
		me._tnbhnode_preview.ggUpdatePosition=function (useTransition) {
		}
		el=me._tnbpreview_pictureframe_=document.createElement('div');
		el.ggId="TnBpreview_pictureframe ";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tnbpreview_pictureframe_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tnbpreview_pictureframe_.ggUpdatePosition=function (useTransition) {
		}
		me._tnbhnode_preview.appendChild(me._tnbpreview_pictureframe_);
		el=me._tnb=document.createElement('div');
		els=me._tnb__img=document.createElement('img');
		els.className='ggskin ggskin_tnb';
		hs=basePath + 'images/tnb.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="TnB";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 141px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tnb.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tnb.ggUpdatePosition=function (useTransition) {
		}
		me._tnbhnode_preview.appendChild(me._tnb);
		el=me._tnbtltip_bg=document.createElement('div');
		el.ggId="TnBtltip_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tnbtltip_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tnbtltip_bg.ggUpdatePosition=function (useTransition) {
		}
		me._tnbhnode_preview.appendChild(me._tnbtltip_bg);
		el=me._tnb_drop_shadow=document.createElement('div');
		els=me._tnb_drop_shadow__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TnB_drop_shadow";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tnb_drop_shadow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tnb_drop_shadow.ggUpdatePosition=function (useTransition) {
		}
		me._tnbhnode_preview.appendChild(me._tnb_drop_shadow);
		el=me._tnbt=document.createElement('div');
		els=me._tnbt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TnBT";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 79px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tnbt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tnbt.ggUpdatePosition=function (useTransition) {
		}
		me._tnbhnode_preview.appendChild(me._tnbt);
		el=me._tnbchkmrk_tick=document.createElement('div');
		els=me._tnbchkmrk_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgWw0KCTwhRU5USVRZIG5zX2Zsb3dzICJodHRwOi8vbnMuYWRvYmUuY29tL0Zsb3dzLzEuMC8iPg0KCTwhRU5USVRZIG5zX2V4dGVuZCAiaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbn'+
			'NpYmlsaXR5LzEuMC8iPg0KCTwhRU5USVRZIG5zX2FpICJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iPg0KCTwhRU5USVRZIG5zX2dyYXBocyAiaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyI+DQpdPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zOng9IiZuc19leHRlbmQ7IiB4bWxuczppPSImbnNfYWk7IiB4bWxuczpncmFwaD0iJm5zX2dyYXBoczsiDQoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRv'+
			'YmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iDQoJIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiINCgkgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyBpZD0iTGF5ZXJfMSI+DQo8L2c+DQo8ZyBpZD0iRWJlbmVfMSI+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiI+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC'+
			'43ODdsLTIuMjkxLTIuMjQzDQoJCQkJYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDJjLTAuNTEzLDAuNTI1LTAuNTA0LDEuMzY3LDAuMDIxLDEuODhsMy4yMywzLjE2M2MwLjI1OSwwLjI1MywwLjU5NCwwLjM3OSwwLjkzLDAuMzc5DQoJCQkJYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiLz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4'+
			'Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4DQoJCQkJYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMw0KCQkJCWwtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJCTxnIG9wYWNpdHk9IjAuNCIgIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiPg0KCQkJDQoJCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW'+
			'5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIGQ9Ig0KCQkJCU0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5'+
			'NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQkNCgkJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiICBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgZD0iDQoJCQkJTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC'+
			'42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMNCgkJCQljLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAu'+
			'Mzc5LDAuOTMsMC4zNzkNCgkJCQljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTdDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIvPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMC'+
			'wxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYNCgkJCQljLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2'+
			'NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNw0KCQkJCWgtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni'+
			'0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOQ0KCQkJCWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwM2wtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=';
		me._tnbchkmrk_tick__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;tnbchkmrk_tick;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="TnBchkMrk_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 110px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tnbchkmrk_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tnbchkmrk_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._tnbchkmrk_tick.ggElementNodeId()) == true)
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
		me._tnbchkmrk_tick.ggUpdatePosition=function (useTransition) {
		}
		me._tnbhnode_preview.appendChild(me._tnbchkmrk_tick);
		me._ht_nodeleft_tnb.appendChild(me._tnbhnode_preview);
		me.__div = me._ht_nodeleft_tnb;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 444px;';
		hs+='position : absolute;';
		hs+='top : -70px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_node.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._hotspot_preview.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._hotspot_preview.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._hotspot_preview.logicBlock_visible();
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._hsimage_node=document.createElement('div');
		els=me._hsimage_node__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDQzMzYzKSAgLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMSBCYXNpYy8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS1iYXNpYy5kdGQiPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGJhc2VQcm9maWxlPSJiYXNpYyIgaWQ9IkxheWVyXzEiDQoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ig0KCSB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgb3BhY2l0eT0iMC40Ij4NCgk8Zz4NCgkJPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTI2LjYwNCwxNC4xMDNoLTEuOTg5Yy0wLjczNC0zLjM1LTMuMzY4LTUuOTgxLTYuNzE2LTYuNzE3VjUuMzk4DQoJCQljMC0xLjA0OC0wLjg0OS0xLjg5OS0xLjg5Ny0xLjg5OWMtMS4wNDksMC0xLjg5NywwLjg1MS0xLjg5Nywx'+
			'Ljg5OXYxLjk4NmMtMy4zNTIsMC43MzUtNS45ODMsMy4zNjktNi43Miw2LjcxN0g1LjM5OA0KCQkJQzQuMzQ4LDE0LjEwMSwzLjUsMTQuOTUxLDMuNSwxNnMwLjg1MSwxLjg5NiwxLjg5OSwxLjg5NmgxLjk4NWMwLjczNSwzLjM1LDMuMzY4LDUuOTg0LDYuNzIsNi43MTl2MS45ODkNCgkJCWMwLDEuMDQ2LDAuODQ4LDEuODk2LDEuODk3LDEuODk2YzEuMDQ4LDAsMS44OTYtMC44NTEsMS44OTYtMS44OTZ2LTEuOTg5YzMuMzUxLTAuNzM2LDUuOTg0LTMuMzY5LDYuNzE5LTYuNzE5aDEuOTg2DQoJCQljMS4wNDksMCwxLjg5Ny0wLjg0OCwxLjg5Ny0xLjg5NkMyOC41MDEsMTQuOTUxLDI3LjY1MiwxNC'+
			'4xMDMsMjYuNjA0LDE0LjEwM3ogTTE2LDIxLjAyOWMtMi43NzctMC4wMDUtNS4wMjMtMi4yNTEtNS4wMy01LjAyNg0KCQkJdi0wLjAwMWMwLTAuMDAxLDAtMC4wMDEsMC0wLjAwM2MwLjAwNi0yLjc3NywyLjI1My01LjAyMiw1LjAzLTUuMDI1YzIuNzc3LDAuMDA1LDUuMDI1LDIuMjUxLDUuMDI2LDUuMDI4aDAuMDAyDQoJCQlDMjEuMDI1LDE4Ljc3OCwxOC43NzcsMjEuMDI0LDE2LDIxLjAyOXoiLz4NCgk8L2c+DQoJPGNpcmNsZSBmaWxsPSIjRkZGRkZGIiBjeD0iMTYuMDAyIiBjeT0iMTYiIHI9IjIuMTA5Ii8+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tl'+
			'PSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTTI2LjYwNCwxNC4xMDNoLTEuOTg5Yy0wLjczNC0zLjM1LTMuMzY4LTUuOTgxLTYuNzE2LTYuNzE3VjUuMzk4DQoJCQljMC0xLjA0OC0wLjg0OS0xLjg5OS0xLjg5Ny0xLjg5OWMtMS4wNDksMC0xLjg5NywwLjg1MS0xLjg5NywxLjg5OXYxLjk4NmMtMy4zNTIsMC43MzUtNS45ODMsMy4zNjktNi43Miw2LjcxN0g1LjM5OA0KCQkJQzQuMzQ4LDE0LjEwMSwzLjUsMTQuOTUxLDMuNSwxNnMwLjg1MSwxLjg5NiwxLjg5OSwxLjg5NmgxLjk4NWMwLjczNSwzLjM1LDMuMzY4LDUuOTg0LDYuNzIsNi43MTl2MS45ODkNCgkJCWMwLDEuMDQ2LDAuOD'+
			'Q4LDEuODk2LDEuODk3LDEuODk2YzEuMDQ4LDAsMS44OTYtMC44NTEsMS44OTYtMS44OTZ2LTEuOTg5YzMuMzUxLTAuNzM2LDUuOTg0LTMuMzY5LDYuNzE5LTYuNzE5aDEuOTg2DQoJCQljMS4wNDksMCwxLjg5Ny0wLjg0OCwxLjg5Ny0xLjg5NkMyOC41MDEsMTQuOTUxLDI3LjY1MiwxNC4xMDMsMjYuNjA0LDE0LjEwM3ogTTE2LDIxLjAyOWMtMi43NzctMC4wMDUtNS4wMjMtMi4yNTEtNS4wMy01LjAyNg0KCQkJdi0wLjAwMWMwLTAuMDAxLDAtMC4wMDEsMC0wLjAwM2MwLjAwNi0yLjc3NywyLjI1My01LjAyMiw1LjAzLTUuMDI1YzIuNzc3LDAuMDA1LDUuMDI1LDIuMjUxLDUuMDI2LDUuMDI4aDAu'+
			'MDAyDQoJCQlDMjEuMDI1LDE4Ljc3OCwxOC43NzcsMjEuMDI0LDE2LDIxLjAyOXoiLz4NCgk8L2c+DQoJPGNpcmNsZSBmaWxsPSIjRkZGRkZGIiBjeD0iMTYuMDAyIiBjeT0iMTYiIHI9IjIuMTA5Ii8+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._hsimage_node__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;hsimage_node;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._hsimage_node__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDQzMzYzKSAgLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMSBCYXNpYy8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS1iYXNpYy5kdGQiPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGJhc2VQcm9maWxlPSJiYXNpYyIgaWQ9IkxheWVyXzEiDQoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ig0KCSB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgb3BhY2l0eT0iMC40Ij4NCgk8Zz4NCgkJPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTI2LjYwNCwxNC4xMDNoLTEuOTg5Yy0wLjczNC0zLjM1LTMuMzY4LTUuOTgxLTYuNzE2LTYuNzE3VjUuMzk4DQoJCQljMC0xLjA0OC0wLjg0OS0xLjg5OS0xLjg5Ny0xLjg5OWMtMS4wNDksMC0xLjg5NywwLjg1MS0xLjg5Nywx'+
			'Ljg5OXYxLjk4NmMtMy4zNTIsMC43MzUtNS45ODMsMy4zNjktNi43Miw2LjcxN0g1LjM5OA0KCQkJQzQuMzQ4LDE0LjEwMSwzLjUsMTQuOTUxLDMuNSwxNnMwLjg1MSwxLjg5NiwxLjg5OSwxLjg5NmgxLjk4NWMwLjczNSwzLjM1LDMuMzY4LDUuOTg0LDYuNzIsNi43MTl2MS45ODkNCgkJCWMwLDEuMDQ2LDAuODQ4LDEuODk2LDEuODk3LDEuODk2YzEuMDQ4LDAsMS44OTYtMC44NTEsMS44OTYtMS44OTZ2LTEuOTg5YzMuMzUxLTAuNzM2LDUuOTg0LTMuMzY5LDYuNzE5LTYuNzE5aDEuOTg2DQoJCQljMS4wNDksMCwxLjg5Ny0wLjg0OCwxLjg5Ny0xLjg5NkMyOC41MDEsMTQuOTUxLDI3LjY1MiwxNC'+
			'4xMDMsMjYuNjA0LDE0LjEwM3ogTTE2LDIxLjAyOWMtMi43NzctMC4wMDUtNS4wMjMtMi4yNTEtNS4wMy01LjAyNg0KCQkJdi0wLjAwMWMwLTAuMDAxLDAtMC4wMDEsMC0wLjAwM2MwLjAwNi0yLjc3NywyLjI1My01LjAyMiw1LjAzLTUuMDI1YzIuNzc3LDAuMDA1LDUuMDI1LDIuMjUxLDUuMDI2LDUuMDI4aDAuMDAyDQoJCQlDMjEuMDI1LDE4Ljc3OCwxOC43NzcsMjEuMDI0LDE2LDIxLjAyOXoiLz4NCgk8L2c+DQoJPGNpcmNsZSBmaWxsPSIjRkZGRkZGIiBjeD0iMTYuMDAyIiBjeT0iMTYiIHI9IjIuMTA5Ii8+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tl'+
			'PSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTTI2LjYwNCwxNC4xMDNoLTEuOTg5Yy0wLjczNC0zLjM1LTMuMzY4LTUuOTgxLTYuNzE2LTYuNzE3VjUuMzk4DQoJCQljMC0xLjA0OC0wLjg0OS0xLjg5OS0xLjg5Ny0xLjg5OWMtMS4wNDksMC0xLjg5NywwLjg1MS0xLjg5NywxLjg5OXYxLjk4NmMtMy4zNTIsMC43MzUtNS45ODMsMy4zNjktNi43Miw2LjcxN0g1LjM5OA0KCQkJQzQuMzQ4LDE0LjEwMSwzLjUsMTQuOTUxLDMuNSwxNnMwLjg1MSwxLjg5NiwxLjg5OSwxLjg5NmgxLjk4NWMwLjczNSwzLjM1LDMuMzY4LDUuOTg0LDYuNzIsNi43MTl2MS45ODkNCgkJCWMwLDEuMDQ2LDAuOD'+
			'Q4LDEuODk2LDEuODk3LDEuODk2YzEuMDQ4LDAsMS44OTYtMC44NTEsMS44OTYtMS44OTZ2LTEuOTg5YzMuMzUxLTAuNzM2LDUuOTg0LTMuMzY5LDYuNzE5LTYuNzE5aDEuOTg2DQoJCQljMS4wNDksMCwxLjg5Ny0wLjg0OCwxLjg5Ny0xLjg5NkMyOC41MDEsMTQuOTUxLDI3LjY1MiwxNC4xMDMsMjYuNjA0LDE0LjEwM3ogTTE2LDIxLjAyOWMtMi43NzctMC4wMDUtNS4wMjMtMi4yNTEtNS4wMy01LjAyNg0KCQkJdi0wLjAwMWMwLTAuMDAxLDAtMC4wMDEsMC0wLjAwM2MwLjAwNi0yLjc3NywyLjI1My01LjAyMiw1LjAzLTUuMDI1YzIuNzc3LDAuMDA1LDUuMDI1LDIuMjUxLDUuMDI2LDUuMDI4aDAu'+
			'MDAyDQoJCQlDMjEuMDI1LDE4Ljc3OCwxOC43NzcsMjEuMDI0LDE2LDIxLjAyOXoiLz4NCgk8L2c+DQoJPGNpcmNsZSBmaWxsPSIjRkZGRkZGIiBjeD0iMTYuMDAyIiBjeT0iMTYiIHI9IjIuMTA5Ii8+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._hsimage_node__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;hsimage_node;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="hsimage_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hsimage_node.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hsimage_node.onmouseover=function (e) {
			me._hsimage_node__img.style.visibility='hidden';
			me._hsimage_node__imgo.style.visibility='inherit';
		}
		me._hsimage_node.onmouseout=function (e) {
			me._hsimage_node__img.style.visibility='inherit';
			me._hsimage_node__imgo.style.visibility='hidden';
		}
		me._hsimage_node.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._hsimage_node);
		el=me._hotspot_preview=document.createElement('div');
		el.ggId="hotspot_preview";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 103px;';
		hs+='left : -73px;';
		hs+='position : absolute;';
		hs+='top : -128px;';
		hs+='visibility : hidden;';
		hs+='width : 153px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_preview.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_preview.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_node'] == true)
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
		me._hotspot_preview.ggUpdatePosition=function (useTransition) {
		}
		el=me._preview_picture_frame_=document.createElement('div');
		el.ggId="preview_picture_frame ";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._preview_picture_frame_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._preview_picture_frame_.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._preview_picture_frame_);
		el=me._preview_nodeimage_1br=document.createElement('div');
		els=me._preview_nodeimage_1br__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/grnd1b_url_preview_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;preview_nodeimage_1br;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Preview NodeImage_1BR";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._preview_nodeimage_1br.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._preview_nodeimage_1br.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._preview_nodeimage_1br);
		el=me._tooltip_bg=document.createElement('div');
		el.ggId="tooltip_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tooltip_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tooltip_bg.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._tooltip_bg);
		el=me._tooltip_drop_shadow=document.createElement('div');
		els=me._tooltip_drop_shadow__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip_drop_shadow";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tooltip_drop_shadow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tooltip_drop_shadow.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._tooltip_drop_shadow);
		el=me._tooltip=document.createElement('div');
		els=me._tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 79px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._tooltip);
		el=me._checkmark_tick=document.createElement('div');
		els=me._checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgWw0KCTwhRU5USVRZIG5zX2Zsb3dzICJodHRwOi8vbnMuYWRvYmUuY29tL0Zsb3dzLzEuMC8iPg0KCTwhRU5USVRZIG5zX2V4dGVuZCAiaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbn'+
			'NpYmlsaXR5LzEuMC8iPg0KCTwhRU5USVRZIG5zX2FpICJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iPg0KCTwhRU5USVRZIG5zX2dyYXBocyAiaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyI+DQpdPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zOng9IiZuc19leHRlbmQ7IiB4bWxuczppPSImbnNfYWk7IiB4bWxuczpncmFwaD0iJm5zX2dyYXBoczsiDQoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRv'+
			'YmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iDQoJIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiINCgkgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyBpZD0iTGF5ZXJfMSI+DQo8L2c+DQo8ZyBpZD0iRWJlbmVfMSI+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiI+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC'+
			'43ODdsLTIuMjkxLTIuMjQzDQoJCQkJYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDJjLTAuNTEzLDAuNTI1LTAuNTA0LDEuMzY3LDAuMDIxLDEuODhsMy4yMywzLjE2M2MwLjI1OSwwLjI1MywwLjU5NCwwLjM3OSwwLjkzLDAuMzc5DQoJCQkJYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiLz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4'+
			'Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4DQoJCQkJYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMw0KCQkJCWwtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJCTxnIG9wYWNpdHk9IjAuNCIgIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiPg0KCQkJDQoJCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW'+
			'5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIGQ9Ig0KCQkJCU0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5'+
			'NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQkNCgkJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiICBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgZD0iDQoJCQkJTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC'+
			'42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMNCgkJCQljLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAu'+
			'Mzc5LDAuOTMsMC4zNzkNCgkJCQljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTdDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIvPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMC'+
			'wxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYNCgkJCQljLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2'+
			'NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNw0KCQkJCWgtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni'+
			'0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOQ0KCQkJCWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwM2wtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=';
		me._checkmark_tick__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;checkmark_tick;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 110px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._checkmark_tick.ggElementNodeId()) == true)
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
		me._checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._checkmark_tick);
		me._ht_node.appendChild(me._hotspot_preview);
		me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_nodeleft(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_nodeleft=document.createElement('div');
		el.ggId="ht_nodeLeft";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 239px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_nodeleft.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_nodeleft.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodeleft.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodeleft.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_nodeleft']=true;
			me._hnode_preview.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodeleft.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_nodeleft']=false;
			me._hnode_preview.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodeleft.ontouchend=function (e) {
			me.elementMouseOver['ht_nodeleft']=false;
			me._hnode_preview.logicBlock_visible();
		}
		me._ht_nodeleft.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_left=document.createElement('div');
		els=me._chevron_left__img=document.createElement('img');
		els.className='ggskin ggskin_chevron_left';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAACECAYAAACNvfeQAAADNUlEQVR4nO3cwVLiQBSG0Rukyvd/W5GYnoWwmXFmIIT0n3DOUqu0CXy5nYAOrbUC+jr0XgAgRIggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggxH1oVdVaa633QphHiBv19fXV6hLg9WvDMNTvX2MbBifRzbn3CRuesgoWZSJux9xJ16qqTdPkjBtMiMHO5/Mf28+5DodDLfWzWJ6taaa1nhTb1hAmYpa1J1arqna58UNHJmKGpC'+
			'fBlOzAROzk8p5f4jVb4pp2T4jra1XVLu/5JbNtXZGt6Xr2cKDjzx5bZSI+0ZJvP4TY02OJYiI+QWttC1vPh43jWMfjcf8PdAVCXNYrH0xBPuDYewE70TPAnwLosZ7r7xTkDK4RZ/rprx9WNtTfX/T/+t6ztapq4zi+8u7gbram86RNwP/Z2npfjom4AeM4Vj025YaqGs7n82JrYlkm4jx7+FD2Hh7DbrhZk2mNF+/1dzgTB7A1zdLjJstQdkbdCbGzaZqq+t7lrKqq4fsTCMPpdOq5jJclxE4+Pj6qqobD4RB1DfX+/n49KSyyrtPpZNTewJZknkcOWlR4N5r9eH0M7jYm4nq6bz8fMFTVcHkb5S5vb2/Lr2aHTMR5bjporbXrtdce3fPC2esxWIyJ+ASfn59V3/c/9vwC3PKEj2MizvO3g/ayL8xpmtrlXzb+5GWP'+
			'y61MxGW8/HS43P319sdMJuI8befXf0vxp1E3EiIEsDWFAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAL8AvKy7EqBgkhsAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._chevron_left__img.ggOverSrc=hs;
		el.ggId="Chevron_Left";
		el.ggParameter={ rx:0,ry:0,a:-75,sx:0.5,sy:0.9 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 75px;';
		hs+='left : -2217.16%;';
		hs+='position : absolute;';
		hs+='top : -658.07%;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._chevron_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_left.onmouseover=function (e) {
			me._chevron_left__img.src=me._chevron_left__img.ggOverSrc;
		}
		me._chevron_left.onmouseout=function (e) {
			me._chevron_left__img.src=me._chevron_left__img.ggNormalSrc;
		}
		me._chevron_left.ggUpdatePosition=function (useTransition) {
		}
		me._ht_nodeleft.appendChild(me._chevron_left);
		el=me._hnode_preview=document.createElement('div');
		el.ggId="hnode_preview";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 103px;';
		hs+='left : -72px;';
		hs+='position : absolute;';
		hs+='top : -163px;';
		hs+='visibility : hidden;';
		hs+='width : 153px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hnode_preview.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hnode_preview.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_nodeleft'] == true)
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
		me._hnode_preview.ggUpdatePosition=function (useTransition) {
		}
		el=me._preview_pictureframe_0=document.createElement('div');
		el.ggId="preview_pictureframe ";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._preview_pictureframe_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._preview_pictureframe_0.ggUpdatePosition=function (useTransition) {
		}
		me._hnode_preview.appendChild(me._preview_pictureframe_0);
		el=me._previewnodeimage=document.createElement('div');
		els=me._previewnodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/grnd1b_url_preview_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;previewnodeimage;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="PreviewNodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._previewnodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._previewnodeimage.ggUpdatePosition=function (useTransition) {
		}
		me._hnode_preview.appendChild(me._previewnodeimage);
		el=me._tltip_bg0=document.createElement('div');
		el.ggId="tltip_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tltip_bg0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tltip_bg0.ggUpdatePosition=function (useTransition) {
		}
		me._hnode_preview.appendChild(me._tltip_bg0);
		el=me._tltip_drop_shadow0=document.createElement('div');
		els=me._tltip_drop_shadow0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tltip_drop_shadow";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tltip_drop_shadow0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tltip_drop_shadow0.ggUpdatePosition=function (useTransition) {
		}
		me._hnode_preview.appendChild(me._tltip_drop_shadow0);
		el=me._tltip0=document.createElement('div');
		els=me._tltip0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 79px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tltip0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tltip0.ggUpdatePosition=function (useTransition) {
		}
		me._hnode_preview.appendChild(me._tltip0);
		el=me._chkmrk_tick0=document.createElement('div');
		els=me._chkmrk_tick0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgWw0KCTwhRU5USVRZIG5zX2Zsb3dzICJodHRwOi8vbnMuYWRvYmUuY29tL0Zsb3dzLzEuMC8iPg0KCTwhRU5USVRZIG5zX2V4dGVuZCAiaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbn'+
			'NpYmlsaXR5LzEuMC8iPg0KCTwhRU5USVRZIG5zX2FpICJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iPg0KCTwhRU5USVRZIG5zX2dyYXBocyAiaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyI+DQpdPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zOng9IiZuc19leHRlbmQ7IiB4bWxuczppPSImbnNfYWk7IiB4bWxuczpncmFwaD0iJm5zX2dyYXBoczsiDQoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRv'+
			'YmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iDQoJIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiINCgkgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyBpZD0iTGF5ZXJfMSI+DQo8L2c+DQo8ZyBpZD0iRWJlbmVfMSI+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiI+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC'+
			'43ODdsLTIuMjkxLTIuMjQzDQoJCQkJYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDJjLTAuNTEzLDAuNTI1LTAuNTA0LDEuMzY3LDAuMDIxLDEuODhsMy4yMywzLjE2M2MwLjI1OSwwLjI1MywwLjU5NCwwLjM3OSwwLjkzLDAuMzc5DQoJCQkJYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiLz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4'+
			'Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4DQoJCQkJYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMw0KCQkJCWwtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJCTxnIG9wYWNpdHk9IjAuNCIgIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiPg0KCQkJDQoJCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW'+
			'5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIGQ9Ig0KCQkJCU0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5'+
			'NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQkNCgkJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiICBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgZD0iDQoJCQkJTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC'+
			'42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMNCgkJCQljLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAu'+
			'Mzc5LDAuOTMsMC4zNzkNCgkJCQljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTdDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIvPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMC'+
			'wxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYNCgkJCQljLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2'+
			'NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNw0KCQkJCWgtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni'+
			'0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOQ0KCQkJCWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwM2wtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=';
		me._chkmrk_tick0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;chkmrk_tick0;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chkMrk_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 110px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chkmrk_tick0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chkmrk_tick0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._chkmrk_tick0.ggElementNodeId()) == true)
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
		me._chkmrk_tick0.ggUpdatePosition=function (useTransition) {
		}
		me._hnode_preview.appendChild(me._chkmrk_tick0);
		me._ht_nodeleft.appendChild(me._hnode_preview);
		me.__div = me._ht_nodeleft;
	};
	function SkinHotspotClass_ht_url_atrium(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url_atrium=document.createElement('div');
		el.ggId="ht_url_Atrium";
		el.ggDx=-522.5;
		el.ggDy=-450.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_atrium.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_url_atrium.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url_atrium.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url_atrium.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url_atrium']=true;
			me._hurl_preview_atrium.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url_atrium.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_url_atrium']=false;
			me._hurl_preview_atrium.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url_atrium.ontouchend=function (e) {
			me.elementMouseOver['ht_url_atrium']=false;
			me._hurl_preview_atrium.logicBlock_visible();
		}
		me._ht_url_atrium.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_image=document.createElement('div');
		els=me._ht_url_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDQzMzYzKSAgLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMSBCYXNpYy8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS1iYXNpYy5kdGQiPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGJhc2VQcm9maWxlPSJiYXNpYyIgaWQ9IkxheWVyXzEiDQoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ig0KCSB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgb3BhY2l0eT0iMC40Ij4NCgk8Zz4NCgkJPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTI2LjYwNCwxNC4xMDNoLTEuOTg5Yy0wLjczNC0zLjM1LTMuMzY4LTUuOTgxLTYuNzE2LTYuNzE3VjUuMzk4DQoJCQljMC0xLjA0OC0wLjg0OS0xLjg5OS0xLjg5Ny0xLjg5OWMtMS4wNDksMC0xLjg5NywwLjg1MS0xLjg5Nywx'+
			'Ljg5OXYxLjk4NmMtMy4zNTIsMC43MzUtNS45ODMsMy4zNjktNi43Miw2LjcxN0g1LjM5OA0KCQkJQzQuMzQ4LDE0LjEwMSwzLjUsMTQuOTUxLDMuNSwxNnMwLjg1MSwxLjg5NiwxLjg5OSwxLjg5NmgxLjk4NWMwLjczNSwzLjM1LDMuMzY4LDUuOTg0LDYuNzIsNi43MTl2MS45ODkNCgkJCWMwLDEuMDQ2LDAuODQ4LDEuODk2LDEuODk3LDEuODk2YzEuMDQ4LDAsMS44OTYtMC44NTEsMS44OTYtMS44OTZ2LTEuOTg5YzMuMzUxLTAuNzM2LDUuOTg0LTMuMzY5LDYuNzE5LTYuNzE5aDEuOTg2DQoJCQljMS4wNDksMCwxLjg5Ny0wLjg0OCwxLjg5Ny0xLjg5NkMyOC41MDEsMTQuOTUxLDI3LjY1MiwxNC'+
			'4xMDMsMjYuNjA0LDE0LjEwM3ogTTE2LDIxLjAyOWMtMi43NzctMC4wMDUtNS4wMjMtMi4yNTEtNS4wMy01LjAyNg0KCQkJdi0wLjAwMWMwLTAuMDAxLDAtMC4wMDEsMC0wLjAwM2MwLjAwNi0yLjc3NywyLjI1My01LjAyMiw1LjAzLTUuMDI1YzIuNzc3LDAuMDA1LDUuMDI1LDIuMjUxLDUuMDI2LDUuMDI4aDAuMDAyDQoJCQlDMjEuMDI1LDE4Ljc3OCwxOC43NzcsMjEuMDI0LDE2LDIxLjAyOXoiLz4NCgk8L2c+DQoJPGNpcmNsZSBmaWxsPSIjRkZGRkZGIiBjeD0iMTYuMDAyIiBjeT0iMTYiIHI9IjIuMTA5Ii8+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tl'+
			'PSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTTI2LjYwNCwxNC4xMDNoLTEuOTg5Yy0wLjczNC0zLjM1LTMuMzY4LTUuOTgxLTYuNzE2LTYuNzE3VjUuMzk4DQoJCQljMC0xLjA0OC0wLjg0OS0xLjg5OS0xLjg5Ny0xLjg5OWMtMS4wNDksMC0xLjg5NywwLjg1MS0xLjg5NywxLjg5OXYxLjk4NmMtMy4zNTIsMC43MzUtNS45ODMsMy4zNjktNi43Miw2LjcxN0g1LjM5OA0KCQkJQzQuMzQ4LDE0LjEwMSwzLjUsMTQuOTUxLDMuNSwxNnMwLjg1MSwxLjg5NiwxLjg5OSwxLjg5NmgxLjk4NWMwLjczNSwzLjM1LDMuMzY4LDUuOTg0LDYuNzIsNi43MTl2MS45ODkNCgkJCWMwLDEuMDQ2LDAuOD'+
			'Q4LDEuODk2LDEuODk3LDEuODk2YzEuMDQ4LDAsMS44OTYtMC44NTEsMS44OTYtMS44OTZ2LTEuOTg5YzMuMzUxLTAuNzM2LDUuOTg0LTMuMzY5LDYuNzE5LTYuNzE5aDEuOTg2DQoJCQljMS4wNDksMCwxLjg5Ny0wLjg0OCwxLjg5Ny0xLjg5NkMyOC41MDEsMTQuOTUxLDI3LjY1MiwxNC4xMDMsMjYuNjA0LDE0LjEwM3ogTTE2LDIxLjAyOWMtMi43NzctMC4wMDUtNS4wMjMtMi4yNTEtNS4wMy01LjAyNg0KCQkJdi0wLjAwMWMwLTAuMDAxLDAtMC4wMDEsMC0wLjAwM2MwLjAwNi0yLjc3NywyLjI1My01LjAyMiw1LjAzLTUuMDI1YzIuNzc3LDAuMDA1LDUuMDI1LDIuMjUxLDUuMDI2LDUuMDI4aDAu'+
			'MDAyDQoJCQlDMjEuMDI1LDE4Ljc3OCwxOC43NzcsMjEuMDI0LDE2LDIxLjAyOXoiLz4NCgk8L2c+DQoJPGNpcmNsZSBmaWxsPSIjRkZGRkZGIiBjeD0iMTYuMDAyIiBjeT0iMTYiIHI9IjIuMTA5Ii8+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._ht_url_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_url_image;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_url_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDQzMzYzKSAgLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMSBCYXNpYy8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS1iYXNpYy5kdGQiPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGJhc2VQcm9maWxlPSJiYXNpYyIgaWQ9IkxheWVyXzEiDQoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ig0KCSB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgb3BhY2l0eT0iMC40Ij4NCgk8Zz4NCgkJPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTI2LjYwNCwxNC4xMDNoLTEuOTg5Yy0wLjczNC0zLjM1LTMuMzY4LTUuOTgxLTYuNzE2LTYuNzE3VjUuMzk4DQoJCQljMC0xLjA0OC0wLjg0OS0xLjg5OS0xLjg5Ny0xLjg5OWMtMS4wNDksMC0xLjg5NywwLjg1MS0xLjg5Nywx'+
			'Ljg5OXYxLjk4NmMtMy4zNTIsMC43MzUtNS45ODMsMy4zNjktNi43Miw2LjcxN0g1LjM5OA0KCQkJQzQuMzQ4LDE0LjEwMSwzLjUsMTQuOTUxLDMuNSwxNnMwLjg1MSwxLjg5NiwxLjg5OSwxLjg5NmgxLjk4NWMwLjczNSwzLjM1LDMuMzY4LDUuOTg0LDYuNzIsNi43MTl2MS45ODkNCgkJCWMwLDEuMDQ2LDAuODQ4LDEuODk2LDEuODk3LDEuODk2YzEuMDQ4LDAsMS44OTYtMC44NTEsMS44OTYtMS44OTZ2LTEuOTg5YzMuMzUxLTAuNzM2LDUuOTg0LTMuMzY5LDYuNzE5LTYuNzE5aDEuOTg2DQoJCQljMS4wNDksMCwxLjg5Ny0wLjg0OCwxLjg5Ny0xLjg5NkMyOC41MDEsMTQuOTUxLDI3LjY1MiwxNC'+
			'4xMDMsMjYuNjA0LDE0LjEwM3ogTTE2LDIxLjAyOWMtMi43NzctMC4wMDUtNS4wMjMtMi4yNTEtNS4wMy01LjAyNg0KCQkJdi0wLjAwMWMwLTAuMDAxLDAtMC4wMDEsMC0wLjAwM2MwLjAwNi0yLjc3NywyLjI1My01LjAyMiw1LjAzLTUuMDI1YzIuNzc3LDAuMDA1LDUuMDI1LDIuMjUxLDUuMDI2LDUuMDI4aDAuMDAyDQoJCQlDMjEuMDI1LDE4Ljc3OCwxOC43NzcsMjEuMDI0LDE2LDIxLjAyOXoiLz4NCgk8L2c+DQoJPGNpcmNsZSBmaWxsPSIjRkZGRkZGIiBjeD0iMTYuMDAyIiBjeT0iMTYiIHI9IjIuMTA5Ii8+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tl'+
			'PSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTTI2LjYwNCwxNC4xMDNoLTEuOTg5Yy0wLjczNC0zLjM1LTMuMzY4LTUuOTgxLTYuNzE2LTYuNzE3VjUuMzk4DQoJCQljMC0xLjA0OC0wLjg0OS0xLjg5OS0xLjg5Ny0xLjg5OWMtMS4wNDksMC0xLjg5NywwLjg1MS0xLjg5NywxLjg5OXYxLjk4NmMtMy4zNTIsMC43MzUtNS45ODMsMy4zNjktNi43Miw2LjcxN0g1LjM5OA0KCQkJQzQuMzQ4LDE0LjEwMSwzLjUsMTQuOTUxLDMuNSwxNnMwLjg1MSwxLjg5NiwxLjg5OSwxLjg5NmgxLjk4NWMwLjczNSwzLjM1LDMuMzY4LDUuOTg0LDYuNzIsNi43MTl2MS45ODkNCgkJCWMwLDEuMDQ2LDAuOD'+
			'Q4LDEuODk2LDEuODk3LDEuODk2YzEuMDQ4LDAsMS44OTYtMC44NTEsMS44OTYtMS44OTZ2LTEuOTg5YzMuMzUxLTAuNzM2LDUuOTg0LTMuMzY5LDYuNzE5LTYuNzE5aDEuOTg2DQoJCQljMS4wNDksMCwxLjg5Ny0wLjg0OCwxLjg5Ny0xLjg5NkMyOC41MDEsMTQuOTUxLDI3LjY1MiwxNC4xMDMsMjYuNjA0LDE0LjEwM3ogTTE2LDIxLjAyOWMtMi43NzctMC4wMDUtNS4wMjMtMi4yNTEtNS4wMy01LjAyNg0KCQkJdi0wLjAwMWMwLTAuMDAxLDAtMC4wMDEsMC0wLjAwM2MwLjAwNi0yLjc3NywyLjI1My01LjAyMiw1LjAzLTUuMDI1YzIuNzc3LDAuMDA1LDUuMDI1LDIuMjUxLDUuMDI2LDUuMDI4aDAu'+
			'MDAyDQoJCQlDMjEuMDI1LDE4Ljc3OCwxOC43NzcsMjEuMDI0LDE2LDIxLjAyOXoiLz4NCgk8L2c+DQoJPGNpcmNsZSBmaWxsPSIjRkZGRkZGIiBjeD0iMTYuMDAyIiBjeT0iMTYiIHI9IjIuMTA5Ii8+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._ht_url_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_url_image;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_url_image";
		el.ggDx=-1;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_image.onmouseover=function (e) {
			me._ht_url_image__img.style.visibility='hidden';
			me._ht_url_image__imgo.style.visibility='inherit';
		}
		me._ht_url_image.onmouseout=function (e) {
			me._ht_url_image__img.style.visibility='inherit';
			me._ht_url_image__imgo.style.visibility='hidden';
		}
		me._ht_url_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_url_atrium.appendChild(me._ht_url_image);
		el=me._hurl_preview_atrium=document.createElement('div');
		el.ggId="hUrl_preview_Atrium";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 103px;';
		hs+='left : -73px;';
		hs+='position : absolute;';
		hs+='top : -117px;';
		hs+='visibility : hidden;';
		hs+='width : 153px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hurl_preview_atrium.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hurl_preview_atrium.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_url_atrium'] == true)
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
		me._hurl_preview_atrium.ggUpdatePosition=function (useTransition) {
		}
		el=me._preview_url_pictureframe_=document.createElement('div');
		el.ggId="preview_URL_pictureframe ";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._preview_url_pictureframe_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._preview_url_pictureframe_.ggUpdatePosition=function (useTransition) {
		}
		me._hurl_preview_atrium.appendChild(me._preview_url_pictureframe_);
		el=me._atrium_preview=document.createElement('div');
		els=me._atrium_preview__img=document.createElement('img');
		els.className='ggskin ggskin_atrium_preview';
		hs=basePath + 'images/atrium_preview.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Atrium Preview";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 93px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 144px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._atrium_preview.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._atrium_preview.ggUpdatePosition=function (useTransition) {
		}
		me._hurl_preview_atrium.appendChild(me._atrium_preview);
		el=me._tl_tip_bg=document.createElement('div');
		el.ggId="tl_tip_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tl_tip_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tl_tip_bg.ggUpdatePosition=function (useTransition) {
		}
		me._hurl_preview_atrium.appendChild(me._tl_tip_bg);
		el=me._tl_tip_drop_shadow=document.createElement('div');
		els=me._tl_tip_drop_shadow__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tl_tip_drop_shadow";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tl_tip_drop_shadow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tl_tip_drop_shadow.ggUpdatePosition=function (useTransition) {
		}
		me._hurl_preview_atrium.appendChild(me._tl_tip_drop_shadow);
		el=me._tl_tip=document.createElement('div');
		els=me._tl_tip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tl_tip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 79px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tl_tip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tl_tip.ggUpdatePosition=function (useTransition) {
		}
		me._hurl_preview_atrium.appendChild(me._tl_tip);
		el=me._chkmrk_tck=document.createElement('div');
		els=me._chkmrk_tck__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgWw0KCTwhRU5USVRZIG5zX2Zsb3dzICJodHRwOi8vbnMuYWRvYmUuY29tL0Zsb3dzLzEuMC8iPg0KCTwhRU5USVRZIG5zX2V4dGVuZCAiaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbn'+
			'NpYmlsaXR5LzEuMC8iPg0KCTwhRU5USVRZIG5zX2FpICJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iPg0KCTwhRU5USVRZIG5zX2dyYXBocyAiaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyI+DQpdPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zOng9IiZuc19leHRlbmQ7IiB4bWxuczppPSImbnNfYWk7IiB4bWxuczpncmFwaD0iJm5zX2dyYXBoczsiDQoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRv'+
			'YmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iDQoJIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiINCgkgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyBpZD0iTGF5ZXJfMSI+DQo8L2c+DQo8ZyBpZD0iRWJlbmVfMSI+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiI+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC'+
			'43ODdsLTIuMjkxLTIuMjQzDQoJCQkJYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDJjLTAuNTEzLDAuNTI1LTAuNTA0LDEuMzY3LDAuMDIxLDEuODhsMy4yMywzLjE2M2MwLjI1OSwwLjI1MywwLjU5NCwwLjM3OSwwLjkzLDAuMzc5DQoJCQkJYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiLz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4'+
			'Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4DQoJCQkJYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMw0KCQkJCWwtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJCTxnIG9wYWNpdHk9IjAuNCIgIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiPg0KCQkJDQoJCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW'+
			'5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIGQ9Ig0KCQkJCU0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5'+
			'NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQkNCgkJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiICBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgZD0iDQoJCQkJTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC'+
			'42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMNCgkJCQljLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAu'+
			'Mzc5LDAuOTMsMC4zNzkNCgkJCQljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTdDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIvPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMC'+
			'wxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYNCgkJCQljLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2'+
			'NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNw0KCQkJCWgtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni'+
			'0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOQ0KCQkJCWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwM2wtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=';
		me._chkmrk_tck__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;chkmrk_tck;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chkMrk_tck";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 110px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chkmrk_tck.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chkmrk_tck.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._chkmrk_tck.ggElementNodeId()) == true)
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
		me._chkmrk_tck.ggUpdatePosition=function (useTransition) {
		}
		me._hurl_preview_atrium.appendChild(me._chkmrk_tck);
		me._ht_url_atrium.appendChild(me._hurl_preview_atrium);
		me.__div = me._ht_url_atrium;
	};
	function SkinHotspotClass_hs_ground(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hs_ground=document.createElement('div');
		el.ggId="Hs_Ground";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -93px;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_ground.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._hs_ground.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hs_ground.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hs_ground.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['hs_ground']=true;
			me._hsgrnd_preview.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hs_ground.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['hs_ground']=false;
			me._hsgrnd_preview.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hs_ground.ontouchend=function (e) {
			me.elementMouseOver['hs_ground']=false;
			me._hsgrnd_preview.logicBlock_visible();
		}
		me._hs_ground.ggUpdatePosition=function (useTransition) {
		}
		el=me._ground_hotspot=document.createElement('div');
		els=me._ground_hotspot__img=document.createElement('img');
		els.className='ggskin ggskin_ground_hotspot';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAAAVCAYAAAAtkUK4AAADLElEQVRYhe1YW5LjIAzsbO2NtGdyzjScyToT+6EHAoTjcWaTj42qHAgGAS3REr7VWvGRfyu/3r2A/0E+IL9Afr9iEmauRHRj5ombmPmCQgDEYBDI6kwg+QNA6tLWhhHR7eoenpHbM5w8gsbMIKIOuNg2vjtQjA4dQIG9vNR0LVHsfyh/zCCnQY6AjostpaTg2qJHgLN6V+IbeBJATGBiLQFiBhMNpfYDi/LB1pkTROCfAf8QZAM2Wt4WMZZnJANUlcye+1BZAG2hW0o4bTDEEACaUTAbPuw/3UN4TgE+cXLGmwBQSjmceGxfbTqZr3lv+3lID733cusfygYwAw409L/VpU9vEFa7twVEp7KTS0R1IwJt2yHYXXaRcWwpBaUUMPPSa+PRzxa14kEdBD'+
			'ALngSwIUvAdKZ9iHqgGUU9csAYEfXENUJwjBaVtmzOkbdLKbiXgj/3e105JxBAXgG88tysnnlzbJ8Ad3AbaDrCgchE8woxygRSG8mwedBOyODy5NrEe5WHlofIwWY/KhGrFOjDPHkVgbMAd9QvekBHHUoTAjYFZ8o8T3UrlTi/GlX4ez0NkXOVvxuHOD5doJTxjUqWkgRW228GtIM8kngk+Kb7XJDLAsgyMBkocRytfFh5WPsY0ExjwqAUEsCVQj1W6xgyEtHvAMBgn/Yni5U+zMC2HWYfnSfHDgYEEWHbNmxBkfZNYRj0eXlkIDnuxzqdRhjqPdIag99UAk4TSt0NaATDmE6nLKUBmxPupZ4A+N6+vrAZTov1H6ZwpZR6lBUc5b8TSI9yY8/iVmmFeZ55fsgGEPJgMhpBONaashkDZ0YZ8mf3VsxrGoOgxpVlhnHq'+
			'MhLz5dB2mJ6tkvt1tvH4CuIYTBcLA3q8gCgAHXeGlK9ba8B0mBMdoI3LzubJl67V8VvECvgH47vg2HlyCEbfvqAs5hmDraEp9qHBtC1b6ZxA+l26aj/17SKTsx+DJKsar73Gm8AYyq5KBJlCwBs/HmnfGxgVdA3MpdRa3/fse91rrVKvUt/3ukul7lJBLOO7fdf+1nevVTX6HDb2nc+Pe/JHZvl8tH+BfEB+gfwFbanshZtX0Q0AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Ground Hotspot";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 15px;';
		hs+='left : -29px;';
		hs+='position : absolute;';
		hs+='top : -11px;';
		hs+='visibility : inherit;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ground_hotspot.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ground_hotspot.ggUpdatePosition=function (useTransition) {
		}
		me._hs_ground.appendChild(me._ground_hotspot);
		el=me._hsgrnd_preview=document.createElement('div');
		el.ggId="HsGrnd_preview";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 103px;';
		hs+='left : -76px;';
		hs+='position : absolute;';
		hs+='top : -201px;';
		hs+='visibility : hidden;';
		hs+='width : 153px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hsgrnd_preview.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hsgrnd_preview.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['hs_ground'] == true)
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
		me._hsgrnd_preview.ggUpdatePosition=function (useTransition) {
		}
		el=me._gnrdpreview_url_pictureframe_=document.createElement('div');
		el.ggId="Gnrdpreview_URL_pictureframe ";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gnrdpreview_url_pictureframe_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._gnrdpreview_url_pictureframe_.ggUpdatePosition=function (useTransition) {
		}
		me._hsgrnd_preview.appendChild(me._gnrdpreview_url_pictureframe_);
		el=me._grnd1b_url_preview=document.createElement('div');
		els=me._grnd1b_url_preview__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/grnd1b_url_preview_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;grnd1b_url_preview;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Grnd1B URL Preview";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._grnd1b_url_preview.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._grnd1b_url_preview.ggUpdatePosition=function (useTransition) {
		}
		me._hsgrnd_preview.appendChild(me._grnd1b_url_preview);
		el=me._grndtl_tip_bg=document.createElement('div');
		el.ggId="Grndtl_tip_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._grndtl_tip_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._grndtl_tip_bg.ggUpdatePosition=function (useTransition) {
		}
		me._hsgrnd_preview.appendChild(me._grndtl_tip_bg);
		el=me._grndtl_tip_drop_shadow=document.createElement('div');
		els=me._grndtl_tip_drop_shadow__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Grndtl_tip_drop_shadow";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._grndtl_tip_drop_shadow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._grndtl_tip_drop_shadow.ggUpdatePosition=function (useTransition) {
		}
		me._hsgrnd_preview.appendChild(me._grndtl_tip_drop_shadow);
		el=me._grndtl_tip=document.createElement('div');
		els=me._grndtl_tip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Grndtl_tip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 79px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._grndtl_tip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._grndtl_tip.ggUpdatePosition=function (useTransition) {
		}
		me._hsgrnd_preview.appendChild(me._grndtl_tip);
		el=me._grndchkmrk_tck=document.createElement('div');
		els=me._grndchkmrk_tck__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgWw0KCTwhRU5USVRZIG5zX2Zsb3dzICJodHRwOi8vbnMuYWRvYmUuY29tL0Zsb3dzLzEuMC8iPg0KCTwhRU5USVRZIG5zX2V4dGVuZCAiaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbn'+
			'NpYmlsaXR5LzEuMC8iPg0KCTwhRU5USVRZIG5zX2FpICJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iPg0KCTwhRU5USVRZIG5zX2dyYXBocyAiaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyI+DQpdPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zOng9IiZuc19leHRlbmQ7IiB4bWxuczppPSImbnNfYWk7IiB4bWxuczpncmFwaD0iJm5zX2dyYXBoczsiDQoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRv'+
			'YmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iDQoJIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiINCgkgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyBpZD0iTGF5ZXJfMSI+DQo8L2c+DQo8ZyBpZD0iRWJlbmVfMSI+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiI+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC'+
			'43ODdsLTIuMjkxLTIuMjQzDQoJCQkJYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDJjLTAuNTEzLDAuNTI1LTAuNTA0LDEuMzY3LDAuMDIxLDEuODhsMy4yMywzLjE2M2MwLjI1OSwwLjI1MywwLjU5NCwwLjM3OSwwLjkzLDAuMzc5DQoJCQkJYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiLz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4'+
			'Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4DQoJCQkJYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMw0KCQkJCWwtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJCTxnIG9wYWNpdHk9IjAuNCIgIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiPg0KCQkJDQoJCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW'+
			'5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIGQ9Ig0KCQkJCU0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5'+
			'NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQkNCgkJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiICBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgZD0iDQoJCQkJTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC'+
			'42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMNCgkJCQljLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAu'+
			'Mzc5LDAuOTMsMC4zNzkNCgkJCQljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTdDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIvPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMC'+
			'wxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYNCgkJCQljLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2'+
			'NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNw0KCQkJCWgtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni'+
			'0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOQ0KCQkJCWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwM2wtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=';
		me._grndchkmrk_tck__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;grndchkmrk_tck;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="GrndchkMrk_tck";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 110px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._grndchkmrk_tck.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._grndchkmrk_tck.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._grndchkmrk_tck.ggElementNodeId()) == true)
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
		me._grndchkmrk_tck.ggUpdatePosition=function (useTransition) {
		}
		me._hsgrnd_preview.appendChild(me._grndchkmrk_tck);
		me._hs_ground.appendChild(me._hsgrnd_preview);
		me.__div = me._hs_ground;
	};
	function SkinHotspotClass_ht_nodefrnt(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_nodefrnt=document.createElement('div');
		el.ggId="ht_nodeFrnt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -249px;';
		hs+='position : absolute;';
		hs+='top : -19px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_nodefrnt.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_nodefrnt.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodefrnt.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodefrnt.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_nodefrnt']=true;
			me._hnode_previewfrnt.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodefrnt.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_nodefrnt']=false;
			me._hnode_previewfrnt.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodefrnt.ontouchend=function (e) {
			me.elementMouseOver['ht_nodefrnt']=false;
			me._hnode_previewfrnt.logicBlock_visible();
		}
		me._ht_nodefrnt.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_frnt=document.createElement('div');
		els=me._chevron_frnt__img=document.createElement('img');
		els.className='ggskin ggskin_chevron_frnt';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAACECAYAAACNvfeQAAADNUlEQVR4nO3cwVLiQBSG0Rukyvd/W5GYnoWwmXFmIIT0n3DOUqu0CXy5nYAOrbUC+jr0XgAgRIggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggRAggxH1oVdVaa633QphHiBv19fXV6hLg9WvDMNTvX2MbBifRzbn3CRuesgoWZSJux9xJ16qqTdPkjBtMiMHO5/Mf28+5DodDLfWzWJ6taaa1nhTb1hAmYpa1J1arqna58UNHJmKGpC'+
			'fBlOzAROzk8p5f4jVb4pp2T4jra1XVLu/5JbNtXZGt6Xr2cKDjzx5bZSI+0ZJvP4TY02OJYiI+QWttC1vPh43jWMfjcf8PdAVCXNYrH0xBPuDYewE70TPAnwLosZ7r7xTkDK4RZ/rprx9WNtTfX/T/+t6ztapq4zi+8u7gbram86RNwP/Z2npfjom4AeM4Vj025YaqGs7n82JrYlkm4jx7+FD2Hh7DbrhZk2mNF+/1dzgTB7A1zdLjJstQdkbdCbGzaZqq+t7lrKqq4fsTCMPpdOq5jJclxE4+Pj6qqobD4RB1DfX+/n49KSyyrtPpZNTewJZknkcOWlR4N5r9eH0M7jYm4nq6bz8fMFTVcHkb5S5vb2/Lr2aHTMR5bjporbXrtdce3fPC2esxWIyJ+ASfn59V3/c/9vwC3PKEj2MizvO3g/ayL8xpmtrlXzb+5GWP'+
			'y61MxGW8/HS43P319sdMJuI8befXf0vxp1E3EiIEsDWFAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAEKEAL8AvKy7EqBgkhsAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._chevron_frnt__img.ggOverSrc=hs;
		el.ggId="Chevron_Frnt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.9 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 75px;';
		hs+='left : -114px;';
		hs+='position : absolute;';
		hs+='top : -41px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._chevron_frnt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_frnt.onmouseover=function (e) {
			me._chevron_frnt__img.src=me._chevron_frnt__img.ggOverSrc;
		}
		me._chevron_frnt.onmouseout=function (e) {
			me._chevron_frnt__img.src=me._chevron_frnt__img.ggNormalSrc;
		}
		me._chevron_frnt.ggUpdatePosition=function (useTransition) {
		}
		me._ht_nodefrnt.appendChild(me._chevron_frnt);
		el=me._hnode_previewfrnt=document.createElement('div');
		el.ggId="hnode_previewFrnt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 103px;';
		hs+='left : -76px;';
		hs+='position : absolute;';
		hs+='top : -165px;';
		hs+='visibility : hidden;';
		hs+='width : 153px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hnode_previewfrnt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hnode_previewfrnt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_nodefrnt'] == true)
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
		me._hnode_previewfrnt.ggUpdatePosition=function (useTransition) {
		}
		el=me._preview_pictureframe_=document.createElement('div');
		el.ggId="preview_pictureframe ";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._preview_pictureframe_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._preview_pictureframe_.ggUpdatePosition=function (useTransition) {
		}
		me._hnode_previewfrnt.appendChild(me._preview_pictureframe_);
		el=me._previewnodeimagefrnt=document.createElement('div');
		els=me._previewnodeimagefrnt__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/grnd1b_url_preview_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;previewnodeimagefrnt;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="PreviewNodeImageFrnt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._previewnodeimagefrnt.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._previewnodeimagefrnt.ggUpdatePosition=function (useTransition) {
		}
		me._hnode_previewfrnt.appendChild(me._previewnodeimagefrnt);
		el=me._tltip_bg=document.createElement('div');
		el.ggId="tltip_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tltip_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tltip_bg.ggUpdatePosition=function (useTransition) {
		}
		me._hnode_previewfrnt.appendChild(me._tltip_bg);
		el=me._tltip_drop_shadow=document.createElement('div');
		els=me._tltip_drop_shadow__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tltip_drop_shadow";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tltip_drop_shadow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tltip_drop_shadow.ggUpdatePosition=function (useTransition) {
		}
		me._hnode_previewfrnt.appendChild(me._tltip_drop_shadow);
		el=me._tltip=document.createElement('div');
		els=me._tltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 79px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tltip.ggUpdatePosition=function (useTransition) {
		}
		me._hnode_previewfrnt.appendChild(me._tltip);
		el=me._chkmrk_tick=document.createElement('div');
		els=me._chkmrk_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgWw0KCTwhRU5USVRZIG5zX2Zsb3dzICJodHRwOi8vbnMuYWRvYmUuY29tL0Zsb3dzLzEuMC8iPg0KCTwhRU5USVRZIG5zX2V4dGVuZCAiaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbn'+
			'NpYmlsaXR5LzEuMC8iPg0KCTwhRU5USVRZIG5zX2FpICJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iPg0KCTwhRU5USVRZIG5zX2dyYXBocyAiaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyI+DQpdPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zOng9IiZuc19leHRlbmQ7IiB4bWxuczppPSImbnNfYWk7IiB4bWxuczpncmFwaD0iJm5zX2dyYXBoczsiDQoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRv'+
			'YmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iDQoJIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiINCgkgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyBpZD0iTGF5ZXJfMSI+DQo8L2c+DQo8ZyBpZD0iRWJlbmVfMSI+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiI+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC'+
			'43ODdsLTIuMjkxLTIuMjQzDQoJCQkJYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDJjLTAuNTEzLDAuNTI1LTAuNTA0LDEuMzY3LDAuMDIxLDEuODhsMy4yMywzLjE2M2MwLjI1OSwwLjI1MywwLjU5NCwwLjM3OSwwLjkzLDAuMzc5DQoJCQkJYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiLz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4'+
			'Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4DQoJCQkJYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMw0KCQkJCWwtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJCTxnIG9wYWNpdHk9IjAuNCIgIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiPg0KCQkJDQoJCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW'+
			'5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIGQ9Ig0KCQkJCU0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5'+
			'NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQkNCgkJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiICBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgZD0iDQoJCQkJTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC'+
			'42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMNCgkJCQljLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAu'+
			'Mzc5LDAuOTMsMC4zNzkNCgkJCQljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTdDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIvPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMC'+
			'wxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYNCgkJCQljLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2'+
			'NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNw0KCQkJCWgtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni'+
			'0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOQ0KCQkJCWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwM2wtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=';
		me._chkmrk_tick__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;chkmrk_tick;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chkMrk_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 110px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chkmrk_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chkmrk_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._chkmrk_tick.ggElementNodeId()) == true)
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
		me._chkmrk_tick.ggUpdatePosition=function (useTransition) {
		}
		me._hnode_previewfrnt.appendChild(me._chkmrk_tick);
		me._ht_nodefrnt.appendChild(me._hnode_previewfrnt);
		me.__div = me._ht_nodefrnt;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_nodeLeft_TnB') {
			hotspot.skinid = 'ht_nodeLeft_TnB';
			hsinst = new SkinHotspotClass_ht_nodeleft_tnb(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_nodeleft_tnb_mouseover();;
			me.callChildLogicBlocksHotspot_ht_nodeleft_tnb_changevisitednodes();;
		} else
		if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_changevisitednodes();;
		} else
		if (hotspot.skinid=='ht_nodeLeft') {
			hotspot.skinid = 'ht_nodeLeft';
			hsinst = new SkinHotspotClass_ht_nodeleft(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_nodeleft_mouseover();;
			me.callChildLogicBlocksHotspot_ht_nodeleft_changevisitednodes();;
		} else
		if (hotspot.skinid=='ht_url_Atrium') {
			hotspot.skinid = 'ht_url_Atrium';
			hsinst = new SkinHotspotClass_ht_url_atrium(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_url_atrium_mouseover();;
			me.callChildLogicBlocksHotspot_ht_url_atrium_changevisitednodes();;
		} else
		if (hotspot.skinid=='Hs_Ground') {
			hotspot.skinid = 'Hs_Ground';
			hsinst = new SkinHotspotClass_hs_ground(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_hs_ground_mouseover();;
			me.callChildLogicBlocksHotspot_hs_ground_changevisitednodes();;
		} else
		{
			hotspot.skinid = 'ht_nodeFrnt';
			hsinst = new SkinHotspotClass_ht_nodefrnt(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_nodefrnt_mouseover();;
			me.callChildLogicBlocksHotspot_ht_nodefrnt_changevisitednodes();;
		}
		if (hotspot.customimage) {
			var img = document.createElement('img');
			img['ondragstart'] = function() { return false; };
			img.setAttribute('src', hotspot.customimage);
			img.setAttribute('style', 'position: absolute;width: ' + hotspot.customimagewidth + 'px; height: ' + hotspot.customimageheight + 'px;top: -' + (hotspot.customimageheight/2) + 'px;left: -' + (hotspot.customimagewidth/2) + 'px;');
			hsinst.__div.insertBefore(img,hsinst.__div.firstChild);
			hsinst.ggUse3d = hotspot.use3D;
			hsinst.gg3dDistance = hotspot.distance3D;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_nodeLeft_TnB']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_nodeLeft_TnB'].length; i++) {
				hotspotTemplates['ht_nodeLeft_TnB'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		if(hotspotTemplates['ht_nodeLeft']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_nodeLeft'].length; i++) {
				hotspotTemplates['ht_nodeLeft'][i] = null;
			}
		}
		if(hotspotTemplates['ht_url_Atrium']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url_Atrium'].length; i++) {
				hotspotTemplates['ht_url_Atrium'][i] = null;
			}
		}
		if(hotspotTemplates['Hs_Ground']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hs_Ground'].length; i++) {
				hotspotTemplates['Hs_Ground'][i] = null;
			}
		}
		if(hotspotTemplates['ht_nodeFrnt']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_nodeFrnt'].length; i++) {
				hotspotTemplates['ht_nodeFrnt'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinElement__3brdot_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__3brdot=document.createElement('div');
		el.ggId="3BRdot";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : #7d7d7d;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 11px;';
		hs+='position : absolute;';
		hs+='right : -70px;';
		hs+='top : -210px;';
		hs+='visibility : inherit;';
		hs+='width : 11px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__3brdot.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__3brdot.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement__2brdot_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__2brdot=document.createElement('div');
		el.ggId="2BRdot";
		el.ggDx=216;
		el.ggDy=-406;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : #ff0000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 6px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 6px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__2brdot.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__2brdot.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement__1brdot_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__1brdot=document.createElement('div');
		el.ggId="1BRdot";
		el.ggDx=216;
		el.ggDy=-406;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : #ff0000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 6px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 6px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__1brdot.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__1brdot.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinCloner_thumbnail_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 117px; height: 86px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_nodeimage=document.createElement('div');
		els=me._thumbnail_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;thumbnail_nodeimage;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Thumbnail NodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 84px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 115px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_nodeimage.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_nodeimage']=true;
			me._tnhintbox.logicBlock_visible();
		}
		me._thumbnail_nodeimage.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_nodeimage']=false;
			me._tnhintbox.logicBlock_visible();
		}
		me._thumbnail_nodeimage.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_nodeimage']=false;
			me._tnhintbox.logicBlock_visible();
		}
		me._thumbnail_nodeimage.ggUpdatePosition=function (useTransition) {
		}
		el=me._tn_checkmark_tick=document.createElement('div');
		els=me._tn_checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgWw0KCTwhRU5USVRZIG5zX2Zsb3dzICJodHRwOi8vbnMuYWRvYmUuY29tL0Zsb3dzLzEuMC8iPg0KCTwhRU5USVRZIG5zX2V4dGVuZCAiaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbn'+
			'NpYmlsaXR5LzEuMC8iPg0KCTwhRU5USVRZIG5zX2FpICJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iPg0KCTwhRU5USVRZIG5zX2dyYXBocyAiaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyI+DQpdPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zOng9IiZuc19leHRlbmQ7IiB4bWxuczppPSImbnNfYWk7IiB4bWxuczpncmFwaD0iJm5zX2dyYXBoczsiDQoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRv'+
			'YmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iDQoJIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiINCgkgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyBpZD0iTGF5ZXJfMSI+DQo8L2c+DQo8ZyBpZD0iRWJlbmVfMSI+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiI+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC'+
			'43ODdsLTIuMjkxLTIuMjQzDQoJCQkJYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDJjLTAuNTEzLDAuNTI1LTAuNTA0LDEuMzY3LDAuMDIxLDEuODhsMy4yMywzLjE2M2MwLjI1OSwwLjI1MywwLjU5NCwwLjM3OSwwLjkzLDAuMzc5DQoJCQkJYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiLz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4'+
			'Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4DQoJCQkJYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMw0KCQkJCWwtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJCTxnIG9wYWNpdHk9IjAuNCIgIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiPg0KCQkJDQoJCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW'+
			'5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIGQ9Ig0KCQkJCU0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5'+
			'NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQkNCgkJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiICBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgZD0iDQoJCQkJTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC'+
			'42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMNCgkJCQljLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAu'+
			'Mzc5LDAuOTMsMC4zNzkNCgkJCQljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTdDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIvPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMC'+
			'wxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYNCgkJCQljLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2'+
			'NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNw0KCQkJCWgtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni'+
			'0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOQ0KCQkJCWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwM2wtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=';
		me._tn_checkmark_tick__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;tn_checkmark_tick;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="tn_checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 22px;';
		hs+='left : 94px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : hidden;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tn_checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tn_checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._tn_checkmark_tick.ggElementNodeId()) == true) || 
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
		me._tn_checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage.appendChild(me._tn_checkmark_tick);
		el=me._thumbnail_active=document.createElement('div');
		el.ggId="Thumbnail Active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active.logicBlock_bordercolor = function() {
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
				me._thumbnail_active.style[domTransition]='border-color 0s';
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
		me._thumbnail_active.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active']=true;
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage.appendChild(me._thumbnail_active);
		el=me._tnhintbox=document.createElement('div');
		el.ggId="TNHintBox";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
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
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tnhintbox.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tnhintbox.logicBlock_visible = function() {
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
		me._tnhintbox.ggUpdatePosition=function (useTransition) {
		}
		el=me._tnhint_txt=document.createElement('div');
		els=me._tnhint_txt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TNHint_Txt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 19px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 113px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 115px;';
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
		els.setAttribute('style',hs);
		els.innerHTML="<font size=1>"+me.ggUserdata.title+"<\/font>";
		el.appendChild(els);
		me._tnhint_txt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tnhint_txt.ggUpdatePosition=function (useTransition) {
		}
		me._tnhintbox.appendChild(me._tnhint_txt);
		me._thumbnail_nodeimage.appendChild(me._tnhintbox);
		me.__div.appendChild(me._thumbnail_nodeimage);
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._container1.logicBlock_scaling();
	me._container4map.logicBlock_position();
	me._container4map.logicBlock_scaling();
	me._container4mdle.logicBlock_scaling();
	me._hekpkahon.logicBlock_position();
	me._pointtint.logicBlock_scaling();
	me._kahonessentials.logicBlock_scaling();
	me._tn_location_box.logicBlock_position();
	me._container4hdr.logicBlock_scaling();
	me._floor_plan_bg.logicBlock_scaling();
	me._floorpln_hydbttn.logicBlock_scaling();
	me.__1br_flrplan.logicBlock_scaling();
	me.__2br_flrplan.logicBlock_scaling();
	me.__3br_flrplan.logicBlock_scaling();
	me._maprect.logicBlock_scaling();
	me._maprect.logicBlock_visible();
	me._mapbttnhyd.logicBlock_scaling();
	me._mapbttnshw.logicBlock_scaling();
	me._floorpln_hyd.logicBlock_scaling();
	me._floorpln_show.logicBlock_scaling();
	me._kahondaga.logicBlock_scaling();
	me._kahonmobile.logicBlock_scaling();
	player.addListener('sizechanged', function(args) { me._container1.logicBlock_scaling();me._container4map.logicBlock_position();me._container4map.logicBlock_scaling();me._container4mdle.logicBlock_scaling();me._hekpkahon.logicBlock_position();me._pointtint.logicBlock_scaling();me._kahonessentials.logicBlock_scaling();me._tn_location_box.logicBlock_position();me._container4hdr.logicBlock_scaling(); });
	player.addListener('changenode', function(args) { me._floor_plan_bg.logicBlock_scaling();me._floorpln_hydbttn.logicBlock_scaling();me.__1br_flrplan.logicBlock_scaling();me.__2br_flrplan.logicBlock_scaling();me.__3br_flrplan.logicBlock_scaling();me._maprect.logicBlock_scaling();me._maprect.logicBlock_visible();me._mapbttnhyd.logicBlock_scaling();me._mapbttnshw.logicBlock_scaling();me._floorpln_hyd.logicBlock_scaling();me._floorpln_show.logicBlock_scaling(); });
	player.addListener('configloaded', function(args) { me._container1.logicBlock_scaling();me._container4map.logicBlock_position();me._container4map.logicBlock_scaling();me._container4mdle.logicBlock_scaling();me._hekpkahon.logicBlock_position();me._kahondaga.logicBlock_scaling();me._kahonmobile.logicBlock_scaling();me._pointtint.logicBlock_scaling();me._kahonessentials.logicBlock_scaling();me._tn_location_box.logicBlock_position();me._container4hdr.logicBlock_scaling(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me._thumbnail_cloner.callChildLogicBlocks_active(); });
	player.addListener('changevisitednodes', function(args) { me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_nodeleft_tnb_mouseover();me.callChildLogicBlocksHotspot_ht_node_mouseover();me.callChildLogicBlocksHotspot_ht_nodeleft_mouseover();me.callChildLogicBlocksHotspot_ht_url_atrium_mouseover();me.callChildLogicBlocksHotspot_hs_ground_mouseover();me.callChildLogicBlocksHotspot_ht_nodefrnt_mouseover(); });
	player.addListener('changevisitednodes', function(args) { me.callChildLogicBlocksHotspot_ht_nodeleft_tnb_changevisitednodes();me.callChildLogicBlocksHotspot_ht_node_changevisitednodes();me.callChildLogicBlocksHotspot_ht_nodeleft_changevisitednodes();me.callChildLogicBlocksHotspot_ht_url_atrium_changevisitednodes();me.callChildLogicBlocksHotspot_hs_ground_changevisitednodes();me.callChildLogicBlocksHotspot_ht_nodefrnt_changevisitednodes(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};