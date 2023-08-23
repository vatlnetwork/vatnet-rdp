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
  document.getElementById('loading').innerHTML = '<h1>Downloading software...</h1>'
  document.getElementById('rdpcontent').innerHTML = `
    <div id="rdpwindow" >
      <div class="rdptopbar" >
        <select id="topbar-net" onchange="selectNewNetwork()" >
          <option value="primary" >Primary</option>
          <option value="secondary" >Secondary</option>
          <option value="lan" >LAN</option>
        </select>
        <select id="topbar-server" onchange="selectNewServer()" >
          <option value="server02.vatlnetwork.net" >Server 02</option>
          <option value="gateway.vatlnetwork.net" >Gateway</option>
          <option value="server01.vatlnetwork.net" >Server 01</option>
        </select>
        <select id="topbar-gateway" onchange="selectNewGateway()" >
          <option value="9460" >Gateway 0</option>
          <option value="9461" >Gateway 1</option>
          <option value="9462" >Gateway 2</option>
          <option value="9463" >Gateway 3</option>
          <option value="9464" >Gateway 4</option>
          <option value="9465" >Gateway 5</option>
          <option value="9466" >Gateway 6</option>
          <option value="9467" >Gateway 7</option>
        </select>
        <button onclick="reconnect()" >Reconnect</button>
        <button class="rdpclosebtn" onclick="closeRdp()" >Close</button>
      </div>
      <iframe src="./rdpint/rdpdirect.html?server=${server}&port=${port}&keyboard=1033&width=0&height=0&fullBrowser=Full%20browser&fullScreen=Full%20screen&server_bpp=32&timezone=(GMT-07%3A00)%20Mountain%20Standard%20Time&playSound=0&soundPref=1&startProgram=noapp&background=on&smoothfont=on&composition=on&contents=on&animation=on&styles=on&bitmap=on&=Open&clear=Clear&delete=Delete&save=Save&connect=Connect&gateway=${gatewayServer}:${gatewayPort}" ></iframe>
    </div>
  `
  document.getElementById('topbar-net').value = document.getElementById('server').value
  document.getElementById('topbar-gateway').value = document.getElementById('gateway').value
  document.getElementById('topbar-server').value = document.getElementById('rserver').value
};

const reconnect = () => {
  initLogin()
}

const closeRdp = () => {
  document.getElementById('rdpcontent').innerHTML = ''
  document.getElementById('loading').innerHTML = ''
}

const selectNewServer = () => {
  document.getElementById('rserver').value = document.getElementById('topbar-server').value
  initLogin()
}

const selectNewNetwork = () => {
  document.getElementById('server').value = document.getElementById('topbar-net').value
  initLogin()
}

const selectNewGateway = () => {
  document.getElementById('gateway').value = document.getElementById('topbar-gateway').value
  initLogin()
}

const openDownload = () => {
  window.open(`${window.location.origin}/john/rdp/rdp-client.zip`)
}

const showDownload = () => {
  document.getElementById('downloadbtn').style.display = 'flex'
}

const watchTheme = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setCurrentTheme('dark')
  } else {
    setCurrentTheme('light')
  }
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',({ matches }) => {
    if (matches) {
      setCurrentTheme('dark')
    } else {
      setCurrentTheme('light')
    }
  })
}

const setCurrentTheme = (theme) => {
  document.getElementById('stylesheet').setAttribute('href', `assets/styles-${theme}.css`)
}

window.onload = () => {
  let hostname = window.location.hostname
  if (hostname != 'vatnet.viewdns.net') { showDownload() }
  if (hostname == 'vatnet.viewdns.net') {
    document.getElementById('info').style.color = 'red'
    document.getElementById('info').style.fontWeight = 'bold'
    document.getElementById('info').innerHTML = 'VATLNetwork RDP client is unusable over this DNS server! The gateway WILL NOT connect!'
  }
  watchTheme()
}