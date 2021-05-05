const Block = require('./Block')

const socketListener = (socket, chain) => {
    socket.on('mine', (sender, receiver, qty) => {
        let block = new Block({sender, receiver, qty})
        chain.addNewBlock(block)
        console.info(`Block number ${block.index} just mined`)
    })
    return socket
}

module.exports = socketListener