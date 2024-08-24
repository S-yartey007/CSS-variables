const inputs = document.querySelectorAll(".controls input")
const inputSpacing = document.getElementById("spacing")
const inputBase = document.getElementById("base")
const inputBlur = document.getElementById("blur")


function handleChange() {
    const suffix = this.dataset.sizing || "";
    console.log(this)
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix)
}

//inputs.forEach(input => input.addEventListener("click",handleChange));
inputs.forEach(input => input.addEventListener("input",handleChange));
