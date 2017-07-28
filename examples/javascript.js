const {Emitter} = require('event-kit')

// Extended: A container representing a panel on the edges of the editor window.
// You should not create a `Panel` directly, instead use {Workspace::addTopPanel}
// and friends to add panels.
module.exports =
class Panel {
  constructor ({ item, visible, priority, className }, viewRegistry) {
    this.destroyed = false
    this.item = item
    this.visible = visible
    this.priority = priority
    this.className = className
    this.viewRegistry = viewRegistry
    this.emitter = new Emitter()
    if (this.visible == null) this.visible = true
    if (this.priority == null) this.priority = 100
  }
}
