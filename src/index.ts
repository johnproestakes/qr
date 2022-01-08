var QRCode = require("qrcode");

var opts = {
  color: {
    dark: "#010599FF",
    light: "#FFBF60FF",
  },
};

angular.module("QRCodeGenerator", []).controller("MainController", [
  "$scope",
  function ($scope) {
    // $scope.fn = function () {};
    $scope.imgDataURI = "";
    $scope.inputText = "";

    $scope.options = {
      type: "image/png",
      width: 200,
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
    };
    $scope.generateCode = function () {
      let options = jQuery.extend({}, $scope.options);
      let inputText = $scope.inputText.concat();
      if (typeof options.width === "undefined" || options.width < 50)
        options.width = 50;

      if (typeof inputText === "undefined" || inputText.trim().length == 0)
        inputText = "Example";

      QRCode.toDataURL(inputText, options, function (err, url: string) {
        if (err) throw err;
        $scope.imgDataURI = url;
      });
    };
  },
]);
