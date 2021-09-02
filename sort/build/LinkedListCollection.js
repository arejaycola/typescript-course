"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var LinkedList = /** @class */ (function () {
    function LinkedList(data) {
        this.data = data;
    }
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        throw new Error('Method not implemented.');
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        throw new Error('Method not implemented.');
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    return LinkedList;
}());
exports.LinkedList = LinkedList;
