var dust = require("capnp-js-plugin-dust");(function(){dust.register("constants",body_0);function body_0(chk,ctx){return chk.write("define(['capnp-js/builder/Allocator', 'capnp-js/reader/index', './rScope'], function (Allocator,            reader,            scope) {var constants = {};var allocator = new Allocator();").section(ctx.getPath(true, ["nodes"]),ctx,{"block":body_1},{}).write("return constants;});");}function body_1(chk,ctx){return chk.partial("constants/node",ctx,{"recurTarget":"struct"});}return body_0;})();
(function(){dust.register("rScope",body_0);function body_0(chk,ctx){return chk.write("define(['./rTypes'").exists(ctx.getPath(true, ["imports"]),ctx,{"block":body_1},{}).write("], function (types ").exists(ctx.getPath(true, ["imports"]),ctx,{"block":body_2},{}).write(") {var scope = {};for (var id in types) {scope[id] = types[id];}").section(ctx.getPath(true, ["imports"]),ctx,{"block":body_5},{}).write("return scope;});");}function body_1(chk,ctx){return chk.write(",").helper("imports",ctx,{},{"file":"rTypes"});}function body_2(chk,ctx){return chk.write(",").section(ctx.getPath(true, ["imports"]),ctx,{"block":body_3},{});}function body_3(chk,ctx){return chk.write("file").reference(ctx.get(["$idx"], false),ctx,"h").helper("sep",ctx,{"block":body_4},{});}function body_4(chk,ctx){return chk.write(",");}function body_5(chk,ctx){return chk.section(ctx.getPath(true, ["typeIds"]),ctx,{"block":body_6},{"fileId":ctx.get(["$idx"], false)});}function body_6(chk,ctx){return chk.write("scope[\"").reference(ctx.getPath(true, []),ctx,"h").write("\"] = file").reference(ctx.get(["fileId"], false),ctx,"h").write("[\"").reference(ctx.getPath(true, []),ctx,"h").write("\"];");}return body_0;})();
(function(){dust.register("rTypes",body_0);function body_0(chk,ctx){return chk.write("define(['capnp-js/reader/index'], function (reader) {var types = {};").section(ctx.getPath(true, ["nodes"]),ctx,{"block":body_1},{}).write("return types;});");}function body_1(chk,ctx){return chk.partial("rTypes/structure",ctx,{}).partial("rTypes/enumeration",ctx,{"recurTarget":"struct"});}return body_0;})();
(function(){dust.register("readers",body_0);function body_0(chk,ctx){return chk.write("define(['capnp-js/builder/Allocator', 'capnp-js/reader/index', './rScope', './constants'").exists(ctx.getPath(true, ["imports"]),ctx,{"block":body_1},{}).write("], function (Allocator,            reader,            scope,     constants) {var readers = {};var allocator = new Allocator();").section(ctx.getPath(true, ["nodes"]),ctx,{"block":body_2},{}).write("return readers;});");}function body_1(chk,ctx){return chk.write(",").helper("imports",ctx,{},{"file":"readers"});}function body_2(chk,ctx){return chk.helper("eq",ctx,{"else":body_3,"block":body_4},{"key":ctx.getPath(true, ["meta"]),"value":"const"});}function body_3(chk,ctx){return chk.write("readers.").reference(ctx.getPath(true, ["name"]),ctx,"h").write(" = ").partial("readers/node",ctx,{}).write(";");}function body_4(chk,ctx){return chk.write("readers.").helper("constant",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = ").partial("readers/node",ctx,{}).write(";");}return body_0;})();
(function(){dust.register("constants/node",body_0);function body_0(chk,ctx){return chk.helper("eq",ctx,{"block":body_1},{"key":ctx.getPath(true, ["meta"]),"value":"const"}).exists(ctx.get(["recurTarget"], false),ctx,{"block":body_26},{});}function body_1(chk,ctx){return chk.section(ctx.getPath(true, ["datum"]),ctx,{"block":body_2},{"constId":ctx.getPath(true, ["id"])});}function body_2(chk,ctx){return chk.exists(ctx.getPath(true, ["meta"]),ctx,{"else":body_3,"block":body_21},{});}function body_3(chk,ctx){return chk.helper("provide",ctx,{"blob":body_4,"block":body_6},{});}function body_4(chk,ctx){return chk.helper("verbatim",ctx,{"block":body_5},{});}function body_5(chk,ctx){return chk.write("(function () {var arena = ").partial("readers/listArena",ctx,{}).write(";return reader.").reference(ctx.getPath(true, ["type"]),ctx,"h").write("._deref(arena,{segment : arena.getSegment(0),position : 0},0);})()");}function body_6(chk,ctx){return chk.helper("eq",ctx,{"block":body_7},{"key":ctx.getPath(true, ["type"]),"value":"Text"}).helper("eq",ctx,{"block":body_8},{"key":ctx.getPath(true, ["type"]),"value":"Data"}).helper("eq",ctx,{"block":body_9},{"key":ctx.getPath(true, ["type"]),"value":"Void"}).helper("eq",ctx,{"block":body_10},{"key":ctx.getPath(true, ["type"]),"value":"Bool"}).helper("eq",ctx,{"block":body_11},{"key":ctx.getPath(true, ["type"]),"value":"Int8"}).helper("eq",ctx,{"block":body_12},{"key":ctx.getPath(true, ["type"]),"value":"Int16"}).helper("eq",ctx,{"block":body_13},{"key":ctx.getPath(true, ["type"]),"value":"Int32"}).helper("eq",ctx,{"block":body_14},{"key":ctx.getPath(true, ["type"]),"value":"Int64"}).helper("eq",ctx,{"block":body_15},{"key":ctx.getPath(true, ["type"]),"value":"UInt8"}).helper("eq",ctx,{"block":body_16},{"key":ctx.getPath(true, ["type"]),"value":"UInt16"}).helper("eq",ctx,{"block":body_17},{"key":ctx.getPath(true, ["type"]),"value":"UInt32"}).helper("eq",ctx,{"block":body_18},{"key":ctx.getPath(true, ["type"]),"value":"UInt64"}).helper("eq",ctx,{"block":body_19},{"key":ctx.getPath(true, ["type"]),"value":"Float32"}).helper("eq",ctx,{"block":body_20},{"key":ctx.getPath(true, ["type"]),"value":"Float64"});}function body_7(chk,ctx){return chk.write("constants[\"").reference(ctx.get(["constId"], false),ctx,"h").write("\"] = ").reference(ctx.get(["blob"], false),ctx,"h",["s"]).write(";");}function body_8(chk,ctx){return chk.write("constants[\"").reference(ctx.get(["constId"], false),ctx,"h").write("\"] = ").reference(ctx.get(["blob"], false),ctx,"h",["s"]).write(";");}function body_9(chk,ctx){return chk.write("constants[\"").reference(ctx.get(["constId"], false),ctx,"h").write("\"] = null;");}function body_10(chk,ctx){return chk.write("constants[\"").reference(ctx.get(["constId"], false),ctx,"h").write("\"] = ").reference(ctx.getPath(true, ["value"]),ctx,"h").write(";");}function body_11(chk,ctx){return chk.write("constants[\"").reference(ctx.get(["constId"], false),ctx,"h").write("\"] = ").reference(ctx.getPath(true, ["value"]),ctx,"h").write(";");}function body_12(chk,ctx){return chk.write("constants[\"").reference(ctx.get(["constId"], false),ctx,"h").write("\"] = ").reference(ctx.getPath(true, ["value"]),ctx,"h").write(";");}function body_13(chk,ctx){return chk.write("constants[\"").reference(ctx.get(["constId"], false),ctx,"h").write("\"] = ").reference(ctx.getPath(true, ["value"]),ctx,"h").write(";");}function body_14(chk,ctx){return chk.write("constants[\"").reference(ctx.get(["constId"], false),ctx,"h").write("\"] = ").reference(ctx.getPath(true, ["value"]),ctx,"h",["js"]).write(";");}function body_15(chk,ctx){return chk.write("constants[\"").reference(ctx.get(["constId"], false),ctx,"h").write("\"] = ").reference(ctx.getPath(true, ["value"]),ctx,"h").write(";");}function body_16(chk,ctx){return chk.write("constants[\"").reference(ctx.get(["constId"], false),ctx,"h").write("\"] = ").reference(ctx.getPath(true, ["value"]),ctx,"h").write(";");}function body_17(chk,ctx){return chk.write("contants[\"").reference(ctx.get(["constId"], false),ctx,"h").write("\"] = ").reference(ctx.getPath(true, ["value"]),ctx,"h").write(";");}function body_18(chk,ctx){return chk.write("constants[\"").reference(ctx.get(["constId"], false),ctx,"h").write("\"] = ").reference(ctx.getPath(true, ["value"]),ctx,"h",["js"]).write(";");}function body_19(chk,ctx){return chk.write("constants[\"").reference(ctx.get(["constId"], false),ctx,"h").write("\"] = ").reference(ctx.getPath(true, ["value"]),ctx,"h").write(";");}function body_20(chk,ctx){return chk.write("constants[\"").reference(ctx.get(["constId"], false),ctx,"h").write("\"] = ").reference(ctx.getPath(true, ["value"]),ctx,"h").write(";");}function body_21(chk,ctx){return chk.helper("eq",ctx,{"else":body_22,"block":body_25},{"key":ctx.getPath(true, ["meta"]),"value":"enum"});}function body_22(chk,ctx){return chk.helper("eq",ctx,{"block":body_23},{"key":ctx.getPath(true, ["meta"]),"value":"struct"}).helper("eq",ctx,{"block":body_24},{"key":ctx.getPath(true, ["meta"]),"value":"list"});}function body_23(chk,ctx){return chk.write("constants[\"").reference(ctx.get(["constId"], false),ctx,"h").write("\"] = (function () {var arena = allocator._fromBase64(\"").reference(ctx.getPath(true, ["value"]),ctx,"h").write("\").asReader();return scope[\"").reference(ctx.getPath(true, ["id"]),ctx,"h").write("\"]._deref(arena,{segment : arena.getSegment(0),position : 0},0);})();");}function body_24(chk,ctx){return chk.write("constants[\"").reference(ctx.get(["constId"], false),ctx,"h").write("\"] = (function () {var arena = ").partial("readers/listArena",ctx,{}).write(";return ").partial("readers/list",ctx,{}).write("._deref(arena,{segment : arena.getSegment(0),position : 0},0);})();");}function body_25(chk,ctx){return chk.write("constants[\"").reference(ctx.get(["constId"], false),ctx,"h").write("\"] = ").reference(ctx.getPath(true, ["value"]),ctx,"h").write(";");}function body_26(chk,ctx){return chk.helper("eq",ctx,{"block":body_27},{"key":ctx.getPath(true, ["meta"]),"value":ctx.get(["recurTarget"], false)});}function body_27(chk,ctx){return chk.section(ctx.getPath(true, ["nodes"]),ctx,{"block":body_28},{});}function body_28(chk,ctx){return chk.partial("constants/node",ctx,{"recurTarget":ctx.get(["recurTarget"], false)});}return body_0;})();
(function(){dust.register("rTypes/enumeration",body_0);function body_0(chk,ctx){return chk.helper("eq",ctx,{"block":body_1},{"key":ctx.getPath(true, ["meta"]),"value":"enum"}).exists(ctx.get(["recurTarget"], false),ctx,{"block":body_4},{});}function body_1(chk,ctx){return chk.write("types['").reference(ctx.getPath(true, ["id"]),ctx,"h").write("'] = {").section(ctx.getPath(true, ["enumerants"]),ctx,{"block":body_2},{}).write("};");}function body_2(chk,ctx){return chk.helper("constant",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" : ").reference(ctx.get(["$idx"], false),ctx,"h").helper("sep",ctx,{"block":body_3},{});}function body_3(chk,ctx){return chk.write(",");}function body_4(chk,ctx){return chk.helper("eq",ctx,{"block":body_5},{"key":ctx.getPath(true, ["meta"]),"value":ctx.get(["recurTarget"], false)});}function body_5(chk,ctx){return chk.section(ctx.getPath(true, ["nodes"]),ctx,{"block":body_6},{});}function body_6(chk,ctx){return chk.partial("rTypes/enumeration",ctx,{"recurTarget":ctx.get(["recurTarget"], false)});}return body_0;})();
(function(){dust.register("rTypes/structure",body_0);function body_0(chk,ctx){return chk.helper("eq",ctx,{"block":body_1},{"key":ctx.getPath(true, ["meta"]),"value":"struct"});}function body_1(chk,ctx){return chk.write("types[\"").reference(ctx.getPath(true, ["id"]),ctx,"h").write("\"] = reader.structure(").reference(ctx.getPath(true, ["preferredListEncoding"]),ctx,"h").write(",").helper("math",ctx,{},{"key":ctx.getPath(true, ["dataWordCount"]),"method":"multiply","operand":8}).write(",").helper("math",ctx,{},{"key":ctx.getPath(true, ["pointerCount"]),"method":"multiply","operand":8}).write(");").section(ctx.getPath(true, ["nodes"]),ctx,{"block":body_2},{});}function body_2(chk,ctx){return chk.partial("rTypes/structure",ctx,{});}return body_0;})();
(function(){dust.register("readers/dataField",body_0);function body_0(chk,ctx){return chk.write("Structure.prototype.").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = function () {").partial("throwOnInactive",ctx,{"error":"Attempted to access an inactive union member"}).write("var position = this._dataSection +").helper("math",ctx,{},{"key":ctx.getPath(true, ["offset"]),"method":"multiply","operand":ctx.get(["byteCount"], false)}).write(";if (position < this._pointersSection) {return ").reference(ctx.get(["decoder"], false),ctx,"h").write(".").reference(ctx.get(["method"], false),ctx,"h").write("(").reference(ctx.get(["default"], false),ctx,"h",["js"]).write(", this._segment, position);} else {return ").reference(ctx.get(["default"], false),ctx,"h",["js"]).write(";}};");}return body_0;})();
(function(){dust.register("readers/floatField",body_0);function body_0(chk,ctx){return chk.write("Structure.prototype.").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = function () {").partial("throwOnInactive",ctx,{"error":"Attempted to access an inactive union member"}).write("var position = this._dataSection +").helper("math",ctx,{},{"key":ctx.getPath(true, ["offset"]),"method":"multiply","operand":ctx.get(["byteCount"], false)}).write(";if (position < this._pointersSection) {return ").reference(ctx.get(["decoder"], false),ctx,"h").write(".").reference(ctx.get(["method"], false),ctx,"h").write("(this._defaults.").reference(ctx.getPath(true, ["name"]),ctx,"h").write(",this._segment,position);} else {return ").reference(ctx.getPath(true, ["defaultValue"]),ctx,"h").write(";}};");}return body_0;})();
(function(){dust.register("readers/list",body_0);function body_0(chk,ctx){return chk.exists(ctx.getPath(true, ["type","meta"]),ctx,{"else":body_1,"block":body_2},{});}function body_1(chk,ctx){return chk.write("reader.lists.").reference(ctx.getPath(true, ["type"]),ctx,"h");}function body_2(chk,ctx){return chk.section(ctx.getPath(true, ["type"]),ctx,{"block":body_3},{});}function body_3(chk,ctx){return chk.helper("eq",ctx,{"block":body_4},{"key":ctx.getPath(true, ["meta"]),"value":"list"}).helper("eq",ctx,{"block":body_5},{"key":ctx.getPath(true, ["meta"]),"value":"struct"}).helper("eq",ctx,{"block":body_6},{"key":ctx.getPath(true, ["meta"]),"value":"enum"});}function body_4(chk,ctx){return chk.write("reader.lists.list(").partial("readers/list",ctx,{}).write(")");}function body_5(chk,ctx){return chk.write("reader.lists.structure(scope['").reference(ctx.getPath(true, ["id"]),ctx,"h").write("'])");}function body_6(chk,ctx){return chk.write("reader.lists.UInt16");}return body_0;})();
(function(){dust.register("readers/listArena",body_0);function body_0(chk,ctx){return chk.helper("eq",ctx,{"else":body_1,"block":body_2},{"key":ctx.getPath(true, ["value"]),"value":"AAAAAAAAAAA="});}function body_1(chk,ctx){return chk.write("allocator._fromBase64(\"").reference(ctx.getPath(true, ["value"]),ctx,"h").write("\").asReader()");}function body_2(chk,ctx){return chk.helper("provide",ctx,{"encoding":body_3,"block":body_4},{});}function body_3(chk,ctx){return chk.helper("nullListPointer",ctx,{},{"type":ctx.getPath(true, ["type"])});}function body_4(chk,ctx){return chk.write("allocator._fromBase64(\"").reference(ctx.getPath(true, ["encoding"]),ctx,"h").write("\").asReader()");}return body_0;})();
(function(){dust.register("readers/listDefaultArena",body_0);function body_0(chk,ctx){return chk.helper("eq",ctx,{"else":body_1,"block":body_2},{"key":ctx.getPath(true, ["defaultValue"]),"value":"AAAAAAAAAAA="});}function body_1(chk,ctx){return chk.write("allocator._fromBase64(\"").reference(ctx.getPath(true, ["defaultValue"]),ctx,"h").write("\").asReader()");}function body_2(chk,ctx){return chk.helper("provide",ctx,{"encoding":body_3,"block":body_4},{});}function body_3(chk,ctx){return chk.helper("nullListPointer",ctx,{},{"type":ctx.getPath(true, ["type"])});}function body_4(chk,ctx){return chk.write("allocator._fromBase64(\"").reference(ctx.getPath(true, ["encoding"]),ctx,"h").write("\").asReader()");}return body_0;})();
(function(){dust.register("readers/listField",body_0);function body_0(chk,ctx){return chk.write("Structure.prototype.").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = function () {").partial("throwOnInactive",ctx,{"error":"Attempted to access an inactive union member"}).write("var pointer = {segment : this._segment,position : this._pointersSection +").helper("math",ctx,{},{"key":ctx.getPath(true, ["offset"]),"method":"multiply","operand":"8"}).write("};if (pointer.position < this._end && !reader.isNull(pointer)) {return reader.").reference(ctx.getPath(true, ["type"]),ctx,"h").write("._deref(this._arena, pointer, this._depth+1);} else {return this._defaults.").reference(ctx.getPath(true, ["name"]),ctx,"h").write(";}};");}return body_0;})();
(function(){dust.register("readers/node",body_0);function body_0(chk,ctx){return chk.helper("eq",ctx,{"block":body_1},{"key":ctx.getPath(true, ["meta"]),"value":"struct"}).helper("eq",ctx,{"block":body_2},{"key":ctx.getPath(true, ["meta"]),"value":"enum"}).helper("eq",ctx,{"block":body_3},{"key":ctx.getPath(true, ["meta"]),"value":"const"});}function body_1(chk,ctx){return chk.partial("readers/structure",ctx,{}).write("()");}function body_2(chk,ctx){return chk.write("scope['").reference(ctx.getPath(true, ["id"]),ctx,"h").write("']");}function body_3(chk,ctx){return chk.write("constants['").reference(ctx.getPath(true, ["id"]),ctx,"h").write("']");}return body_0;})();
(function(){dust.register("readers/structure",body_0);function body_0(chk,ctx){return chk.write("(function () {").notexists(ctx.getPath(true, ["meta"]),ctx,{"else":body_1,"block":body_3},{}).section(ctx.getPath(true, ["nodes"]),ctx,{"block":body_4},{}).exists(ctx.getPath(true, ["discriminantCount"]),ctx,{"block":body_8},{}).section(ctx.getPath(true, ["fields"]),ctx,{"block":body_10},{}).write("Structure.prototype._defaults = {").helper("provide",ctx,{"deref":body_35,"bytes":body_37,"block":body_38},{}).write("};return Structure;})");}function body_1(chk,ctx){return chk.helper("eq",ctx,{"block":body_2},{"key":ctx.getPath(true, ["meta"]),"value":"struct"});}function body_2(chk,ctx){return chk.write("var Structure = scope[\"").reference(ctx.getPath(true, ["id"]),ctx,"h").write("\"];");}function body_3(chk,ctx){return chk.write("var Structure = reader.group();");}function body_4(chk,ctx){return chk.helper("eq",ctx,{"block":body_5},{"key":ctx.getPath(true, ["meta"]),"value":"struct"}).helper("eq",ctx,{"block":body_6},{"key":ctx.getPath(true, ["meta"]),"value":"enum"}).helper("eq",ctx,{"block":body_7},{"key":ctx.getPath(true, ["meta"]),"value":"const"});}function body_5(chk,ctx){return chk.write("Structure.").reference(ctx.getPath(true, ["name"]),ctx,"h").write(" = ").partial("readers/node",ctx,{}).write(";");}function body_6(chk,ctx){return chk.write("Structure.").reference(ctx.getPath(true, ["name"]),ctx,"h").write(" = ").partial("readers/node",ctx,{}).write(";");}function body_7(chk,ctx){return chk.write("Structure.prototype.").helper("constant",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = Structure.").helper("constant",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = constants[\"").reference(ctx.getPath(true, ["id"]),ctx,"h").write("\"];");}function body_8(chk,ctx){return chk.helper("gt",ctx,{"block":body_9},{"key":ctx.getPath(true, ["discriminantCount"]),"value":0});}function body_9(chk,ctx){return chk.write("Structure.prototype.which = function () {var position = this._dataSection +").helper("math",ctx,{},{"key":ctx.getPath(true, ["discriminantOffset"]),"method":"multiply","operand":"2"}).write(";if (position < this._pointersSection) {return reader.primitives.uint16(this._segment, position);} else {return 0;}};");}function body_10(chk,ctx){return chk.helper("ne",ctx,{"block":body_11},{"key":ctx.getPath(true, ["discriminantValue"]),"value":65535}).exists(ctx.getPath(true, ["meta"]),ctx,{"else":body_12,"block":body_30},{});}function body_11(chk,ctx){return chk.write("Structure.").helper("constant",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = Structure.prototype.").helper("constant",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = ").reference(ctx.getPath(true, ["discriminantValue"]),ctx,"h").write(";Structure.prototype.").helper("fieldIser",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = function () {return this.which() === ").reference(ctx.getPath(true, ["discriminantValue"]),ctx,"h").write(";};");}function body_12(chk,ctx){return chk.helper("eq",ctx,{"block":body_13},{"key":ctx.getPath(true, ["type"]),"value":"group"}).helper("eq",ctx,{"block":body_14},{"key":ctx.getPath(true, ["type"]),"value":"Data"}).helper("eq",ctx,{"block":body_15},{"key":ctx.getPath(true, ["type"]),"value":"Text"}).helper("eq",ctx,{"block":body_16},{"key":ctx.getPath(true, ["type"]),"value":"AnyPointer"}).helper("eq",ctx,{"block":body_17},{"key":ctx.getPath(true, ["type"]),"value":"Void"}).helper("eq",ctx,{"block":body_18},{"key":ctx.getPath(true, ["type"]),"value":"Bool"}).section(ctx.getPath(true, []),ctx,{"block":body_19},{"decoder":"reader.fields"});}function body_13(chk,ctx){return chk.write("Structure.Group_").reference(ctx.getPath(true, ["name"]),ctx,"h").write(" = ").partial("readers/structure",ctx,{}).write("();Structure.prototype.").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = function () {").partial("throwOnInactive",ctx,{"error":"Attempted to access an inactive union member"}).write("return new Structure.Group_").reference(ctx.getPath(true, ["name"]),ctx,"h").write("(this);};");}function body_14(chk,ctx){return chk.partial("readers/listField",ctx,{});}function body_15(chk,ctx){return chk.partial("readers/listField",ctx,{});}function body_16(chk,ctx){return chk.write("Structure.prototype.").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = function () {").partial("throwOnInactive",ctx,{"error":"Attempted to access an inactive union member"}).write("var pointer = {segment : this._segment,position : this._pointersSection +").helper("math",ctx,{},{"key":ctx.getPath(true, ["offset"]),"method":"multiply","operand":"8"}).write("};if (pointer.position < this._end && !reader.isNull(pointer)) {return reader.AnyPointer._deref(this._arena,pointer,this._depth + 1);} else {return this._defaults.").reference(ctx.getPath(true, ["name"]),ctx,"h").write(";}};");}function body_17(chk,ctx){return chk.write("Structure.prototype.").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = function () {").partial("throwOnInactive",ctx,{"error":"Attempted to access an inactive union member"}).write("return null;};");}function body_18(chk,ctx){return chk.write("Structure.prototype.").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = function () {").partial("throwOnInactive",ctx,{"error":"Attempted to access an inactive union member"}).write("var position = this._dataSection + ").helper("boolOffset",ctx,{},{"offset":ctx.getPath(true, ["offset"])}).write(";if (position < this._pointersSection) {return reader.fields.bool(").reference(ctx.getPath(true, ["defaultValue"]),ctx,"h").write(",this._segment,position,").helper("boolMask",ctx,{},{"offset":ctx.getPath(true, ["offset"])}).write(");} else {return !!").reference(ctx.getPath(true, ["defaultValue"]),ctx,"h").write(";}};");}function body_19(chk,ctx){return chk.helper("eq",ctx,{"block":body_20},{"key":ctx.getPath(true, ["type"]),"value":"Int8"}).helper("eq",ctx,{"block":body_21},{"key":ctx.getPath(true, ["type"]),"value":"Int16"}).helper("eq",ctx,{"block":body_22},{"key":ctx.getPath(true, ["type"]),"value":"Int32"}).helper("eq",ctx,{"block":body_23},{"key":ctx.getPath(true, ["type"]),"value":"Int64"}).helper("eq",ctx,{"block":body_24},{"key":ctx.getPath(true, ["type"]),"value":"UInt8"}).helper("eq",ctx,{"block":body_25},{"key":ctx.getPath(true, ["type"]),"value":"UInt16"}).helper("eq",ctx,{"block":body_26},{"key":ctx.getPath(true, ["type"]),"value":"UInt32"}).helper("eq",ctx,{"block":body_27},{"key":ctx.getPath(true, ["type"]),"value":"UInt64"}).helper("eq",ctx,{"block":body_28},{"key":ctx.getPath(true, ["type"]),"value":"Float32"}).helper("eq",ctx,{"block":body_29},{"key":ctx.getPath(true, ["type"]),"value":"Float64"});}function body_20(chk,ctx){return chk.partial("readers/dataField",ctx,{"default":ctx.getPath(true, ["defaultValue"]),"method":"int8","byteCount":"1"});}function body_21(chk,ctx){return chk.partial("readers/dataField",ctx,{"default":ctx.getPath(true, ["defaultValue"]),"method":"int16","byteCount":"2"});}function body_22(chk,ctx){return chk.partial("readers/dataField",ctx,{"default":ctx.getPath(true, ["defaultValue"]),"method":"int32","byteCount":"4"});}function body_23(chk,ctx){return chk.partial("readers/dataField",ctx,{"default":ctx.getPath(true, ["defaultValue"]),"method":"int64","byteCount":"8"});}function body_24(chk,ctx){return chk.partial("readers/dataField",ctx,{"default":ctx.getPath(true, ["defaultValue"]),"method":"uint8","byteCount":"1"});}function body_25(chk,ctx){return chk.partial("readers/dataField",ctx,{"default":ctx.getPath(true, ["defaultValue"]),"method":"uint16","byteCount":"2"});}function body_26(chk,ctx){return chk.partial("readers/dataField",ctx,{"default":ctx.getPath(true, ["defaultValue"]),"method":"uint32","byteCount":"4"});}function body_27(chk,ctx){return chk.partial("readers/dataField",ctx,{"default":ctx.getPath(true, ["defaultValue"]),"method":"uint64","byteCount":"8"});}function body_28(chk,ctx){return chk.partial("readers/floatField",ctx,{"method":"float32","byteCount":"4"});}function body_29(chk,ctx){return chk.partial("readers/floatField",ctx,{"method":"float64","byteCount":"8"});}function body_30(chk,ctx){return chk.helper("eq",ctx,{"else":body_31,"block":body_34},{"key":ctx.getPath(true, ["meta"]),"value":"enum"});}function body_31(chk,ctx){return chk.write("Structure.prototype.").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = (function() {").helper("eq",ctx,{"block":body_32},{"key":ctx.getPath(true, ["meta"]),"value":"struct"}).helper("eq",ctx,{"block":body_33},{"key":ctx.getPath(true, ["meta"]),"value":"list"}).write("return function () {").partial("throwOnInactive",ctx,{"error":"Attempted to access an inactive union member"}).write("var pointer = {segment : this._segment,position : this._pointersSection +").helper("math",ctx,{},{"key":ctx.getPath(true, ["offset"]),"method":"multiply","operand":"8"}).write("};if (pointer.position < this._end && !reader.isNull(pointer)) {return Reader._deref(this._arena, pointer, this._depth+1);} else {return this._defaults.").reference(ctx.getPath(true, ["name"]),ctx,"h").write(";}};})();Structure.prototype.").helper("fieldHaser",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = function () {").partial("throwOnInactive",ctx,{"error":"Attempted to access an inactive union member"}).write("var pointer = {segment : this._segment,position : this._pointersSection +").helper("math",ctx,{},{"key":ctx.getPath(true, ["offset"]),"method":"multiply","operand":"8"}).write("};return pointer.position < this._end && !reader.isNull(pointer);};");}function body_32(chk,ctx){return chk.write("var Reader = scope[\"").reference(ctx.getPath(true, ["id"]),ctx,"h").write("\"];");}function body_33(chk,ctx){return chk.write("var Reader = ").partial("readers/list",ctx,{}).write(";");}function body_34(chk,ctx){return chk.partial("readers/dataField",ctx,{"default":ctx.getPath(true, ["defaultValue"]),"decoder":"reader.fields","method":"uint16","byteCount":"2"});}function body_35(chk,ctx){return chk.helper("verbatim",ctx,{"block":body_36},{});}function body_36(chk,ctx){return chk.write("Reader._deref(arena,{segment : arena.getSegment(0),position : 0},0)");}function body_37(chk,ctx){return chk.helper("bytesFields",ctx,{},{"fields":ctx.getPath(true, ["fields"])});}function body_38(chk,ctx){return chk.section(ctx.getPath(true, ["bytes"]),ctx,{"block":body_39},{});}function body_39(chk,ctx){return chk.reference(ctx.getPath(true, ["name"]),ctx,"h").write(" : (function () {").exists(ctx.getPath(true, ["meta"]),ctx,{"else":body_40,"block":body_46},{}).write("})()").helper("sep",ctx,{"block":body_49},{});}function body_40(chk,ctx){return chk.helper("eq",ctx,{"block":body_41},{"key":ctx.getPath(true, ["type"]),"value":"AnyPointer"}).helper("eq",ctx,{"block":body_42},{"key":ctx.getPath(true, ["type"]),"value":"Text"}).helper("eq",ctx,{"block":body_43},{"key":ctx.getPath(true, ["type"]),"value":"Data"}).helper("eq",ctx,{"block":body_44},{"key":ctx.getPath(true, ["type"]),"value":"Float32"}).helper("eq",ctx,{"block":body_45},{"key":ctx.getPath(true, ["type"]),"value":"Float64"});}function body_41(chk,ctx){return chk.write("var Reader = reader.AnyPointer;var arena = allocator._fromBase64(\"").reference(ctx.getPath(true, ["defaultValue"]),ctx,"h").write("\").asReader();return ").reference(ctx.get(["deref"], false),ctx,"h").write(";");}function body_42(chk,ctx){return chk.write("var Reader = reader.Text;var arena = ").partial("readers/listDefaultArena",ctx,{}).write(";return ").reference(ctx.get(["deref"], false),ctx,"h").write(";");}function body_43(chk,ctx){return chk.write("var Reader = reader.Data;var arena = ").partial("readers/listDefaultArena",ctx,{}).write(";return ").reference(ctx.get(["deref"], false),ctx,"h").write(";");}function body_44(chk,ctx){return chk.write("return allocator._fromBase64(\"").reference(ctx.getPath(true, ["defaultBytes"]),ctx,"h").write("\").getSegment(0);");}function body_45(chk,ctx){return chk.write("return allocator._fromBase64(\"").reference(ctx.getPath(true, ["defaultBytes"]),ctx,"h").write("\").getSegment(0);");}function body_46(chk,ctx){return chk.helper("eq",ctx,{"block":body_47},{"key":ctx.getPath(true, ["meta"]),"value":"struct"}).helper("eq",ctx,{"block":body_48},{"key":ctx.getPath(true, ["meta"]),"value":"list"});}function body_47(chk,ctx){return chk.write("var Reader = scope[\"").reference(ctx.getPath(true, ["id"]),ctx,"h").write("\"];var arena = allocator._fromBase64(\"").reference(ctx.getPath(true, ["defaultValue"]),ctx,"h").write("\").asReader();return ").reference(ctx.get(["deref"], false),ctx,"h").write(";");}function body_48(chk,ctx){return chk.write("var Reader = ").partial("readers/list",ctx,{}).write(";var arena = ").partial("readers/listDefaultArena",ctx,{}).write(";return ").reference(ctx.get(["deref"], false),ctx,"h").write(";");}function body_49(chk,ctx){return chk.write(",");}return body_0;})();