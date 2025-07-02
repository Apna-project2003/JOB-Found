import express from 'express';
import { ChangeJobApplicationsStatus, changeVisiblity, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyControllers.js';
import upload from '../config/multer.js';

const router = express.Router()

//Register a comapny

router.post('/register',upload.single('image'),registerCompany)


//Company login

router.post('/login',loginCompany)

//Get company data

router.get('/company' , getCompanyData)

//Post a job

router.post('/post-job',postJob)



// Get Applicants Data of Company

router.get('/applicants',getCompanyJobApplicants)


// Get Company Job List

router.get('/list-jobs',getCompanyPostedJobs)


//Change Applications Status

router.post('/change-status',ChangeJobApplicationsStatus)


// change Applications Visiblity

router.post('/change-visiblity',changeVisiblity )





export default router