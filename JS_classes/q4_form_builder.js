// Q4: Custom Form Builder (browser: runner.html?q=q4_form_builder)
class FormBuilder {
  constructor(fields, container) {
    this.fields = fields;       // array of {type, label, options?}
    this.container = container; // element to render into
    this.render();
  }

  // Build the form HTML dynamically using innerHTML
  render() {
    const fieldsHtml = this.fields.map((f, i) => {
      let control;
      if (f.type === "select") {
        control = `<select id="field-${i}">${(f.options || []).map((o) => `<option>${o}</option>`).join("")}</select>`;
      } else if (f.type === "textarea") {
        control = `<textarea id="field-${i}"></textarea>`;
      } else if (f.type === "checkbox") {
        control = `<input type="checkbox" id="field-${i}">`;
      } else {
        control = `<input type="${f.type}" id="field-${i}">`;
      }
      return `<div style="margin-bottom:10px"><label>${f.label}<br>${control}</label></div>`;
    }).join("");

    this.container.innerHTML = `<form id="built-form">${fieldsHtml}<button type="submit">Submit</button></form><pre id="output"></pre>`;
    this.container.querySelector("#built-form").addEventListener("submit", (e) => {
      e.preventDefault();
      this.container.querySelector("#output").textContent = JSON.stringify(this.getFormData(), null, 2);
    });
  }

  // Return all entered values as { label: value }
  getFormData() {
    const data = {};
    this.fields.forEach((f, i) => {
      const el = this.container.querySelector(`#field-${i}`);
      data[f.label] = f.type === "checkbox" ? el.checked : el.value;
    });
    return data;
  }
}

document.body.style.fontFamily = "sans-serif";
const root = document.createElement("div");
root.style.cssText = "max-width:380px;margin:30px auto";
document.body.appendChild(root);

new FormBuilder([
  { type: "text", label: "Username" },
  { type: "email", label: "Email" },
  { type: "password", label: "Password" },
  { type: "number", label: "Age" },
  { type: "select", label: "Country", options: ["India", "USA", "UK"] },
  { type: "textarea", label: "Bio" },
  { type: "checkbox", label: "Subscribe to newsletter" },
], root);
