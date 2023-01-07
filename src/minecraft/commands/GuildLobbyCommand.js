const MinecraftCommand = require('../../contracts/MinecraftCommand')

class GuildLobbyCommand extends MinecraftCommand {
  constructor(minecraft) {
    super(minecraft)

    this.name = 'fragrun'
    this.aliases = ['fr']
    this.description = "why are you here"
  }

  onCommand(username, _message) {
    let text = "godlike cheese";
    this.send(`/p ${username} ;`)
    var e = new Date().getTime() + (2 * 1000);
    while (new Date().getTime() <= e) {}
    this.send(`/p transfer ${username}`)
    var s = new Date().getTime() + (10 * 1000);
    while (new Date().getTime() <= s) {}
    this.send(`/p leave`)

  }
}

module.exports = GuildLobbyCommand
