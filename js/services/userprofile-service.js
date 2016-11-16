/**
 * Created by Ramkumar on 12/20/2015.
 */
var UserProfile = require('../models/userprofile');

function UserProfileService() {
    this.userProfiles =
        [
            new UserProfile('gstrguser11', 'admin@123', 'su11@gstrg.com', 'Bangalore', 'FTE'),
            new UserProfile('gstrguser12', 'admin@123', 'su12@gstrg.com', 'Bangalore', 'FTE'),
            new UserProfile('gstrguser13', 'admin@123', 'su13@gstrg.com', 'Bangalore', 'FTE'),
            new UserProfile('gstrguser14', 'admin@123', 'su14@gstrg.com', 'Bangalore', 'FTE'),
            new UserProfile('gstrguser15', 'admin@123', 'su15@gstrg.com', 'Bangalore', 'FTE'),
            new UserProfile('gstrguser16', 'admin@123', 'su16@gstrg.com', 'Bangalore', 'FTE'),
            new UserProfile('gstrguser17', 'admin@123', 'su17@gstrg.com', 'Bangalore', 'FTE')
        ];
}

UserProfileService.prototype.getProfile = function(userName) {
    var userProfile = null;

    if(!userName) {
        throw new Error("Invalid User Name Specified!");
    }

    for(var index in this.userProfiles) {
        var profile = this.userProfiles[index];

        if(profile.userName === userName) {
            userProfile = profile;
            break;
        }
    }

    if(!userProfile) {
        throw new Error("User Profile Not Found!");
    }

    return userProfile;
};

UserProfileService.prototype.validate = function(userName, password) {
    var validation = userName && password;

    if(!validation)
        throw new Error("Invalid Credential Parameters Specified!");

    var profile = this.getProfile(userName);
    var isValid = profile && profile.password === password;

    return isValid;
};

module.exports = UserProfileService;