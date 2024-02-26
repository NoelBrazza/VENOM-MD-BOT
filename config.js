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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Naitobi";
global.github=process.env.GITHUB|| "https://github.com/NoelBrazza";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



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
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
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

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "TRYTØN",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "TRYTØN",

  sessionName:process.env.SESSION_ID || "SUHAIL_11_23_02_26_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiaUJzVUtMZnJaWUJ6MnFiK0p4OTR4TjFUSHQ1RjVFTlo3Qzd0K1FRV1cwTT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlIwQW14WDlxSEovOS9Ub3B5bW1HVERMR2dLcVFmZnZrcU9PZVA0Y2twV2c9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQ0hHaXJyU1ZHQVRrYW5kTVF1K05nOXB4bE04WFVySlk1KzFRTTdKQzBYZz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInkvOVVFRHJzRTdBUURMT0Y2cHpsM0x1TFNYYXVWUEFYaFR4cndLWEpiMTA9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwicUNPM0s5TGR6SDg3ZXUyTHFoMUR4VzYxd1pEOTBHeWxGWEloeGxJRjlXWT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlVBejc4K2FWVVJsYy9YbTQ0cGhJRzU0RFhUTHk2UUhrb2VVSzJ0MEg2V3c9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJxQWh2Y1lNS2hMV09JdElmaFUwMlR1eEVsVWcvUEJmMjZ0cElKU3E0UkdVPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQXlSR0lmUitrOXVnUkVnejQ3S0RkSUVHVFFXclA0Mmlya29QZ1lNdm1Bdz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJMb2xzd3RhODV1WkozYjhRTktOQUF0cDdzL2ZLcXVDZStCcGtueng4NUwxY1pBQnBBbjh0YVl6L1BkR3E4dG10RW13UGR3UzRnc2VmL3NPdGpuOXJoUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTYsXCJhZHZTZWNyZXRLZXlcIjpcInZiQ1BJU0lZRzhmekxNNHltd0tKSjJNczRJN00vN0dmdWNXK3dkMTlPQWc9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbXSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjAsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJldkRIUnJKZVJaV0N3MGN5MEZqbXdRXCIsXCJwaG9uZUlkXCI6XCI0N2IyZmQwMC1iZGFlLTQzZTUtOTg2My0xMmRkZTRmZWZjY2JcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkg4K0Ntb2N4ajJnU0hSSm1aYkVBS0xtUnN3OD1cIn0sXCJyZWdpc3RlcmVkXCI6ZmFsc2UsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwic0lKb1pFbFRqSkhMZitXSzVYVzhiUlIyQTZRPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNOZjAvS1lFRUtIcDhhNEdHQVE9XCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCJEckYvNCtKQ0c5cnlDOGxRRUtKVGhQTDRGNnBLYjZEZGZ0aTBqMkxKWWp3PVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwiMDk0Mk02YjJmLy9wZE5rQnJVTGxHREFrNkxFbENPOCtNVmwvMlFYNDIrWDU1bGRuaEg3VmhpZXMyTVY3dDQxcE9XU3JyTU1kTUwwQjl4TXRnUVUxQUE9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCJQTXhSbVVyS3VXcVJvWkp1WmVEM0l3WHBjdEZsQ0k3VUNDWkRaNGNUQUllUjB3ODVkbk9YZHgzbmVVNTRITVF3YS95ZWR6RDZOVnJkR2d0cDJ1dmtoQT09XCJ9LFwibWVcIjp7XCJpZFwiOlwiMjU0MTA1MDA4MzYzOjE4QHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjEzMjI5MzM4NDYxMzc6MThAbGlkXCIsXCJuYW1lXCI6XCJUUllUw5hOXCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjU0MTA1MDA4MzYzOjE4QHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQlE2eGYrUGlRaHZhOGd2SlVCQ2lVNFR5K0JlcVNtK2czWDdZdEk5aXlXSThcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzA4OTQ2NTk3LFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQVBQclwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBQKy5qc29uIjogIntcImtleURhdGFcIjpcImZDbERiQ3ordWRjNkZKdU0rTDQzelQrVFc5YmZmczVnYmkxRzk2QStjZjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE1NTQ4MDE0OCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzA4NjIyNjM4MzM2XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFAwLmpzb24iOiAie1wia2V5RGF0YVwiOlwibFlQREJ5eFQwZm5UU0ZHOFZQQzd3MmFRS2RNRlJHZHcxQ2ROdnY5aWovRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTU1NDgwMTQyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQUDEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJycXZWV0RjNnk3RkN0SEVrdGpNdHdJQmNqTFJjb1Z6MS8wV1QxbWlORmVnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNTU0ODAxNDMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBQMi5qc29uIjogIntcImtleURhdGFcIjpcInJobzI4T1ZhZ2toNWVCdGVRNCsxQzIrYzdpRUg0L2pBWTJFc2VKUEhlbmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE1NTQ4MDE0MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcwODQzMjA0ODUwNVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBQMy5qc29uIjogIntcImtleURhdGFcIjpcIjFhdUhWYkRkODF5cmozNGhtWkR4UmtYb0VhOXlBZEJyWk9uTlR4bkxXTkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE1NTQ4MDE0NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFA0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwidjBJNFVwbjYxOHFyNFVXbXlBbGpNMnFSVjNxb3p0akxURFFzbUwySjhsVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTU1NDgwMTQ1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQUDUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6RzVVS0lUOVdESWFRZmdYS25QbWRNN2daV1hvcTB6YUN3YlR5VUdJSWpNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNTU0ODAxNDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDg0Mzc2MjQzNDFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQUDYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3M05PUEdFdUM1dUxTbXBnZkwrcWk5ZnpLbzlTTnp0YUtza3BSRXFDcUpRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNTU0ODAxNDYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBQNy5qc29uIjogIntcImtleURhdGFcIjpcImYrTnFhUHg1aEFDdzg5UndzejZpM2VRYTcxcm5BQ1hGTEV4S0xmemI5UWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE1NTQ4MDE0NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcwODQzOTM0MDI0M1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBQOC5qc29uIjogIntcImtleURhdGFcIjpcInhGNENpMG5kVXdDNzg0L1NqTVc1cWNsUGJQSkN5aDBKOWd2S3VQTXhzblE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE1NTQ4MDE0NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFA5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTUhiOURibnNZakFnZUU1WjQrZ3U0ZUJqM25CRU5XdFU1YTNwcmNwNDVhOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTU1NDgwMTQ4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQUF9fLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVFVpdjV6N3hwdnUxcFpNYkdjQ0kwK0gxMUVPRURZWHdTLzEzOVV3eXVUUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTU1NDgwMTQ5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDg2MjUxOTE2MzhcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQUHIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJQVzZYVFk4azNwVVR6bUg4QnFLemVNaWpEeXhHZWJtZlkxclJ2ckFRVW44PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNTU0ODAxMzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBQcy5qc29uIjogIntcImtleURhdGFcIjpcIitIMG5OeE5RalFHcWQzaWV2Z3hob0N6Y09TTmswVTFQWkU1cmp6aHdHbkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE1NTQ4MDEzMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcwODM0NTcyNDA4N1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBQdC5qc29uIjogIntcImtleURhdGFcIjpcImdKcktXOElDeUt6UW4xcVlzd3V5b0UvRkxFeFkxZHZLNWVMaHhHWDlCb1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE1NTQ4MDEzNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcwODM2MDk3NjAxMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBQdS5qc29uIjogIntcImtleURhdGFcIjpcIkFsaDRISTByYlFhdmxqaGtBK3FLVzVPMWl2eGFiYm1xTStOU2R1RUEzOVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE1NTQ4MDEzOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFB2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNzVXOUl4bkM5TS9tMjRLU3NRb0FFbVlQR3lpOU1SWmQxVnNlZFd5TzhIWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTU1NDgwMTM4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQUHcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRWGZBckovc0pzZmNaTkRMcWdlMlZBdjQ0anVVMnZ4a2Q1VDJoSmdjM2FvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNTU0ODAxMzksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBQeC5qc29uIjogIntcImtleURhdGFcIjpcInpXRTNGK1BJZVd3OWE1dldteVRKcy8yYVhRVFhZSE9SaURwVEo4N2k5MVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE1NTQ4MDEzOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcwODM4MTM2Nzk3NFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBQeS5qc29uIjogIntcImtleURhdGFcIjpcImtqaXlibk5HbU82ZHJMTHJkYk5Rdm5mWll1MDdzL3NrNmJXdWhVY0JaQUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE1NTQ4MDE0MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFB6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiRjFROXE4TytwSWQ0WkhISlQzRS9vM3lwc01KaXJsQ3RMd1pLZWpyVXdOUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTU1NDgwMTQxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDgzOTAwMDIzMzJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQUUEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXNGx6UmVuN0NEU1NydVU5YzNaalI4VWRydzJWeU5pZ0Fjazg2SGt3Rm1NPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNTU0ODAxNDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDg2NzMxMDY1OTFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQUUIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoc2VCMDdBZ1U5cWFwbEI1bjVUSXpjbmFsWWorZzdKeTh3NGN2cEVGRHBVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNTU0ODAxNTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBRQy5qc29uIjogIntcImtleURhdGFcIjpcImExb3cxWEY5T3NDVTJ5NHJzSGQzcWVFN2JqdFlHamV2NlhXekk1M1JBMUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE1NTQ4MDE1MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzA4Njk4MzE4MTg5XCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
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
 
