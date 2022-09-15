import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = 
"0xe75c548dfba9155746f7cc241910aa76d490c5cc"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/VFVeT3J9yUX9SZs4FStpZUZSJyIUolda",
  },
};