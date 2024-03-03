import { FakeServer } from "./service/FakeServer"
const server = new FakeServer

/**
 * Independent wait for latency imitation
 */
function wait(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export async function makeGameDescriptionRequest() {
    // high latency on this initial request makes no sense for this demo anyways 
    await wait(Math.random() * 100)
    return server.getGameDescription()
}

export async function makeBetRequest({
    betPerLine,
    linesCount,
    desiredReels,
    riskOption,
    specialSymbolId
}) {
    await wait(Math.random() * 2000)

    return server.makeBet({
        betPerLine,
        linesCount,
        desiredReels: desiredReels?.map(reel => reel.map(id => id)),
        riskOption,
        specialSymbolId
    })
}

export async function makeRiskRequest(option) {
    await wait(Math.random() * 2000)

    return server.makeRisk(option)
}