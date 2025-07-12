//  import './config/instrument.js'

// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
//  import connectDB from './config/db.js'
//  import * as Sentry from "@sentry/node";
//  import { clerkWebhooks } from './controllers/webhooks.js';
// // import companyRoutes from './routes/companyRoutes.js'
// // import connectCloudinary from './config/cloudinary.js'
// // import jobRoutes from './routes/jobRoutes.js'
// // import userRoutes from './routes/userRoutes.js'
// // import {clerkMiddleware} from  '@clerk/express'
// const app = express()

// // connect to database

//   await connectDB()
// // await connectCloudinary()



// app.use(cors())
// app.use(express.json())
// // app.use(clerkMiddleware())

// app.get('/',(req,res)=> res.send("API WORKING"))
// app.get("/debug-sentry",function mainHandler(req,res){
//   throw new Error("MY FIRST Sentry error!");


//  });

// app.post('/webhooks',clerkWebhooks)
// 
// // app.use('/api/jobs',jobRoutes)
// // app.use('/api/users',userRoutes)

// const PORT = process.env.PORT || 5000
//  Sentry.setupExpressErrorHandler(app);
// // app.listen(PORT,()=>{
// //   console.log(`server is running on port ${PORT}`);
// // })

// import './config/instrument.js'
// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import connectDB from './config/db.js'
// import * as Sentry from "@sentry/node";
// import { clerkWebhooks } from './controllers/webhooks.js';

// const app = express()

// await connectDB()

// app.use(cors())
// app.use(express.json())

// app.get('/', (req, res) => res.send("API WORKING"))

// // app.get("/debug-sentry", (req, res) => {
// //   throw new Error("MY FIRST Sentry error!");
// // });

// app.post('/webhooks', clerkWebhooks)

// // Sentry error handler: yeh hamisha sab routes ke baad aata hai
// Sentry.setupExpressErrorHandler(app);


// if (process.env.NODE_ENV !== 'production') {
//   const PORT = process.env.PORT || 5000;
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// }

// // Vercel ke liye **export** karo:
// export default app;



import './config/instrument.js'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from './controllers/webhooks.js';
 import companyRoutes from './routes/companyRoutes.js'
console.log("✅ Index.js started");

const app = express()

console.log("✅ Before connecting DB");
await connectDB()
console.log("✅ DB connected");

app.use(cors())
console.log("✅ CORS enabled");
app.use(express.json())
console.log("✅ express.json enabled");

app.get('/', (req, res) => {
  console.log("✅ GET / called");
  res.send("API WORKING")
})

// app.get("/debug-sentry", (req, res) => {
//   throw new Error("MY FIRST Sentry error!");
// });

app.post('/webhooks', (req, res, next) => {
  console.log("✅ POST /webhooks called");
  clerkWebhooks(req, res, next);
})

 app.use('/api/company' , companyRoutes)

// Sentry error handler: yeh sabke baad
Sentry.setupExpressErrorHandler(app);
console.log("✅ Sentry error handler set");

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`✅ Server is running locally on port ${PORT}`);
  });
} else {
  console.log("✅ Exporting app for Vercel");
}

// Vercel ke liye export
export default app;
