import { setup } from "@liquality/wallet-sdk";

export function setupSDK() {
    setup({
        alchemyApiKey: 'JmoTKlpUIjzd1y5-8h-La50OewZULyL0',
        etherscanApiKey: '-',
        infuraProjectId: '-',
        pocketNetworkApplicationID: '-',
        quorum: 1,
        slowGasPriceMultiplier: 1,
        averageGasPriceMultiplier: 1.5,
        fastGasPriceMultiplier: 2,
        gasLimitMargin: 2000
    });
}

export function getPrivateKey(): string {
    return JSON.parse(localStorage.getItem("loginResponse")!).pk;
}
