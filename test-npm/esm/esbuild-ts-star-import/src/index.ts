import "@melloware/coloris-npm/dist/coloris.css";
import * as Coloris from "@melloware/coloris-npm";

Coloris.init();

Coloris.coloris({
    el: "#coloris",
});

Coloris.close();

Coloris.updatePosition();

Coloris.setInstance(".foo", {});

Coloris.setInstance(".foo", {themeMode: "dark", onChange: (color: string) => {}});

Coloris.removeInstance(".foo");

if (typeof Coloris.setInstance !== "function") {
    throw new Error("setInstance not available");
}

if (typeof Coloris.removeInstance !== "function") {
    throw new Error("removeInstance not available");
}

if (typeof Coloris.updatePosition !== "function") {
    throw new Error("updatePosition not available");
}

const status = document.getElementById("status");
if (status) status.textContent = "done";
