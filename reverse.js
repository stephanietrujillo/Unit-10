var report= function (revbutton, phrase) {
			document.getElementById("revbutton").onclick= function () {
			var w= document.getElementByid("phrase").value;
			report (w);
		};
	}

		function reverse(inputSentence) {
		var words= inputSentence.split(" ");
		var output=new Array();
		 words.forEach(function(word) {
			output.push(word.split("").reverse().join(""));
		});
		return output.join(" ");
	}
