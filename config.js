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
  caption : process.env.CAPTION || "©Venom ²⁰²⁴" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Venom ²⁰²⁴ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "TRYTØN",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Venom Md",
  ownername:process.env.OWNER_NAME|| "TRYTØN",

  sessionName:process.env.SESSION_ID || "SUHAIL_17_01_02_28_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiVUdRaFJoaEdtcHdxUnZsV0w3YXg4UkIyRWRaejBueWJMRmk1TTViaUVWdz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlZjZzR0akRXZ3pFREM5TDNKMHlLc2xIRUxycmZkckdXT3BHam1RQU93QWs9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiYUZIY29RVWlxbWEveTVSc1BDTUdLRzN1L3d4WlpiMmFGZXNndlRSMjIyOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImdiUW9XekZwbGRiZWt1Wko5MjRzMzc1VDkra0FWQmcrT0VXV2ZHVGQ2anc9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMElEQmxJTkZVamZPS0x4bWI3WHpnUjVzdk5ncjZ6RlJlV0Frek9SbG1scz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImdpRVVBZTBPd3FHS0hLZDRXT0ZxRnpDZzNYQWFtK2dCcXlIcExkM2FOMGM9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJBRTJCRkJrOFc3YVhwZEtMSE01MHNhS1c0WlUzcW13TWlOY3R1RVZDREVzPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZjN1aHpPRHlXTTE1MlBZSW10QjluU0lsbXRSWnl0M1dGaEJpSU4wOCtuaz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIxY0RPZHo1cjhXdkMxZlUxQmMySW5wODQyTG9LclJHcldycTVYRldDKzdyU2xTU0p6WCswZHpSL2JpUmRLdCtORXVQTkhxRTZsQVdmeDBuK0RIVVpBUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTk2LFwiYWR2U2VjcmV0S2V5XCI6XCJkUkVnQnVLcEJKelo0SHZBNkFhUEgzcDJtUHZCRG16VmVpNm80cDBxWXp3PVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiUWRoUnI4eG5SNUNOU2d1OHNyMDZVUVwiLFwicGhvbmVJZFwiOlwiOTdhOWZmZWYtZjkwZS00N2YyLWE5ZTctMWExOGQzMDg3NDZjXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJRR00ybkFyOVJaZEtqYmpWb2xocGRTcnZvdWM9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkFzelY5WEFmTlZHSTVSdmFKVll4dExMWU91cz1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDTmYwL0tZRUVNWE4vYTRHR0FVPVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiRHJGLzQrSkNHOXJ5QzhsUUVLSlRoUEw0RjZwS2I2RGRmdGkwajJMSllqdz1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIk52UkhsUXVEcjRLVWI0UWxvZlFETTVkMG9FQXpJejJER201YkJmMHFTS2dKNDVLRHg3WURBZktRcmtwVkNPYmJobWNDZkY2VVBqNDJhY2IyZDZhM0RnPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiSXVxREJUcUVKVzNLbHZCZi9xOFc2VEl2dEc2Tm9SbGlUSEUySGJBNXNJUElBMlhqeGRFREUyNGRDbEFsZXZwTHYzSHM2OHI2SU9NSndjWVA3L2ZHREE9PVwifSxcIm1lXCI6e1wiaWRcIjpcIjI1NDEwNTAwODM2MzoxOUBzLndoYXRzYXBwLm5ldFwiLFwibGlkXCI6XCIxMzIyOTMzODQ2MTM3OjE5QGxpZFwiLFwibmFtZVwiOlwiVFJZVMOYTlwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjI1NDEwNTAwODM2MzoxOUBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJRNnhmK1BpUWh2YThndkpVQkNpVTRUeStCZXFTbStnM1g3WXRJOWl5V0k4XCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcwOTEzOTY1NyxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFQUHJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQUCsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmQ2xEYkN6K3VkYzZGSnVNK0w0M3pUK1RXOWJmZnM1Z2JpMUc5NkErY2Y0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNTU0ODAxNDgsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcwODYyMjYzODMzNlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBQMC5qc29uIjogIntcImtleURhdGFcIjpcImxZUERCeXhUMGZuVFNGRzhWUEM3dzJhUUtkTUZSR2R3MUNkTnZ2OWlqL0U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE1NTQ4MDE0MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFAxLmpzb24iOiAie1wia2V5RGF0YVwiOlwicnF2VldEYzZ5N0ZDdEhFa3RqTXR3SUJjakxSY29WejEvMFdUMW1pTkZlZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTU1NDgwMTQzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQUDIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyaG8yOE9WYWdraDVlQnRlUTQrMUMyK2M3aUVINC9qQVkyRXNlSlBIZW5nPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNTU0ODAxNDMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDg0MzIwNDg1MDVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQUDMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIxYXVIVmJEZDgxeXJqMzRobVpEeFJrWG9FYTl5QWRCclpPbk5UeG5MV05BPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNTU0ODAxNDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBQNC5qc29uIjogIntcImtleURhdGFcIjpcInYwSTRVcG42MThxcjRVV215QWxqTTJxUlYzcW96dGpMVERRc21MMko4bFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE1NTQ4MDE0NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFA1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiekc1VUtJVDlXRElhUWZnWEtuUG1kTTdnWldYb3EwemFDd2JUeVVHSUlqTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTU1NDgwMTQ1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzA4NDM3NjI0MzQxXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFA2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNzNOT1BHRXVDNXVMU21wZ2ZMK3FpOWZ6S285U056dGFLc2twUkVxQ3FKUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTU1NDgwMTQ2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQUDcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmK05xYVB4NWhBQ3c4OVJ3c3o2aTNlUWE3MXJuQUNYRkxFeEtMZnpiOVFjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNTU0ODAxNDYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDg0MzkzNDAyNDNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQUDguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4RjRDaTBuZFV3Qzc4NC9Tak1XNXFjbFBiUEpDeWgwSjlndkt1UE14c25RPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNTU0ODAxNDcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBQOS5qc29uIjogIntcImtleURhdGFcIjpcIk1IYjlEYm5zWWpBZ2VFNVo0K2d1NGVCajNuQkVOV3RVNWEzcHJjcDQ1YTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE1NTQ4MDE0OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFBfXy5qc29uIjogIntcImtleURhdGFcIjpcIlRVaXY1ejd4cHZ1MXBaTWJHY0NJMCtIMTFFT0VEWVh3Uy8xMzlVd3l1VFE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE1NTQ4MDE0OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzA4NjI1MTkxNjM4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFByLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUFc2WFRZOGszcFVUem1IOEJxS3plTWlqRHl4R2VibWZZMXJSdnJBUVVuOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTU1NDgwMTMzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQUHMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrSDBuTnhOUWpRR3FkM2lldmd4aG9DemNPU05rMFUxUFpFNXJqemh3R25BPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNTU0ODAxMzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDgzNDU3MjQwODdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQUHQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJnSnJLVzhJQ3lLelFuMXFZc3d1eW9FL0ZMRXhZMWR2SzVlTGh4R1g5Qm9RPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNTU0ODAxMzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDgzNjA5NzYwMTBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQUHUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBbGg0SEkwcmJRYXZsamhrQStxS1c1TzFpdnhhYmJtcU0rTlNkdUVBMzlRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNTU0ODAxMzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBQdi5qc29uIjogIntcImtleURhdGFcIjpcIjc1VzlJeG5DOU0vbTI0S1NzUW9BRW1ZUEd5aTlNUlpkMVZzZWRXeU84SFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE1NTQ4MDEzOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFB3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiUVhmQXJKL3NKc2ZjWk5ETHFnZTJWQXY0NGp1VTJ2eGtkNVQyaEpnYzNhbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTU1NDgwMTM5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQUHguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6V0UzRitQSWVXdzlhNXZXbXlUSnMvMmFYUVRYWUhPUmlEcFRKODdpOTFZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNTU0ODAxMzksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDgzODEzNjc5NzRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQUHkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJraml5Ym5OR21PNmRyTExyZGJOUXZuZlpZdTA3cy9zazZiV3VoVWNCWkFJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNTU0ODAxNDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBQei5qc29uIjogIntcImtleURhdGFcIjpcIkYxUTlxOE8rcElkNFpISEpUM0UvbzN5cHNNSmlybEN0THdaS2VqclV3TlE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE1NTQ4MDE0MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzA4MzkwMDAyMzMyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFFBLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVzRselJlbjdDRFNTcnVVOWMzWmpSOFVkcncyVnlOaWdBY2s4Nkhrd0ZtTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTU1NDgwMTQ5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzA4NjczMTA2NTkxXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFFCLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaHNlQjA3QWdVOXFhcGxCNW41VEl6Y25hbFlqK2c3Snk4dzRjdnBFRkRwVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTU1NDgwMTUwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQUUMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJhMW93MVhGOU9zQ1UyeTRyc0hkM3FlRTdianRZR2pldjZYV3pJNTNSQTFBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNTU0ODAxNTEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcwODY5ODMxODE4OVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBRRC5qc29uIjogIntcImtleURhdGFcIjpcIjlHM0VwenY5ZVVPaGF2ZWd2NklkK0VUQ0s1L3lXbjBZLzlPUjFwc01RYWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE1NTQ4MDE1MSxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=",  // PUT SESSION ID HERE 
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
 
