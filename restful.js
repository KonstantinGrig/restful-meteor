RestFulCollection = {};

RestFulCollection.addCollection = function(collection) {
    this.addRoutes(collection);
};

RestFulCollection.addRoutes = function(collection) {
    uriBase = '/'+RestFulCollection.settings.urlApi+'/'+collection._name;

    JsonRoutes.add("get", uriBase, function (req, res, next) {
        var result = collection.find().fetch();
        if (result == undefined) {
            var status = 404;
            var data = {status: 'fail', message: 'Items not found'};
        } else {
            var status = 200;
            var data = {status: 'success', data: result};
        }
        JsonRoutes.sendResult(res, status, data);
    });

    JsonRoutes.add("get", uriBase+'/search', function (req, res, next) {
        var sort = (req.query.sort == undefined) ? {} : JSON.parse(req.query.sort);
        var find = (req.query.find == undefined) ? {} : JSON.parse(req.query.find);

        for( var key in find ) {
            var strValue = find[key];
            if (strValue.substr(0,1)=='/' && strValue.substr(-1)=='/') {
                strValue = strValue.substr(1, strValue.length-2);
                find[key] = new RegExp(strValue, "i");
            }
        }

        var result = collection.find(find, {sort: sort}).fetch();

        if (result == undefined) {
            var status = 404;
            var data = {status: 'fail', message: 'Items not found'};
        } else {
            var status = 200;
            var data = {status: 'success', data: result};
        }
        JsonRoutes.sendResult(res, status, data);
    });

    JsonRoutes.add("get", uriBase+'/:_id', function (req, res, next) {
        var id = req.params._id;
        var result = collection.findOne(id);
        if (result == undefined) {
            var status = 404;
            var data = {status: 'fail', message: 'Item not found'};
        } else {
            var status = 200;
            var data = {status: 'success', data: result};
        }
        JsonRoutes.sendResult(res, status, data);
    });

    JsonRoutes.add("delete", uriBase+'/:_id', function (req, res, next) {
        var id = req.params._id;
        var result = collection.remove(id);
        if (result == 0) {
            var status = 404;
            var data = {status: 'fail', message: 'Item not delete - not found'};
        } else {
            var status = 200;
            var data = {status: 'success', data: result};
        }
        JsonRoutes.sendResult(res, status, data);
    });

};
