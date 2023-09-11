const express=require('express');
const router = express.Router();

const Controller = require('../controllers/control')

// Get middleware to Common home page
router.get('/',Controller.gethome);

// Get middleware to User login
router.get('/userlogin',Controller.getuserlogin);

// get middleware to admin login
router.get('/adminlogin',Controller.getadminlogin);

// get middleware to user register
router.get('/userregister',Controller.getuserregister);

// get middleware to employee register
router.get('/employeeregister',Controller.getemployeeregister);

// get middleware to employee login
router.get('/employeelogin',Controller.getemployeelogin);

// get middleware to about Us page
router.get('/about',Controller.getabout);

// get middleware to previous orders(booking history)
router.get('/prevorders',Controller.prevorders);

// get middleware to previous complaints by user (complaint history)
router.get('/prevcomplaints',Controller.prevcomplaints);

// get middleware for managing employees (accepting employees)
router.get('/manageemployee',Controller.getpendingemployee);

// get middleware for cred details for employees
router.get('/employeedetails',Controller.getemployeedetails);

// get middleware to view pending complaints 
router.get('/pendingcomplaints',Controller.getpendingcomplaint);

// post middleware for admin login
router.post('/adminlogin',Controller.adminlogin);

// post middleware for registering user
router.post('/userregister',Controller.userregister);

// post middleware for user login
router.post('/userlogin',Controller.userlogin);

// post middleware for registering as a employee
router.post('/employeeregister',Controller.employeeregister);

// get middleware for cred operations to middleware 
router.get('/userdetails',Controller.getuserdetails);

// post middleware for login employee
router.post('/employeelogin',Controller.employeelogin);

// post middleware for managing employee(accepting employee)
router.post('/manageemployee',Controller.manageemployee);

// post middleware for cred operaions for user by admin
router.post('/userdetails',Controller.userdetails);

// post middleware for cred operations for employee details by admin(for displaying details)
router.post('/employeedetails',Controller.employeedetails);

// post middleware for to get pending compalints
router.post('/pendingcomplaints',Controller.pendingcomplaints);

// post middleware to employee home (approving orders)
router.post('/employeehome',Controller.employeehome);

// post middleware for booking a cylinder
router.post('/booking',Controller.booking);

// post middleware for making a complaint
router.post('/complaints',Controller.complaints);
router.get('/booking',Controller.getbooking);
router.get('/mydetails',Controller.getmydetails);
router.get('/complaints',Controller.getcomplaints);
router.post('/newconnection',Controller.newConnection);
router.get('/newconnection',Controller.getnewconnection);
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
router.get('/blog',Controller.getblog);
router.post('/blog',Controller.blogpost);
router.get('/addingblog',Controller.addingblog);
router.get('/pendingconnection',Controller.getpendingconnection);
router.post('/pendingconnection',Controller.pendingconnection);

const Deliveryboy=require('../models/deliveryboy')
router.post('/checkemail', async (req, res) => {
    
    console.log(req.body)
    try {
      const email = req.body.email;
  
      
      console.log(email)
      const existingUser = await Deliveryboy.findOne({ email });
       console.log(existingUser)
      if (existingUser) {
        
        return res.status(200).json({ exists: true });
      } else {
       
        return res.status(200).json({ exists: false });
      }
    } catch (error) {
      console.error('Error checking email:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router

