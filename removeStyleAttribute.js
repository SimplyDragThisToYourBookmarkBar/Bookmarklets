javascript:(function(w){
	for(var i=0, m=Array.prototype.slice.call(w.document.querySelectorAll('[style]')), l=m.length+0; i<l; i++){
		m[i].removeAttribute('style');
	};
})(window);
