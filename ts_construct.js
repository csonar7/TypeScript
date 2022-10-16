var Point1 = /** @class */ (function () {
    function Point1(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point1.prototype.draw = function () {
        console.log('X: ' + this._x + ' , Y: ' + this._y);
    };
    Object.defineProperty(Point1.prototype, "x1", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point1.prototype, "x", {
        set: function (value) {
            if (value < 0)
                throw new Error('value cannot be less than 0.');
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point1;
}());
var point1 = new Point1();
//let point = new Point();
var x = point1.x;
point1.x = (10);
point1.draw();
