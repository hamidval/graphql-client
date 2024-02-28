"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParentTransforms {
    constructor() { }
    parents(data) {
        return {
            parents: data.parents.map(x => this.parent(x))
        };
    }
    parent(parent) {
        return {
            Id: parent.Id,
            FirstName: parent.FirstName,
            FullName: this.fullName(parent)
        };
    }
    fullName(parent) {
        return parent.FirstName + " " + parent.LastName;
    }
}
exports.default = ParentTransforms;
//# sourceMappingURL=parents.js.map