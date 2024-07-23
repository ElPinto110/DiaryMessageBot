const TelegramBot = require('telebot');
const cron = require('node-cron');

const TelegramTokkenBot = "6990903413:AAEGhOAkTz0PILdwaOoL_ko-PJ-dznS7AIQ" 
const IdGroup1 = "-4244211481" 
const IdGroup2 = "-4235433253"
let botActive = true; // Variable para controlar el estado del bot

// Reemplaza 'YOUR_BOT_TOKEN' con el token de tu bot
const bot = new TelegramBot(TelegramTokkenBot);


// Comando para activar el bot
bot.on("/start", (msg) => {
  botActive = true;
  bot.sendMessage(msg.chat.id, 'El bot ha sido activado.');
});

// Comando para desactivar el bot
bot.on("/stop", (msg) => {
  botActive = false;
  bot.sendMessage(msg.chat.id, 'El bot ha sido desactivado.');
});


if (botActive) {

  // Programar mensajes a las 8am de lunes a viernes
  cron.schedule('0 8 * * 1-5', () => {
    sendMessage(IdGroup1, `Buenos días, equipo! 🕡⚠️

    Se inicia la sesión de revisión de *EHS,* Tareas *MOS, Instalación* y *ATP* por el día de hoy.
    Se les recuerda las actividades obligatorias para cada visita a sitio:
    
    ✅ *Clock In* por *DU* al ingresar al sitio ☀️🕘
    
    ✅ *EHS* completo y aprobado. Aprox.20 min a partir del *"Clock In"* 
    
    ✅ *Clock out* al retirarse del sitio ☀️🕘`);
    sendMessage(IdGroup2, `Buenos días, equipo! 🕡⚠️

    Se inicia la sesión de revisión de *EHS,* Tareas *MOS, Instalación* y *ATP* por el día de hoy.
    Se les recuerda las actividades obligatorias para cada visita a sitio:
    
    ✅ *Clock In* por *DU* al ingresar al sitio ☀️🕘
    
    ✅ *EHS* completo y aprobado. Aprox.20 min a partir del *"Clock In"* 
    
    ✅ *Clock out* al retirarse del sitio ☀️🕘`);
  });

  // Programar mensajes a las 7pm de lunes a viernes
  cron.schedule('0 19 * * 1-5', () => {
    sendMessage(IdGroup1, `Buenas tardes!🕡⚠️
    'Finalizada la sesion de revision de EHS Tares MOS, Instalación y ATP por el día de hoy. 
    'Cualquier otra solicitud favor de notificarlo mañana luego de inicio de la nueva sesión
    'No enviar revisiones en *ISDP* luego de esta notificacion, por favor evitar inconvenientes innecesarios, y
    'No olviden realizar su *Clock Out* por *DU ID* 🚨
    'De antemano, Gracias!⚠️`);
    sendMessage(IdGroup2, `Buenas tardes!🕡⚠️
    'Finalizada la sesion de revision de EHS Tares MOS, Instalación y ATP por el día de hoy. 
    'Cualquier otra solicitud favor de notificarlo mañana luego de inicio de la nueva sesión
    'No enviar revisiones en *ISDP* luego de esta notificacion, por favor evitar inconvenientes innecesarios, y
    'No olviden realizar su *Clock Out* por *DU ID* 🚨
    'De antemano, Gracias!⚠️`);
  });
}

bot.start();