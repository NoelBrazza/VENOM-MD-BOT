const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="noelbaraza254@gmail.com"
global.location="Nairobi,Kenya."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://sixom67481:QMF41NMTDOazw0tH@cluster0.toptapq.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/NoelBrazza";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://mallucampaign.in/images/img_1709122928.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "254105008363" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254105008363";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254724085270";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254724085270,254750015109,254740273478,,254781559985,254797502419,254748469731";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Venom-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©Venom ²⁰²⁴" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "TRYTØN",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Venom Md",
  ownername:process.env.OWNER_NAME|| "TRYTØN",

  sessionName:process.env.SESSION_ID || "SUHAIL_15_11_02_28_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiS0ZyM1FISnl1Q29JTHc3SytGNGVNMllhRWpmTmRSNHd0Sk9rQzRRRDNYRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImR6Y25pK3JXci9xK0xIUzBWVFU3Z2JKREZvekttWHlwSlpRT1RnVlFEU2s9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwid01nVGVHK0RaVDJZb0FMYWM0TGtrSkJpa3FYQ2NQVm1aTGhJMmlRVmtWOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlFVZlp3U2xxY1dlVk01SWdmcU9CR2hOaS91MEd2WkN2UjlEOUR5RGtGaE09XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUU1UbnQweER5VUpTcTZSWEoxWjcyb0F0NUthN1VZbmdaME5LSFhoM1NXVT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlRrdkYrdEk3Lzd2QkF4bGkrUDVBQlI2MjVPY2FmODFwVDQyZXNsaHpnd3M9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ1Q0hia3ZGOXhiYlEyOUhmYWJyT0NKTUM4OFhXd3YxQ3ZnR3MrQU1JQ2tJPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiRlhTUDB4SGtzeFpXb1lxVUlDSThzS3ZNN1FTMjZCNzVvZ2thOGFrWGV6dz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJjT3FZWGpPKy9KbjVibmxIc3JqVEtqTmpTYUgyaTZ0TlJEL0QzR0Z6L1BkTklkV2R1OXJlZWdNRkwrd1ZoeDdqb05xdTVGWWJSMHZRSGY5SndOQmpDZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjU0LFwiYWR2U2VjcmV0S2V5XCI6XCIyVGJ2UVIzaWE2SnA1TlZPUHFONDFpK1I5TUZoRzl2cFQyQVkwanYwM3VNPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjU0NzI0MDg1MjcwQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjlBMDI1MDk1RjcyOEE4MjhFQTk3QzJERUE4RUEwRUE3XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDkxMzMwNTd9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjU0NzI0MDg1MjcwQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkJFNzNEMUQwM0YzM0EwQUQ4RTUyNkYzOTQ5MTFBNDVFXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDkxMzMwNTh9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJuRzNmWmg0QVNCNnRpVHQzVW5VdjlRXCIsXCJwaG9uZUlkXCI6XCI5NGU3M2RjZC0zOGQyLTQzY2MtYmQ5MS0wODMyODI1YmY0OWNcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInZncVVHeE5uWElqTlFRdTVOS0phWE9OREVvdz1cIn0sXCJyZWdpc3RlcmVkXCI6ZmFsc2UsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiY3Jod2hkR1g2S0ZQY1hKd0V3dS9NRVpUOTF3PVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNQNjE2LzRHRVBtWi9hNEdHQUVnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiVHYzTE9KTnZLYUlrS21xY0R2OFRRMFZrdE5UMGNXRlNERHVoZHpoTmdYMD1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIjNsQzdjdzViRUZ3NS9MY0VjZmFGR0ZVRG5mb3BReHNvK3F1c0tkOWN0VUNjaXM0ZkFCQ2VjUGw2dnFOb1hHeHJGUGQ4NVFEby8vbEpya1BTNm5kcUFBPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwieDdoK01wYWk1YmtFNG50TnlJUFAzd0lnbVlwZFhycW9Idm9HNU1KTGpnbk0yTHpDeVNCVjUrcWRIelRhUkJoVzd6OThpY2MvVVZLeG4yVUsxREZRQmc9PVwifSxcIm1lXCI6e1wiaWRcIjpcIjI1NDcyNDA4NTI3MDozNEBzLndoYXRzYXBwLm5ldFwiLFwibGlkXCI6XCIyMzY5OTY3MzE2MDkzMDA6MzRAbGlkXCIsXCJuYW1lXCI6XCJUcnl0b25cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyNTQ3MjQwODUyNzA6MzRAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCVTc5eXppVGJ5bWlKQ3BxbkE3L0UwTkZaTFRVOUhGaFVndzdvWGM0VFlGOVwifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MDkxMzMwNTMsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBUE9EXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUE9DLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVUxHU3IxanVRTUhCbldOSSttL1lUUldQS0crS3ZLcndFMzc5RHFtK3dtZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODc2NjEzODg0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQT0QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrbHQ3T1B3U0haaHBJbHhuMlg3Ry9ITktMMFZ2ZE15eVpabVNJaHhXcENjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NzY2MTM4ODQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcwOTExOTQyNDg0NlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBPRS5qc29uIjogIntcImtleURhdGFcIjpcImpOM0ZPQXVrc1ZqWDFPQy9EYWtFbENxbGFyUEtDc3VmMUVXT2pnTnVYZFE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg3NjYxMzg4NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "Error",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
