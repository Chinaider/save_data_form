
/**!
 * Plugin SaveDataForm
 * @author Alexandre Chinaider <chinaider_ale@live.com>
 * @version 1.0
 *
 * Date: 2017-02-17
 */
var SaveDataForm = (function () {
    /**
    *
    * @return SaveDataForm
    */
    function SaveDataForm() {
        return this;
    }
    /**
    *
    * @return Void Start capture and fill in form data
    */
    SaveDataForm.prototype.init = function (config) {
        this._config = config;
        this._dataFilds = this._getLocalStorange();
        this._addActionSetContent();
        this._populateData();
    };
    /**
    *
    *@return void Capture form field data
    */
    SaveDataForm.prototype._addActionSetContent = function () {
        var content = this._getLocalStorange();
        var _class = this;
        $.each(this._config.fields, function () {
            $(this.type + "[name=" + this.name + "]").blur(function () {
                var value = $(this).val();
                var name = $(this).attr('name');
                _class._dataFilds[name] = (value.length > 0) ? value : content[name];
                _class._setContent(btoa(JSON.stringify(_class._dataFilds)));
            });
        });
    };
    /**
    *
    *@return Void Populate the form fields
    */
    SaveDataForm.prototype._populateData = function () {
        var content = this._getLocalStorange();
        if (content.length > 0) {
            $.each(this._config.fields, function () {
                var field = $(this.type + "[name=" + this.name + "]");
                field.val(content[this.name]);
            });
        }
    };
    /**
    *
    *@return Json Returns the captured data
    */
    SaveDataForm.prototype.getData = function () {
        return this._getLocalStorange();
    };
    /**
    *
    * @return Void Erases all saved form data
    */
    SaveDataForm.prototype.clearDataForm = function () {
        window.localStorage.removeItem("content");
    };
    /**
    *
    * @return Void Create data in localStorage
    */
    SaveDataForm.prototype._setContent = function (content) {
        window.localStorage.setItem('content', content);
    };
    /**
    *
    * @return Json Returns the data set in the localStorage
    */
    SaveDataForm.prototype._getLocalStorange = function () {
        return (window.localStorage.getItem('content')) ? JSON.parse(atob(window.localStorage.getItem('content'))) : {};
    };
    return SaveDataForm;
}());
