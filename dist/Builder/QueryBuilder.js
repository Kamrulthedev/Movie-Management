"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBuilder = void 0;
class QueryBuilder {
    constructor(modelQuery, query) {
        this.query = query;
        this.modelQuery = modelQuery;
    }
    //searching
    search(searchableFields) {
        var _a;
        let searchTerm = "";
        if ((_a = this.query) === null || _a === void 0 ? void 0 : _a.searchTerm) {
            searchTerm = this.query.searchTerm;
        }
        // {title: {$regex: searchTerm}}
        // {genre: {$regex: searchTerm}}
        this.modelQuery = this.modelQuery.find({
            $or: searchableFields.map((field) => ({
                [field]: { $regex: searchTerm, $options: "i" },
            })),
        });
        return this;
    }
    //paigenate
    paginate() {
        var _a, _b, _c;
        const limit = Number(((_a = this.query) === null || _a === void 0 ? void 0 : _a.limit) || 10);
        let skip = 0;
        if ((_b = this.query) === null || _b === void 0 ? void 0 : _b.page) {
            const page = Number(((_c = this.query) === null || _c === void 0 ? void 0 : _c.page) || 1);
            skip = Number((page - 1) * limit);
        }
        this.modelQuery = this.modelQuery.skip(skip).limit(limit);
        return this;
    }
    //sorting
    sort() {
        var _a;
        let sortBy = "-releaseDate";
        if ((_a = this.query) === null || _a === void 0 ? void 0 : _a.sortBy) {
            sortBy = this.query.sortBy;
        }
        this.modelQuery = this.modelQuery.sort(sortBy);
        return this;
    }
    //fieds filtering
    fields() {
        var _a, _b;
        let fields = "";
        if ((_a = this.query) === null || _a === void 0 ? void 0 : _a.fields) {
            fields = ((_b = this.query) === null || _b === void 0 ? void 0 : _b.fields).split(",").join(" ");
        }
        this.modelQuery = this.modelQuery.select(fields);
        return this;
    }
    //filering
    filter() {
        const queryObj = Object.assign({}, this.query);
        const excludeFields = ["searchTerm", "page", "limit", "sortBy", "fields"];
        excludeFields.forEach((e) => delete queryObj[e]);
        this.modelQuery = this.modelQuery.find(queryObj);
        return this;
    }
}
exports.QueryBuilder = QueryBuilder;
;
