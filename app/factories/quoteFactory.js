angular.module('blackRide').factory('QuoteFactory' , function () {

  var QuoteFactory = function () {   
     var scope = {
        fleet_id: null,
        passenger_id: null,
        passenger_in_group: false,
        scheduled: null,
        scheduled_duration: 0.0,
        from: null,
        to: null,
        waypoints: [],
        sort_by: "price",
        max_results: 20,
        vehicle_type: 3,
        vehicle_size: 1,
        vehicle_energy_type: 6,
        driver_info: null,
        auth_response: null,
        booking_response: null,
        dispatch_response: null
    }

    this.setFleet_id = function(fleet_id) { scope.fleet_id = fleet_id; }
    this.getFleet_id = function() { return scope.fleet_id; }
    this.setPassenger_id = function(passenger_id) { scope.passenger_id = passenger_id; }
    this.getPassenger_id = function() { return scope.passenger_id; }
    this.setPassenger_in_group = function(passenger_in_group) { scope.passenger_in_group = passenger_in_group; }
    this.getPassenger_in_group = function() { return scope.passenger_in_group; }
    this.setScheduled = function(scheduled) { scope.scheduled = scheduled; }
    this.getScheduled = function() { return scope.scheduled; }
    this.setScheduled_duration = function(scheduled_duration) { scope.scheduled_duration = scheduled_duration; }
    this.getScheduled_duration = function() { return scope.scheduled_duration; }
    this.setFrom = function(from) { scope.from = from; }
    this.getFrom = function() { return scope.from; }
    this.setTo = function(to) { scope.to = to; }
    this.getTo = function() { return scope.to; }
    this.setWaypoints = function(waypoints) { scope.waypoints = waypoints; }
    this.getWaypoints = function() { return scope.waypoints; }
    this.setSort_by = function(sort_by) { scope.sort_by = sort_by; }
    this.getSort_by = function() { return scope.sort_by; }
    this.setMax_results = function(max_results) { scope.max_results = max_results; }
    this.getMax_results = function() { return scope.max_results; }
    this.setVehicle_type = function(vehicle_type) { scope.vehicle_type = vehicle_type; }
    this.getVehicle_type = function() { return scope.vehicle_type; }
    this.setVehicle_size = function(vehicle_size) { scope.vehicle_size = vehicle_size; }
    this.getVehicle_size = function() { return scope.vehicle_size; }
    this.setVehicle_energy_type = function(vehicle_energy_type) { scope.vehicle_energy_type = vehicle_energy_type; }
    this.getVehicle_energy_type = function() { return scope.vehicle_energy_type; }
    this.setDriver_info = function(driver_info) { scope.driver_info = driver_info; }
    this.getDriver_info = function() { return scope.driver_info; }
    this.getAuthResponse = function () { return scope.auth_response; }
    this.setAuthResponse = function (auth_response) { scope.auth_response = auth_response; }
    this.getBookingResponse = function () { return scope.booking_response; }
    this.setBookingResponse = function (booking_response) { scope.booking_response = booking_response; }
    this.getDispatchResponse = function () { return scope.dispatch_response; }
    this.setDispatchResponse = function (dispatch_response) { scope.dispatch_response = dispatch_response; }
    this.getSerialized = function () {
        return scope;
    }
  };

  return new QuoteFactory();

});

angular.module('blackRide').factory('AuthResponse' , function () {
    
    var AuthResponse = function () {

        var bindAccessors = function (o, property, value) {
            var _value = value;
            var capitalized = property.substr(0, 1).toUpperCase() + property.substr(1);
            o["get" + capitalized] = function() {
                return _value;
            };
            o["set" + capitalized] = function(v) {
                _value = v;
            };
        }

        this.fillPassenger = function (properties) {
            for (var i in properties ) {
                bindAccessors(this, i, properties[i]);
            }
        }
    
    };

    return new AuthResponse();
});

angular.module('blackRide').factory('BookingsResponse' , function () {
    
    var BookingsResponse = function () {

        var bindAccessors = function (o, property, value) {
            var _value = value;
            var capitalized = property.substr(0, 1).toUpperCase() + property.substr(1);
            o["get" + capitalized] = function() {
                return _value;
            };
            o["set" + capitalized] = function(v) {
                _value = v;
            };
        }

        this.fillPassenger = function (properties) {
            for (var i in properties ) {
                bindAccessors(this, i, properties[i]);
            }
        }
    
    };

    return new BookingsResponse();
});

angular.module('blackRide').factory('DispatchResponse' , function () {
    
    var DispatchResponse = function () {

        var bindAccessors = function (o, property, value) {
            var _value = value;
            var capitalized = property.substr(0, 1).toUpperCase() + property.substr(1);
            o["get" + capitalized] = function() {
                return _value;
            };
            o["set" + capitalized] = function(v) {
                _value = v;
            };
        }

        this.fillPassenger = function (properties) {
            for (var i in properties ) {
                bindAccessors(this, i, properties[i]);
            }
        }
    
    };

    return new DispatchResponse();
});