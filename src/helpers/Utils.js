export default class Utils {
	static clamp = function (num, min, max) {
		return num <= min ? min :
			num >= max ? max : num;
	};
}