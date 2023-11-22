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
            this.set_titletext("직원게시판");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("empList_DB", this);
            obj._setContents("<ColumnInfo><Column id=\"employee_id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"reg_no\" type=\"STRING\" size=\"256\"/><Column id=\"department_name\" type=\"STRING\" size=\"256\"/><Column id=\"hire_date\" type=\"STRING\" size=\"256\"/><Column id=\"leave_date\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("employees_DB", this);
            obj._setContents("<ColumnInfo><Column id=\"employee_id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"phone_number\" type=\"STRING\" size=\"256\"/><Column id=\"hire_date\" type=\"STRING\" size=\"256\"/><Column id=\"leave_date\" type=\"STRING\" size=\"256\"/><Column id=\"department_id\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"reg_no\" type=\"STRING\" size=\"256\"/><Column id=\"bank_id\" type=\"STRING\" size=\"256\"/><Column id=\"bank_account\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("departments_DB", this);
            obj._setContents("<ColumnInfo><Column id=\"department_id\" type=\"STRING\" size=\"256\"/><Column id=\"department_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("banks_DB", this);
            obj._setContents("<ColumnInfo><Column id=\"bank_id\" type=\"STRING\" size=\"256\"/><Column id=\"bank_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Edit("edt_Name","620","154","210","42",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_displaynulltext("성명");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchNm","840","154","50","42",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_empList","141","224","993","376",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"76\"/><Column size=\"111\"/><Column size=\"84\"/><Column size=\"174\"/><Column size=\"92\"/><Column size=\"70\"/><Column size=\"109\"/><Column size=\"116\"/><Column size=\"159\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"사원번호\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"주민번호\"/><Cell col=\"4\" text=\"부서명\"/><Cell col=\"5\" text=\"직위\"/><Cell col=\"6\" text=\"입사일\"/><Cell col=\"7\" text=\"퇴사일\"/><Cell col=\"8\" text=\"Email\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add","145","660","65","43",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("추가");
            obj.set_color("floralwhite");
            obj.set_background("black");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete","226","660","65","43",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_color("floralwhite");
            obj.set_background("black");
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

        this.btn_Add_onclick = function(obj,e)
        {

        };

        this.btn_Delete_onclick = function(obj,e)
        {

        };



        this.grd_empList_oncelldblclick = function(obj,e)
        {
        	// 그리드 더블 클릭시 진행할 스크리트 작성
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.sta01.addEventHandler("onclick",this.sta01_onclick,this);
            this.btn_empList.addEventHandler("onclick",this.btn_empList_onclick,this);
            this.edt_Name.addEventHandler("onchanged",this.edt_Name_onchanged,this);
            this.btn_searchNm.addEventHandler("onclick",this.btn_searchNm_onclick,this);
            this.grd_empList.addEventHandler("oncelldblclick",this.grd_empList_oncelldblclick,this);
            this.btn_Add.addEventHandler("onclick",this.btn_Add_onclick,this);
            this.btn_Delete.addEventHandler("onclick",this.btn_Delete_onclick,this);
        };
        this.loadIncludeScript("OB_001.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
