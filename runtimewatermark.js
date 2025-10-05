var gdjs;
(function(n){
  let a;
  (function(r){
    class s {
      constructor(e,t,i){
        this._containerElement=null;
        this._backgroundElement=null;
        this._madeWithTextElement=null;
        this._resizeObserver=null;
        this._displayDuration=20;
        this._fadeInDelayAfterGameLoaded=1;
        this._fadeDuration=.3;
        this._textFontSize=14;
        this._backgroundHeight=150;
        this._margin=10;
        this._gameId=e._data.properties.projectUuid;
        this._gameRenderer=e.getRenderer();
        this._placement=i.placement;
        this._showAtStartup=i.showWatermark;
        this._isDevEnvironment=e.isUsingGDevelopDevelopmentEnvironment();
        if(i.showWatermark) this.addStyle();
      }

      displayAtStartup(){
        if(this._showAtStartup) this.display();
      }

      display(){
        const e=this._gameRenderer.getDomElementContainer();
        if(!e) return;
        this.addWatermarkToGameContainer(e);
        this._resizeObserver=new ResizeObserver(()=>{
          const t=e.getBoundingClientRect();
          this.onResizeGameContainer(t.height);
        });
        this._resizeObserver.observe(e);
      }

      updateFontSize(e){ this._textFontSize=Math.max(.025*e,12); }
      updateBackgroundHeight(e){ this._backgroundHeight=Math.max(.13*e,45); }
      updateMargin(e){ this._margin=Math.max(.025*e,8); }

      onResizeGameContainer(e){
        this.updateFontSize(e);
        if(this._madeWithTextElement)
          this._madeWithTextElement.style.fontSize=`${this._textFontSize}px`;
        this.updateBackgroundHeight(e);
        if(this._backgroundElement)
          this._backgroundElement.style.height=`${this._backgroundHeight}px`;
        this.updateMargin(e);
        if(this._containerElement)
          this.updateElementMargins(this._containerElement);
      }

      addWatermarkToGameContainer(e){
        const t=e.getBoundingClientRect();
        this.updateFontSize(t.height);
        this.updateBackgroundHeight(t.height);
        this._containerElement=this.createDivContainer();
        this.createBackground();

        const i=document.createElement("div");
        this.createMadeWithTextElement();
        if(this._madeWithTextElement) i.appendChild(this._madeWithTextElement);

        this._containerElement.appendChild(i);
        if(this._backgroundElement) e.appendChild(this._backgroundElement);

        this.updateElementMargins(this._containerElement);
        e.appendChild(this._containerElement);

        this.setupAnimations();
      }

      createBackground(){
        this._backgroundElement=document.createElement("div");
        this._backgroundElement.setAttribute("id","watermark-background");
        this._backgroundElement.style.height=`${this._backgroundHeight}px`;
        this._backgroundElement.style.opacity="0";
        if(this._placement.startsWith("top")){
          this._backgroundElement.style.top="0";
          this._backgroundElement.style.backgroundImage=
            "linear-gradient(180deg, rgba(38, 38, 38, .6) 0%, rgba(38, 38, 38, 0) 100%)";
        } else {
          this._backgroundElement.style.bottom="0";
          this._backgroundElement.style.backgroundImage=
            "linear-gradient(0deg, rgba(38, 38, 38, .6) 0%, rgba(38, 38, 38, 0) 100%)";
        }
      }

      setupAnimations(){
        requestAnimationFrame(()=>{
          setTimeout(()=>{
            if(this._containerElement && this._backgroundElement){
              this._containerElement.style.opacity="1";
              this._backgroundElement.style.opacity="1";
            }
          }, this._fadeInDelayAfterGameLoaded*1000);
        });
      }

      createMadeWithTextElement(){
        this._madeWithTextElement=document.createElement("span");
        this._madeWithTextElement.innerText="تیم ارنان";
        this._madeWithTextElement.style.fontSize=`${this._textFontSize}px`;
      }

      updateElementMargins(e){
        switch(this._placement){
          case"top-left":e.style.top=`${this._margin}px`;e.style.left=`${this._margin}px`;break;
          case"top-right":e.style.top=`${this._margin}px`;e.style.right=`${this._margin}px`;break;
          case"bottom-left":e.style.bottom=`${this._margin}px`;e.style.left=`${this._margin}px`;break;
          case"bottom-right":e.style.bottom=`${this._margin}px`;e.style.right=`${this._margin}px`;break;
          case"top":e.style.top=`${this._margin}px`;e.style.left="50%";e.style.transform="translate(-50%, 0)";break;
          default:e.style.bottom=`${this._margin}px`;e.style.left="50%";e.style.transform="translate(-50%, 0)";break;
        }
        e.style.position="absolute";
        e.style.pointerEvents="none";
        e.style.userSelect="none";
      }

      createDivContainer(){
        const e=document.createElement("div");
        e.setAttribute("id","watermark");
        e.style.opacity="0";
        return e;
      }

      addStyle(){
        const e=document.createElement("style");
        e.innerHTML=`
        #watermark-background {
          position: absolute;
          pointer-events: none;
          width: 100%;
          transition-property: opacity;
          transition-duration: ${this._fadeDuration}s;
        }

        #watermark {
          display: flex;
          flex-direction: column;
          align-items: center;
          transition-property: opacity;
          transition-duration: ${this._fadeDuration}s;
          transition-timing-function: ease-out;
        }

        #watermark span {
          color: white;
          font-family: 'Tahoma', 'Gill sans', 'Helvetica', 'Arial';
          font-size: ${this._textFontSize}px;
        }`;
        document.head.appendChild(e);
      }
    }
    r.RuntimeWatermark=s;
  })(a=n.watermark||(n.watermark={}));
})(gdjs||(gdjs={}));
