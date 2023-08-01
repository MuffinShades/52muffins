var vec2 = function(x, y) {
    this.x = x;
    this.y = y;

    this.normalize = function() {
        let i_len = (1 / Vector.GetVectorLength(this));
        this.x *= i_len;
        this.y *= i_len;
    }
}

var Vector = {
    GetSquareVectorLength: function(v) {
        return v.x**2 + v.y**2;
    },
    GetVectorLength: function(v) {
        return Math.sqrt(v.x**2 + v.y**2);
    },
    CrossProd: function (va, vb) {
        return va.x * vb.y - va.y * vb.x;
    },
    CrossProdScalar: function (va, s) {
        return new vec2(s * va.y, -s * va.x);
    },
    CrossProdScalar2: function (s, va) {
        return new vec2(-s * va.y, s * va.x);
    },
    DotProd: function(va, vb) {
        return va.x * vb.x + va.y * vb.y;
    }
}