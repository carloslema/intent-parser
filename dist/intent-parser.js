!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("chrono-node"),require("moment")):"function"==typeof define&&define.amd?define(["chrono-node","moment"],t):e.IntentParser=t(e.chrono,e.moment)}(this,function(e,t){"use strict";e="default"in e?e.default:e,t="default"in t?t.default:t;var r=(function(){function e(e){this.value=e}function t(t){function r(e,t){return new Promise(function(r,o){var s={key:e,arg:t,resolve:r,reject:o,next:null};a?a=a.next=s:(i=a=s,n(e,t))})}function n(r,i){try{var a=t[r](i),s=a.value;s instanceof e?Promise.resolve(s.value).then(function(e){n("next",e)},function(e){n("throw",e)}):o(a.done?"return":"normal",a.value)}catch(e){o("throw",e)}}function o(e,t){switch(e){case"return":i.resolve({value:t,done:!0});break;case"throw":i.reject(t);break;default:i.resolve({value:t,done:!1})}i=i.next,i?n(i.key,i.arg):a=null}var i,a;this._invoke=r,"function"!=typeof t.return&&(this.return=void 0)}return"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)},{wrap:function(e){return function(){return new t(e.apply(this,arguments))}},await:function(t){return new e(t)}}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),n=function(){function e(){r(this,e)}return e.prototype.clean=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{raw:""},t=e.raw.replace(/\s+/g," ").trim();return e.text=t,e.cleaned=t,Promise.resolve(e)},e}(),o=function(){function e(){r(this,e)}return e.prototype.clean=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cleaned:""},t=e.cleaned.replace(/\b(let)'s\b/gi,"$1 us").replace(/'s (been|got|gotten)\b/gi," has $1").replace(/'s (being|going)\b/gi," is $1").replace(/'d (like|love)\b/gi," would $1").replace(/\b(should)n't've\b/gi,"$1 not have").replace(/\b(would)n't've\b/gi,"$1 not have").replace(/\b(could)n't've\b/gi,"$1 not have").replace(/\b(s)han't\b/gi,"$1hall not").replace(/\b(w)on't\b/gi,"$1ill not").replace(/\b(c)an't\b/gi,"$1annot").replace(new RegExp("\\b(am|are|could|did|do|does|had|has|have|is|might|must|should|was|were|would)n't\\b","ig"),"$1 not").replace(/\b(g)onna\b/gi,"$1oing to").replace(/\b(w)anna\b/gi,"$1ant to").replace(/'ll\b/gi," will").replace(/'re\b/gi," are").replace(/'ve\b/gi," have").replace(/'m\b/gi," am");return e.cleaned=t,Promise.resolve(e)},e}(),i={en:"[-‐–—,;:!?.…'‘’\"“”()[\\]§@*/&#†‡′″]",fr:'[-‐–—,;:!?.…’"“”«»()[\\]§@*/&#†‡]',ja:'[-‾_＿－‐—―〜・･,，、､;；:：!！?？.．‥…。｡＇‘’"＂“”(（)）\\[［\\]］{｛}｝〈〉《》「｢」｣『』【】〔〕‖§¶@＠*＊/／\\＼&＆#＃%％‰†‡′″〃※]'},a=function(){function e(){r(this,e)}return e.prototype.clean=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cleaned:""},t=e.cleaned.replace(new RegExp("^(?:Hello|Hey|Hi|Yo)"+i.en+"* (.)","iu"),function(e,t){return t.toUpperCase()});return e.cleaned=t,Promise.resolve(e)},e}(),s=function(){function e(){r(this,e)}return e.prototype.clean=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cleaned:""},t=e.cleaned.replace(new RegExp("^(?:|Could you please |Please could you |Could you |Would you please |Please would you |Would you |Will you please |Please will you |Will you |Can you please |Please can you |Can you |Please do |Please )?(.)","i"),function(e,t){return t.toUpperCase()});return e.cleaned=t,Promise.resolve(e)},e}(),u=function(){function e(){r(this,e)}return e.prototype.clean=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cleaned:""},t=e.cleaned.replace(new RegExp("^(?:Tell me |Let me know |Inform me |I want to know )wh(at|ere|en|o)\\b","iu"),"Wh$1");return t!==e.cleaned&&t.match(/^Wh(at|ere|en|o)\b/i)&&(t=t.replace(/\.+$/,"?")),e.cleaned=t,Promise.resolve(e)},e}(),l=new e.Parser;l.pattern=function(){return new RegExp("midnight|morning|in the morning|noon|afternoon|in the afternoon|evening|in the evening|night|at night","i")},l.extract=function(t,r,n){var o=void 0,i=void 0;switch(n[0].toLowerCase()){case"midnight":o=0,i=0;break;case"morning":case"in the morning":o=9,i=0;break;case"noon":o=12,i=1;break;case"afternoon":case"in the afternoon":o=15,i=1;break;case"evening":case"in the evening":o=19,i=1;break;case"night":case"at night":o=22,i=1}return new e.ParsedResult({ref:r,text:n[0],index:n.index,start:{hour:o,meridiem:i}})};var c=new e.Refiner;c.refine=function(e,t){function r(e,t){!e.isCertain("meridiem")&&e.moment(t).isSame(e,"day")&&e.get("hour")<=t.getHours()&&(e.assign("meridiem",1),e.assign("hour",e.get("hour")+12))}var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.forwardHoursOnly!==!0?t:(t.forEach(function(e){r(e.start,e.ref),e.end&&r(e.end,e.ref)}),t)};var m=new Date,f=new e.Chrono(e.options.casualOption());f.parsers.push(l),f.refiners.push(c);var p={setRef:function(e){return m=e},parse:function(e){return f.parse(e,m,{forwardDatesOnly:!0,forwardHoursOnly:!0})}},d=Object.freeze({normaliseTimes:Symbol("normaliseTimes")}),h=function(){function e(){r(this,e)}return e.prototype.parse=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cleaned:""},t=this[d.normaliseTimes](e.cleaned),r=p.parse(t);if(!r.length)return e.time=null,Promise.resolve(e);var n=r.map(function(e){var r=e.start?Number(e.start.date()):null,n=e.end?Number(e.end.date()):null,o=e.text,i=t.substr(0,e.index)+t.substr(e.index+o.length);return{start:r,end:n,extractedText:o,processedText:i}});return e.time=n,Promise.resolve(e)},e.prototype[d.normaliseTimes]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/([0-9]) ?p\.m\./gi,"$1 PM").replace(/([0-9]) ?a\.m\./gi,"$1 AM")},e}(),y={en:{patterns:[/^Remind (.+?) (?:to|at|on|by|that|about)\b/i,/^Where (?:am|are|is) (.+?) (?:at|on|by)\b/i,/^Where (?:am|are|is) (.+?) supposed to\b/i,/^Where should (.+?) go\b/i,/^What (?:am|are|is) (.+?) doing\b/i,/^What (?:am|are|is) (.+?) supposed to\b/i,/^What should (.+?) do\b/i,/^What (?:do|does) (.+?) do\b/i,/^What is (.+?)(?:'s)? (?:schedule|planning|calendar|agenda)\b/i,/([^ ]+ (?:and|&) [^ ]+)/i],listBreaker:/,? (?:and|&) |, /gi},fr:{patterns:[/Rappelle (.+?) de (?:.+)/i,/Rappelle (.+?) d'(?:.+)/i,/Rappelle-(.+?) de (?:.+)/i,/Rappelle-(.+?) d'(?:.+)/i],listBreaker:/,? (?:et|&) |, /gi},ja:{patterns:[/(?:.+)を(.+)に思い出させて/i,/(.+)に(?:.+)を思い出させて/i,/(.+)は(?:.+)と言うリマインダーを作成して/i],listBreaker:new RegExp("、","gu")}},b=Object.freeze({users:Symbol("users"),normalise:Symbol("normalise")}),v=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];r(this,e),this[b.users]=t}return e.prototype.parse=function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cleaned:""},r=t.cleaned,n=null;return y.en.patterns.some(function(t){var o=t.exec(r);return!!o&&(n=e.parseUsers(o[1]),!!n.length)}),t.recipients=n,Promise.resolve(t)},e.prototype.parseUsers=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.split(y.en.listBreaker).map(function(e){return e.trim()}).filter(function(e){return!!e})},e}(),g={en:{patterns:[/Remind (?:.+?) (?:to|at|on|by|that|about) (.+)/i,/Remind (?:.+?) that (?:it|there) is (.+)/i],punctuation:/[-‐–—,;:!?.…'‘’"“”()[\]§@*\/&#†‡′″]+$/},fr:{patterns:[/Rappelle (?:.+?) de (.+)/i,/Rappelle (?:.+?) d'(.+)/i,/Rappelle-(?:.+?) de (.+)/i,/Rappelle-(?:.+?) d'(.+)/i],punctuation:/[-‐–—,;:!?.…’"“”«»()[\]§@*\/&#†‡]+$/},ja:{patterns:[/(.+)を(?:.+)に思い出させて/i,/(?:.+)に(.+)を思い出させて/i,/(?:.+)は(.+)と言うリマインダーを作成して/i],punctuation:new RegExp('[-‾_＿－‐—―〜・･,，、､;；:：!！?？.．‥…。｡＇‘’"＂“”(（)）\\[［\\]］{｛}｝〈〉《》「｢」｣『』【】〔〕‖§¶@＠*＊/／＼&＆#＃%％‰†‡′″〃※]+$',"u")}},w=Object.freeze({normalise:Symbol("normalise"),parseNoDates:Symbol("parseNoDates"),parseMultipleDates:Symbol("parseMultipleDates")}),T=function(){function e(){r(this,e)}return e.prototype.parse=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cleaned:"",time:[]},t=null;if(null===e.time){var r=this[w.normalise](e.cleaned);t=this[w.parseNoDates](r)}else if(1===e.time.length){var n=this[w.normalise](e.time[0].processedText);t=this[w.parseNoDates](n)}else if(e.time.length>1){var o=this[w.normalise](e.cleaned);t=this[w.parseMultipleDates](o)}return e.action=t,Promise.resolve(e)},e.prototype[w.normalise]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(g.en.punctuation,"").trim()},e.prototype[w.parseNoDates]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=null;return g.en.patterns.some(function(r){var n=r.exec(e);return!!n&&(t=n[1],!0)}),t},e.prototype[w.parseMultipleDates]=function(){return console.error("Parsing action with multiple time references is not implemented yet."),null},e}(),M=Object.freeze({listFormatter:Symbol("listFormatter"),getLocalised:Symbol("getLocalised"),formatUser:Symbol("formatUser"),formatAction:Symbol("formatAction"),formatTime:Symbol("formatTime"),isToday:Symbol("isToday"),isTomorrow:Symbol("isTomorrow"),isThisMonth:Symbol("isThisMonth"),formatHoursAndMinutes:Symbol("formatHoursAndMinutes")}),P="en",x={en:{template:"OK, I'll remind [users] [action] [time].",formatUser:function(e){return e.replace(/\bme\b/gi,"you").replace(/\bI am\b/gi,"you are").replace(/\bI have\b/gi,"you have").replace(/\bI will\b/gi,"you will").replace(/\bI\b/gi,"you").replace(/\bmy\b/gi,"your").replace(/\bmine\b/gi,"yours")}},fr:{template:"OK, je rappelerai [users] [action] [time].",formatUser:function(e){return e}},ja:{template:"承知しました。[time][users]に[action]をリマインドします。",formatUser:function(e){return e}}},S=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P;r(this,e),this.locale=t,"undefined"==typeof TwitterCldr?this[M.listFormatter]={format:function(e){return e.join(" and ")}}:(TwitterCldr.set_data(TwitterCldrDataBundle),this[M.listFormatter]=new TwitterCldr.ListFormatter)}return e.prototype.confirm=function(e){var t=this[M.getLocalised]("template"),r={users:this[M.formatUser](e),action:this[M.formatAction](e),time:this[M.formatTime](e)};return t.replace(/\[([^\]]+)\]/g,function(e,t){return r[t]})},e.prototype[M.getLocalised]=function(e){var t=this.locale;return x[this.locale]&&x[this.locale][e]||(t=P),x[t][e]},e.prototype[M.formatUser]=function(e){var t=e.recipients,r=this[M.getLocalised]("formatUser"),n=t.map(r);return this[M.listFormatter].format(n)},e.prototype[M.formatAction]=function(e){var t=e.action,r=e.cleaned,n=this[M.getLocalised]("formatUser"),o=n(t),i=new RegExp("\\bthat "+t,"iu"),a=new RegExp("\\bit is "+t,"iu"),s=new RegExp("\\bthere is "+t,"iu"),u=new RegExp("\\babout "+t,"iu");return i.test(r)?"that "+o:a.test(r)?"that it is "+o:s.test(r)?"that there is "+o:u.test(r)?"about "+o:"to "+o},e.prototype[M.formatTime]=function(e){var r=e.due;if(this[M.isToday](r)){var n=this[M.formatHoursAndMinutes](r);return"at "+n+" today"}if(this[M.isTomorrow](r)){var o=this[M.formatHoursAndMinutes](r);return"at "+o+" tomorrow"}return this[M.isThisMonth](r)?t(r).format("[on the] Do"):t(r).format("[on] MMMM [the] Do")},e.prototype[M.isToday]=function(e){var r=t().startOf("day"),n=t().add(1,"day").startOf("day");return t(e).isBetween(r,n)},e.prototype[M.isTomorrow]=function(e){var r=t().add(1,"day").startOf("day"),n=t().add(2,"day").startOf("day");return t(e).isBetween(r,n)},e.prototype[M.isThisMonth]=function(e){var r=t().startOf("month"),n=t().add(1,"month").startOf("month");return t(e).isBetween(r,n)},e.prototype[M.formatHoursAndMinutes]=function(e){e=t(e);var r=void 0;if(0===e.minute())r=e.format("h A");else if(15===e.minute())r=e.format("[quarter past] h A");else if(30===e.minute())r=e.format("[half past] h A");else if(45===e.minute()){var n=e.add(1,"hour");r=n.format("[quarter to] h A")}else r=e.format("h:m A");return r.replace(/([0-9]) ?AM$/gi,"$1 A.M.").replace(/([0-9]) ?PM$/gi,"$1 P.M.")},e}(),A=Object.freeze({reminderConfirmation:Symbol("reminderConfirmation")}),$=function(){function e(){r(this,e),this[A.reminderConfirmation]=new S}return e.prototype.refine=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=null!==e.time&&1===e.time.length&&null!==e.time[0].start&&null===e.time[0].end,r=null!==e.recipients&&e.recipients.length>0,n=null!==e.action;return e.cleaned.toLowerCase().startsWith("remind")&&t&&r&&n&&(e.due=e.time[0].start,e.confirmation=this[A.reminderConfirmation].confirm(e),e.intent="reminder"),Promise.resolve(e)},e}(),O=Object.freeze({time:Symbol("time"),users:Symbol("users"),listFormatter:Symbol("listFormatter"),formatTime:Symbol("formatTime"),isToday:Symbol("isToday"),isTomorrow:Symbol("isTomorrow"),isThisMonth:Symbol("isThisMonth"),formatHoursAndMinutes:Symbol("formatHoursAndMinutes")}),R={en:{formatUser:function(e){return e.replace(/\bme\b/gi,"you").replace(/\bI am\b/gi,"you are").replace(/\bI have\b/gi,"you have").replace(/\bI will\b/gi,"you will").replace(/\bI\b/gi,"you").replace(/\bmy\b/gi,"your").replace(/\bmine\b/gi,"yours")}},fr:{formatUser:function(e){return e}},ja:{formatUser:function(e){return e}}},C=function(){function e(t){var n=t.due,o=t.recipients;r(this,e),"undefined"==typeof TwitterCldr?this[O.listFormatter]={format:function(e){return e.join(" and ")}}:(TwitterCldr.set_data(TwitterCldrDataBundle),this[O.listFormatter]=new TwitterCldr.ListFormatter),this[O.time]=n,this[O.users]=o}return e.prototype.confirm=function(e){var t=this[O.formatUser](this[O.users]);if(!e){var r=this[O.formatTime]({due:this[O.time]});return"I can't find anything scheduled for "+t+" "+r+"."}var n=e.action,o=this[O.formatTime](e);return"you"===t||this[O.users].length>=1?o+", "+t+' have the following activity: "'+n+'".':o+", "+t+' has the following activity: "'+n+'".'},e.prototype[O.formatUser]=function(e){var t=e.map(R.en.formatUser);return this[O.listFormatter].format(t)},e.prototype[O.formatTime]=function(e){var r=e.due,n=this[O.formatHoursAndMinutes](r);if(this[O.isToday](r))return"at "+n+" today";if(this[O.isTomorrow](r))return"at "+n+" tomorrow";if(this[O.isThisMonth](r)){var o=t(r).format("Do");return"at "+n+" on the "+o}var i=t(r).format("MMMM [the] Do");return"at "+n+" on "+i},e.prototype[O.isToday]=function(e){var r=t().startOf("day"),n=t().add(1,"day").startOf("day");return t(e).isBetween(r,n)},e.prototype[O.isTomorrow]=function(e){var r=t().add(1,"day").startOf("day"),n=t().add(2,"day").startOf("day");return t(e).isBetween(r,n)},e.prototype[O.isThisMonth]=function(e){var r=t().startOf("month"),n=t().add(1,"month").startOf("month");return t(e).isBetween(r,n)},e.prototype[O.formatHoursAndMinutes]=function(e){e=t(e);var r=void 0;if(0===e.minute())r=e.format("h A");else if(15===e.minute())r=e.format("[quarter past] h A");else if(30===e.minute())r=e.format("[half past] h A");else if(45===e.minute()){var n=e.add(1,"hour");r=n.format("[quarter to] h A")}else r=e.format("h:m A");return r.replace(/([0-9]) ?AM$/gi,"$1 A.M.").replace(/([0-9]) ?PM$/gi,"$1 P.M.")},e}(),U={en:{formatUser:function(e){return e.replace(/\bI\b/gi,"me").replace(/\bmy\b/gi,"me").replace(/\bmine\b/gi,"me")}},fr:{formatUser:function(e){return e}},ja:{formatUser:function(e){return e}}},k=function(){function e(){r(this,e)}return e.prototype.refine=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=null!==e.time&&1===e.time.length&&null!==e.time[0].start&&null===e.time[0].end,r=null!==e.recipients&&e.recipients.length>0,n=null===e.action;if(e.cleaned.match(/^(?:What|Where|When)/i)&&t&&r&&n){var o=new C({due:e.time[0].start,recipients:e.recipients});e.due=e.time[0].start,e.recipients=e.recipients.map(U.en.formatUser),e.confirmation=o.confirm.bind(o),e.intent="query"}return Promise.resolve(e)},e}(),j=Object.freeze({cleaners:Symbol("cleaners"),parsers:Symbol("parsers"),refiners:Symbol("refiners")}),W=function(){function e(){r(this,e),this[j.cleaners]=[new n,new o,new a,new s,new u],this[j.parsers]=[new h,new v,new T],this[j.refiners]=[new $,new k];var t=new Function("return this")();t.intentParser=this}return e.prototype.parse=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e=String(e);var t={raw:e,intent:null},r=this[j.cleaners].map(function(e){return e.clean.bind(e)}),n=this[j.parsers].map(function(e){return e.parse.bind(e)}),o=this[j.refiners].map(function(e){return e.refine.bind(e)});return new Promise(function(e,i){Promise.resolve(t).then(function(e){return r.reduce(function(e,t){return e.then(t)},Promise.resolve(e))}).then(function(e){return n.reduce(function(e,t){return e.then(t)},Promise.resolve(e))}).then(function(e){return o.reduce(function(e,t){return e.then(t)},Promise.resolve(e))}).then(function(t){return null===t.intent?(console.error("The intent could not be parsed:",t),i(null)):e(t)})})},e}();return W});
//# sourceMappingURL=intent-parser.js.map
