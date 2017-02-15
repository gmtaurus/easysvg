/*
 * desc: easy get svg graphic code
 * author: gm
 * create: 2011-02-15
 */
/**
 * [getRectCode get rect code]
 * @param  {[int]} x      [笔触x坐标]
 * @param  {[int]} y      [笔触y坐标]
 * @param  {[int]} width  [矩形长]
 * @param  {[int]} height [矩形宽]
 * @param  {Number} rx     [圆角矩形x]
 * @param  {Number} ry     [圆角矩形y]
 * @return {[string]}        [svg code]
 */
function getRectCode (x, y, width, height, rx = 0, ry = 0) {
	if (rx === 0 || ry === 0) {
		rx = ry = 0;
	}
	return '<svg><rect x='+ x +' y='+ y +' rx='+ rx +' ry='+ ry +' width='+ width +' height='+ height +'></rect></svg>'
}
/**
 * [getCircleCode get circle code]
 * @param  {[int]} rx     [圆心x坐标]
 * @param  {[int]} ry     [圆心y坐标]
 * @param  {[int]} radius [圆半径]
 * @return {[string]}        [svg code]
 */
function getCircleCode (cx, cy, radius) {
	return '<svg><circle cx='+ rx +' cy='+ ry +' r='+ radius +'></circle></svg>'
}
/**
 * [getEcllipse get ellipse code]
 * @param  {[int]} cx [椭圆x坐标]
 * @param  {[int]} cy [椭圆y坐标]
 * @param  {[int]} rx [椭圆x半轴长]
 * @param  {[int]} ry [椭圆y半轴长]
 * @return {[string]}    [svg code]
 */
function getEcllipse (cx, cy, rx, ry) {
	return '<svg><ellipse cx='+ cx +' cy='+ cy +' rx='+ rx +' ry='+ ry +'></ellipse></svg>'
}
function lineToTarget (x1, y1, x2, y2) {
	return '<svg><line x1='+ x1 +' y1='+ y1 +' x2='+ x2 +' y2='+ y2 +' style="stroke:rgb(0,0,0);stroke-width:2"></line></svg>'
}