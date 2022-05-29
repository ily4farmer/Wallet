import { providers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";

export const metamask = async():Promise<any> => {
    if ((window as any).ethereum) {
        const provider = new providers.Web3Provider((window as any).ethereum)
        await provider.send("eth_requestAccounts", [])
        const signer = provider.getSigner();
        const wallet = await signer.getAddress()
        
        return {wallet}
    }
}

export const wc = async():Promise<any> => {
    const provider = new WalletConnectProvider({
        // infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
        qrcode: true,
        rpc: { 
            97: 'https://data-seed-prebsc-1-s1.binance.org:8545/', 
            3: "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
        },
      });
      
    //   //  Enable session (triggers QR Code modal)
      await provider.enable();
    // await provider.disconnect()
      const web3Provider = new providers.Web3Provider(provider);
      const signer = web3Provider.getSigner();
      const wallet = await signer.getAddress();

      return {wallet}
      
} 