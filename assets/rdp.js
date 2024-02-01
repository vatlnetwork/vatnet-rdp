const ceL2g0Jxcb3jCtCuiTslKuBbGQHHzapn = () => { return characters['01'] };
const jSL6Xc8nIdGuFiJ0X2ZGJRLByWw8efuw = () => { return characters['0110'] };
const zIHxuQg4w80M4YYn0h3wQY1EQiag6LK9 = () => { return characters['010101'] };
const tRENJppPSvaiNEA85hGuHwsoD4snJ4AP = () => { return characters['1'] };
const p2EYtfAfBhkVdqdkLqjIraa93cwri7MY = () => { return characters['1000'] };
const tjrC5GAPLPMtADdcwXGbQKOhEF4Qnj5c = () => { return characters['1010'] };
const mu5VlGFpEra5Et5VOt0OZeQmBUoEAfo7 = () => { return characters['0010'] };
const k1otblPDhcdfQM1B61tCUNBBj0E65MZi = () => { return characters['111'] };
const fZrGe8DozbIhLZLgx3tgGhQ2XY72q0hu = () => { return characters['0001'] };
const bYstHcixJhMGsic6vz0sZokZYZgyaVRp = () => { return characters['010'] };
const eJci4wllzzDMJZ5wDsuhvCT5lnPKok4f = () => { return characters['110'] };
const anWMXFjWDRN5MLWIRaXyoZl6EqWPrkRq = () => { return characters['0'] };
const pGMnzVBnMwzObTmoCyWr4LePtC8nkYzr = () => { return characters['11'] };
const kJtXsbgZyn49u1jFOGbipDzMK46Sotlb = () => { return characters['100'] };
const xCC8v5XCZmv1rp3ixhOGyXC6xvD3LqtZ = () => { return characters['0100'] };
const p21yZdAc0wA8GmBknkqxtgNWcEcKrFL5 = () => { return characters['1011'] };
const cDzf4Sj2oiHccdO4bFuqbUeXfm3mJMPG = () => { return characters['10'] };

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
      gatewayServer = '192.168.1.142';
      break;
    case 'lan': 
      gatewayServer = '192.168.1.174';
      break;
  }

  let gatewayPort = document.getElementById('gateway').value;
  server = document.getElementById('rserver').value;
  let port = '3389';
  let rdpUrl = `./rdpint/rdpdirect.html?server=${server}&port=${port}&keyboard=1033&width=0&height=0&fullBrowser=Full%20browser&fullScreen=Full%20screen&server_bpp=32&timezone=(GMT-07%3A00)%20Mountain%20Standard%20Time&playSound=0&soundPref=1&startProgram=noapp&background=on&smoothfont=on&composition=on&contents=on&animation=on&styles=on&bitmap=on&=Open&clear=Clear&delete=Delete&save=Save&connect=Connect&gateway=${gatewayServer}:${gatewayPort}`
  if (document.getElementById('performance-mode').checked) {
    rdpUrl = `./rdpint/rdpdirect.html?server=${server}&port=${port}&keyboard=1033&width=0&height=0&fullBrowser=Full%20browser&fullScreen=Full%20screen&server_bpp=16&timezone=Mountain%20Standard%20Time&playSound=0&soundPref=0&startProgram=noapp&smoothfont=on&=Open&clear=Clear&delete=Delete&save=Save&connect=Connect&gateway=${gatewayServer}:${gatewayPort}`
  }
  document.getElementById('rdpcontent').innerHTML = `
    <div id="rdpwindow" >
      <div class="rdptopbar" >
        <input type="checkbox" id="performance-mode-topbar" onchange="togglePerformanceMode()" >
        <label style="color:white;" for="performance-mode-topbar" >Performance Mode</label>
        <select id="topbar-net" onchange="selectNewNetwork()" >
          <option value="primary" >Primary</option>
          <option value="secondary" >Secondary</option>
          <option value="lan" >LAN</option>
        </select>
        <select id="topbar-server" onchange="selectNewServer()" >
          <option value="192.168.1.142" >Server 02</option>
          <option value="192.168.1.174" >Gateway</option>
          <option value="172.110.56.2" >External Server 01</option>
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
      <div id="loading" ></div>
      <iframe src="${rdpUrl}" ></iframe>
    </div>
  `
  document.getElementById('loading').innerHTML = '<h1>Downloading software...</h1>'
  localStorage.setItem('vatnet-rdp-loading', 'true')
  window.addEventListener('storage', (event) => {
    if (event.key == 'vatnet-rdp-loading' && event.newValue == 'false') {
      document.getElementById('loading').remove()
    }
  })
  document.getElementById('topbar-net').value = document.getElementById('server').value
  document.getElementById('topbar-gateway').value = document.getElementById('gateway').value
  document.getElementById('topbar-server').value = document.getElementById('rserver').value
  document.getElementById('performance-mode-topbar').checked = document.getElementById('performance-mode').checked
};

const togglePerformanceMode = () => {
  document.getElementById('performance-mode').checked = document.getElementById('performance-mode-topbar').checked
  initLogin()
}

const reconnect = () => {
  initLogin()
}

const closeRdp = () => {
  document.getElementById('rdpcontent').innerHTML = ''
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
  if (hostname != 'vatlnetwork.ddnsfree.com') { showDownload() }
  if (hostname == 'vatlnetwork.ddnsfree.com') {
    document.getElementById('info').style.color = 'red'
    document.getElementById('info').style.fontWeight = 'bold'
    document.getElementById('info').innerHTML = 'VATLNetwork RDP client is unusable over this DNS server! The gateway WILL NOT connect!'
  }
  watchTheme()
}