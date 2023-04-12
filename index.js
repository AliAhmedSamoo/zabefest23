const express = require("express");
const { google } = require("googleapis");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(cors()) 


app.post("/data", async (req, res) => {
  const { fees,	numberofparticipant,	selectedmodule   ,teamleadername,	universityrollno,secondparticipantname ,secondpartricipantrollno,thirdparticipantname ,thirdpartricipantrollno,fourthparticipantname ,fourthpartricipantrollno,teamleaderemail,participantWhatsapp,module,universityisother } = req.body;

  // console.log(req.body);









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
    range: "Modules!A:L",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [["=INDIRECT(ADDRESS(ROW()-1,COLUMN()))+1","to be entered",	numberofparticipant,	selectedmodule   ,teamleadername,	universityrollno,secondparticipantname ,secondpartricipantrollno,thirdparticipantname ,thirdpartricipantrollno,fourthparticipantname ,fourthpartricipantrollno,teamleaderemail,participantWhatsapp,module,universityisother]],
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
    range: "Sheet2!A:I",
    valueInputOption: "USER_ENTERED",
    resource: {
      // values: [["=INDIRECT(ADDRESS(ROW()-1,COLUMN()))+1", "dsf"]],
      values: [["=INDIRECT(ADDRESS(ROW()-1,COLUMN()))+1",Ambrassadorname,	Ambrassadorid,	Ambrassadoruniversity,Ambrassadorprogram,	Ambrassadoryear,Ambrassadorwhatsapp,Ambrassadoremail,Ambrassadorimage]],
   
    },
  });

  res.send("Successfully submitted! Thank you!");
});

app.listen(process.env.PORT || 1337, () => console.log("running on 1337"));
