const express=require('express');
const router = express.Router();

const Controller = require('../controllers/control')

router.get('/',Controller.gethome);
router.get('/userlogin',Controller.getuserlogin);
router.get('/adminlogin',Controller.getadminlogin);
router.get('/userregister',Controller.getuserregister);
router.get('/employeeregister',Controller.getemployeeregister);
router.get('/employeelogin',Controller.getemployeelogin);
router.get('/about',Controller.getabout);
router.get('/prevorders',Controller.prevorders);
router.get('/prevcomplaints',Controller.prevcomplaints);
router.get('/manageemployee',Controller.getpendingemployee);
router.get('/employeedetails',Controller.getemployeedetails);
router.get('/pendingcomplaints',Controller.getpendingcomplaint);
router.post('/adminlogin',Controller.adminlogin);
router.post('/userregister',Controller.userregister);
router.post('/userlogin',Controller.userlogin);
router.post('/employeeregister',Controller.employeeregister);
router.get('/userdetails',Controller.getuserdetails);
router.post('/employeelogin',Controller.employeelogin);
router.post('/manageemployee',Controller.manageemployee);
router.post('/userdetails',Controller.userdetails);
router.post('/employeedetails',Controller.employeedetails);
router.post('/pendingcomplaints',Controller.pendingcomplaints);
router.post('/employeehome',Controller.employeehome);
router.post('/booking',Controller.booking);
router.post('/complaints',Controller.complaints);
router.get('/booking',Controller.getbooking);
router.get('/mydetails',Controller.getmydetails);
router.get('/complaints',Controller.getcomplaints);

router.get('/changeuserdetails',Controller.getchangeuserdetails);
router.get('/changeemployeedetails',Controller.getchangeemployeedetails);
router.post('/updateuser',Controller.updateuser);
router.post('/deleteuser',Controller.deleteuser);
router.post('/updateemployee',Controller.updateemployee);
router.post('/deleteemployee',Controller.deleteemployee);
router.post('/changeuserdetails',Controller.changeuserdetails);
router.post('/deleteuseraccount',Controller.deleteuseraccount);
router.post('/updateemployeedetails',Controller.updateemployeedetails);
router.post('/deleteemployeeaccount',Controller.deleteemployeeaccount);
router.get('/findorderbyuser',Controller.getfindorderbyuser);
router.post('/finduserorders',Controller.finduserorders);
router.get('/employeeorders',Controller.getemployeeorders);
router.post('/employeeorders',Controller.findemployeeorders);
router.post('/announcements',Controller.sendannouncements);
router.get('/announcements',Controller.getannouncements);

module.exports = router

