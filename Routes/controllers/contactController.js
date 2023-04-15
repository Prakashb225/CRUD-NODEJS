const asynchandler = require("express-async-handler");
const Contact = require("../../models/dbScheme");


//route GET from /api/contacts
const getcontacts = asynchandler(async (req,res)=>{
    const contacts = await Contact.find()
    res.status(200).json(contacts);
});
//route CREATE from /api/contacts

const createcontact =asynchandler(async(req,res)=>{
    console.log("The requested body is",req.body) ;
    const {name,email,phone}=req.body;
    if(!name || !email || !phone){
    res.status(400)
    throw new Error("All fields are mandotory!");
    }

    const contacts = await Contact.create({
        name,
        email,
        phone,
    });
    
    res.status(201).json(contacts);
});
//route GET from /api/contacts

const getcontact =asynchandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new err("contact not found");
    }
    res.status(200).json(contact);
});
//route UPDATE from /api/contacts

const updatecontact =asynchandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new err("contact not found");
    }
    const updatedcontact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    )
    res.status(200).json(updatedcontact);
});

//route DELETE from /api/contacts
const deletecontact =asynchandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new err("contact not found");
    }
    await Contact.remove();
    res.status(200).json(contact);
});

module.exports= { 
    getcontacts,
    createcontact,
    getcontact,
    updatecontact,
    deletecontact }