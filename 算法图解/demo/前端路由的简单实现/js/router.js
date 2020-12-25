function Router() {
    this.curUrl = ''
    this.routers = {}
    this.refresh = function () {
        this.curUrl = location.hash.slice(1) || '/'
        this.routers[this.curUrl]()
    }
    this.init = function () {
        window.addEventListener('hashchange', this.refresh.bind(this))
        window.addEventListener('load', this.refresh.bind(this))
    }
    this.router = function (path,callback) {
        this.routers[path] = callback || function () {}
    }
}