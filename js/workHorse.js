(function($) {
	$.fn.updatePresentation = function(options) {

		var settings = $.extend(selectors, options),
			selectors = {
				$target: "#presentation",
				title: '.title',
				img1: '.img1',
				img2: '.img2',
				text1: '.text1',
				text2: '.text2'
			},
			contentObj = {
				0: {
					title: "Paramount Decisions Website Redesign",
					date: "July 21st, 2015",
					img1: "",
					text1: "somethign something",
					img2: "",
					text2: "something something",
				},
				1: {
					title: "Berkeley Summer Sessions Student Portal Redesign",
					date: "July 21st, 2015",
					img1: "",
					text1: "ooboo",
					img2: "",
					text2: "booboo",
				},
				2: {
					title: "Personal Website Design & Build",
					date: "July 21st, 2015",
					img1: "",
					text1: "wiggle wiggle",
					img2: "",
					text2: "wiggle wiggle",
				},
				3: {
					title: "Berkeley Summer Sessions & Study Abroad Graphic Design Work",
					date: "July 21st, 2015",
					img1: "",
					text1: "nigga please",
					img2: "",
					text2: "nigga please",
				},
				4: {
					title: "Berkeley Academic Center Assistant Graphic Design Work ",
					date: "July 21st, 2015",
					img1: "",
					text1: "hit me baby one more time",
					img2: "",
					text2: "hit me baby one more time",
				},
				5: {
					title: "Personal Work",
					date: "July 21st, 2015",
					img1: "",
					text1: "googily moogily",
					img2: "",
					text2: "beebop",
				},
			}
			that = this;

		that.update = {
			init: function() {
				console.log("here");
				$(selectors.text1 + ", " + selectors.text2 + ", " + selectors.title).html(""),
				$(selectors.img1 + ", " +  selectors.img2).attr("src", "");
				that.update.appendInfo();
				that.update.focusDiv();
			},
			appendInfo: function() {
				var toAppend = contentObj[that.attr("id")];
				$(selectors.title).html("<h2>" + toAppend.title + "</h2>" + toAppend.date);
				$(selectors.text1).html(toAppend.text1);
				$(selectors.text2).html(toAppend.text2);
				$(selectors.img1).attr('src', toAppend.img1);
				$(selectors.img2).attr('src', toAppend.img2);
			}
		}
		that.update.init();
	}
})(jQuery);