**[HTML] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element)**

html documents are written in plain text where the elements are surrounded by tags ('<' '>') ex. 
```html
<p>
```
The start of a tag normally contains an attribute like the 'p' in the previous example. Sometimes there will be a value that follows the attribute like 
```html
<p class="value">
```
To comment something out of html you would use 
```html
<!-- This is comment text -->
```


List of [named character reference] (http://www.w3.org/html/wg/drafts/html/master/syntax.html#named-character-references): used to get a symbol to show up like > or &.


**[Global Attributes] (https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)**: Global attributes are attributes common to all HTML elements; they can be used on all elements, though the attributes may have no effect on some elements.

* **[id] (https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)**: defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS).
* **[class] (https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class)**: allows CSS and Javascript to select and access specific elements
* **[style] (https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style)**: Used in html to style a page instead of a CSS file. Syntax is the same as CSS just surround all the styles with <style> </style>.
* **[title] (https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title)**: contains a text representing advisory information related to the element it belongs to.
* **[body] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body)**: represents the content of an HTML document. There can be only one <body> element in a document.
* **[html] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html)**: epresents the root of an HTML document. All other elements must be descendants of this element.
* **[head] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)**: provides general information (metadata) about the document, including its title and links to or definitions of scripts and style sheets.
* **[!DOCTYPE] (https://developer.mozilla.org/en-US/docs/Glossary/Doctype)**: informs the browser which version of HTML (or XML) you used to write the document. Doctype is a declaration, not a tag.


**[Block-level elements] (https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)**: occupies the entire space of its parent element (container), thereby creating a "block."

* **[div] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)**: generic container for flow content, generally used to seperate sections of the HTML document into different divisions.
* **[h1, h2, h3, h4, h5, h6] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)**: Used for headings on a page. h1 is the largest font and gets smaller with each heading where h6 is the smallest.
* **[header] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)**: a group of introductory or navigational aids. It may contain some heading elements but also other elements like a logo, wrapped section's header, a search form, and so on.
* **[p] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)**: A paragragh of text.
* **[nav] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)**: Contains links to another part of the page.
* **[dl] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)**: Encloses a list of pairs of terms and descriptions.
* **[ol] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)**: Used to declare an ordered list of elements.
* **[ul] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)**: Used to declare an unordered list of elements.
* **[li] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)**: Child of ol, ul, or menu. Used to list the items.
* **[form] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)**: Part of a document that allows a user to interact with to submit information to a web server.
* **[fieldset] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset)**: Groups several controls and labels in a web form. Has an optional element of '<legend>'. 
* **[legend] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend)**: A caption for the content of its parent '<fieldset>'.
* **[table] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)**: Represents data that will be in 2 or dimensions.
* **[tbody] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody)**: The body of a table that holds thead, tr, td, tfoot.
* **[thead] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead)**: defines a set of rows defining the head of the columns of the table.
* **[tr] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr)**: A row on a table.
* **[td] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td)**: The data in a table.
* **[th] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th)**: A header in a table.
* **[tfoot] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot)**: Footer of a table.
* **[col] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col)**: A column in a table.
* **[colgroup] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup)**: a group of columns.
* **[caption] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption)**: The title of a table.




**[Inline elements] (https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elemente)**: occupies only the space bounded by the tags that define the inline element.

* **[script] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)**: used to embed or reference an executable script within an HTML or XHTML document.
* **[img] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Img)**: Tag that contains an image. This is a self closing tag
* **[input] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)**: An interactive control for web forms that allow user to input data.
* **[button] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)**: A clickable button.
* **[label] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)**: In the user interface it is a caption for an item. Can be associated with a control.
* **[textarea] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)**: Multi-line plain-text editing control.
* **[select] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)**: Control taht presents a menu options. The options are represented by '<option>' which can be grouped by '<optgroup>'.
* **[option] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)**: Used to create a control representing an item.


**Self Closing Tags**: Tags that close themselves. There's nothing that would go inbetween the tags so there's no need for a closing tag (</....>). All the information is within the the tag itself.

* **[link] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)**: a tag the links the html to another document, usually a CSS folder
* **[meta] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)**: represents any metadata information that cannot be represented by one of the other HTML meta-related elements (<base>, <link>, <script>, <style> or <title>).
