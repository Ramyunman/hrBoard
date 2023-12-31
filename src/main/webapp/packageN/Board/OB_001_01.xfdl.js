(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OB_001_01");
            this.set_titletext("직원등록1");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dpt_NameCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("bank_NameCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"BANK_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dpt_searchCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("bank_searchCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"BANK_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta01","116","60","1019","70",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid darkgray, 0px none");
            this.addChild(obj.name, obj);

            obj = new Static("btn_empList","126","70","71","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사원목록");
            obj.set_font("16px/normal \"Gulim\"");
            obj.set_color("dodgerblue");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","116","6","200","46",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("인사관리시스템");
            obj.set_font("28px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","125","121","55","53",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("성명");
            obj.set_font("16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_00","372","121","76","53",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("주민번호");
            obj.set_font("16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Name","123","167","188","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_displaynulltext("성명");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_RegNo","370","167","201","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_displaynulltext("주민번호");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01","127","191","55","53",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("주소");
            obj.set_font("16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Address","125","235","448","100",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_displaynulltext("주소");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_02","133","328","55","53",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("입사일");
            obj.set_font("16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_02_00","286","327","55","53",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("부서명");
            obj.set_font("16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_02_01","447","326","55","53",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("퇴사일");
            obj.set_font("16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dptName","286","377","128","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("dpt_NameCombo");
            obj.set_codecolumn("DEPARTMENT_ID");
            obj.set_datacolumn("DEPARTMENT_NAME");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_hireDate","124","377","134","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_leaveDate","444","377","134","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_02_02","129","414","81","53",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("급여은행");
            obj.set_font("16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_02_02_00","289","414","81","53",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("급여계좌");
            obj.set_font("16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_bankName","127","463","128","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_codecolumn("BANK_ID");
            obj.set_datacolumn("BANK_NAME");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("bank_NameCombo");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Name00","290","462","288","41",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_displaynulltext("급여계좌");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_02_02_00_00","128","495","81","53",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("전화번호");
            obj.set_font("16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Name00_00","128","543","449","41",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_displaynulltext("전화번호");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Name00_00_00","128","622","449","41",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_displaynulltext("Email");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_02_02_00_00_00","129","575","81","53",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Email");
            obj.set_font("16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","129","679","68","32",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("저장");
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
        this.registerScript("OB_001_01.xfdl", function() {

        this.OB_001_01_onload = function(obj,e)
        {
        	//alert("onload 함수 실행");

        	//OB_001.xfdl이 화면에 로드될 때 검색 조건의 콤보박스를 초기화 시켜준다.
        	//서버에 요청을 하기 전에 서버로 전달해줘야할 인자값은 뭐가 있을지 생각한다.

        	// 부서명
        	this.fn_setDeptNmCbo();

        	// 은행
        	this.fn_setBankNmCbo();
        };

        this.btn_empList_onclick = function(obj,e)
        {
        	alert("사원 목록 실행");
        };

        this.btn00_onclick = function(obj,e)
        {
        	alert("직원 정보 저장");
        };

        this.cbo_dptName_onitemchanged = function(obj,e)
        {

        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.OB_001_01_onload,this);
            this.sta01.addEventHandler("onclick",this.sta01_onclick,this);
            this.btn_empList.addEventHandler("onclick",this.btn_empList_onclick,this);
            this.sta02_00.addEventHandler("onclick",this.sta02_00_onclick,this);
            this.edt_Name.addEventHandler("onchanged",this.edt_Name_onchanged,this);
            this.edt_RegNo.addEventHandler("onchanged",this.edt_Name_onchanged,this);
            this.edt_Address.addEventHandler("onchanged",this.edt_Name_onchanged,this);
            this.sta02_02_00.addEventHandler("onclick",this.sta02_02_00_onclick,this);
            this.cbo_dptName.addEventHandler("onitemchanged",this.cbo_dptName_onitemchanged,this);
            this.cal_hireDate.addEventHandler("onchanged",this.cal00_onchanged,this);
            this.cal_leaveDate.addEventHandler("onchanged",this.cal00_onchanged,this);
            this.cbo_bankName.addEventHandler("onitemchanged",this.cbo_bankName_onitemchanged,this);
            this.edt_Name00.addEventHandler("onchanged",this.edt_Name_onchanged,this);
            this.edt_Name00_00.addEventHandler("onchanged",this.edt_Name_onchanged,this);
            this.edt_Name00_00_00.addEventHandler("onchanged",this.edt_Name_onchanged,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("OB_001_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
