var dust = require("capnp-js-plugin-dust");(function(){dust.register("throwOnInactive",body_0);function body_0(chk,ctx){return chk.helper("ne",ctx,{"block":body_1},{"key":ctx.getPath(true, ["discriminantValue"]),"value":65535});}function body_1(chk,ctx){return chk.write("if (!this.").helper("fieldIser",ctx,{},{"name":ctx.getPath(true, ["name"])}).write("()) {throw new Error(\"").reference(ctx.get(["error"], false),ctx,"h").write("\");}");}return body_0;})();
(function(){dust.register("types/enumeration",body_0);function body_0(chk,ctx){return chk.helper("eq",ctx,{"block":body_1},{"key":ctx.getPath(true, ["meta"]),"value":"enum"}).exists(ctx.get(["recurTarget"], false),ctx,{"block":body_3},{});}function body_1(chk,ctx){return chk.write("types['").reference(ctx.getPath(true, ["id"]),ctx,"h").write("'] = {};").section(ctx.getPath(true, ["enumerants"]),ctx,{"block":body_2},{"enumerationId":ctx.getPath(true, ["id"])});}function body_2(chk,ctx){return chk.write("types['").reference(ctx.get(["enumerationId"], false),ctx,"h").write("'].").reference(ctx.getPath(true, ["name"]),ctx,"h").write(" = ").reference(ctx.get(["$idx"], false),ctx,"h").write(";");}function body_3(chk,ctx){return chk.helper("eq",ctx,{"block":body_4},{"key":ctx.getPath(true, ["meta"]),"value":ctx.get(["recurTarget"], false)});}function body_4(chk,ctx){return chk.section(ctx.getPath(true, ["nodes"]),ctx,{"block":body_5},{});}function body_5(chk,ctx){return chk.partial("types/enumeration",ctx,{"recurTarget":ctx.get(["recurTarget"], false)});}return body_0;})();
(function(){dust.register("types/structure",body_0);function body_0(chk,ctx){return chk.helper("eq",ctx,{"block":body_1},{"key":ctx.getPath(true, ["meta"]),"value":"struct"});}function body_1(chk,ctx){return chk.write("types['").reference(ctx.getPath(true, ["id"]),ctx,"h").write("'] = base.structure({meta : 0,dataBytes : ").helper("math",ctx,{},{"key":ctx.getPath(true, ["dataWordCount"]),"method":"multiply","operand":8}).write(",pointersBytes : ").helper("math",ctx,{},{"key":ctx.getPath(true, ["pointerCount"]),"method":"multiply","operand":8}).write("});types['").reference(ctx.getPath(true, ["id"]),ctx,"h").write("']._LIST = base.lists.structure(types['").reference(ctx.getPath(true, ["id"]),ctx,"h").write("'],{meta : 1,layout : ").reference(ctx.getPath(true, ["preferredListEncoding"]),ctx,"h").write(",dataBytes : ").helper("dataBytes",ctx,{},{"layout":ctx.getPath(true, ["preferredListEncoding"])}).write(",pointersBytes : ").helper("pointersBytes",ctx,{},{"layout":ctx.getPath(true, ["preferredListEncoding"])}).write("});").section(ctx.getPath(true, ["nodes"]),ctx,{"block":body_2},{});}function body_2(chk,ctx){return chk.partial("types/structure",ctx,{});}return body_0;})();