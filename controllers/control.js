
const Order=require('../models/order');
const Connection = require('../models/connection');
const Complaint =require('../models/complaint');
const Admin =require('../models/admin');
const User = require('../models/user');
const Deliveryboy=require('../models/deliveryboy');
const Blog=require('../models/blog');

var nodemailer = require('nodemailer');

var mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kakarlasivasai043@gmail.com',
        pass: 'svlfvkjzhatftelm'
    }
});


const obj={value:'xyz',name:'Account'};

function updateObj(x,nam){
    obj.value=x;
    obj.name=nam;
}

const obj2={name:'name',email:'xyz',number:'1323',area:'dkjs'};

function updateObj2(nam,email,no,address){
    obj2.name=nam;
    obj2.email=email;
    obj2.number=no;
    obj2.area=address;
}

exports.gethome=(req,res)=>{
    res.render("home");
};

exports.getuserlogin=(req,res)=>{
    res.render("userlogin");
};

exports.getadminlogin=(req,res)=>{
    res.render("adminlogin");
};

exports.getuserregister=(req,res)=>{
    res.render("userregister");
};

exports.getemployeeregister =function(req,res){
    res.render("employeeregister");
};

exports.getemployeelogin=(req,res)=>{
    res.render("employeelogin");
};





exports.getabout=(req,res)=>{
    res.render("about");
}

exports.prevorders=(req,res)=>{
    Order.find({personmail:obj.value})
    .then(function(foundorders){
        if(foundorders){
            res.render("prevorders",{orders:foundorders,Username:obj.name});
        }else{
            res.render("noorders");
        }
    })
    .catch((err)=>{
        console.log(err);
    })
};

exports.prevcomplaints=(req,res)=>{
    Complaint.find({personmail:obj.value})
    .then(function(foundcomp){
        if(foundcomp){
            res.render("prevcomplaints",{complaint:foundcomp,Username:obj.name});
        }else{
            res.render("nocomplaints");
        }
    })
    .catch((err)=>{
        console.log(err);
    })
};

exports.getpendingemployee=(req,res)=>{
    
    Deliveryboy.find({approveStatus:'pending'})
    .then(function(foundemp){
        if(foundemp){
        res.render("manageemployee",{emp:foundemp});
        }else{
            res.write('<h1>No pending requests found</h1>');
        }
    })
    .catch((err) => {
        console.log(err);
    });
   
};



exports.getemployeedetails=(req,res)=>{
    
    Deliveryboy.find({approveStatus:'approved'})
    .then(function(foundemp){
        if(foundemp){
        res.render("employeedetails",{emp:foundemp});
        }else{
            res.write('<h1>No pending requests found</h1>');
        }
    })
    .catch((err) => {
        console.log(err);
    });
   
};

exports.getpendingcomplaint=(req,res)=>{
    
    Complaint.find({status:'pending'})
    .then(function(foundcomplaint){
        if(foundcomplaint){
        res.render("pendingcomplaints",{complaint:foundcomplaint});
        }else{
            res.write('<h1>No pending requests found</h1>');
        }
    })
    .catch((err) => {
        console.log(err);
    });
   
};

exports.adminlogin=(req,res)=>{
    const adminId=req.body.adminId;
    const password=req.body.password;
  
    // console.log('hii')
    Admin.findOne({adminId:adminId})
    .then(function(foundtuple){
        if(foundtuple){
            if(foundtuple.password===password){
                Order.find({status:'pending'})
                .then(function(foundorders){
                    if(foundorders){
                        res.render("adminhome",{orders:foundorders});
                    }else{
                        res.render("noorders");
                    }
                })
                .catch((err)=>{
                    console.log(err);
                });
            }
        }
    })
    .catch((err) => {
        console.log(err);
    });
};

exports.userregister=(req,res)=>{
    const username=req.body.name;
    const emailinput = req.body.email;
    const newUser = new User({
    name:req.body.name,
    dateOfBirth:req.body.dob,
    email:req.body.email,
    mobileNo:req.body.mobile,
    aadhar:req.body.aadhar,
    password:req.body.pass,
    location:req.body.locationtype,
    houseNo:req.body.houseno,
    streetName:req.body.streetname,
    city:req.body.city,
    district:req.body.district,
    state:req.body.state,
    pincode:req.body.pincode
    });

    newUser.save()
    .then(() => {
        res.render("userhome",{Username:username});
        updateObj(emailinput,username);
    })
    .catch((err) => {
        console.log(err);
    });

};

exports.userlogin=(req,res)=>{
        const emailinput = req.body.email;
        const password=req.body.password;
    
        User.findOne({email:emailinput})  
        .then(function(foundUser){
            if(foundUser){
                if(foundUser.password===password){
                    
                    res.render("userhome",{Username:foundUser.name});
                    updateObj(emailinput,foundUser.name);
                    
                }
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    };

exports.employeeregister=(req,res)=>{
    const empname=req.body.name;
    const empId=empname+"123";
    const area=req.body.dropdown;
    const email=req.body.email;

    const newemp=new Deliveryboy({
        name:req.body.name,
        phn:req.body.phone,
        email:req.body.email,
        employeId:empId,
        deliveryArea:req.body.dropdown,
        password:req.body.pass
    });
    newemp.save()
    .then(() => {
        res.render("home");
        // updateObj2(email,area);
    })
    .catch((err) => {
        console.log(err);
    });
}; 

exports.getuserdetails=(req,res)=>{
    
    User.find()
    .then(function(founduser){
        if(founduser){
        res.render("userdetails",{user:founduser});
        }else{
            res.write('<h1>No pending requests found</h1>');
        }
    })
    .catch((err) => {
        console.log(err);
    });
   
};


exports.employeelogin = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
  
      Deliveryboy.findOne({ email: email, approveStatus: 'approved' })
      .then(function (foundemp) {
        if (foundemp) {
          if (foundemp.password === password) {
            Order.find({ status: 'pending', personArea: foundemp.deliveryArea })
              .then(function (foundorders) {
                if (foundorders) {
                  res.render('employeehome', { orders: foundorders });
                  updateObj2(foundemp.name,email,foundemp.phn,foundemp.deliveryArea);
                } else {
                  res.send('<h1>No pending orders</h1>');
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
        } else {
          res.redirect('/');
        }
      })
      .catch((err) => {
        console.log(err);
      });
};
  

  
exports.manageemployee=(req,res)=>{
    const id=req.body.employeeId;

    Deliveryboy.updateOne({employeId: id}, {approveStatus: 'approved'})
    .then(function(){
        res.redirect("/manageemployee");
    })
    .catch((err) => {
        console.log(err);
    });
};

exports.userdetails=(req,res)=>{
    const name=req.body.name;
    User.find({name:name})
    .then(function(founduser){
        if(founduser){
        res.render("userdetails",{user:founduser});
        }else{
            res.write('<h1>No pending requests found</h1>');
        }
    })
    .catch((err) => {
        console.log(err);
    });

};

exports.employeedetails=(req,res)=>{
    const ename=req.body.empname;
    Deliveryboy.find({name:ename})
    .then(function(foundemp){
        if(foundemp){
        res.render("employeedetails",{emp:foundemp});
        }else{
            res.write('<h1>No pending requests found</h1>');
        }
    })
    .catch((err) => {
        console.log(err);
    });

};

exports.pendingcomplaints=(req,res)=>{
    const id=req.body.complaintId;

    Complaint.updateOne({complaintId: id}, {status: 'approved'})
    .then(function(){
        res.redirect("/pendingcomplaints");
    })
    .catch((err) => {
        console.log(err);
    });
};

exports.employeehome=(req,res)=>{
    const id=req.body.orderId;

    Order.updateOne({orderId: id}, {status: 'completed'})
    .then(function(){
        Order.find({status:'pending',personArea:obj2.area})
            .then(function(foundorders){
                if(foundorders){
                    res.render("employeehome",{orders:foundorders});
                }else{
                    res.render('<h1>No pending orders</h1>');
                }
            })
            .catch((err)=>{
                console.log(err);
            });
    })
    .catch((err) => {
        console.log(err);
    });
}


exports.booking=(req,res)=>{
    const personname=req.body.name;
    const currentDate = new Date();
    const orderId = currentDate.getTime().toString() + Math.floor(Math.random() * 1000).toString();

    const newOrder=new Order({
        personname:req.body.name,
        personmail:req.body.email,
        personphn:req.body.phone,
        personAddress:req.body.address,
        personArea:req.body.dropdown,
        quantity:req.body.quantity,
        deliveryDate:req.body.date,
        orderId:orderId
    });

    newOrder.save()
    .then(() => {
        res.render("userhome",{Username:personname});
    })
    .catch((err) => { 
        console.log(err.message);
        res.send("Error while saving the order");
    });
};

exports.newConnection=(req,res)=>{
    const personname=req.body.name;
    const currentDate = new Date();
    const connectionId = currentDate.getTime().toString() + Math.floor(Math.random() * 10).toString();

    const newConnection=new Connection({
        personname:req.body.name,
        personmail:req.body.email,
        personphn:req.body.phone,
        personAddress:req.body.address,
        personArea:req.body.dropdown,
        conectionId:connectionId,
    });

    newConnection.save()
    .then(() => {
        res.render("userhome",{Username:personname});
    })
    .catch((err) => { 
        console.log(err.message);
        res.send("Error while saving the order");
     });
 };

exports.complaints=(req,res)=>{
    const personname=req.body.name;
    const currentDate = new Date();
    const complaintId = currentDate.getTime().toString() + Math.floor(Math.random() * 10).toString();
    const newComplaint=new Complaint({
        personname:req.body.name,
        personphn:req.body.mobile,
        personmail:req.body.email,
        complainttype:req.body.complainttype,
        personAddress:req.body.address,
        personArea:req.body.Area,
        complaintId:complaintId
    });

    newComplaint.save()
    .then(() => {
        res.render("userhome",{Username:personname});
    })
    .catch((err) => { 
        console.log(err.message);
        console.log("error");
    });
};


exports.getbooking=(req,res)=>{
    User.findOne({email:obj.value}).then(result=>{
        res.render("booking",{USER:result});
    })
   
};

exports.getnewconnection=(req,res)=>{
 User.findOne({email:obj.value}).then(result=>{
res.render("newconnection",{USER:result});
 })
 };

exports.getmydetails=(req,res)=>{
    User.findOne({email:obj.value}).then(result=>{
        res.render("mydetails",{USER:result});
    })
};

exports.getcomplaints=(req,res)=>{
    User.findOne({email:obj.value}).then(result=>{
        if(result){
            res.render("complaints",{USER:result});
        }
        else{
            res.write('<h1>no user found</h1>');
        }
})
};

exports.getchangeuserdetails=(req,res)=>{
    User.find({email:obj.value})
    .then(function(founduser){
        if(founduser){
            res.render("changeuserdetails",{Username:obj.name,user:founduser,USER:founduser});
        }else{
            res.redirect("/userlogin");
        }
    })
    .catch((err) => {
        console.log(err);
    });
};

exports.getchangeemployeedetails=(req,res)=>{
    Deliveryboy.find({email:obj2.email})
    .then(function(foundemp){
        if(foundemp){ 
        res.render("changeemployeedetails",{emp:foundemp});
        }else{
            res.redirect("/employeelogin");
        }
    })
    .catch((err) => {
        console.log(err);
    });
};

exports.updateuser=(req,res)=>{
    User.updateOne({email:req.body.buttontype},{$set:{name:req.body.name, mobileNo:req.body.phnnum, aadhar:req.body.adhaarno,location:req.body.address}})
    .then(function(user){
        res.redirect("/userdetails");
    })
    .catch((err)=>{
        console.log(err);
    });
};

exports.deleteuser=(req,res)=>{
    User.deleteOne({email:req.body.buttontype})
    .then(function(){
        res.redirect("/userdetails");
    })
    .catch((err)=>{
        console.log(err);
    });
};

exports.updateemployee=(req,res)=>{
    Deliveryboy.updateOne({email:req.body.buttontype},{$set:{name:req.body.name, phn:req.body.phnnum,  deliveryArea:req.body.address}})
    .then(function(user){
        res.redirect("/employeedetails");
    })
    .catch((err)=>{
        console.log(err);
    });
}

exports.deleteemployee=(req,res)=>{
    Deliveryboy.deleteOne({email:req.body.buttontype})
    .then(function(){
        res.redirect("/employeedetails");
    })
    .catch((err)=>{
        console.log(err);
    });
}

exports.changeuserdetails=(req,res)=>{
    User.updateOne({email:req.body.buttontype},{$set:{name:req.body.name, mobileNo:req.body.phnnum, aadhar:req.body.adhaarno,location:req.body.address}})
    .then(function(user){
        console.log(user.name)
        res.redirect("/changeuserdetails");
    })
    .catch((err)=>{
        console.log(err);
    });
};

exports.deleteuseraccount=(req,res)=>{
    User.deleteOne({email:req.body.buttontype})
    .then(function(){
        res.redirect("/");
    })
    .catch((err)=>{
        console.log(err);
    });
};

exports.updateemployeedetails=(req,res)=>{
    Deliveryboy.updateOne({email:req.body.buttontype},{$set:{name:req.body.name, phn:req.body.phnnum, deliveryArea:req.body.address}})
    .then(function(user){
        res.redirect("/changeemployeedetails");
    })
    .catch((err)=>{
        console.log(err);
    });
};

exports.deleteemployeeaccount=(req,res)=>{
    Deliveryboy.deleteOne({email:req.body.buttontype})
    .then(function(){
        res.redirect("/");
    })
    .catch((err)=>{
        console.log(err);
    });
};

exports.getfindorderbyuser=(req,res)=>{
    Order.find()
    .then(function(foundorder){
        if(foundorder){
            res.render("userorders",{orders:foundorder});
        }else{
            res.write("<h1>No orders found</h1>");
        }
    })
    .catch((err) => {
        console.log(err);
    });
};

exports.finduserorders=(req,res)=>{
    Order.find({personname:req.body.name})
    .then(function(foundorder){
        if(foundorder){
            res.render("userorders",{orders:foundorder});
        }else{
            res.write("<h1>No orders found</h1>");
        }
    })
    .catch((err) => {
        console.log(err);
    });
}

exports.getemployeeorders=(req,res)=>{
    Order.find()
    .then(function(foundorder){
        if(foundorder){
            res.render("employeeorders",{orders:foundorder});
        }else{
            res.write("<h1>No orders found</h1>");
        }
    })
    .catch((err) => {
        console.log(err);
    });
}

exports.findemployeeorders=(req,res)=>{
    
    Deliveryboy.findOne({name:req.body.name})
    .then(function(boy){
        Order.find({personArea:boy.deliveryArea})
        .then(function(foundorder){
            if(foundorder){
                res.render("employeeorders",{orders:foundorder});
            }else{
                res.write("<h1>No orders found</h1>");
            }
        })
        .catch((err) => {
            console.log(err);
        });
    })
    .catch((err) => {
        console.log(err);
    });

}

exports.getannouncements = (req,res) => {
    res.render("announcements");
}

exports.sendannouncements = (req, res, next) => {
    const { subject, message } = req.body;
    User.find()
        .then((users) => {
            const emailList = users.map(user => user.email);
            const mailOptions = {
                from: 'kakarlasivasai043@gmail.com',
                to: emailList.join(','),
                subject: subject,
                text: message
            };
            mailTransporter.sendMail(mailOptions)
                .then((info) => {
                    console.log(`Email sent: ${info.response}`);
                    res.redirect('/adminlogin');
                })
                .catch((error) => {
                    console.log(`Error occurred while sending email: ${error}`);
                    res.redirect('/announcements');
                });
        })
        .catch((error) => {
            console.log(`Error occurred while finding users: ${error}`);
            res.redirect('/announcements');
        });
  };

  exports.getblog = (req,res)=>{
    // res.render("blog");
    Blog.find()
    .then(function(blogs){
        res.render("blog",{blogposts:blogs})
    })
  };

  exports.blogpost =(req,res)=>{
    const newBlog=new Blog({
        h1:req.body.h1,
        p1:req.body.p1,
        p2:req.body.p2,
        imgsrc:req.body.imgsrc
    });

    newBlog.save()
    .then(() => {
        console.log("newblog saved");
        res.render("addingblog")
    })
    .catch((err) => {
        console.log(err.message);
        console.log("error");
    });
  }

  exports.addingblog = (req,res)=>{
    res.render("addingblog");
  }
