/**
 * Lotlite admission form → Google Sheet
 *
 * Setup:
 * 1. Create a Google Sheet with a tab named "Submissions" (or use the active sheet).
 * 2. Add header row in row 1:
 *    Timestamp | Full Name | Email | Phone | Program Interest | Source | Submitted At (ISO)
 * 3. Extensions → Apps Script → paste this file → Deploy as Web App (see project README / docs in chat).
 */

var SHEET_NAME = "Submissions";

function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);
    var sheet = getSheet_();

    sheet.appendRow([
      new Date(),
      body.fullName || "",
      body.email || "",
      body.phone || "",
      body.programInterest || "",
      body.source || "",
      body.submittedAt || "",
    ]);

    return jsonResponse_({ success: true });
  } catch (err) {
    return jsonResponse_({ success: false, error: String(err.message || err) });
  }
}

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.getActiveSheet();
  }
  return sheet;
}

function jsonResponse_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Optional: run once from the Apps Script editor to create headers.
 */
function setupHeaders() {
  var sheet = getSheet_();
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp",
      "Full Name",
      "Email",
      "Phone",
      "Program Interest",
      "Source",
      "Submitted At (ISO)",
    ]);
  }
}
