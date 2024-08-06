const config = {
  intServers: [
    {
      name: "Windows",
      address: "192.168.1.142",
      port: 3389,
    },
  ],
  extServers: [
  ],
  gateways: [
    {
      name: "Gateway 0",
      port: 9460,
    },
    {
      name: "Gateway 1",
      port: 9461,
    },
    {
      name: "Gateway 2",
      port: 9462,
    },
    {
      name: "Gateway 3",
      port: 9463,
    },
    {
      name: "Gateway 4",
      port: 9464,
    },
    {
      name: "Gateway 5",
      port: 9465,
    },
    {
      name: "Gateway 6",
      port: 9466,
    },
    {
      name: "Gateway 7",
      port: 9467,
    },
  ],
  gatewayServers: {
    primary: encryption(),
    secondary: "192.168.1.142",
    lan: "192.168.1.142",
  },
};
