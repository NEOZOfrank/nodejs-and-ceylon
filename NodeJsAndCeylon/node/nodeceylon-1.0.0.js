(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/1.0.0"],"$mod-name":"nodeceylon","$mod-version":"1.0.0","nodeceylon":{"$pkg-shared":"1","run":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"mthd","$an":{"shared":[],"doc":["Run the module `nodeceylon`."]},"$nm":"run"}},"$mod-bin":"6.0"};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl4=require('./ceylon/language/1.0.0/ceylon.language-1.0.0');
$$$cl4.$addmod$($$$cl4,'ceylon.language/1.0.0');
exports.$pkg$ans$nodeceylon=function(){return[$$$cl4.shared()];};
exports.$mod$ans$=[];

//MethodDef run at run.ceylon (1:0-4:0)
function run(){
    return $$$cl4.String("Ceylon!",7);
}
exports.run=run;
run.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl4.String},$ps:[],$an:function(){return[$$$cl4.doc($$$cl4.String("Run the module `nodeceylon`.",28)),$$$cl4.shared()];},d:['nodeceylon','run']};};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
