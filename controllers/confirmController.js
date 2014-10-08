angular.module('darkRide').controller('confirmController',
    [
    '$rootScope',
    '$scope',
    '$window',
    'HOST',
    '$state',
    '$modal',
    function(
    $rootScope,
    $scope,
    $window,
    HOST,
    $state,
    $modal
    ) {

    $scope.driver = $rootScope.user.driver;
    $scope.user = $rootScope.user;
    $scope.markers = [];

    $scope.map = {
        control: {},
        active: false,
        center: {
            latitude: 51.219053,
            longitude: 4.404418
        },
        refresh: true,
        zoom: 14,
        events: {
            idle: function (map, res1) {
                var posDep = $rootScope.user.departureData.position;

                $scope.map.control.refresh({
                    latitude: posDep.lat, 
                    longitude: posDep.lon
                });

                map = $scope.map.control.getGMap();
                var bounds = map.getBounds();
                var lat_lng = new Array();
                var southWest = bounds.getSouthWest();
                var northEast = bounds.getNorthEast();
                var lngSpan = northEast.lng() - southWest.lng();
                var latSpan = northEast.lat() - southWest.lat();

                var lat = southWest.lat() + latSpan * Math.random();
                var lng = southWest.lng() + lngSpan * Math.random();

                lat_lng.push(new $window.google.maps.LatLng(lat, lng), new $window.google.maps.LatLng(posDep.lat, posDep.lon));

                var path = new $window.google.maps.MVCArray();
                var service = new $window.google.maps.DirectionsService();
                var poly = new $window.google.maps.Polyline({ map: map, strokeColor: '#4986E7' });

                $scope.markers.push({
                    icon: HOST + $scope.driver.photo.replace(".jpg", "_min.png"),
                    options: { draggable: false },
                    latitude: lat,
                    longitude: lng,
                    title: "m0",
                    id: 0
                });

                $scope.markers.push({
                    icon: HOST + 'assets/imgs/a.png',
                    options: { draggable: false },
                    latitude: posDep.lat,
                    longitude: posDep.lon,
                    title: "m1",
                    id: 1
                });

                angular.forEach(lat_lng, function (v, i) {
                    if ((i + 1) < lat_lng.length) {    
                        var src = lat_lng[i];
                        var des = lat_lng[i + 1];
                        path.push(src);
                        poly.setPath(path);
                        service.route({
                            origin: src,
                            destination: des,
                            travelMode: $window.google.maps.DirectionsTravelMode.DRIVING
                        }, function (result, status) {
                            if (status == google.maps.DirectionsStatus.OK) {
                                for (var i = 0, len = result.routes[0].overview_path.length; i < len; i++) {
                                    path.push(result.routes[0].overview_path[i]);
                                }
                            }
                        });
                    }
                });

                $window.google.maps.event.clearListeners(map, 'idle');
            }
        }
    };

    $scope.open = function () {
        var modalInstance = $modal.open({
            templateUrl: 'modalConfirm.html',
            controller: 'modalConfirm',
            size: 'sm',
            resolve: {
                info: function () {
                    return {};
                }
            },
            windowClass: "driverModal"
        });

        modalInstance.result.then(function () {
            $scope.map.active = true;
            }, function () {
            return;
        });
    };

}]);