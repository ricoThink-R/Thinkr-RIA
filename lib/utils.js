"use strict";
/**
 * 格式化字符串接口实现。
 */
exports.Format = (str, ...args) => {
    if (args.length > 0)
        args.forEach((a, i) => {
            str = str.replace(new RegExp("\\{" + i + "\\}", "g"), a);
        });
    return str;
};
