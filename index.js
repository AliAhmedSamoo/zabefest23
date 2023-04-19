
const express = require("express");
const { google } = require("googleapis");
const cors = require("cors");
const app = express();
require('./db/connection');
const Modules = require("./modulesdb/modules");
const axios = require('axios');

const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;

app.use(express.urlencoded({ extended: true }));

app.use(cors()) 


app.post("/testdb", async (req, res) => {

console.log(req.body)
 


const axios = require('axios');








// const options = {
//   method: 'POST',
//   url: 'https://api.sendinblue.com/v3/transactionalSMS/sms',
//   headers: {
//     accept: 'application/json',
//     'content-type': 'application/json',
//     'api-key': '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'
//   },
//   data: {
//     sender: 'MyShop',
//     recipient: '33689965433',
//     content: 'Enter this code:CCJJG8 to validate your account',
//     type: 'marketing',
//     tag: 'accountValidation',
//     webUrl: 'http://requestb.in/173lyyx1',
//     unicodeEnabled: true,
//     organisationPrefix: 'MyCompany'
//   }
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });





    res.send("Successfully submitted! Thank you!");


});


app.post("/data", async (req, res) => {
  const { fees,	numberofparticipant,ticketid,	selectedmodule   ,teamleadername,	universityrollno,secondparticipantname ,secondpartricipantrollno,thirdparticipantname ,thirdpartricipantrollno,fourthparticipantname ,fourthpartricipantrollno,fivthparticipantname ,fivthpartricipantrollno,teamleaderemail,participantWhatsapp,module,universityisother } = req.body;

  console.log(req.body);





  const regmodule = new Modules({ fees,	numberofparticipant,ticketid,	selectedmodule   ,teamleadername,	universityrollno,secondparticipantname ,secondpartricipantrollno,thirdparticipantname ,thirdpartricipantrollno,fourthparticipantname ,fourthpartricipantrollno,fivthparticipantname ,fivthpartricipantrollno,teamleaderemail,participantWhatsapp,module,universityname:universityisother });
  await regmodule.save()



  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  // Create client instance for auth
  const client = await auth.getClient();

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1SgJeuxWNIvQ-i5ZdUurDvVROnMCe3z6pgF7eNtyIpuI";





  // Write row(s) to spreadsheet
  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Modules!A:R",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [["=INDIRECT(ADDRESS(ROW()-1,COLUMN()))+1",ticketid,"Rs. "+fees,	numberofparticipant,	selectedmodule   ,teamleadername,	universityrollno,secondparticipantname ,secondpartricipantrollno,thirdparticipantname ,thirdpartricipantrollno,fourthparticipantname ,fourthpartricipantrollno,fivthparticipantname ,fivthpartricipantrollno,teamleaderemail,participantWhatsapp,module,universityisother]],
    },
  });

  res.send("Successfully submitted! Thank you!");
});


app.post("/ambassador", async (req, res) => {
  const { Ambrassadorname,	Ambrassadorid,	Ambrassadoruniversity,Ambrassadorprogram,	Ambrassadoryear,Ambrassadorwhatsapp,Ambrassadoremail,Ambrassadorimage } = req.body;

  console.log(req.body);









  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  // Create client instance for auth
  const client = await auth.getClient();

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1SgJeuxWNIvQ-i5ZdUurDvVROnMCe3z6pgF7eNtyIpuI";





  // Write row(s) to spreadsheet
  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Ambassadors!A:I",
    valueInputOption: "USER_ENTERED",
    resource: {
      // values: [["=INDIRECT(ADDRESS(ROW()-1,COLUMN()))+1", "dsf"]],
      values: [["=INDIRECT(ADDRESS(ROW()-1,COLUMN()))+1",Ambrassadorname,	Ambrassadorid,	Ambrassadoruniversity,Ambrassadorprogram,	Ambrassadoryear,Ambrassadorwhatsapp,Ambrassadoremail,Ambrassadorimage]],
   
    },
  });

  res.send("Successfully submitted! Thank you!");
});

app.listen(process.env.PORT || 1337, () => console.log("running on 1337"));

