import m from "mithril";
import stream from "mithril/stream"
import { x } from "./extra"

const a: stream<number> = stream()
const b: stream<number> = a.map(x => x + 1)

a(7)

x()

const Component = {
    view: () => {
        return m("div",
            m("div", b()),
            m("img", {src: "images/test.jpg"})
        )
    }
}
m.mount(document.body, Component);