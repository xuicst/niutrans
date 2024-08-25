(function (window, undefined) {
    window.Asc.plugin.init = function () {
        this.callCommand(function() {
            var oDocument = Api.GetDocument();
            var oParagraph = Api.CreateParagraph();
            oParagraph.AddText("欢迎使用NiuTrans翻译!");
            oDocument.InsertContent([oParagraph]);
        }, true);
    };
    window.Asc.plugin.button = function (id) {
    };
})(window, undefined);