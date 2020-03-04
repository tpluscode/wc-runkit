customElements.define('run-kit', class extends HTMLElement {
  connectedCallback () {
    const root = this.attachShadow({
      mode: 'open'
    })
    const style = document.createElement('style')
    style.innerHTML = `:host {
      display: block;
    }`

    root.appendChild(document.createElement('slot'))
    root.appendChild(style)

    if (!window.RunKit) {
      const runkitScript = document.createElement('script')
      runkitScript.setAttribute('src', 'https://embed.runkit.com')
      runkitScript.onload = this.__init.bind(this)
      document.head.appendChild(runkitScript)
    } else {
      this.__init()
    }
  }

  __init () {
    const code = this.querySelector('pre')

    this.runKit = RunKit.createNotebook({
      element: this,
      gutterStyle: 'inside',
      source: code.textContent.trim()
    })

    this.runKit.onLoad = () => code.remove()
  }
})
