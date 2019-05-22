// Garden Gnome Software - Skin
// Pano2VR 6.0 beta4/17095
// Filename: Ace_Simplex_V5_VRTEk_VIDv2_2b.ggsk
// Generated Fri Oct 12 21:28:04 2018

function pano2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var skinKeyPressed = 0;
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
		me._container4map.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._container4map.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height > 1) && 
				(me.player.getViewerSize().width <= 736)
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
		this._container4map.ggUpdatePosition=function (useTransition) {
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
		el.ggDx=4;
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
		me._maprect.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._maprect.ggUpdatePosition=function (useTransition) {
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
			if (me.player.getMapType(me._map_1.ggMapId) == 'file') {
				var coords = me.player.getNodeMapCoords(id, me._map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = me.player.getMapContainingNode(id);
					if (mapId != '') {
							this.ggChangeMap(mapId);
					}
				}
			}
			me._map_1.ggLastNodeId = id;
		}
		me._maprect.appendChild(me._map_1);
		el=me._map_close=document.createElement('div');
		els=this._map_close__img=document.createElement('img');
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
		elo=this._map_close__imgo=document.createElement('img');
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
		me._maprect.appendChild(me._map_close);
		el=me._maximize=document.createElement('div');
		els=me._maximize__img=document.createElement('img');
		els.className='ggskin ggskin_maximize';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="maximize";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 576px;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : hidden;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._maximize.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._maximize.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._maximize.onclick=function (e) {
			me._map_1.style[domTransition]='none';
			me._map_1.style.opacity='1';
			me._map_1.style.visibility=me._map_1.ggVisible?'inherit':'hidden';
			me._maximize.style[domTransition]='none';
			me._maximize.style.visibility='hidden';
			me._maximize.ggVisible=false;
			me._minimize.style[domTransition]='none';
			me._minimize.style.visibility=(Number(me._minimize.style.opacity)>0||!me._minimize.style.opacity)?'inherit':'hidden';
			me._minimize.ggVisible=true;
			if (me.player.transitionsDisabled) {
				me._maprect.style[domTransition]='none';
			} else {
				me._maprect.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._maprect.style.opacity='1';
			me._maprect.style.visibility=me._maprect.ggVisible?'inherit':'hidden';
		}
		this._maximize.ggUpdatePosition=function (useTransition) {
		}
		me._maprect.appendChild(me._maximize);
		el=me._minimize=document.createElement('div');
		els=me._minimize__img=document.createElement('img');
		els.className='ggskin ggskin_minimize';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAIJElEQVRYhc1Xb0xT6xl/jvS0lNI/p6AWK7mzpdBQ5wUO0LRQcpB/rVUnRGYw4s2WbFlu4lyMU65VZySLi8MZCZhr/IAjRJwzzC8GV8Sgg9QWj3c6Wih/agJUgpb2tNBjrwXPPsghFRmidx/u86npeX7v+3uf532f3/MA/AgM+VQAjuMJAoFgI03TkoWFBREAQFxcXCghIYEKh8PTJEnSn7omZy1OBEFwwuHwVoZhcnAcL9+yZUuaVCoVJSUlJQAAzMzM0H6/f9bj8YwgCGJFEOSJQCAY6OnpmV/L+h+LBKLT6TLkcnl1WVnZ/qKioi1yuZwnFApXdJ6dnQWv1/v9gwcPnlut1utTU1N/t9lsbgBgPotEdXU11+fzmSorK0+Wl5dnZWRkLEXN7/dDJB'+
			'IBiqLeAABIJBIun88HDMOW8G63e95qtf779u3bZ6enp//pdDrffBIJrVYrSk5O/qq2tvaEyWSSiUQiAABwOByh7u7usZGREdLlcjnD4fAMAIBAIEjKzMzUqFQqvLS0VJmXlycCAAgGg9DZ2TnV1tZ2zufz/dVut4dWi8h7ETCbzYe6urqCzKKNj4+/Pn78+AOtVlur1+uVGo2Guxyn0Wi4er1eqdVqa+vq6nomJydfs3ir1Ro0m82HqqurP8CtGJni4uKf3bhxY4pd4NGjRz6z2dxQWFioWNMpAECv1yt37NhxwW63+9h12tvbXxQXF++Gj91DnU6nbmxs7A8Gg0sE9Hr9cRzHxWslwBqO42K9Xn+cJUJRFNPY2Niv0+nU/xNEEASnqqrq1NDQUJRNgdlsbvgcArFETCZTA5uawcHBaFVV1SmCIN4rDevYH+FweKvR'+
			'aKxhX0Fzc7MjGAxeJkky+LkkSJIMUhT1bVNTkwMAQK1WcyoqKmpomtasCMjNzf3l4OBghGEYxm63B7VabS0AAEEQsqysLH1BQcGmtW5eVFSUmp2drTMYDOsBAPLz8w86HI4gwzCMy+WK5OTk/CLWPw7gXSnGcfzI3r17v+TxeNDa2uoaHR39S2pqKpqWlna2pqbmCAB8yeVyh8fHx6dXI2AwGPJzc3PP7dq169ehUEgmFAodCIL4OBxOmcFgkPF4PM7AwACNIEjn1NRUFGCxbAsEgo0KhUIlFArB7/fDyMgIGQwGJ7hcrq6ioqJs3759W4xGo6K+vj4OQZBvHj58OLISAb1evzUvL+8Pp0+fNonFYoRhmAqXy3Wdpumnw8PDZCAQyMIwDJRKZYbb7d4IAM8BFu8ETdMSqVQqBACIRCLgcrmcTqfzjUAgmHj8+PFQNB'+
			'qFDRs2rLNYLLuVSmUdQRCbVyCg3LZtm8VisVSIxWKEpmnmyZMnLg6H88LpdL5xu90DkUgEAAAwDEuMRCIiFrsOAGBhYWFJjCiKesNWwt7eXo/NZjvX0NDwHQCATCZDT5w4sV8mkx1h8w0AUFBQsEmhUPzeYrFUSaXSuPn5eTh//rzt6dOnf7bZbF4AgFAo5GfLvFQqFUSjUcl7JFazvr6+vjt37py8cuWKGwAgLS0t/tixY7/CMOxrHMfFJSUlSSkpKYctFsvBzZs3cwEALl269J/u7m5Lb2+vfZWll0RtHcC7fmBmZoYGeCdGAoEgKcb5LYqi1tbW1jM3b96cAADIzs5OPHr06G8xDDuEoujv6urqfqNWq/kAAC0tLWO3bt062dvb+zB2R5FIJJVIJFwAAL/fH0ZRdOnpcwAAEhISKL/fHwIA4PP5kJmZqZmbm+Oy'+
			'ytfT0zNvMpn+cfnyZZFEIqkvLy/fYDAYpIcPH/46MTERxXFcBADQ0dHhbWlpORONRjsB4C27iUaj4WZkZPyUz+cDAEAgEJiLj49fErN1AADhcHja4/GMzs7OAoZhoFKpcLFYnBp7ks7Ozu8RBLl+8eLFBpvNRgEA7Ny5M4UgiGQAgPv37/uam5v/FBcXd4skyWgsViwWp6anp+dIJBIIhUIwNjbmDofDHz715cUqPz//4EqJLCwsxCorK/84MDAwx4pTf39/0Gw2W7RarWgljFarre3v7w8yDMM4nc6VixUAgFwuZ5KSkrbjOL5eLpfzPB6P9O3bt/+amJgIxALGx8cjMpnMNTIywkNRVO1yuehr1641+Xy+y319fe/5LhJQlZSUnKmtrU0HAOjo6Bh99uxZo9fr/TASywVscnJyVQFbLOf7c3Jyfs6mZLnhOC42Go'+
			'0XYgVsz549J5cL2HvGSjlFUcxiWn6QlOt0um8cDoePYRgmEAgwTU1NjlWlfNGQ4uLi3e3t7S/YfNvtdp/JZGrQ6XRpayWg1WpVRqPxgsPhmIltarZv374LVmhq4pb/kZeX95wkydfr168vUCqVPLlcnkAQRM7Lly9zo9HowhdffBEWiUThV69eLcTiNBoNV6VS/SQlJWVXaWnpmfr6+j1qtVoIAGC1WkNXr1496/V6/7YcByuxWjyJKDk5+asDBw6cMJlMMrH4XTb6+/tD9+7d84yOjpLDw8OuQCDgAwDAMCw5LS0tMz09HS8tLVWwjS5FUXD37t2ptra2cxRFXevr65tdab+PtfzGysrKU2VlZVlqtXrpMgUCAYhEIjA3NxdlGAaEQiHK5/NBIlmSAxgaGprv7u7+rqOjo/6zWv7Y7zqdLiMlJaXaaDTWGAwGxaZN'+
			'm3jsCLDcQqEQO/x4urq62n/w8BNrBEFwaJrWzM/P5+Tm5lYoFAoVhmGJUqlUAPBOCwKBwOzY2NgwSZJdKIqSfD7f9f8aAz8wdiCORCKiRTlmUBQNxsfHhz53IP5R2H8BsO8BLbar+4oAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="minimize";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 575px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._minimize.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._minimize.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._minimize.onclick=function (e) {
			if (me.player.transitionsDisabled) {
				me._map_1.style[domTransition]='none';
			} else {
				me._map_1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map_1.style.opacity='0.5';
			me._map_1.style.visibility=me._map_1.ggVisible?'inherit':'hidden';
			me._minimize.style[domTransition]='none';
			me._minimize.style.visibility='hidden';
			me._minimize.ggVisible=false;
			me._maximize.style[domTransition]='none';
			me._maximize.style.visibility=(Number(me._maximize.style.opacity)>0||!me._maximize.style.opacity)?'inherit':'hidden';
			me._maximize.ggVisible=true;
			me._maprect.style[domTransition]='none';
			me._maprect.style.opacity='0.7';
			me._maprect.style.visibility=me._maprect.ggVisible?'inherit':'hidden';
		}
		this._minimize.ggUpdatePosition=function (useTransition) {
		}
		me._maprect.appendChild(me._minimize);
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
		me._container4mdle.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._container4mdle.logicBlock_scaling = function() {
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
		this._container4mdle.ggUpdatePosition=function (useTransition) {
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
		me._hekpkahon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._hekpkahon.logicBlock_position = function() {
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
		this._hekpkahon.ggUpdatePosition=function (useTransition) {
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
		me._kahondaga.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._kahondaga.logicBlock_scaling = function() {
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
		this._kahondaga.ggUpdatePosition=function (useTransition) {
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
		me._tint.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tint.ggUpdatePosition=function (useTransition) {
		}
		el=me._trapclose=document.createElement('div');
		els=this._trapclose__img=document.createElement('img');
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
		elo=this._trapclose__imgo=document.createElement('img');
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
		me.player.checkLoaded.push(els);
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
		me._flrplanbtn.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._flrplanbtn.ggUpdatePosition=function (useTransition) {
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
		me._fptxt.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fptxt.ggUpdatePosition=function (useTransition) {
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
		me.player.checkLoaded.push(els);
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
		me._thumbnailbtn.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._thumbnailbtn.ggUpdatePosition=function (useTransition) {
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
		me._tntxxt.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tntxxt.ggUpdatePosition=function (useTransition) {
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
		me.player.checkLoaded.push(els);
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
		me._googlemap.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._googlemap.ggUpdatePosition=function (useTransition) {
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
		me._ggletxt.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ggletxt.ggUpdatePosition=function (useTransition) {
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
		me.player.checkLoaded.push(els);
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
		me._keyboard.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._keyboard.ggUpdatePosition=function (useTransition) {
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
		me._text_4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_4.ggUpdatePosition=function (useTransition) {
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
		me._text_3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_3.ggUpdatePosition=function (useTransition) {
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
		me.player.checkLoaded.push(els);
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
		me._daga.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._daga.ggUpdatePosition=function (useTransition) {
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
		me._text_2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_2.ggUpdatePosition=function (useTransition) {
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
		me._kahonmobile.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._kahonmobile.logicBlock_scaling = function() {
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
		this._kahonmobile.ggUpdatePosition=function (useTransition) {
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
		me._pointtint.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._pointtint.logicBlock_scaling = function() {
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
		this._pointtint.ggUpdatePosition=function (useTransition) {
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
		els=this._helpbox_close__img=document.createElement('img');
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
		elo=this._helpbox_close__imgo=document.createElement('img');
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
		me._text_5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_5.ggUpdatePosition=function (useTransition) {
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
		me.player.checkLoaded.push(els);
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
		me._finger1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._finger1.ggUpdatePosition=function (useTransition) {
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
		me.player.checkLoaded.push(els);
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
		me._finger2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._finger2.ggUpdatePosition=function (useTransition) {
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
		me._text_6.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_6.ggUpdatePosition=function (useTransition) {
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
		me.player.checkLoaded.push(els);
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
		me._finger3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._finger3.ggUpdatePosition=function (useTransition) {
		}
		me._kahonmobile.appendChild(me._finger3);
		el=me._finger4=document.createElement('div');
		els=me._finger4__img=document.createElement('img');
		els.className='ggskin ggskin_finger4';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAAEKCAYAAACPA76fAAAgAElEQVR4nO2drX/iWvf2L57PEStuxxGZOnDgiqSOOupa2ZHPn3PLObLjpm7qiuw46oorMnXZLsvtn9gvCT20JJBAgP29b06nLwkpvVhZe+310lHweI6H/3foC/B4quAF6zkqvGA9R4UXrOeo8IL1HBVHIdio21UhkQ9oeI5DsFJKAMCP23sv2jOn03YFBCAlBAEAPqSEAjoHviTPAWm1hb0ejxUJAjMDDHRJYHR52fb3mKdBWm1hrXVlAGAGEUFKRgb2VvZMaa2F7fd6ighgAMT6a8wAEXARx21+n3kapLUWNiBSgrQ7QCAwaeEyAZCM1FvZs6SVFjYSXUXQFhUg/X8jVmIGSAv6wJfpOQCtFKxkCSICwCCCXnQBuU8AAoFwd3vrRXtmtM4lCIiUMF'+
			'bV6pR0VMt8rhdfOnDAyNi7BudEqyzs1eWlIidWNkLVqtWegLGwVsgAhoNB295zngZplYUNAEVCANpNBResqfEQVr5mlZt6K3s2tMbC9uNYEQm3qALgrKkTK2nv1VpfMv+Lut02ve88DdIawS6TROvTiFSyRBxFbtOAoXUc9WIws7OwDIBNroHn9GmFYEMhFIEgmQFmjMYjZEBnvlh0QMhXXQDmr6+dDOiMx2Pr3QJEPsx1LqgDP25vbxUBqtvtqnXf7wqhukIoQUIJorU/E3djRYCaTCZrv+8fp/P4Bwfm9fUVGdDBx8fa76+Gsowz+4n3j2UHAPrLpWrwUj0toFVRgnVodwFu0ZVK6SMCZ0wrfNjv0Fu0vMaues6R1gtWRwfIhLa8bM+d1gtWY8JYhWiB5zxpv2BtxpZ3Cjw4BsHSygfPmdOoYK8nk9qCEHXZV18T'+
			'dtw0JtgAUNzCRVIURX5X7IipPQ4bCaGkEWoduaohmTgsGExUSxzWClYQIfFx3aOiNgs77PWUFQKBEEdRPSe2ydv1nA0A0Ov1dEUDAx1A9X1R49Gws2BvJlMVEKnlcgky6mJmvC2XrbVc89fXjt6MYHRFF2maogOomxp9bk8z7OQSuH5XRHkptrGIdW2hRkLo56h5azbqdhUkF6ob8qRwnxDeXraysBfdrgqIFLmCQA1DpwfWud+vMw7zfNi6SD4+OlKXMBTOrJ8lJFI+KbydVBLs6PJSBYBKba8A/lTV6qxUjRC0v1l8npoQpLvK5L8D5ZtpzAhAqt/reeG2iFIuwY/bW/Xw69H8MSkvBgSBWcL+oZmBUBDG19fI0hQBETIAAYCMgYCQf77p6wDAjNlstnLLvpneAMg2n6fwuTPPpjgsAAAEmM3+IJVyTd1YQcREYC'+
			'kxnd7i4fGXdxUOzEbBhiSU/WMT2UWV/W7ha5JhG7dpSTuV7PARIBLG+hXPa/nvcfonCse7rxSPNd83vrc+kl15jhWrW0S6xBtCyj4Mdki+dAmuJxPVARQVxFq8IxdLrpm1WAvfyc2VtchGJIT/fv2r7+vzS1Mlk5/f/rvo07o7ORXPZz/kb6C8vpEKxxvxFj51x5quM/b3CYjUyJeWH4yNFjbqdpWUUvt7hfJr+wfmgkXalKTyeeG06XMABSuYdy90jTWAgsA/nyO3tcVzYWUBZ9sgGevq7hKffqfCm9ZvNByW0mGtAKTILIBsS4CV2ygAWzCYfHzU9kcNSahit5c6b8kXcazSJMnDcrT6BiTTjI5Rz66dZ3dKRwkycGc0HkNKae+Ued+Agnco6y65tr0IUH86bJqkWHEMVqIeuop3OBp5sbaIrTYO+nFPJckSAPIV'+
			'NuBkW2fgPRRCWZcANeUSuHObWDIX7hbEgAQjiiK8t3i37lzZaacrEkIVq1o12t7WJaxcsNrC1uVDRt2uYskrEYEm3hSeetkplyCRsnNzd6O7r9gdKfOoCxczqHnjwLo29vbPYEymUy/WtlNXg4PxeKwEkWt6EcdxLU0t7PnsxzrOORgMlCBSQpeQq/Hl2DfgOJJH7SeMY92Fhb7o0lL1IYRQXRJKiK87v1R9kG5Hr+JuPW+qTY/pdKriblcRkSKQss/vPpqvEaCEEGrQ6/k30BePxhppBERqNBrheTbb6RZrfdi6ErivJxM1m832svIPhVD5bouN+WJ1543IdGyklR+18eJeHGO+WHg3xdBYiUzG3BFC1HY+tskKO0JEjYs1JNLZbPoZYXMtXLQDNrNNb2kz9EetaTYbbzrgtkwSBCDlJ+doWt+qKBJCFbMA27woch'+
			'sRNrpbWCgydD3ZoDfA76fHtb/D1eVYzRdzE7UwJ7Bbw2BIAHfTKX7+Ot8knNYL1oW1zG2yrcnVAUiRWN1G/pAScRxvFc+9u71Vs6enlbRH++8wCs82Rtx+wZJQLqiP+uKwdWIHieRZXUAUxXhb1uN76sqOPDmo7W/eJjmSRhp5GmDbKE69sReYMnfqEqs933A0BOxTmDyHAOdXrt56C+t201poVfTCilZ2y5KG82XthEhb4wa026+vm9ZbWKtVG/ppC5/niZEQjYsV0NGXDylzi86McyrjObhgyxb7lXEH9lU4GHW7bp4YGCBRb0rlJhTQsXnBBGC5XO7rqQ/OwQV7fX2NDqBCIdSP2/tvBLfeuv64v1ehECqA3qhomh/39zppphBR3adYLRnY9FbQi9Gzab906K02BZMvYLZeCaQuLy/Vf7+3ujU71lMT9batyQvY'+
			'x7XavIauyUM45Ot2eXmp9NY1KUFi5XU71cfBL8A+CJQLwe71x7FOfDGC7JJQPb3j4wSshVNPjsGmx/39vSKiXCCDwcEFQuY16JJQwGHfQPt4HNwlsMRuYBxDmBLyzA6bs2Et0lUCQgi4ch1mxHG8l2t8eHjQN2DzvC+vrwdfnU+nU7djLYhwNR6rw15Rs7QqrBWAlCgUARZ7BACFZheFWjJmqccm7YFia6Zhr4fnv3+3et6LOFbJMkGxVs1W7sZxjLeKyS7F62pb6K9uWmNhAcBON7QJIGySQWxyuFuZmz8METC6HO/l2oaDgdKVwtq6biPWqNtVIZHSdwmCIKGztQjmrkFIkwQBsGEBusporF8D4lryg1pNqywsUNjmBJsmGnKlgYetHbMl3xn2Y01swN5a/6pbxLYkx9XGO4pl6vn2qwRXyiqz2WEEwnA8wp+np5'+
			'O0sq2ysIAOjNvOAVasdhgy5eW6YGbc3d/t9dps5lV/OKx03PVkojslurQzIIpj3NzdIc1SpFmGyWRSqJU3W68VQlVWrAzGYj6vdH3HROssLABEoqtc5mjBFVhp2MbYy86SpZiAUtVHLFo/BiPNsi9/tt/vI10mYPP7lrWy/ThWSZJC9wOpZp2PidZZWABI5EdHMrues3b7E6YNkWTeq1h/3N+r1RS/ami3W9/mx5PJtz/79vYGCQaZN2rZJsu9wcD5+63MEqqJVgoW0G3dNXlbT+vhRXW1oy9JmqYFv7NaPsPNZKpsVTEA/P79u+SR+hdeLBalfjoKw0aajbSN1gp2/vrakSxBIl+Zswlj7Tt5WRaTTSoKIkkTHVem8odGQrgSmiRNSx3zv3//7QCuyeLJ0lrBAsD09hby48O1KwJ06OtgrPadK8VyudRuRAXzR2EI'+
			'cveTKurb4gKPjFYL9uHXrw4JYRbX2jn7s2MV7jYIcw3bWNgAgYu1lkU33LObCuV6lf24v1fFGPWp0mrBAjo5WTbQs6sKYRjauFF1MQQwO3Llo/p6ZJQWnix5TJqmuqk0UNEqHxetFywARCI66Grip/EPNdtch94EKf3ThT4MZcW3eF1AmKbSfMJuwVEI9v1j2Tl0GYg1kESolGCSZZnbnSv/prMNNsy/S5AkSxPSYkR7SgY6BEch2DZgd9kIhLcKO0muizdz6emQf56fc7+9pMhd2RuKIcHTwwu2JHGvZ0tWS/uVQNGBqOZK2EVXGQN7PZkoe3ZmnGweAeAFW5r562sHZC0ZlR5j7/RWTnurx5Z8Y8xmMxRzEE4ZL9gqFEYhLV5fSx2yst9QQbFutV9Cfy6aBcJoVC0x59jwgq3AZDpFcTLNsMT4Iy4snPLRUJuxBY'+
			'6bogSBScrR6y15kDj1PvGCrcDDr18d25SOQKX2+SXnkxbDMCz/ZJyL9iuGujGz+XlGbzAof/4jxQu2Ihlzxy66iCgvT/kCKnys5l/+d5jfZ5aL5Yqo5y2oMWsaL9gtiITQ5TvG3H7fwIPMzFpUW3UVxojq9MZVAiJVdE/u7vabzH4ovGC34P3jo8PFxFMp8WXDYeM+bDdQRB+TfUr4vrocK1d8wbrv7P9WduNOFy/YLcmYO3kqHyFNU1yss7SFhJkqiy7bwZkBM3288NzIdIdu0pb+7Yx6xXrB7kAK7oAZ0qyQ0nVTIAm6HTyoQvI2oLcOdI+G5NN5oygCM0OyPKvOhYAX7M7c3N25eOlXiyqqGoQ1B2lXAkiSZOVbvx8fO4zznH/rBbsjP//9t5Oy7NjhGuvZYvepuNuw5sTnKFbAC7Y2MnBnbZyVt032K9SQnfZu'+
			'ayW8YGtkba0Z5WXpVRCi68JhMql5QvoR4wXbMK5IoWppjYk+6MO+7mNwbnjB7omt4rCuD8LnwNb54gXbMHmotqqJDfROGhEyLlfqfQ54wTZMoV1WJWwvAzAqJYyfOl6we6CYYlga2//2hAsKt8ELtkHuprem0bD7T0WqNtI4fbxgm8SUAlSpfrVEYZQ3i/FG1uEF2zRm46BqrVXUFbDJL97I5njBNogLRu3SPcgvuFbwgm2Q+WJRKNWu2uIoKJR6e9FavGCbxPTUoi0WXT9//izsknmfwOIF2yR2HgOArVdOftG1ghds47Dbsap8JPv11me8YBtEuwPkhotUhoouhQfwgm0UTtmlCIpud4sTIBe8B4AXbKNkyNzGwXb5Vl6qn/GCbZDAyZS3y2i1kxexvjfBOeIF2yhapgzazsLa+C0RkuWyxus6Xrxg98K2Sdjshm'+
			'xUaTl/ynjBNkjyIV1PLQq3Wernx5SdJnPqeME2Cu+0q0rOulLpAXOnjhdsg+jbuA5tiW2CqYVDdPcYjxdsg7DpDWtX+1ucwHV/8ZsHmn8OfQEnzcpQjeqKLe6S+boujbewDWNHjm7THTuw1QpEyBLvwwJesI2ybdKLJUNx/pa3sIAXbLMQgB0WS3qwcp5E4/GCbRRm28R4O7GJSLiwlo8SaLxgG4W360lgCMMwbzfvDSwAL9hGIdO5kBl4eHjY6hxsehN4+6rxgm0QXqnpqg65/34t1+vJRIVEKrAP6I8hSI1KDL47Njon9xu1iBCkSBAk838mwZQ+RxBAj06SyICV/rMBkSIGIMyIJJMsY90QIoKUEpPpFL8fH0+iY7e3sA3CdoW/5fE/fvxA3iM25+72VoVEikAgkX9fj+/UcV+7QyaEwNPjE/q93knYJi/YBiFb'+
			'4rKTA2oisMav+HF7rx4fH82WrxYoM2M4GiLNMqRZhvFkslKpSyaftuwE8jbjXYIGsWM9Gf8dDleWoBNACB0pGI3GeHmZuRxZAIjjGPO3t7XHXl1dYf7y4sTOkpHhuId5tN7CXo8najgYqLvp9OjeW3qXqp7+gwTC7GW2knLY6w2+FCsAPD8/YzyeaLeEGSQIAXB0r2ORVlrYi25XJR8yX107i0JgMOIoOorpf6EdDc+MTO2y6DLjP10FAgAC0pI5sv1+H+kyMc4F4WY6wc9fv1r/+q2jdYINAEVCgFwz3zyWSa7nvyYUEd4/2ivckEjB7FLtLFh7WzcRgLSiixF0OhBC5Mcf6ZyvVrkEAUiLFcXII0NKCbtrpP9wBCJCymlrb3E/bvMq113SAPQmF5nFlT5XFMeVzzMYDNa+6b/jejJR/V5PXXS76iKO1c1kcvDXuj'+
			'WCHQ0GyvpntieqXfVmSpl/pybOaKdoM4QQCIjUaNCuFXAiE9g+m9tN8jZQvttFBEjJePvGb/2Kl/kcbqoi0bdl46EQKiBSL7MXJMslMslI0xSz2QwBSEVizRDoPdEawS4Wi5VR7V/5Z0mSIFOZ2V/PFyCLxWsLY4225fv2JraYqcXMmEwnO1yNFr8A6ejBJ26mU9UBzGh77TW7LDFzHWQiFgGgbg6wEG6NYKUJsDMYvRK3vDTLEPfiQuk+IVkscT0et0a0BAJvMxj50zn0GfQbtNpE8FWELdfBfyfTjC4v1ezpCV0Sxg1hSPNzgdDHsGQTW9av9+xphn2LtjWLrlAIRWx2h6REpspd2c31DWazJ/OZXkm3YXDw9XisXuZz4xJg60VXEATOPlddaH3mIrpAKhMzKRxICqPrAyJnWQEAgv4zRRwAoijSqY5mKtOHlFCf'+
			'toybpDUWNpWyw8bHEkJg2O+XOu73n98YjccA9DtfECEwAftDkmaZ2d/HTqmBNgEmjKKdr4lCyscpFSxsACiy4+7BiHrxWrEC2iUbDnoA9Dm6orvXhW9rBPuZxWJR+mf//PmDKNJuhJTatbi7vT2oaKXUTTSYCGIXHxbaHXh/f9/5moretJXraHCpxWpiu3EcYz6ff3ue55cX6Mnl2okjIlyP9xNBaJVgdWzQ7n8LXI1GpY99e3/Dh5QQQluKx8fHpi6zOjtudU3MHWT36yDnn1peF6+mOpchJX+7c1bk/f0dbHou2F24fdAqwQI240jfuV7+/q107PjyUuegYvsMqVoxAeVdk69///lTx9WYlb6OXQgAN5OpyjNzCPf3d5VON51MYNcN+3q9WyfY6XTqgttEAjc3N6WPfX55gb1FAYSLOD6oW/DZmm3DtkkzazExbC'+
			'val5eZ7k7DuunH/37+rHS6h9+/XbMQ2tPr3TrBPvz61ZHmNgMCZo9Pmw8qoP8AerXz1cJhH7g48kozjcNDdmiYsf42lBj3eludz+66MfbzerdOsAAw6PXApPNJueK95vrm2tXy0wGFUlyF68rZwzOfzyFtfgaze20Z2Gr3DNB/K8s+Xu9WCvbl9bVj/+AEYFRh8fXz5898jhvhcLtfhWrZ7drFN4OOXOh/6bYJjPu7ar5rkd9//uiIyJ5uJK0ULJBnJxERFq/lQ1z5sQfuXK0bwwKM7drFN8RwNHKZcMyM0eWgsu/6GV07tp9pN60V7NC4BbZGqQqT8aRo4A4GMSDBCIL22Njn52e9LUt6M+J5TU5BdchVRTRNawX7/PdvxyZtVxXew++HvKaJCBfd/WcXsfERCUBXtKvdu54Ujlo2IzR5Ftg66sw3aK1ggTweCwKu'+
			'r64rHRsJ4QYTJ/Iw7dZtM7ggDA/y/F/xniSlqxVKYRfHK8n1QvdLACmdlggVACogUrsUQ7ZasDaRm4iwWFbzY9+TxGWAERH2XRN2Vs3bjFgFCS1UkIJJPDfFvRBCgEiYNckrAmyX79FqwYZx5LKd0i1ifK5ygRmzWny18rh+WMxAncH/FmKLLRkAMQNiJSkSUrJpZmd3xAiCdIZY1fljrRasEAJ5TVd1hz6OY5cULj8+6r/ATdhLbtGiqwmouAths8HACOMYWZYhUxlSlWEynRZCYHp7uGrPsVYLdtjrYbWWqxrztzdXckNEK3VWe8HEO+Nt5sweEbZY1CRywBZJft6MeHh4QKZUIVWSdDpohfTEVgv2569fHbtrtWv3FCLCn6fts/UrP6NxZdqRhdMsxc2IMAo3Jpq/vb0hikITC9Z30n5cboOnNRUHX2Fr+7cpbQ'+
			'aKNflY21CtKQIiJUwm066VAm3HVkXcTO/w86H8JoQtYbe1eWVKz1ttYQG3w7o1b29vph7KRAv2ldhdCCH//x8/9vKUhyTNskpitccAcL7+VYl6vNYLtuiDXl1dbXUKF94CYfZULftre7iYFHXS7JwCaRbGmyodgGMQLGD8eVsyXZ1Bb+DCTHJPswJsd0FAJ+R41pPnNuji0020X7Cm3miXYr7527xQDo79tZ2sodrg1Hl+fs572paIBLVfsLYTzI7LbbuSJQCvf193v64Sz0i7hzfOAi6IddNGQvsFi0LS/g5//Ml0ChtnItJ9o+q6vs8MBwOlterna5WFTX+qTa/WEQg2/xWWO5Rg2B0Vu4BrcvG1XCxzH8YLthR2KzdNv1/AtV6wZNrkEAHJYrdkbN1wg40vKzBsbMpK3gBuOBw28xSnROFN/SG/30JvvWBTKTt2'+
			'mjURoV+yI8w6/vz546IFRKhcyVCGYW+gbCsgBuP5+bn25zg5isH2DRGy1gsWAEB6zxkAlhU6wqwjU8oNsiAiN4egLpbLhckPradV/FlQCFbThjyhoxDszeRGiwyoxScMbW6m+TwSohbRXnR1Xb6NDpz6lmxdFDdXNi2rj0KwP3/965JgBBFGO/qF70niunrbsUTRjmU0d7e3ynYG9JGsauTTImlj7vBRCBbQQrVFiYsaKmEzlUHaUiToBONt3YMf9/fq6dejm/CybaLO2ZLHLTfmDh+NYONez6zu6xvFnqkMLKXzN4kIAUiVScIo8vDwYCy1lv+wQh8FDwqLrhOysC9//xY6GwKjYT2iyJQyooU5t26nHhCpqw1buNfjsSqmEdqW6j4yUI3ilKBNbUf+2csV1YitPnh9rW97NVMKURhCMmvXAwTBwPx14Zr9hlGEXt'+
			'yDMMOOX15egJeXPMfBKP6Q/byOFQYgwGCmjW1yjsbCAsB4ogdSMDPqbleVpCmm06luMiFzS24rPbMkxcv8BU9PT3qghXnj2CEiURQhqbN0+uwol4h5VIL9/fjYsb1IGWS6QNfHw8MDsizD5HZqGvzK1ZfRxG5tj39mhgRjPJ7g7X27ZmqeYmLSKWRrfaIX98C2d1ZD8aOHhwc3H2w0GSMsRChkISu7NxggyzL8/rO/WrGTxcbZNyy6Wl/TtQ5X50V6qsm2rSI97SAMAhcPDwXh/ePjy9quo7OwAHRSt7l77LpV62kD1hU4MR/WcnNzY0aqw6fvnQIu0Z2wKUxwlC4BoAcp6xaPOgXRh5OOlzAIXXefUIgTdAkARHHkgs0HaUPkqY8VC/s9RyvY9+WysPPl3YKjxrl2jE0uwdEKFjCtnExsdNj3mf1Hy4qFPZFcgnWI'+
			'rnA7TcvkQLMMPLtzLha23+/no3t8Eupx47JfTtjCPs9mHZiOMN6LPWJsBlEJo3PUggXssssM37i4OPDVeLZiJUBwwi4BoLdmbZvAg83k8tTICbsEgA5v6eRpH946WmwCN4CTt7CAK6MCaihQ9BwALpR1bbCwR1dxsA5hs7kZePXJMEfOGVjYvilQBM5ipMDpcS4bB5bnv387XCI1zdNSXKcc3jhI+iQEC+SbJYxq4+o9bSAvewrOwSUA8nogIvJJ3UcHmZEAAIXfO3UnI9i4F7uk7o8DDUP2bIcuLNW9HWI3dG49JyPY+etrx1Yf+HjskeGCsHQazeDKojsc6lvLjzOYjXU65DVdcRx/+5NHWyKzjmLZTBRFvlfAkRAEAQT0gnnTNMSTsrCiK9ztJfH5sceDGchRJjB5UoId9vuw4+d8fuzxQGQ6v5T4k52UYP/MZn'+
			'oDYctx9Z79c3V15YYHltn8OSnBAtAtb4xW/QZC+0mSJN9WL2FkTmrRBQCR6CqGjsdK8O6Dez2NEpmGfswMEgLJNz0JgBO0sP1evPvMes/ekFK6nr9RiW6UJyfYZ9Op28aib66vD31Jnu8wfdKYGb3BYOOPn5xLAAABkSLryBOQ+kbDrSUMAthcggzfx2CBE7SwANCz+bEEsM8raC12UUyE0i7cSVpYQFtZOywj7vUwn88PfUmeT0Rh6PK2CUAi5XlaWMCMRzLFQgufbthKpGQ3NXJTDoHlZAWbStmx83QIhCsfk20dbg4fgJfX143WFThhwQIAS3bB6JcaxyR5dufa7HCV6bpd5KQFO51OXE4BAbj2Ia7WMH97M7kD1QLmJ7vosriUQ+iIQaZO/Tc+DoJOAJ0KygijyPT73cxJW1gAmFgra3ZTvC/bEgrewHg8Ln3Y'+
			'yVtYwIxJMiW1zN7KHprr62vMZzOwCTtmG5K2i5y8hQVMFrutyiRCv98/9CWdNfOXud6S3aKXxFkIVkMm7dCXgR8aKaVJAyX04l6lY8/CJbDo3S/TZYT8qKRDYfMHAN5Yw/WZM7KwQCSEK6Hxo5IOQ7/fN1PQtxsVfFYWFshzDECAZJ/gvW/CIHAlMaBy+QNFzsrCAjqTy76xCfALsD2TD0NnjCqEsyxnZ2GB1UwuAEi9ld0LV6MR5q8L2HLDKuEsy1kKFshH2JN3DfZGPlNWpxFUdQeAM3QJLGEUaRtrblF+Ak3zMNgkJAFxxXCW5WwF+75cdmShCVmaJL4fV4Pc3NyguNh9ef1b2boCZ+wSWAIiRW4ZAO8aNEQUhrpqiY0LVqJ+ax1na2EtA1OpSUQQIASdrV5HzwY+pHRmodfbzh0AvIUFAERCKO0d6O1CwFfa1s'+
			'ndzR1msyfTDnW76IDFC9YQEClhM7pMLZgXbT3YYkMXkdlBsGfvElgy5o6U0iXIAEDfRw5qQRZK7csWG36FF2yBDOiwlK7UKEkSM8vWsy3XV1cgEtq6SsbbYrHTIsG7BGsobiowe/dgF8IwXGmlWTU76zPewq4hZe5ItrcxHfQKOt/Pj/J8gZ07QYThYPfyJG9hvyEAFAlhLIQvr6nKcDjEcrHU6ZwskQE7xwy9YDfwn+gBfLJMWYJOABIEMtUF6Ra5A5/xLsEGbAhGjwbV0QPvHpTDLl4Zemu2DryFLUkohLJJx7aBmV+IfU0UhmbosekHUYM7AHgLW5pUyo40OzVkJp74GQpfU5zis2vstYi3sBUpJn/7ZJn1DPt9LJdLbFto+B3ewlbk7u5OD5AwhXQXkd8N+8xisTSvj9mPrREv2Ir8/PffDpleXUSE5MOXihe5'+
			'ub52bYgk6ltsWbxLsCU6j1aLNqAQ78n7oS+pFQRBAGGs6q6JLuvwFnZLIhG5jrzLDz/XFgBGw6Hr8caSKzV5K4u3sDvgFmAETMYTPPx+OPQlHZSgE0Do204j1hXwFnYnCDrOCGb8fZkd+nIOShiGZhoMQUrG/d1dI8/jLewOXHS7KjVVoN9m15oAAAHESURBVMx81lu2YScACQFmWWoE57b808RJz4niYIlzJQx0zgCzLptPGxIr4F2CnWEXajzf4bZs/kMA4rjZhHdvYXcgAwqtz8/TzF5cXEC3MNVuUVJyVsG2eAu7AwEC05gXOFcLmywT5xdFovlyIi/YHciQ6ZTDsx53z258vAibfxG8YHcgCAKTV4DzXXnRau1b03jB7kCWZbDTac7VxAoyeRUgyD204PeC3YFVH/Y8LWzwqSq2abxgd2DVhz1PC4ssK0i1+d'+
			'IhL9gdCBCY2yGfq4FFBlOBQYSMm9/p84LdCf0HOmMX1tlUZiDYw2vgBVsDzi04QzLoCMG+3q9esDuh7Qufa0gL5hUw/vs+Un+8YHdC/4mI3P7s2ZEBLkoQ+EVXywlMWOuMowTawtr/NG9jffLLLpiNAzpP4woASJldptY+8ILdiQBmmA+IyQz9LaQWmM4nVPiaHUxxKl+37ZuY9hGF9YLdEePDmsYaZOq7hAnLkgDAdhxz3mvqNL4OuMZZRUU3jC+R2QE9zMP6sMizue2HE/+8OA8CzBCii0Q2V20AeMF6jgwfJfAcFV6wnqPCC9ZzVHjBeo4KL1jPUeEF6zkq/g8Pqk9SUbBg5gAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(els);
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
		me._finger4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._finger4.ggUpdatePosition=function (useTransition) {
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
		me.player.checkLoaded.push(els);
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
		me._gmap2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gmap2.ggUpdatePosition=function (useTransition) {
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
		me._text_7.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_7.ggUpdatePosition=function (useTransition) {
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
		me.player.checkLoaded.push(els);
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
		me._tn2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tn2.ggUpdatePosition=function (useTransition) {
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
		me._text_9.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_9.ggUpdatePosition=function (useTransition) {
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
		me.player.checkLoaded.push(els);
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
		me._fp2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fp2.ggUpdatePosition=function (useTransition) {
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
		me._text_8.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_8.ggUpdatePosition=function (useTransition) {
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
		me._informationbg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._informationbg.ggUpdatePosition=function (useTransition) {
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
		els.innerHTML="<font size=\"2\">360 Virtual Tour<br\/>by \xa9 360VRTek<br\/>     \u2709 info@360vrtek.com<\/font>";
		el.appendChild(els);
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
		me._information.appendChild(me._text_1);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs=basePath + 'images/image_2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 34px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : 29px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_2.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._image_2);
		el=me._ht_info_close=document.createElement('div');
		els=this._ht_info_close__img=document.createElement('img');
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
		elo=this._ht_info_close__imgo=document.createElement('img');
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
		me._loadingbg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingbg.ggUpdatePosition=function (useTransition) {
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
		this._loadingtext.ggUpdateText=function() {
			var hs="Loading... "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		el.appendChild(els);
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
		me._loadingbar.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingbar.ggUpdatePosition=function (useTransition) {
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
		hs+='bottom : 19px;';
		hs+='height : 91px;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 97px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._kahonessentials.ggIsActive=function() {
			return false;
		}
		me._kahonessentials.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._kahonessentials.logicBlock_scaling = function() {
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
		this._kahonessentials.ggUpdatePosition=function (useTransition) {
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
		me._mapkahon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._mapkahon.ggUpdatePosition=function (useTransition) {
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
		me.player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC3klEQVRYhd2WoZabQBSGP3oqBhdcR44kLnFEpo64ravNOvIGtX2E4BKZdcUFF2zkuiCRrAPHuKmgcDYhm5Cz2dOe/m7gHu43d+78XMv8NPxNffqr2f8FgM99gp79Z5NlGQAP6YN1TwDrXA/sp3uT5zl5niOE4PFxzmq1RmsNgOu6TPfTu4C0FYjcyLQJJ/NOoJSSLMsIgoAkSQgHoVFK4T/77wKxzE/Dfro3k4l3NXi5DAmCoF0nSUKapvQBiUex8f0ZYbgEYDwe4yWe1TbhbpdcBRBCHK2n0ylBEOA4DuEgNJEbtecZj2LDD8uEg9CEg7B9HgQLpJTtN3o1YaOmB07leR6e5xHHMU0yhWoTXtpI72u43cZXY3zfB6iPxJ/1+m5vgNnM7xvaO/lNAN'+
			'DtgbcUx9v7A2w2T2/2wKmuVeD1Ri424W6X0DhgVdVesF6vmc+7PnGLtNbYtn0MUJblUUKtNWla09q2TVVVFEWB1powDBFCnAXpe0yNPgNUVcVr67Vtm+FwyCSZHAWvvqwQ0mUobQ6Hw1kQrTVxvH3zGJ6eNlRVfgxg2zaL8uS+ZsfL7WhLlmUI4JBX4CjGJyDD4RAhRCd54361CgAcxwFeWXFVVXzdf71YrtWXFTiq87ypiNYax3EoiuLovRACKSX+rAZLdjts28ZLPKu3E/5yf9VHdObdaUXgjxnNrvtB72v4Lf12NeaQV2iteye/CeCj9CEAfXf/IQC3+kAvgI3asBwscRwHNbgcq7Um3l7+F7y29LO3oOl4gEW5QCnF9+y7RQmRiAxFgVKKrOyD31VnHhBCkKYpy0FtGFJKgjKwgjKwDMbyEq8dtx7SB2v+Mre0'+
			'1lBknYoIIa72wMvLSwtxdiq+RYmXmDRNGY/H9TXMU4JFdwoCWK9WQO0RzVT9boBG8Sg2WZa1O5s/PrYJpZRIKRnFo87gejeARpEbGSEESincyL06st8d4Fb9n054i34D349JzzrUqpMAAAAASUVORK5CYII=';
		this._mapbttnhyd__img.ggOverSrc=hs;
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
			me._mapbttnhyd__img.src=me._mapbttnhyd__img.ggOverSrc;
			me.elementMouseOver['mapbttnhyd']=true;
			me._tt_map_hyd.logicBlock_visible();
		}
		this._mapbttnhyd.onmouseout=function (e) {
			me._mapbttnhyd__img.src=me._mapbttnhyd__img.ggNormalSrc;
			me.elementMouseOver['mapbttnhyd']=false;
			me._tt_map_hyd.logicBlock_visible();
		}
		this._mapbttnhyd.ontouchend=function (e) {
			me.elementMouseOver['mapbttnhyd']=false;
			me._tt_map_hyd.logicBlock_visible();
		}
		this._mapbttnhyd.ggUpdatePosition=function (useTransition) {
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
		me._tt_map_hyd.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
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
		this._tt_map_hyd.ggUpdatePosition=function (useTransition) {
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
		me._tt_map_white_hyd.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_map_white_hyd.ggUpdatePosition=function (useTransition) {
		}
		me._tt_map_hyd.appendChild(me._tt_map_white_hyd);
		me._mapbttnhyd.appendChild(me._tt_map_hyd);
		me._mapkahon.appendChild(me._mapbttnhyd);
		el=me._mapbttnshw=document.createElement('div');
		els=this._mapbttnshw__img=document.createElement('img');
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
		elo=this._mapbttnshw__imgo=document.createElement('img');
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
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
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
			me.elementMouseOver['mapbttnshw']=true;
			me._tt_map_show.logicBlock_visible();
		}
		this._mapbttnshw.onmouseout=function (e) {
			me._mapbttnshw__img.style.visibility='inherit';
			me._mapbttnshw__imgo.style.visibility='hidden';
			me.elementMouseOver['mapbttnshw']=false;
			me._tt_map_show.logicBlock_visible();
		}
		this._mapbttnshw.ontouchend=function (e) {
			me.elementMouseOver['mapbttnshw']=false;
			me._tt_map_show.logicBlock_visible();
		}
		this._mapbttnshw.ggUpdatePosition=function (useTransition) {
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
		me._tt_map_show.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
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
		this._tt_map_show.ggUpdatePosition=function (useTransition) {
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
		me._tt_map_white_show.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_map_white_show.ggUpdatePosition=function (useTransition) {
		}
		me._tt_map_show.appendChild(me._tt_map_white_show);
		me._mapbttnshw.appendChild(me._tt_map_show);
		me._mapkahon.appendChild(me._mapbttnshw);
		me._kahonessentials.appendChild(me._mapkahon);
		el=me._info=document.createElement('div');
		els=this._info__img=document.createElement('img');
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
		elo=this._info__imgo=document.createElement('img');
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
		me._kahonessentials.appendChild(me._info);
		el=me.__605=document.createElement('div');
		els=me.__605__img=document.createElement('img');
		els.className='ggskin ggskin__605';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		this.__605__img.ggOverSrc=hs;
		el.ggId="605";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 31px;';
		hs+='left : 6px;';
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
			me.__605__img.src=me.__605__img.ggOverSrc;
		}
		this.__605.onmouseout=function (e) {
			me.__605__img.src=me.__605__img.ggNormalSrc;
		}
		this.__605.ggUpdatePosition=function (useTransition) {
		}
		me._kahonessentials.appendChild(me.__605);
		me.divSkin.appendChild(me._kahonessentials);
		el=me._tn_location_box=document.createElement('div');
		els=me._tn_location_box__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TN_Location Box";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 22px;';
		hs+='left : 57px;';
		hs+='position : absolute;';
		hs+='top : 126px;';
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
		this._tn_location_box.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tn_location_box.ggUpdateText();
		el.appendChild(els);
		me._tn_location_box.ggIsActive=function() {
			return false;
		}
		me._tn_location_box.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._tn_location_box.logicBlock_position = function() {
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
				me._tn_location_box.style[domTransition]='left 0s, top 0s';
				if (me._tn_location_box.ggCurrentLogicStatePosition == 0) {
					me._tn_location_box.style.left='547px';
					me._tn_location_box.style.top='71px';
				}
				else if (me._tn_location_box.ggCurrentLogicStatePosition == 1) {
					me._tn_location_box.style.left='547px';
					me._tn_location_box.style.top='77px';
				}
				else if (me._tn_location_box.ggCurrentLogicStatePosition == 2) {
					me._tn_location_box.style.left='547px';
					me._tn_location_box.style.top='89px';
				}
				else if (me._tn_location_box.ggCurrentLogicStatePosition == 3) {
					me._tn_location_box.style.left='547px';
					me._tn_location_box.style.top='94px';
				}
				else {
					me._tn_location_box.style.left='57px';
					me._tn_location_box.style.top='126px';
				}
			}
		}
		this._tn_location_box.ggUpdatePosition=function (useTransition) {
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
		me._container4hdr.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._container4hdr.logicBlock_scaling = function() {
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
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height > 1) && 
				(me.player.getViewerSize().width <= 1024)
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height < 1) && 
				(me.player.getViewerSize().width <= 1366)
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
		this._container4hdr.ggUpdatePosition=function (useTransition) {
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
		me._header.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._header.ggUpdatePosition=function (useTransition) {
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
		me._buttons_social.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._buttons_social.ggUpdatePosition=function (useTransition) {
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
		me._social_rectangle_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._social_rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_g=document.createElement('div');
		els=this._button_g__img=document.createElement('img');
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
		elo=this._button_g__imgo=document.createElement('img');
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
		me._social_rectangle_1.appendChild(me._button_g);
		el=me._button_facebook=document.createElement('div');
		els=this._button_facebook__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYX'+
			'RoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDM0MC44Yy0zMSwwLTU2LjIsMjUuMS01Ni4yLDU2LjJjMCwzMS4xLDI1LjEsNTYuMiw1Ni4yLDU2LjJzNTYuMi0yNS4xLDU2LjItNTYuMg0KCUMtMTE4LjgsMzY1LjktMTQ0LDM0MC44LTE3NSwzNDAuOHogTS0xNTguMywzNzcuNmgtMTBjLTEuMiwwLTIuNSwxLjYtMi41LDMuOHY2LjRoMTIuNXYxMi41aC0xMi41djMwLjFoLTEyLjV2LTMwLjFoLTEwdi0xMi41aDEwDQoJdi02LjNjMC05LDYuNy0xNi4zLDE1LTE2LjNoMTBWMzc3LjZ6Ii8+DQo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2OC4zLDM3Ny42aDEwdi0xMi40aC0xMGMtOC4zLDAtMTUs'+
			'Ny4zLTE1LDE2LjN2Ni4zaC0xMHYxMi41aDEwdjMwLjFoMTIuNXYtMzAuMWgxMi41di0xMi41aC0xMi41di02LjQNCglDLTE3MC44LDM3OS4yLTE2OS41LDM3Ny42LTE2OC4zLDM3Ny42eiIvPg0KPC9zdmc+DQo=';
		me._button_facebook__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_facebook;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._button_facebook__imgo=document.createElement('img');
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
		me._social_rectangle_1.appendChild(me._button_facebook);
		el=me._button_twitter=document.createElement('div');
		els=this._button_twitter__img=document.createElement('img');
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
		elo=this._button_twitter__imgo=document.createElement('img');
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
		me._social_rectangle_1.appendChild(me._button_twitter);
		me._buttons_social.appendChild(me._social_rectangle_1);
		me._header.appendChild(me._buttons_social);
		el=me._text_10=document.createElement('div');
		els=me._text_10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 33px;';
		hs+='left : 33px;';
		hs+='position : absolute;';
		hs+='top : 82px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 33px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,170,0,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<font size=2> Begin your journey<br> towards realizing your dreams.<\/font>";
		el.appendChild(els);
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
		me._header.appendChild(me._text_10);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 65px;';
		hs+='left : 29px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 78px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._header.appendChild(me._image_1);
		me._container4hdr.appendChild(me._header);
		me.divSkin.appendChild(me._container4hdr);
		el=me._containerkanan=document.createElement('div');
		el.ggId="ContainerKanan";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 18px;';
		hs+='height : 51px;';
		hs+='position : absolute;';
		hs+='right : 174px;';
		hs+='visibility : inherit;';
		hs+='width : 156px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._containerkanan.ggIsActive=function() {
			return false;
		}
		me._containerkanan.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._containerkanan.ggUpdatePosition=function (useTransition) {
		}
		el=me._fullscrnview=document.createElement('div');
		els=me._fullscrnview__img=document.createElement('img');
		els.className='ggskin ggskin_fullscrnview';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD+0lEQVRYhe2WXUgjVxiG3zOZmUySyY9KNK5JFTQU9MKywYLFwEhFsBfbm9Jl271ZyoIUKkRQqiaRlYquCtUWCkKhhV60RW+6hYoLQiDEi+JctODfRmSjxcrKso5jTCY/M72oiqtxXVNDKd33as7h+877cM6Z73zAK/3fRU4O6urqWLvdThXScGdnR11cXEwdjWkA8Hg8DMMwbW63+4bJZDIXEsDpdMpWq/VnRVF+EUUxTQOAXq+va2tru9fR0fFGIc0BgBCCiYmJ67Ozs48B/EYDQDweL21oaCi3WCwAgFQq9YIl8hfLsgAAj8dzbXp6ugw4PAIAUFWVAEA0Gk1NTk7+ajAYsldhqigKnU6nWZ1Op7S3t79ZU1PD4sTdo08nyLKcmZub+95sNk/9U3'+
			'OKom719fXdKy0tNXZ2dn6xt7d3HQB7MuYMACFE0zTtaTgc3snHVBAEmyRJb+t0OqvFYjFyHMckEolMKpXKEkK00/FnAK5A7w4PD39us9mMwWBwoKen51OWZQ9kWTblCr4SgKampqKDgwMhlUqxHMdV2Ww2o6qq2UwmsxuJRL4CgPr6+puXAjgsSmwoFNoHAEEQOFmWKVEUDwCgtbXVJEmSrri4WEmn0+8FAoH7RqOR8fv9Az6fL8gwzG4ymfzpIvicABRFOaurqz9zOByvKYryo06n23I4HB+5XC5Gr9d/A4BzOp23a2trizc3Nx8RQpIOh4NPJBIpVVWfzc/Pf/0SG5cbQNM0YrVaq4aGhj6uqqqixsfH62Kx2GIwGLzJMAxGR0ev6fV6vru7+y2GYbCxsfFOb2/vhM/nu0/T9GY2m33wsubn7sAhyHPDk9+EEFAU'+
			'BYPBAJfLRSorK2tisdhtURSly5jnBCCEaJIkPfb7/WNlZWWVS0tLPwDY6urqkhiGYdfW1r7VNM2yv7//ycDAQGsmk4EkSc9KSkoylzXPCQAAqqr+EY1Gv9zd3WXD4fDRJfz95CUEgJGRERMhBKurq99FIpH4lQEAwOGTefwohEKh5HOJNL21vb0dI4RoFEU9zcccAPJ6+wVB4MrLy+/29/d/EAgEPqyoqLgrCAKXz1r5FiKa53lrUVERNE0Dz/OWfNfK+RsSQkq8Xq/9vKRsNotoNPpwbGzsdUIIlpeXH1IUZfB6vYbzcmRZLtE0jZyePwNgNpvplpaWWxzHvX8RfSaTkQGgubn5DoA7L4pNJBI6q9V6xu94gqIoDQDcbjc7ODjYdJF5PjpqSPB3LdGOAUwm05OFhYU/GxsbywphfKRkMglN0yCK4hbP80+OARRFWZ'+
			'yZmelfWVm5wfN8QZvSeDwur6+vP0gmk0vAv9CW2+12dWpqqjBN5yv9J/UXAnx9RmIUClQAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="FullScrnView";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 180px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fullscrnview.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fullscrnview.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fullscrnview.onclick=function (e) {
			me.player.exitFullscreen();
			me._fullscrnview.style[domTransition]='none';
			me._fullscrnview.style.visibility='hidden';
			me._fullscrnview.ggVisible=false;
			me._normalview.style[domTransition]='none';
			me._normalview.style.visibility=(Number(me._normalview.style.opacity)>0||!me._normalview.style.opacity)?'inherit':'hidden';
			me._normalview.ggVisible=true;
		}
		this._fullscrnview.ggUpdatePosition=function (useTransition) {
		}
		me._containerkanan.appendChild(me._fullscrnview);
		el=me._normalview=document.createElement('div');
		els=me._normalview__img=document.createElement('img');
		els.className='ggskin ggskin_normalview';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NormalView";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 182px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._normalview.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._normalview.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._normalview.onclick=function (e) {
			me.player.enterFullscreen();
			me._normalview.style[domTransition]='none';
			me._normalview.style.visibility='hidden';
			me._normalview.ggVisible=false;
			me._fullscrnview.style[domTransition]='none';
			me._fullscrnview.style.visibility=(Number(me._fullscrnview.style.opacity)>0||!me._fullscrnview.style.opacity)?'inherit':'hidden';
			me._fullscrnview.ggVisible=true;
		}
		this._normalview.ggUpdatePosition=function (useTransition) {
		}
		me._containerkanan.appendChild(me._normalview);
		el=me._svg_4=document.createElement('div');
		els=this._svg_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CgkJPHBhdGggZD0iTTMuNSwxNkMzLjUwMSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDANCgkJCWMtMC4wMDEsNi45MDMtNS41OTYsMTIuNDk4LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk4LDMuNTAxLDIyLjkwMywzLjUsMTZMMy41LDE2eiBNNS44OTMsMTZjMCwyLjc5NSwxLjEyOSw1LjMxMywy'+
			'Ljk2LDcuMTQ2DQoJCQlsMCwwYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDcsMi45NmwwLDBjMi43OTQsMCw1LjMxNC0xLjEyOSw3LjE0Ny0yLjk2bDAsMGMxLjgzLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwDQoJCQljLTAuMDAxLTIuNzk1LTEuMTMtNS4zMTMtMi45Ni03LjE0N2wwLDBDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1Ljg5NCwxNiw1Ljg5M2wwLDBjLTIuNzk1LDAtNS4zMTQsMS4xMjktNy4xNDcsMi45NmwwLDANCgkJCUM3LjAyMiwxMC42ODcsNS44OTQsMTMuMjA1LDUuODkzLDE2TDUuODkzLDE2TDUuODkzLDE2eiIvPg0KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik0xMC43OD'+
			'QsMjIuODY0Yy0wLjQ0My0wLjE4Ny0wLjczMi0wLjYyMi0wLjczMi0xLjEwM2wwLDBWMTAuMjM5YzAtMC40OCwwLjI5LTAuOTE3LDAuNzMyLTEuMTAzbDAsMA0KCQkJCWMwLjQ0Mi0wLjE4NiwwLjk1Ny0wLjA4OCwxLjMsMC4yNDdsMCwwbDUuODk1LDUuNzYxYzAuMjMyLDAuMjI2LDAuMzYsMC41MzEsMC4zNiwwLjg1NWwwLDBjMCwwLjMyNC0wLjEyOCwwLjYyOS0wLjM2LDAuODU2bDAsMA0KCQkJCWwtNS44OTUsNS43NmMtMC4yMjgsMC4yMjQtMC41MywwLjM0MS0wLjgzNywwLjM0MWwwLDBDMTEuMDksMjIuOTU3LDEwLjkzMywyMi45MjcsMTAuNzg0LDIyLjg2NEwxMC43ODQsMjIuODY0eiBNMTIu'+
			'NDQ0LDE4LjkyDQoJCQkJTDE1LjQzMiwxNmwtMi45ODctMi45MTlWMTguOTJMMTIuNDQ0LDE4LjkyeiIvPg0KCQkJPHBhdGggZD0iTTE2LjAxMywyMi41NzhjLTAuNDUxLTAuNDgyLTAuNDI2LTEuMjM5LDAuMDU3LTEuNjlsMCwwbDUuMjQ3LTQuOTA3bC01LTQuODg3DQoJCQkJYy0wLjQ3My0wLjQ2MS0wLjQ4Mi0xLjIxOS0wLjAyLTEuNjkxbDAsMGMwLjQ2Mi0wLjQ3MywxLjIxOS0wLjQ4MiwxLjY5Mi0wLjAybDAsMGw1Ljg5NSw1Ljc2MQ0KCQkJCWMwLjIzNSwwLjIyOSwwLjM2NCwwLjU0LDAuMzYsMC44NjlsMCwwYy0wLjAwNCwwLjMyOS0wLjE0LDAuNjM2LTAuMzc5LDAuODYxbDAsMGwtNi4xNj'+
			'EsNS43NjENCgkJCQljLTAuMjMsMC4yMTYtMC41MjQsMC4zMjMtMC44MTcsMC4zMjNsMCwwQzE2LjU2NywyMi45NTgsMTYuMjQ5LDIyLjgzLDE2LjAxMywyMi41NzhMMTYuMDEzLDIyLjU3OHoiLz4NCgkJPC9nPg0KCTwvZz4KCTxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgoJCTxwYXRoIGQ9Ik0zLjUsMTZDMy41MDEsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwDQoJCQljLTAuMDAxLDYuOTAzLTUuNTk2LDEyLjQ5OC0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OCwzLjUwMSwy'+
			'Mi45MDMsMy41LDE2TDMuNSwxNnogTTUuODkzLDE2YzAsMi43OTUsMS4xMjksNS4zMTMsMi45Niw3LjE0Ng0KCQkJbDAsMGMxLjgzMywxLjgzMSw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwYzIuNzk0LDAsNS4zMTQtMS4xMjksNy4xNDctMi45NmwwLDBjMS44My0xLjgzMiwyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bDAsMA0KCQkJYy0wLjAwMS0yLjc5NS0xLjEzLTUuMzEzLTIuOTYtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwDQoJCQlDNy4wMjIsMTAuNjg3LDUuODk0LDEzLjIwNSw1Ljg5My'+
			'wxNkw1Ljg5MywxNkw1Ljg5MywxNnoiLz4NCgkJPGc+DQoJCQk8cGF0aCBkPSJNMTAuNzg0LDIyLjg2NGMtMC40NDMtMC4xODctMC43MzItMC42MjItMC43MzItMS4xMDNsMCwwVjEwLjIzOWMwLTAuNDgsMC4yOS0wLjkxNywwLjczMi0xLjEwM2wwLDANCgkJCQljMC40NDItMC4xODYsMC45NTctMC4wODgsMS4zLDAuMjQ3bDAsMGw1Ljg5NSw1Ljc2MWMwLjIzMiwwLjIyNiwwLjM2LDAuNTMxLDAuMzYsMC44NTVsMCwwYzAsMC4zMjQtMC4xMjgsMC42MjktMC4zNiwwLjg1NmwwLDANCgkJCQlsLTUuODk1LDUuNzZjLTAuMjI4LDAuMjI0LTAuNTMsMC4zNDEtMC44MzcsMC4zNDFsMCwwQzExLjA5LDIy'+
			'Ljk1NywxMC45MzMsMjIuOTI3LDEwLjc4NCwyMi44NjRMMTAuNzg0LDIyLjg2NHogTTEyLjQ0NCwxOC45Mg0KCQkJCUwxNS40MzIsMTZsLTIuOTg3LTIuOTE5VjE4LjkyTDEyLjQ0NCwxOC45MnoiLz4NCgkJCTxwYXRoIGQ9Ik0xNi4wMTMsMjIuNTc4Yy0wLjQ1MS0wLjQ4Mi0wLjQyNi0xLjIzOSwwLjA1Ny0xLjY5bDAsMGw1LjI0Ny00LjkwN2wtNS00Ljg4Nw0KCQkJCWMtMC40NzMtMC40NjEtMC40ODItMS4yMTktMC4wMi0xLjY5MWwwLDBjMC40NjItMC40NzMsMS4yMTktMC40ODIsMS42OTItMC4wMmwwLDBsNS44OTUsNS43NjENCgkJCQljMC4yMzUsMC4yMjksMC4zNjQsMC41NCwwLjM2LDAuOD'+
			'Y5bDAsMGMtMC4wMDQsMC4zMjktMC4xNCwwLjYzNi0wLjM3OSwwLjg2MWwwLDBsLTYuMTYxLDUuNzYxDQoJCQkJYy0wLjIzLDAuMjE2LTAuNTI0LDAuMzIzLTAuODE3LDAuMzIzbDAsMEMxNi41NjcsMjIuOTU4LDE2LjI0OSwyMi44MywxNi4wMTMsMjIuNTc4TDE2LjAxMywyMi41Nzh6Ii8+DQoJCTwvZz4NCgk8L2c+Cjwvc3ZnPg==';
		me._svg_4__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_4;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._svg_4__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCQk8cGF0aCBkPSJNMy41LDE2QzMuNTAxLDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMA0KCQkJYy0wLjAwMSw2LjkwMy01LjU5NiwxMi40OTgtMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTgs'+
			'My41MDEsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE01Ljg5MywxNmMwLDIuNzk1LDEuMTI5LDUuMzEzLDIuOTYsNy4xNDYNCgkJCWwwLDBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMGMyLjc5NCwwLDUuMzE0LTEuMTI5LDcuMTQ3LTIuOTZsMCwwYzEuODMtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDANCgkJCWMtMC4wMDEtMi43OTUtMS4xMy01LjMxMy0yLjk2LTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bDAsMA0KCQkJQzcuMDIyLDEwLjY4Nyw1Ljg5NCwxMy4yMD'+
			'UsNS44OTMsMTZMNS44OTMsMTZMNS44OTMsMTZ6Ii8+DQoJCTxnPg0KCQkJPHBhdGggZD0iTTEwLjc4NCwyMi44NjRjLTAuNDQzLTAuMTg3LTAuNzMyLTAuNjIyLTAuNzMyLTEuMTAzbDAsMFYxMC4yMzljMC0wLjQ4LDAuMjktMC45MTcsMC43MzItMS4xMDNsMCwwDQoJCQkJYzAuNDQyLTAuMTg2LDAuOTU3LTAuMDg4LDEuMywwLjI0N2wwLDBsNS44OTUsNS43NjFjMC4yMzIsMC4yMjYsMC4zNiwwLjUzMSwwLjM2LDAuODU1bDAsMGMwLDAuMzI0LTAuMTI4LDAuNjI5LTAuMzYsMC44NTZsMCwwDQoJCQkJbC01Ljg5NSw1Ljc2Yy0wLjIyOCwwLjIyNC0wLjUzLDAuMzQxLTAuODM3LDAuMzQxbDAsMEMx'+
			'MS4wOSwyMi45NTcsMTAuOTMzLDIyLjkyNywxMC43ODQsMjIuODY0TDEwLjc4NCwyMi44NjR6IE0xMi40NDQsMTguOTINCgkJCQlMMTUuNDMyLDE2bC0yLjk4Ny0yLjkxOVYxOC45MkwxMi40NDQsMTguOTJ6Ii8+DQoJCQk8cGF0aCBkPSJNMTYuMDEzLDIyLjU3OGMtMC40NTEtMC40ODItMC40MjYtMS4yMzksMC4wNTctMS42OWwwLDBsNS4yNDctNC45MDdsLTUtNC44ODcNCgkJCQljLTAuNDczLTAuNDYxLTAuNDgyLTEuMjE5LTAuMDItMS42OTFsMCwwYzAuNDYyLTAuNDczLDEuMjE5LTAuNDgyLDEuNjkyLTAuMDJsMCwwbDUuODk1LDUuNzYxDQoJCQkJYzAuMjM1LDAuMjI5LDAuMzY0LDAuNTQsMC'+
			'4zNiwwLjg2OWwwLDBjLTAuMDA0LDAuMzI5LTAuMTQsMC42MzYtMC4zNzksMC44NjFsMCwwbC02LjE2MSw1Ljc2MQ0KCQkJCWMtMC4yMywwLjIxNi0wLjUyNCwwLjMyMy0wLjgxNywwLjMyM2wwLDBDMTYuNTY3LDIyLjk1OCwxNi4yNDksMjIuODMsMTYuMDEzLDIyLjU3OEwxNi4wMTMsMjIuNTc4eiIvPg0KCQk8L2c+DQoJPC9nPgoJPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCQk8cGF0aCBkPSJNMy41LDE2QzMuNTAxLDkuMDk2LDkuMDk2'+
			'LDMuNTAxLDE2LDMuNWwwLDBjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMA0KCQkJYy0wLjAwMSw2LjkwMy01LjU5NiwxMi40OTgtMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTgsMy41MDEsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE01Ljg5MywxNmMwLDIuNzk1LDEuMTI5LDUuMzEzLDIuOTYsNy4xNDYNCgkJCWwwLDBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMGMyLjc5NCwwLDUuMzE0LTEuMTI5LDcuMTQ3LTIuOTZsMCwwYzEuODMtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDANCgkJCWMtMC4wMDEtMi43OTUtMS4xMy01LjMxMy0yLjk2LTcuMT'+
			'Q3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bDAsMA0KCQkJQzcuMDIyLDEwLjY4Nyw1Ljg5NCwxMy4yMDUsNS44OTMsMTZMNS44OTMsMTZMNS44OTMsMTZ6Ii8+DQoJCTxnPg0KCQkJPHBhdGggZD0iTTEwLjc4NCwyMi44NjRjLTAuNDQzLTAuMTg3LTAuNzMyLTAuNjIyLTAuNzMyLTEuMTAzbDAsMFYxMC4yMzljMC0wLjQ4LDAuMjktMC45MTcsMC43MzItMS4xMDNsMCwwDQoJCQkJYzAuNDQyLTAuMTg2LDAuOTU3LTAuMDg4LDEuMywwLjI0N2wwLDBsNS44OTUsNS43NjFjMC4yMzIsMC4yMjYsMC4zNiwwLjUz'+
			'MSwwLjM2LDAuODU1bDAsMGMwLDAuMzI0LTAuMTI4LDAuNjI5LTAuMzYsMC44NTZsMCwwDQoJCQkJbC01Ljg5NSw1Ljc2Yy0wLjIyOCwwLjIyNC0wLjUzLDAuMzQxLTAuODM3LDAuMzQxbDAsMEMxMS4wOSwyMi45NTcsMTAuOTMzLDIyLjkyNywxMC43ODQsMjIuODY0TDEwLjc4NCwyMi44NjR6IE0xMi40NDQsMTguOTINCgkJCQlMMTUuNDMyLDE2bC0yLjk4Ny0yLjkxOVYxOC45MkwxMi40NDQsMTguOTJ6Ii8+DQoJCQk8cGF0aCBkPSJNMTYuMDEzLDIyLjU3OGMtMC40NTEtMC40ODItMC40MjYtMS4yMzksMC4wNTctMS42OWwwLDBsNS4yNDctNC45MDdsLTUtNC44ODcNCgkJCQljLTAuNDczLTAuND'+
			'YxLTAuNDgyLTEuMjE5LTAuMDItMS42OTFsMCwwYzAuNDYyLTAuNDczLDEuMjE5LTAuNDgyLDEuNjkyLTAuMDJsMCwwbDUuODk1LDUuNzYxDQoJCQkJYzAuMjM1LDAuMjI5LDAuMzY0LDAuNTQsMC4zNiwwLjg2OWwwLDBjLTAuMDA0LDAuMzI5LTAuMTQsMC42MzYtMC4zNzksMC44NjFsMCwwbC02LjE2MSw1Ljc2MQ0KCQkJCWMtMC4yMywwLjIxNi0wLjUyNCwwLjMyMy0wLjgxNywwLjMyM2wwLDBDMTYuNTY3LDIyLjk1OCwxNi4yNDksMjIuODMsMTYuMDEzLDIyLjU3OEwxNi4wMTMsMjIuNTc4eiIvPg0KCQk8L2c+DQoJPC9nPgo8L3N2Zz4=';
		me._svg_4__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;svg_4;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 111px;';
		hs+='position : absolute;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._svg_4.onclick=function (e) {
			me.player.setVideoPanoTime(me.player.getVideoPanoTime()+15);
		}
		this._svg_4.onmouseover=function (e) {
			me._svg_4__img.style.visibility='hidden';
			me._svg_4__imgo.style.visibility='inherit';
		}
		this._svg_4.onmouseout=function (e) {
			me._svg_4__img.style.visibility='inherit';
			me._svg_4__imgo.style.visibility='hidden';
		}
		this._svg_4.ggUpdatePosition=function (useTransition) {
		}
		me._containerkanan.appendChild(me._svg_4);
		el=me._svg_1=document.createElement('div');
		els=this._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CgkJPHBhdGggZD0iTTExLjkzMiwyMi43OTdjLTAuMzctMC4yMTMtMC41OTgtMC42MDgtMC41OTgtMS4wMzVsMCwwVjEwLjIzOWMwLTAuNDI4LDAuMjI4LTAuODIyLDAuNTk4LTEuMDM2bDAsMA0KCQkJYzAuMzctMC4yMTQsMC44MjYtMC4yMTQsMS4xOTYsMGwwLDBsOS45NzgsNS43NjFjMC4zNywwLjIxNCwwLjU5OSwwLjYwOCwwLjU5OSwxLjAzNmwwLDBjMCwwLjQy'+
			'OC0wLjIyOSwwLjgyMi0wLjU5OSwxLjAzNmwwLDANCgkJCWwtOS45NzgsNS43NjFjLTAuMTg1LDAuMTA3LTAuMzkyLDAuMTYxLTAuNTk4LDAuMTYxbDAsMEMxMi4zMjQsMjIuOTU4LDEyLjExNywyMi45MDQsMTEuOTMyLDIyLjc5N0wxMS45MzIsMjIuNzk3eg0KCQkJIE0xMy43MjcsMTkuNjg5TDIwLjExNiwxNmwtNi4zOS0zLjY4OVYxOS42ODlMMTMuNzI3LDE5LjY4OXoiLz4NCgkJPHBhdGggZD0iTTMuNSwxNkwzLjUsMTZjMC02LjkwNCw1LjU5Ni0xMi40OTksMTIuNS0xMi41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwDQoJCQljLTAuMDAxLDYuOTAzLTUuNTk2LDEyLj'+
			'Q5OC0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OCwzLjUwMSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTUuODkzLDE2YzAsMi43OTUsMS4xMjksNS4zMTMsMi45NjEsNy4xNDYNCgkJCWwwLDBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMGMyLjc5NCwwLDUuMzE0LTEuMTI5LDcuMTQ2LTIuOTZsMCwwYzEuODMyLTEuODMzLDIuOTYtNC4zNTIsMi45NjEtNy4xNDZsMCwwDQoJCQljLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzEzLTIuOTYxLTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2'+
			'bDAsMA0KCQkJQzcuMDIyLDEwLjY4Nyw1Ljg5MywxMy4yMDUsNS44OTMsMTZMNS44OTMsMTZMNS44OTMsMTZ6Ii8+DQoJPC9nPgoJPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiI+CgkJPHBhdGggZD0iTTExLjkzMiwyMi43OTdjLTAuMzctMC4yMTMtMC41OTgtMC42MDgtMC41OTgtMS4wMzVsMCwwVjEwLjIzOWMwLTAuNDI4LDAuMjI4LTAuODIyLDAuNTk4LTEuMDM2bDAsMA0KCQkJYzAuMzctMC4yMTQsMC44MjYtMC4yMTQsMS4xOTYsMGwwLDBsOS45NzgsNS43NjFjMC4zNywwLjIxNCwwLjU5OSwwLjYwOCwwLjU5OSwxLjAzNmwwLDBjMCwwLjQyOC'+
			'0wLjIyOSwwLjgyMi0wLjU5OSwxLjAzNmwwLDANCgkJCWwtOS45NzgsNS43NjFjLTAuMTg1LDAuMTA3LTAuMzkyLDAuMTYxLTAuNTk4LDAuMTYxbDAsMEMxMi4zMjQsMjIuOTU4LDEyLjExNywyMi45MDQsMTEuOTMyLDIyLjc5N0wxMS45MzIsMjIuNzk3eg0KCQkJIE0xMy43MjcsMTkuNjg5TDIwLjExNiwxNmwtNi4zOS0zLjY4OVYxOS42ODlMMTMuNzI3LDE5LjY4OXoiLz4NCgkJPHBhdGggZD0iTTMuNSwxNkwzLjUsMTZjMC02LjkwNCw1LjU5Ni0xMi40OTksMTIuNS0xMi41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwDQoJCQljLTAuMDAxLDYuOTAzLTUuNTk2LDEyLjQ5'+
			'OC0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OCwzLjUwMSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTUuODkzLDE2YzAsMi43OTUsMS4xMjksNS4zMTMsMi45NjEsNy4xNDYNCgkJCWwwLDBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMGMyLjc5NCwwLDUuMzE0LTEuMTI5LDcuMTQ2LTIuOTZsMCwwYzEuODMyLTEuODMzLDIuOTYtNC4zNTIsMi45NjEtNy4xNDZsMCwwDQoJCQljLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzEzLTIuOTYxLTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bD'+
			'AsMA0KCQkJQzcuMDIyLDEwLjY4Nyw1Ljg5MywxMy4yMDUsNS44OTMsMTZMNS44OTMsMTZMNS44OTMsMTZ6Ii8+DQoJPC9nPgo8L3N2Zz4=';
		me._svg_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_1;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._svg_1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCQk8cGF0aCBkPSJNMTEuOTMyLDIyLjc5N2MtMC4zNy0wLjIxMy0wLjU5OC0wLjYwOC0wLjU5OC0xLjAzNWwwLDBWMTAuMjM5YzAtMC40MjgsMC4yMjgtMC44MjIsMC41OTgtMS4wMzZsMCwwDQoJCQljMC4zNy0wLjIxNCwwLjgyNi0wLjIxNCwxLjE5NiwwbDAs'+
			'MGw5Ljk3OCw1Ljc2MWMwLjM3LDAuMjE0LDAuNTk5LDAuNjA4LDAuNTk5LDEuMDM2bDAsMGMwLDAuNDI4LTAuMjI5LDAuODIyLTAuNTk5LDEuMDM2bDAsMA0KCQkJbC05Ljk3OCw1Ljc2MWMtMC4xODUsMC4xMDctMC4zOTIsMC4xNjEtMC41OTgsMC4xNjFsMCwwQzEyLjMyNCwyMi45NTgsMTIuMTE3LDIyLjkwNCwxMS45MzIsMjIuNzk3TDExLjkzMiwyMi43OTd6DQoJCQkgTTEzLjcyNywxOS42ODlMMjAuMTE2LDE2bC02LjM5LTMuNjg5VjE5LjY4OUwxMy43MjcsMTkuNjg5eiIvPg0KCQk8cGF0aCBkPSJNMy41LDE2TDMuNSwxNmMwLTYuOTA0LDUuNTk2LTEyLjQ5OSwxMi41LTEyLjVsMCwwYzYuOT'+
			'A0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDANCgkJCWMtMC4wMDEsNi45MDMtNS41OTYsMTIuNDk4LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk4LDMuNTAxLDIyLjkwMywzLjUsMTZMMy41LDE2eiBNNS44OTMsMTZjMCwyLjc5NSwxLjEyOSw1LjMxMywyLjk2MSw3LjE0Ng0KCQkJbDAsMGMxLjgzMywxLjgzMSw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwYzIuNzk0LDAsNS4zMTQtMS4xMjksNy4xNDYtMi45NmwwLDBjMS44MzItMS44MzMsMi45Ni00LjM1MiwyLjk2MS03LjE0NmwwLDANCgkJCWMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTMtMi45NjEtNy4xNDdsMCwwQzIxLjMxNCw3LjAy'+
			'MiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwDQoJCQlDNy4wMjIsMTAuNjg3LDUuODkzLDEzLjIwNSw1Ljg5MywxNkw1Ljg5MywxNkw1Ljg5MywxNnoiLz4NCgk8L2c+Cgk8ZyBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPgoJCTxwYXRoIGQ9Ik0xMS45MzIsMjIuNzk3Yy0wLjM3LTAuMjEzLTAuNTk4LTAuNjA4LTAuNTk4LTEuMDM1bDAsMFYxMC4yMzljMC0wLjQyOCwwLjIyOC0wLj'+
			'gyMiwwLjU5OC0xLjAzNmwwLDANCgkJCWMwLjM3LTAuMjE0LDAuODI2LTAuMjE0LDEuMTk2LDBsMCwwbDkuOTc4LDUuNzYxYzAuMzcsMC4yMTQsMC41OTksMC42MDgsMC41OTksMS4wMzZsMCwwYzAsMC40MjgtMC4yMjksMC44MjItMC41OTksMS4wMzZsMCwwDQoJCQlsLTkuOTc4LDUuNzYxYy0wLjE4NSwwLjEwNy0wLjM5MiwwLjE2MS0wLjU5OCwwLjE2MWwwLDBDMTIuMzI0LDIyLjk1OCwxMi4xMTcsMjIuOTA0LDExLjkzMiwyMi43OTdMMTEuOTMyLDIyLjc5N3oNCgkJCSBNMTMuNzI3LDE5LjY4OUwyMC4xMTYsMTZsLTYuMzktMy42ODlWMTkuNjg5TDEzLjcyNywxOS42ODl6Ii8+DQoJCTxwYXRo'+
			'IGQ9Ik0zLjUsMTZMMy41LDE2YzAtNi45MDQsNS41OTYtMTIuNDk5LDEyLjUtMTIuNWwwLDBjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMA0KCQkJYy0wLjAwMSw2LjkwMy01LjU5NiwxMi40OTgtMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTgsMy41MDEsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE01Ljg5MywxNmMwLDIuNzk1LDEuMTI5LDUuMzEzLDIuOTYxLDcuMTQ2DQoJCQlsMCwwYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDcsMi45NmwwLDBjMi43OTQsMCw1LjMxNC0xLjEyOSw3LjE0Ni0yLjk2bDAsMGMxLjgzMi0xLjgzMywyLjk2LTQuMzUyLDIuOTYxLTcuMTQ2bDAsMA'+
			'0KCQkJYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxMy0yLjk2MS03LjE0N2wwLDBDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1Ljg5NCwxNiw1Ljg5M2wwLDBjLTIuNzk1LDAtNS4zMTQsMS4xMjktNy4xNDcsMi45NmwwLDANCgkJCUM3LjAyMiwxMC42ODcsNS44OTMsMTMuMjA1LDUuODkzLDE2TDUuODkzLDE2TDUuODkzLDE2eiIvPg0KCTwvZz4KPC9zdmc+';
		me._svg_1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;svg_1;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 81px;';
		hs+='position : absolute;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._svg_1.onclick=function (e) {
			me.player.videoPanoPlay();
		}
		this._svg_1.onmouseover=function (e) {
			me._svg_1__img.style.visibility='hidden';
			me._svg_1__imgo.style.visibility='inherit';
		}
		this._svg_1.onmouseout=function (e) {
			me._svg_1__img.style.visibility='inherit';
			me._svg_1__imgo.style.visibility='hidden';
		}
		this._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me._containerkanan.appendChild(me._svg_1);
		el=me._svg_2=document.createElement('div');
		els=this._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CgkJPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwDQoJCQljLTAuMDAxLDYuOTA0LTUuNTk2LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwzLjUsMjIuOTA0LDMuNSwxNkwzLjUsMTZ6IE04Ljg1MywyMy4xNDYNCgkJCWMxLjgzMywxLjgzMSw0LjM1'+
			'MiwyLjk2LDcuMTQ3LDIuOTYxbDAsMGMyLjc5NC0wLjAwMSw1LjMxNC0xLjEzLDcuMTQ3LTIuOTYxbDAsMGMxLjgzMS0xLjgzMiwyLjk2LTQuMzUyLDIuOTYtNy4xNDZsMCwwDQoJCQljMC0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bDAsMA0KCQkJQzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwaDBDNS44OTQsMTguNzk1LDcuMDIyLDIxLjMxNCw4Ljg1MywyMy4xNDZMOC44NTMsMjMuMTQ2eiIvPg0KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik'+
			'0xMi40MzMsMjAuNDk4di04Ljk5NWMwLTAuNjYxLDAuNTM2LTEuMTk2LDEuMTk2LTEuMTk2bDAsMGMwLjY2MSwwLDEuMTk2LDAuNTM1LDEuMTk2LDEuMTk2bDAsMHY4Ljk5NQ0KCQkJCWMwLDAuNjYtMC41MzYsMS4xOTUtMS4xOTYsMS4xOTVsMCwwQzEyLjk2OSwyMS42OTMsMTIuNDMzLDIxLjE1OCwxMi40MzMsMjAuNDk4TDEyLjQzMywyMC40OTh6Ii8+DQoJCQk8cGF0aCBkPSJNMTcuMTc1LDIwLjQ5OHYtOC45OTVjMC0wLjY2MSwwLjUzNS0xLjE5NiwxLjE5Ni0xLjE5NmwwLDBjMC42NiwwLDEuMTk2LDAuNTM1LDEuMTk2LDEuMTk2bDAsMHY4Ljk5NQ0KCQkJCWMwLDAuNjYtMC41MzYsMS4xOTUt'+
			'MS4xOTYsMS4xOTVsMCwwQzE3LjcxLDIxLjY5MywxNy4xNzUsMjEuMTU4LDE3LjE3NSwyMC40OThMMTcuMTc1LDIwLjQ5OHoiLz4NCgkJPC9nPg0KCTwvZz4KCTxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgoJCTxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMA0KCQkJYy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTMsMjMuMTQ2DQoJCQljMS'+
			'44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NywyLjk2MWwwLDBjMi43OTQtMC4wMDEsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2MWwwLDBjMS44MzEtMS44MzIsMi45Ni00LjM1MiwyLjk2LTcuMTQ2bDAsMA0KCQkJYzAtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDBDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1Ljg5NCwxNiw1Ljg5M2wwLDBjLTIuNzk1LDAtNS4zMTQsMS4xMjktNy4xNDcsMi45NmwwLDANCgkJCUM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGgwQzUuODk0LDE4Ljc5NSw3LjAyMiwyMS4zMTQsOC44NTMsMjMuMTQ2TDguODUzLDIzLjE0NnoiLz4NCgkJPGc+'+
			'DQoJCQk8cGF0aCBkPSJNMTIuNDMzLDIwLjQ5OHYtOC45OTVjMC0wLjY2MSwwLjUzNi0xLjE5NiwxLjE5Ni0xLjE5NmwwLDBjMC42NjEsMCwxLjE5NiwwLjUzNSwxLjE5NiwxLjE5NmwwLDB2OC45OTUNCgkJCQljMCwwLjY2LTAuNTM2LDEuMTk1LTEuMTk2LDEuMTk1bDAsMEMxMi45NjksMjEuNjkzLDEyLjQzMywyMS4xNTgsMTIuNDMzLDIwLjQ5OEwxMi40MzMsMjAuNDk4eiIvPg0KCQkJPHBhdGggZD0iTTE3LjE3NSwyMC40OTh2LTguOTk1YzAtMC42NjEsMC41MzUtMS4xOTYsMS4xOTYtMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNSwxLjE5NiwxLjE5NmwwLDB2OC45OTUNCgkJCQljMCwwLj'+
			'Y2LTAuNTM2LDEuMTk1LTEuMTk2LDEuMTk1bDAsMEMxNy43MSwyMS42OTMsMTcuMTc1LDIxLjE1OCwxNy4xNzUsMjAuNDk4TDE3LjE3NSwyMC40OTh6Ii8+DQoJCTwvZz4NCgk8L2c+Cjwvc3ZnPg==';
		me._svg_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_2;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._svg_2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCQk8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDANCgkJCWMtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMu'+
			'NSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUzLDIzLjE0Ng0KCQkJYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDcsMi45NjFsMCwwYzIuNzk0LTAuMDAxLDUuMzE0LTEuMTMsNy4xNDctMi45NjFsMCwwYzEuODMxLTEuODMyLDIuOTYtNC4zNTIsMi45Ni03LjE0NmwwLDANCgkJCWMwLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwDQoJCQlDNy4wMjIsMTAuNjg2LDUuODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBoMEM1Ljg5NCwxOC43OTUsNy4wMj'+
			'IsMjEuMzE0LDguODUzLDIzLjE0Nkw4Ljg1MywyMy4xNDZ6Ii8+DQoJCTxnPg0KCQkJPHBhdGggZD0iTTEyLjQzMywyMC40OTh2LTguOTk1YzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTYtMS4xOTZsMCwwYzAuNjYxLDAsMS4xOTYsMC41MzUsMS4xOTYsMS4xOTZsMCwwdjguOTk1DQoJCQkJYzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLjE5NWwwLDBDMTIuOTY5LDIxLjY5MywxMi40MzMsMjEuMTU4LDEyLjQzMywyMC40OThMMTIuNDMzLDIwLjQ5OHoiLz4NCgkJCTxwYXRoIGQ9Ik0xNy4xNzUsMjAuNDk4di04Ljk5NWMwLTAuNjYxLDAuNTM1LTEuMTk2LDEuMTk2LTEuMTk2bDAsMGMwLjY2LDAs'+
			'MS4xOTYsMC41MzUsMS4xOTYsMS4xOTZsMCwwdjguOTk1DQoJCQkJYzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLjE5NWwwLDBDMTcuNzEsMjEuNjkzLDE3LjE3NSwyMS4xNTgsMTcuMTc1LDIwLjQ5OEwxNy4xNzUsMjAuNDk4eiIvPg0KCQk8L2c+DQoJPC9nPgoJPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCQk8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LD'+
			'EyLjUsMTIuNWwwLDANCgkJCWMtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUzLDIzLjE0Ng0KCQkJYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDcsMi45NjFsMCwwYzIuNzk0LTAuMDAxLDUuMzE0LTEuMTMsNy4xNDctMi45NjFsMCwwYzEuODMxLTEuODMyLDIuOTYtNC4zNTIsMi45Ni03LjE0NmwwLDANCgkJCWMwLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3'+
			'LDIuOTZsMCwwDQoJCQlDNy4wMjIsMTAuNjg2LDUuODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBoMEM1Ljg5NCwxOC43OTUsNy4wMjIsMjEuMzE0LDguODUzLDIzLjE0Nkw4Ljg1MywyMy4xNDZ6Ii8+DQoJCTxnPg0KCQkJPHBhdGggZD0iTTEyLjQzMywyMC40OTh2LTguOTk1YzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTYtMS4xOTZsMCwwYzAuNjYxLDAsMS4xOTYsMC41MzUsMS4xOTYsMS4xOTZsMCwwdjguOTk1DQoJCQkJYzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLjE5NWwwLDBDMTIuOTY5LDIxLjY5MywxMi40MzMsMjEuMTU4LDEyLjQzMywyMC40OThMMTIuNDMzLDIwLjQ5OHoiLz4NCgkJCT'+
			'xwYXRoIGQ9Ik0xNy4xNzUsMjAuNDk4di04Ljk5NWMwLTAuNjYxLDAuNTM1LTEuMTk2LDEuMTk2LTEuMTk2bDAsMGMwLjY2LDAsMS4xOTYsMC41MzUsMS4xOTYsMS4xOTZsMCwwdjguOTk1DQoJCQkJYzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLjE5NWwwLDBDMTcuNzEsMjEuNjkzLDE3LjE3NSwyMS4xNTgsMTcuMTc1LDIwLjQ5OEwxNy4xNzUsMjAuNDk4eiIvPg0KCQk8L2c+DQoJPC9nPgo8L3N2Zz4=';
		me._svg_2__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;svg_2;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 51px;';
		hs+='position : absolute;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._svg_2.onclick=function (e) {
			me.player.videoPanoPause();
		}
		this._svg_2.onmouseover=function (e) {
			me._svg_2__img.style.visibility='hidden';
			me._svg_2__imgo.style.visibility='inherit';
		}
		this._svg_2.onmouseout=function (e) {
			me._svg_2__img.style.visibility='inherit';
			me._svg_2__imgo.style.visibility='hidden';
		}
		this._svg_2.ggUpdatePosition=function (useTransition) {
		}
		me._containerkanan.appendChild(me._svg_2);
		el=me._svg_3=document.createElement('div');
		els=this._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CgkJPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMGM2LjkwNSwwLDEyLjUsNS41OTUsMTIuNSwxMi41bDAsMA0KCQkJYy0wLjAwMSw2LjkwMy01LjU5NiwxMi40OTgtMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTgsMy41LDIyLjkwMywzLjUsMTZMMy41LDE2eiBNOC44NTMsOC44NTMNCgkJCUM3LjAyMiwxMC42ODYsNS44OTQs'+
			'MTMuMjA1LDUuODkzLDE2bDAsMGMwLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYsNy4xNDZsMCwwYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDYsMi45NmwwLDANCgkJCWMyLjc5NSwwLDUuMzE1LTEuMTI5LDcuMTQ4LTIuOTZsMCwwYzEuODMtMS44MzMsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDBjLTAuMDAxLTIuNzk1LTEuMTMtNS4zMTQtMi45Ni03LjE0N2wwLDANCgkJCUMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMEMxMy4yMDUsNS44OTQsMTAuNjg2LDcuMDIyLDguODUzLDguODUzTDguODUzLDguODUzeiIvPg0KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik0xOS45MTYsMj'+
			'IuNjE2bC01Ljg5NS01Ljc2Yy0wLjIzMi0wLjIyNy0wLjM2LTAuNTMyLTAuMzYtMC44NTZsMCwwYzAtMC4zMjQsMC4xMjgtMC42MjksMC4zNi0wLjg1NWwwLDANCgkJCQlsNS44OTUtNS43NjFjMC4zNDQtMC4zMzYsMC44NTgtMC40MzQsMS4zMDEtMC4yNDdsMCwwYzAuNDQyLDAuMTg2LDAuNzMyLDAuNjIyLDAuNzMyLDEuMTAzbDAsMHYxMS41MjENCgkJCQljMCwwLjQ3OS0wLjI5LDAuOTE3LTAuNzMyLDEuMTAzbDAsMGMtMC4xNDksMC4wNjMtMC4zMDcsMC4wOTQtMC40NjMsMC4wOTRsMCwwQzIwLjQ0NywyMi45NTcsMjAuMTQ1LDIyLjgzOSwxOS45MTYsMjIuNjE2DQoJCQkJTDE5LjkxNiwyMi42'+
			'MTZ6IE0xNi41NjksMTZsMi45ODgsMi45MTl2LTUuODM4TDE2LjU2OSwxNkwxNi41NjksMTZ6Ii8+DQoJCQk8cGF0aCBkPSJNMTQuMDExLDIyLjYxNmwtNS44OTYtNS43NjFjLTAuMjM0LTAuMjI5LTAuMzYzLTAuNTQtMC4zNi0wLjg2OGwwLDANCgkJCQljMC4wMDQtMC4zMjksMC4xMzktMC42MzcsMC4zNzktMC44NjFsMCwwbDYuMTYxLTUuNzYxYzAuNDgyLTAuNDUyLDEuMjQtMC40MjYsMS42OTEsMC4wNTdsMCwwDQoJCQkJYzAuNDUxLDAuNDgyLDAuNDI2LDEuMjM5LTAuMDU2LDEuNjlsMCwwbC01LjI0OCw0LjkwN2w1LDQuODg2djAuMDAxYzAuNDcyLDAuNDYxLDAuNDgxLDEuMjE5LDAuMDIsMS'+
			'42OTFsMCwwDQoJCQkJYy0wLjIzNSwwLjIzOS0wLjU0NSwwLjM1OS0wLjg1NiwwLjM1OWwwLDBDMTQuNTQ2LDIyLjk1NywxNC4yNDQsMjIuODQ0LDE0LjAxMSwyMi42MTZMMTQuMDExLDIyLjYxNnoiLz4NCgkJPC9nPg0KCTwvZz4KCTxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgoJCTxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBjNi45MDUsMCwxMi41LDUuNTk1LDEyLjUsMTIuNWwwLDANCgkJCWMtMC4wMDEsNi45MDMtNS41OTYsMTIuNDk4LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk4LDMuNSwyMi45'+
			'MDMsMy41LDE2TDMuNSwxNnogTTguODUzLDguODUzDQoJCQlDNy4wMjIsMTAuNjg2LDUuODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBjMCwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2LDcuMTQ2bDAsMGMxLjgzMywxLjgzMSw0LjM1MiwyLjk2LDcuMTQ2LDIuOTZsMCwwDQoJCQljMi43OTUsMCw1LjMxNS0xLjEyOSw3LjE0OC0yLjk2bDAsMGMxLjgzLTEuODMzLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwYy0wLjAwMS0yLjc5NS0xLjEzLTUuMzE0LTIuOTYtNy4xNDdsMCwwDQoJCQlDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1Ljg5NCwxNiw1Ljg5M2wwLDBDMTMuMjA1LDUuODk0LDEwLjY4Niw3LjAyMiw4Lj'+
			'g1Myw4Ljg1M0w4Ljg1Myw4Ljg1M3oiLz4NCgkJPGc+DQoJCQk8cGF0aCBkPSJNMTkuOTE2LDIyLjYxNmwtNS44OTUtNS43NmMtMC4yMzItMC4yMjctMC4zNi0wLjUzMi0wLjM2LTAuODU2bDAsMGMwLTAuMzI0LDAuMTI4LTAuNjI5LDAuMzYtMC44NTVsMCwwDQoJCQkJbDUuODk1LTUuNzYxYzAuMzQ0LTAuMzM2LDAuODU4LTAuNDM0LDEuMzAxLTAuMjQ3bDAsMGMwLjQ0MiwwLjE4NiwwLjczMiwwLjYyMiwwLjczMiwxLjEwM2wwLDB2MTEuNTIxDQoJCQkJYzAsMC40NzktMC4yOSwwLjkxNy0wLjczMiwxLjEwM2wwLDBjLTAuMTQ5LDAuMDYzLTAuMzA3LDAuMDk0LTAuNDYzLDAuMDk0bDAsMEMyMC40'+
			'NDcsMjIuOTU3LDIwLjE0NSwyMi44MzksMTkuOTE2LDIyLjYxNg0KCQkJCUwxOS45MTYsMjIuNjE2eiBNMTYuNTY5LDE2bDIuOTg4LDIuOTE5di01LjgzOEwxNi41NjksMTZMMTYuNTY5LDE2eiIvPg0KCQkJPHBhdGggZD0iTTE0LjAxMSwyMi42MTZsLTUuODk2LTUuNzYxYy0wLjIzNC0wLjIyOS0wLjM2My0wLjU0LTAuMzYtMC44NjhsMCwwDQoJCQkJYzAuMDA0LTAuMzI5LDAuMTM5LTAuNjM3LDAuMzc5LTAuODYxbDAsMGw2LjE2MS01Ljc2MWMwLjQ4Mi0wLjQ1MiwxLjI0LTAuNDI2LDEuNjkxLDAuMDU3bDAsMA0KCQkJCWMwLjQ1MSwwLjQ4MiwwLjQyNiwxLjIzOS0wLjA1NiwxLjY5bDAsMGwtNS'+
			'4yNDgsNC45MDdsNSw0Ljg4NnYwLjAwMWMwLjQ3MiwwLjQ2MSwwLjQ4MSwxLjIxOSwwLjAyLDEuNjkxbDAsMA0KCQkJCWMtMC4yMzUsMC4yMzktMC41NDUsMC4zNTktMC44NTYsMC4zNTlsMCwwQzE0LjU0NiwyMi45NTcsMTQuMjQ0LDIyLjg0NCwxNC4wMTEsMjIuNjE2TDE0LjAxMSwyMi42MTZ6Ii8+DQoJCTwvZz4NCgk8L2c+Cjwvc3ZnPg==';
		me._svg_3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_3;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._svg_3__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCQk8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA1LDAsMTIuNSw1LjU5NSwxMi41LDEyLjVsMCwwDQoJCQljLTAuMDAxLDYuOTAzLTUuNTk2LDEyLjQ5OC0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OCwzLjUs'+
			'MjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE04Ljg1Myw4Ljg1Mw0KCQkJQzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwYzAsMi43OTUsMS4xMjksNS4zMTQsMi45Niw3LjE0NmwwLDBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NiwyLjk2bDAsMA0KCQkJYzIuNzk1LDAsNS4zMTUtMS4xMjksNy4xNDgtMi45NmwwLDBjMS44My0xLjgzMywyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bDAsMGMtMC4wMDEtMi43OTUtMS4xMy01LjMxNC0yLjk2LTcuMTQ3bDAsMA0KCQkJQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwQzEzLjIwNSw1Ljg5NCwxMC42ODYsNy4wMj'+
			'IsOC44NTMsOC44NTNMOC44NTMsOC44NTN6Ii8+DQoJCTxnPg0KCQkJPHBhdGggZD0iTTE5LjkxNiwyMi42MTZsLTUuODk1LTUuNzZjLTAuMjMyLTAuMjI3LTAuMzYtMC41MzItMC4zNi0wLjg1NmwwLDBjMC0wLjMyNCwwLjEyOC0wLjYyOSwwLjM2LTAuODU1bDAsMA0KCQkJCWw1Ljg5NS01Ljc2MWMwLjM0NC0wLjMzNiwwLjg1OC0wLjQzNCwxLjMwMS0wLjI0N2wwLDBjMC40NDIsMC4xODYsMC43MzIsMC42MjIsMC43MzIsMS4xMDNsMCwwdjExLjUyMQ0KCQkJCWMwLDAuNDc5LTAuMjksMC45MTctMC43MzIsMS4xMDNsMCwwYy0wLjE0OSwwLjA2My0wLjMwNywwLjA5NC0wLjQ2MywwLjA5NGwwLDBD'+
			'MjAuNDQ3LDIyLjk1NywyMC4xNDUsMjIuODM5LDE5LjkxNiwyMi42MTYNCgkJCQlMMTkuOTE2LDIyLjYxNnogTTE2LjU2OSwxNmwyLjk4OCwyLjkxOXYtNS44MzhMMTYuNTY5LDE2TDE2LjU2OSwxNnoiLz4NCgkJCTxwYXRoIGQ9Ik0xNC4wMTEsMjIuNjE2bC01Ljg5Ni01Ljc2MWMtMC4yMzQtMC4yMjktMC4zNjMtMC41NC0wLjM2LTAuODY4bDAsMA0KCQkJCWMwLjAwNC0wLjMyOSwwLjEzOS0wLjYzNywwLjM3OS0wLjg2MWwwLDBsNi4xNjEtNS43NjFjMC40ODItMC40NTIsMS4yNC0wLjQyNiwxLjY5MSwwLjA1N2wwLDANCgkJCQljMC40NTEsMC40ODIsMC40MjYsMS4yMzktMC4wNTYsMS42OWwwLD'+
			'BsLTUuMjQ4LDQuOTA3bDUsNC44ODZ2MC4wMDFjMC40NzIsMC40NjEsMC40ODEsMS4yMTksMC4wMiwxLjY5MWwwLDANCgkJCQljLTAuMjM1LDAuMjM5LTAuNTQ1LDAuMzU5LTAuODU2LDAuMzU5bDAsMEMxNC41NDYsMjIuOTU3LDE0LjI0NCwyMi44NDQsMTQuMDExLDIyLjYxNkwxNC4wMTEsMjIuNjE2eiIvPg0KCQk8L2c+DQoJPC9nPgoJPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCQk8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5'+
			'NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA1LDAsMTIuNSw1LjU5NSwxMi41LDEyLjVsMCwwDQoJCQljLTAuMDAxLDYuOTAzLTUuNTk2LDEyLjQ5OC0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OCwzLjUsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE04Ljg1Myw4Ljg1Mw0KCQkJQzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwYzAsMi43OTUsMS4xMjksNS4zMTQsMi45Niw3LjE0NmwwLDBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NiwyLjk2bDAsMA0KCQkJYzIuNzk1LDAsNS4zMTUtMS4xMjksNy4xNDgtMi45NmwwLDBjMS44My0xLjgzMywyLjk1OS00LjM1MiwyLjk2LTcuMT'+
			'Q2bDAsMGMtMC4wMDEtMi43OTUtMS4xMy01LjMxNC0yLjk2LTcuMTQ3bDAsMA0KCQkJQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwQzEzLjIwNSw1Ljg5NCwxMC42ODYsNy4wMjIsOC44NTMsOC44NTNMOC44NTMsOC44NTN6Ii8+DQoJCTxnPg0KCQkJPHBhdGggZD0iTTE5LjkxNiwyMi42MTZsLTUuODk1LTUuNzZjLTAuMjMyLTAuMjI3LTAuMzYtMC41MzItMC4zNi0wLjg1NmwwLDBjMC0wLjMyNCwwLjEyOC0wLjYyOSwwLjM2LTAuODU1bDAsMA0KCQkJCWw1Ljg5NS01Ljc2MWMwLjM0NC0wLjMzNiwwLjg1OC0wLjQzNCwxLjMwMS0wLjI0N2wwLDBjMC40NDIsMC4xODYsMC43'+
			'MzIsMC42MjIsMC43MzIsMS4xMDNsMCwwdjExLjUyMQ0KCQkJCWMwLDAuNDc5LTAuMjksMC45MTctMC43MzIsMS4xMDNsMCwwYy0wLjE0OSwwLjA2My0wLjMwNywwLjA5NC0wLjQ2MywwLjA5NGwwLDBDMjAuNDQ3LDIyLjk1NywyMC4xNDUsMjIuODM5LDE5LjkxNiwyMi42MTYNCgkJCQlMMTkuOTE2LDIyLjYxNnogTTE2LjU2OSwxNmwyLjk4OCwyLjkxOXYtNS44MzhMMTYuNTY5LDE2TDE2LjU2OSwxNnoiLz4NCgkJCTxwYXRoIGQ9Ik0xNC4wMTEsMjIuNjE2bC01Ljg5Ni01Ljc2MWMtMC4yMzQtMC4yMjktMC4zNjMtMC41NC0wLjM2LTAuODY4bDAsMA0KCQkJCWMwLjAwNC0wLjMyOSwwLjEzOS0wLj'+
			'YzNywwLjM3OS0wLjg2MWwwLDBsNi4xNjEtNS43NjFjMC40ODItMC40NTIsMS4yNC0wLjQyNiwxLjY5MSwwLjA1N2wwLDANCgkJCQljMC40NTEsMC40ODIsMC40MjYsMS4yMzktMC4wNTYsMS42OWwwLDBsLTUuMjQ4LDQuOTA3bDUsNC44ODZ2MC4wMDFjMC40NzIsMC40NjEsMC40ODEsMS4yMTksMC4wMiwxLjY5MWwwLDANCgkJCQljLTAuMjM1LDAuMjM5LTAuNTQ1LDAuMzU5LTAuODU2LDAuMzU5bDAsMEMxNC41NDYsMjIuOTU3LDE0LjI0NCwyMi44NDQsMTQuMDExLDIyLjYxNkwxNC4wMTEsMjIuNjE2eiIvPg0KCQk8L2c+DQoJPC9nPgo8L3N2Zz4=';
		me._svg_3__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;svg_3;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._svg_3.onclick=function (e) {
			me.player.setVideoPanoTime(me.player.getVideoPanoTime()-15);
		}
		this._svg_3.onmouseover=function (e) {
			me._svg_3__img.style.visibility='hidden';
			me._svg_3__imgo.style.visibility='inherit';
		}
		this._svg_3.onmouseout=function (e) {
			me._svg_3__img.style.visibility='inherit';
			me._svg_3__imgo.style.visibility='hidden';
		}
		this._svg_3.ggUpdatePosition=function (useTransition) {
		}
		me._containerkanan.appendChild(me._svg_3);
		me.divSkin.appendChild(me._containerkanan);
		this._map_1.ggMarkerInstances=[];
		this._map_1.ggMapId = 'googleroadmap';
		this._map_1.ggLastNodeId=null;
		this._map_1.ggMarkerArray=[];
		this._map_1.ggGoogleMarkerArray=[];
		this._map_1.ggLastZoom = -1;
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
			var gps;
			if (me.player.getMapType(me._map_1.ggMapId) == 'web') {
				gps=me.player.getNodeLatLng();
			} else {
				gps=me.player.getNodeMapCoords(null, me._map_1.ggMapId);
				pan -= me._map_1.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = me.player.getCurrentNode();
			if (me._map_1.ggFilteredIds.length > 0 && me._map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat()) && (gps[1]==radar.activeNodeLatLng.lng())) return; 
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
		this._map_1.ggTileAvailable=function(x, y, z) {
			var mapDetails = me.player.getMapDetails(me._map_1.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		this._map_1.ggInitMap=function(keepZoom) {
			me._map_1.ggMapNotLoaded = false;
			var mapType = me.player.getMapType(me._map_1.ggMapId);
			var mapDetails = me.player.getMapDetails(me._map_1.ggMapId);
			if (mapType == 'file') {
				me._map_1.style.backgroundColor = mapDetails['bgcolor'];
				me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me._map_1.style.backgroundColor = '#fff';
			}
			var gps;
			if (me.player.getMapType(me._map_1.ggMapId) == 'web') {
				gps=me.player.getNodeLatLng();
			} else {
				gps=me.player.getNodeMapCoords(null, me._map_1.ggMapId);
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
		this._map_1.ggClearMap=function() {
		me._map_1.ggMap = null;
		me._map_1.ggClearMapMarkers();
		me._map_1.ggMapNotLoaded = true;
		}
		this._map_1.ggClearMapMarkers=function() {
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
		this._map_1.ggCenterNode=function() {
			var gps;
			if (me.player.getMapType(me._map_1.ggMapId) == 'web') {
				gps=me.player.getNodeLatLng();
			} else {
				gps=me.player.getNodeMapCoords(null, me._map_1.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = new google.maps.LatLng(gps[0], gps[1]);
				me._map_1.ggMap.panTo(markerLocation);
			}
		}
		this._map_1.ggFitBounds=function(force) {
			if (!me._map_1.ggMarkerBounds.isEmpty()) {
				if (me._map_1.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me._map_1.ggGoogleMarkerArray).length > 1) {
					me._map_1.ggMap.fitBounds(me._map_1.ggMarkerBounds, 30);
				} else {
					me._map_1.ggMap.setCenter(me._map_1.ggMarkerBounds.getCenter());
					if (me.player.getMapType(me._map_1.ggMapId) == 'web') {
						me._map_1.ggMap.setZoom(18);
					} else {
						me._map_1.ggMap.setZoom(7);
					}
				}
			}
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
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			me._map_1.ggMarkerBounds = new google.maps.LatLngBounds();
			var currentId = me.player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (me.player.getMapType(me._map_1.ggMapId) == 'web') {
					gps=me.player.getNodeLatLng(id);
				} else {
					gps=me.player.getNodeMapCoords(id, me._map_1.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = new google.maps.LatLng(gps[0], gps[1]);
					marker = new google.maps.Marker({position: markerLocation,map: me._map_1.ggMap});
					marker.setTitle(me.player.getNodeTitle(id));
					marker.setClickable(true);
					marker.ggId=id;
					google.maps.event.addListener(marker, 'click', function() {
						me.player.openNext('{' + this.ggId + '}');
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
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
		}
		this._map_1.ggChangeMap=function(mapId) {
			var newMapType = me.player.getMapType(mapId)
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
		this._map_1.ggInCheckBounds=false;
		this._map_1.ggCheckBounds=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var mapWidthInDeg = 360.0 / Math.pow(2, 7);
			var mapHeightInDeg = mapWidthInDeg / mapAR;
			if (me._map_1.ggInCheckBounds) return;
			me._map_1.ggInCheckBounds = true;
			var mapCenter = me._map_1.ggMap.getCenter();
			var currentZoom = me._map_1.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me._map_1.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me._map_1.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng();
			var y = mapCenter.lat();
			if (x > mapWidthInDeg - xOffset) x = mapWidthInDeg - xOffset;
			if (x < xOffset) x = xOffset;
			if (y < -mapHeightInDeg + yOffset) y = -mapHeightInDeg + yOffset;
			if (y > -yOffset) y = -yOffset;
			me._map_1.ggMap.setCenter(new google.maps.LatLng(y, x));
			me._map_1.ggInCheckBounds = false;
		}
		this.player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		this.player.addListener('configloaded', function() {
			me._map_1.ggInitMap(false);
			me._map_1.ggInitMapMarkers(true);
		});
		this.player.addListener('imagesready', function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		});
		this.player.addListener('beforechangenode', function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
			me._loading.ggVisible=true;
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	this.hotspotProxyOver=function(id, url) {
	}
	this.hotspotProxyOut=function(id, url) {
	}
	this.player.addListener('changenodeid', function() {
		me.ggUserdata=me.player.userdata;
		me._map_1.ggNodeChange();
	});
	this.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		me._map_1.ggUpdateConditionTimer();
		me._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		me._tn_location_box.ggUpdateText();
	};
	this.player.addListener('timer', this.skinTimerEvent);
	this.addSkin();
	me._container4map.logicBlock_position();
	me._container4map.logicBlock_scaling();
	me._container4mdle.logicBlock_scaling();
	me._hekpkahon.logicBlock_position();
	me._pointtint.logicBlock_scaling();
	me._kahonessentials.logicBlock_scaling();
	me._tn_location_box.logicBlock_position();
	me._container4hdr.logicBlock_scaling();
	me._kahondaga.logicBlock_scaling();
	me._kahonmobile.logicBlock_scaling();
	player.addListener('sizechanged', function(args) { me._container4map.logicBlock_position();me._container4map.logicBlock_scaling();me._container4mdle.logicBlock_scaling();me._hekpkahon.logicBlock_position();me._pointtint.logicBlock_scaling();me._kahonessentials.logicBlock_scaling();me._tn_location_box.logicBlock_position();me._container4hdr.logicBlock_scaling(); });
	player.addListener('configloaded', function(args) { me._container4map.logicBlock_position();me._container4map.logicBlock_scaling();me._container4mdle.logicBlock_scaling();me._hekpkahon.logicBlock_position();me._kahondaga.logicBlock_scaling();me._kahonmobile.logicBlock_scaling();me._pointtint.logicBlock_scaling();me._kahonessentials.logicBlock_scaling();me._tn_location_box.logicBlock_position();me._container4hdr.logicBlock_scaling(); });
	this.skinTimerEvent();
};