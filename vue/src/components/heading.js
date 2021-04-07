export default {
  name: 'heading',
  data () {
    return {
      level: 1
    }
  },
  render (h) {
    return h('h' + this.level, [
      h('a', {
        attrs: {
          name: 'headerId',
          href: '#' + 'headerId'
        }
      }, 'this is a tag')
    ])
  }
}
