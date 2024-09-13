"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
// Object to Store the data
var sysDate = new Date();
var date = sysDate.toLocaleDateString();
var dateTime = date + sysDate.toLocaleTimeString();
console.log(date);
console.log(dateTime);
/**
 * Make API call to Waitz Live page.
 * If there is an error, make this known.
 */
function WaitzLiveAPICall() {
    return __awaiter(this, void 0, void 0, function () {
        var rows, response, json, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rows = [];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1.default.get("https://waitz.io/live/vanderbilt-university")];
                case 2:
                    response = _a.sent();
                    json = response.data.data;
                    json.forEach(function (data) {
                        var row = {
                            Name: data.name,
                            isAvailable: data.isAvailable,
                            isOpen: data.isOpen,
                            numPeople: data.people,
                            capacity: data.capacity,
                            percCapacity: data.percentage
                        };
                        rows.push(row);
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error fetching data:", error_1);
                    return [3 /*break*/, 4];
                case 4:
                    console.log(rows);
                    return [2 /*return*/, rows];
            }
        });
    });
}
/**
 * Make API call to Waitz Trends page.
 * If there is an error, make this known.
 */
function WaitzTrendsAPICall() {
    return __awaiter(this, void 0, void 0, function () {
        var response, json, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.get("https://waitz.io/compare/vanderbilt-university")
                        // get HTML from the server response
                    ];
                case 1:
                    response = _a.sent();
                    json = response.data;
                    console.log(json);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error("Error fetching data:", error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
/**
 * Pull information from sublocations.
 * If there is an error, make this known.
 */
/**
 * Pull from json to export to Google Sheet.
 * If there is an error, make this known.
 */
/*function shapeWaitzDataType(data: any): WaitzData[] {
    const rows: WaitzData[] = []
    const row: WaitzData = {
        Name: data.name,
        isAvailable: data.isAvailable,
        isOpen: data.isOpen,
        numPeople: data.people,
        capacity: data.capacity
    };
    rows.push(row)
    return rows;
}
    */
WaitzLiveAPICall();
//WaitzTrendsAPICall()
