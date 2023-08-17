const ceL2g0Jxcb3jCtCuiTslKuBbGQHHzapn = () => { return 'a' };
const jSL6Xc8nIdGuFiJ0X2ZGJRLByWw8efuw = () => { return 'p' };
const zIHxuQg4w80M4YYn0h3wQY1EQiag6LK9 = () => { return '.' };
const tRENJppPSvaiNEA85hGuHwsoD4snJ4AP = () => { return 't' };
const p2EYtfAfBhkVdqdkLqjIraa93cwri7MY = () => {};
const tjrC5GAPLPMtADdcwXGbQKOhEF4Qnj5c = () => {};
const mu5VlGFpEra5Et5VOt0OZeQmBUoEAfo7 = () => { return 'f' };
const k1otblPDhcdfQM1B61tCUNBBj0E65MZi = () => { return 'o' };
const fZrGe8DozbIhLZLgx3tgGhQ2XY72q0hu = () => { return 'v' };
const bYstHcixJhMGsic6vz0sZokZYZgyaVRp = () => { return 'r' };
const eJci4wllzzDMJZ5wDsuhvCT5lnPKok4f = () => { return 'g' };
const anWMXFjWDRN5MLWIRaXyoZl6EqWPrkRq = () => { return 'e' };
const pGMnzVBnMwzObTmoCyWr4LePtC8nkYzr = () => { return 'm' };
const kJtXsbgZyn49u1jFOGbipDzMK46Sotlb = () => {};
const xCC8v5XCZmv1rp3ixhOGyXC6xvD3LqtZ = () => { return 'l' };
const p21yZdAc0wA8GmBknkqxtgNWcEcKrFL5 = () => { return 'y' };
const cDzf4Sj2oiHccdO4bFuqbUeXfm3mJMPG = () => { return 'n' };

const initLogin = () => {
  let server = document.getElementById('server').value;
  let gatewayServer = '';
  switch (server) {
    case 'primary': 
      gatewayServer = 
        fZrGe8DozbIhLZLgx3tgGhQ2XY72q0hu() +
        ceL2g0Jxcb3jCtCuiTslKuBbGQHHzapn() +
        tRENJppPSvaiNEA85hGuHwsoD4snJ4AP() +
        xCC8v5XCZmv1rp3ixhOGyXC6xvD3LqtZ() +
        cDzf4Sj2oiHccdO4bFuqbUeXfm3mJMPG() +
        anWMXFjWDRN5MLWIRaXyoZl6EqWPrkRq() +
        tRENJppPSvaiNEA85hGuHwsoD4snJ4AP() +
        zIHxuQg4w80M4YYn0h3wQY1EQiag6LK9() +
        pGMnzVBnMwzObTmoCyWr4LePtC8nkYzr() +
        p21yZdAc0wA8GmBknkqxtgNWcEcKrFL5() +
        mu5VlGFpEra5Et5VOt0OZeQmBUoEAfo7() +
        tRENJppPSvaiNEA85hGuHwsoD4snJ4AP() +
        jSL6Xc8nIdGuFiJ0X2ZGJRLByWw8efuw() +
        zIHxuQg4w80M4YYn0h3wQY1EQiag6LK9() +
        k1otblPDhcdfQM1B61tCUNBBj0E65MZi() +
        bYstHcixJhMGsic6vz0sZokZYZgyaVRp() +
        eJci4wllzzDMJZ5wDsuhvCT5lnPKok4f()
      ;
      break;
    case 'secondary': 
      gatewayServer = 'server01.vatlnetwork.net';
      break;
    case 'lan': 
      gatewayServer = '192.168.86.38';
      break;
  }

  let gatewayPort = document.getElementById('gateway').value;
  server = document.getElementById('rserver').value;
  let port = '3389';
  document.getElementById('loading').innerHTML = '<h1>Syncing program files...</h1>'
  document.getElementById('rdpcontent').innerHTML = `
    <iframe src="./rdpint/rdpdirect.html?server=${server}&port=${port}&keyboard=1033&width=0&height=0&fullBrowser=Full%20browser&fullScreen=Full%20screen&server_bpp=32&timezone=(GMT-07%3A00)%20Mountain%20Standard%20Time&playSound=0&soundPref=1&startProgram=noapp&background=on&smoothfont=on&composition=on&contents=on&animation=on&styles=on&bitmap=on&=Open&clear=Clear&delete=Delete&save=Save&connect=Connect&gateway=${gatewayServer}:${gatewayPort}" ></iframe>
  `
};

const openDownload = () => {
  window.open(`${window.location.origin}/john/rdp/rdp-client.zip`)
}

const showDownload = () => {
  document.getElementById('downloadbtn').style.display = 'flex'
}

window.onload = () => {
  console.log(window.location.hostname)
  let hostname = window.location.hostname
  if (hostname != 'vatnet.viewdns.net') { showDownload() }
  if (hostname == 'vatnet.viewdns.net') {
    document.getElementById('info').style.color = 'red'
    document.getElementById('info').style.fontWeight = 'bold'
    document.getElementById('info').innerHTML = 'VATLNetwork RDP client is unusable over this DNS server! The gateway WILL NOT connect!'
  }
}