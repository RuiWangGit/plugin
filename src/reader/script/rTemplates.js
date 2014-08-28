var dust = require("capnp-js-plugin-dust");(function(){dust.register("constants",body_0);function body_0(chk,ctx){return chk.write("define(['capnp-js/reader/Arena', './rScope'], function (Arena,      scope) {var constants = {};").section(ctx.getPath(true, ["nodes"]),ctx,{"block":body_1},{}).write("return constants;});");}function body_1(chk,ctx){return chk.partial("constants/node",ctx,{"recurTarget":"struct"});}return body_0;})();
(function(){dust.register("list",body_0);function body_0(chk,ctx){return chk.exists(ctx.getPath(true, ["type","meta"]),ctx,{"else":body_1,"block":body_2},{});}function body_1(chk,ctx){return chk.write("reader.lists.").reference(ctx.getPath(true, ["type"]),ctx,"h");}function body_2(chk,ctx){return chk.section(ctx.getPath(true, ["type"]),ctx,{"block":body_3},{});}function body_3(chk,ctx){return chk.helper("eq",ctx,{"block":body_4},{"key":ctx.getPath(true, ["meta"]),"value":"list"}).helper("eq",ctx,{"block":body_5},{"key":ctx.getPath(true, ["meta"]),"value":"struct"});}function body_4(chk,ctx){return chk.write("reader.lists.pointer(").partial("list",ctx,{}).write(")");}function body_5(chk,ctx){return chk.write("reader.lists.structure(scope['").reference(ctx.getPath(true, ["id"]),ctx,"h").write("'])");}return body_0;})();
(function(){dust.register("rScope",body_0);function body_0(chk,ctx){return chk.write("define(['./rTypes'").exists(ctx.getPath(true, ["files"]),ctx,{"block":body_1},{}).write("], function (types ").exists(ctx.getPath(true, ["files"]),ctx,{"block":body_2},{}).write(" ) {var scope = {").section(ctx.getPath(true, ["files"]),ctx,{"block":body_3},{}).write("};for (var id in types) {scope[id] = types[id];}return scope;});");}function body_1(chk,ctx){return chk.write(",");}function body_2(chk,ctx){return chk.write(",");}function body_3(chk,ctx){return chk.section(ctx.getPath(true, ["resources"]),ctx,{"block":body_4},{"fileId":ctx.getPath(true, ["id"])}).helper("sep",ctx,{"block":body_6},{});}function body_4(chk,ctx){return chk.reference(ctx.getPath(true, ["id"]),ctx,"h").write(" : file").reference(ctx.get(["fileId"], false),ctx,"h").write(".").reference(ctx.getPath(true, []),ctx,"h").helper("sep",ctx,{"block":body_5},{});}function body_5(chk,ctx){return chk.write(",");}function body_6(chk,ctx){return chk.write(",");}return body_0;})();
(function(){dust.register("rTypes",body_0);function body_0(chk,ctx){return chk.write("define(['capnp-js/reader/index'], function (base) {var types = {};").section(ctx.getPath(true, ["nodes"]),ctx,{"block":body_1},{}).write("return types;});");}function body_1(chk,ctx){return chk.partial("types/structure",ctx,{}).partial("types/enumeration",ctx,{"recurTarget":"struct"});}return body_0;})();
(function(){dust.register("readers",body_0);function body_0(chk,ctx){return chk.write("define(['capnp-js/reader/Arena', 'capnp-js/reader/fromBase64', 'capnp-js/reader/index', './rScope', './constants'], function (Arena,                   fromBase64,            reader,            scope,     constants) {var readers = {};").section(ctx.getPath(true, ["nodes"]),ctx,{"block":body_1},{}).write("return readers;});");}function body_1(chk,ctx){return chk.helper("eq",ctx,{"else":body_2,"block":body_3},{"key":ctx.getPath(true, ["meta"]),"value":"const"});}function body_2(chk,ctx){return chk.write("readers.").reference(ctx.getPath(true, ["name"]),ctx,"h").write(" = ").partial("readers/node",ctx,{}).write(";");}function body_3(chk,ctx){return chk.write("readers.").helper("constant",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = ").partial("readers/node",ctx,{}).write(";");}return body_0;})();
(function(){dust.register("constants/node",body_0);function body_0(chk,ctx){return chk.helper("eq",ctx,{"block":body_1},{"key":ctx.getPath(true, ["meta"]),"value":"const"}).exists(ctx.get(["recurTarget"], false),ctx,{"block":body_22},{});}function body_1(chk,ctx){return chk.section(ctx.getPath(true, ["datum"]),ctx,{"block":body_2},{"constId":ctx.getPath(true, ["id"])});}function body_2(chk,ctx){return chk.exists(ctx.getPath(true, ["segments"]),ctx,{"block":body_3},{}).exists(ctx.getPath(true, ["meta"]),ctx,{"else":body_4,"block":body_19},{});}function body_3(chk,ctx){return chk.write("var arena_").reference(ctx.get(["constId"], false),ctx,"h").write(" = new Arena(['").helper("join",ctx,{},{"array":ctx.getPath(true, ["segments"]),"interpolator":"','"}).write("'].map(function (b64) { return fromBase64(b64); }),+Infinity,+Infinity);");}function body_4(chk,ctx){return chk.helper("eq",ctx,{"block":body_5},{"key":ctx.getPath(true, ["type"]),"value":"Text"}).helper("eq",ctx,{"block":body_6},{"key":ctx.getPath(true, ["type"]),"value":"Data"}).helper("eq",ctx,{"block":body_7},{"key":ctx.getPath(true, ["type"]),"value":"Void"}).helper("eq",ctx,{"block":body_8},{"key":ctx.getPath(true, ["type"]),"value":"Bool"}).helper("eq",ctx,{"block":body_9},{"key":ctx.getPath(true, ["type"]),"value":"Int8"}).helper("eq",ctx,{"block":body_10},{"key":ctx.getPath(true, ["type"]),"value":"Int16"}).helper("eq",ctx,{"block":body_11},{"key":ctx.getPath(true, ["type"]),"value":"Int32"}).helper("eq",ctx,{"block":body_12},{"key":ctx.getPath(true, ["type"]),"value":"Int64"}).helper("eq",ctx,{"block":body_13},{"key":ctx.getPath(true, ["type"]),"value":"UInt8"}).helper("eq",ctx,{"block":body_14},{"key":ctx.getPath(true, ["type"]),"value":"UInt16"}).helper("eq",ctx,{"block":body_15},{"key":ctx.getPath(true, ["type"]),"value":"UInt32"}).helper("eq",ctx,{"block":body_16},{"key":ctx.getPath(true, ["type"]),"value":"UInt64"}).helper("eq",ctx,{"block":body_17},{"key":ctx.getPath(true, ["type"]),"value":"Float32"}).helper("eq",ctx,{"block":body_18},{"key":ctx.getPath(true, ["type"]),"value":"Float64"});}function body_5(chk,ctx){return chk.write("constants['").reference(ctx.get(["constId"], false),ctx,"h").write("'] = (").partial("list",ctx,{}).write(").deref(arena_").reference(ctx.get(["constId"], false),ctx,"h").write(",0,arena_").reference(ctx.get(["constId"], false),ctx,"h").write(".getSegment(").reference(ctx.getPath(true, ["segment"]),ctx,"h").write("),").reference(ctx.getPath(true, ["position"]),ctx,"h").write(");");}function body_6(chk,ctx){return chk.write("constants['").reference(ctx.get(["constId"], false),ctx,"h").write("'] = (").partial("list",ctx,{}).write(").deref(arena_").reference(ctx.get(["constId"], false),ctx,"h").write(",0,arena_").reference(ctx.get(["constId"], false),ctx,"h").write(".getSegment(").reference(ctx.getPath(true, ["segment"]),ctx,"h").write("),").reference(ctx.getPath(true, ["position"]),ctx,"h").write(");");}function body_7(chk,ctx){return chk.write("constants['").reference(ctx.get(["constId"], false),ctx,"h").write("'] = null;");}function body_8(chk,ctx){return chk.write("constants['").reference(ctx.get(["constId"], false),ctx,"h").write("'] = ").reference(ctx.getPath(true, ["value"]),ctx,"h").write(";");}function body_9(chk,ctx){return chk.write("constants['").reference(ctx.get(["constId"], false),ctx,"h").write("'] = ").reference(ctx.getPath(true, ["value"]),ctx,"h").write(";");}function body_10(chk,ctx){return chk.write("constants['").reference(ctx.get(["constId"], false),ctx,"h").write("'] = ").reference(ctx.getPath(true, ["value"]),ctx,"h").write(";");}function body_11(chk,ctx){return chk.write("constants['").reference(ctx.get(["constId"], false),ctx,"h").write("'] = ").reference(ctx.getPath(true, ["value"]),ctx,"h").write(";");}function body_12(chk,ctx){return chk.write("constants['").reference(ctx.get(["constId"], false),ctx,"h").write("'] = ").reference(ctx.getPath(true, ["value"]),ctx,"h").write(";");}function body_13(chk,ctx){return chk.write("constants['").reference(ctx.get(["constId"], false),ctx,"h").write("'] = ").reference(ctx.getPath(true, ["value"]),ctx,"h").write(";");}function body_14(chk,ctx){return chk.write("constants['").reference(ctx.get(["constId"], false),ctx,"h").write("'] = ").reference(ctx.getPath(true, ["value"]),ctx,"h").write(";");}function body_15(chk,ctx){return chk.write("contants['").reference(ctx.get(["constId"], false),ctx,"h").write("'] = ").reference(ctx.getPath(true, ["value"]),ctx,"h").write(";");}function body_16(chk,ctx){return chk.write("constants['").reference(ctx.get(["constId"], false),ctx,"h").write("'] = ").reference(ctx.getPath(true, ["value"]),ctx,"h").write(";");}function body_17(chk,ctx){return chk.write("constants['").reference(ctx.get(["constId"], false),ctx,"h").write("'] = ").reference(ctx.getPath(true, ["value"]),ctx,"h").write(";");}function body_18(chk,ctx){return chk.write("constants['").reference(ctx.get(["constId"], false),ctx,"h").write("'] = ").reference(ctx.getPath(true, ["value"]),ctx,"h").write(";");}function body_19(chk,ctx){return chk.helper("eq",ctx,{"block":body_20},{"key":ctx.getPath(true, ["meta"]),"value":"struct"}).helper("eq",ctx,{"block":body_21},{"key":ctx.getPath(true, ["meta"]),"value":"list"});}function body_20(chk,ctx){return chk.write("constants['").reference(ctx.get(["constId"], false),ctx,"h").write("'] = scope['").reference(ctx.getPath(true, ["id"]),ctx,"h").write("'].deref(arena_").reference(ctx.get(["constId"], false),ctx,"h").write(",0,arena_").reference(ctx.get(["constId"], false),ctx,"h").write(".getSegment(").reference(ctx.getPath(true, ["segment"]),ctx,"h").write("),").reference(ctx.getPath(true, ["position"]),ctx,"h").write(");");}function body_21(chk,ctx){return chk.write("constants['").reference(ctx.get(["constId"], false),ctx,"h").write("'] = (").partial("list",ctx,{}).write(").deref(arena_").reference(ctx.get(["constId"], false),ctx,"h").write(",0,arena_").reference(ctx.get(["constId"], false),ctx,"h").write(".getSegment(").reference(ctx.getPath(true, ["segment"]),ctx,"h").write("),").reference(ctx.getPath(true, ["position"]),ctx,"h").write(");");}function body_22(chk,ctx){return chk.helper("eq",ctx,{"block":body_23},{"key":ctx.getPath(true, ["meta"]),"value":ctx.get(["recurTarget"], false)});}function body_23(chk,ctx){return chk.section(ctx.getPath(true, ["nodes"]),ctx,{"block":body_24},{});}function body_24(chk,ctx){return chk.partial("constants/node",ctx,{"recurTarget":ctx.get(["recurTarget"], false)});}return body_0;})();
(function(){dust.register("readers/dataField",body_0);function body_0(chk,ctx){return chk.write("Structure.prototype.").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = function () {").partial("readers/throwOnInactive",ctx,{"error":"Attempted to access an inactive union member"}).write("var position = this._dataSection +").helper("math",ctx,{},{"key":ctx.getPath(true, ["offset"]),"method":"multiply","operand":ctx.get(["byteCount"], false)}).write(";if (position < this._pointersSection) {return ").reference(ctx.get(["decoder"], false),ctx,"h").write("(").reference(ctx.get(["default"], false),ctx,"h").write(", this._segment, position);} else {return ").reference(ctx.get(["default"], false),ctx,"h").write(";}};");}return body_0;})();
(function(){dust.register("readers/floatField",body_0);function body_0(chk,ctx){return chk.write("var decoder_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = ").reference(ctx.get(["decoder"], false),ctx,"h").write(";var default_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = fromBase64(\"").reference(ctx.getPath(true, ["defaultBytes"]),ctx,"h").write("\");Structure.prototype.").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = function () {").partial("readers/throwOnInactive",ctx,{"error":"Attempted to access an inactive union member"}).write("var position = this._dataSection +").helper("math",ctx,{},{"key":ctx.getPath(true, ["offset"]),"method":"multiply","operand":ctx.get(["byteCount"], false)}).write(";if (position < this._pointersSection) {return decoder_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write("(default_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(",this._segment,position);} else {return ").reference(ctx.getPath(true, ["defaultValue"]),ctx,"h").write(";}};");}return body_0;})();
(function(){dust.register("readers/listField",body_0);function body_0(chk,ctx){return chk.write("var Decode_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = reader.lists.").reference(ctx.getPath(true, ["type"]),ctx,"h").write(";var default_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = Decode_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(".deref(defaultArena_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(",{segment : defaultArena_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(".getSegment(").reference(ctx.getPath(true, ["defaultSegment"]),ctx,"h").write("),position : ").reference(ctx.getPath(true, ["defaultPosition"]),ctx,"h").write("},0);Structure._default_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = default_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(";Structure.prototype.").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = function () {").partial("readers/throwOnInactive",ctx,{"error":"Attempted to access an inactive union member"}).write("var position = this._pointersSection +").helper("math",ctx,{},{"key":ctx.getPath(true, ["offset"]),"method":"multiply","operand":"8"}).write(";if (position < this._end && !reader.isNull(this._segment, position)) {return Decode_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(".deref(this._arena,{segment : this._segment,position : position},this._depth + 1);} else {return default_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(";}};");}return body_0;})();
(function(){dust.register("readers/node",body_0);function body_0(chk,ctx){return chk.helper("eq",ctx,{"block":body_1},{"key":ctx.getPath(true, ["meta"]),"value":"struct"}).helper("eq",ctx,{"block":body_2},{"key":ctx.getPath(true, ["meta"]),"value":"enum"}).helper("eq",ctx,{"block":body_3},{"key":ctx.getPath(true, ["meta"]),"value":"const"});}function body_1(chk,ctx){return chk.partial("readers/structure",ctx,{});}function body_2(chk,ctx){return chk.write("scope['").reference(ctx.getPath(true, ["id"]),ctx,"h").write("']");}function body_3(chk,ctx){return chk.write("constants['").reference(ctx.getPath(true, ["id"]),ctx,"h").write("']");}return body_0;})();
(function(){dust.register("readers/structure",body_0);function body_0(chk,ctx){return chk.write("(function () {var Structure =").notexists(ctx.getPath(true, ["meta"]),ctx,{"else":body_1,"block":body_3},{}).section(ctx.getPath(true, ["nodes"]),ctx,{"block":body_4},{}).exists(ctx.getPath(true, ["discriminantCount"]),ctx,{"block":body_8},{}).section(ctx.getPath(true, ["fields"]),ctx,{"block":body_10},{}).write("return Structure;})()");}function body_1(chk,ctx){return chk.helper("eq",ctx,{"block":body_2},{"key":ctx.getPath(true, ["meta"]),"value":"struct"});}function body_2(chk,ctx){return chk.write("scope['").reference(ctx.getPath(true, ["id"]),ctx,"h").write("'];");}function body_3(chk,ctx){return chk.write("reader.structure();");}function body_4(chk,ctx){return chk.helper("eq",ctx,{"block":body_5},{"key":ctx.getPath(true, ["meta"]),"value":"struct"}).helper("eq",ctx,{"block":body_6},{"key":ctx.getPath(true, ["meta"]),"value":"enum"}).helper("eq",ctx,{"block":body_7},{"key":ctx.getPath(true, ["meta"]),"value":"const"});}function body_5(chk,ctx){return chk.write("Structure.").reference(ctx.getPath(true, ["name"]),ctx,"h").write(" = ").partial("readers/node",ctx,{}).write(";");}function body_6(chk,ctx){return chk.write("Structure.").reference(ctx.getPath(true, ["name"]),ctx,"h").write(" = ").partial("readers/node",ctx,{}).write(";");}function body_7(chk,ctx){return chk.write("Structure.prototype.").helper("constant",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = Structure.").helper("constant",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = constants['").reference(ctx.getPath(true, ["id"]),ctx,"h").write("'];");}function body_8(chk,ctx){return chk.helper("gt",ctx,{"block":body_9},{"key":ctx.getPath(true, ["discriminantCount"]),"value":0});}function body_9(chk,ctx){return chk.write("Structure.prototype.which = function () {var position = this._dataSection +").helper("math",ctx,{},{"key":ctx.getPath(true, ["discriminantOffset"]),"method":"multiply","operand":"2"}).write(";if (position < this._pointersSection) {return reader.fields.uint16(0,this._segment,position);} else {return 0;}};");}function body_10(chk,ctx){return chk.helper("ne",ctx,{"block":body_11},{"key":ctx.getPath(true, ["discriminantValue"]),"value":65535}).exists(ctx.getPath(true, ["defaultSegments"]),ctx,{"block":body_12},{}).exists(ctx.getPath(true, ["meta"]),ctx,{"else":body_13,"block":body_30},{});}function body_11(chk,ctx){return chk.write("Structure.prototype.").helper("fieldIser",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = function () {return this.which() === ").reference(ctx.getPath(true, ["discriminantValue"]),ctx,"h").write(";};");}function body_12(chk,ctx){return chk.write("var defaultArena_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = new Arena(['").helper("join",ctx,{},{"array":ctx.getPath(true, ["defaultSegments"]),"interpolator":"','"}).write("'].map(function (b64) { return fromBase64(b64); }),+Infinity,+Infinity);");}function body_13(chk,ctx){return chk.helper("eq",ctx,{"block":body_14},{"key":ctx.getPath(true, ["type"]),"value":"group"}).helper("eq",ctx,{"block":body_15},{"key":ctx.getPath(true, ["type"]),"value":"Data"}).helper("eq",ctx,{"block":body_16},{"key":ctx.getPath(true, ["type"]),"value":"Text"}).helper("eq",ctx,{"block":body_17},{"key":ctx.getPath(true, ["type"]),"value":"AnyPointer"}).helper("eq",ctx,{"block":body_18},{"key":ctx.getPath(true, ["type"]),"value":"Void"}).helper("eq",ctx,{"block":body_19},{"key":ctx.getPath(true, ["type"]),"value":"Bool"}).helper("eq",ctx,{"block":body_20},{"key":ctx.getPath(true, ["type"]),"value":"Int8"}).helper("eq",ctx,{"block":body_21},{"key":ctx.getPath(true, ["type"]),"value":"Int16"}).helper("eq",ctx,{"block":body_22},{"key":ctx.getPath(true, ["type"]),"value":"Int32"}).helper("eq",ctx,{"block":body_23},{"key":ctx.getPath(true, ["type"]),"value":"Int64"}).helper("eq",ctx,{"block":body_24},{"key":ctx.getPath(true, ["type"]),"value":"UInt8"}).helper("eq",ctx,{"block":body_25},{"key":ctx.getPath(true, ["type"]),"value":"UInt16"}).helper("eq",ctx,{"block":body_26},{"key":ctx.getPath(true, ["type"]),"value":"UInt32"}).helper("eq",ctx,{"block":body_27},{"key":ctx.getPath(true, ["type"]),"value":"UInt64"}).helper("eq",ctx,{"block":body_28},{"key":ctx.getPath(true, ["type"]),"value":"Float32"}).helper("eq",ctx,{"block":body_29},{"key":ctx.getPath(true, ["type"]),"value":"Float64"});}function body_14(chk,ctx){return chk.write("var Group_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = ").partial("readers/structure",ctx,{}).write(";Structure._Group_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = Group_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(";Structure.prototype.").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = function () {").partial("readers/throwOnInactive",ctx,{"error":"Attempted to access an inactive union member"}).write("return new Group_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(".inject(this);};");}function body_15(chk,ctx){return chk.partial("readers/listField",ctx,{});}function body_16(chk,ctx){return chk.partial("readers/listField",ctx,{});}function body_17(chk,ctx){return chk.write("var Decode_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = reader.AnyPointer;var default_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = Decode_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(".deref(defaultArena_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(",{segment : defaultArena_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(".getSegment(").reference(ctx.getPath(true, ["defaultSegment"]),ctx,"h").write("),position : ").reference(ctx.getPath(true, ["defaultPosition"]),ctx,"h").write("},0);Structure.prototype.").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = function () {").partial("readers/throwOnInactive",ctx,{"error":"Attempted to access an inactive union member"}).write("var position = this._pointersSection +").helper("math",ctx,{},{"key":ctx.getPath(true, ["offset"]),"method":"multiply","operand":"8"}).write(";if (position < this._end) {return Decode_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(".deref(this._arena,{segment : this._segment,position : position},this._depth + 1);} else {return default_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(";}};");}function body_18(chk,ctx){return chk.write("Structure.prototype.").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = function () {").partial("readers/throwOnInactive",ctx,{"error":"Attempted to access an inactive union member"}).write("return null;};");}function body_19(chk,ctx){return chk.write("Structure.prototype.").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = function () {").partial("readers/throwOnInactive",ctx,{"error":"Attempted to access an inactive union member"}).write("var position = this._dataSection + ").helper("boolOffset",ctx,{},{"offset":ctx.getPath(true, ["offset"])}).write(";if (position < this._pointersSection) {return reader.fields.bool(").reference(ctx.getPath(true, ["defaultValue"]),ctx,"h").write(",this._segment,position,").helper("boolMask",ctx,{},{"offset":ctx.getPath(true, ["offset"])}).write(");} else {return ").reference(ctx.getPath(true, ["defaultValue"]),ctx,"h").write(";}};");}function body_20(chk,ctx){return chk.partial("readers/dataField",ctx,{"default":ctx.getPath(true, ["defaultValue"]),"decoder":"reader.fields.int8","byteCount":"1"});}function body_21(chk,ctx){return chk.partial("readers/dataField",ctx,{"default":ctx.getPath(true, ["defaultValue"]),"decoder":"reader.fields.int16","byteCount":"2"});}function body_22(chk,ctx){return chk.partial("readers/dataField",ctx,{"default":ctx.getPath(true, ["defaultValue"]),"decoder":"reader.fields.int32","byteCount":"4"});}function body_23(chk,ctx){return chk.partial("readers/dataField",ctx,{"default":ctx.getPath(true, ["defaultValue"]),"decoder":"reader.fields.int64","byteCount":"8"});}function body_24(chk,ctx){return chk.partial("readers/dataField",ctx,{"default":ctx.getPath(true, ["defaultValue"]),"decoder":"reader.fields.uint8","byteCount":"1"});}function body_25(chk,ctx){return chk.partial("readers/dataField",ctx,{"default":ctx.getPath(true, ["defaultValue"]),"decoder":"reader.fields.uint16","byteCount":"2"});}function body_26(chk,ctx){return chk.partial("readers/dataField",ctx,{"default":ctx.getPath(true, ["defaultValue"]),"decoder":"reader.fields.uint32","byteCount":"4"});}function body_27(chk,ctx){return chk.partial("readers/dataField",ctx,{"default":ctx.getPath(true, ["defaultValue"]),"decoder":"reader.fields.uint64","byteCount":"8"});}function body_28(chk,ctx){return chk.partial("readers/floatField",ctx,{"decoder":"reader.fields.float32","byteCount":"4"});}function body_29(chk,ctx){return chk.partial("readers/floatField",ctx,{"decoder":"reader.fields.float64","byteCount":"8"});}function body_30(chk,ctx){return chk.helper("eq",ctx,{"else":body_31,"block":body_34},{"key":ctx.getPath(true, ["meta"]),"value":"enum"});}function body_31(chk,ctx){return chk.helper("eq",ctx,{"block":body_32},{"key":ctx.getPath(true, ["meta"]),"value":"struct"}).helper("eq",ctx,{"block":body_33},{"key":ctx.getPath(true, ["meta"]),"value":"list"}).write("var default_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = Decode_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(".deref(defaultArena_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(",{segment : defaultArena_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(".getSegment(").reference(ctx.getPath(true, ["defaultSegment"]),ctx,"h").write("),position : ").reference(ctx.getPath(true, ["defaultPosition"]),ctx,"h").write("},0);Structure._default_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = default_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(";Structure.prototype.").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = function () {").partial("readers/throwOnInactive",ctx,{"error":"Attempted to access an inactive union member"}).write("var position = this._pointersSection +").helper("math",ctx,{},{"key":ctx.getPath(true, ["offset"]),"method":"multiply","operand":"8"}).write(";if (position < this._end && !reader.isNull(this._segment, position)) {return Decode_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(".deref(this._arena,{segment : this._segment,position : position},this._depth + 1);} else {return default_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(";}};Structure.prototype.").helper("fieldHaser",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = function () {").partial("readers/throwOnInactive",ctx,{"error":"Attempted to access an inactive union member"}).write("var position = this._pointersSection +").helper("math",ctx,{},{"key":ctx.getPath(true, ["offset"]),"method":"multiply","operand":"8"}).write(";return position < this._end && !reader.isNull(this._segment, position);};");}function body_32(chk,ctx){return chk.write("var Decode_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = scope['").reference(ctx.getPath(true, ["id"]),ctx,"h").write("'];");}function body_33(chk,ctx){return chk.write("var Decode_").helper("fieldGetter",ctx,{},{"name":ctx.getPath(true, ["name"])}).write(" = ").partial("list",ctx,{}).write(";");}function body_34(chk,ctx){return chk.partial("readers/dataField",ctx,{"default":ctx.getPath(true, ["defaultValue"]),"decoder":"reader.fields.uint16","byteCount":"2"});}return body_0;})();
(function(){dust.register("readers/throwOnInactive",body_0);function body_0(chk,ctx){return chk.helper("ne",ctx,{"block":body_1},{"key":ctx.getPath(true, ["discriminantValue"]),"value":65535});}function body_1(chk,ctx){return chk.write("if (!this.").helper("fieldIser",ctx,{},{"name":ctx.getPath(true, ["name"])}).write("()) {throw new Error(\"").reference(ctx.get(["error"], false),ctx,"h").write("\");}");}return body_0;})();