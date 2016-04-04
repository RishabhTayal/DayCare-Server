
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define("notification", function(request, response) {
    // Parse.Cloud.useMasterKey();
    var query = request.params.query;
    console.log(query);
    Parse.Push.send({
        channels: ["channel"],
        // where: query,
        data: {
            alert: "test"
        }
    }, {
    	useMasterKey: true,
        success: function() {
            // status.success("Push sent to all users");
            response.success("push sent");
        },
        error: function(error) {
            response.error("Error sending pushes: " + error.code + ": " + error.message);
        }
    });
});