// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const mailchimp = require('@mailchimp/mailchimp_marketing');


mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX,
  });



type Data = {
  
}

export default async function handler( req: NextApiRequest, res: NextApiResponse<Data>) {
  // Extracting the request data from the body
  const {email_address, status } = req.body;
  

  // Fetching the data to mailchimp
  try {
      const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {email_address, status});
      res.json({
        success: true,
        response: "Inscription réussie"
     });

    
  } catch (error: any) {
    const data = JSON.parse(error.response.text);
    res.json({
        success: false,
        response: data.title
    })
  }


}
