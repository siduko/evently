/**
 * Created by LaiDuyHoang on 25/01/2015.
 */
angular.module('evently.factories',[])
    .factory('GroupService', function ($localstorage) {
        var groups=[];
        var defaultGroups = [{id:1,title:'Presentation'},{id:2,title:'Agent'}];

        return {
            all: function () {
                if(angular.isDefined($localstorage.groups))
                    groups=$localstorage.groups;
                else
                    groups = defaultGroups;
                return groups;
            },
            get: function (index) {
                return groups[index];
            },
            remove: function (index) {
                groups.slice(index,1);
            },
            add: function (group) {
                group.push(group);
                $localstorage.save(groups);
            }
        }
    });