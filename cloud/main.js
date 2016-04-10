
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define("notification", function(request, response) {
    var userId = request.params.userId;
    var query = new Parse.Query(Parse.Installation);
    query.equalTo("owner", userId);
    // console.log(query);
    Parse.Push.send({
        // channels: ["channel"],
        where: query,
        data: {
            alert: request.params.pushText
        }
    }, {
    	useMasterKey: true,
        success: function() {
            // status.success("Push sent to all users");
            response.success();
        },
        error: function(error) {
            response.error("Error sending pushes: " + error.code + ": " + error.message);
        }
    });
});