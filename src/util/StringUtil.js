export default {
  htmlToClearText = (html) => {
    if (html && html.length) {
      html = html.replace(/&nbsp;/g, ""); // replace space entity
      html = html.replace(/\s+/g, " "); // replace more than one space by only one.
      html = html.replace(/<\/?[^>]+(>|$)/g, ""); // replace HTML tags
      return html;
    }
    return "";
  },

  toUpperCaseFirstChar = (text) => {
    return text.toLowerCase().toLowerCase().replace(/\b[a-z]/g, function (letter) {
      return letter.toUpperCase();
    });
  },

  removeSlash = (str) => {
    if (!str) return '';
    str = str.trim()
    return str.replace(/\/$/, "");
  }
}