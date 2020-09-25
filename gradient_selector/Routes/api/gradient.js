const { Router } = require("express");
const express = require("express");
const router = express.Router();
const Gradient  = require('../../Models/Gradient');
const nodeHtmlToImg = require('node-html-to-image');
router.get('/',async(req,res)=>{
   try {
    const gradients = await Gradient.find();
    res.send(gradients);
    res.status(200);
   } catch (error) {
       console.log(error.message);
       return res.status(500);
   }
});

router.post('/',async (req,res)=>{
   try {
    const newGradient = new Gradient(req.body);
    await newGradient.save();
    res.status(200);
    res.send(newGradient);
   } catch (error) {
    console.log(error.message);
    return res.status(500);
    }
});

router.put("/:id",async(req,res)=>{
    try {
        const updateGradient = await Gradient.findByIdAndUpdate(req.params.id,req.body,{new:true,});
        res.send(updateGradient);
        res.status(200);
    } catch (error) {
        console.log(error.message);
        return res.status(500);
       
   }
});

router.delete("/:id",async (req,res)=>{
    try {
        await Gradient.findByIdAndDelete(req.params.id);
        console.log("Deleted !!!");
        res.status(200);
    } catch (error) {
        console.log(error.message);
        return res.status(500);
    }
});

router.get('/download/:themeName',async (req,res)=>{
    const gradient = await Gradient.findOne({name:req.params.themeName})
    await nodeHtmlToImg({
        output:"./public/images/image.png",
        html:`<div style="width:100%; height:100%;background-image:linear-gradient(${gradient.colors.dirrection},${gradient.colors.start},,${gradient.colors.end})></div>`,
    });

    gradient.downloads = gradient.downloads+1;
    await gradient.save();

    res.download('./public/images/image.png');
})
module.exports = router;