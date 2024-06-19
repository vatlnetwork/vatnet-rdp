const gateway = () => {
  return `${document.getElementById('gateway-server-sel').value}:${document.getElementById('gateway-sel').value}`
}

const server = () => {
  return `${document.getElementById('server-sel').value}`
}

const getGatewaySelContent = () => {
  var content = '';
  for (var i = 0; i < config.gateways.length; i++) {
    var gateway = config.gateways[i]
    content += `<option value="${gateway.port}" >${gateway.name}`
  }
  return content
}

const getGatewayServerSelContent = () => {
  return `
    <option value="${config.gatewayServers.primary}"   >Primary</option>
    <option value="${config.gatewayServers.secondary}" >Secondary</option>
    <option value="${config.gatewayServers.lan}"       >LAN</option>
  `
}

const getServerSelContent = () => {
  var content = '';
  for (var i = 0; i < config.intServers.length; i++) {
    var server = config.intServers[i]
    content += `<option value="${server.address}:${server.port}" >${server.name}</option>`
  }
  for (var i = 0; i < config.extServers.length; i++) {
    var server = config.extServers[i]
    content += `<option value="${server.address}:${server.port}" >${server.name}</option>`
  }
  return content
}

const populateGatewaySel = () => {
  document.getElementById('gateway-sel').innerHTML = getGatewaySelContent();
}

const populateGatewayServerSel = () => {
  document.getElementById('gateway-server-sel').innerHTML = getGatewayServerSelContent();
}

const populateServerSel = () => {
  document.getElementById('server-sel').innerHTML = getServerSelContent();
}

const getPerformanceLink = () => {
  return `./src/int/core/rdpdirect.html?server=${server().split(':')[0]}&port=${server().split(':')[1]}&keyboard=1033&width=0&height=0&fullBrowser=Full%20browser&fullScreen=Full%20screen&server_bpp=16&timezone=Mountain%20Standard%20Time&playSound=0&soundPref=1&startProgram=noapp&smoothfont=on&=Open&clear=Clear&delete=Delete&save=Save&connect=Connect&gateway=${gateway()}`
}

const getAppearanceLink = () => {
  return `./src/int/core/rdpdirect.html?server=${server().split(':')[0]}&port=${server().split(':')[1]}&keyboard=1033&width=0&height=0&fullBrowser=Full%20browser&fullScreen=Full%20screen&server_bpp=16&timezone=Mountain%20Standard%20Time&playSound=0&soundPref=1&startProgram=noapp&background=on&smoothfont=on&composition=on&contents=on&animation=on&styles=on&bitmap=on&=Open&clear=Clear&delete=Delete&save=Save&connect=Connect&gateway=${gateway()}`
}

const getLink = () => {
  var pref = document.getElementById('vis-mode').value
  if (pref == "performance") {
    return getPerformanceLink()
  }
  if (pref == "appearance") {
    return getAppearanceLink()
  }
}

const initiateConnection = () => {
  document.getElementById('rdp-content').innerHTML = `
    <iframe src="${getLink()}" ></iframe>
  `
}

var menuCollapsed = false
const toggleMenu = () => {
  if (menuCollapsed) {
    document.getElementById('gateway-sel').style.display = ''
    document.getElementById('gateway-server-sel').style.display = ''
    document.getElementById('server-sel').style.display = ''
    document.getElementById('vis-mode').style.display = ''
    document.getElementById('reconnect').style.display = ''
    menuCollapsed = false
    return
  }
  console.log(document.getElementById('gateway-sel').style.display)
  document.getElementById('gateway-sel').style.display = 'none'
  document.getElementById('gateway-server-sel').style.display = 'none'
  document.getElementById('server-sel').style.display = 'none'
  document.getElementById('vis-mode').style.display = 'none'
  document.getElementById('reconnect').style.display = 'none'
  menuCollapsed = true
}

const checkIfHttps = () => {
  if (window.location.protocol == "https:") {
    document.getElementById("https-warning").innerHTML = "Warning! This application will not work over https!"
  }
}

window.onload = () => {
  populateGatewaySel()
  populateGatewayServerSel()
  populateServerSel()
  initiateConnection()
  checkIfHttps()
}
