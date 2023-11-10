(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OB_001");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta01","131","68","1019","70",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid darkgray, 0px none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","130","10","200","46",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("인사관리시스템");
            obj.set_font("28px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("btn_empList","145","80","71","43",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("사원목록");
            obj.set_font("16px/normal \"Gulim\"");
            obj.set_color("dodgerblue");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Nm","620","154","210","42",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_displaynulltext("성명");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchNm","840","154","50","42",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_empList","141","224","993","475",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"76\"/><Column size=\"111\"/><Column size=\"84\"/><Column size=\"174\"/><Column size=\"92\"/><Column size=\"70\"/><Column size=\"109\"/><Column size=\"116\"/><Column size=\"159\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"사원번호\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"주민번호\"/><Cell col=\"4\" text=\"부서명\"/><Cell col=\"5\" text=\"직위\"/><Cell col=\"6\" text=\"입사일\"/><Cell col=\"7\" text=\"퇴사일\"/><Cell col=\"8\" text=\"Email\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("OB_001.xfdl", function() {

        this.btn_empList_onclick = function(obj,e)
        {

        };

        this.btn_searchNm_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.sta01.addEventHandler("onclick",this.sta01_onclick,this);
            this.btn_empList.addEventHandler("onclick",this.btn_empList_onclick,this);
            this.edt_Nm.addEventHandler("onchanged",this.edt_Name_onchanged,this);
            this.btn_searchNm.addEventHandler("onclick",this.btn_searchNm_onclick,this);
        };
        this.loadIncludeScript("OB_001.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
