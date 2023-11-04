# Our Application Programmer Interface

## Certificates:
### certificatesEndpoint.js
#### POST certificatesEndpoint
Input: 
uid = User ID (String)
data = data (JSON)

Takes a user ID and the data of the new JSON value for the certificate, and sets the value in the database to the new data.
#### POST generate-certificate
Input:
name = name (String)
Generates the certificate given a name.

### verify.js
#### POST requestVerification
Input:
uid = User ID (String)
certificationID = Certification ID (Integer)
Sets a document of type Certification ID to the Verifications table in the database.

#### POST approveVerification
Input:
uid = User ID (String)
certificationID = Certification ID (Integer)
Sets the given user ID's document to verified.

## Incentive Control:
###  createIncentive.js
#### POST createIncentive
Input:
xp = Increase in xp (Integer)
uid = User ID (String)
Sets the increase in xp and the new total experience, if the xp increase is yields the new xp field to be over 2000, levels is incremented, and xp = xp mod 2000.

### editIncentive.js
#### POST editIncentive
Input:
uid = User ID (String)
level = Monthly Level (Integer)
xp = Running XP (Integer)
totalPoints = Total Experience (Integer)
Sets the updated fields.

### getIncentive.js
#### GET getIncentive
Input:
uid = User ID (String)
Returns the incentive fields for a given user.

## Leaderboard Control:
### getLeaderboard.js
#### GET getLeaderboard.js
Input:
None
Outputs the monthly leaderboard in desccending order.

## Profile Control:
### createProfile.js
#### POST createProfile.js
Input:
uid = User ID (String)
data = data (JSON)
Replaces user the value for the User with  User ID with new JSON file.

### editProfile.js
#### PUT editProfile
Input:
uid = User ID (String)
modified = modified (JSON)
Updates User with User ID with new JSON object.

### getProfile.js
#### GET getProfile
Input:
uid = User ID (String)
Returns the profile with given User ID.

## Admin Reports
### AdminReportsEndpoint.js
#### GET adminReports
Input:
None
Returns an administrator view of all of the users and their progress.

## Certification
### certificaiton.js
#### GET getCertifications
Input:
None
Returns a list of the certifications


