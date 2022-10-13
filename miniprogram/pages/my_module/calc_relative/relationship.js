var f, s, d = require("../../../@babel/runtime/helpers/interopRequireDefault"), l = d(require("../../../@babel/runtime/helpers/defineProperty")), e = d(require("../../../@babel/runtime/helpers/typeof"));

f = "undefined" != typeof window ? window : void 0, s = function() {
    var f, s = [ {
        exp: /^(.+)&o([^#]+)&l/g,
        str: "$1$2"
    }, {
        exp: /^(.+)&l([^#]+)&o/g,
        str: "$1$2"
    }, {
        exp: /(,[ds],(.+),[ds])&[ol]/g,
        str: "$1"
    }, {
        exp: /(,o[sb])+(,o[sb])/,
        str: "$2"
    }, {
        exp: /(,l[sb])+(,l[sb])/,
        str: "$2"
    }, {
        exp: /^(.*)(,[fh1])(,[olx][sb])+,[olx]b(.*)$/,
        str: "$1$2,xb$4#$1$2$4"
    }, {
        exp: /^(.*)(,[mw0])(,[olx][sb])+,[olx]s(.*)$/,
        str: "$1$2,xs$4#$1$2$4"
    }, {
        exp: /(,[fh1])(,[olx][sb])+,[olx]s/g,
        str: "$1,xs"
    }, {
        exp: /(,[mw0])(,[olx][sb])+,[olx]b/g,
        str: "$1,xb"
    }, {
        exp: /^,[olx][sb],[olx]b(.+)?$/,
        str: "$1#,xb$1"
    }, {
        exp: /^,[olx][sb],[olx]s(.+)?$/,
        str: "$1#,xs$1"
    }, {
        exp: /^,x([sb])$/,
        str: ",o$1#,l$1"
    }, {
        exp: /m,h/g,
        str: "f"
    }, {
        exp: /f,w/g,
        str: "m"
    }, {
        exp: /,[xol][sb](,[mf])/g,
        str: "$1"
    }, {
        exp: /,[mf],d&([ol])/,
        str: ",$1s"
    }, {
        exp: /,[mf],s&([ol])/,
        str: ",$1b"
    }, {
        exp: /^(.*)(,[fh1]|[xol]b),[mf],s(.*)$/,
        str: "$1$2,xb$3#$1$2$3"
    }, {
        exp: /^(.*)(,[mw0]|[xol]s),[mf],d(.*)$/,
        str: "$1$2,xs$3#$1$2$3"
    }, {
        exp: /(,[mw0]|[xol]s),[mf],s/,
        str: "$1,xb"
    }, {
        exp: /(,[fh1]|[xol]b),[mf],d/,
        str: "$1,xs"
    }, {
        exp: /^,[mf],s(.+)?$/,
        str: ",1$1#,xb$1"
    }, {
        exp: /^,[mf],d(.+)?$/,
        str: ",0$1#,xs$1"
    }, {
        exp: /,[ds]&o,ob/g,
        str: ",s&o"
    }, {
        exp: /,[ds]&o,os/g,
        str: ",d&o"
    }, {
        exp: /,[ds]&l,lb/g,
        str: ",s&l"
    }, {
        exp: /,[ds]&l,ls/g,
        str: ",d&l"
    }, {
        exp: /,[ds](&[ol])?,[olx]s/g,
        str: ",d"
    }, {
        exp: /,[ds](&[ol])?,[olx]b/g,
        str: ",s"
    }, {
        exp: /(,[mwd0](&[ol])?|[olx]s),[ds](&[ol])?,m/g,
        str: "$1"
    }, {
        exp: /(,[mwd0](&[ol])?|[olx]s),[ds](&[ol])?,f/g,
        str: "$1,h"
    }, {
        exp: /(,[fhs1](&[ol])?|[olx]b),[ds](&[ol])?,f/g,
        str: "$1"
    }, {
        exp: /(,[fhs1](&[ol])?|[olx]b),[ds](&[ol])?,m/g,
        str: "$1,w"
    }, {
        exp: /^,[ds],m(.+)?$/,
        str: "$1#,w$1"
    }, {
        exp: /^,[ds],f(.+)?$/,
        str: "$1#,h$1"
    }, {
        exp: /,[wh](,[ds])/g,
        str: "$1"
    }, {
        exp: /,w,h|,h,w/g,
        str: ""
    }, {
        exp: /(.+)?\[(.+)\|(.+)\](.+)?/g,
        str: "$1$2$4#$1$3$4"
    } ], d = (f = {
        "": [ "自己", "我" ],
        "[f|m]": [ "父母", "爹娘", "爹妈", "爸妈", "双亲", "二老", "高堂" ],
        "[h,f|h,m]": [ "公婆" ],
        "[xb|xs]": [ "兄弟姐妹" ],
        "[s|d]": [ "子女", "儿女", "小孩", "孩子" ],
        f: [ "爸爸", "父亲", "阿爸", "老爸", "老窦", "爹", "爹爹", "爹地", "爹啲", "老爹", "大大", "老爷子", "老头子" ],
        "f,f": [ "爷爷", "祖父", "阿爷", "奶爷", "阿公", "老爷" ],
        "f,f,f": [ "曾祖父", "太爷", "太爷爷", "太公", "祖公", "祖奶爷", "太老爷" ],
        "f,f,f,f": [ "高祖父", "老太爷", "祖太爷", "祖太爷爷", "祖太公" ],
        "f,f,f,f,f": [ "天祖父" ],
        "f,f,f,f,f,f": [ "烈祖父" ],
        "f,f,f,f,f,m": [ "烈祖母" ],
        "f,f,f,f,f,f,f": [ "太祖父" ],
        "f,f,f,f,f,f,m": [ "太祖母" ],
        "f,f,f,f,f,f,f,f": [ "远祖父" ],
        "f,f,f,f,f,f,f,m": [ "远祖母" ],
        "f,f,f,f,f,f,f,f,f": [ "鼻祖父" ],
        "f,f,f,f,f,f,f,f,m": [ "鼻祖母" ],
        "f,f,f,f,m": [ "天祖母" ],
        "f,f,f,f,ob": [ "伯高祖父" ],
        "f,f,f,f,ob,w": [ "伯高祖母" ],
        "f,f,f,f,lb": [ "叔高祖父" ],
        "f,f,f,f,lb,w": [ "叔高祖母" ],
        "f,f,f,f,xs": [ "姑高祖母" ],
        "f,f,f,f,xs,h": [ "姑高祖父" ],
        "f,f,f,m": [ "高祖母", "老太太", "祖太太", "祖太奶", "祖太奶奶", "祖太婆" ],
        "f,f,f,m,xs": [ "姨高祖母" ],
        "f,f,f,m,xs,h": [ "姨高祖父" ],
        "f,f,f,m,xb": [ "舅高祖父" ],
        "f,f,f,m,xb,w": [ "舅高祖母" ],
        "f,f,f,ob": [ "曾伯祖父", "曾伯父", "伯曾祖父", "伯公太", "伯太爷", "伯公老爷" ],
        "f,f,f,ob,w": [ "曾伯祖母", "曾伯母", "伯曾祖母", "伯婆太", "伯太太", "伯婆奶奶" ],
        "f,f,f,lb": [ "曾叔祖父", "曾叔父", "叔曾祖父", "叔公太", "叔太爷", "叔公老爷" ],
        "f,f,f,lb,w": [ "曾叔祖母", "曾叔母", "叔曾祖母", "叔婆太", "叔太太", "叔婆奶奶" ],
        "f,f,f,xb,s&o": [ "堂伯祖父", "族伯祖父" ],
        "f,f,f,xb,s&o,w": [ "堂伯祖母", "族伯祖母" ],
        "f,f,f,xb,s&l": [ "堂叔祖父", "族叔祖父" ],
        "f,f,f,xb,s&l,w": [ "堂叔祖母", "族叔祖母" ],
        "f,f,f,xb,s,s&o": [ "从伯父", "族伯父" ],
        "f,f,f,xb,s,s&o,w": [ "从伯母", "族伯母" ],
        "f,f,f,xb,s,s&l": [ "从叔父", "族叔父" ],
        "f,f,f,xb,s,s&l,w": [ "从叔母", "族叔母" ],
        "f,f,f,xb,s,s,s&o": [ "族兄" ],
        "f,f,f,xb,s,s,s&l": [ "族弟" ],
        "f,f,f,xb,d": [ "堂姑祖母" ],
        "f,f,f,xb,d,h": [ "堂姑祖父" ],
        "f,f,f,xs": [ "曾祖姑母", "姑曾祖母", "太姑婆", "姑婆太", "姑太太", "曾祖姑", "姑婆奶奶" ],
        "f,f,f,xs,h": [ "曾祖姑丈", "姑曾祖父", "太姑丈公", "姑丈公太", "姑太爷", "姑公老爷" ],
        "f,f,f,xs,s&o": [ "表伯祖父" ],
        "f,f,f,xs,s&o,w": [ "表伯祖母" ],
        "f,f,f,xs,s&l": [ "表叔祖父" ],
        "f,f,f,xs,s&l,w": [ "表叔祖母" ],
        "f,f,f,xs,d": [ "表姑祖母", "族祖姑" ],
        "f,f,f,xs,d,h": [ "表姑祖父" ],
        "f,f,m": [ "曾祖母", "太奶奶", "太婆", "祖婆", "祖奶奶" ],
        "f,f,m,f": [ "高外祖父", "祖太姥爷", "祖太公" ],
        "f,f,m,m": [ "高外祖母", "祖太姥姥", "祖太姥娘", "祖太婆" ],
        "f,f,m,xb": [ "舅曾祖父", "太舅公", "太舅爷", "舅太爷", "舅太爷爷", "舅公老爷" ],
        "f,f,m,xb,w": [ "舅曾祖母", "太舅婆", "舅太太", "舅太奶奶", "舅婆奶奶" ],
        "f,f,m,xb,s&o": [ "表伯祖父" ],
        "f,f,m,xb,s&o,w": [ "表伯祖母" ],
        "f,f,m,xb,s&l": [ "表叔祖父" ],
        "f,f,m,xb,s&l,w": [ "表叔祖母" ],
        "f,f,m,xb,d": [ "表姑祖母" ],
        "f,f,m,xb,d,h": [ "表姑祖父" ],
        "f,f,m,xs": [ "姨曾祖母", "太姨奶", "姨太太", "曾姨奶奶", "姨太奶奶", "姨婆奶奶" ],
        "f,f,m,xs,h": [ "姨曾祖父", "太姨爷", "姨太爷", "姨太爷爷" ],
        "f,f,m,xs,s&o": [ "表伯祖父" ],
        "f,f,m,xs,s&o,w": [ "表伯祖母" ],
        "f,f,m,xs,s&l": [ "表叔祖父" ],
        "f,f,m,xs,s&l,w": [ "表叔祖母" ],
        "f,f,m,xs,d": [ "表姑祖母" ],
        "f,f,m,xs,d,h": [ "表姑祖父" ],
        "f,f,xb": [ "堂祖父", "x爷爷" ],
        "f,f,xb,w": [ "堂祖母" ],
        "f,f,xb,s&o": [ "堂伯", "堂伯父", "从父伯父" ],
        "f,f,xb,s&o,w": [ "堂伯母", "从父伯母" ],
        "f,f,xb,s&l": [ "堂叔", "从父叔父" ],
        "f,f,xb,s,w": [ "堂婶", "堂叔母", "堂婶母", "从父叔母" ],
        "f,f,xb,s,s&o": [ "从兄", "再从兄", "从兄弟" ],
        "f,f,xb,s,s&o,w": [ "从嫂", "再从嫂" ],
        "f,f,xb,s,s&l": [ "从弟", "再从弟", "从兄弟" ],
        "f,f,xb,s,s&l,w": [ "从弟妹", "再从弟妹", "再从兄" ],
        "f,f,xb,s,s,s": [ "从侄", "再从侄", "从侄子" ],
        "f,f,xb,s,s,s,w": [ "从侄媳妇", "再从侄妇" ],
        "f,f,xb,s,s,s,s": [ "从侄孙" ],
        "f,f,xb,s,s,s,d": [ "从侄孙女" ],
        "f,f,xb,s,s,d": [ "从侄女", "再从侄女" ],
        "f,f,xb,s,s,d,h": [ "从侄女婿", "再从侄女婿", "姻家侄婿" ],
        "f,f,xb,s,d&o": [ "从姐", "再从姐", "从姐妹" ],
        "f,f,xb,s,d&o,h": [ "从姐夫", "再从姐夫" ],
        "f,f,xb,s,d&l": [ "从妹", "再从妹", "从姐妹" ],
        "f,f,xb,s,d&l,h": [ "从妹夫", "再妹夫" ],
        "f,f,xb,d": [ "堂姑", "堂姑妈", "堂姑母", "从父姑母" ],
        "f,f,xb,d,h": [ "堂姑丈", "堂姑爸", "堂姑父", "从父姑父" ],
        "f,f,xb,d,s&o": [ "堂姑表兄" ],
        "f,f,xb,d,s&l": [ "堂姑表弟" ],
        "f,f,xb,d,d&o": [ "堂姑表姐" ],
        "f,f,xb,d,d&l": [ "堂姑表妹" ],
        "f,f,ob": [ "伯祖父", "伯老爷", "伯公", "大爷爷", "大爷", "堂祖父", "伯爷爷" ],
        "f,f,ob,w": [ "伯祖母", "伯奶奶", "伯婆", "大奶奶", "堂祖母", "姆婆" ],
        "f,f,lb": [ "叔祖父", "叔老爷", "叔公", "小爷爷", "堂祖父", "叔爷爷", "叔奶爷" ],
        "f,f,lb,w": [ "叔祖母", "叔奶奶", "叔婆", "小奶奶", "堂祖母", "婶婆" ],
        "f,f,xs": [ "姑奶奶", "姑内祖母", "祖姑母", "姑祖母", "姑婆", "祖姑" ],
        "f,f,xs,h": [ "姑爷爷", "姑内祖父", "祖姑父", "姑祖父", "姑老爷", "姑公", "姑奶爷", "姑丈公" ],
        "f,f,xs,s&o": [ "姑表伯父", "表伯父", "表伯" ],
        "f,f,xs,s&o,w": [ "姑表伯母", "表伯母" ],
        "f,f,xs,s&l": [ "姑表叔父", "表叔父", "表叔爸", "表叔" ],
        "f,f,xs,s&l,w": [ "姑表叔母", "表叔母", "表叔妈", "表婶" ],
        "f,f,xs,s,s": [ "从表兄弟" ],
        "f,f,xs,s,d": [ "从表姐妹" ],
        "f,f,xs,d": [ "姑表姑母", "表姑妈", "表姑母", "表姑姑", "表姑" ],
        "f,f,xs,d,h": [ "姑表姑父", "表姑爸", "表姑父", "表姑丈" ],
        "f,f,xs,d,s": [ "从表兄弟" ],
        "f,f,xs,d,d": [ "从表姐妹" ],
        "f,m": [ "奶奶", "祖母", "阿嫲", "阿嬷", "嫲嫲" ],
        "f,m,f": [ "曾外祖父", "外太公", "太姥爷" ],
        "f,m,f,f": [ "曾外曾祖父", "祖太爷", "祖太爷爷", "祖太公" ],
        "f,m,f,m": [ "曾外曾祖母", "祖太太", "祖太奶奶", "祖太婆" ],
        "f,m,f,xb,s": [ "堂舅祖父" ],
        "f,m,f,xb,s,w": [ "堂舅祖母" ],
        "f,m,f,xb,d": [ "堂姨祖母" ],
        "f,m,f,xb,d,h": [ "堂姨祖父" ],
        "f,m,f,ob": [ "伯曾外祖父", "伯太姥爷", "伯太奶爷" ],
        "f,m,f,ob,w": [ "伯曾外祖母", "伯太姥姥", "伯太奶奶" ],
        "f,m,f,lb": [ "叔曾外祖父", "叔太姥爷", "叔太奶爷" ],
        "f,m,f,lb,w": [ "叔曾外祖母", "叔太姥姥", "叔太奶奶" ],
        "f,m,f,xs": [ "姑曾外祖母", "姑太姥姥", "姑太奶奶" ],
        "f,m,f,xs,h": [ "姑曾外祖父", "姑太姥爷", "姑太奶爷", "姑太爷爷" ],
        "f,m,f,xs,s": [ "表舅祖父" ],
        "f,m,f,xs,s,w": [ "表舅祖母" ],
        "f,m,m": [ "曾外祖母", "外太婆", "太姥姥" ],
        "f,m,m,f": [ "曾外曾外祖父", "祖太姥爷", "祖太公" ],
        "f,m,m,m": [ "曾外曾外祖母", "祖太姥姥", "祖太姥娘", "祖太婆" ],
        "f,m,m,xb": [ "舅曾外祖父", "舅太姥爷", "舅太奶爷" ],
        "f,m,m,xb,w": [ "舅曾外祖母", "舅太姥姥", "舅太奶奶" ],
        "f,m,m,xb,s": [ "表舅祖父" ],
        "f,m,m,xb,s,w": [ "表舅祖母" ],
        "f,m,m,xb,d": [ "表姨祖母" ],
        "f,m,m,xb,d,h": [ "表姨祖父" ],
        "f,m,m,xs": [ "姨曾外祖母", "姨太姥姥", "姨太奶奶" ],
        "f,m,m,xs,h": [ "姨曾外祖父", "姨太姥爷", "姨太奶爷" ],
        "f,m,m,xs,d": [ "表姨祖母" ],
        "f,m,m,xs,d,h": [ "表姨祖父" ],
        "f,m,m,xs,s": [ "表舅祖父" ],
        "f,m,m,xs,s,w": [ "表舅祖母" ]
    }, (0, l.default)(f, "f,m,m,xs,d", [ "表姨祖母" ]), (0, l.default)(f, "f,m,m,xs,d,h", [ "表姨祖父" ]), 
    (0, l.default)(f, "f,m,xb", [ "舅公", "舅祖父", "舅老爷", "舅爷爷", "舅爷", "舅祖", "舅奶爷", "太舅父" ]), 
    (0, l.default)(f, "f,m,xb,w", [ "舅婆", "舅祖母", "舅奶奶", "妗婆", "太舅母" ]), (0, l.default)(f, "f,m,xb,s&o", [ "舅表伯父", "表伯父", "表伯" ]), 
    (0, l.default)(f, "f,m,xb,s&o,w", [ "舅表伯母", "表伯母" ]), (0, l.default)(f, "f,m,xb,s&l", [ "舅表叔父", "表叔父", "表叔爸", "表叔" ]), 
    (0, l.default)(f, "f,m,xb,s&l,w", [ "舅表叔母", "表叔母", "表叔妈", "表婶" ]), (0, l.default)(f, "f,m,xb,s,s", [ "从表兄弟" ]), 
    (0, l.default)(f, "f,m,xb,s,d", [ "从表姐妹" ]), (0, l.default)(f, "f,m,xb,d", [ "舅表姑母", "表姑妈", "表姑母", "表姑姑", "表姑" ]), 
    (0, l.default)(f, "f,m,xb,d,h", [ "舅表姑父", "表姑爸", "表姑父", "表姑丈" ]), (0, l.default)(f, "f,m,xb,d,s", [ "从表兄弟" ]), 
    (0, l.default)(f, "f,m,xb,d,d", [ "从表姐妹" ]), (0, l.default)(f, "f,m,xs", [ "姨奶奶", "祖姨母", "姨祖母", "姨婆", "姨奶" ]), 
    (0, l.default)(f, "f,m,xs,h", [ "姨爷爷", "祖姨父", "姨祖父", "姨公", "姨丈公", "姨爷", "姨老爷", "姨奶爷" ]), 
    (0, l.default)(f, "f,m,xs,s&o", [ "姨表伯父", "表伯", "表伯父", "从母伯父" ]), (0, l.default)(f, "f,m,xs,s&o,w", [ "姨表伯母", "表伯母", "从母伯母" ]), 
    (0, l.default)(f, "f,m,xs,s&l", [ "姨表叔父", "表叔父", "表叔爸", "表叔", "从母叔父" ]), (0, l.default)(f, "f,m,xs,s&l,w", [ "姨表叔母", "表叔母", "表叔妈", "表婶", "从母叔母" ]), 
    (0, l.default)(f, "f,m,xs,s,s", [ "从表兄弟" ]), (0, l.default)(f, "f,m,xs,s,d", [ "从表姐妹" ]), 
    (0, l.default)(f, "f,m,xs,d", [ "姨表姑母", "表姑妈", "表姑母", "表姑姑", "表姑", "从母姑母" ]), (0, 
    l.default)(f, "f,m,xs,d,h", [ "姨表姑父", "表姑爸", "表姑父", "表姑丈", "从母姑父" ]), (0, l.default)(f, "f,m,xs,d,s", [ "从表兄弟" ]), 
    (0, l.default)(f, "f,m,xs,d,d", [ "从表姐妹" ]), (0, l.default)(f, "f,xb,w,f", [ "姻伯公" ]), 
    (0, l.default)(f, "f,xb,w,m", [ "姻伯婆" ]), (0, l.default)(f, "f,xb,w,xb", [ "姻世伯" ]), 
    (0, l.default)(f, "f,xb,w,xb,w", [ "姻伯母" ]), (0, l.default)(f, "f,xb,w,xs", [ "姻伯母" ]), 
    (0, l.default)(f, "f,xb,w,xs,h", [ "姻世伯" ]), (0, l.default)(f, "f,xb,s&o", [ "堂哥", "堂兄", "堂阿哥", "叔伯兄弟" ]), 
    (0, l.default)(f, "f,xb,s&o,w", [ "堂嫂" ]), (0, l.default)(f, "f,xb,s&l", [ "堂弟", "堂阿弟", "叔伯兄弟" ]), 
    (0, l.default)(f, "f,xb,s&l,w", [ "堂弟媳", "堂弟妹" ]), (0, l.default)(f, "f,xb,s,s", [ "堂侄", "堂侄子", "叔伯侄子" ]), 
    (0, l.default)(f, "f,xb,s,s,w", [ "堂侄媳妇" ]), (0, l.default)(f, "f,xb,s,s,s", [ "堂侄孙" ]), 
    (0, l.default)(f, "f,xb,s,s,s,w", [ "堂侄孙媳妇" ]), (0, l.default)(f, "f,xb,s,s,d", [ "堂侄孙女" ]), 
    (0, l.default)(f, "f,xb,s,s,d,h", [ "堂侄孙女婿" ]), (0, l.default)(f, "f,xb,s,d", [ "堂侄女" ]), 
    (0, l.default)(f, "f,xb,s,d,h", [ "堂侄女婿", "姻家侄" ]), (0, l.default)(f, "f,xb,d&o", [ "堂姐", "堂阿姐", "叔伯姐妹" ]), 
    (0, l.default)(f, "f,xb,d&o,h", [ "堂姐夫" ]), (0, l.default)(f, "f,xb,d&l", [ "堂妹", "堂阿妹", "叔伯姐妹" ]), 
    (0, l.default)(f, "f,xb,d&l,h", [ "堂妹夫" ]), (0, l.default)(f, "f,xb,d,s", [ "堂外甥" ]), 
    (0, l.default)(f, "f,xb,d,d", [ "堂外甥女" ]), (0, l.default)(f, "f,ob", [ "伯父", "伯伯", "阿伯", "大伯", "x伯" ]), 
    (0, l.default)(f, "f,ob,w", [ "伯母", "大娘", "大妈", "x妈" ]), (0, l.default)(f, "f,lb", [ "叔叔", "叔父", "阿叔", "叔爸", "叔爹", "仲父", "x叔", "叔" ]), 
    (0, l.default)(f, "f,lb,w", [ "婶婶", "婶母", "阿婶", "家婶", "叔母", "叔妈", "叔娘", "季母", "x婶", "婶" ]), 
    (0, l.default)(f, "f,xs", [ "姑妈", "姑姑", "姑娘", "大姑妈", "x姑妈", "姑" ]), (0, l.default)(f, "f,xs,h", [ "姑丈", "姑父", "姑爸", "姑夫" ]), 
    (0, l.default)(f, "f,xs,h,f", [ "姻伯公" ]), (0, l.default)(f, "f,xs,h,m", [ "姻伯婆" ]), 
    (0, l.default)(f, "f,xs,h,xb", [ "姻世伯" ]), (0, l.default)(f, "f,xs,h,xb,w", [ "姻伯母" ]), 
    (0, l.default)(f, "f,xs,h,xs", [ "姻伯母" ]), (0, l.default)(f, "f,xs,h,xs,h", [ "姻世伯" ]), 
    (0, l.default)(f, "f,xs,s&o", [ "姑表哥", "表哥" ]), (0, l.default)(f, "f,xs,s&o,w", [ "姑表嫂", "表嫂" ]), 
    (0, l.default)(f, "f,xs,s&l", [ "姑表弟", "表弟" ]), (0, l.default)(f, "f,xs,s&l,w", [ "姑表弟媳", "表弟媳", "表弟妹" ]), 
    (0, l.default)(f, "f,xs,s,s", [ "表侄", "表侄子", "姑表侄男", "表侄男" ]), (0, l.default)(f, "f,xs,s,s,s", [ "表侄孙" ]), 
    (0, l.default)(f, "f,xs,s,s,s,w", [ "表侄孙媳妇" ]), (0, l.default)(f, "f,xs,s,s,d", [ "表侄孙女" ]), 
    (0, l.default)(f, "f,xs,s,s,d,h", [ "表侄孙女婿" ]), (0, l.default)(f, "f,xs,s,d", [ "表侄女", "姑表侄女" ]), 
    (0, l.default)(f, "f,xs,s,d,s", [ "外表侄孙" ]), (0, l.default)(f, "f,xs,s,d,s,w", [ "外表侄孙媳妇" ]), 
    (0, l.default)(f, "f,xs,s,d,d", [ "外表侄孙女" ]), (0, l.default)(f, "f,xs,s,d,d,h", [ "外表侄孙女婿" ]), 
    (0, l.default)(f, "f,xs,d&o", [ "姑表姐", "表姐" ]), (0, l.default)(f, "f,xs,d&o,h", [ "姑表姐夫", "表姐夫", "表姐丈" ]), 
    (0, l.default)(f, "f,xs,d&l", [ "姑表妹", "表妹" ]), (0, l.default)(f, "f,xs,d&l,h", [ "姑表妹夫", "表妹夫" ]), 
    (0, l.default)(f, "f,xs,d,s", [ "表外甥", "姑表甥男", "表甥男" ]), (0, l.default)(f, "f,xs,d,d", [ "表外甥女", "姑表甥女", "表甥女" ]), 
    (0, l.default)(f, "f,os", [ "姑妈", "姑母" ]), (0, l.default)(f, "f,ls", [ "姑妈", "姑姐" ]), 
    (0, l.default)(f, "m", [ "妈妈", "母亲", "老妈", "阿妈", "老母", "老妈子", "娘", "娘亲", "妈咪" ]), 
    (0, l.default)(f, "m,f", [ "外公", "外祖父", "姥爷" ]), (0, l.default)(f, "m,f,f", [ "外曾祖父", "外太祖父", "外太公", "外太爷爷", "太外祖父" ]), 
    (0, l.default)(f, "m,f,f,f", [ "外高祖父", "祖太爷", "祖太爷爷", "祖太公" ]), (0, l.default)(f, "m,f,f,m", [ "外高祖母", "祖太太", "祖太奶奶", "祖太婆" ]), 
    (0, l.default)(f, "m,f,f,xb,s&o", [ "堂伯外祖父" ]), (0, l.default)(f, "m,f,f,xb,s&o,w", [ "堂伯外祖母" ]), 
    (0, l.default)(f, "m,f,f,xb,s&l", [ "堂叔外祖父" ]), (0, l.default)(f, "m,f,f,xb,s&l,w", [ "堂叔外祖母" ]), 
    (0, l.default)(f, "m,f,f,xb,d", [ "堂姑外祖母" ]), (0, l.default)(f, "m,f,f,xb,d,h", [ "堂姑外祖父" ]), 
    (0, l.default)(f, "m,f,f,ob", [ "伯外曾祖父", "外太伯公", "伯太姥爷", "伯太奶爷", "伯太爷爷" ]), (0, 
    l.default)(f, "m,f,f,ob,w", [ "伯外曾祖母", "外太伯母", "伯太姥姥", "伯太奶奶" ]), (0, l.default)(f, "m,f,f,lb", [ "叔外曾祖父", "外太叔公", "叔太姥爷", "叔太奶爷", "叔太爷爷" ]), 
    (0, l.default)(f, "m,f,f,lb,w", [ "叔外曾祖母", "外太叔母", "叔太姥姥", "叔太奶奶" ]), (0, l.default)(f, "m,f,f,xs", [ "姑外曾祖母", "外太姑婆", "姑太姥姥", "姑太奶奶" ]), 
    (0, l.default)(f, "m,f,f,xs,h", [ "姑外曾祖父", "外太姑丈公", "姑太姥爷", "姑太奶爷", "姑太爷爷" ]), (0, 
    l.default)(f, "m,f,f,xs,s&o", [ "表伯外祖父", "外表伯祖父" ]), (0, l.default)(f, "m,f,f,xs,s&o,w", [ "表伯外祖母", "外表伯祖母" ]), 
    (0, l.default)(f, "m,f,f,xs,s&l", [ "表叔外祖父", "外表叔祖父" ]), (0, l.default)(f, "m,f,f,xs,s&l,w", [ "表叔外祖母", "外表叔祖母" ]), 
    (0, l.default)(f, "m,f,f,xs,d", [ "表姑外祖母" ]), (0, l.default)(f, "m,f,f,xs,d,h", [ "表姑外祖父" ]), 
    (0, l.default)(f, "m,f,m", [ "外曾祖母", "外太祖母", "太外祖母", "外太奶奶", "外太婆" ]), (0, l.default)(f, "m,f,m,f", [ "外高外祖父", "祖太姥爷", "祖太公" ]), 
    (0, l.default)(f, "m,f,m,m", [ "外高外祖母", "祖太姥姥", "祖太姥娘", "祖太婆" ]), (0, l.default)(f, "m,f,m,xb", [ "舅外曾祖父", "外太舅公", "舅太姥爷", "舅太奶爷" ]), 
    (0, l.default)(f, "m,f,m,xb,w", [ "舅外曾祖母", "外太舅母", "舅太姥姥", "舅太奶奶", "外太舅婆" ]), (0, 
    l.default)(f, "m,f,m,xb,s&o", [ "表伯外祖父", "外表伯祖父" ]), (0, l.default)(f, "m,f,m,xb,s&o,w", [ "表伯外祖母", "外表伯祖母" ]), 
    (0, l.default)(f, "m,f,m,xb,s&l", [ "表叔外祖父", "外表叔祖父" ]), (0, l.default)(f, "m,f,m,xb,s&l,w", [ "表叔外祖母", "外表叔祖母" ]), 
    (0, l.default)(f, "m,f,m,xb,d", [ "表姑外祖母" ]), (0, l.default)(f, "m,f,m,xb,d,h", [ "表姑外祖父" ]), 
    (0, l.default)(f, "m,f,m,xs", [ "姨外曾祖母", "外太姨婆", "姨太姥姥", "姨太奶奶" ]), (0, l.default)(f, "m,f,m,xs,h", [ "姨外曾祖父", "外太姑姨公", "姨太姥爷", "姨太奶爷", "姨太爷爷" ]), 
    (0, l.default)(f, "m,f,m,xs,s&o", [ "表伯外祖父", "外表伯祖父" ]), (0, l.default)(f, "m,f,m,xs,s&o,w", [ "表伯外祖母", "外表伯祖母" ]), 
    (0, l.default)(f, "m,f,m,xs,s&l", [ "表叔外祖父", "外表叔祖父" ]), (0, l.default)(f, "m,f,m,xs,s&l,w", [ "表叔外祖母", "外表叔祖母" ]), 
    (0, l.default)(f, "m,f,m,xs,d", [ "表姑外祖母" ]), (0, l.default)(f, "m,f,m,xs,d,h", [ "表姑外祖父" ]), 
    (0, l.default)(f, "m,f,xb", [ "大姥爷/小姥爷", "x姥爷" ]), (0, l.default)(f, "m,f,xb,s", [ "堂舅", "堂舅爸", "堂舅父", "堂舅舅", "从父舅父" ]), 
    (0, l.default)(f, "m,f,xb,s,w", [ "堂舅妈", "堂舅母", "从父舅母" ]), (0, l.default)(f, "m,f,xb,s,s&o", [ "堂舅表兄" ]), 
    (0, l.default)(f, "m,f,xb,s,s&l", [ "堂舅表弟" ]), (0, l.default)(f, "m,f,xb,s,d&o", [ "堂舅表姐" ]), 
    (0, l.default)(f, "m,f,xb,s,d&l", [ "堂舅表妹" ]), (0, l.default)(f, "m,f,xb,d", [ "堂姨", "堂姨妈", "堂姨母", "从父姨母" ]), 
    (0, l.default)(f, "m,f,xb,d,h", [ "堂姨丈", "堂姨爸", "堂姨父", "从父姨父" ]), (0, l.default)(f, "m,f,xb,d,s&o", [ "堂姨表兄" ]), 
    (0, l.default)(f, "m,f,xb,d,s&l", [ "堂姨表弟" ]), (0, l.default)(f, "m,f,xb,d,d&o", [ "堂姨表姐" ]), 
    (0, l.default)(f, "m,f,xb,d,d&l", [ "堂姨表妹" ]), (0, l.default)(f, "m,f,ob", [ "伯外祖父", "外伯祖父", "伯姥爷", "大姥爷", "外伯祖", "外伯公" ]), 
    (0, l.default)(f, "m,f,ob,w", [ "伯外祖母", "外伯祖母", "伯姥姥", "大姥姥", "外姆婆", "外伯婆" ]), (0, 
    l.default)(f, "m,f,lb", [ "叔外祖父", "外叔祖父", "叔姥爷", "小姥爷", "外叔祖", "叔外祖", "外叔公" ]), 
    (0, l.default)(f, "m,f,lb,w", [ "叔外祖母", "外叔祖母", "叔姥姥", "小姥姥", "外姆婆", "外叔婆" ]), (0, 
    l.default)(f, "m,f,xs", [ "姑姥姥", "姑外祖母", "外姑祖母", "外太姑母", "外姑婆", "外姑母" ]), (0, l.default)(f, "m,f,xs,h", [ "姑姥爷", "姑外祖父", "外姑祖父", "外太姑父", "外姑公", "外姑丈" ]), 
    (0, l.default)(f, "m,f,xs,s", [ "姑表舅父", "姑表舅爸", "表舅父", "表舅爸", "表舅", "表舅舅", "姑表舅舅" ]), 
    (0, l.default)(f, "m,f,xs,s,w", [ "姑表舅母", "姑表舅妈", "表舅母", "表舅妈" ]), (0, l.default)(f, "m,f,xs,s,s", [ "从表兄弟" ]), 
    (0, l.default)(f, "m,f,xs,s,d", [ "从表姐妹" ]), (0, l.default)(f, "m,f,xs,d", [ "姑表姨母", "姑表姨妈", "表姨母", "表姨妈", "表姨", "表阿姨", "姑表姨姨" ]), 
    (0, l.default)(f, "m,f,xs,d,h", [ "姑表姨父", "姑表姨父", "表姨丈", "表姨父" ]), (0, l.default)(f, "m,f,xs,d,s", [ "从表兄弟" ]), 
    (0, l.default)(f, "m,f,xs,d,d", [ "从表姐妹" ]), (0, l.default)(f, "m,m", [ "外婆", "外祖母", "姥姥", "阿婆" ]), 
    (0, l.default)(f, "m,m,f", [ "外曾外祖父", "外太外公", "外太姥爷" ]), (0, l.default)(f, "m,m,f,f", [ "外曾外曾祖父", "祖太爷", "祖太爷爷", "祖太公" ]), 
    (0, l.default)(f, "m,m,f,m", [ "外曾外曾祖母", "祖太太", "祖太奶奶", "祖太婆" ]), (0, l.default)(f, "m,m,f,xb,s", [ "堂舅外祖父" ]), 
    (0, l.default)(f, "m,m,f,xb,s,w", [ "堂舅外祖母" ]), (0, l.default)(f, "m,m,f,xb,d", [ "堂姨外祖母" ]), 
    (0, l.default)(f, "m,m,f,xb,d,h", [ "堂姨外祖父" ]), (0, l.default)(f, "m,m,f,ob", [ "伯外曾外祖父", "伯太姥爷" ]), 
    (0, l.default)(f, "m,m,f,ob,w", [ "伯外曾外祖母", "伯太姥姥" ]), (0, l.default)(f, "m,m,f,lb", [ "叔外曾外祖父", "叔太姥爷" ]), 
    (0, l.default)(f, "m,m,f,lb,w", [ "叔外曾外祖母", "叔太姥姥" ]), (0, l.default)(f, "m,m,f,xs", [ "姑外曾外祖母", "姑太姥姥" ]), 
    (0, l.default)(f, "m,m,f,xs,h", [ "姑外曾外祖父", "姑太姥爷" ]), (0, l.default)(f, "m,m,f,xs,s", [ "表舅外祖父" ]), 
    (0, l.default)(f, "m,m,f,xs,s,w", [ "表舅外祖母" ]), (0, l.default)(f, "m,m,f,xs,d", [ "表姨外祖母" ]), 
    (0, l.default)(f, "m,m,f,xs,d,h", [ "表姨外祖父" ]), (0, l.default)(f, "m,m,m", [ "外曾外祖母", "外太外婆", "外太姥姥" ]), 
    (0, l.default)(f, "m,m,m,f", [ "外曾外曾外祖父", "祖太姥爷", "祖太公" ]), (0, l.default)(f, "m,m,m,m", [ "外曾外曾外祖母", "祖太姥姥", "祖太姥娘", "祖太婆" ]), 
    (0, l.default)(f, "m,m,m,xb", [ "舅外曾外祖父", "舅太姥爷" ]), (0, l.default)(f, "m,m,m,xb,w", [ "舅外曾外祖母", "舅太姥姥" ]), 
    (0, l.default)(f, "m,m,m,xb,s", [ "表舅外祖父" ]), (0, l.default)(f, "m,m,m,xb,s,w", [ "表舅外祖母" ]), 
    (0, l.default)(f, "m,m,m,xb,d", [ "表姨外祖母" ]), (0, l.default)(f, "m,m,m,xb,d,h", [ "表姨外祖父" ]), 
    (0, l.default)(f, "m,m,m,xs", [ "姨外曾外祖母", "姨太姥姥" ]), (0, l.default)(f, "m,m,m,xs,h", [ "姨外曾外祖父", "姨太姥爷" ]), 
    (0, l.default)(f, "m,m,m,xs,s", [ "表舅外祖父" ]), (0, l.default)(f, "m,m,m,xs,s,w", [ "表舅外祖母" ]), 
    (0, l.default)(f, "m,m,m,xs,d", [ "表姨外祖母" ]), (0, l.default)(f, "m,m,m,xs,d,h", [ "表姨外祖父" ]), 
    (0, l.default)(f, "m,m,xb", [ "外舅公", "外舅祖父", "外太舅父", "舅外祖父", "舅姥爷", "舅外公", "舅公", "x舅姥爷" ]), 
    (0, l.default)(f, "m,m,xb,w", [ "外舅婆", "外舅祖母", "外太舅母", "舅外祖母", "舅姥姥", "舅婆", "外妗婆" ]), 
    (0, l.default)(f, "m,m,xb,s", [ "舅表舅父", "舅表舅爸", "表舅父", "表舅爸", "表舅", "表舅舅", "舅表舅舅" ]), 
    (0, l.default)(f, "m,m,xb,s,w", [ "舅表舅母", "舅表舅妈", "表舅母", "表舅妈" ]), (0, l.default)(f, "m,m,xb,s,s", [ "从表兄弟" ]), 
    (0, l.default)(f, "m,m,xb,s,d", [ "从表姐妹" ]), (0, l.default)(f, "m,m,xb,d", [ "舅表姨母", "舅表姨妈", "表姨母", "表姨妈", "表姨", "表阿姨", "舅表姨姨" ]), 
    (0, l.default)(f, "m,m,xb,d,h", [ "舅表姨父", "舅表姨丈", "表姨父", "表姨丈" ]), (0, l.default)(f, "m,m,xb,d,s", [ "从表兄弟" ]), 
    (0, l.default)(f, "m,m,xb,d,d", [ "从表姐妹" ]), (0, l.default)(f, "m,m,xs", [ "姨姥姥", "姨外祖母", "外姨婆", "外姨祖母", "姨婆", "姨姥" ]), 
    (0, l.default)(f, "m,m,xs,h", [ "姨姥爷", "姨外祖父", "外姨丈公", "外姨祖父", "姨公" ]), (0, l.default)(f, "m,m,xs,s", [ "姨表舅父", "姨表舅爸", "表舅父", "表舅爸", "表舅", "表舅舅", "姨表舅舅", "从母舅父" ]), 
    (0, l.default)(f, "m,m,xs,s,w", [ "姨表舅母", "姨表舅妈", "表舅母", "表舅妈", "从母舅母" ]), (0, l.default)(f, "m,m,xs,s,s", [ "从表兄弟" ]), 
    (0, l.default)(f, "m,m,xs,s,d", [ "从表姐妹" ]), (0, l.default)(f, "m,m,xs,d", [ "姨表姨母", "姨表姨妈", "表姨母", "表姨妈", "表姨", "表阿姨", "姨表姨姨", "从母姨母" ]), 
    (0, l.default)(f, "m,m,xs,d,h", [ "姨表姨父", "姨表姨丈", "表姨父", "表姨丈", "从母姨父" ]), (0, l.default)(f, "m,m,xs,d,s", [ "从表兄弟" ]), 
    (0, l.default)(f, "m,m,xs,d,d", [ "从表姐妹" ]), (0, l.default)(f, "m,xb", [ "舅舅", "舅父", "舅", "娘舅", "舅仔", "母舅", "舅爸", "舅爹", "阿舅", "x舅" ]), 
    (0, l.default)(f, "m,xb,w", [ "舅妈", "舅母", "妗子", "妗妗", "妗母", "阿妗", "x舅妈" ]), (0, 
    l.default)(f, "m,xb,w,f", [ "姻伯公" ]), (0, l.default)(f, "m,xb,w,m", [ "姻伯婆" ]), 
    (0, l.default)(f, "m,xb,w,xb", [ "姻世伯" ]), (0, l.default)(f, "m,xb,w,xb,w", [ "姻伯母" ]), 
    (0, l.default)(f, "m,xb,w,xs", [ "姻伯母" ]), (0, l.default)(f, "m,xb,w,xs,h", [ "姻世伯" ]), 
    (0, l.default)(f, "m,xb,s&o", [ "舅表哥", "表哥" ]), (0, l.default)(f, "m,xb,s&o,w", [ "舅表嫂", "表嫂" ]), 
    (0, l.default)(f, "m,xb,s&l", [ "舅表弟", , "表弟" ]), (0, l.default)(f, "m,xb,s&l,w", [ "舅表弟媳", "表弟媳", "表弟妹" ]), 
    (0, l.default)(f, "m,xb,s,s", [ "表侄", "表侄子", "舅表侄男", "表侄男" ]), (0, l.default)(f, "m,xb,s,s,s", [ "表侄孙" ]), 
    (0, l.default)(f, "m,xb,s,s,s,w", [ "表侄孙媳妇" ]), (0, l.default)(f, "m,xb,s,s,d", [ "表侄孙女" ]), 
    (0, l.default)(f, "m,xb,s,s,d,h", [ "表侄孙女婿" ]), (0, l.default)(f, "m,xb,s,d", [ "表侄女", "舅表侄女" ]), 
    (0, l.default)(f, "m,xb,s,d,s", [ "外表侄孙" ]), (0, l.default)(f, "m,xb,s,d,s,w", [ "外表侄孙媳妇" ]), 
    (0, l.default)(f, "m,xb,s,d,d", [ "外表侄孙女" ]), (0, l.default)(f, "m,xb,s,d,d,h", [ "外表侄孙女婿" ]), 
    (0, l.default)(f, "m,xb,d&o", [ "舅表姐", "表姐" ]), (0, l.default)(f, "m,xb,d&o,h", [ "舅表姐夫", "表姐夫", "表姐丈" ]), 
    (0, l.default)(f, "m,xb,d&l", [ "舅表妹", "表妹" ]), (0, l.default)(f, "m,xb,d&l,h", [ "舅表妹夫", "表妹夫" ]), 
    (0, l.default)(f, "m,xb,d,s", [ "表外甥", "舅表甥男", "表甥男" ]), (0, l.default)(f, "m,xb,d,d", [ "表外甥女", "舅表甥女", "表甥女" ]), 
    (0, l.default)(f, "m,ob", [ "大舅" ]), (0, l.default)(f, "m,ob,w", [ "大舅妈" ]), (0, 
    l.default)(f, "m,lb", [ "小舅", "舅父仔" ]), (0, l.default)(f, "m,lb,w", [ "小舅妈" ]), 
    (0, l.default)(f, "m,xs", [ "姨妈", "姨母", "姨姨", "姨娘", "阿姨", "姨", "x姨", "x姨妈" ]), (0, 
    l.default)(f, "m,xs,h", [ "姨丈", "姨父", "姨爸", "姨爹", "x姨父" ]), (0, l.default)(f, "m,xs,h,f", [ "姻伯公" ]), 
    (0, l.default)(f, "m,xs,h,m", [ "姻伯婆" ]), (0, l.default)(f, "m,xs,h,xb", [ "姻世伯" ]), 
    (0, l.default)(f, "m,xs,h,xb,w", [ "姻伯母" ]), (0, l.default)(f, "m,xs,h,xs", [ "姻伯母" ]), 
    (0, l.default)(f, "m,xs,h,xs,h", [ "姻世伯" ]), (0, l.default)(f, "m,xs,s&o", [ "姨表哥", "表哥" ]), 
    (0, l.default)(f, "m,xs,s&o,w", [ "姨表嫂", "表嫂" ]), (0, l.default)(f, "m,xs,s&l", [ "姨表弟", "表弟" ]), 
    (0, l.default)(f, "m,xs,s&l,w", [ "姨表弟媳", "表弟媳", "表弟妹" ]), (0, l.default)(f, "m,xs,s,s", [ "表侄", "表侄子", "姨表侄男", "表侄男" ]), 
    (0, l.default)(f, "m,xs,s,s,s", [ "表侄孙" ]), (0, l.default)(f, "m,xs,s,s,s,w", [ "表侄孙媳妇" ]), 
    (0, l.default)(f, "m,xs,s,s,d", [ "表侄孙女" ]), (0, l.default)(f, "m,xs,s,s,d,h", [ "表侄孙女婿" ]), 
    (0, l.default)(f, "m,xs,s,d", [ "表侄女", "姨表侄女" ]), (0, l.default)(f, "m,xs,s,d,s", [ "外表侄孙" ]), 
    (0, l.default)(f, "m,xs,s,d,s,w", [ "外表侄孙媳妇" ]), (0, l.default)(f, "m,xs,s,d,d", [ "外表侄孙女" ]), 
    (0, l.default)(f, "m,xs,s,d,d,h", [ "外表侄孙女婿" ]), (0, l.default)(f, "m,xs,d&o", [ "姨表姐", "表姐" ]), 
    (0, l.default)(f, "m,xs,d&o,h", [ "姨表姐夫", "表姐夫", "表姐丈" ]), (0, l.default)(f, "m,xs,d&l", [ "姨表妹", "表妹" ]), 
    (0, l.default)(f, "m,xs,d&l,h", [ "姨表妹夫", "表妹夫" ]), (0, l.default)(f, "m,xs,d,s", [ "表外甥", "姨表甥男", "姨表甥男" ]), 
    (0, l.default)(f, "m,xs,d,d", [ "表外甥女", "姨表甥女", "表甥女" ]), (0, l.default)(f, "m,os", [ "大姨", "大姨妈" ]), 
    (0, l.default)(f, "m,os,h", [ "大姨父", "大姨丈" ]), (0, l.default)(f, "m,ls", [ "小姨", "小姨妈", "姨仔" ]), 
    (0, l.default)(f, "m,ls,h", [ "小姨父", "小姨丈" ]), (0, l.default)(f, "h", [ "老公", "丈夫", "先生", "官人", "男人", "汉子", "夫", "夫君", "相公", "夫婿", "爱人", "老伴" ]), 
    (0, l.default)(f, "h,f", [ "公公", "翁亲", "老公公" ]), (0, l.default)(f, "h,f,f", [ "祖翁" ]), 
    (0, l.default)(f, "h,f,f,ob", [ "伯祖翁" ]), (0, l.default)(f, "h,f,f,ob,w", [ "伯祖婆" ]), 
    (0, l.default)(f, "h,f,f,lb", [ "叔祖翁" ]), (0, l.default)(f, "h,f,f,lb,w", [ "叔祖婆" ]), 
    (0, l.default)(f, "h,f,f,f", [ "太公翁" ]), (0, l.default)(f, "h,f,f,f,ob", [ "太伯翁" ]), 
    (0, l.default)(f, "h,f,f,f,ob,w", [ "太姆婆" ]), (0, l.default)(f, "h,f,f,f,lb", [ "太叔翁" ]), 
    (0, l.default)(f, "h,f,f,f,lb,w", [ "太婶婆" ]), (0, l.default)(f, "h,f,f,m", [ "太奶亲" ]), 
    (0, l.default)(f, "h,f,m", [ "祖婆" ]), (0, l.default)(f, "h,f,ob", [ "伯翁" ]), (0, 
    l.default)(f, "h,f,ob,w", [ "伯婆" ]), (0, l.default)(f, "h,f,lb", [ "叔公", "叔翁", "叔祖" ]), 
    (0, l.default)(f, "h,f,lb,w", [ "叔婆", "婶婆", "婶亲" ]), (0, l.default)(f, "h,f,xb,s&o", [ "堂大伯", "堂兄", "堂大伯哥" ]), 
    (0, l.default)(f, "h,f,xb,s&o,w", [ "堂嫂", "堂大伯嫂" ]), (0, l.default)(f, "h,f,xb,s&l", [ "堂叔仔", "堂弟", "堂小叔弟" ]), 
    (0, l.default)(f, "h,f,xb,s&l,w", [ "堂小弟", "堂弟妇", "堂小叔弟妇" ]), (0, l.default)(f, "h,f,xb,s,s", [ "堂夫侄男" ]), 
    (0, l.default)(f, "h,f,xb,s,d", [ "堂夫侄女" ]), (0, l.default)(f, "h,f,xb,d&o", [ "堂大姑姐" ]), 
    (0, l.default)(f, "h,f,xb,d&o,h", [ "堂大姑姐夫" ]), (0, l.default)(f, "h,f,xb,d&l", [ "堂小姑妹" ]), 
    (0, l.default)(f, "h,f,xb,d&l,h", [ "堂小姑妹夫" ]), (0, l.default)(f, "h,f,xb,d,s", [ "堂夫甥男" ]), 
    (0, l.default)(f, "h,f,xb,d,d", [ "堂夫甥女" ]), (0, l.default)(f, "h,f,xs", [ "姑婆" ]), 
    (0, l.default)(f, "h,f,xs,h", [ "姑公" ]), (0, l.default)(f, "h,f,xs,s&o", [ "姑表大伯子", "表大伯" ]), 
    (0, l.default)(f, "h,f,xs,s&o,w", [ "姑表大伯嫂", "表大姆" ]), (0, l.default)(f, "h,f,xs,s&l", [ "姑表小叔弟", "表叔仔" ]), 
    (0, l.default)(f, "h,f,xs,s&l,w", [ "姑表小叔弟妇" ]), (0, l.default)(f, "h,f,xs,s,s", [ "姑表夫侄男" ]), 
    (0, l.default)(f, "h,f,xs,s,d", [ "姑表夫侄女" ]), (0, l.default)(f, "h,f,xs,d&o", [ "姑表大姑姐", "表大姑" ]), 
    (0, l.default)(f, "h,f,xs,d&o,h", [ "姑表大姑姐夫" ]), (0, l.default)(f, "h,f,xs,d&l", [ "姑表小姑妹", "表姑仔" ]), 
    (0, l.default)(f, "h,f,xs,d&l,h", [ "姑表小姑妹夫" ]), (0, l.default)(f, "h,f,xs,d,s", [ "姑表夫甥男" ]), 
    (0, l.default)(f, "h,f,xs,d,d", [ "姑表夫甥女" ]), (0, l.default)(f, "h,m", [ "婆婆", "婆母", "姑亲", "老婆婆" ]), 
    (0, l.default)(f, "h,m,xb", [ "舅公" ]), (0, l.default)(f, "h,m,xb,w", [ "舅婆" ]), 
    (0, l.default)(f, "h,m,xb,s&o", [ "舅表大伯子", "表大伯" ]), (0, l.default)(f, "h,m,xb,s&o,w", [ "舅表大伯嫂", "表大姆" ]), 
    (0, l.default)(f, "h,m,xb,s&l", [ "舅表小叔弟", "表叔仔" ]), (0, l.default)(f, "h,m,xb,s&l,w", [ "舅表小叔弟妇" ]), 
    (0, l.default)(f, "h,m,xb,s,s", [ "舅表夫侄男" ]), (0, l.default)(f, "h,m,xb,s,d", [ "舅表夫侄女" ]), 
    (0, l.default)(f, "h,m,xb,d&o", [ "舅表大姑姐", "表大姑" ]), (0, l.default)(f, "h,m,xb,d&o,h", [ "舅表大姑姐夫" ]), 
    (0, l.default)(f, "h,m,xb,d&l", [ "舅表小姑妹", "表姑仔" ]), (0, l.default)(f, "h,m,xb,d&l,h", [ "舅表小姑妹夫" ]), 
    (0, l.default)(f, "h,m,xb,d,s", [ "舅表夫甥男" ]), (0, l.default)(f, "h,m,xb,d,d", [ "舅表夫甥女" ]), 
    (0, l.default)(f, "h,m,xs", [ "姨婆" ]), (0, l.default)(f, "h,m,xs,h", [ "姨公" ]), 
    (0, l.default)(f, "h,m,xs,s&o", [ "姨表大伯子", "表大伯" ]), (0, l.default)(f, "h,m,xs,s&o,w", [ "姨表大伯嫂", "表大姆" ]), 
    (0, l.default)(f, "h,m,xs,s&l", [ "姨表小叔弟", "表叔仔" ]), (0, l.default)(f, "h,m,xs,s&l,w", [ "姨表小叔弟妇" ]), 
    (0, l.default)(f, "h,m,xs,s,s", [ "姨表夫侄男" ]), (0, l.default)(f, "h,m,xs,s,d", [ "姨表夫侄女" ]), 
    (0, l.default)(f, "h,m,xs,d&o", [ "姨表大姑姐", "表大姑" ]), (0, l.default)(f, "h,m,xs,d&o,h", [ "姨表大姑姐夫" ]), 
    (0, l.default)(f, "h,m,xs,d&l", [ "姨表小姑妹", "表姑仔" ]), (0, l.default)(f, "h,m,xs,d&l,h", [ "姨表小姑妹夫" ]), 
    (0, l.default)(f, "h,m,xs,d,s", [ "姨表夫甥男" ]), (0, l.default)(f, "h,m,xs,d,d", [ "姨表夫甥女" ]), 
    (0, l.default)(f, "h,ob", [ "大伯子", "大伯哥", "大伯兄", "夫兄" ]), (0, l.default)(f, "h,ob,w", [ "大婶子", "大伯嫂", "大伯妇", "伯娘", "大伯娘", "大嫂", "夫兄嫂", "妯娌" ]), 
    (0, l.default)(f, "h,lb", [ "小叔子", "小叔弟" ]), (0, l.default)(f, "h,lb,w", [ "小婶子", "小叔妇", "小叔媳妇", "小叔弟妇", "妯娌" ]), 
    (0, l.default)(f, "h,xb,s", [ "叔侄", "婆家侄" ]), (0, l.default)(f, "h,os", [ "大姑子", "大姑", "大娘姑", "大姑姊" ]), 
    (0, l.default)(f, "h,os,h", [ "大姑夫", "姊丈", "大姑姐夫", "大姑姊夫" ]), (0, l.default)(f, "h,ls", [ "小姑子", "小姑", "小姑妹", "姑仔" ]), 
    (0, l.default)(f, "h,ls,h", [ "小姑夫", "小亘子", "小姑妹夫" ]), (0, l.default)(f, "h,xs,s", [ "姑甥", "婆家甥" ]), 
    (0, l.default)(f, "w", [ "老婆", "妻子", "太太", "媳妇儿", "媳妇", "夫人", "女人", "婆娘", "妻", "内人", "娘子", "爱人", "老伴" ]), 
    (0, l.default)(f, "w,f", [ "岳父", "岳丈", "老丈人", "丈人", "泰山", "妻父" ]), (0, l.default)(f, "w,f,f", [ "太岳父", "祖岳父" ]), 
    (0, l.default)(f, "w,f,f,f,xb,s,s&o", [ "姻伯丈" ]), (0, l.default)(f, "w,f,f,f,xb,s,s&o,w", [ "姻伯丈" ]), 
    (0, l.default)(f, "w,f,f,f,xb,s,s&l", [ "姻叔丈" ]), (0, l.default)(f, "w,f,f,f,xb,s,s&l,w", [ "姻婶" ]), 
    (0, l.default)(f, "w,f,f,ob", [ "太伯岳" ]), (0, l.default)(f, "w,f,f,ob,w", [ "太伯岳母" ]), 
    (0, l.default)(f, "w,f,f,lb,", [ "太叔岳" ]), (0, l.default)(f, "w,f,f,lb,w", [ "太叔岳母" ]), 
    (0, l.default)(f, "w,f,f,xb,s&o", [ "姻伯" ]), (0, l.default)(f, "w,f,f,xb,s&o,w", [ "姻姆" ]), 
    (0, l.default)(f, "w,f,f,xb,s&l", [ "姻叔" ]), (0, l.default)(f, "w,f,f,xb,s&l,w", [ "姻婶" ]), 
    (0, l.default)(f, "w,f,f,xs", [ "太姑岳母" ]), (0, l.default)(f, "w,f,f,xs,h", [ "太姑岳父" ]), 
    (0, l.default)(f, "w,f,m", [ "太岳母", "祖岳母" ]), (0, l.default)(f, "w,f,m,xb", [ "太舅岳父" ]), 
    (0, l.default)(f, "w,f,m,xb,w", [ "太舅岳母" ]), (0, l.default)(f, "w,f,m,xs", [ "太姨岳母" ]), 
    (0, l.default)(f, "w,f,m,xs,h", [ "太姨岳父" ]), (0, l.default)(f, "w,f,xb,s&o", [ "堂大舅", "姻家兄" ]), 
    (0, l.default)(f, "w,f,xb,s&l", [ "堂舅仔", "姻家弟" ]), (0, l.default)(f, "w,f,xb,d&o", [ "堂大姨" ]), 
    (0, l.default)(f, "w,f,xb,d&l", [ "堂姨仔" ]), (0, l.default)(f, "w,f,ob", [ "伯岳", "伯岳父" ]), 
    (0, l.default)(f, "w,f,ob,w", [ "伯岳母" ]), (0, l.default)(f, "w,f,lb", [ "叔岳", "叔岳父" ]), 
    (0, l.default)(f, "w,f,lb,w", [ "叔岳母" ]), (0, l.default)(f, "w,f,xs", [ "姑岳母" ]), 
    (0, l.default)(f, "w,f,xs,h", [ "姑岳父" ]), (0, l.default)(f, "w,f,xs,s&o", [ "表大舅", "表内兄" ]), 
    (0, l.default)(f, "w,f,xs,s&o,w", [ "表内嫂" ]), (0, l.default)(f, "w,f,xs,s&l", [ "表舅仔", "表内弟" ]), 
    (0, l.default)(f, "w,f,xs,s&l,w", [ "表内弟妇" ]), (0, l.default)(f, "w,f,xs,d&o", [ "表大姨", "表内姐" ]), 
    (0, l.default)(f, "w,f,xs,d&o,h", [ "表襟兄" ]), (0, l.default)(f, "w,f,xs,d&l", [ "表姨仔", "表内妹" ]), 
    (0, l.default)(f, "w,f,xs,d&l,w", [ "表襟弟" ]), (0, l.default)(f, "w,m", [ "岳母", "丈母娘", "丈母", "泰水" ]), 
    (0, l.default)(f, "w,m,f", [ "外太岳父" ]), (0, l.default)(f, "w,m,m", [ "外太岳母" ]), 
    (0, l.default)(f, "w,m,xb", [ "舅岳父" ]), (0, l.default)(f, "w,m,xb,w", [ "舅岳母" ]), 
    (0, l.default)(f, "w,m,xb,s&o", [ "表大舅" ]), (0, l.default)(f, "w,m,xb,s&l", [ "表舅仔" ]), 
    (0, l.default)(f, "w,m,xb,d&o", [ "表大姨" ]), (0, l.default)(f, "w,m,xb,d&l", [ "表姨仔" ]), 
    (0, l.default)(f, "w,m,xs", [ "姨岳母" ]), (0, l.default)(f, "w,m,xs,h", [ "姨岳父" ]), 
    (0, l.default)(f, "w,m,xs,s&o", [ "表大舅" ]), (0, l.default)(f, "w,m,xs,s&l", [ "表舅仔" ]), 
    (0, l.default)(f, "w,m,xs,d&o", [ "表大姨" ]), (0, l.default)(f, "w,m,xs,d&l", [ "表姨仔" ]), 
    (0, l.default)(f, "w,xb,s", [ "内侄", "妻侄", "舅侄" ]), (0, l.default)(f, "w,xb,s,w", [ "内侄媳妇" ]), 
    (0, l.default)(f, "w,xb,s,s", [ "内侄孙" ]), (0, l.default)(f, "w,xb,s,s,w", [ "内侄孙媳妇" ]), 
    (0, l.default)(f, "w,xb,s,d", [ "内侄孙女" ]), (0, l.default)(f, "w,xb,s,d,h", [ "内侄孙女婿" ]), 
    (0, l.default)(f, "w,xb,d", [ "内侄女", "妻侄女" ]), (0, l.default)(f, "w,xb,d,h", [ "内侄女婿" ]), 
    (0, l.default)(f, "w,xb,d,s", [ "外侄孙" ]), (0, l.default)(f, "w,xb,d,s,w", [ "外侄孙媳妇" ]), 
    (0, l.default)(f, "w,xb,d,d", [ "外侄孙女" ]), (0, l.default)(f, "w,xb,d,d,h", [ "外侄孙女婿" ]), 
    (0, l.default)(f, "w,ob", [ "大舅子", "大舅哥", "大舅兄", "内兄", "妻兄", "妻舅", "舅兄" ]), (0, 
    l.default)(f, "w,ob,w", [ "舅嫂", "大舅妇", "大舅嫂", "大舅媳妇", "大妗子", "内嫂", "妻兄嫂" ]), (0, 
    l.default)(f, "w,lb", [ "小舅子", "小舅弟", "内弟", "妻弟", "妻舅", "舅弟" ]), (0, l.default)(f, "w,lb,w", [ "舅弟媳", "小舅妇", "小舅弟妇", "小舅媳妇", "小妗子", "妻妹夫" ]), 
    (0, l.default)(f, "w,xs,s", [ "内甥", "姨甥", "妻外甥" ]), (0, l.default)(f, "w,xs,s,w", [ "姨甥媳妇" ]), 
    (0, l.default)(f, "w,xs,s,s", [ "姨甥孙" ]), (0, l.default)(f, "w,xs,s,s,w", [ "姨甥孙媳妇" ]), 
    (0, l.default)(f, "w,xs,s,d", [ "姨甥孙女" ]), (0, l.default)(f, "w,xs,s,d,h", [ "姨甥孙女婿" ]), 
    (0, l.default)(f, "w,xs,d", [ "姨甥女", "妻外甥女" ]), (0, l.default)(f, "w,xs,d,h", [ "姨甥女婿" ]), 
    (0, l.default)(f, "w,xs,d,s", [ "姨甥孙" ]), (0, l.default)(f, "w,xs,d,s,w", [ "姨甥孙媳妇" ]), 
    (0, l.default)(f, "w,xs,d,d", [ "姨甥孙女" ]), (0, l.default)(f, "w,xs,d,d,h", [ "姨甥孙女婿" ]), 
    (0, l.default)(f, "w,os", [ "大姨子", "大姨姐", "大姨姊", "妻姐" ]), (0, l.default)(f, "w,os,h", [ "大姨夫", "大姨姐夫", "大姨姊夫", "襟兄", "连襟", "姨夫" ]), 
    (0, l.default)(f, "w,ls", [ "小姨子", "小姨姐", "妻妹", "小妹儿" ]), (0, l.default)(f, "w,ls,h", [ "小姨夫", "小姨妹夫", "襟弟", "连襟", "姨夫" ]), 
    (0, l.default)(f, "xb", [ "兄弟" ]), (0, l.default)(f, "xb,w,f", [ "姻世伯", "亲家爷", "亲爹", "亲伯" ]), 
    (0, l.default)(f, "xb,w,f,f", [ "姻伯祖/姻叔祖" ]), (0, l.default)(f, "xb,w,m", [ "姻伯母", "亲家娘", "亲娘" ]), 
    (0, l.default)(f, "xb,w,xb", [ "姻兄/姻弟" ]), (0, l.default)(f, "xb,w,xs", [ "姻姐/姻妹" ]), 
    (0, l.default)(f, "xb,s", [ "侄子", "侄儿", "阿侄" ]), (0, l.default)(f, "xb,s,w", [ "侄媳", "侄媳妇" ]), 
    (0, l.default)(f, "xb,s,s", [ "侄孙", "侄孙子" ]), (0, l.default)(f, "xb,s,s,w", [ "侄孙媳" ]), 
    (0, l.default)(f, "xb,s,s,s", [ "侄曾孙" ]), (0, l.default)(f, "xb,s,s,s,w", [ "侄曾孙媳" ]), 
    (0, l.default)(f, "xb,s,s,d", [ "侄曾孙女" ]), (0, l.default)(f, "xb,s,s,d,h", [ "侄曾孙女婿" ]), 
    (0, l.default)(f, "xb,s,d", [ "侄孙女" ]), (0, l.default)(f, "xb,s,d,h", [ "侄孙女婿", "侄孙婿" ]), 
    (0, l.default)(f, "xb,d", [ "侄女", "侄囡" ]), (0, l.default)(f, "xb,d,h", [ "侄女婿", "侄婿" ]), 
    (0, l.default)(f, "xb,d,s", [ "外侄孙", "外侄孙子", "侄外孙男" ]), (0, l.default)(f, "xb,d,s,w", [ "外侄孙媳妇" ]), 
    (0, l.default)(f, "xb,d,d", [ "外侄孙女", "侄外孙女" ]), (0, l.default)(f, "xb,d,d,h", [ "外侄孙女婿" ]), 
    (0, l.default)(f, "ob", [ "哥哥", "哥", "兄", "阿哥", "大佬", "老哥", "兄长", "胞哥", "大哥", "x哥" ]), 
    (0, l.default)(f, "ob,w", [ "嫂子", "嫂", "嫂嫂", "阿嫂", "兄嫂", "大嫂", "x嫂" ]), (0, l.default)(f, "ob,w,f", [ "姻伯父" ]), 
    (0, l.default)(f, "ob,w,m", [ "姻伯母" ]), (0, l.default)(f, "lb", [ "弟弟", "弟", "细佬", "胞弟", "老弟", "x弟" ]), 
    (0, l.default)(f, "lb,w", [ "弟妹", "弟媳", "弟媳妇", "弟妇", "x弟妹" ]), (0, l.default)(f, "lb,w,f", [ "姻叔父" ]), 
    (0, l.default)(f, "lb,w,m", [ "姻叔母" ]), (0, l.default)(f, "xs", [ "姐妹", "姊妹" ]), 
    (0, l.default)(f, "xs,h,f", [ "姻世伯", "亲家爷", "亲爹", "亲伯" ]), (0, l.default)(f, "xs,h,f,f", [ "姻伯祖/姻叔祖" ]), 
    (0, l.default)(f, "xs,h,m", [ "姻伯母", "亲家娘", "亲娘" ]), (0, l.default)(f, "xs,h,xb", [ "姻兄/姻弟" ]), 
    (0, l.default)(f, "xs,h,xs", [ "姻姐/姻妹" ]), (0, l.default)(f, "xs,s", [ "外甥", "甥男", "甥儿", "甥子", "外甥儿", "外甥子", "外甥儿子" ]), 
    (0, l.default)(f, "xs,s,w", [ "外甥媳妇" ]), (0, l.default)(f, "xs,s,s", [ "外甥孙", "甥孙男", "甥孙" ]), 
    (0, l.default)(f, "xs,s,s,w", [ "外甥孙媳妇" ]), (0, l.default)(f, "xs,s,s,s", [ "外曾甥孙" ]), 
    (0, l.default)(f, "xs,s,s,d", [ "外曾甥孙女" ]), (0, l.default)(f, "xs,s,d", [ "外甥孙女", "甥孙女", "甥孙" ]), 
    (0, l.default)(f, "xs,s,d,h", [ "外甥孙女婿" ]), (0, l.default)(f, "xs,s,d,s", [ "外曾甥孙" ]), 
    (0, l.default)(f, "xs,s,d,d", [ "外曾甥孙女" ]), (0, l.default)(f, "xs,d", [ "外甥女", "外甥囡" ]), 
    (0, l.default)(f, "xs,d,h", [ "外甥女婿" ]), (0, l.default)(f, "xs,d,s", [ "外甥孙", "甥孙男", "甥孙", "甥外孙男", "外弥甥" ]), 
    (0, l.default)(f, "xs,d,s,w", [ "外甥孙媳妇" ]), (0, l.default)(f, "xs,d,s,s", [ "外曾甥孙" ]), 
    (0, l.default)(f, "xs,d,s,d", [ "外曾甥孙女" ]), (0, l.default)(f, "xs,d,d", [ "外甥孙女", "甥孙女", "甥孙", "甥外孙女", "外弥甥女" ]), 
    (0, l.default)(f, "xs,d,d,h", [ "外甥孙女婿" ]), (0, l.default)(f, "xs,d,d,s", [ "外曾甥孙" ]), 
    (0, l.default)(f, "xs,d,d,d", [ "外曾甥孙女" ]), (0, l.default)(f, "os", [ "姐姐", "姐", "家姐", "阿姐", "阿姊", "胞姐", "大姐", "x姐" ]), 
    (0, l.default)(f, "os,h", [ "姐夫", "姊夫", "姊丈", "姊婿", "大姐夫", "x姐夫" ]), (0, l.default)(f, "ls", [ "妹妹", "妹", "胞妹", "老妹", "x妹" ]), 
    (0, l.default)(f, "ls,h", [ "妹夫", "妹丈", "妹婿", "x妹夫" ]), (0, l.default)(f, "s", [ "儿子", "仔", "阿仔", "仔仔", "x儿子", "孩子", "孩儿" ]), 
    (0, l.default)(f, "s,w", [ "儿媳妇", "儿媳", "新妇" ]), (0, l.default)(f, "s,w,xb", [ "姻侄" ]), 
    (0, l.default)(f, "s,w,xb,s", [ "姻侄孙" ]), (0, l.default)(f, "s,w,xb,d", [ "姻侄孙女" ]), 
    (0, l.default)(f, "s,w,xs", [ "姻侄女" ]), (0, l.default)(f, "s,w,xs,s", [ "姻侄孙" ]), 
    (0, l.default)(f, "s,w,xs,d", [ "姻侄孙女" ]), (0, l.default)(f, "s,s", [ "孙子", "孙儿", "x孙子", "孙" ]), 
    (0, l.default)(f, "s,s,w", [ "孙媳妇", "孙媳" ]), (0, l.default)(f, "s,s,w,xb", [ "姻家再侄" ]), 
    (0, l.default)(f, "s,s,w,xs", [ "姻家再侄" ]), (0, l.default)(f, "s,s,s", [ "曾孙" ]), 
    (0, l.default)(f, "s,s,s,w", [ "曾孙媳妇" ]), (0, l.default)(f, "s,s,s,s", [ "玄孙", "元孙", "膀孙" ]), 
    (0, l.default)(f, "s,s,s,d", [ "玄孙女" ]), (0, l.default)(f, "s,s,s,s,s", [ "来孙" ]), 
    (0, l.default)(f, "s,s,s,s,d", [ "来孙女" ]), (0, l.default)(f, "s,s,s,s,s,s", [ "晜孙" ]), 
    (0, l.default)(f, "s,s,s,s,s,d", [ "晜孙女" ]), (0, l.default)(f, "s,s,s,s,s,s,s", [ "仍孙" ]), 
    (0, l.default)(f, "s,s,s,s,s,s,d", [ "仍孙女" ]), (0, l.default)(f, "s,s,s,s,s,s,s,s", [ "云孙" ]), 
    (0, l.default)(f, "s,s,s,s,s,s,s,d", [ "云孙女" ]), (0, l.default)(f, "s,s,s,s,s,s,s,s,s", [ "耳孙" ]), 
    (0, l.default)(f, "s,s,s,s,s,s,s,s,d", [ "耳孙女" ]), (0, l.default)(f, "s,s,d", [ "曾孙女" ]), 
    (0, l.default)(f, "s,s,d,h", [ "曾孙女婿" ]), (0, l.default)(f, "s,s,d,s", [ "外玄孙" ]), 
    (0, l.default)(f, "s,s,d,d", [ "外玄孙女" ]), (0, l.default)(f, "s,d", [ "孙女", "孙囡" ]), 
    (0, l.default)(f, "s,d,h", [ "孙女婿", "孙婿" ]), (0, l.default)(f, "s,d,h,xb", [ "姻家再侄" ]), 
    (0, l.default)(f, "s,d,h,xs", [ "姻家再侄" ]), (0, l.default)(f, "s,d,s", [ "曾外孙" ]), 
    (0, l.default)(f, "s,d,d", [ "曾外孙女" ]), (0, l.default)(f, "d", [ "女儿", "千金", "闺女", "女", "阿女", "女女", "掌上明珠", "乖囡", "囡囡", "姑娘", "x女儿", "孩子", "孩儿" ]), 
    (0, l.default)(f, "d,h", [ "女婿", "姑爷", "女婿子", "女婿儿" ]), (0, l.default)(f, "d,h,xb", [ "姻侄" ]), 
    (0, l.default)(f, "d,h,xb,w", [ "姻侄妇" ]), (0, l.default)(f, "d,h,xb,s", [ "姻侄孙" ]), 
    (0, l.default)(f, "d,h,xb,d", [ "姻侄孙女" ]), (0, l.default)(f, "d,h,xs", [ "姻侄女" ]), 
    (0, l.default)(f, "d,h,xs,w", [ "姻侄女婿" ]), (0, l.default)(f, "d,h,xs,s", [ "姻侄孙" ]), 
    (0, l.default)(f, "d,h,xs,d", [ "姻侄孙女" ]), (0, l.default)(f, "d,s", [ "外孙" ]), (0, 
    l.default)(f, "d,s,w", [ "外孙媳" ]), (0, l.default)(f, "d,s,s", [ "外曾孙", "重外孙" ]), 
    (0, l.default)(f, "d,s,d", [ "外曾孙女", "重外孙女" ]), (0, l.default)(f, "d,d", [ "外孙女", "外孙囡" ]), 
    (0, l.default)(f, "d,d,h", [ "外孙女婿" ]), (0, l.default)(f, "d,d,s", [ "外曾外孙" ]), 
    (0, l.default)(f, "d,d,d", [ "外曾外孙女" ]), (0, l.default)(f, "s,w,m", [ "亲家母", "亲家" ]), 
    (0, l.default)(f, "s,w,f", [ "亲家公", "亲家翁", "亲家" ]), (0, l.default)(f, "s,w,f,f", [ "太姻翁" ]), 
    (0, l.default)(f, "s,w,f,m", [ "太姻姆" ]), (0, l.default)(f, "s,w,f,ob", [ "姻兄", "姻亲" ]), 
    (0, l.default)(f, "s,w,f,lb", [ "姻弟", "姻亲" ]), (0, l.default)(f, "s,w,f,os", [ "姻姐", "姻亲" ]), 
    (0, l.default)(f, "s,w,f,ls", [ "姻妹", "姻亲" ]), (0, l.default)(f, "d,h,m", [ "亲家母", "亲家" ]), 
    (0, l.default)(f, "d,h,f", [ "亲家公", "亲家翁", "亲家" ]), (0, l.default)(f, "d,h,f,f", [ "太姻翁" ]), 
    (0, l.default)(f, "d,h,f,m", [ "太姻姆" ]), (0, l.default)(f, "d,h,f,ob", [ "姻兄", "姻亲" ]), 
    (0, l.default)(f, "d,h,f,lb", [ "姻弟", "姻亲" ]), (0, l.default)(f, "s,w,f,os", [ "姻姐", "姻亲" ]), 
    (0, l.default)(f, "s,w,f,ls", [ "姻妹", "姻亲" ]), f), e = function(f) {
        for (var s, d = [], l = {}, e = 0; null != (s = f[e]); e++) {
            var t = s.replace(/[ol](?=s|b)/, "x").replace(/&[ol]/, "");
            l[s] || l[t] || (d.push(s), l[s] = !0);
        }
        return d;
    };
    function t(f, d) {
        var l = [], t = {};
        return d < 0 && (0 == f.indexOf(",w") ? d = 1 : 0 == f.indexOf(",h") && (d = 0)), 
        d > -1 && (f = "," + d + f), !f.match(/,[w0],w|,[h1],h/) && (function f(d) {
            var e = "";
            if (!t[d]) {
                t[d] = !0;
                var x = !0;
                do {
                    for (var a in e = d, s) {
                        var u = s[a];
                        if ((d = d.replace(u.exp, u.str)).indexOf("#") > -1) {
                            for (var m = d.split("#"), b = 0; b < m.length; b++) f(m[b]);
                            x = !1;
                            break;
                        }
                    }
                } while (e != d);
                if (x) {
                    if (d.match(/,[w0],w|,[h1],h/)) return !1;
                    d = d.replace(/,[01]/, "").substr(1), l.push(d);
                }
            }
        }(f), e(l));
    }
    function x(f) {
        var s = [], l = /&[olx]/g, e = function(f) {
            var s = [];
            for (var e in d) e.replace(l, "") == f && s.push(d[e][0]);
            return s;
        };
        if (d[f]) s.push(d[f][0]); else if ((s = e(f)).length || (s = e(f = f.replace(/&[ol]/g, ""))), 
        s.length || (s = e(f = f.replace(/[ol]/g, "x"))), !s.length) {
            s = e(f.replace(/x/g, "l"));
            var t = f.replace(/x/g, "o");
            s = s.concat(e(t));
        }
        return s;
    }
    function a(f, s) {
        var d = {
            f: [ "d", "s" ],
            m: [ "d", "s" ],
            h: [ "w", "" ],
            w: [ "", "h" ],
            s: [ "m", "f" ],
            d: [ "m", "f" ],
            lb: [ "os", "ob" ],
            ob: [ "ls", "lb" ],
            xb: [ "xs", "xb" ],
            ls: [ "os", "ob" ],
            os: [ "ls", "lb" ],
            xs: [ "xs", "xb" ]
        }, l = "";
        if (f.indexOf("&o") > -1 ? l = "&l" : f.indexOf("&l") > -1 && (l = "&o"), f) {
            var e = ("," + (s = s ? 1 : 0) + "," + (f = f.replace(/&[ol]/g, ""))).replace(/,[fhs]|,[olx]b/g, ",1").replace(/,[mwd]|,[olx]s/g, ",0");
            e = e.substring(0, e.lastIndexOf(","));
            for (var t = f.split(",").reverse(), x = e.split(",").reverse(), a = [], u = 0; u < t.length; u++) a.push(d[t[u]][x[u]]);
            return a.join(",") + l;
        }
        return "";
    }
    function u(f) {
        for (var s = f.split(","), l = [], e = 0; e < s.length; e++) {
            var t = s[e].replace(/&[ol]/, "");
            l.push(d[t][0]);
        }
        return l.join("的");
    }
    return function(f) {
        var s = {
            text: "",
            sex: -1,
            type: "default",
            reverse: !1
        };
        for (var l in f) s[l] = f[l];
        for (var m = function(f) {
            for (var s = (f = f.replace(/[二|三|四|五|六|七|八|九|十]{1,2}/g, "x")).split("的"), l = [], e = !0; s.length; ) {
                var t = s.shift(), x = [], a = !1;
                for (var u in d) d[u].indexOf(t) > -1 && (!u && s.length || x.push(u), a = !0);
                if (a || (e = !1), l.length) {
                    var m = [];
                    for (u = 0; u < l.length; u++) for (var b = 0; b < x.length; b++) m.push(l[u] + "," + x[b]);
                    l = m;
                } else for (u = 0; u < x.length; u++) l.push("," + x[u]);
            }
            return e ? l : [];
        }(s.text), b = [], w = 0; w < m.length; w++) for (var h = t(m[w], s.sex), o = 0; o < h.length; o++) {
            var r = h[o];
            if ("chain" == s.type) {
                var n = u(r);
                n && b.push(n);
            } else {
                s.reverse && (r = a(r, s.sex));
                var p = x(r);
                p.length ? b = b.concat(p) : 0 != r.indexOf("w") && 0 != r.indexOf("h") || (p = x(r.substr(2))).length && (b = b.concat(p));
            }
        }
        return e(b);
    };
}, "object" === ("undefined" == typeof module ? "undefined" : (0, e.default)(module)) && module.exports ? module.exports = s() : f.relationship = s();